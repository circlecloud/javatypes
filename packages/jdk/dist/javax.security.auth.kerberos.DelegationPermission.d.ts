declare namespace javax {
    namespace security {
        namespace auth {
            namespace kerberos {
                /**
                 * This class is used to restrict the usage of the Kerberos
                 * delegation model, ie: forwardable and proxiable tickets.
                 * <p>
                 * The target name of this {@code Permission} specifies a pair of
                 * kerberos service principals. The first is the subordinate service principal
                 * being entrusted to use the TGT. The second service principal designates
                 * the target service the subordinate service principal is to
                 * interact with on behalf of the initiating KerberosPrincipal. This
                 * latter service principal is specified to restrict the use of a
                 * proxiable ticket.
                 * <p>
                 * For example, to specify the "host" service use of a forwardable TGT the
                 * target permission is specified as follows:
                 * <pre>
                 * DelegationPermission("\"host/foo.example.com@EXAMPLE.COM\" \"krbtgt/EXAMPLE.COM@EXAMPLE.COM\"");
                 * </pre>
                 * <p>
                 * To give the "backup" service a proxiable nfs service ticket the target permission
                 * might be specified:
                 * <pre>
                 * DelegationPermission("\"backup/bar.example.com@EXAMPLE.COM\" \"nfs/home.EXAMPLE.COM@EXAMPLE.COM\"");
                 * </pre>
                 * @since 1.4
                 */
                // @ts-ignore
                class DelegationPermission extends java.security.BasicPermission implements java.io.Serializable {
                    /**
                     * Create a new {@code DelegationPermission}
                     * with the specified subordinate and target principals.
                     * <p>
                     * @param principals the name of the subordinate and target principals
                     * @throws NullPointerException if {#code principals} is {@code null}.
                     * @throws IllegalArgumentException if {#code principals} is empty.
                     */
                    // @ts-ignore
                    constructor(principals: java.lang.String | string)
                    /**
                     * Create a new {@code DelegationPermission}
                     * with the specified subordinate and target principals.
                     * <p>
                     * @param principals the name of the subordinate and target principals
                     *  <p>
                     * @param actions should be null.
                     * @throws NullPointerException if {#code principals} is {@code null}.
                     * @throws IllegalArgumentException if {#code principals} is empty.
                     */
                    // @ts-ignore
                    constructor(principals: java.lang.String | string, actions: java.lang.String | string)
                    /**
                     * Checks if this Kerberos delegation permission object "implies" the
                     * specified permission.
                     * <P>
                     * If none of the above are true, {@code implies} returns false.
                     * @param p the permission to check against.
                     * @return true if the specified permission is implied by this object,
                     *  false if not.
                     */
                    // @ts-ignore
                    public implies(p: java.security.Permission): boolean
                    /**
                     * Checks two DelegationPermission objects for equality.
                     * <P>
                     * @param obj the object to test for equality with this object.
                     * @return true if <i>obj</i> is a DelegationPermission, and
                     *   has the same subordinate and service principal as this.
                     *   DelegationPermission object.
                     */
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    /**
                     * Returns the hash code value for this object.
                     * @return a hash code value for this object.
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Returns a PermissionCollection object for storing
                     * DelegationPermission objects.
                     * <br>
                     * DelegationPermission objects must be stored in a manner that
                     * allows them to be inserted into the collection in any order, but
                     * that also enables the PermissionCollection implies method to
                     * be implemented in an efficient (and consistent) manner.
                     * @return a new PermissionCollection object suitable for storing
                     *  DelegationPermissions.
                     */
                    // @ts-ignore
                    public newPermissionCollection(): java.security.PermissionCollection
                }
            }
        }
    }
}
