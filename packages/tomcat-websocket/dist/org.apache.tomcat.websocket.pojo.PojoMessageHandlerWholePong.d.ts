declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace pojo {
                    /**
                     * PongMessage specific concrete implementation for handling whole messages.
                     */
                    // @ts-ignore
                    class PojoMessageHandlerWholePong extends org.apache.tomcat.websocket.pojo.PojoMessageHandlerWholeBase<PongMessage> {
                        // @ts-ignore
                        constructor(pojo: java.lang.Object | any, method: java.lang.reflect.Method, session: Session, params: java.lang.Object[] | any[], indexPayload: number /*int*/, convert: boolean, indexSession: number /*int*/)
                        // @ts-ignore
                        decode(message: PongMessage): any
                        // @ts-ignore
                        onClose(): void
                    }
                }
            }
        }
    }
}
