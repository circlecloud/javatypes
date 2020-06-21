declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace AMQImpl {
                    namespace Connection {
                        // @ts-ignore
                        class StartOk extends com.rabbitmq.client.impl.Method implements com.rabbitmq.client.AMQP.Connection.StartOk {
                            // @ts-ignore
                            constructor(clientProperties: java.util.Map<java.lang.String | string, java.lang.Object | any>, mechanism: java.lang.String | string, response: com.rabbitmq.client.LongString, locale: java.lang.String | string)
                            // @ts-ignore
                            constructor(rdr: com.rabbitmq.client.impl.MethodArgumentReader)
                            // @ts-ignore
                            public static readonly INDEX: number /*int*/
                            // @ts-ignore
                            public getClientProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                            // @ts-ignore
                            public getMechanism(): string
                            // @ts-ignore
                            public getResponse(): com.rabbitmq.client.LongString
                            // @ts-ignore
                            public getLocale(): string
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
