declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    /**
                     * <p>Simplified facade to make it easier and simpler to build a
                     * {@link StatefulRetryOperationsInterceptor} or
                     * (stateless) {@link RetryOperationsInterceptor}
                     * by providing a fluent interface to defining the behavior on error.
                     * <p>
                     * Typical example:
                     * </p>
                     * <pre class="code">
                     * StatefulRetryOperationsInterceptor interceptor =
                     * RetryInterceptorBuilder.stateful()
                     * .maxAttempts(5)
                     * .backOffOptions(1, 2, 10) // initialInterval, multiplier, maxInterval
                     * .build();
                     * </pre>
                     * <p>
                     * When building a stateful interceptor, a message identifier is required.
                     * The default behavior determines message identity based on {@code messageId}.
                     * This isn't a required field and may not be set by the sender.
                     * If it is not, you can change the logic to determine message
                     * identity using a custom generator:</p>
                     * <pre class="code">
                     * StatefulRetryOperationsInterceptor interceptor = RetryInterceptorBuilder.stateful()
                     * .messageKeyGenerator(new MyMessageKeyGenerator())
                     * .build();
                     * </pre>
                     * @param <B> The target {#link RetryInterceptorBuilder} implementation type.
                     * @param <T> The type of {#link MethodInterceptor} returned by the builder's {@link #build()} method.
                     * @author James Carr
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @since 1.3
                     */
                    // @ts-ignore
                    abstract class RetryInterceptorBuilder<B extends org.springframework.amqp.rabbit.config.RetryInterceptorBuilder<B, T>, T extends MethodInterceptor> extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a builder for a stateful retry interceptor.
                         * @return The interceptor builder.
                         */
                        // @ts-ignore
                        public static stateful(): org.springframework.amqp.rabbit.config.RetryInterceptorBuilder.StatefulRetryInterceptorBuilder
                        /**
                         * Create a builder for a stateless retry interceptor.
                         * @return The interceptor builder.
                         */
                        // @ts-ignore
                        public static stateless(): org.springframework.amqp.rabbit.config.RetryInterceptorBuilder.StatelessRetryInterceptorBuilder
                        // @ts-ignore
                        _this(): B
                        /**
                         * Apply the retry operations - once this is set, other properties can no longer be set; can't
                         * be set if other properties have been applied.
                         * @param retryOperations The retry operations.
                         * @return this.
                         */
                        // @ts-ignore
                        public retryOperations(retryOperations: RetryOperations): B
                        /**
                         * Apply the max attempts - a SimpleRetryPolicy will be used. Cannot be used if a custom retry operations
                         * or retry policy has been set.
                         * @param maxAttempts the max attempts.
                         * @return this.
                         */
                        // @ts-ignore
                        public maxAttempts(maxAttempts: number /*int*/): B
                        /**
                         * Apply the backoff options. Cannot be used if a custom retry operations, or back off policy has been set.
                         * @param initialInterval The initial interval.
                         * @param multiplier The multiplier.
                         * @param maxInterval The max interval.
                         * @return this.
                         */
                        // @ts-ignore
                        public backOffOptions(initialInterval: number /*long*/, multiplier: number /*double*/, maxInterval: number /*long*/): B
                        /**
                         * Apply the retry policy - cannot be used if a custom retry template has been provided, or the max attempts or
                         * back off options or policy have been applied.
                         * @param policy The policy.
                         * @return this.
                         */
                        // @ts-ignore
                        public retryPolicy(policy: RetryPolicy): B
                        /**
                         * Apply the back off policy. Cannot be used if a custom retry operations, or back off policy has been applied.
                         * @param policy The policy.
                         * @return this.
                         */
                        // @ts-ignore
                        public backOffPolicy(policy: BackOffPolicy): B
                        /**
                         * Apply a Message recoverer - default is to log and discard after retry is exhausted.
                         * @param recoverer The recoverer.
                         * @return this.
                         */
                        // @ts-ignore
                        public recoverer(recoverer: org.springframework.amqp.rabbit.retry.MessageRecoverer): B
                        // @ts-ignore
                        applyCommonSettings(factoryBean: org.springframework.amqp.rabbit.config.AbstractRetryOperationsInterceptorFactoryBean): void
                        // @ts-ignore
                        public abstract build(): T
                    }
                }
            }
        }
    }
}
