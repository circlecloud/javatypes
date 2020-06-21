declare namespace org {
    namespace apache {
        namespace catalina {
            namespace manager {
                namespace host {
                    /**
                     * Servlet that enables remote management of the virtual hosts deployed
                     * on the server.  Normally, this functionality will be protected by a security
                     * constraint in the web application deployment descriptor.  However,
                     * this requirement can be relaxed during testing.
                     * <p>
                     * The difference between the <code>HostManagerServlet</code> and this
                     * Servlet is that this Servlet prints out a HTML interface which
                     * makes it easier to administrate.
                     * <p>
                     * However if you use a software that parses the output of
                     * <code>HostManagerServlet</code> you won't be able to upgrade
                     * to this Servlet since the output are not in the
                     * same format as from <code>HostManagerServlet</code>
                     * @author Bip Thelin
                     * @author Malcolm Edgar
                     * @author Glenn L. Nielsen
                     * @author Peter Rossbach
                     * @see org.apache.catalina.manager.ManagerServlet
                     */
                    // @ts-ignore
                    class HTMLHostManagerServlet extends org.apache.catalina.manager.host.HostManagerServlet {
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
                        /**
                         * Add a host using the specified parameters.
                         * @param request The Servlet request
                         * @param name Host name
                         * @param smClient StringManager for the client's locale
                         * @return output
                         */
                        // @ts-ignore
                        add(request: javax.servlet.http.HttpServletRequest, name: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): string
                        /**
                         * Remove the specified host.
                         * @param name Host name
                         * @param smClient StringManager for the client's locale
                         * @return output
                         */
                        // @ts-ignore
                        remove(name: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): string
                        /**
                         * Start the host with the specified name.
                         * @param name Host name
                         * @param smClient StringManager for the client's locale
                         * @return output
                         */
                        // @ts-ignore
                        start(name: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): string
                        /**
                         * Stop the host with the specified name.
                         * @param name Host name
                         * @param smClient StringManager for the client's locale
                         * @return output
                         */
                        // @ts-ignore
                        stop(name: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): string
                        /**
                         * Persist the current configuration to server.xml.
                         * @param smClient i18n resources localized for the client
                         * @return output
                         */
                        // @ts-ignore
                        persist(smClient: org.apache.tomcat.util.res.StringManager): string
                        /**
                         * Render a HTML list of the currently active Contexts in our virtual host,
                         * and memory and server status information.
                         * @param request The request
                         * @param response The response
                         * @param message a message to display
                         * @param smClient StringManager for the client's locale
                         * @throws IOException An IO error occurred
                         */
                        // @ts-ignore
                        public list(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, message: java.lang.String | string, smClient: org.apache.tomcat.util.res.StringManager): void
                    }
                }
            }
        }
    }
}
