declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace server {
                    /**
                     * In normal usage, this {@link ServletContextListener} does not need to be
                     * explicitly configured as the {@link WsSci} performs all the necessary
                     * bootstrap and installs this listener in the {@link ServletContext}. If the
                     * {@link WsSci} is disabled, this listener must be added manually to every
                     * {@link ServletContext} that uses WebSocket to bootstrap the
                     * {@link WsServerContainer} correctly.
                     */
                    // @ts-ignore
                    class WsContextListener extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public contextInitialized(sce: ServletContextEvent): void
                        // @ts-ignore
                        public contextDestroyed(sce: ServletContextEvent): void
                    }
                }
            }
        }
    }
}
