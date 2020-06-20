declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace session {
                    /**
                     * Cookie-based {@link WebSessionIdResolver}.
                     * @author Rossen Stoyanchev
                     * @author Brian Clozel
                     * @since 5.0
                     */
                    // @ts-ignore
                    class CookieWebSessionIdResolver extends java.lang.Object implements org.springframework.web.server.session.WebSessionIdResolver {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the name of the cookie to use for the session id.
                         * <p>By default set to "SESSION".
                         * @param cookieName the cookie name
                         */
                        // @ts-ignore
                        setCookieName(cookieName: string): void
                        /**
                         * Return the configured cookie name.
                         */
                        // @ts-ignore
                        getCookieName(): java.lang.String
                        /**
                         * Set the value for the "Max-Age" attribute of the cookie that holds the
                         * session id. For the range of values see {@link ResponseCookie#getMaxAge()}.
                         * <p>By default set to -1.
                         * @param maxAge the maxAge duration value
                         */
                        // @ts-ignore
                        setCookieMaxAge(maxAge: java.time.Duration): void
                        /**
                         * Return the configured "Max-Age" attribute value for the session cookie.
                         */
                        // @ts-ignore
                        getCookieMaxAge(): java.time.Duration
                        /**
                         * Add a {@link Consumer} for a {@code ResponseCookieBuilder} that will be invoked
                         * for each cookie being built, just before the call to {@code build()}.
                         * @param initializer consumer for a cookie builder
                         * @since 5.1
                         */
                        // @ts-ignore
                        addCookieInitializer(initializer: java.util.function.Consumer<org.springframework.http.ResponseCookie.ResponseCookieBuilder> | java.util.function$.Consumer<org.springframework.http.ResponseCookie.ResponseCookieBuilder>): void
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
