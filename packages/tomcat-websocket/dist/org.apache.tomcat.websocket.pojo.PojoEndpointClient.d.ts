declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace pojo {
                    /**
                     * Wrapper class for instances of POJOs annotated with
                     * {@link javax.websocket.ClientEndpoint} so they appear as standard
                     * {@link javax.websocket.Endpoint} instances.
                     */
                    // @ts-ignore
                    class PojoEndpointClient extends org.apache.tomcat.websocket.pojo.PojoEndpointBase {
                        // @ts-ignore
                        constructor(pojo: java.lang.Object | any, decoders: java.util.List<java.lang.Class<any>> | Array<java.lang.Class<any>>)
                        // @ts-ignore
                        public onOpen(session: Session, config: EndpointConfig): void
                    }
                }
            }
        }
    }
}
