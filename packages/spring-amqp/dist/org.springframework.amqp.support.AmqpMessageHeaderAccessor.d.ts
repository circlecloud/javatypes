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
                    constructor(nativeHeaders: java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>)
                    // @ts-ignore
                    constructor(message: object)
                    // @ts-ignore
                    public static readonly PRIORITY: java.lang.String | string
                    /**
                     * Create a {@link AmqpMessageHeaderAccessor} from the headers of an existing message.
                     * @param message the {#link Message} to be wrapped for this
                     *  {@link org.springframework.messaging.support.MessageHeaderAccessor}.
                     * @return the {#link AmqpMessageHeaderAccessor} instance.
                     */
                    // @ts-ignore
                    public static wrap(message: object): org.springframework.amqp.support.AmqpMessageHeaderAccessor
                    // @ts-ignore
                    verifyType(headerName: java.lang.String | string, headerValue: java.lang.Object | any): void
                    // @ts-ignore
                    public getAppId(): string
                    // @ts-ignore
                    public getClusterId(): string
                    // @ts-ignore
                    public getContentEncoding(): string
                    // @ts-ignore
                    public getContentLength(): number
                    // @ts-ignore
                    public getContentType(): MimeType
                    // @ts-ignore
                    public getCorrelationId(): string
                    // @ts-ignore
                    public getDeliveryMode(): org.springframework.amqp.core.MessageDeliveryMode
                    // @ts-ignore
                    public getReceivedDeliveryMode(): org.springframework.amqp.core.MessageDeliveryMode
                    // @ts-ignore
                    public getDeliveryTag(): number
                    // @ts-ignore
                    public getExpiration(): string
                    // @ts-ignore
                    public getMessageCount(): number
                    // @ts-ignore
                    public getMessageId(): string
                    // @ts-ignore
                    public getPriority(): number
                    // @ts-ignore
                    public getReceivedExchange(): string
                    // @ts-ignore
                    public getReceivedRoutingKey(): string
                    // @ts-ignore
                    public getReceivedUserId(): string
                    // @ts-ignore
                    public getRedelivered(): java.lang.Boolean
                    // @ts-ignore
                    public getReplyTo(): string
                    // @ts-ignore
                    public getTimestamp(): number
                    // @ts-ignore
                    public getType(): string
                    // @ts-ignore
                    public getUserId(): string
                    // @ts-ignore
                    public getConsumerTag(): string
                    // @ts-ignore
                    public getConsumerQueue(): string
                }
            }
        }
    }
}
