declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                namespace AclEntry {
                    /**
                     * A builder of {@link AclEntry} objects.
                     * <p> A {@code Builder} object is obtained by invoking one of the {@link
                     * AclEntry#newBuilder newBuilder} methods defined by the {@code AclEntry}
                     * class.
                     * <p> Builder objects are mutable and are not safe for use by multiple
                     * concurrent threads without appropriate synchronization.
                     * @since 1.7
                     */
                    // @ts-ignore
                    class Builder extends java.lang.Object {
                        /**
                         * Constructs an {@link AclEntry} from the components of this builder.
                         * The type and who components are required to have been set in order
                         * to construct an {@code AclEntry}.
                         * @return a new ACL entry
                         * @throws IllegalStateException
                         *           if the type or who component have not been set
                         */
                        // @ts-ignore
                        build(): java.nio.file.attribute.AclEntry
                        /**
                         * Sets the type component of this builder.
                         * @param type  the component type
                         * @return this builder
                         */
                        // @ts-ignore
                        setType(type: java.nio.file.attribute.AclEntryType): java.nio.file.attribute.AclEntry.Builder
                        /**
                         * Sets the principal component of this builder.
                         * @param who  the principal component
                         * @return this builder
                         */
                        // @ts-ignore
                        setPrincipal(who: java.nio.file.attribute.UserPrincipal): java.nio.file.attribute.AclEntry.Builder
                        /**
                         * Sets the permissions component of this builder. On return, the
                         * permissions component of this builder is a copy of the given set.
                         * @param perms  the permissions component
                         * @return this builder
                         * @throws ClassCastException
                         *           if the set contains elements that are not of type {#code
                         *           AclEntryPermission}
                         */
                        // @ts-ignore
                        setPermissions(perms: Array<java.nio.file.attribute.AclEntryPermission>): java.nio.file.attribute.AclEntry.Builder
                        /**
                         * Sets the permissions component of this builder. On return, the
                         * permissions component of this builder is a copy of the permissions in
                         * the given array.
                         * @param perms  the permissions component
                         * @return this builder
                         */
                        // @ts-ignore
                        setPermissions(...perms: java.nio.file.attribute.AclEntryPermission[]): java.nio.file.attribute.AclEntry.Builder
                        /**
                         * Sets the flags component of this builder. On return, the flags
                         * component of this builder is a copy of the given set.
                         * @param flags  the flags component
                         * @return this builder
                         * @throws ClassCastException
                         *           if the set contains elements that are not of type {#code
                         *           AclEntryFlag}
                         */
                        // @ts-ignore
                        setFlags(flags: Array<java.nio.file.attribute.AclEntryFlag>): java.nio.file.attribute.AclEntry.Builder
                        /**
                         * Sets the flags component of this builder. On return, the flags
                         * component of this builder is a copy of the flags in the given
                         * array.
                         * @param flags  the flags component
                         * @return this builder
                         */
                        // @ts-ignore
                        setFlags(...flags: java.nio.file.attribute.AclEntryFlag[]): java.nio.file.attribute.AclEntry.Builder
                    }
                }
            }
        }
    }
}
