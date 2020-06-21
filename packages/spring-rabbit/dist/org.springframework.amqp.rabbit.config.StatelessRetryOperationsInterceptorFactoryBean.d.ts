declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    /**
                     * Convenient factory bean for creating a stateless retry interceptor for use in a message listener container, giving
                     * you a large amount of control over the behaviour of a container when a listener fails. To control the number of retry
                     * attempt or the backoff in between attempts, supply a customized {@link RetryTemplate}. Stateless retry is appropriate
                     * if your listener can be called repeatedly between failures with no side effects. The semantics of stateless retry
                     * mean that a listener exception is not propagated to the container until the retry attempts are exhausted. When the
                     * retry attempts are exhausted it can be processed using a {@link MessageRecoverer} if one is provided, in the same
                     * transaction (in which case no exception is propagated). If a recoverer is not provided the exception will be
                     * propagated and the message may be redelivered if the channel is transactional.
                     * @author Dave Syer
                     * @author Gary Russell
                     * @see RetryOperations#execute(org.springframework.retry.RetryCallback, org.springframework.retry.RecoveryCallback)
                     */
                    // @ts-ignore
                    class StatelessRetryOperationsInterceptorFactoryBean extends org.springframework.amqp.rabbit.config.AbstractRetryOperationsInterceptorFactoryBean {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getObject(): RetryOperationsInterceptor
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
