declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                /**
                 * A {@link org.springframework.messaging.support.MessageHeaderAccessor}
                 * implementation giving access to AMQP-specific headers.
                 * @author Stephane Nicoll
                 * @author Gary Russell
                 * @since 1.4
                 */
                // @ts-ignore
                class AmqpMessageHeaderAccessor extends NativeMessageHeaderAccessor {
                    // @ts-ignore
                    constructor(nativeHeaders: java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
                    // @ts-ignore
                    constructor(message: object)
                    // @ts-ignore
                    readonly PRIORITY: string
                    /**
                     * Create a {@link AmqpMessageHeaderAccessor} from the headers of an existing message.
                     * @param message the {#link Message} to be wrapped for this
                     *  {@link org.springframework.messaging.support.MessageHeaderAccessor}.
                     * @return the {#link AmqpMessageHeaderAccessor} instance.
                     */
                    // @ts-ignore
                    wrap(message: object): org.springframework.amqp.support.AmqpMessageHeaderAccessor
                    // @ts-ignore
                    verifyType(headerName: string, headerValue: any): void
                    // @ts-ignore
                    getAppId(): java.lang.String
                    // @ts-ignore
                    getClusterId(): java.lang.String
                    // @ts-ignore
                    getContentEncoding(): java.lang.String
                    // @ts-ignore
                    getContentLength(): java.lang.Long
                    // @ts-ignore
                    getContentType(): MimeType
                    // @ts-ignore
                    getCorrelationId(): java.lang.String
                    // @ts-ignore
                    getDeliveryMode(): org.springframework.amqp.core.MessageDeliveryMode
                    // @ts-ignore
                    getReceivedDeliveryMode(): org.springframework.amqp.core.MessageDeliveryMode
                    // @ts-ignore
                    getDeliveryTag(): java.lang.Long
                    // @ts-ignore
                    getExpiration(): java.lang.String
                    // @ts-ignore
                    getMessageCount(): java.lang.Integer
                    // @ts-ignore
                    getMessageId(): java.lang.String
                    // @ts-ignore
                    getPriority(): java.lang.Integer
                    // @ts-ignore
                    getReceivedExchange(): java.lang.String
                    // @ts-ignore
                    getReceivedRoutingKey(): java.lang.String
                    // @ts-ignore
                    getReceivedUserId(): java.lang.String
                    // @ts-ignore
                    getRedelivered(): java.lang.Boolean
                    // @ts-ignore
                    getReplyTo(): java.lang.String
                    // @ts-ignore
                    getTimestamp(): java.lang.Long
                    // @ts-ignore
                    getType(): java.lang.String
                    // @ts-ignore
                    getUserId(): java.lang.String
                    // @ts-ignore
                    getConsumerTag(): java.lang.String
                    // @ts-ignore
                    getConsumerQueue(): java.lang.String
                }
            }
        }
    }
}
