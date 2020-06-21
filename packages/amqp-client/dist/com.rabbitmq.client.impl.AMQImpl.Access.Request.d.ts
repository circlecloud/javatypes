declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace AMQImpl {
                    namespace Access {
                        // @ts-ignore
                        class Request extends com.rabbitmq.client.impl.Method implements com.rabbitmq.client.AMQP.Access.Request {
                            // @ts-ignore
                            constructor(realm: java.lang.String | string, exclusive: boolean, passive: boolean, active: boolean, write: boolean, read: boolean)
                            // @ts-ignore
                            constructor(rdr: com.rabbitmq.client.impl.MethodArgumentReader)
                            // @ts-ignore
                            public static readonly INDEX: number /*int*/
                            // @ts-ignore
                            public getRealm(): string
                            // @ts-ignore
                            public getExclusive(): boolean
                            // @ts-ignore
                            public getPassive(): boolean
                            // @ts-ignore
                            public getActive(): boolean
                            // @ts-ignore
                            public getWrite(): boolean
                            // @ts-ignore
                            public getRead(): boolean
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
