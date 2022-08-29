package io.kotest.engine.spec.interceptor

import io.kotest.common.flatMap
import io.kotest.core.config.ProjectConfiguration
import io.kotest.core.spec.Spec
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestResult
import io.kotest.engine.listener.TestEngineListener
import io.kotest.engine.spec.SpecExtensions
import io.kotest.engine.tags.isActive
import io.kotest.engine.tags.parse
import io.kotest.engine.tags.runtimeTagExpression

/**
 * A [SpecInterceptor] that skips this [Spec] if it contains inline tags which don't satisfy
 * the current tag expression.
 */
class InlineTagSpecInterceptor(
   private val listener: TestEngineListener,
   private val projectConfiguration: ProjectConfiguration,
) : SpecInterceptor {

   private val extensions = SpecExtensions(projectConfiguration.registry)

   override suspend fun intercept(
      spec: Spec,
      fn: suspend (Spec) -> Result<Map<TestCase, TestResult>>
   ): Result<Map<TestCase, TestResult>> {
      val alltags = spec.tags() + spec.appliedTags()
      val active = projectConfiguration.runtimeTagExpression().parse().isActive(alltags)
      return if (active) fn(spec) else {
         val reason = "Ignored due to tags in spec: ${alltags.joinToString(", ")}"
         runCatching { listener.specIgnored(spec::class, reason) }
            .flatMap { extensions.ignored(spec::class, reason) }
            .map { emptyMap() }
      }
   }
}

