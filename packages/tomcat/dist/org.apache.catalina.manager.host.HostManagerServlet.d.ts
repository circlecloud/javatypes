declare namespace org {
    namespace apache {
        namespace catalina {
            namespace manager {
                namespace host {
                    /**
                     * Servlet that enables remote management of the virtual hosts installed
                     * on the server.  Normally, this functionality will be protected by
                     * a security constraint in the web application deployment descriptor.
                     * However, this requirement can be relaxed during testing.
                     * <p>
                     * This servlet examines the value returned by <code>getPathInfo()</code>
                     * and related query parameters to determine what action is being requested.
                     * The following actions and parameters (starting after the servlet path)
                     * are supported:
                     * <ul>
                     * <li><b>/add?name={host-name}&amp;aliases={host-aliases}&amp;manager={manager}</b> -
                     * Create and add a new virtual host. The <code>host-name</code> attribute
                     * indicates the name of the new host. The <code>host-aliases</code>
                     * attribute is a comma separated list of the host alias names.
                     * The <code>manager</code> attribute is a boolean value indicating if the
                     * webapp manager will be installed in the newly created host (optional,
                     * false by default).</li>
                     * <li><b>/remove?name={host-name}</b> - Remove a virtual host.
                     * The <code>host-name</code> attribute indicates the name of the host.
                     * </li>
                     * <li><b>/list</b> - List the virtual hosts installed on the server.
                     * Each host will be listed with the following format
                     * <code>host-name#host-aliases</code>.</li>
                     * <li><b>/start?name={host-name}</b> - Start the virtual host.</li>
                     * <li><b>/stop?name={host-name}</b> - Stop the virtual host.</li>
                     * </ul>
                     * <p>
                     * <b>NOTE</b> - Attempting to stop or remove the host containing
                     * this servlet itself will not succeed.  Therefore, this servlet should
                     * generally be deployed in a separate virtual host.
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
                    class HostManagerServlet extends javax.servlet.http.HttpServlet implements org.apache.catalina.ContainerServlet {
                        // @ts-ignore
                        constructor()
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
                         * The associated host.
                         */
                        // @ts-ignore
                        installedHost: org.apache.catalina.Host
                        /**
                         * The associated engine.
                         */
                        // @ts-ignore
                        engine: org.apache.catalina.Engine
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
                         * Add host with the given parameters.
                         * @param request The request
                         * @param writer The output writer
                         * @param name The host name
                         * @param htmlMode Flag value
                         * @param smClient StringManager for the client's locale
                         */
                        // @ts-ignore
                        add(request: javax.servlet.http.HttpServletRequest, writer: java.io.PrintWriter, name: java.lang.String | string, htmlMode: boolean, smClient: org.apache.tomcat.util.res.StringManager): void
                        /**
                         * Extract boolean value from checkbox with default.
                         * @param request The Servlet request
                         * @param parameter The parameter name
                         * @param theDefault Default value
                         * @param htmlMode Flag value
                         * @return the boolean value for the parameter
                         */
                        // @ts-ignore
                        booleanParameter(request: javax.servlet.http.HttpServletRequest, parameter: java.lang.String | string, theDefault: boolean, htmlMode: boolean): boolean
                        // @ts-ignore
                        public init(): void
                        /**
                         * Add a host using the specified parameters.
                         * @param writer Writer to render results to
                         * @param name host name
                         * @param aliases comma separated alias list
                         * @param appBase application base for the host
                         * @param manager should the manager webapp be deployed to the new host ?
                         * @param autoDeploy Flag value
                         * @param deployOnStartup Flag value
                         * @param deployXML Flag value
                         * @param unpackWARs Flag value
                         * @param copyXML Flag value
                         * @param smClient StringManager for the client's locale
                         */
                        // @ts-ignore
                        add(writer: java.io.PrintWriter, name: java.lang.String | string, aliases: java.lang.String | string, appBase: java.lang.String | string, manager: boolean, autoDeploy: boolean, deployOnStartup: boolean, deployXML: boolean, unpackWARs: boolean, copyXML: boolean, smClient: org.apache.tomcat.util.res.StringManager): void
                        /**
                         * Remove the specified host.
                         * @param writer Writer to render results to
                         * @param name host name
                         * @param smClient StringManager for the client's locale
                         */
                        // @ts-ignore
                        remove(writer: java.io.PrintWriter, name: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): void
                        /**
                         * Render a list of the currently active Contexts in our virtual host.
                         * @param writer Writer to render to
                         * @param smClient StringManager for the client's locale
                         */
                        // @ts-ignore
                        list(writer: java.io.PrintWriter, smClient: org.apache.tomcat.util.res.StringManager): void
                        /**
                         * Start the host with the specified name.
                         * @param writer Writer to render to
                         * @param name Host name
                         * @param smClient StringManager for the client's locale
                         */
                        // @ts-ignore
                        start(writer: java.io.PrintWriter, name: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): void
                        /**
                         * Stop the host with the specified name.
                         * @param writer Writer to render to
                         * @param name Host name
                         * @param smClient StringManager for the client's locale
                         */
                        // @ts-ignore
                        stop(writer: java.io.PrintWriter, name: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): void
                        /**
                         * Persist the current configuration to server.xml.
                         * @param writer Writer to render to
                         * @param smClient i18n resources localized for the client
                         */
                        // @ts-ignore
                        persist(writer: java.io.PrintWriter, smClient: org.apache.tomcat.util.res.StringManager): void
                        /**
                         * Get config base.
                         * @param hostName The host name
                         * @return the config base for the host
                         */
                        // @ts-ignore
                        getConfigBase(hostName: java.lang.String | string): java.io.File
                    }
                }
            }
        }
    }
}
