declare namespace org {
    namespace apache {
        namespace catalina {
            namespace manager {
                /**
                 * This is a refactoring of the servlet to externalize
                 * the output into a simple class. Although we could
                 * use XSLT, that is unnecessarily complex.
                 * @author Peter Lin
                 */
                // @ts-ignore
                class StatusTransformer extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static setContentType(response: javax.servlet.http.HttpServletResponse, mode: number /*int*/): void
                    /**
                     * Write an HTML or XML header.
                     * @param writer the PrintWriter to use
                     * @param args Path prefix for URLs
                     * @param mode - 0 = HTML header, 1 = XML declaration
                     */
                    // @ts-ignore
                    public static writeHeader(writer: java.io.PrintWriter, args: java.lang.Object[] | any[], mode: number /*int*/): void
                    /**
                     * Write the header body. XML output doesn't bother
                     * to output this stuff, since it's just title.
                     * @param writer The output writer
                     * @param args What to write
                     * @param mode 0 means write
                     */
                    // @ts-ignore
                    public static writeBody(writer: java.io.PrintWriter, args: java.lang.Object[] | any[], mode: number /*int*/): void
                    /**
                     * Write the manager webapp information.
                     * @param writer The output writer
                     * @param args What to write
                     * @param mode 0 means write
                     */
                    // @ts-ignore
                    public static writeManager(writer: java.io.PrintWriter, args: java.lang.Object[] | any[], mode: number /*int*/): void
                    // @ts-ignore
                    public static writePageHeading(writer: java.io.PrintWriter, args: java.lang.Object[] | any[], mode: number /*int*/): void
                    // @ts-ignore
                    public static writeServerInfo(writer: java.io.PrintWriter, args: java.lang.Object[] | any[], mode: number /*int*/): void
                    // @ts-ignore
                    public static writeFooter(writer: java.io.PrintWriter, mode: number /*int*/): void
                    /**
                     * Write the OS state.
                     * @param writer The output writer
                     * @param mode Mode <code>0</code> will generate HTML.
                     *              Mode <code>1</code> will generate XML.
                     * @param args I18n labels for the OS state values
                     */
                    // @ts-ignore
                    public static writeOSState(writer: java.io.PrintWriter, mode: number /*int*/, args: java.lang.Object[] | any[]): void
                    /**
                     * Write the VM state.
                     * @param writer The output writer
                     * @param mode Mode <code>0</code> will generate HTML.
                     *              Mode <code>1</code> will generate XML.
                     * @param args I18n labels for the VM state values
                     * @throws Exception Propagated JMX error
                     */
                    // @ts-ignore
                    public static writeVMState(writer: java.io.PrintWriter, mode: number /*int*/, args: java.lang.Object[] | any[]): void
                    /**
                     * Write connector state.
                     * @param writer The output writer
                     * @param tpName MBean name of the thread pool
                     * @param name Connector name
                     * @param mBeanServer MBean server
                     * @param globalRequestProcessors MBean names for the global request processors
                     * @param requestProcessors MBean names for the request processors
                     * @param mode Mode <code>0</code> will generate HTML.
                     *              Mode <code>1</code> will generate XML.
                     * @param args I18n labels for the Connector state values
                     * @throws Exception Propagated JMX error
                     */
                    // @ts-ignore
                    public static writeConnectorState(writer: java.io.PrintWriter, tpName: javax.management.ObjectName, name: java.lang.String | string, mBeanServer: javax.management.MBeanServer, globalRequestProcessors: java.util.Vector<javax.management.ObjectName>, requestProcessors: java.util.Vector<javax.management.ObjectName>, mode: number /*int*/, args: java.lang.Object[] | any[]): void
                    /**
                     * Write processor state.
                     * @param writer The output writer
                     * @param pName MBean name of the processor
                     * @param mBeanServer MBean server
                     * @param mode Mode <code>0</code> will generate HTML.
                     *    Mode <code>1</code> will generate XML.
                     * @throws Exception Propagated JMX error
                     */
                    // @ts-ignore
                    static writeProcessorState(writer: java.io.PrintWriter, pName: javax.management.ObjectName, mBeanServer: javax.management.MBeanServer, mode: number /*int*/): void
                    /**
                     * Write applications state.
                     * @param writer The output writer
                     * @param mBeanServer MBean server
                     * @param mode Mode <code>0</code> will generate HTML.
                     *    Mode <code>1</code> will generate XML.
                     * @throws Exception Propagated JMX error
                     */
                    // @ts-ignore
                    public static writeDetailedState(writer: java.io.PrintWriter, mBeanServer: javax.management.MBeanServer, mode: number /*int*/): void
                    /**
                     * Write context state.
                     * @param writer The output writer
                     * @param objectName The context MBean name
                     * @param mBeanServer MBean server
                     * @param mode Mode <code>0</code> will generate HTML.
                     *    Mode <code>1</code> will generate XML.
                     * @throws Exception Propagated JMX error
                     */
                    // @ts-ignore
                    static writeContext(writer: java.io.PrintWriter, objectName: javax.management.ObjectName, mBeanServer: javax.management.MBeanServer, mode: number /*int*/): void
                    /**
                     * Write detailed information about a manager.
                     * @param writer The output writer
                     * @param objectName The manager MBean name
                     * @param mBeanServer MBean server
                     * @param mode Mode <code>0</code> will generate HTML.
                     *    Mode <code>1</code> will generate XML.
                     * @throws Exception Propagated JMX error
                     */
                    // @ts-ignore
                    public static writeManager(writer: java.io.PrintWriter, objectName: javax.management.ObjectName, mBeanServer: javax.management.MBeanServer, mode: number /*int*/): void
                    /**
                     * Write JSP monitoring information.
                     * @param writer The output writer
                     * @param jspMonitorONs The JSP MBean names
                     * @param mBeanServer MBean server
                     * @param mode Mode <code>0</code> will generate HTML.
                     *    Mode <code>1</code> will generate XML.
                     * @throws Exception Propagated JMX error
                     */
                    // @ts-ignore
                    public static writeJspMonitor(writer: java.io.PrintWriter, jspMonitorONs: java.util.Set<javax.management.ObjectName> | Array<javax.management.ObjectName>, mBeanServer: javax.management.MBeanServer, mode: number /*int*/): void
                    /**
                     * Write detailed information about a wrapper.
                     * @param writer The output writer
                     * @param objectName The wrapper MBean names
                     * @param mBeanServer MBean server
                     * @param mode Mode <code>0</code> will generate HTML.
                     *    Mode <code>1</code> will generate XML.
                     * @throws Exception Propagated JMX error
                     */
                    // @ts-ignore
                    public static writeWrapper(writer: java.io.PrintWriter, objectName: javax.management.ObjectName, mBeanServer: javax.management.MBeanServer, mode: number /*int*/): void
                    /**
                     * Display the given size in bytes, either as KB or MB.
                     * @param obj The object to format
                     * @param mb true to display megabytes, false for kilobytes
                     * @return formatted size
                     */
                    // @ts-ignore
                    public static formatSize(obj: java.lang.Object | any, mb: boolean): string
                    /**
                     * Display the given time in ms, either as ms or s.
                     * @param obj The object to format
                     * @param seconds true to display seconds, false for milliseconds
                     * @return formatted time
                     */
                    // @ts-ignore
                    public static formatTime(obj: java.lang.Object | any, seconds: boolean): string
                    /**
                     * Formats the given time (given in seconds) as a string.
                     * @param obj Time object to be formatted as string
                     * @return formatted time
                     */
                    // @ts-ignore
                    public static formatSeconds(obj: java.lang.Object | any): string
                }
            }
        }
    }
}
