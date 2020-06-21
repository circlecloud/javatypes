declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                /**
                 * <p>A <strong>ModelMBean</strong> implementation for the
                 * <code>org.apache.tomcat.util.descriptor.web.ContextEnvironment</code> component.</p>
                 * @author Amy Roh
                 */
                // @ts-ignore
                class ContextEnvironmentMBean extends org.apache.catalina.mbeans.BaseCatalinaMBean<org.apache.tomcat.util.descriptor.web.ContextEnvironment> {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the value of a specific attribute of this MBean.
                     * @param attribute The identification of the attribute to be set
                     *   and the new value
                     * @exception AttributeNotFoundException if this attribute is not
                     *   supported by this MBean
                     * @exception MBeanException if the initializer of an object
                     *   throws an exception
                     * @exception ReflectionException if a Java reflection exception
                     *   occurs when invoking the getter
                     */
                    // @ts-ignore
                    public setAttribute(attribute: javax.management.Attribute): void
                }
            }
        }
    }
}
