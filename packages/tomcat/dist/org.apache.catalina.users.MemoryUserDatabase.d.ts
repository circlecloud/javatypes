declare namespace org {
    namespace apache {
        namespace catalina {
            namespace users {
                /**
                 * Concrete implementation of {@link UserDatabase} that loads all defined users,
                 * groups, and roles into an in-memory data structure, and uses a specified XML
                 * file for its persistent storage.
                 * <p>
                 * This class is thread-safe.
                 * <p>
                 * This class does not enforce what, in an RDBMS, would be called referential
                 * integrity. Concurrent modifications may result in inconsistent data such as
                 * a User retaining a reference to a Role that has been removed from the
                 * database.
                 * @author Craig R. McClanahan
                 * @since 4.1
                 */
                // @ts-ignore
                class MemoryUserDatabase extends java.lang.Object implements org.apache.catalina.UserDatabase {
                    /**
                     * Create a new instance with default values.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new instance with the specified values.
                     * @param id Unique global identifier of this user database
                     */
                    // @ts-ignore
                    constructor(id: java.lang.String | string)
                    /**
                     * The set of {@link Group}s defined in this database, keyed by group name.
                     */
                    // @ts-ignore
                    readonly groups: java.util.Map<java.lang.String | string, org.apache.catalina.Group>
                    /**
                     * The unique global identifier of this user database.
                     */
                    // @ts-ignore
                    readonly id: java.lang.String | string
                    /**
                     * The relative (to <code>catalina.base</code>) or absolute pathname to the
                     * XML file in which we will save our persistent information.
                     */
                    // @ts-ignore
                    pathname: java.lang.String | string
                    /**
                     * The relative or absolute pathname to the file in which our old
                     * information is stored while renaming is in progress.
                     */
                    // @ts-ignore
                    pathnameOld: java.lang.String | string
                    /**
                     * The relative or absolute pathname of the file in which we write our new
                     * information prior to renaming.
                     */
                    // @ts-ignore
                    pathnameNew: java.lang.String | string
                    /**
                     * A flag, indicating if the user database is read only.
                     */
                    // @ts-ignore
                    readonly: boolean
                    /**
                     * The set of {@link Role}s defined in this database, keyed by role name.
                     */
                    // @ts-ignore
                    readonly roles: java.util.Map<java.lang.String | string, org.apache.catalina.Role>
                    /**
                     * The set of {@link User}s defined in this database, keyed by user name.
                     */
                    // @ts-ignore
                    readonly users: java.util.Map<java.lang.String | string, org.apache.catalina.User>
                    /**
                     * @return the set of {#link Group}s defined in this user database.
                     */
                    // @ts-ignore
                    public getGroups(): java.util.Iterator<org.apache.catalina.Group>
                    /**
                     * @return the unique global identifier of this user database.
                     */
                    // @ts-ignore
                    public getId(): string
                    /**
                     * @return the relative or absolute pathname to the persistent storage file.
                     */
                    // @ts-ignore
                    public getPathname(): string
                    /**
                     * Set the relative or absolute pathname to the persistent storage file.
                     * @param pathname The new pathname
                     */
                    // @ts-ignore
                    public setPathname(pathname: java.lang.String | string): void
                    /**
                     * @return the readonly status of the user database
                     */
                    // @ts-ignore
                    public getReadonly(): boolean
                    /**
                     * Setting the readonly status of the user database
                     * @param readonly the new status
                     */
                    // @ts-ignore
                    public setReadonly(readonly: boolean): void
                    // @ts-ignore
                    public getWatchSource(): boolean
                    // @ts-ignore
                    public setWatchSource(watchSource: boolean): void
                    /**
                     * @return the set of {#link Role}s defined in this user database.
                     */
                    // @ts-ignore
                    public getRoles(): java.util.Iterator<org.apache.catalina.Role>
                    /**
                     * @return the set of {#link User}s defined in this user database.
                     */
                    // @ts-ignore
                    public getUsers(): java.util.Iterator<org.apache.catalina.User>
                    /**
                     * Finalize access to this user database.
                     * @exception Exception if any exception is thrown during closing
                     */
                    // @ts-ignore
                    public close(): void
                    /**
                     * Create and return a new {@link Group} defined in this user database.
                     * @param groupname The group name of the new group (must be unique)
                     * @param description The description of this group
                     */
                    // @ts-ignore
                    public createGroup(groupname: java.lang.String | string, description: java.lang.String | string): org.apache.catalina.Group
                    /**
                     * Create and return a new {@link Role} defined in this user database.
                     * @param rolename The role name of the new group (must be unique)
                     * @param description The description of this group
                     */
                    // @ts-ignore
                    public createRole(rolename: java.lang.String | string, description: java.lang.String | string): org.apache.catalina.Role
                    /**
                     * Create and return a new {@link User} defined in this user database.
                     * @param username The logon username of the new user (must be unique)
                     * @param password The logon password of the new user
                     * @param fullName The full name of the new user
                     */
                    // @ts-ignore
                    public createUser(username: java.lang.String | string, password: java.lang.String | string, fullName: java.lang.String | string): org.apache.catalina.User
                    /**
                     * Return the {@link Group} with the specified group name, if any; otherwise
                     * return <code>null</code>.
                     * @param groupname Name of the group to return
                     */
                    // @ts-ignore
                    public findGroup(groupname: java.lang.String | string): org.apache.catalina.Group
                    /**
                     * Return the {@link Role} with the specified role name, if any; otherwise
                     * return <code>null</code>.
                     * @param rolename Name of the role to return
                     */
                    // @ts-ignore
                    public findRole(rolename: java.lang.String | string): org.apache.catalina.Role
                    /**
                     * Return the {@link User} with the specified user name, if any; otherwise
                     * return <code>null</code>.
                     * @param username Name of the user to return
                     */
                    // @ts-ignore
                    public findUser(username: java.lang.String | string): org.apache.catalina.User
                    /**
                     * Initialize access to this user database.
                     * @exception Exception if any exception is thrown during opening
                     */
                    // @ts-ignore
                    public open(): void
                    /**
                     * Remove the specified {@link Group} from this user database.
                     * @param group The group to be removed
                     */
                    // @ts-ignore
                    public removeGroup(group: org.apache.catalina.Group): void
                    /**
                     * Remove the specified {@link Role} from this user database.
                     * @param role The role to be removed
                     */
                    // @ts-ignore
                    public removeRole(role: org.apache.catalina.Role): void
                    /**
                     * Remove the specified {@link User} from this user database.
                     * @param user The user to be removed
                     */
                    // @ts-ignore
                    public removeUser(user: org.apache.catalina.User): void
                    /**
                     * Check for permissions to save this user database to persistent storage
                     * location.
                     * @return <code>true</code> if the database is writable
                     */
                    // @ts-ignore
                    public isWriteable(): boolean
                    /**
                     * Save any updated information to the persistent storage location for this
                     * user database.
                     * @exception Exception if any exception is thrown during saving
                     */
                    // @ts-ignore
                    public save(): void
                    // @ts-ignore
                    public backgroundProcess(): void
                    /**
                     * Return a String representation of this UserDatabase.
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
