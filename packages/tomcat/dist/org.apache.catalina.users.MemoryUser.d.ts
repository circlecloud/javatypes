declare namespace org {
    namespace apache {
        namespace catalina {
            namespace users {
                /**
                 * <p>Concrete implementation of {@link org.apache.catalina.User} for the
                 * {@link MemoryUserDatabase} implementation of {@link UserDatabase}.</p>
                 * @author Craig R. McClanahan
                 * @since 4.1
                 */
                // @ts-ignore
                class MemoryUser extends org.apache.catalina.users.AbstractUser {
                    /**
                     * The {@link MemoryUserDatabase} that owns this user.
                     */
                    // @ts-ignore
                    readonly database: org.apache.catalina.users.MemoryUserDatabase
                    /**
                     * The set of {@link Group}s that this user is a member of.
                     */
                    // @ts-ignore
                    readonly groups: java.util.ArrayList<org.apache.catalina.Group>
                    /**
                     * The set of {@link Role}s associated with this user.
                     */
                    // @ts-ignore
                    readonly roles: java.util.ArrayList<org.apache.catalina.Role>
                    /**
                     * Return the set of {@link Group}s to which this user belongs.
                     */
                    // @ts-ignore
                    public getGroups(): java.util.Iterator<org.apache.catalina.Group>
                    /**
                     * Return the set of {@link Role}s assigned specifically to this user.
                     */
                    // @ts-ignore
                    public getRoles(): java.util.Iterator<org.apache.catalina.Role>
                    /**
                     * Return the {@link UserDatabase} within which this User is defined.
                     */
                    // @ts-ignore
                    public getUserDatabase(): org.apache.catalina.UserDatabase
                    /**
                     * Add a new {@link Group} to those this user belongs to.
                     * @param group The new group
                     */
                    // @ts-ignore
                    public addGroup(group: org.apache.catalina.Group): void
                    /**
                     * Add a new {@link Role} to those assigned specifically to this user.
                     * @param role The new role
                     */
                    // @ts-ignore
                    public addRole(role: org.apache.catalina.Role): void
                    /**
                     * Is this user in the specified group?
                     * @param group The group to check
                     */
                    // @ts-ignore
                    public isInGroup(group: org.apache.catalina.Group): boolean
                    /**
                     * Is this user specifically assigned the specified {@link Role}?  This
                     * method does <strong>NOT</strong> check for roles inherited based on
                     * {@link Group} membership.
                     * @param role The role to check
                     */
                    // @ts-ignore
                    public isInRole(role: org.apache.catalina.Role): boolean
                    /**
                     * Remove a {@link Group} from those this user belongs to.
                     * @param group The old group
                     */
                    // @ts-ignore
                    public removeGroup(group: org.apache.catalina.Group): void
                    /**
                     * Remove all {@link Group}s from those this user belongs to.
                     */
                    // @ts-ignore
                    public removeGroups(): void
                    /**
                     * Remove a {@link Role} from those assigned to this user.
                     * @param role The old role
                     */
                    // @ts-ignore
                    public removeRole(role: org.apache.catalina.Role): void
                    /**
                     * Remove all {@link Role}s from those assigned to this user.
                     */
                    // @ts-ignore
                    public removeRoles(): void
                    /**
                     * <p>Return a String representation of this user in XML format.</p>
                     * <p><strong>IMPLEMENTATION NOTE</strong> - For backwards compatibility,
                     * the reader that processes this entry will accept either
                     * <code>username</code> or <code>name</code> for the username
                     * property.</p>
                     * @return the XML representation
                     */
                    // @ts-ignore
                    public toXml(): string
                    /**
                     * <p>Return a String representation of this user.</p>
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
