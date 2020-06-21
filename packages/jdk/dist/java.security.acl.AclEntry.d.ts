declare namespace java {
    namespace security {
        namespace acl {
            /**
             * This is the interface used for representing one entry in an Access
             * Control List (ACL).<p>
             * An ACL can be thought of as a data structure with multiple ACL entry
             * objects. Each ACL entry object contains a set of permissions associated
             * with a particular principal. (A principal represents an entity such as
             * an individual user or a group). Additionally, each ACL entry is specified
             * as being either positive or negative. If positive, the permissions are
             * to be granted to the associated principal. If negative, the permissions
             * are to be denied. Each principal can have at most one positive ACL entry
             * and one negative entry; that is, multiple positive or negative ACL
             * entries are not allowed for any principal.
             * Note: ACL entries are by default positive. An entry becomes a
             * negative entry only if the
             * {@link #setNegativePermissions() setNegativePermissions}
             * method is called on it.
             * @see java.security.acl.Acl
             * @author Satish Dharmaraj
             */
            // @ts-ignore
            interface AclEntry extends java.lang.Cloneable {
                /**
                 * Specifies the principal for which permissions are granted or denied
                 * by this ACL entry. If a principal was already set for this ACL entry,
                 * false is returned, otherwise true is returned.
                 * @param user the principal to be set for this entry.
                 * @return true if the principal is set, false if there was
                 *  already a principal set for this entry.
                 * @see #getPrincipal
                 */
                // @ts-ignore
                setPrincipal(user: java.security.Principal): boolean
                /**
                 * Returns the principal for which permissions are granted or denied by
                 * this ACL entry. Returns null if there is no principal set for this
                 * entry yet.
                 * @return the principal associated with this entry.
                 * @see #setPrincipal
                 */
                // @ts-ignore
                getPrincipal(): java.security.Principal
                /**
                 * Sets this ACL entry to be a negative one. That is, the associated
                 * principal (e.g., a user or a group) will be denied the permission set
                 * specified in the entry.
                 * Note: ACL entries are by default positive. An entry becomes a
                 * negative entry only if this {@code setNegativePermissions}
                 * method is called on it.
                 */
                // @ts-ignore
                setNegativePermissions(): void
                /**
                 * Returns true if this is a negative ACL entry (one denying the
                 * associated principal the set of permissions in the entry), false
                 * otherwise.
                 * @return true if this is a negative ACL entry, false if it's not.
                 */
                // @ts-ignore
                isNegative(): boolean
                /**
                 * Adds the specified permission to this ACL entry. Note: An entry can
                 * have multiple permissions.
                 * @param permission the permission to be associated with
                 *  the principal in this entry.
                 * @return true if the permission was added, false if the
                 *  permission was already part of this entry's permission set.
                 */
                // @ts-ignore
                addPermission(permission: java.security.acl.Permission): boolean
                /**
                 * Removes the specified permission from this ACL entry.
                 * @param permission the permission to be removed from this entry.
                 * @return true if the permission is removed, false if the
                 *  permission was not part of this entry's permission set.
                 */
                // @ts-ignore
                removePermission(permission: java.security.acl.Permission): boolean
                /**
                 * Checks if the specified permission is part of the
                 * permission set in this entry.
                 * @param permission the permission to be checked for.
                 * @return true if the permission is part of the
                 *  permission set in this entry, false otherwise.
                 */
                // @ts-ignore
                checkPermission(permission: java.security.acl.Permission): boolean
                /**
                 * Returns an enumeration of the permissions in this ACL entry.
                 * @return an enumeration of the permissions in this ACL entry.
                 */
                // @ts-ignore
                permissions(): java.util.Enumeration<java.security.acl.Permission>
                /**
                 * Returns a string representation of the contents of this ACL entry.
                 * @return a string representation of the contents.
                 */
                // @ts-ignore
                toString(): string
                /**
                 * Clones this ACL entry.
                 * @return a clone of this ACL entry.
                 */
                // @ts-ignore
                clone(): any
            }
        }
    }
}
