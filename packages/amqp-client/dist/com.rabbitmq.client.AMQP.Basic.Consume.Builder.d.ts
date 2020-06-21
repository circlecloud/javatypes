declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Basic {
                    namespace Consume {
                        // @ts-ignore
                        class Builder extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public ticket(ticket: number /*int*/): com.rabbitmq.client.AMQP.Basic.Consume.Builder
                            // @ts-ignore
                            public queue(queue: java.lang.String | string): com.rabbitmq.client.AMQP.Basic.Consume.Builder
                            // @ts-ignore
                            public consumerTag(consumerTag: java.lang.String | string): com.rabbitmq.client.AMQP.Basic.Consume.Builder
                            // @ts-ignore
                            public noLocal(noLocal: boolean): com.rabbitmq.client.AMQP.Basic.Consume.Builder
                            // @ts-ignore
                            public noLocal(): com.rabbitmq.client.AMQP.Basic.Consume.Builder
                            // @ts-ignore
                            public noAck(noAck: boolean): com.rabbitmq.client.AMQP.Basic.Consume.Builder
                            // @ts-ignore
                            public noAck(): com.rabbitmq.client.AMQP.Basic.Consume.Builder
                            // @ts-ignore
                            public exclusive(exclusive: boolean): com.rabbitmq.client.AMQP.Basic.Consume.Builder
                            // @ts-ignore
                            public exclusive(): com.rabbitmq.client.AMQP.Basic.Consume.Builder
                            // @ts-ignore
                            public nowait(nowait: boolean): com.rabbitmq.client.AMQP.Basic.Consume.Builder
                            // @ts-ignore
                            public nowait(): com.rabbitmq.client.AMQP.Basic.Consume.Builder
                            // @ts-ignore
                            public arguments(arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Basic.Consume.Builder
                            // @ts-ignore
                            public build(): com.rabbitmq.client.AMQP.Basic.Consume
                        }
                    }
                }
            }
        }
    }
}
