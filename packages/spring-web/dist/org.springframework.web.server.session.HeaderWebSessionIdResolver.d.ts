declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace session {
                    /**
                     * Request and response header-based {@link WebSessionIdResolver}.
                     * @author Greg Turnquist
                     * @author Rob Winch
                     * @since 5.0
                     */
                    // @ts-ignore
                    class HeaderWebSessionIdResolver extends java.lang.Object implements org.springframework.web.server.session.WebSessionIdResolver {
                        // @ts-ignore
                        constructor()
                        /**
                         * Default value for {@link #setHeaderName(String)}.
                         */
                        // @ts-ignore
                        readonly DEFAULT_HEADER_NAME: string
                        /**
                         * Set the name of the session header to use for the session id.
                         * The name is used to extract the session id from the request headers as
                         * well to set the session id on the response headers.
                         * <p>By default set to {@code DEFAULT_HEADER_NAME}
                         * @param headerName the header name
                         */
                        // @ts-ignore
                        setHeaderName(headerName: string): void
                        /**
                         * Return the configured header name.
                         * @return the configured header name
                         */
                        // @ts-ignore
                        getHeaderName(): java.lang.String
                        // @ts-ignore
                        resolveSessionIds(exchange: org.springframework.web.server.ServerWebExchange): java.util.List<java.lang.String>
                        // @ts-ignore
                        setSessionId(exchange: org.springframework.web.server.ServerWebExchange, id: string): void
                        // @ts-ignore
                        expireSession(exchange: org.springframework.web.server.ServerWebExchange): void
                    }
                }
            }
        }
    }
}
