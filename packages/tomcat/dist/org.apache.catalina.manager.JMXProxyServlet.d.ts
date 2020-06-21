declare namespace org {
    namespace apache {
        namespace catalina {
            namespace manager {
                /**
                 * This servlet will dump JMX attributes in a simple format and implement proxy
                 * services for modeler.
                 * @author Costin Manolache
                 */
                // @ts-ignore
                class JMXProxyServlet extends javax.servlet.http.HttpServlet {
                    // @ts-ignore
                    constructor()
                    /**
                     * MBean server.
                     */
                    // @ts-ignore
                    mBeanServer: javax.management.MBeanServer
                    // @ts-ignore
                    registry: org.apache.tomcat.util.modeler.Registry
                    /**
                     * Initialize this servlet.
                     */
                    // @ts-ignore
                    public init(): void
                    /**
                     * Process a GET request for the specified resource.
                     * @param request The servlet request we are processing
                     * @param response The servlet response we are creating
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet-specified error occurs
                     */
                    // @ts-ignore
                    public doGet(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse): void
                    // @ts-ignore
                    public getAttribute(writer: java.io.PrintWriter, onameStr: java.lang.String | string, att: java.lang.String | string, key: java.lang.String | string): void
                    // @ts-ignore
                    public setAttribute(writer: java.io.PrintWriter, onameStr: java.lang.String | string, att: java.lang.String | string, val: java.lang.String | string): void
                    // @ts-ignore
                    public listBeans(writer: java.io.PrintWriter, qry: java.lang.String | string): void
                    /**
                     * Determines if a type is supported by the {@link JMXProxyServlet}.
                     * @param type The type to check
                     * @return Always returns <code>true</code>
                     */
                    // @ts-ignore
                    public isSupported(type: java.lang.String | string): boolean
                }
            }
        }
    }
}
