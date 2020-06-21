declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    /**
                     * Convenient base class for interceptor factories.
                     * @author Dave Syer
                     */
                    // @ts-ignore
                    abstract class AbstractRetryOperationsInterceptorFactoryBean extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setRetryOperations(retryTemplate: RetryOperations): void
                        // @ts-ignore
                        public setMessageRecoverer(messageRecoverer: org.springframework.amqp.rabbit.retry.MessageRecoverer): void
                        // @ts-ignore
                        getRetryOperations(): RetryOperations
                        // @ts-ignore
                        getMessageRecoverer(): org.springframework.amqp.rabbit.retry.MessageRecoverer
                        // @ts-ignore
                        public isSingleton(): boolean
                    }
                }
            }
        }
    }
}
