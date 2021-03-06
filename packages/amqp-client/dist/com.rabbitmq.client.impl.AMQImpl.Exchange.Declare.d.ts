declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace AMQImpl {
                    namespace Exchange {
                        // @ts-ignore
                        class Declare extends com.rabbitmq.client.impl.Method implements com.rabbitmq.client.AMQP.Exchange.Declare {
                            // @ts-ignore
                            constructor(ticket: number /*int*/, exchange: java.lang.String | string, type: java.lang.String | string, passive: boolean, durable: boolean, autoDelete: boolean, internal: boolean, nowait: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                            // @ts-ignore
                            constructor(rdr: com.rabbitmq.client.impl.MethodArgumentReader)
                            // @ts-ignore
                            public static readonly INDEX: number /*int*/
                            // @ts-ignore
                            public getTicket(): number /*int*/
                            // @ts-ignore
                            public getExchange(): string
                            // @ts-ignore
                            public getType(): string
                            // @ts-ignore
                            public getPassive(): boolean
                            // @ts-ignore
                            public getDurable(): boolean
                            // @ts-ignore
                            public getAutoDelete(): boolean
                            // @ts-ignore
                            public getInternal(): boolean
                            // @ts-ignore
                            public getNowait(): boolean
                            // @ts-ignore
                            public getArguments(): java.util.Map<java.lang.String | string, java.lang.Object | any>
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
