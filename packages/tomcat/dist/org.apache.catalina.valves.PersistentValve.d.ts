declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                /**
                 * Valve that implements per-request session persistence. It is intended to be
                 * used with non-sticky load-balancers.
                 * <p>
                 * <b>USAGE CONSTRAINT</b>: To work correctly it requires a  PersistentManager.
                 * <p>
                 * <b>USAGE CONSTRAINT</b>: To work correctly it assumes only one request exists
                 * per session at any one time.
                 * @author Jean-Frederic Clere
                 */
                // @ts-ignore
                class PersistentValve extends org.apache.catalina.valves.ValveBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public setContainer(container: org.apache.catalina.Container): void
                    /**
                     * Select the appropriate child Context to process this request,
                     * based on the specified request URI.  If no matching Context can
                     * be found, return an appropriate HTTP error.
                     * @param request Request to be processed
                     * @param response Response to be produced
                     * @exception IOException if an input/output error occurred
                     * @exception ServletException if a servlet error occurred
                     */
                    // @ts-ignore
                    public invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                    /**
                     * Indicate whether the session has been idle for longer
                     * than its expiration date as of the supplied time.
                     * FIXME: Probably belongs in the Session class.
                     * @param session The session to check
                     * @param timeNow The current time to check for
                     * @return <code>true</code> if the session is past its expiration
                     */
                    // @ts-ignore
                    isSessionStale(session: org.apache.catalina.Session, timeNow: number /*long*/): boolean
                }
            }
        }
    }
}
