declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Exchange {
                    namespace Bind {
                        // @ts-ignore
                        class Builder extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public ticket(ticket: number /*int*/): com.rabbitmq.client.AMQP.Exchange.Bind.Builder
                            // @ts-ignore
                            public destination(destination: java.lang.String | string): com.rabbitmq.client.AMQP.Exchange.Bind.Builder
                            // @ts-ignore
                            public source(source: java.lang.String | string): com.rabbitmq.client.AMQP.Exchange.Bind.Builder
                            // @ts-ignore
                            public routingKey(routingKey: java.lang.String | string): com.rabbitmq.client.AMQP.Exchange.Bind.Builder
                            // @ts-ignore
                            public nowait(nowait: boolean): com.rabbitmq.client.AMQP.Exchange.Bind.Builder
                            // @ts-ignore
                            public nowait(): com.rabbitmq.client.AMQP.Exchange.Bind.Builder
                            // @ts-ignore
                            public arguments(arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Exchange.Bind.Builder
                            // @ts-ignore
                            public build(): com.rabbitmq.client.AMQP.Exchange.Bind
                        }
                    }
                }
            }
        }
    }
}
