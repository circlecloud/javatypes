declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace AMQImpl {
                    namespace Basic {
                        // @ts-ignore
                        class Deliver extends com.rabbitmq.client.impl.Method implements com.rabbitmq.client.AMQP.Basic.Deliver {
                            // @ts-ignore
                            constructor(consumerTag: java.lang.String | string, deliveryTag: number /*long*/, redelivered: boolean, exchange: java.lang.String | string, routingKey: java.lang.String | string)
                            // @ts-ignore
                            constructor(rdr: com.rabbitmq.client.impl.MethodArgumentReader)
                            // @ts-ignore
                            public static readonly INDEX: number /*int*/
                            // @ts-ignore
                            public getConsumerTag(): string
                            // @ts-ignore
                            public getDeliveryTag(): number /*long*/
                            // @ts-ignore
                            public getRedelivered(): boolean
                            // @ts-ignore
                            public getExchange(): string
                            // @ts-ignore
                            public getRoutingKey(): string
                            // @ts-ignore
                            public protocolClassId(): number /*int*/
                            // @ts-ignore
                            public protocolMethodId(): number /*int*/
                            // @ts-ignore
                            public protocolMethodName(): string
                            // @ts-ignore
                            public hasContent(): boolean
                            // @ts-ignore
                            public visit(visitor: com.rabbitmq.client.impl.AMQImpl.MethodVisitor): any
                            // @ts-ignore
                            public equals(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public appendArgumentDebugStringTo(acc: java.lang.StringBuilder): void
                            // @ts-ignore
                            public writeArgumentsTo(writer: com.rabbitmq.client.impl.MethodArgumentWriter): void
                        }
                    }
                }
            }
        }
    }
}
