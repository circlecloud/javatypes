declare namespace org {
    namespace apache {
        namespace catalina {
            namespace manager {
                /**
                 * Servlet that enables remote management of the web applications deployed
                 * within the same virtual host as this web application is.  Normally, this
                 * functionality will be protected by a security constraint in the web
                 * application deployment descriptor.  However, this requirement can be
                 * relaxed during testing.
                 * <p>
                 * The difference between the <code>ManagerServlet</code> and this
                 * Servlet is that this Servlet prints out a HTML interface which
                 * makes it easier to administrate.
                 * <p>
                 * However if you use a software that parses the output of
                 * <code>ManagerServlet</code> you won't be able to upgrade
                 * to this Servlet since the output are not in the
                 * same format ar from <code>ManagerServlet</code>
                 * @author Bip Thelin
                 * @author Malcolm Edgar
                 * @author Glenn L. Nielsen
                 * @see ManagerServlet
                 */
                // @ts-ignore
                class HTMLManagerServlet extends org.apache.catalina.manager.ManagerServlet {
                    // @ts-ignore
                    constructor()
                    /**
                     * Process a GET request for the specified resource.
                     * @param request The servlet request we are processing
                     * @param response The servlet response we are creating
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet-specified error occurs
                     */
                    // @ts-ignore
                    public doGet(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse): void
                    /**
                     * Process a POST request for the specified resource.
                     * @param request The servlet request we are processing
                     * @param response The servlet response we are creating
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet-specified error occurs
                     */
                    // @ts-ignore
                    public doPost(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse): void
                    // @ts-ignore
                    upload(request: javax.servlet.http.HttpServletRequest, smClient: org.apache.tomcat.util.res.StringManager): string
                    /**
                     * Deploy an application for the specified path from the specified
                     * web application archive.
                     * @param config URL of the context configuration file to be deployed
                     * @param cn Name of the application to be deployed
                     * @param war URL of the web application archive to be deployed
                     * @param smClient internationalized strings
                     * @return message String
                     */
                    // @ts-ignore
                    deployInternal(config: java.lang.String | string, cn: org.apache.catalina.util.ContextName, war: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): string
                    /**
                     * Render a HTML list of the currently active Contexts in our virtual host,
                     * and memory and server status information.
                     * @param request The request
                     * @param response The response
                     * @param message a message to display
                     * @param smClient internationalized strings
                     * @throws IOException an IO error occurred
                     */
                    // @ts-ignore
                    list(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, message: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Reload the web application at the specified context path.
                     * @see ManagerServlet#reload(PrintWriter, ContextName, StringManager)
                     * @param cn Name of the application to be restarted
                     * @param smClient  StringManager for the client's locale
                     * @return message String
                     */
                    // @ts-ignore
                    reload(cn: org.apache.catalina.util.ContextName, smClient: org.apache.tomcat.util.res.StringManager): string
                    /**
                     * Undeploy the web application at the specified context path.
                     * @see ManagerServlet#undeploy(PrintWriter, ContextName, StringManager)
                     * @param cn Name of the application to be undeployed
                     * @param smClient  StringManager for the client's locale
                     * @return message String
                     */
                    // @ts-ignore
                    undeploy(cn: org.apache.catalina.util.ContextName, smClient: org.apache.tomcat.util.res.StringManager): string
                    /**
                     * Display session information and invoke list.
                     * @see ManagerServlet#sessions(PrintWriter, ContextName, int,
                     *           StringManager)
                     * @param cn Name of the application to list session information
                     * @param idle Expire all sessions with idle time &ge; idle for this context
                     * @param smClient  StringManager for the client's locale
                     * @return message String
                     */
                    // @ts-ignore
                    sessions(cn: org.apache.catalina.util.ContextName, idle: number /*int*/, smClient: org.apache.tomcat.util.res.StringManager): string
                    /**
                     * Start the web application at the specified context path.
                     * @see ManagerServlet#start(PrintWriter, ContextName, StringManager)
                     * @param cn Name of the application to be started
                     * @param smClient  StringManager for the client's locale
                     * @return message String
                     */
                    // @ts-ignore
                    start(cn: org.apache.catalina.util.ContextName, smClient: org.apache.tomcat.util.res.StringManager): string
                    /**
                     * Stop the web application at the specified context path.
                     * @see ManagerServlet#stop(PrintWriter, ContextName, StringManager)
                     * @param cn Name of the application to be stopped
                     * @param smClient  StringManager for the client's locale
                     * @return message String
                     */
                    // @ts-ignore
                    stop(cn: org.apache.catalina.util.ContextName, smClient: org.apache.tomcat.util.res.StringManager): string
                    /**
                     * Find potential memory leaks caused by web application reload.
                     * @see ManagerServlet#findleaks(boolean, PrintWriter, StringManager)
                     * @param smClient  StringManager for the client's locale
                     * @return message String
                     */
                    // @ts-ignore
                    findleaks(smClient: org.apache.tomcat.util.res.StringManager): string
                    // @ts-ignore
                    sslReload(tlsHostName: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): string
                    // @ts-ignore
                    sslConnectorCiphers(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, smClient: org.apache.tomcat.util.res.StringManager): void
                    // @ts-ignore
                    sslConnectorCerts(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, smClient: org.apache.tomcat.util.res.StringManager): void
                    // @ts-ignore
                    sslConnectorTrustedCerts(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * @see javax.servlet.Servlet#getServletInfo()
                     */
                    // @ts-ignore
                    public getServletInfo(): string
                    /**
                     * @see javax.servlet.GenericServlet#init()
                     */
                    // @ts-ignore
                    public init(): void
                    /**
                     * Extract the expiration request parameter
                     * @param cn Name of the application from which to expire sessions
                     * @param req The Servlet request
                     * @param smClient StringManager for the client's locale
                     * @return message string
                     */
                    // @ts-ignore
                    expireSessions(cn: org.apache.catalina.util.ContextName, req: javax.servlet.http.HttpServletRequest, smClient: org.apache.tomcat.util.res.StringManager): string
                    /**
                     * Handle session operations.
                     * @param cn Name of the application for the sessions operation
                     * @param req The Servlet request
                     * @param resp The Servlet response
                     * @param smClient StringManager for the client's locale
                     * @throws ServletException Propagated Servlet error
                     * @throws IOException An IO error occurred
                     */
                    // @ts-ignore
                    doSessions(cn: org.apache.catalina.util.ContextName, req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse, smClient: org.apache.tomcat.util.res.StringManager): void
                    // @ts-ignore
                    getSessionsForName(cn: org.apache.catalina.util.ContextName, smClient: org.apache.tomcat.util.res.StringManager): Array<org.apache.catalina.Session>
                    // @ts-ignore
                    getSessionForNameAndId(cn: org.apache.catalina.util.ContextName, id: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): org.apache.catalina.Session
                    /**
                     * List session.
                     * @param cn Name of the application for which the sessions will be listed
                     * @param req The Servlet request
                     * @param resp The Servlet response
                     * @param smClient StringManager for the client's locale
                     * @throws ServletException Propagated Servlet error
                     * @throws IOException An IO error occurred
                     */
                    // @ts-ignore
                    displaySessionsListPage(cn: org.apache.catalina.util.ContextName, req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Display session details.
                     * @param req The Servlet request
                     * @param resp The Servlet response
                     * @param cn Name of the application for which the sessions will be listed
                     * @param sessionId the session id
                     * @param smClient StringManager for the client's locale
                     * @throws ServletException Propagated Servlet error
                     * @throws IOException An IO error occurred
                     */
                    // @ts-ignore
                    displaySessionDetailPage(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse, cn: org.apache.catalina.util.ContextName, sessionId: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Invalidate specified sessions.
                     * @param cn Name of the application for which sessions are to be
                     *            invalidated
                     * @param sessionIds the session ids of the sessions
                     * @param smClient  StringManager for the client's locale
                     * @return number of invalidated sessions
                     */
                    // @ts-ignore
                    invalidateSessions(cn: org.apache.catalina.util.ContextName, sessionIds: java.lang.String[] | string[], smClient: org.apache.tomcat.util.res.StringManager): number /*int*/
                    /**
                     * Removes an attribute from an HttpSession
                     * @param cn Name of the application hosting the session from which the
                     *            attribute is to be removed
                     * @param sessionId the session id
                     * @param attributeName the attribute name
                     * @param smClient  StringManager for the client's locale
                     * @return true if there was an attribute removed, false otherwise
                     */
                    // @ts-ignore
                    removeSessionAttribute(cn: org.apache.catalina.util.ContextName, sessionId: java.lang.String | string, attributeName: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): boolean
                    // @ts-ignore
                    getComparator(sortBy: java.lang.String | string): java.util.Comparator<org.apache.catalina.Session>
                }
            }
        }
    }
}
