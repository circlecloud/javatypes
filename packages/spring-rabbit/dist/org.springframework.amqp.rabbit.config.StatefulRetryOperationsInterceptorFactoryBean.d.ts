declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    /**
                     * Convenient factory bean for creating a stateful retry interceptor for use in a message listener container, giving you
                     * a large amount of control over the behaviour of a container when a listener fails. To control the number of retry
                     * attempt or the backoff in between attempts, supply a customized {@link RetryTemplate}. Stateful retry is appropriate
                     * if your listener is using a transactional resource that needs to be rollback on an exception (e.g. a stateful
                     * connection to a back end server). JPA is the canonical example. The semantics of stateful retry mean that a listener
                     * exception is propagated to the container, so that it can force a rollback. When the message is redelivered it has to
                     * be recognised (hence the {@link MessageKeyGenerator} strategy), and when the retry attempts are exhausted it will be
                     * processed using a {@link MessageRecoverer} if one is provided, in a new transaction. If a recoverer is not provided
                     * the message will be logged and dropped.
                     * @author Dave Syer
                     * @author Gary Russell
                     * @see RetryOperations#execute(org.springframework.retry.RetryCallback, org.springframework.retry.RecoveryCallback,
                     *  org.springframework.retry.RetryState)
                     */
                    // @ts-ignore
                    class StatefulRetryOperationsInterceptorFactoryBean extends org.springframework.amqp.rabbit.config.AbstractRetryOperationsInterceptorFactoryBean {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setMessageKeyGenerator(messageKeyGeneretor: org.springframework.amqp.rabbit.retry.MessageKeyGenerator): void
                        // @ts-ignore
                        public setNewMessageIdentifier(newMessageIdentifier: org.springframework.amqp.rabbit.retry.NewMessageIdentifier): void
                        // @ts-ignore
                        public getObject(): StatefulRetryOperationsInterceptor
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        // @ts-ignore
                        public isSingleton(): boolean
                    }
                }
            }
        }
    }
}
