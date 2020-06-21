declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace retry {
                    /**
                     * MessageRecover that causes the listener container to reject
                     * the message without requeuing. This enables failed messages
                     * to be sent to a Dead Letter Exchange/Queue, if the broker is
                     * so configured.
                     * @author Gary Russell
                     * @since 1.1.2
                     */
                    // @ts-ignore
                    class RejectAndDontRequeueRecoverer extends java.lang.Object implements org.springframework.amqp.rabbit.retry.MessageRecoverer {
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
