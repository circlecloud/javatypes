declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace retry {
                    /**
                     * The {@link MessageRecoverer} implementation to throw an {@link ImmediateRequeueAmqpException}
                     * for subsequent requeuing in the listener container.
                     * @author Artem Bilan
                     * @author Gary Russell
                     * @since 2.1
                     */
                    // @ts-ignore
                    class ImmediateRequeueMessageRecoverer extends java.lang.Object implements org.springframework.amqp.rabbit.retry.MessageRecoverer {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        logger: Log
                        // @ts-ignore
                        public recover(message: Message, cause: java.lang.Throwable | Error): void
                    }
                }
            }
        }
    }
}
