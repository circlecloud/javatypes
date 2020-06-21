declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * Abstract representation of a database of {@link User}s and {@link Group}s
             * that can be maintained by an application, along with definitions of
             * corresponding {@link Role}s, and referenced by a {@link Realm} for
             * authentication and access control.
             * @author Craig R. McClanahan
             * @since 4.1
             */
            // @ts-ignore
            interface UserDatabase {
                /**
                 * @return the set of {#link Group}s defined in this user database.
                 */
                // @ts-ignore
                getGroups(): java.util.Iterator<org.apache.catalina.Group>
                /**
                 * @return the unique global identifier of this user database.
                 */
                // @ts-ignore
                getId(): string
                /**
                 * @return the set of {#link Role}s defined in this user database.
                 */
                // @ts-ignore
                getRoles(): java.util.Iterator<org.apache.catalina.Role>
                /**
                 * @return the set of {#link User}s defined in this user database.
                 */
                // @ts-ignore
                getUsers(): java.util.Iterator<org.apache.catalina.User>
                /**
                 * Finalize access to this user database.
                 * @exception Exception if any exception is thrown during closing
                 */
                // @ts-ignore
                close(): void
                /**
                 * Create and return a new {@link Group} defined in this user database.
                 * @param groupname The group name of the new group (must be unique)
                 * @param description The description of this group
                 * @return The new group
                 */
                // @ts-ignore
                createGroup(groupname: java.lang.String | string, description: java.lang.String | string): org.apache.catalina.Group
                /**
                 * Create and return a new {@link Role} defined in this user database.
                 * @param rolename The role name of the new role (must be unique)
                 * @param description The description of this role
                 * @return The new role
                 */
                // @ts-ignore
                createRole(rolename: java.lang.String | string, description: java.lang.String | string): org.apache.catalina.Role
                /**
                 * Create and return a new {@link User} defined in this user database.
                 * @param username The logon username of the new user (must be unique)
                 * @param password The logon password of the new user
                 * @param fullName The full name of the new user
                 * @return The new user
                 */
                // @ts-ignore
                createUser(username: java.lang.String | string, password: java.lang.String | string, fullName: java.lang.String | string): org.apache.catalina.User
                /**
                 * @return the {#link Group} with the specified group name, if any;
                 *          otherwise return <code>null</code>.
                 * @param groupname Name of the group to return
                 */
                // @ts-ignore
                findGroup(groupname: java.lang.String | string): org.apache.catalina.Group
                /**
                 * @return the {#link Role} with the specified role name, if any; otherwise
                 *          return <code>null</code>.
                 * @param rolename Name of the role to return
                 */
                // @ts-ignore
                findRole(rolename: java.lang.String | string): org.apache.catalina.Role
                /**
                 * @return the {#link User} with the specified user name, if any; otherwise
                 *          return <code>null</code>.
                 * @param username Name of the user to return
                 */
                // @ts-ignore
                findUser(username: java.lang.String | string): org.apache.catalina.User
                /**
                 * Initialize access to this user database.
                 * @exception Exception if any exception is thrown during opening
                 */
                // @ts-ignore
                open(): void
                /**
                 * Remove the specified {@link Group} from this user database.
                 * @param group The group to be removed
                 */
                // @ts-ignore
                removeGroup(group: org.apache.catalina.Group): void
                /**
                 * Remove the specified {@link Role} from this user database.
                 * @param role The role to be removed
                 */
                // @ts-ignore
                removeRole(role: org.apache.catalina.Role): void
                /**
                 * Remove the specified {@link User} from this user database.
                 * @param user The user to be removed
                 */
                // @ts-ignore
                removeUser(user: org.apache.catalina.User): void
                /**
                 * Save any updated information to the persistent storage location for this
                 * user database.
                 * @exception Exception if any exception is thrown during saving
                 */
                // @ts-ignore
                save(): void
                /**
                 * Perform any background processing (e.g. checking for changes in persisted
                 * storage) required for the user database.
                 */
                // @ts-ignore
                backgroundProcess(): void
            }
        }
    }
}
