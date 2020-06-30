declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace pojo {
                    /**
                     * Wrapper class for instances of POJOs annotated with
                     * {@link javax.websocket.server.ServerEndpoint} so they appear as standard
                     * {@link javax.websocket.Endpoint} instances.
                     */
                    // @ts-ignore
                    class PojoEndpointServer extends org.apache.tomcat.websocket.pojo.PojoEndpointBase {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public onOpen(session: Session, endpointConfig: EndpointConfig): void
                    }
                }
            }
        }
    }
}
