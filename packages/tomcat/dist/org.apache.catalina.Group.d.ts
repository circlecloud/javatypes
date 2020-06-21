declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * <p>Abstract representation of a group of {@link User}s in a
             * {@link UserDatabase}.  Each user that is a member of this group
             * inherits the {@link Role}s assigned to the group.</p>
             * @author Craig R. McClanahan
             * @since 4.1
             */
            // @ts-ignore
            interface Group extends java.security.Principal {
                /**
                 * @return the description of this group.
                 */
                // @ts-ignore
                getDescription(): string
                /**
                 * Set the description of this group.
                 * @param description The new description
                 */
                // @ts-ignore
                setDescription(description: java.lang.String | string): void
                /**
                 * @return the group name of this group, which must be unique
                 *  within the scope of a {#link UserDatabase}.
                 */
                // @ts-ignore
                getGroupname(): string
                /**
                 * Set the group name of this group, which must be unique
                 * within the scope of a {@link UserDatabase}.
                 * @param groupname The new group name
                 */
                // @ts-ignore
                setGroupname(groupname: java.lang.String | string): void
                /**
                 * @return the set of {#link Role}s assigned specifically to this group.
                 */
                // @ts-ignore
                getRoles(): java.util.Iterator<org.apache.catalina.Role>
                /**
                 * @return the {#link UserDatabase} within which this Group is defined.
                 */
                // @ts-ignore
                getUserDatabase(): org.apache.catalina.UserDatabase
                /**
                 * @return the set of {#link User}s that are members of this group.
                 */
                // @ts-ignore
                getUsers(): java.util.Iterator<org.apache.catalina.User>
                /**
                 * Add a new {@link Role} to those assigned specifically to this group.
                 * @param role The new role
                 */
                // @ts-ignore
                addRole(role: org.apache.catalina.Role): void
                /**
                 * Is this group specifically assigned the specified {@link Role}?
                 * @param role The role to check
                 * @return <code>true</code> if the group is assigned to the specified role
                 *          otherwise <code>false</code>
                 */
                // @ts-ignore
                isInRole(role: org.apache.catalina.Role): boolean
                /**
                 * Remove a {@link Role} from those assigned to this group.
                 * @param role The old role
                 */
                // @ts-ignore
                removeRole(role: org.apache.catalina.Role): void
                /**
                 * Remove all {@link Role}s from those assigned to this group.
                 */
                // @ts-ignore
                removeRoles(): void
            }
        }
    }
}
