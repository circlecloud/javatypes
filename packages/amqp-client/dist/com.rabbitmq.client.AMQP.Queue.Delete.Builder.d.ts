declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Queue {
                    namespace Delete {
                        // @ts-ignore
                        class Builder extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public ticket(ticket: number /*int*/): com.rabbitmq.client.AMQP.Queue.Delete.Builder
                            // @ts-ignore
                            public queue(queue: java.lang.String | string): com.rabbitmq.client.AMQP.Queue.Delete.Builder
                            // @ts-ignore
                            public ifUnused(ifUnused: boolean): com.rabbitmq.client.AMQP.Queue.Delete.Builder
                            // @ts-ignore
                            public ifUnused(): com.rabbitmq.client.AMQP.Queue.Delete.Builder
                            // @ts-ignore
                            public ifEmpty(ifEmpty: boolean): com.rabbitmq.client.AMQP.Queue.Delete.Builder
                            // @ts-ignore
                            public ifEmpty(): com.rabbitmq.client.AMQP.Queue.Delete.Builder
                            // @ts-ignore
                            public nowait(nowait: boolean): com.rabbitmq.client.AMQP.Queue.Delete.Builder
                            // @ts-ignore
                            public nowait(): com.rabbitmq.client.AMQP.Queue.Delete.Builder
                            // @ts-ignore
                            public build(): com.rabbitmq.client.AMQP.Queue.Delete
                        }
                    }
                }
            }
        }
    }
}
