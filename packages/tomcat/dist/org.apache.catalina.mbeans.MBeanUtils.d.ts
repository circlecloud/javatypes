declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                /**
                 * Public utility methods in support of the server side MBeans implementation.
                 * @author Craig R. McClanahan
                 * @author Amy Roh
                 */
                // @ts-ignore
                class MBeanUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Create, register, and return an MBean for this
                     * <code>ContextEnvironment</code> object.
                     * @param environment The ContextEnvironment to be managed
                     * @return a new MBean
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public static createMBean(environment: org.apache.tomcat.util.descriptor.web.ContextEnvironment): javax.management.DynamicMBean
                    /**
                     * Create, register, and return an MBean for this
                     * <code>ContextResource</code> object.
                     * @param resource The ContextResource to be managed
                     * @return a new MBean
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public static createMBean(resource: org.apache.tomcat.util.descriptor.web.ContextResource): javax.management.DynamicMBean
                    /**
                     * Create, register, and return an MBean for this
                     * <code>ContextResourceLink</code> object.
                     * @param resourceLink The ContextResourceLink to be managed
                     * @return a new MBean
                     * @exception Exception if an MBean cannot be created or registered
                     */
                    // @ts-ignore
                    public static createMBean(resourceLink: org.apache.tomcat.util.descriptor.web.ContextResourceLink): javax.management.DynamicMBean
                    /**
                     * Create an <code>ObjectName</code> for this
                     * <code>Service</code> object.
                     * @param domain Domain in which this name is to be created
                     * @param environment The ContextEnvironment to be named
                     * @return a new object name
                     * @exception MalformedObjectNameException if a name cannot be created
                     */
                    // @ts-ignore
                    public static createObjectName(domain: java.lang.String | string, environment: org.apache.tomcat.util.descriptor.web.ContextEnvironment): javax.management.ObjectName
                    /**
                     * Create an <code>ObjectName</code> for this
                     * <code>ContextResource</code> object.
                     * @param domain Domain in which this name is to be created
                     * @param resource The ContextResource to be named
                     * @return a new object name
                     * @exception MalformedObjectNameException if a name cannot be created
                     */
                    // @ts-ignore
                    public static createObjectName(domain: java.lang.String | string, resource: org.apache.tomcat.util.descriptor.web.ContextResource): javax.management.ObjectName
                    /**
                     * Create an <code>ObjectName</code> for this
                     * <code>ContextResourceLink</code> object.
                     * @param domain Domain in which this name is to be created
                     * @param resourceLink The ContextResourceLink to be named
                     * @return a new object name
                     * @exception MalformedObjectNameException if a name cannot be created
                     */
                    // @ts-ignore
                    public static createObjectName(domain: java.lang.String | string, resourceLink: org.apache.tomcat.util.descriptor.web.ContextResourceLink): javax.management.ObjectName
                    /**
                     * Create and configure (if necessary) and return the registry of
                     * managed object descriptions.
                     * @return the singleton registry
                     */
                    // @ts-ignore
                    public static createRegistry(): org.apache.tomcat.util.modeler.Registry
                    /**
                     * Create and configure (if necessary) and return the
                     * <code>MBeanServer</code> with which we will be
                     * registering our <code>DynamicMBean</code> implementations.
                     * @return the singleton MBean server
                     */
                    // @ts-ignore
                    public static createServer(): javax.management.MBeanServer
                    /**
                     * Deregister the MBean for this
                     * <code>ContextEnvironment</code> object.
                     * @param environment The ContextEnvironment to be managed
                     * @exception Exception if an MBean cannot be deregistered
                     */
                    // @ts-ignore
                    public static destroyMBean(environment: org.apache.tomcat.util.descriptor.web.ContextEnvironment): void
                    /**
                     * Deregister the MBean for this
                     * <code>ContextResource</code> object.
                     * @param resource The ContextResource to be managed
                     * @exception Exception if an MBean cannot be deregistered
                     */
                    // @ts-ignore
                    public static destroyMBean(resource: org.apache.tomcat.util.descriptor.web.ContextResource): void
                    /**
                     * Deregister the MBean for this
                     * <code>ContextResourceLink</code> object.
                     * @param resourceLink The ContextResourceLink to be managed
                     * @exception Exception if an MBean cannot be deregistered
                     */
                    // @ts-ignore
                    public static destroyMBean(resourceLink: org.apache.tomcat.util.descriptor.web.ContextResourceLink): void
                }
            }
        }
    }
}
