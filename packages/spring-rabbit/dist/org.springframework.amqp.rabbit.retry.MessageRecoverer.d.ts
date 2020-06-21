declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace retry {
                    /**
                     * @author Dave Syer
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    interface MessageRecoverer {
                        /**
                         * Callback for message that was consumed but failed all retry attempts.
                         * @param message the message to recover
                         * @param cause the cause of the error
                         */
                        // @ts-ignore
                        recover(message: Message, cause: java.lang.Throwable | Error): void
                    }
                }
            }
        }
    }
}
