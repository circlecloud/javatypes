declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace server {
                    /**
                     * Handles the initial HTTP connection for WebSocket connections.
                     */
                    // @ts-ignore
                    class WsFilter extends GenericFilter {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public init(): void
                        // @ts-ignore
                        public doFilter(request: ServletRequest, response: ServletResponse, chain: FilterChain): void
                    }
                }
            }
        }
    }
}
