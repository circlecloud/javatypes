declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                /**
                 * An object to lookup user and group principals by name. A {@link UserPrincipal}
                 * represents an identity that may be used to determine access rights to objects
                 * in a file system. A {@link GroupPrincipal} represents a <em>group identity</em>.
                 * A {@code UserPrincipalLookupService} defines methods to lookup identities by
                 * name or group name (which are typically user or account names). Whether names
                 * and group names are case sensitive or not depends on the implementation.
                 * The exact definition of a group is implementation specific but typically a
                 * group represents an identity created for administrative purposes so as to
                 * determine the access rights for the members of the group. In particular it is
                 * implementation specific if the <em>namespace</em> for names and groups is the
                 * same or is distinct. To ensure consistent and correct behavior across
                 * platforms it is recommended that this API be used as if the namespaces are
                 * distinct. In other words, the {@link #lookupPrincipalByName
                 * lookupPrincipalByName} should be used to lookup users, and {@link
                 * #lookupPrincipalByGroupName lookupPrincipalByGroupName} should be used to
                 * lookup groups.
                 * @since 1.7
                 * @see java.nio.file.FileSystem#getUserPrincipalLookupService
                 */
                // @ts-ignore
                abstract class UserPrincipalLookupService extends java.lang.Object {
                    /**
                     * Initializes a new instance of this class.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Lookup a user principal by name.
                     * @param name
                     *           the string representation of the user principal to lookup
                     * @return a user principal
                     * @throws UserPrincipalNotFoundException
                     *           the principal does not exist
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, it checks {#link RuntimePermission}<tt>("lookupUserInformation")</tt>
                     */
                    // @ts-ignore
                    public abstract lookupPrincipalByName(name: java.lang.String | string): java.nio.file.attribute.UserPrincipal
                    /**
                     * Lookup a group principal by group name.
                     * <p> Where an implementation does not support any notion of group then
                     * this method always throws {@link UserPrincipalNotFoundException}. Where
                     * the namespace for user accounts and groups is the same, then this method
                     * is identical to invoking {@link #lookupPrincipalByName
                     * lookupPrincipalByName}.
                     * @param group
                     *           the string representation of the group to lookup
                     * @return a group principal
                     * @throws UserPrincipalNotFoundException
                     *           the principal does not exist or is not a group
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, it checks {#link RuntimePermission}<tt>("lookupUserInformation")</tt>
                     */
                    // @ts-ignore
                    public abstract lookupPrincipalByGroupName(group: java.lang.String | string): java.nio.file.attribute.GroupPrincipal
                }
            }
        }
    }
}
