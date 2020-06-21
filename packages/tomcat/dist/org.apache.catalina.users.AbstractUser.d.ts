declare namespace org {
    namespace apache {
        namespace catalina {
            namespace users {
                /**
                 * <p>Convenience base class for {@link User} implementations.</p>
                 * @author Craig R. McClanahan
                 * @since 4.1
                 */
                // @ts-ignore
                abstract class AbstractUser extends java.lang.Object implements org.apache.catalina.User {
                    // @ts-ignore
                    constructor()
                    /**
                     * The full name of this user.
                     */
                    // @ts-ignore
                    fullName: java.lang.String | string
                    /**
                     * The logon password of this user.
                     */
                    // @ts-ignore
                    password: java.lang.String | string
                    /**
                     * The logon username of this user.
                     */
                    // @ts-ignore
                    username: java.lang.String | string
                    /**
                     * Return the full name of this user.
                     */
                    // @ts-ignore
                    public getFullName(): string
                    /**
                     * Set the full name of this user.
                     * @param fullName The new full name
                     */
                    // @ts-ignore
                    public setFullName(fullName: java.lang.String | string): void
                    /**
                     * Return the set of {@link Group}s to which this user belongs.
                     */
                    // @ts-ignore
                    public abstract getGroups(): java.util.Iterator<org.apache.catalina.Group>
                    /**
                     * Return the logon password of this user, optionally prefixed with the
                     * identifier of an encoding scheme surrounded by curly braces, such as
                     * <code>{md5}xxxxx</code>.
                     */
                    // @ts-ignore
                    public getPassword(): string
                    /**
                     * Set the logon password of this user, optionally prefixed with the
                     * identifier of an encoding scheme surrounded by curly braces, such as
                     * <code>{md5}xxxxx</code>.
                     * @param password The new logon password
                     */
                    // @ts-ignore
                    public setPassword(password: java.lang.String | string): void
                    /**
                     * Return the set of {@link Role}s assigned specifically to this user.
                     */
                    // @ts-ignore
                    public abstract getRoles(): java.util.Iterator<org.apache.catalina.Role>
                    /**
                     * Return the logon username of this user, which must be unique
                     * within the scope of a {@link org.apache.catalina.UserDatabase}.
                     */
                    // @ts-ignore
                    public getUsername(): string
                    /**
                     * Set the logon username of this user, which must be unique within
                     * the scope of a {@link org.apache.catalina.UserDatabase}.
                     * @param username The new logon username
                     */
                    // @ts-ignore
                    public setUsername(username: java.lang.String | string): void
                    /**
                     * Add a new {@link Group} to those this user belongs to.
                     * @param group The new group
                     */
                    // @ts-ignore
                    public abstract addGroup(group: org.apache.catalina.Group): void
                    /**
                     * Add a new {@link Role} to those assigned specifically to this user.
                     * @param role The new role
                     */
                    // @ts-ignore
                    public abstract addRole(role: org.apache.catalina.Role): void
                    /**
                     * Is this user in the specified {@link Group}?
                     * @param group The group to check
                     */
                    // @ts-ignore
                    public abstract isInGroup(group: org.apache.catalina.Group): boolean
                    /**
                     * Is this user specifically assigned the specified {@link Role}?  This
                     * method does <strong>NOT</strong> check for roles inherited based on
                     * {@link Group} membership.
                     * @param role The role to check
                     */
                    // @ts-ignore
                    public abstract isInRole(role: org.apache.catalina.Role): boolean
                    /**
                     * Remove a {@link Group} from those this user belongs to.
                     * @param group The old group
                     */
                    // @ts-ignore
                    public abstract removeGroup(group: org.apache.catalina.Group): void
                    /**
                     * Remove all {@link Group}s from those this user belongs to.
                     */
                    // @ts-ignore
                    public abstract removeGroups(): void
                    /**
                     * Remove a {@link Role} from those assigned to this user.
                     * @param role The old role
                     */
                    // @ts-ignore
                    public abstract removeRole(role: org.apache.catalina.Role): void
                    /**
                     * Remove all {@link Role}s from those assigned to this user.
                     */
                    // @ts-ignore
                    public abstract removeRoles(): void
                    /**
                     * Make the principal name the same as the group name.
                     */
                    // @ts-ignore
                    public getName(): string
                }
            }
        }
    }
}
