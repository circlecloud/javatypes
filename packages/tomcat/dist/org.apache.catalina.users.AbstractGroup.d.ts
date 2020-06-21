declare namespace org {
    namespace apache {
        namespace catalina {
            namespace users {
                /**
                 * <p>Convenience base class for {@link Group} implementations.</p>
                 * @author Craig R. McClanahan
                 * @since 4.1
                 */
                // @ts-ignore
                abstract class AbstractGroup extends java.lang.Object implements org.apache.catalina.Group {
                    // @ts-ignore
                    constructor()
                    /**
                     * The description of this group.
                     */
                    // @ts-ignore
                    description: java.lang.String | string
                    /**
                     * The group name of this group.
                     */
                    // @ts-ignore
                    groupname: java.lang.String | string
                    /**
                     * Return the description of this group.
                     */
                    // @ts-ignore
                    public getDescription(): string
                    /**
                     * Set the description of this group.
                     * @param description The new description
                     */
                    // @ts-ignore
                    public setDescription(description: java.lang.String | string): void
                    /**
                     * Return the group name of this group, which must be unique
                     * within the scope of a {@link UserDatabase}.
                     */
                    // @ts-ignore
                    public getGroupname(): string
                    /**
                     * Set the group name of this group, which must be unique
                     * within the scope of a {@link UserDatabase}.
                     * @param groupname The new group name
                     */
                    // @ts-ignore
                    public setGroupname(groupname: java.lang.String | string): void
                    /**
                     * Return the set of {@link Role}s assigned specifically to this group.
                     */
                    // @ts-ignore
                    public abstract getRoles(): java.util.Iterator<org.apache.catalina.Role>
                    /**
                     * Return the {@link UserDatabase} within which this Group is defined.
                     */
                    // @ts-ignore
                    public abstract getUserDatabase(): org.apache.catalina.UserDatabase
                    /**
                     * Return an Iterator over the set of {@link org.apache.catalina.User}s that
                     * are members of this group.
                     */
                    // @ts-ignore
                    public abstract getUsers(): java.util.Iterator<org.apache.catalina.User>
                    /**
                     * Add a new {@link Role} to those assigned specifically to this group.
                     * @param role The new role
                     */
                    // @ts-ignore
                    public abstract addRole(role: org.apache.catalina.Role): void
                    /**
                     * Is this group specifically assigned the specified {@link Role}?
                     * @param role The role to check
                     */
                    // @ts-ignore
                    public abstract isInRole(role: org.apache.catalina.Role): boolean
                    /**
                     * Remove a {@link Role} from those assigned to this group.
                     * @param role The old role
                     */
                    // @ts-ignore
                    public abstract removeRole(role: org.apache.catalina.Role): void
                    /**
                     * Remove all {@link Role}s from those assigned to this group.
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
