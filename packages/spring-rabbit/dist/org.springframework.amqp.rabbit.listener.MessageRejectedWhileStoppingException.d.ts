declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * Exception class that indicates a rejected message on shutdown. Used to trigger a rollback for an
                     * external transaction manager in that case.
                     */
                    // @ts-ignore
                    class MessageRejectedWhileStoppingException extends AmqpException {
                        // @ts-ignore
                        constructor()
                    }
                }
            }
        }
    }
}
