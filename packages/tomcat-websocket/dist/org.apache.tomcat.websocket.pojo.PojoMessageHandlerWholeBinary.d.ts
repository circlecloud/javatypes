declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace pojo {
                    /**
                     * ByteBuffer specific concrete implementation for handling whole messages.
                     */
                    // @ts-ignore
                    class PojoMessageHandlerWholeBinary extends org.apache.tomcat.websocket.pojo.PojoMessageHandlerWholeBase<java.nio.ByteBuffer> {
                        // @ts-ignore
                        constructor(pojo: java.lang.Object | any, method: java.lang.reflect.Method, session: Session, config: EndpointConfig, decoderClazzes: java.util.List<java.lang.Class<any>> | Array<java.lang.Class<any>>, params: java.lang.Object[] | any[], indexPayload: number /*int*/, convert: boolean, indexSession: number /*int*/, isForInputStream: boolean, maxMessageSize: number /*long*/)
                        // @ts-ignore
                        decode(message: java.nio.ByteBuffer): any
                        // @ts-ignore
                        convert(message: java.nio.ByteBuffer): any
                        // @ts-ignore
                        onClose(): void
                    }
                }
            }
        }
    }
}
