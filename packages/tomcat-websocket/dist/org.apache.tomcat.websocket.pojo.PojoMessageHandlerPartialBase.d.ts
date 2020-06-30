declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace pojo {
                    /**
                     * Common implementation code for the POJO partial message handlers. All
                     * the real work is done in this class and in the superclass.
                     * @param <T>   The type of message to handle
                     */
                    // @ts-ignore
                    abstract class PojoMessageHandlerPartialBase<T> extends org.apache.tomcat.websocket.pojo.PojoMessageHandlerBase<T> {
                        // @ts-ignore
                        constructor(pojo: java.lang.Object | any, method: java.lang.reflect.Method, session: Session, params: java.lang.Object[] | any[], indexPayload: number /*int*/, convert: boolean, indexBoolean: number /*int*/, indexSession: number /*int*/, maxMessageSize: number /*long*/)
                        // @ts-ignore
                        public onMessage(message: T, last: boolean): void
                    }
                }
            }
        }
    }
}
