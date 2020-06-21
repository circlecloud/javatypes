declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                /**
                 * <p>A <strong>ModelMBean</strong> implementation for the
                 * <code>org.apache.catalina.users.MemoryUserDatabase</code> component.</p>
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class MemoryUserDatabaseMBean extends org.apache.tomcat.util.modeler.BaseModelMBean {
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
                     * The <code>ManagedBean</code> information describing Group MBeans.
                     */
                    // @ts-ignore
                    readonly managedGroup: org.apache.tomcat.util.modeler.ManagedBean
                    /**
                     * The <code>ManagedBean</code> information describing Group MBeans.
                     */
                    // @ts-ignore
                    readonly managedRole: org.apache.tomcat.util.modeler.ManagedBean
                    /**
                     * The <code>ManagedBean</code> information describing User MBeans.
                     */
                    // @ts-ignore
                    readonly managedUser: org.apache.tomcat.util.modeler.ManagedBean
                    /**
                     * @return the MBean Names of all groups defined in this database.
                     */
                    // @ts-ignore
                    public getGroups(): string[]
                    /**
                     * @return the MBean Names of all roles defined in this database.
                     */
                    // @ts-ignore
                    public getRoles(): string[]
                    /**
                     * @return the MBean Names of all users defined in this database.
                     */
                    // @ts-ignore
                    public getUsers(): string[]
                    /**
                     * Create a new Group and return the corresponding MBean Name.
                     * @param groupname Group name of the new group
                     * @param description Description of the new group
                     * @return the new group object name
                     */
                    // @ts-ignore
                    public createGroup(groupname: java.lang.String | string, description: java.lang.String | string): string
                    /**
                     * Create a new Role and return the corresponding MBean Name.
                     * @param rolename Group name of the new group
                     * @param description Description of the new group
                     * @return the new role object name
                     */
                    // @ts-ignore
                    public createRole(rolename: java.lang.String | string, description: java.lang.String | string): string
                    /**
                     * Create a new User and return the corresponding MBean Name.
                     * @param username User name of the new user
                     * @param password Password for the new user
                     * @param fullName Full name for the new user
                     * @return the new user object name
                     */
                    // @ts-ignore
                    public createUser(username: java.lang.String | string, password: java.lang.String | string, fullName: java.lang.String | string): string
                    /**
                     * Return the MBean Name for the specified group name (if any);
                     * otherwise return <code>null</code>.
                     * @param groupname Group name to look up
                     * @return the group object name
                     */
                    // @ts-ignore
                    public findGroup(groupname: java.lang.String | string): string
                    /**
                     * Return the MBean Name for the specified role name (if any);
                     * otherwise return <code>null</code>.
                     * @param rolename Role name to look up
                     * @return the role object name
                     */
                    // @ts-ignore
                    public findRole(rolename: java.lang.String | string): string
                    /**
                     * Return the MBean Name for the specified user name (if any);
                     * otherwise return <code>null</code>.
                     * @param username User name to look up
                     * @return the user object name
                     */
                    // @ts-ignore
                    public findUser(username: java.lang.String | string): string
                    /**
                     * Remove an existing group and destroy the corresponding MBean.
                     * @param groupname Group name to remove
                     */
                    // @ts-ignore
                    public removeGroup(groupname: java.lang.String | string): void
                    /**
                     * Remove an existing role and destroy the corresponding MBean.
                     * @param rolename Role name to remove
                     */
                    // @ts-ignore
                    public removeRole(rolename: java.lang.String | string): void
                    /**
                     * Remove an existing user and destroy the corresponding MBean.
                     * @param username User name to remove
                     */
                    // @ts-ignore
                    public removeUser(username: java.lang.String | string): void
                }
            }
        }
    }
}
