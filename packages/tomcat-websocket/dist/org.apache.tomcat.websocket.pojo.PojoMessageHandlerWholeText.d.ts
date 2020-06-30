declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace pojo {
                    /**
                     * Text specific concrete implementation for handling whole messages.
                     */
                    // @ts-ignore
                    class PojoMessageHandlerWholeText extends org.apache.tomcat.websocket.pojo.PojoMessageHandlerWholeBase<java.lang.String | string> {
                        // @ts-ignore
                        constructor(pojo: java.lang.Object | any, method: java.lang.reflect.Method, session: Session, config: EndpointConfig, decoderClazzes: java.util.List<java.lang.Class<any>> | Array<java.lang.Class<any>>, params: java.lang.Object[] | any[], indexPayload: number /*int*/, convert: boolean, indexSession: number /*int*/, maxMessageSize: number /*long*/)
                        // @ts-ignore
                        decode(message: java.lang.String | string): any
                        // @ts-ignore
                        convert(message: java.lang.String | string): any
                        // @ts-ignore
                        onClose(): void
                    }
                }
            }
        }
    }
}
