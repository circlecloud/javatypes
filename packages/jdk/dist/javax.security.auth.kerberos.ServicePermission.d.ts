declare namespace javax {
    namespace security {
        namespace auth {
            namespace kerberos {
                /**
                 * This class is used to protect Kerberos services and the
                 * credentials necessary to access those services. There is a one to
                 * one mapping of a service principal and the credentials necessary
                 * to access the service. Therefore granting access to a service
                 * principal implicitly grants access to the credential necessary to
                 * establish a security context with the service principal. This
                 * applies regardless of whether the credentials are in a cache
                 * or acquired via an exchange with the KDC. The credential can
                 * be either a ticket granting ticket, a service ticket or a secret
                 * key from a key table.
                 * <p>
                 * A ServicePermission contains a service principal name and
                 * a list of actions which specify the context the credential can be
                 * used within.
                 * <p>
                 * The service principal name is the canonical name of the
                 * {@code KerberosPrincipal} supplying the service, that is
                 * the KerberosPrincipal represents a Kerberos service
                 * principal. This name is treated in a case sensitive manner.
                 * An asterisk may appear by itself, to signify any service principal.
                 * <p>
                 * Granting this permission implies that the caller can use a cached
                 * credential (TGT, service ticket or secret key) within the context
                 * designated by the action. In the case of the TGT, granting this
                 * permission also implies that the TGT can be obtained by an
                 * Authentication Service exchange.
                 * <p>
                 * The possible actions are:
                 * <pre>
                 * initiate -              allow the caller to use the credential to
                 * initiate a security context with a service
                 * principal.
                 * accept -                allow the caller to use the credential to
                 * accept security context as a particular
                 * principal.
                 * </pre>
                 * For example, to specify the permission to access to the TGT to
                 * initiate a security context the permission is constructed as follows:
                 * <pre>
                 * ServicePermission("krbtgt/EXAMPLE.COM@EXAMPLE.COM", "initiate");
                 * </pre>
                 * <p>
                 * To obtain a service ticket to initiate a context with the "host"
                 * service the permission is constructed as follows:
                 * <pre>
                 * ServicePermission("host/foo.example.com@EXAMPLE.COM", "initiate");
                 * </pre>
                 * <p>
                 * For a Kerberized server the action is "accept". For example, the permission
                 * necessary to access and use the secret key of the  Kerberized "host"
                 * service (telnet and the likes)  would be constructed as follows:
                 * <pre>
                 * ServicePermission("host/foo.example.com@EXAMPLE.COM", "accept");
                 * </pre>
                 * @since 1.4
                 */
                // @ts-ignore
                class ServicePermission extends java.security.Permission implements java.io.Serializable {
                    /**
                     * Create a new {@code ServicePermission}
                     * with the specified {@code servicePrincipal}
                     * and {@code action}.
                     * @param servicePrincipal the name of the service principal.
                     *  An asterisk may appear by itself, to signify any service principal.
                     *  <p>
                     * @param action the action string
                     */
                    // @ts-ignore
                    constructor(servicePrincipal: string, action: string)
                    /**
                     * Checks if this Kerberos service permission object "implies" the
                     * specified permission.
                     * <P>
                     * If none of the above are true, {@code implies} returns false.
                     * @param p the permission to check against.
                     * @return true if the specified permission is implied by this object,
                     *  false if not.
                     */
                    // @ts-ignore
                    implies(p: java.security.Permission): boolean
                    /**
                     * Checks two ServicePermission objects for equality.
                     * <P>
                     * @param obj the object to test for equality with this object.
                     * @return true if <i>obj</i> is a ServicePermission, and has the
                     *   same service principal, and actions as this
                     *  ServicePermission object.
                     */
                    // @ts-ignore
                    equals(obj: any): boolean
                    /**
                     * Returns the hash code value for this object.
                     * @return a hash code value for this object.
                     */
                    // @ts-ignore
                    hashCode(): int
                    /**
                     * Returns the canonical string representation of the actions.
                     * Always returns present actions in the following order:
                     * initiate, accept.
                     */
                    // @ts-ignore
                    getActions(): java.lang.String
                    /**
                     * Returns a PermissionCollection object for storing
                     * ServicePermission objects.
                     * <br>
                     * ServicePermission objects must be stored in a manner that
                     * allows them to be inserted into the collection in any order, but
                     * that also enables the PermissionCollection implies method to
                     * be implemented in an efficient (and consistent) manner.
                     * @return a new PermissionCollection object suitable for storing
                     *  ServicePermissions.
                     */
                    // @ts-ignore
                    newPermissionCollection(): java.security.PermissionCollection
                }
            }
        }
    }
}
