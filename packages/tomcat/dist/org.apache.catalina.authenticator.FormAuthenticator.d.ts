declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                /**
                 * An <b>Authenticator</b> and <b>Valve</b> implementation of FORM BASED
                 * Authentication, as described in the Servlet API Specification.
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class FormAuthenticator extends org.apache.catalina.authenticator.AuthenticatorBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * Character encoding to use to read the username and password parameters
                     * from the request. If not set, the encoding of the request body will be
                     * used.
                     */
                    // @ts-ignore
                    characterEncoding: java.lang.String | string
                    /**
                     * Landing page to use if a user tries to access the login page directly or
                     * if the session times out during login. If not set, error responses will
                     * be sent instead.
                     */
                    // @ts-ignore
                    landingPage: java.lang.String | string
                    /**
                     * Return the character encoding to use to read the user name and password.
                     * @return The name of the character encoding
                     */
                    // @ts-ignore
                    public getCharacterEncoding(): string
                    /**
                     * Set the character encoding to be used to read the user name and password.
                     * @param encoding The name of the encoding to use
                     */
                    // @ts-ignore
                    public setCharacterEncoding(encoding: java.lang.String | string): void
                    /**
                     * Return the landing page to use when FORM auth is mis-used.
                     * @return The path to the landing page relative to the web application root
                     */
                    // @ts-ignore
                    public getLandingPage(): string
                    /**
                     * Set the landing page to use when the FORM auth is mis-used.
                     * @param landingPage The path to the landing page relative to the web
                     *                     application root
                     */
                    // @ts-ignore
                    public setLandingPage(landingPage: java.lang.String | string): void
                    /**
                     * Authenticate the user making this request, based on the specified
                     * login configuration.  Return <code>true</code> if any specified
                     * constraint has been satisfied, or <code>false</code> if we have
                     * created a response challenge already.
                     * @param request Request we are processing
                     * @param response Response we are creating
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    doAuthenticate(request: org.apache.catalina.connector.Request, response: javax.servlet.http.HttpServletResponse): boolean
                    // @ts-ignore
                    isContinuationRequired(request: org.apache.catalina.connector.Request): boolean
                    // @ts-ignore
                    getAuthMethod(): string
                    /**
                     * Called to forward to the login page
                     * @param request Request we are processing
                     * @param response Response we are populating
                     * @param config    Login configuration describing how authentication
                     *               should be performed
                     * @throws IOException  If the forward to the login page fails and the call
                     *                       to {#link HttpServletResponse#sendError(int, String)}
                     *                       throws an {@link IOException}
                     */
                    // @ts-ignore
                    forwardToLoginPage(request: org.apache.catalina.connector.Request, response: javax.servlet.http.HttpServletResponse, config: org.apache.tomcat.util.descriptor.web.LoginConfig): void
                    /**
                     * Called to forward to the error page
                     * @param request Request we are processing
                     * @param response Response we are populating
                     * @param config    Login configuration describing how authentication
                     *               should be performed
                     * @throws IOException  If the forward to the error page fails and the call
                     *                       to {#link HttpServletResponse#sendError(int, String)}
                     *                       throws an {@link IOException}
                     */
                    // @ts-ignore
                    forwardToErrorPage(request: org.apache.catalina.connector.Request, response: javax.servlet.http.HttpServletResponse, config: org.apache.tomcat.util.descriptor.web.LoginConfig): void
                    /**
                     * Does this request match the saved one (so that it must be the redirect
                     * we signaled after successful authentication?
                     * @param request The request to be verified
                     * @return <code>true</code> if the requests matched the saved one
                     */
                    // @ts-ignore
                    matchRequest(request: org.apache.catalina.connector.Request): boolean
                    /**
                     * Restore the original request from information stored in our session.
                     * If the original request is no longer present (because the session
                     * timed out), return <code>false</code>; otherwise, return
                     * <code>true</code>.
                     * @param request The request to be restored
                     * @param session The session containing the saved information
                     * @return <code>true</code> if the request was successfully restored
                     * @throws IOException if an IO error occurred during the process
                     */
                    // @ts-ignore
                    restoreRequest(request: org.apache.catalina.connector.Request, session: org.apache.catalina.Session): boolean
                    /**
                     * Save the original request information into our session.
                     * @param request The request to be saved
                     * @param session The session to contain the saved information
                     * @throws IOException if an IO error occurred during the process
                     */
                    // @ts-ignore
                    saveRequest(request: org.apache.catalina.connector.Request, session: org.apache.catalina.Session): void
                    /**
                     * Return the request URI (with the corresponding query string, if any)
                     * from the saved request so that we can redirect to it.
                     * @param session Our current session
                     * @return the original request URL
                     */
                    // @ts-ignore
                    savedRequestURL(session: org.apache.catalina.Session): string
                }
            }
        }
    }
}
