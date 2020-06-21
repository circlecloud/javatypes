declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * <p>Abstract representation of a user in a {@link UserDatabase}.  Each user
             * is optionally associated with a set of {@link Group}s through which he or
             * she inherits additional security roles, and is optionally assigned a set
             * of specific {@link Role}s.</p>
             * @author Craig R. McClanahan
             * @since 4.1
             */
            // @ts-ignore
            interface User extends java.security.Principal {
                /**
                 * @return the full name of this user.
                 */
                // @ts-ignore
                getFullName(): string
                /**
                 * Set the full name of this user.
                 * @param fullName The new full name
                 */
                // @ts-ignore
                setFullName(fullName: java.lang.String | string): void
                /**
                 * @return the set of {#link Group}s to which this user belongs.
                 */
                // @ts-ignore
                getGroups(): java.util.Iterator<org.apache.catalina.Group>
                /**
                 * @return the logon password of this user, optionally prefixed with the
                 *  identifier of an encoding scheme surrounded by curly braces, such as
                 *  <code>{md5}xxxxx</code>.
                 */
                // @ts-ignore
                getPassword(): string
                /**
                 * Set the logon password of this user, optionally prefixed with the
                 * identifier of an encoding scheme surrounded by curly braces, such as
                 * <code>{md5}xxxxx</code>.
                 * @param password The new logon password
                 */
                // @ts-ignore
                setPassword(password: java.lang.String | string): void
                /**
                 * @return the set of {#link Role}s assigned specifically to this user.
                 */
                // @ts-ignore
                getRoles(): java.util.Iterator<org.apache.catalina.Role>
                /**
                 * @return the {#link UserDatabase} within which this User is defined.
                 */
                // @ts-ignore
                getUserDatabase(): org.apache.catalina.UserDatabase
                /**
                 * @return the logon username of this user, which must be unique
                 *  within the scope of a {#link UserDatabase}.
                 */
                // @ts-ignore
                getUsername(): string
                /**
                 * Set the logon username of this user, which must be unique within
                 * the scope of a {@link UserDatabase}.
                 * @param username The new logon username
                 */
                // @ts-ignore
                setUsername(username: java.lang.String | string): void
                /**
                 * Add a new {@link Group} to those this user belongs to.
                 * @param group The new group
                 */
                // @ts-ignore
                addGroup(group: org.apache.catalina.Group): void
                /**
                 * Add a {@link Role} to those assigned specifically to this user.
                 * @param role The new role
                 */
                // @ts-ignore
                addRole(role: org.apache.catalina.Role): void
                /**
                 * Is this user in the specified {@link Group}?
                 * @param group The group to check
                 * @return <code>true</code> if the user is in the specified group
                 */
                // @ts-ignore
                isInGroup(group: org.apache.catalina.Group): boolean
                /**
                 * Is this user specifically assigned the specified {@link Role}?  This
                 * method does <strong>NOT</strong> check for roles inherited based on
                 * {@link Group} membership.
                 * @param role The role to check
                 * @return <code>true</code> if the user has the specified role
                 */
                // @ts-ignore
                isInRole(role: org.apache.catalina.Role): boolean
                /**
                 * Remove a {@link Group} from those this user belongs to.
                 * @param group The old group
                 */
                // @ts-ignore
                removeGroup(group: org.apache.catalina.Group): void
                /**
                 * Remove all {@link Group}s from those this user belongs to.
                 */
                // @ts-ignore
                removeGroups(): void
                /**
                 * Remove a {@link Role} from those assigned to this user.
                 * @param role The old role
                 */
                // @ts-ignore
                removeRole(role: org.apache.catalina.Role): void
                /**
                 * Remove all {@link Role}s from those assigned to this user.
                 */
                // @ts-ignore
                removeRoles(): void
            }
        }
    }
}
