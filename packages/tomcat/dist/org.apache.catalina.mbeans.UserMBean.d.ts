declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                /**
                 * <p>A <strong>ModelMBean</strong> implementation for the
                 * <code>org.apache.catalina.User</code> component.</p>
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class UserMBean extends org.apache.tomcat.util.modeler.BaseModelMBean {
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
                     * @return the MBean Names of all groups this user is a member of.
                     */
                    // @ts-ignore
                    public getGroups(): string[]
                    /**
                     * @return the MBean Names of all roles assigned to this user.
                     */
                    // @ts-ignore
                    public getRoles(): string[]
                    /**
                     * Add a new {@link Group} to those this user belongs to.
                     * @param groupname Group name of the new group
                     */
                    // @ts-ignore
                    public addGroup(groupname: java.lang.String | string): void
                    /**
                     * Add a new {@link Role} to those this user belongs to.
                     * @param rolename Role name of the new role
                     */
                    // @ts-ignore
                    public addRole(rolename: java.lang.String | string): void
                    /**
                     * Remove a {@link Group} from those this user belongs to.
                     * @param groupname Group name of the old group
                     */
                    // @ts-ignore
                    public removeGroup(groupname: java.lang.String | string): void
                    /**
                     * Remove a {@link Role} from those this user belongs to.
                     * @param rolename Role name of the old role
                     */
                    // @ts-ignore
                    public removeRole(rolename: java.lang.String | string): void
                }
            }
        }
    }
}
