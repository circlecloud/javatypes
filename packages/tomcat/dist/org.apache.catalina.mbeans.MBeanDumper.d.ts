declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                /**
                 * General helper to dump MBean contents to the log.
                 */
                // @ts-ignore
                class MBeanDumper extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * The following code to dump MBeans has been copied from JMXProxyServlet.
                     * @param mbeanServer the MBean server
                     * @param names a set of object names for which to dump the info
                     * @return a string representation of the MBeans
                     */
                    // @ts-ignore
                    public static dumpBeans(mbeanServer: javax.management.MBeanServer, names: java.util.Set<javax.management.ObjectName> | Array<javax.management.ObjectName>): string
                    // @ts-ignore
                    public static escape(value: java.lang.String | string): string
                }
            }
        }
    }
}
