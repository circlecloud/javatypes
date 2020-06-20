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
                    readonly CONTENT_TYPE_BYTES: string
                    // @ts-ignore
                    readonly CONTENT_TYPE_TEXT_PLAIN: string
                    // @ts-ignore
                    readonly CONTENT_TYPE_SERIALIZED_OBJECT: string
                    // @ts-ignore
                    readonly CONTENT_TYPE_JSON: string
                    // @ts-ignore
                    readonly CONTENT_TYPE_JSON_ALT: string
                    // @ts-ignore
                    readonly CONTENT_TYPE_XML: string
                    // @ts-ignore
                    readonly SPRING_BATCH_FORMAT: string
                    // @ts-ignore
                    readonly BATCH_FORMAT_LENGTH_HEADER4: string
                    // @ts-ignore
                    readonly SPRING_AUTO_DECOMPRESS: string
                    // @ts-ignore
                    readonly X_DELAY: string
                    // @ts-ignore
                    readonly DEFAULT_CONTENT_TYPE: string
                    // @ts-ignore
                    readonly DEFAULT_DELIVERY_MODE: org.springframework.amqp.core.MessageDeliveryMode
                    // @ts-ignore
                    readonly DEFAULT_PRIORITY: number
                    // @ts-ignore
                    setHeader(key: string, value: any): void
                    // @ts-ignore
                    getHeaders(): java.util.Map<java.lang.String, java.lang.Object>
                    // @ts-ignore
                    setTimestamp(timestamp: java.util.Date): void
                    // @ts-ignore
                    getTimestamp(): java.util.Date
                    // @ts-ignore
                    setMessageId(messageId: string): void
                    // @ts-ignore
                    getMessageId(): java.lang.String
                    // @ts-ignore
                    setUserId(userId: string): void
                    // @ts-ignore
                    getUserId(): java.lang.String
                    /**
                     * Return the user id from an incoming message.
                     * @return the user id.
                     * @since 1.6
                     */
                    // @ts-ignore
                    getReceivedUserId(): java.lang.String
                    // @ts-ignore
                    setReceivedUserId(receivedUserId: string): void
                    // @ts-ignore
                    setAppId(appId: string): void
                    // @ts-ignore
                    getAppId(): java.lang.String
                    // @ts-ignore
                    setClusterId(clusterId: string): void
                    // @ts-ignore
                    getClusterId(): java.lang.String
                    // @ts-ignore
                    setType(type: string): void
                    // @ts-ignore
                    getType(): java.lang.String
                    /**
                     * Set the correlation id.
                     * @param correlationId the id.
                     */
                    // @ts-ignore
                    setCorrelationId(correlationId: string): void
                    /**
                     * Get the correlation id.
                     * @return the id.
                     */
                    // @ts-ignore
                    getCorrelationId(): java.lang.String
                    // @ts-ignore
                    setReplyTo(replyTo: string): void
                    // @ts-ignore
                    getReplyTo(): java.lang.String
                    // @ts-ignore
                    setReplyToAddress(replyTo: org.springframework.amqp.core.Address): void
                    // @ts-ignore
                    getReplyToAddress(): org.springframework.amqp.core.Address
                    // @ts-ignore
                    setContentType(contentType: string): void
                    // @ts-ignore
                    getContentType(): java.lang.String
                    // @ts-ignore
                    setContentEncoding(contentEncoding: string): void
                    // @ts-ignore
                    getContentEncoding(): java.lang.String
                    // @ts-ignore
                    setContentLength(contentLength: number /*long*/): void
                    // @ts-ignore
                    getContentLength(): long
                    // @ts-ignore
                    isContentLengthSet(): boolean
                    // @ts-ignore
                    setDeliveryMode(deliveryMode: org.springframework.amqp.core.MessageDeliveryMode): void
                    // @ts-ignore
                    getDeliveryMode(): org.springframework.amqp.core.MessageDeliveryMode
                    // @ts-ignore
                    getReceivedDeliveryMode(): org.springframework.amqp.core.MessageDeliveryMode
                    // @ts-ignore
                    setReceivedDeliveryMode(receivedDeliveryMode: org.springframework.amqp.core.MessageDeliveryMode): void
                    // @ts-ignore
                    setExpiration(expiration: string): void
                    // @ts-ignore
                    getExpiration(): java.lang.String
                    // @ts-ignore
                    setPriority(priority: number): void
                    // @ts-ignore
                    getPriority(): java.lang.Integer
                    // @ts-ignore
                    setReceivedExchange(receivedExchange: string): void
                    // @ts-ignore
                    getReceivedExchange(): java.lang.String
                    // @ts-ignore
                    setReceivedRoutingKey(receivedRoutingKey: string): void
                    // @ts-ignore
                    getReceivedRoutingKey(): java.lang.String
                    /**
                     * When a delayed message exchange is used the x-delay header on a
                     * received message contains the delay.
                     * @return the received delay.
                     * @since 1.6
                     * @see #getDelay()
                     */
                    // @ts-ignore
                    getReceivedDelay(): java.lang.Integer
                    /**
                     * When a delayed message exchange is used the x-delay header on a
                     * received message contains the delay.
                     * @param receivedDelay the received delay.
                     * @since 1.6
                     */
                    // @ts-ignore
                    setReceivedDelay(receivedDelay: number): void
                    // @ts-ignore
                    setRedelivered(redelivered: java.lang.Boolean): void
                    // @ts-ignore
                    isRedelivered(): java.lang.Boolean
                    // @ts-ignore
                    getRedelivered(): java.lang.Boolean
                    // @ts-ignore
                    setDeliveryTag(deliveryTag: number /*long*/): void
                    // @ts-ignore
                    getDeliveryTag(): long
                    // @ts-ignore
                    isDeliveryTagSet(): boolean
                    /**
                     * Set the message count.
                     * @param messageCount the count
                     * @see #getMessageCount()
                     */
                    // @ts-ignore
                    setMessageCount(messageCount: number): void
                    /**
                     * Return the server's most recent estimate of the number of messages remaining on the queue.
                     * Only applies to messages retrieved via {@code basicGet}.
                     * @return the count.
                     */
                    // @ts-ignore
                    getMessageCount(): java.lang.Integer
                    // @ts-ignore
                    getConsumerTag(): java.lang.String
                    // @ts-ignore
                    setConsumerTag(consumerTag: string): void
                    // @ts-ignore
                    getConsumerQueue(): java.lang.String
                    // @ts-ignore
                    setConsumerQueue(consumerQueue: string): void
                    /**
                     * The x-delay header (outbound).
                     * @return the delay.
                     * @since 1.6
                     * @see #getReceivedDelay()
                     */
                    // @ts-ignore
                    getDelay(): java.lang.Integer
                    /**
                     * Set the x-delay header.
                     * @param delay the delay.
                     * @since 1.6
                     */
                    // @ts-ignore
                    setDelay(delay: number): void
                    // @ts-ignore
                    isFinalRetryForMessageWithNoId(): boolean
                    // @ts-ignore
                    setFinalRetryForMessageWithNoId(finalRetryForMessageWithNoId: boolean): void
                    /**
                     * Return the publish sequence number if publisher confirms are enabled; set by the template.
                     * @return the sequence number.
                     * @since 2.1
                     */
                    // @ts-ignore
                    getPublishSequenceNumber(): long
                    /**
                     * Set the publish sequence number, if publisher confirms are enabled; set by the template.
                     * @param publishSequenceNumber the sequence number.
                     * @since 2.1
                     */
                    // @ts-ignore
                    setPublishSequenceNumber(publishSequenceNumber: number /*long*/): void
                    /**
                     * The inferred target argument type when using a method-level
                     * {@code @RabbitListener}.
                     * @return the type.
                     * @since 1.6
                     */
                    // @ts-ignore
                    getInferredArgumentType(): java.lang.reflect.Type
                    /**
                     * Set the inferred target argument type when using a method-level
                     * {@code @RabbitListener}.
                     * @param inferredArgumentType the type.
                     * @since 1.6
                     */
                    // @ts-ignore
                    setInferredArgumentType(inferredArgumentType: java.lang.reflect.Type): void
                    /**
                     * The target method when using a method-level {@code @RabbitListener}.
                     * @return the method.
                     * @since 1.6
                     */
                    // @ts-ignore
                    getTargetMethod(): java.lang.reflect.Method
                    /**
                     * Set the target method when using a method-level {@code @RabbitListener}.
                     * @param targetMethod the target method.
                     * @since 1.6
                     */
                    // @ts-ignore
                    setTargetMethod(targetMethod: java.lang.reflect.Method): void
                    /**
                     * The target bean when using {@code @RabbitListener}.
                     * @return the bean.
                     * @since 1.6
                     */
                    // @ts-ignore
                    getTargetBean(): java.lang.Object
                    /**
                     * Set the target bean when using {@code @RabbitListener}.
                     * @param targetBean the bean.
                     * @since 1.6
                     */
                    // @ts-ignore
                    setTargetBean(targetBean: any): void
                    /**
                     * Return the x-death header.
                     * @return the header.
                     */
                    // @ts-ignore
                    getXDeathHeader(): java.util.List<java.util.Map<java.lang.String, ?>>
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    equals(obj: any): boolean
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
