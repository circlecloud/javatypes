declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    namespace RetryInterceptorBuilder {
                        /**
                         * Builder for a stateful interceptor.
                         */
                        // @ts-ignore
                        class StatefulRetryInterceptorBuilder extends org.springframework.amqp.rabbit.config.RetryInterceptorBuilder<org.springframework.amqp.rabbit.config.RetryInterceptorBuilder.StatefulRetryInterceptorBuilder, StatefulRetryOperationsInterceptor> {
                            /**
                             * Stateful retry requires messages to be identifiable. Default is to use the message id header; use a custom
                             * implementation if the message id is not present or not reliable.
                             * @param messageKeyGenerator The key generator.
                             * @return this.
                             */
                            // @ts-ignore
                            public messageKeyGenerator(messageKeyGenerator: org.springframework.amqp.rabbit.retry.MessageKeyGenerator): org.springframework.amqp.rabbit.config.RetryInterceptorBuilder.StatefulRetryInterceptorBuilder
                            /**
                             * Apply a custom new message identifier. Default is to use the redelivered header.
                             * @param newMessageIdentifier The new message identifier.
                             * @return this.
                             */
                            // @ts-ignore
                            public newMessageIdentifier(newMessageIdentifier: org.springframework.amqp.rabbit.retry.NewMessageIdentifier): org.springframework.amqp.rabbit.config.RetryInterceptorBuilder.StatefulRetryInterceptorBuilder
                            // @ts-ignore
                            public build(): StatefulRetryOperationsInterceptor
                        }
                    }
                }
            }
        }
    }
}
