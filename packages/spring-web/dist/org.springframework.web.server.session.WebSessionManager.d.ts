declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace session {
                    /**
                     * Main class for access to the {@link WebSession} for an HTTP request.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     * @see WebSessionIdResolver
                     * @see WebSessionStore
                     */
                    // @ts-ignore
                    interface WebSessionManager {
                        /**
                         * Return the {@link WebSession} for the given exchange. Always guaranteed
                         * to return an instance either matching to the session id requested by the
                         * client, or a new session either because the client did not specify one
                         * or because the underlying session expired.
                         * @param exchange the current exchange
                         * @return promise for the WebSession
                         */
                        // @ts-ignore
                        getSession(exchange: org.springframework.web.server.ServerWebExchange): <any>
                    }
                }
            }
        }
    }
}
