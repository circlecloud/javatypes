declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace session {
                    /**
                     * Contract for session id resolution strategies. Allows for session id
                     * resolution through the request and for sending the session id or expiring
                     * the session through the response.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     * @see CookieWebSessionIdResolver
                     */
                    // @ts-ignore
                    interface WebSessionIdResolver {
                        /**
                         * Resolve the session id's associated with the request.
                         * @param exchange the current exchange
                         * @return the session id's or an empty list
                         */
                        // @ts-ignore
                        resolveSessionIds(exchange: org.springframework.web.server.ServerWebExchange): java.util.List<java.lang.String>
                        /**
                         * Send the given session id to the client.
                         * @param exchange the current exchange
                         * @param sessionId the session id
                         */
                        // @ts-ignore
                        setSessionId(exchange: org.springframework.web.server.ServerWebExchange, sessionId: string): void
                        /**
                         * Instruct the client to end the current session.
                         * @param exchange the current exchange
                         */
                        // @ts-ignore
                        expireSession(exchange: org.springframework.web.server.ServerWebExchange): void
                    }
                }
            }
        }
    }
}
