declare namespace org {
    namespace apache {
        namespace catalina {
            namespace users {
                /**
                 * <p>Concrete implementation of {@link org.apache.catalina.Group} for the
                 * {@link MemoryUserDatabase} implementation of {@link UserDatabase}.</p>
                 * @author Craig R. McClanahan
                 * @since 4.1
                 */
                // @ts-ignore
                class MemoryGroup extends org.apache.catalina.users.AbstractGroup {
                    /**
                     * The {@link MemoryUserDatabase} that owns this group.
                     */
                    // @ts-ignore
                    readonly database: org.apache.catalina.users.MemoryUserDatabase
                    /**
                     * The set of {@link Role}s associated with this group.
                     */
                    // @ts-ignore
                    readonly roles: java.util.ArrayList<org.apache.catalina.Role>
                    /**
                     * Return the set of {@link Role}s assigned specifically to this group.
                     */
                    // @ts-ignore
                    public getRoles(): java.util.Iterator<org.apache.catalina.Role>
                    /**
                     * Return the {@link UserDatabase} within which this Group is defined.
                     */
                    // @ts-ignore
                    public getUserDatabase(): org.apache.catalina.UserDatabase
                    /**
                     * Return the set of {@link org.apache.catalina.User}s that are members of this group.
                     */
                    // @ts-ignore
                    public getUsers(): java.util.Iterator<org.apache.catalina.User>
                    /**
                     * Add a new {@link Role} to those assigned specifically to this group.
                     * @param role The new role
                     */
                    // @ts-ignore
                    public addRole(role: org.apache.catalina.Role): void
                    /**
                     * Is this group specifically assigned the specified {@link Role}?
                     * @param role The role to check
                     */
                    // @ts-ignore
                    public isInRole(role: org.apache.catalina.Role): boolean
                    /**
                     * Remove a {@link Role} from those assigned to this group.
                     * @param role The old role
                     */
                    // @ts-ignore
                    public removeRole(role: org.apache.catalina.Role): void
                    /**
                     * Remove all {@link Role}s from those assigned to this group.
                     */
                    // @ts-ignore
                    public removeRoles(): void
                    /**
                     * <p>Return a String representation of this group in XML format.</p>
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
