declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Async reply timeout.
                 * @author Gary Russell
                 * @since 1.6
                 */
                // @ts-ignore
                class AmqpReplyTimeoutException extends org.springframework.amqp.AmqpException {
                    // @ts-ignore
                    constructor(message: string, requestMessage: org.springframework.amqp.core.Message)
                    // @ts-ignore
                    getRequestMessage(): org.springframework.amqp.core.Message
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
