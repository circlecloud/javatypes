declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Message Properties for an AMQP message.
                 * @author Mark Fisher
                 * @author Mark Pollack
                 * @author Gary Russell
                 * @author Dmitry Chernyshov
                 * @author Artem Bilan
                 * @author Csaba Soti
                 */
                // @ts-ignore
                class MessageProperties extends java.lang.Object implements java.io.Serializable {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly CONTENT_TYPE_BYTES: java.lang.String | string
                    // @ts-ignore
                    public static readonly CONTENT_TYPE_TEXT_PLAIN: java.lang.String | string
                    // @ts-ignore
                    public static readonly CONTENT_TYPE_SERIALIZED_OBJECT: java.lang.String | string
                    // @ts-ignore
                    public static readonly CONTENT_TYPE_JSON: java.lang.String | string
                    // @ts-ignore
                    public static readonly CONTENT_TYPE_JSON_ALT: java.lang.String | string
                    // @ts-ignore
                    public static readonly CONTENT_TYPE_XML: java.lang.String | string
                    // @ts-ignore
                    public static readonly SPRING_BATCH_FORMAT: java.lang.String | string
                    // @ts-ignore
                    public static readonly BATCH_FORMAT_LENGTH_HEADER4: java.lang.String | string
                    // @ts-ignore
                    public static readonly SPRING_AUTO_DECOMPRESS: java.lang.String | string
                    // @ts-ignore
                    public static readonly X_DELAY: java.lang.String | string
                    // @ts-ignore
                    public static readonly DEFAULT_CONTENT_TYPE: java.lang.String | string
                    // @ts-ignore
                    public static readonly DEFAULT_DELIVERY_MODE: org.springframework.amqp.core.MessageDeliveryMode
                    // @ts-ignore
                    public static readonly DEFAULT_PRIORITY: java.lang.Integer | number
                    // @ts-ignore
                    public setHeader(key: java.lang.String | string, value: java.lang.Object | any): void
                    // @ts-ignore
                    public getHeaders(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public setTimestamp(timestamp: java.util.Date): void
                    // @ts-ignore
                    public getTimestamp(): java.util.Date
                    // @ts-ignore
                    public setMessageId(messageId: java.lang.String | string): void
                    // @ts-ignore
                    public getMessageId(): string
                    // @ts-ignore
                    public setUserId(userId: java.lang.String | string): void
                    // @ts-ignore
                    public getUserId(): string
                    /**
                     * Return the user id from an incoming message.
                     * @return the user id.
                     * @since 1.6
                     */
                    // @ts-ignore
                    public getReceivedUserId(): string
                    // @ts-ignore
                    public setReceivedUserId(receivedUserId: java.lang.String | string): void
                    // @ts-ignore
                    public setAppId(appId: java.lang.String | string): void
                    // @ts-ignore
                    public getAppId(): string
                    // @ts-ignore
                    public setClusterId(clusterId: java.lang.String | string): void
                    // @ts-ignore
                    public getClusterId(): string
                    // @ts-ignore
                    public setType(type: java.lang.String | string): void
                    // @ts-ignore
                    public getType(): string
                    /**
                     * Set the correlation id.
                     * @param correlationId the id.
                     */
                    // @ts-ignore
                    public setCorrelationId(correlationId: java.lang.String | string): void
                    /**
                     * Get the correlation id.
                     * @return the id.
                     */
                    // @ts-ignore
                    public getCorrelationId(): string
                    // @ts-ignore
                    public setReplyTo(replyTo: java.lang.String | string): void
                    // @ts-ignore
                    public getReplyTo(): string
                    // @ts-ignore
                    public setReplyToAddress(replyTo: org.springframework.amqp.core.Address): void
                    // @ts-ignore
                    public getReplyToAddress(): org.springframework.amqp.core.Address
                    // @ts-ignore
                    public setContentType(contentType: java.lang.String | string): void
                    // @ts-ignore
                    public getContentType(): string
                    // @ts-ignore
                    public setContentEncoding(contentEncoding: java.lang.String | string): void
                    // @ts-ignore
                    public getContentEncoding(): string
                    // @ts-ignore
                    public setContentLength(contentLength: number /*long*/): void
                    // @ts-ignore
                    public getContentLength(): number /*long*/
                    // @ts-ignore
                    isContentLengthSet(): boolean
                    // @ts-ignore
                    public setDeliveryMode(deliveryMode: org.springframework.amqp.core.MessageDeliveryMode): void
                    // @ts-ignore
                    public getDeliveryMode(): org.springframework.amqp.core.MessageDeliveryMode
                    // @ts-ignore
                    public getReceivedDeliveryMode(): org.springframework.amqp.core.MessageDeliveryMode
                    // @ts-ignore
                    public setReceivedDeliveryMode(receivedDeliveryMode: org.springframework.amqp.core.MessageDeliveryMode): void
                    // @ts-ignore
                    public setExpiration(expiration: java.lang.String | string): void
                    // @ts-ignore
                    public getExpiration(): string
                    // @ts-ignore
                    public setPriority(priority: java.lang.Integer | number): void
                    // @ts-ignore
                    public getPriority(): number
                    // @ts-ignore
                    public setReceivedExchange(receivedExchange: java.lang.String | string): void
                    // @ts-ignore
                    public getReceivedExchange(): string
                    // @ts-ignore
                    public setReceivedRoutingKey(receivedRoutingKey: java.lang.String | string): void
                    // @ts-ignore
                    public getReceivedRoutingKey(): string
                    /**
                     * When a delayed message exchange is used the x-delay header on a
                     * received message contains the delay.
                     * @return the received delay.
                     * @since 1.6
                     * @see #getDelay()
                     */
                    // @ts-ignore
                    public getReceivedDelay(): number
                    /**
                     * When a delayed message exchange is used the x-delay header on a
                     * received message contains the delay.
                     * @param receivedDelay the received delay.
                     * @since 1.6
                     */
                    // @ts-ignore
                    public setReceivedDelay(receivedDelay: java.lang.Integer | number): void
                    // @ts-ignore
                    public setRedelivered(redelivered: java.lang.Boolean): void
                    // @ts-ignore
                    public isRedelivered(): java.lang.Boolean
                    // @ts-ignore
                    public getRedelivered(): java.lang.Boolean
                    // @ts-ignore
                    public setDeliveryTag(deliveryTag: number /*long*/): void
                    // @ts-ignore
                    public getDeliveryTag(): number /*long*/
                    // @ts-ignore
                    isDeliveryTagSet(): boolean
                    /**
                     * Set the message count.
                     * @param messageCount the count
                     * @see #getMessageCount()
                     */
                    // @ts-ignore
                    public setMessageCount(messageCount: java.lang.Integer | number): void
                    /**
                     * Return the server's most recent estimate of the number of messages remaining on the queue.
                     * Only applies to messages retrieved via {@code basicGet}.
                     * @return the count.
                     */
                    // @ts-ignore
                    public getMessageCount(): number
                    // @ts-ignore
                    public getConsumerTag(): string
                    // @ts-ignore
                    public setConsumerTag(consumerTag: java.lang.String | string): void
                    // @ts-ignore
                    public getConsumerQueue(): string
                    // @ts-ignore
                    public setConsumerQueue(consumerQueue: java.lang.String | string): void
                    /**
                     * The x-delay header (outbound).
                     * @return the delay.
                     * @since 1.6
                     * @see #getReceivedDelay()
                     */
                    // @ts-ignore
                    public getDelay(): number
                    /**
                     * Set the x-delay header.
                     * @param delay the delay.
                     * @since 1.6
                     */
                    // @ts-ignore
                    public setDelay(delay: java.lang.Integer | number): void
                    // @ts-ignore
                    public isFinalRetryForMessageWithNoId(): boolean
                    // @ts-ignore
                    public setFinalRetryForMessageWithNoId(finalRetryForMessageWithNoId: boolean): void
                    /**
                     * Return the publish sequence number if publisher confirms are enabled; set by the template.
                     * @return the sequence number.
                     * @since 2.1
                     */
                    // @ts-ignore
                    public getPublishSequenceNumber(): number /*long*/
                    /**
                     * Set the publish sequence number, if publisher confirms are enabled; set by the template.
                     * @param publishSequenceNumber the sequence number.
                     * @since 2.1
                     */
                    // @ts-ignore
                    public setPublishSequenceNumber(publishSequenceNumber: number /*long*/): void
                    /**
                     * The inferred target argument type when using a method-level
                     * {@code @RabbitListener}.
                     * @return the type.
                     * @since 1.6
                     */
                    // @ts-ignore
                    public getInferredArgumentType(): java.lang.reflect.Type
                    /**
                     * Set the inferred target argument type when using a method-level
                     * {@code @RabbitListener}.
                     * @param inferredArgumentType the type.
                     * @since 1.6
                     */
                    // @ts-ignore
                    public setInferredArgumentType(inferredArgumentType: java.lang.reflect.Type): void
                    /**
                     * The target method when using a method-level {@code @RabbitListener}.
                     * @return the method.
                     * @since 1.6
                     */
                    // @ts-ignore
                    public getTargetMethod(): java.lang.reflect.Method
                    /**
                     * Set the target method when using a method-level {@code @RabbitListener}.
                     * @param targetMethod the target method.
                     * @since 1.6
                     */
                    // @ts-ignore
                    public setTargetMethod(targetMethod: java.lang.reflect.Method): void
                    /**
                     * The target bean when using {@code @RabbitListener}.
                     * @return the bean.
                     * @since 1.6
                     */
                    // @ts-ignore
                    public getTargetBean(): any
                    /**
                     * Set the target bean when using {@code @RabbitListener}.
                     * @param targetBean the bean.
                     * @since 1.6
                     */
                    // @ts-ignore
                    public setTargetBean(targetBean: java.lang.Object | any): void
                    /**
                     * Return the x-death header.
                     * @return the header.
                     */
                    // @ts-ignore
                    public getXDeathHeader(): Array<java.util.Map<java.lang.String | string, any>>
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
