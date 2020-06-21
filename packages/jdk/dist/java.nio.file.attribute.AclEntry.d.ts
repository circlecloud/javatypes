declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                /**
                 * An entry in an access control list (ACL).
                 * <p> The ACL entry represented by this class is based on the ACL model
                 * specified in <a href="http://www.ietf.org/rfc/rfc3530.txt"><i>RFC&nbsp;3530:
                 * Network File System (NFS) version 4 Protocol</i></a>. Each entry has four
                 * components as follows:
                 * <ol>
                 * <li><p> The {@link #type() type} component determines if the entry
                 * grants or denies access. </p></li>
                 * <li><p> The {@link #principal() principal} component, sometimes called the
                 * "who" component, is a {@link UserPrincipal} corresponding to the identity
                 * that the entry grants or denies access
                 * </p></li>
                 * <li><p> The {@link #permissions permissions} component is a set of
                 * {@link AclEntryPermission permissions}
                 * </p></li>
                 * <li><p> The {@link #flags flags} component is a set of {@link AclEntryFlag
                 * flags} to indicate how entries are inherited and propagated </p></li>
                 * </ol>
                 * <p> ACL entries are created using an associated {@link Builder} object by
                 * invoking its {@link Builder#build build} method.
                 * <p> ACL entries are immutable and are safe for use by multiple concurrent
                 * threads.
                 * @since 1.7
                 */
                // @ts-ignore
                class AclEntry extends java.lang.Object {
                    /**
                     * Constructs a new builder. The initial value of the type and who
                     * components is {@code null}. The initial value of the permissions and
                     * flags components is the empty set.
                     * @return a new builder
                     */
                    // @ts-ignore
                    public static newBuilder(): java.nio.file.attribute.AclEntry.Builder
                    /**
                     * Constructs a new builder with the components of an existing ACL entry.
                     * @param entry  an ACL entry
                     * @return a new builder
                     */
                    // @ts-ignore
                    public static newBuilder(entry: java.nio.file.attribute.AclEntry): java.nio.file.attribute.AclEntry.Builder
                    /**
                     * Returns the ACL entry type.
                     * @return the ACL entry type
                     */
                    // @ts-ignore
                    public type(): java.nio.file.attribute.AclEntryType
                    /**
                     * Returns the principal component.
                     * @return the principal component
                     */
                    // @ts-ignore
                    public principal(): java.nio.file.attribute.UserPrincipal
                    /**
                     * Returns a copy of the permissions component.
                     * <p> The returned set is a modifiable copy of the permissions.
                     * @return the permissions component
                     */
                    // @ts-ignore
                    public permissions(): Array<java.nio.file.attribute.AclEntryPermission>
                    /**
                     * Returns a copy of the flags component.
                     * <p> The returned set is a modifiable copy of the flags.
                     * @return the flags component
                     */
                    // @ts-ignore
                    public flags(): Array<java.nio.file.attribute.AclEntryFlag>
                    /**
                     * Compares the specified object with this ACL entry for equality.
                     * <p> If the given object is not an {@code AclEntry} then this method
                     * immediately returns {@code false}.
                     * <p> For two ACL entries to be considered equals requires that they are
                     * both the same type, their who components are equal, their permissions
                     * components are equal, and their flags components are equal.
                     * <p> This method satisfies the general contract of the {@link
                     * java.lang.Object#equals(Object) Object.equals} method. </p>
                     * @param ob   the object to which this object is to be compared
                     * @return {#code true} if, and only if, the given object is an AclEntry that
                     *           is identical to this AclEntry
                     */
                    // @ts-ignore
                    public equals(ob: java.lang.Object | any): boolean
                    /**
                     * Returns the hash-code value for this ACL entry.
                     * <p> This method satisfies the general contract of the {@link
                     * Object#hashCode} method.
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Returns the string representation of this ACL entry.
                     * @return the string representation of this entry
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
