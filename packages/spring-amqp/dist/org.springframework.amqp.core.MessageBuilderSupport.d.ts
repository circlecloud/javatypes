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
                class MessageBuilderSupport<T> extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(properties: org.springframework.amqp.core.MessageProperties)
                    // @ts-ignore
                    setProperties(properties: org.springframework.amqp.core.MessageProperties): void
                    // @ts-ignore
                    setHeader(key: string, value: any): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setTimestamp(timestamp: java.util.Date): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setMessageId(messageId: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setUserId(userId: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setAppId(appId: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setClusterId(clusterId: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setType(type: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setCorrelationId(correlationId: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setReplyTo(replyTo: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setReplyToAddress(replyTo: org.springframework.amqp.core.Address): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setContentType(contentType: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setContentEncoding(contentEncoding: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setContentLength(contentLength: number /*long*/): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setDeliveryMode(deliveryMode: org.springframework.amqp.core.MessageDeliveryMode): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setExpiration(expiration: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setPriority(priority: number): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setReceivedExchange(receivedExchange: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setReceivedRoutingKey(receivedRoutingKey: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setRedelivered(redelivered: java.lang.Boolean): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setDeliveryTag(deliveryTag: number): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setMessageCount(messageCount: number): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setHeaderIfAbsent(key: string, value: any): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setTimestampIfAbsent(timestamp: java.util.Date): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setMessageIdIfAbsent(messageId: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setUserIdIfAbsent(userId: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setAppIdIfAbsent(appId: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setClusterIdIfAbsent(clusterId: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setTypeIfAbsent(type: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setCorrelationIdIfAbsent(correlationId: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setReplyToIfAbsent(replyTo: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setReplyToAddressIfAbsent(replyTo: org.springframework.amqp.core.Address): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setContentTypeIfAbsentOrDefault(contentType: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setContentEncodingIfAbsent(contentEncoding: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setContentLengthIfAbsent(contentLength: number /*long*/): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setDeliveryModeIfAbsentOrDefault(deliveryMode: org.springframework.amqp.core.MessageDeliveryMode): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setExpirationIfAbsent(expiration: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setPriorityIfAbsentOrDefault(priority: number): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setReceivedExchangeIfAbsent(receivedExchange: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setReceivedRoutingKeyIfAbsent(receivedRoutingKey: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setRedeliveredIfAbsent(redelivered: java.lang.Boolean): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setDeliveryTagIfAbsent(deliveryTag: number): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    setMessageCountIfAbsent(messageCount: number): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    copyProperties(properties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    copyHeaders(headers: java.util.Map<java.lang.String, java.lang.Object>): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    copyHeadersIfAbsent(headers: java.util.Map<java.lang.String, java.lang.Object>): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    removeHeader(key: string): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    removeHeaders(): org.springframework.amqp.core.MessageBuilderSupport<T>
                    // @ts-ignore
                    buildProperties(): org.springframework.amqp.core.MessageProperties
                    // @ts-ignore
                    abstract build(): T
                }
            }
        }
    }
}
