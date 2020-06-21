declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * Implementation of {@link org.apache.catalina.Realm} that is based on an
                 * implementation of {@link UserDatabase} made available through the global JNDI
                 * resources configured for this instance of Catalina. Set the
                 * <code>resourceName</code> parameter to the global JNDI resources name for the
                 * configured instance of <code>UserDatabase</code> that we should consult.
                 * @author Craig R. McClanahan
                 * @since 4.1
                 */
                // @ts-ignore
                class UserDatabaseRealm extends org.apache.catalina.realm.RealmBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * The <code>UserDatabase</code> we will use to authenticate users and
                     * identify associated roles.
                     */
                    // @ts-ignore
                    database: org.apache.catalina.UserDatabase
                    /**
                     * The global JNDI name of the <code>UserDatabase</code> resource we will be
                     * utilizing.
                     */
                    // @ts-ignore
                    resourceName: java.lang.String | string
                    /**
                     * @return the global JNDI name of the <code>UserDatabase</code> resource we
                     *          will be using.
                     */
                    // @ts-ignore
                    public getResourceName(): string
                    /**
                     * Set the global JNDI name of the <code>UserDatabase</code> resource we
                     * will be using.
                     * @param resourceName The new global JNDI name
                     */
                    // @ts-ignore
                    public setResourceName(resourceName: java.lang.String | string): void
                    /**
                     * Return <code>true</code> if the specified Principal has the specified
                     * security role, within the context of this Realm; otherwise return
                     * <code>false</code>. This implementation returns <code>true</code> if the
                     * <code>User</code> has the role, or if any <code>Group</code> that the
                     * <code>User</code> is a member of has the role.
                     * @param principal Principal for whom the role is to be checked
                     * @param role Security role to be checked
                     */
                    // @ts-ignore
                    public hasRole(wrapper: org.apache.catalina.Wrapper, principal: java.security.Principal, role: java.lang.String | string): boolean
                    // @ts-ignore
                    public backgroundProcess(): void
                    /**
                     * Return the password associated with the given principal's user name.
                     */
                    // @ts-ignore
                    getPassword(username: java.lang.String | string): string
                    /**
                     * Return the Principal associated with the given user name.
                     */
                    // @ts-ignore
                    getPrincipal(username: java.lang.String | string): java.security.Principal
                    /**
                     * Prepare for the beginning of active use of the public methods of this
                     * component and implement the requirements of
                     * {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *                 that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Gracefully terminate the active use of the public methods of this
                     * component and implement the requirements of
                     * {@link org.apache.catalina.util.LifecycleBase#stopInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *                 that needs to be reported
                     */
                    // @ts-ignore
                    stopInternal(): void
                }
            }
        }
    }
}
