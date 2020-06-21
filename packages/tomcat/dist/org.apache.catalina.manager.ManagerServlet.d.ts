declare namespace org {
    namespace apache {
        namespace catalina {
            namespace manager {
                /**
                 * Servlet that enables remote management of the web applications installed
                 * within the same virtual host as this web application is.  Normally, this
                 * functionality will be protected by a security constraint in the web
                 * application deployment descriptor.  However, this requirement can be
                 * relaxed during testing.
                 * <p>
                 * This servlet examines the value returned by <code>getPathInfo()</code>
                 * and related query parameters to determine what action is being requested.
                 * The following actions and parameters (starting after the servlet path)
                 * are supported:
                 * <ul>
                 * <li><b>/deploy?config={config-url}</b> - Install and start a new
                 * web application, based on the contents of the context configuration
                 * file found at the specified URL.  The <code>docBase</code> attribute
                 * of the context configuration file is used to locate the actual
                 * WAR or directory containing the application.</li>
                 * <li><b>/deploy?config={config-url}&amp;war={war-url}/</b> - Install and start
                 * a new web application, based on the contents of the context
                 * configuration file found at <code>{config-url}</code>, overriding the
                 * <code>docBase</code> attribute with the contents of the web
                 * application archive found at <code>{war-url}</code>.</li>
                 * <li><b>/deploy?path=/xxx&amp;war={war-url}</b> - Install and start a new
                 * web application attached to context path <code>/xxx</code>, based
                 * on the contents of the web application archive found at the
                 * specified URL.</li>
                 * <li><b>/list</b> - List the context paths of all currently installed web
                 * applications for this virtual host.  Each context will be listed with
                 * the following format <code>path:status:sessions</code>.
                 * Where path is the context path.  Status is either running or stopped.
                 * Sessions is the number of active Sessions.</li>
                 * <li><b>/reload?path=/xxx</b> - Reload the Java classes and resources for
                 * the application at the specified path.</li>
                 * <li><b>/resources?type=xxxx</b> - Enumerate the available global JNDI
                 * resources, optionally limited to those of the specified type
                 * (fully qualified Java class name), if available.</li>
                 * <li><b>/serverinfo</b> - Display system OS and JVM properties.
                 * <li><b>/sessions</b> - Deprecated. Use expire.
                 * <li><b>/expire?path=/xxx</b> - List session idle time information about the
                 * web application attached to context path <code>/xxx</code> for this
                 * virtual host.</li>
                 * <li><b>/expire?path=/xxx&amp;idle=mm</b> - Expire sessions
                 * for the context path <code>/xxx</code> which were idle for at
                 * least mm minutes.</li>
                 * <li><b>/sslConnectorCiphers</b> - Display diagnostic info on SSL/TLS ciphers
                 * that are currently configured for each connector.
                 * <li><b>/start?path=/xxx</b> - Start the web application attached to
                 * context path <code>/xxx</code> for this virtual host.</li>
                 * <li><b>/stop?path=/xxx</b> - Stop the web application attached to
                 * context path <code>/xxx</code> for this virtual host.</li>
                 * <li><b>/threaddump</b> - Write a JVM thread dump.</li>
                 * <li><b>/undeploy?path=/xxx</b> - Shutdown and remove the web application
                 * attached to context path <code>/xxx</code> for this virtual host,
                 * and remove the underlying WAR file or document base directory.
                 * (<em>NOTE</em> - This is only allowed if the WAR file or document
                 * base is stored in the <code>appBase</code> directory of this host,
                 * typically as a result of being placed there via the <code>/deploy</code>
                 * command.</li>
                 * <li><b>/vminfo</b> - Write some VM info.</li>
                 * <li><b>/save</b> - Save the current server configuration to server.xml</li>
                 * <li><b>/save?path=/xxx</b> - Save the context configuration for the web
                 * application deployed with path <code>/xxx</code> to an appropriately
                 * named context.xml file in the <code>xmlBase</code> for the associated
                 * Host.</li>
                 * </ul>
                 * <p>Use <code>path=/</code> for the ROOT context.</p>
                 * <p>The syntax of the URL for a web application archive must conform to one
                 * of the following patterns to be successfully deployed:</p>
                 * <ul>
                 * <li><b>file:/absolute/path/to/a/directory</b> - You can specify the absolute
                 * path of a directory that contains the unpacked version of a web
                 * application.  This directory will be attached to the context path you
                 * specify without any changes.</li>
                 * </ul>
                 * <p>
                 * <b>NOTE</b> - Attempting to reload or remove the application containing
                 * this servlet itself will not succeed.  Therefore, this servlet should
                 * generally be deployed as a separate web application within the virtual host
                 * to be managed.
                 * <p>
                 * The following servlet initialization parameters are recognized:
                 * <ul>
                 * <li><b>debug</b> - The debugging detail level that controls the amount
                 * of information that is logged by this servlet.  Default is zero.
                 * </ul>
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class ManagerServlet extends javax.servlet.http.HttpServlet implements org.apache.catalina.ContainerServlet {
                    // @ts-ignore
                    constructor()
                    /**
                     * Path where context descriptors should be deployed.
                     */
                    // @ts-ignore
                    configBase: java.io.File
                    /**
                     * The Context container associated with our web application.
                     */
                    // @ts-ignore
                    context: org.apache.catalina.Context
                    /**
                     * The debugging detail level for this servlet.
                     */
                    // @ts-ignore
                    debug: number /*int*/
                    /**
                     * Path used to store revisions of webapps.
                     */
                    // @ts-ignore
                    versioned: java.io.File
                    /**
                     * The associated host.
                     */
                    // @ts-ignore
                    host: org.apache.catalina.Host
                    /**
                     * MBean server.
                     */
                    // @ts-ignore
                    mBeanServer: javax.management.MBeanServer
                    /**
                     * The associated deployer ObjectName.
                     */
                    // @ts-ignore
                    oname: javax.management.ObjectName
                    /**
                     * The global JNDI <code>NamingContext</code> for this server,
                     * if available.
                     */
                    // @ts-ignore
                    global: javax.naming.Context
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * The Wrapper container associated with this servlet.
                     */
                    // @ts-ignore
                    wrapper: org.apache.catalina.Wrapper
                    /**
                     * Return the Wrapper with which we are associated.
                     */
                    // @ts-ignore
                    public getWrapper(): org.apache.catalina.Wrapper
                    /**
                     * Set the Wrapper with which we are associated.
                     * @param wrapper The new wrapper
                     */
                    // @ts-ignore
                    public setWrapper(wrapper: org.apache.catalina.Wrapper): void
                    /**
                     * Finalize this servlet.
                     */
                    // @ts-ignore
                    public destroy(): void
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
                     * Process a PUT request for the specified resource.
                     * @param request The servlet request we are processing
                     * @param response The servlet response we are creating
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet-specified error occurs
                     */
                    // @ts-ignore
                    public doPut(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse): void
                    /**
                     * Initialize this servlet.
                     */
                    // @ts-ignore
                    public init(): void
                    /**
                     * Find potential memory leaks caused by web application reload.
                     * @param statusLine Print a status line
                     * @param writer The output writer
                     * @param smClient StringManager for the client's locale
                     */
                    // @ts-ignore
                    findleaks(statusLine: boolean, writer: java.io.PrintWriter, smClient: org.apache.tomcat.util.res.StringManager): void
                    // @ts-ignore
                    sslReload(writer: java.io.PrintWriter, tlsHostName: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Write some VM info.
                     * @param writer The output writer
                     * @param smClient StringManager for the client's locale
                     * @param requestedLocales the client's locales
                     */
                    // @ts-ignore
                    vmInfo(writer: java.io.PrintWriter, smClient: org.apache.tomcat.util.res.StringManager, requestedLocales: java.util.Enumeration<java.util.Locale>): void
                    /**
                     * Write a JVM thread dump.
                     * @param writer The output writer
                     * @param smClient StringManager for the client's locale
                     * @param requestedLocales the client's locales
                     */
                    // @ts-ignore
                    threadDump(writer: java.io.PrintWriter, smClient: org.apache.tomcat.util.res.StringManager, requestedLocales: java.util.Enumeration<java.util.Locale>): void
                    // @ts-ignore
                    sslConnectorCiphers(writer: java.io.PrintWriter, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Store server configuration.
                     * @param writer   Destination for any user message(s) during this operation
                     * @param path     Optional context path to save
                     * @param smClient i18n support for current client's locale
                     */
                    // @ts-ignore
                    save(writer: java.io.PrintWriter, path: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Deploy a web application archive (included in the current request)
                     * at the specified context path.
                     * @param writer   Writer to render results to
                     * @param config   URL of the context configuration file to be installed
                     * @param cn       Name of the application to be installed
                     * @param tag      Tag to be associated with the webapp
                     * @param update   Flag that indicates that any existing app should be
                     *                    replaced
                     * @param request  Servlet request we are processing
                     * @param smClient i18n messages using the locale of the client
                     */
                    // @ts-ignore
                    deploy(writer: java.io.PrintWriter, config: java.lang.String | string, cn: org.apache.catalina.util.ContextName, tag: java.lang.String | string, update: boolean, request: javax.servlet.http.HttpServletRequest, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Install an application for the specified path from the specified
                     * web application archive.
                     * @param writer    Writer to render results to
                     * @param tag       Revision tag to deploy from
                     * @param cn        Name of the application to be installed
                     * @param smClient  i18n messages using the locale of the client
                     */
                    // @ts-ignore
                    deploy(writer: java.io.PrintWriter, cn: org.apache.catalina.util.ContextName, tag: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Install an application for the specified path from the specified
                     * web application archive.
                     * @param writer    Writer to render results to
                     * @param config    URL of the context configuration file to be installed
                     * @param cn        Name of the application to be installed
                     * @param war       URL of the web application archive to be installed
                     * @param update    true to override any existing webapp on the path
                     * @param smClient  i18n messages using the locale of the client
                     */
                    // @ts-ignore
                    deploy(writer: java.io.PrintWriter, config: java.lang.String | string, cn: org.apache.catalina.util.ContextName, war: java.lang.String | string, update: boolean, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Render a list of the currently active Contexts in our virtual host.
                     * @param writer Writer to render to
                     * @param smClient i18n support for current client's locale
                     */
                    // @ts-ignore
                    list(writer: java.io.PrintWriter, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Reload the web application at the specified context path.
                     * @param writer Writer to render to
                     * @param cn Name of the application to be restarted
                     * @param smClient i18n support for current client's locale
                     */
                    // @ts-ignore
                    reload(writer: java.io.PrintWriter, cn: org.apache.catalina.util.ContextName, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Render a list of available global JNDI resources.
                     * @param writer Writer to render to
                     * @param type Fully qualified class name of the resource type of interest,
                     *   or <code>null</code> to list resources of all types
                     * @param smClient i18n support for current client's locale
                     */
                    // @ts-ignore
                    resources(writer: java.io.PrintWriter, type: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * List the resources of the given context.
                     * @param writer Writer to render to
                     * @param prefix Path for recursion
                     * @param namingContext The naming context for lookups
                     * @param type Fully qualified class name of the resource type of interest,
                     *   or <code>null</code> to list resources of all types
                     * @param clazz The resource class or <code>null</code> to list
                     *   resources of all types
                     * @param smClient i18n support for current client's locale
                     */
                    // @ts-ignore
                    printResources(writer: java.io.PrintWriter, prefix: java.lang.String | string, namingContext: javax.naming.Context, type: java.lang.String | string, clazz: java.lang.Class<any>, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Writes System OS and JVM properties.
                     * @param writer Writer to render to
                     * @param smClient i18n support for current client's locale
                     */
                    // @ts-ignore
                    serverinfo(writer: java.io.PrintWriter, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Session information for the web application at the specified context path.
                     * Displays a profile of session thisAccessedTime listing number
                     * of sessions for each 10 minute interval up to 10 hours.
                     * @param writer Writer to render to
                     * @param cn Name of the application to list session information for
                     * @param idle Expire all sessions with idle time &gt; idle for this context
                     * @param smClient i18n support for current client's locale
                     */
                    // @ts-ignore
                    sessions(writer: java.io.PrintWriter, cn: org.apache.catalina.util.ContextName, idle: number /*int*/, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Extract the expiration request parameter
                     * @param writer Writer to render to
                     * @param cn Name of the application to list session information for
                     * @param req The Servlet request
                     * @param smClient i18n support for current client's locale
                     */
                    // @ts-ignore
                    expireSessions(writer: java.io.PrintWriter, cn: org.apache.catalina.util.ContextName, req: javax.servlet.http.HttpServletRequest, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Start the web application at the specified context path.
                     * @param writer Writer to render to
                     * @param cn Name of the application to be started
                     * @param smClient i18n support for current client's locale
                     */
                    // @ts-ignore
                    start(writer: java.io.PrintWriter, cn: org.apache.catalina.util.ContextName, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Stop the web application at the specified context path.
                     * @param writer Writer to render to
                     * @param cn Name of the application to be stopped
                     * @param smClient i18n support for current client's locale
                     */
                    // @ts-ignore
                    stop(writer: java.io.PrintWriter, cn: org.apache.catalina.util.ContextName, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Undeploy the web application at the specified context path.
                     * @param writer Writer to render to
                     * @param cn Name of the application to be removed
                     * @param smClient i18n support for current client's locale
                     */
                    // @ts-ignore
                    undeploy(writer: java.io.PrintWriter, cn: org.apache.catalina.util.ContextName, smClient: org.apache.tomcat.util.res.StringManager): void
                    /**
                     * Invoke the isDeployed method on the deployer.
                     * @param name The webapp name
                     * @return <code>true</code> if a webapp with that name is deployed
                     * @throws Exception Propagate JMX invocation error
                     */
                    // @ts-ignore
                    isDeployed(name: java.lang.String | string): boolean
                    /**
                     * Invoke the check method on the deployer.
                     * @param name The webapp name
                     * @throws Exception Propagate JMX invocation error
                     */
                    // @ts-ignore
                    check(name: java.lang.String | string): void
                    /**
                     * Invoke the isServiced method on the deployer.
                     * @param name The webapp name
                     * @return <code>true</code> if a webapp with that name is being serviced
                     * @throws Exception Propagate JMX invocation error
                     */
                    // @ts-ignore
                    isServiced(name: java.lang.String | string): boolean
                    /**
                     * Invoke the addServiced method on the deployer.
                     * @param name The webapp name
                     * @throws Exception Propagate JMX invocation error
                     */
                    // @ts-ignore
                    addServiced(name: java.lang.String | string): void
                    /**
                     * Invoke the removeServiced method on the deployer.
                     * @param name The webapp name
                     * @throws Exception Propagate JMX invocation error
                     */
                    // @ts-ignore
                    removeServiced(name: java.lang.String | string): void
                    /**
                     * Upload the WAR file included in this request, and store it at the
                     * specified file location.
                     * @param writer    Writer to render to
                     * @param request   The servlet request we are processing
                     * @param war       The file into which we should store the uploaded WAR
                     * @param smClient  The StringManager used to construct i18n messages based
                     *                   on the Locale of the client
                     * @exception IOException if an I/O error occurs during processing
                     */
                    // @ts-ignore
                    uploadWar(writer: java.io.PrintWriter, request: javax.servlet.http.HttpServletRequest, war: java.io.File, smClient: org.apache.tomcat.util.res.StringManager): void
                    // @ts-ignore
                    static validateContextName(cn: org.apache.catalina.util.ContextName, writer: java.io.PrintWriter, smClient: org.apache.tomcat.util.res.StringManager): boolean
                    // @ts-ignore
                    getConnectorCiphers(smClient: org.apache.tomcat.util.res.StringManager): java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                    // @ts-ignore
                    getConnectorCerts(smClient: org.apache.tomcat.util.res.StringManager): java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                    // @ts-ignore
                    getConnectorTrustedCerts(smClient: org.apache.tomcat.util.res.StringManager): java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                }
            }
        }
    }
}
