declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace session {
                    /**
                     * Simple Map-based storage for {@link WebSession} instances.
                     * @author Rossen Stoyanchev
                     * @author Rob Winch
                     * @since 5.0
                     */
                    // @ts-ignore
                    class InMemoryWebSessionStore extends java.lang.Object implements org.springframework.web.server.session.WebSessionStore {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the maximum number of sessions that can be stored. Once the limit is
                         * reached, any attempt to store an additional session will result in an
                         * {@link IllegalStateException}.
                         * <p>By default set to 10000.
                         * @param maxSessions the maximum number of sessions
                         * @since 5.0.8
                         */
                        // @ts-ignore
                        setMaxSessions(maxSessions: number /*int*/): void
                        /**
                         * Return the maximum number of sessions that can be stored.
                         * @since 5.0.8
                         */
                        // @ts-ignore
                        getMaxSessions(): int
                        /**
                         * Configure the {@link Clock} to use to set lastAccessTime on every created
                         * session and to calculate if it is expired.
                         * <p>This may be useful to align to different timezone or to set the clock
                         * back in a test, e.g. {@code Clock.offset(clock, Duration.ofMinutes(-31))}
                         * in order to simulate session expiration.
                         * <p>By default this is {@code Clock.system(ZoneId.of("GMT"))}.
                         * @param clock the clock to use
                         */
                        // @ts-ignore
                        setClock(clock: java.time.Clock): void
                        /**
                         * Return the configured clock for session lastAccessTime calculations.
                         */
                        // @ts-ignore
                        getClock(): java.time.Clock
                        /**
                         * Return the map of sessions with an {@link Collections#unmodifiableMap
                         * unmodifiable} wrapper. This could be used for management purposes, to
                         * list active sessions, invalidate expired ones, etc.
                         * @since 5.0.8
                         */
                        // @ts-ignore
                        getSessions(): java.util.Map<java.lang.String, org.springframework.web.server.WebSession>
                        // @ts-ignore
                        createWebSession(): <any>
                        // @ts-ignore
                        retrieveSession(id: string): <any>
                        // @ts-ignore
                        removeSession(id: string): <any>
                        // @ts-ignore
                        updateLastAccessTime(session: org.springframework.web.server.WebSession): <any>
                        /**
                         * Check for expired sessions and remove them. Typically such checks are
                         * kicked off lazily during calls to {@link #createWebSession() create} or
                         * {@link #retrieveSession retrieve}, no less than 60 seconds apart.
                         * This method can be called to force a check at a specific time.
                         * @since 5.0.8
                         */
                        // @ts-ignore
                        removeExpiredSessions(): void
                    }
                }
            }
        }
    }
}
