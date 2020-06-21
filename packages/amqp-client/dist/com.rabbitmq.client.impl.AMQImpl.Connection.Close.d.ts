declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace AMQImpl {
                    namespace Connection {
                        // @ts-ignore
                        class Close extends com.rabbitmq.client.impl.Method implements com.rabbitmq.client.AMQP.Connection.Close {
                            // @ts-ignore
                            constructor(replyCode: number /*int*/, replyText: java.lang.String | string, classId: number /*int*/, methodId: number /*int*/)
                            // @ts-ignore
                            constructor(rdr: com.rabbitmq.client.impl.MethodArgumentReader)
                            // @ts-ignore
                            public static readonly INDEX: number /*int*/
                            // @ts-ignore
                            public getReplyCode(): number /*int*/
                            // @ts-ignore
                            public getReplyText(): string
                            // @ts-ignore
                            public getClassId(): number /*int*/
                            // @ts-ignore
                            public getMethodId(): number /*int*/
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
