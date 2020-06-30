declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace server {
                    /**
                     * Provides timeouts for asynchronous web socket writes. On the server side we
                     * only have access to {@link javax.servlet.ServletOutputStream} and
                     * {@link javax.servlet.ServletInputStream} so there is no way to set a timeout
                     * for writes to the client.
                     */
                    // @ts-ignore
                    class WsWriteTimeout extends java.lang.Object implements org.apache.tomcat.websocket.BackgroundProcess {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public backgroundProcess(): void
                        // @ts-ignore
                        public setProcessPeriod(period: number /*int*/): void
                        /**
                         * {@inheritDoc}
                         * The default value is 1 which means asynchronous write timeouts are
                         * processed every 1 second.
                         */
                        // @ts-ignore
                        public getProcessPeriod(): number /*int*/
                        // @ts-ignore
                        public register(endpoint: org.apache.tomcat.websocket.server.WsRemoteEndpointImplServer): void
                        // @ts-ignore
                        public unregister(endpoint: org.apache.tomcat.websocket.server.WsRemoteEndpointImplServer): void
                    }
                }
            }
        }
    }
}
