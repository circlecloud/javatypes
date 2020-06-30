declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace pojo {
                    /**
                     * Common implementation code for the POJO message handlers.
                     * @param <T>   The type of message to handle
                     */
                    // @ts-ignore
                    abstract class PojoMessageHandlerBase<T> extends java.lang.Object implements org.apache.tomcat.websocket.WrappedMessageHandler {
                        // @ts-ignore
                        constructor(pojo: java.lang.Object | any, method: java.lang.reflect.Method, session: Session, params: java.lang.Object[] | any[], indexPayload: number /*int*/, convert: boolean, indexSession: number /*int*/, maxMessageSize: number /*long*/)
                        // @ts-ignore
                        readonly pojo: java.lang.Object | any
                        // @ts-ignore
                        readonly method: java.lang.reflect.Method
                        // @ts-ignore
                        readonly session: Session
                        // @ts-ignore
                        readonly params: java.lang.Object[] | any[]
                        // @ts-ignore
                        readonly indexPayload: number /*int*/
                        // @ts-ignore
                        readonly convert: boolean
                        // @ts-ignore
                        readonly indexSession: number /*int*/
                        // @ts-ignore
                        readonly maxMessageSize: number /*long*/
                        // @ts-ignore
                        processResult(result: java.lang.Object | any): void
                        /**
                         * Expose the POJO if it is a message handler so the Session is able to
                         * match requests to remove handlers if the original handler has been
                         * wrapped.
                         */
                        // @ts-ignore
                        public getWrappedHandler(): MessageHandler
                        // @ts-ignore
                        public getMaxMessageSize(): number /*long*/
                        // @ts-ignore
                        handlePojoMethodException(t: java.lang.Throwable | Error): void
                    }
                }
            }
        }
    }
}
