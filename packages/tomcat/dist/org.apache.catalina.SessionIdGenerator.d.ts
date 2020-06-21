declare namespace org {
    namespace apache {
        namespace catalina {
            // @ts-ignore
            interface SessionIdGenerator {
                /**
                 * @return the node identifier associated with this node which will be
                 *  included in the generated session ID.
                 */
                // @ts-ignore
                getJvmRoute(): string
                /**
                 * Specify the node identifier associated with this node which will be
                 * included in the generated session ID.
                 * @param jvmRoute  The node identifier
                 */
                // @ts-ignore
                setJvmRoute(jvmRoute: java.lang.String | string): void
                /**
                 * @return the number of bytes for a session ID
                 */
                // @ts-ignore
                getSessionIdLength(): number /*int*/
                /**
                 * Specify the number of bytes for a session ID
                 * @param sessionIdLength   Number of bytes
                 */
                // @ts-ignore
                setSessionIdLength(sessionIdLength: number /*int*/): void
                /**
                 * Generate and return a new session identifier.
                 * @return the newly generated session id
                 */
                // @ts-ignore
                generateSessionId(): string
                /**
                 * Generate and return a new session identifier.
                 * @param route   node identifier to include in generated id
                 * @return the newly generated session id
                 */
                // @ts-ignore
                generateSessionId(route: java.lang.String | string): string
            }
        }
    }
}
