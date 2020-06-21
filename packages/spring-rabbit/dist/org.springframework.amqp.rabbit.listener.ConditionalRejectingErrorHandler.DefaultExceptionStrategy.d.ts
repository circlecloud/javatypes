declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    namespace ConditionalRejectingErrorHandler {
                        /**
                         * Default implementation of {@link FatalExceptionStrategy}.
                         * @since 1.6.3
                         */
                        // @ts-ignore
                        class DefaultExceptionStrategy extends java.lang.Object implements org.springframework.amqp.rabbit.listener.FatalExceptionStrategy {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            readonly logger: Log
                            // @ts-ignore
                            public isFatal(t: java.lang.Throwable | Error): boolean
                            /**
                             * Subclasses can override this to add custom exceptions.
                             * @param cause the cause
                             * @return true if the cause is fatal.
                             */
                            // @ts-ignore
                            isUserCauseFatal(cause: java.lang.Throwable | Error): boolean
                        }
                    }
                }
            }
        }
    }
}
