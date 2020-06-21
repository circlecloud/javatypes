declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace AMQImpl {
                    namespace Connection {
                        // @ts-ignore
                        class Start extends com.rabbitmq.client.impl.Method implements com.rabbitmq.client.AMQP.Connection.Start {
                            // @ts-ignore
                            constructor(versionMajor: number /*int*/, versionMinor: number /*int*/, serverProperties: java.util.Map<java.lang.String | string, java.lang.Object | any>, mechanisms: com.rabbitmq.client.LongString, locales: com.rabbitmq.client.LongString)
                            // @ts-ignore
                            constructor(rdr: com.rabbitmq.client.impl.MethodArgumentReader)
                            // @ts-ignore
                            public static readonly INDEX: number /*int*/
                            // @ts-ignore
                            public getVersionMajor(): number /*int*/
                            // @ts-ignore
                            public getVersionMinor(): number /*int*/
                            // @ts-ignore
                            public getServerProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                            // @ts-ignore
                            public getMechanisms(): com.rabbitmq.client.LongString
                            // @ts-ignore
                            public getLocales(): com.rabbitmq.client.LongString
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
