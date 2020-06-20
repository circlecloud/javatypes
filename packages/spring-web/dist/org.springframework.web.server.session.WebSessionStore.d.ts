declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace session {
                    /**
                     * Strategy for {@link WebSession} persistence.
                     * @author Rossen Stoyanchev
                     * @author Rob Winch
                     * @since 5.0
                     */
                    // @ts-ignore
                    interface WebSessionStore {
                        /**
                         * Create a new WebSession.
                         * <p>Note that this does nothing more than create a new instance.
                         * The session can later be started explicitly via {@link WebSession#start()}
                         * or implicitly by adding attributes -- and then persisted via
                         * {@link WebSession#save()}.
                         * @return the created session instance
                         */
                        // @ts-ignore
                        createWebSession(): <any>
                        /**
                         * Return the WebSession for the given id.
                         * <p><strong>Note:</strong> This method should perform an expiration check,
                         * and if it has expired remove the session and return empty. This method
                         * should also update the lastAccessTime of retrieved sessions.
                         * @param sessionId the session to load
                         * @return the session, or an empty {#code Mono} .
                         */
                        // @ts-ignore
                        retrieveSession(sessionId: string): <any>
                        /**
                         * Remove the WebSession for the specified id.
                         * @param sessionId the id of the session to remove
                         * @return a completion notification (success or error)
                         */
                        // @ts-ignore
                        removeSession(sessionId: string): <any>
                        /**
                         * Update the last accessed timestamp to "now".
                         * @param webSession the session to update
                         * @return the session with the updated last access time
                         */
                        // @ts-ignore
                        updateLastAccessTime(webSession: org.springframework.web.server.WebSession): <any>
                    }
                }
            }
        }
    }
}
