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
                    constructor(message: java.lang.String | string, returnedMessage: org.springframework.amqp.core.Message, replyCode: number /*int*/, replyText: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string)
                    // @ts-ignore
                    getReturnedMessage(): org.springframework.amqp.core.Message
                    // @ts-ignore
                    getReplyCode(): number /*int*/
                    // @ts-ignore
                    getReplyText(): string
                    // @ts-ignore
                    getExchange(): string
                    // @ts-ignore
                    getRoutingKey(): string
                    // @ts-ignore
                    toString(): string
                }
            }
        }
    }
}
