declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace support {
                    /**
                     * Thrown when the broker cancels the consumer and the message
                     * queue is drained.
                     * @author Gary Russell
                     * @since 1.0.1
                     */
                    // @ts-ignore
                    class ConsumerCancelledException extends java.lang.RuntimeException {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(cause: java.lang.Throwable | Error)
                    }
                }
            }
        }
    }
}
