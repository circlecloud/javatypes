declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Basic {
                    namespace Deliver {
                        // @ts-ignore
                        class Builder extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public consumerTag(consumerTag: java.lang.String | string): com.rabbitmq.client.AMQP.Basic.Deliver.Builder
                            // @ts-ignore
                            public deliveryTag(deliveryTag: number /*long*/): com.rabbitmq.client.AMQP.Basic.Deliver.Builder
                            // @ts-ignore
                            public redelivered(redelivered: boolean): com.rabbitmq.client.AMQP.Basic.Deliver.Builder
                            // @ts-ignore
                            public redelivered(): com.rabbitmq.client.AMQP.Basic.Deliver.Builder
                            // @ts-ignore
                            public exchange(exchange: java.lang.String | string): com.rabbitmq.client.AMQP.Basic.Deliver.Builder
                            // @ts-ignore
                            public routingKey(routingKey: java.lang.String | string): com.rabbitmq.client.AMQP.Basic.Deliver.Builder
                            // @ts-ignore
                            public build(): com.rabbitmq.client.AMQP.Basic.Deliver
                        }
                    }
                }
            }
        }
    }
}
