declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace pojo {
                    /**
                     * For a POJO class annotated with
                     * {@link javax.websocket.server.ServerEndpoint}, an instance of this class
                     * creates and caches the method handler, method information and parameter
                     * information for the onXXX calls.
                     */
                    // @ts-ignore
                    class PojoMethodMapping extends java.lang.Object {
                        // @ts-ignore
                        constructor(clazzPojo: java.lang.Class<any>, decoderClazzes: java.util.List<java.lang.Class<any>> | Array<java.lang.Class<any>>, wsPath: java.lang.String | string)
                        // @ts-ignore
                        public getWsPath(): string
                        // @ts-ignore
                        public getOnOpen(): java.lang.reflect.Method
                        // @ts-ignore
                        public getOnOpenArgs(pathParameters: java.util.Map<java.lang.String | string, java.lang.String | string>, session: Session, config: EndpointConfig): any[]
                        // @ts-ignore
                        public getOnClose(): java.lang.reflect.Method
                        // @ts-ignore
                        public getOnCloseArgs(pathParameters: java.util.Map<java.lang.String | string, java.lang.String | string>, session: Session, closeReason: CloseReason): any[]
                        // @ts-ignore
                        public getOnError(): java.lang.reflect.Method
                        // @ts-ignore
                        public getOnErrorArgs(pathParameters: java.util.Map<java.lang.String | string, java.lang.String | string>, session: Session, throwable: java.lang.Throwable | Error): any[]
                        // @ts-ignore
                        public hasMessageHandlers(): boolean
                        // @ts-ignore
                        public getMessageHandlers(pojo: java.lang.Object | any, pathParameters: java.util.Map<java.lang.String | string, java.lang.String | string>, session: Session, config: EndpointConfig): Array<MessageHandler>
                    }
                }
            }
        }
    }
}
