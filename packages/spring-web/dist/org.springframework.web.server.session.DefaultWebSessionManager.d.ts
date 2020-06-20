declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace session {
                    /**
                     * Default implementation of {@link WebSessionManager} delegating to a
                     * {@link WebSessionIdResolver} for session id resolution and to a
                     * {@link WebSessionStore}.
                     * @author Rossen Stoyanchev
                     * @author Rob Winch
                     * @since 5.0
                     */
                    // @ts-ignore
                    class DefaultWebSessionManager extends java.lang.Object implements org.springframework.web.server.session.WebSessionManager {
                        // @ts-ignore
                        constructor()
                        /**
                         * Configure the id resolution strategy.
                         * <p>By default an instance of {@link CookieWebSessionIdResolver}.
                         * @param sessionIdResolver the resolver to use
                         */
                        // @ts-ignore
                        setSessionIdResolver(sessionIdResolver: org.springframework.web.server.session.WebSessionIdResolver): void
                        /**
                         * Return the configured {@link WebSessionIdResolver}.
                         */
                        // @ts-ignore
                        getSessionIdResolver(): org.springframework.web.server.session.WebSessionIdResolver
                        /**
                         * Configure the persistence strategy.
                         * <p>By default an instance of {@link InMemoryWebSessionStore}.
                         * @param sessionStore the persistence strategy to use
                         */
                        // @ts-ignore
                        setSessionStore(sessionStore: org.springframework.web.server.session.WebSessionStore): void
                        /**
                         * Return the configured {@link WebSessionStore}.
                         */
                        // @ts-ignore
                        getSessionStore(): org.springframework.web.server.session.WebSessionStore
                        // @ts-ignore
                        getSession(exchange: org.springframework.web.server.ServerWebExchange): <any>
                    }
                }
            }
        }
    }
}
