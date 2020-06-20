declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Exception thrown in an RPC scenario if the request message cannot be delivered when
                 * the mandatory flag is set.
                 * @author Gary Russell
                 * @since 1.5
                 */
                // @ts-ignore
                class AmqpMessageReturnedException extends org.springframework.amqp.AmqpException {
                    // @ts-ignore
                    constructor(message: string, returnedMessage: org.springframework.amqp.core.Message, replyCode: number /*int*/, replyText: string, exchange: string, routingKey: string)
                    // @ts-ignore
                    getReturnedMessage(): org.springframework.amqp.core.Message
                    // @ts-ignore
                    getReplyCode(): int
                    // @ts-ignore
                    getReplyText(): java.lang.String
                    // @ts-ignore
                    getExchange(): java.lang.String
                    // @ts-ignore
                    getRoutingKey(): java.lang.String
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
