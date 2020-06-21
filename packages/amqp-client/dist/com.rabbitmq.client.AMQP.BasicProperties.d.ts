declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                // @ts-ignore
                class BasicProperties extends com.rabbitmq.client.impl.AMQBasicProperties {
                    // @ts-ignore
                    constructor(contentType: java.lang.String | string, contentEncoding: java.lang.String | string, headers: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliveryMode: java.lang.Integer | number, priority: java.lang.Integer | number, correlationId: java.lang.String | string, replyTo: java.lang.String | string, expiration: java.lang.String | string, messageId: java.lang.String | string, timestamp: java.util.Date, type: java.lang.String | string, userId: java.lang.String | string, appId: java.lang.String | string, clusterId: java.lang.String | string)
                    // @ts-ignore
                    constructor(input: java.io.DataInputStream)
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getClassId(): number /*int*/
                    // @ts-ignore
                    public getClassName(): string
                    // @ts-ignore
                    public equals(o: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public builder(): com.rabbitmq.client.AMQP.BasicProperties.Builder
                    // @ts-ignore
                    public getContentType(): string
                    // @ts-ignore
                    public getContentEncoding(): string
                    // @ts-ignore
                    public getHeaders(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public getDeliveryMode(): number
                    // @ts-ignore
                    public getPriority(): number
                    // @ts-ignore
                    public getCorrelationId(): string
                    // @ts-ignore
                    public getReplyTo(): string
                    // @ts-ignore
                    public getExpiration(): string
                    // @ts-ignore
                    public getMessageId(): string
                    // @ts-ignore
                    public getTimestamp(): java.util.Date
                    // @ts-ignore
                    public getType(): string
                    // @ts-ignore
                    public getUserId(): string
                    // @ts-ignore
                    public getAppId(): string
                    // @ts-ignore
                    public getClusterId(): string
                    // @ts-ignore
                    public writePropertiesTo(writer: com.rabbitmq.client.impl.ContentHeaderPropertyWriter): void
                    // @ts-ignore
                    public appendPropertyDebugStringTo(acc: java.lang.StringBuilder): void
                }
            }
        }
    }
}
