declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Support class for building {@link Message} and {@link MessageProperties}
                 * fluent API.
                 * @param <T> The message builder type.
                 * @author Gary Russell
                 * @since 1.3
                 */
                // @ts-ignore
                abstract class MessageBuilderSupport<T> extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(properties: org.springframework.amqp.core.MessageProperties)
                    // @ts-ignore
                    setProperties(properties: org.springframework.amqp.core.MessageProperties): void
                    // @ts-ignore
                    public setHeader(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setTimestamp(timestamp: java.util.Date): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setMessageId(messageId: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setUserId(userId: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setAppId(appId: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setClusterId(clusterId: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setType(type: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setCorrelationId(correlationId: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setReplyTo(replyTo: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setReplyToAddress(replyTo: org.springframework.amqp.core.Address): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setContentType(contentType: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setContentEncoding(contentEncoding: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setContentLength(contentLength: number /*long*/): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setDeliveryMode(deliveryMode: org.springframework.amqp.core.MessageDeliveryMode): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setExpiration(expiration: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setPriority(priority: java.lang.Integer | number): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setReceivedExchange(receivedExchange: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setReceivedRoutingKey(receivedRoutingKey: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setRedelivered(redelivered: java.lang.Boolean): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setDeliveryTag(deliveryTag: java.lang.Long | number): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setMessageCount(messageCount: java.lang.Integer | number): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setHeaderIfAbsent(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setTimestampIfAbsent(timestamp: java.util.Date): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setMessageIdIfAbsent(messageId: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setUserIdIfAbsent(userId: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setAppIdIfAbsent(appId: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setClusterIdIfAbsent(clusterId: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setTypeIfAbsent(type: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setCorrelationIdIfAbsent(correlationId: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setReplyToIfAbsent(replyTo: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setReplyToAddressIfAbsent(replyTo: org.springframework.amqp.core.Address): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setContentTypeIfAbsentOrDefault(contentType: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setContentEncodingIfAbsent(contentEncoding: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setContentLengthIfAbsent(contentLength: number /*long*/): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setDeliveryModeIfAbsentOrDefault(deliveryMode: org.springframework.amqp.core.MessageDeliveryMode): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setExpirationIfAbsent(expiration: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setPriorityIfAbsentOrDefault(priority: java.lang.Integer | number): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setReceivedExchangeIfAbsent(receivedExchange: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setReceivedRoutingKeyIfAbsent(receivedRoutingKey: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setRedeliveredIfAbsent(redelivered: java.lang.Boolean): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setDeliveryTagIfAbsent(deliveryTag: java.lang.Long | number): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public setMessageCountIfAbsent(messageCount: java.lang.Integer | number): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public copyProperties(properties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public copyHeaders(headers: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public copyHeadersIfAbsent(headers: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public removeHeader(key: java.lang.String | string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    public removeHeaders(): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    buildProperties(): org.springframework.amqp.core.MessageProperties
                    // @ts-ignore
                    public abstract build(): T
                }
            }
        }
    }
}
