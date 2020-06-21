declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                /**
                 * <p>A <strong>ModelMBean</strong> implementation for the
                 * <code>org.apache.catalina.Group</code> component.</p>
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class GroupMBean extends org.apache.tomcat.util.modeler.BaseModelMBean {
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
                    /**
                     * @return the MBean Names of all authorized roles for this group.
                     */
                    // @ts-ignore
                    public getRoles(): string[]
                    /**
                     * @return the MBean Names of all users that are members of this group.
                     */
                    // @ts-ignore
                    public getUsers(): string[]
                    /**
                     * Add a new {@link Role} to those this group belongs to.
                     * @param rolename Role name of the new role
                     */
                    // @ts-ignore
                    public addRole(rolename: java.lang.String | string): void
                    /**
                     * Remove a {@link Role} from those this group belongs to.
                     * @param rolename Role name of the old role
                     */
                    // @ts-ignore
                    public removeRole(rolename: java.lang.String | string): void
                }
            }
        }
    }
}
