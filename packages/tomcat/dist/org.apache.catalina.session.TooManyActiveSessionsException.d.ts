declare namespace org {
    namespace apache {
        namespace catalina {
            namespace session {
                /**
                 * An exception that indicates the maximum number of active sessions has been
                 * reached and the server is refusing to create any new sessions.
                 */
                // @ts-ignore
                class TooManyActiveSessionsException extends java.lang.IllegalStateException {
                    /**
                     * Creates a new TooManyActiveSessionsException.
                     * @param message A description for the exception.
                     * @param maxActive The maximum number of active sessions allowed by the
                     *                   session manager.
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string, maxActive: number /*int*/)
                    /**
                     * Gets the maximum number of sessions allowed by the session manager.
                     * @return The maximum number of sessions allowed by the session manager.
                     */
                    // @ts-ignore
                    getMaxActiveSessions(): number /*int*/
                }
            }
        }
    }
}
