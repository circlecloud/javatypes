declare namespace org {
    namespace apache {
        namespace catalina {
            namespace manager {
                /**
                 * This servlet will display a complete status of the HTTP/1.1 connector.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class StatusManagerServlet extends javax.servlet.http.HttpServlet implements javax.management.NotificationListener {
                    // @ts-ignore
                    constructor()
                    /**
                     * MBean server.
                     */
                    // @ts-ignore
                    mBeanServer: javax.management.MBeanServer
                    /**
                     * Vector of protocol handlers object names.
                     */
                    // @ts-ignore
                    readonly protocolHandlers: java.util.Vector<javax.management.ObjectName>
                    /**
                     * Vector of thread pools object names.
                     */
                    // @ts-ignore
                    readonly threadPools: java.util.Vector<javax.management.ObjectName>
                    /**
                     * Vector of request processors object names.
                     */
                    // @ts-ignore
                    readonly requestProcessors: java.util.Vector<javax.management.ObjectName>
                    /**
                     * Vector of global request processors object names.
                     */
                    // @ts-ignore
                    readonly globalRequestProcessors: java.util.Vector<javax.management.ObjectName>
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Initialize this servlet.
                     */
                    // @ts-ignore
                    public init(): void
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
                    // @ts-ignore
                    public handleNotification(notification: javax.management.Notification, handback: java.lang.Object | any): void
                }
            }
        }
    }
}
