declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    /**
                     * Thrown when a blocking receive operation is performed but the consumeOk
                     * was not received before the receive timeout. Consider increasing the
                     * receive timeout.
                     * @author Gary Russell
                     * @since 2.0
                     */
                    // @ts-ignore
                    class ConsumeOkNotReceivedException extends AmqpException {
                        // @ts-ignore
                        constructor(message: java.lang.String | string)
                    }
                }
            }
        }
    }
}
