declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace pojo {
                    /**
                     * Base implementation (client and server have different concrete
                     * implementations) of the wrapper that converts a POJO instance into a
                     * WebSocket endpoint instance.
                     */
                    // @ts-ignore
                    abstract class PojoEndpointBase extends Endpoint {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        doOnOpen(session: Session, config: EndpointConfig): void
                        // @ts-ignore
                        public onClose(session: Session, closeReason: CloseReason): void
                        // @ts-ignore
                        public onError(session: Session, throwable: java.lang.Throwable | Error): void
                        // @ts-ignore
                        getPojo(): any
                        // @ts-ignore
                        setPojo(pojo: java.lang.Object | any): void
                        // @ts-ignore
                        getPathParameters(): java.util.Map<java.lang.String | string, java.lang.String | string>
                        // @ts-ignore
                        setPathParameters(pathParameters: java.util.Map<java.lang.String | string, java.lang.String | string>): void
                        // @ts-ignore
                        getMethodMapping(): org.apache.tomcat.websocket.pojo.PojoMethodMapping
                        // @ts-ignore
                        setMethodMapping(methodMapping: org.apache.tomcat.websocket.pojo.PojoMethodMapping): void
                    }
                }
            }
        }
    }
}
