declare namespace com {
    namespace rabbitmq {
        namespace client {
            // @ts-ignore
            class Return extends java.lang.Object {
                // @ts-ignore
                constructor(replyCode: number /*int*/, replyText: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, properties: com.rabbitmq.client.AMQP.BasicProperties, body: number /*byte*/[])
                // @ts-ignore
                public getReplyCode(): number /*int*/
                // @ts-ignore
                public getReplyText(): string
                // @ts-ignore
                public getExchange(): string
                // @ts-ignore
                public getRoutingKey(): string
                // @ts-ignore
                public getProperties(): com.rabbitmq.client.AMQP.BasicProperties
                // @ts-ignore
                public getBody(): number /*byte*/[]
            }
        }
    }
}
