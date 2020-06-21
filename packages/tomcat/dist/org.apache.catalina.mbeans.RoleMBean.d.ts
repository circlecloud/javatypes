declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                /**
                 * <p>A <strong>ModelMBean</strong> implementation for the
                 * <code>org.apache.catalina.Role</code> component.</p>
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class RoleMBean extends org.apache.tomcat.util.modeler.BaseModelMBean {
                    // @ts-ignore
                    constructor()
                    /**
                     * The configuration information registry for our managed beans.
                     */
                    // @ts-ignore
                    readonly registry: org.apache.tomcat.util.modeler.Registry
                    /**
                     * The <code>ManagedBean</code> information describing this MBean.
                     */
                    // @ts-ignore
                    readonly managed: org.apache.tomcat.util.modeler.ManagedBean
                }
            }
        }
    }
}
