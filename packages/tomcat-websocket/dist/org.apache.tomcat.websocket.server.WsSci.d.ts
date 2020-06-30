declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace server {
                    /**
                     * Registers an interest in any class that is annotated with
                     * {@link ServerEndpoint} so that Endpoint can be published via the WebSocket
                     * server.
                     */
                    // @ts-ignore
                    class WsSci extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public onStartup(clazzes: java.util.Set<java.lang.Class<any>> | Array<java.lang.Class<any>>, ctx: ServletContext): void
                    }
                }
            }
        }
    }
}
