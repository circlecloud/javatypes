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
                        public setCookieName(cookieName: java.lang.String | string): void
                        /**
                         * Return the configured cookie name.
                         */
                        // @ts-ignore
                        public getCookieName(): string
                        /**
                         * Set the value for the "Max-Age" attribute of the cookie that holds the
                         * session id. For the range of values see {@link ResponseCookie#getMaxAge()}.
                         * <p>By default set to -1.
                         * @param maxAge the maxAge duration value
                         */
                        // @ts-ignore
                        public setCookieMaxAge(maxAge: java.time.Duration): void
                        /**
                         * Return the configured "Max-Age" attribute value for the session cookie.
                         */
                        // @ts-ignore
                        public getCookieMaxAge(): java.time.Duration
                        /**
                         * Add a {@link Consumer} for a {@code ResponseCookieBuilder} that will be invoked
                         * for each cookie being built, just before the call to {@code build()}.
                         * @param initializer consumer for a cookie builder
                         * @since 5.1
                         */
                        // @ts-ignore
                        public addCookieInitializer(initializer: java.util.function$.Consumer<org.springframework.http.ResponseCookie.ResponseCookieBuilder>): void
                        // @ts-ignore
                        public resolveSessionIds(exchange: org.springframework.web.server.ServerWebExchange): Array<java.lang.String | string>
                        // @ts-ignore
                        public setSessionId(exchange: org.springframework.web.server.ServerWebExchange, id: java.lang.String | string): void
                        // @ts-ignore
                        public expireSession(exchange: org.springframework.web.server.ServerWebExchange): void
                    }
                }
            }
        }
    }
}
