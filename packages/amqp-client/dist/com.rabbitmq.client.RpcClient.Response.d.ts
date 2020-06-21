declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace RpcClient {
                /**
                 * The response object is an envelope that contains all of the data provided to the `handleDelivery` consumer
                 */
                // @ts-ignore
                class Response extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(consumerTag: java.lang.String | string, envelope: com.rabbitmq.client.Envelope, properties: com.rabbitmq.client.AMQP.BasicProperties, body: number /*byte*/[])
                    // @ts-ignore
                    consumerTag: java.lang.String | string
                    // @ts-ignore
                    envelope: com.rabbitmq.client.Envelope
                    // @ts-ignore
                    properties: com.rabbitmq.client.AMQP.BasicProperties
                    // @ts-ignore
                    body: number /*byte*/[]
                    // @ts-ignore
                    public getConsumerTag(): string
                    // @ts-ignore
                    public getEnvelope(): com.rabbitmq.client.Envelope
                    // @ts-ignore
                    public getProperties(): com.rabbitmq.client.AMQP.BasicProperties
                    // @ts-ignore
                    public getBody(): number /*byte*/[]
                }
            }
        }
    }
}
