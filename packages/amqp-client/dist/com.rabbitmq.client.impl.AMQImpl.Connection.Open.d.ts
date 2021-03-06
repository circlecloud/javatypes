declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace AMQImpl {
                    namespace Connection {
                        // @ts-ignore
                        class Open extends com.rabbitmq.client.impl.Method implements com.rabbitmq.client.AMQP.Connection.Open {
                            // @ts-ignore
                            constructor(virtualHost: java.lang.String | string, capabilities: java.lang.String | string, insist: boolean)
                            // @ts-ignore
                            constructor(rdr: com.rabbitmq.client.impl.MethodArgumentReader)
                            // @ts-ignore
                            public static readonly INDEX: number /*int*/
                            // @ts-ignore
                            public getVirtualHost(): string
                            // @ts-ignore
                            public getCapabilities(): string
                            // @ts-ignore
                            public getInsist(): boolean
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
