declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace pojo {
                    /**
                     * Stores the parameter type and name for a parameter that needs to be passed to
                     * an onXxx method of {@link javax.websocket.Endpoint}. The name is only present
                     * for parameters annotated with
                     * {@link javax.websocket.server.PathParam}. For the
                     * {@link javax.websocket.Session} and {@link java.lang.Throwable} parameters,
                     * {@link #getName()} will always return <code>null</code>.
                     */
                    // @ts-ignore
                    class PojoPathParam extends java.lang.Object {
                        // @ts-ignore
                        constructor(type: java.lang.Class<any>, name: java.lang.String | string)
                        // @ts-ignore
                        public getType(): java.lang.Class<any>
                        // @ts-ignore
                        public getName(): string
                    }
                }
            }
        }
    }
}
