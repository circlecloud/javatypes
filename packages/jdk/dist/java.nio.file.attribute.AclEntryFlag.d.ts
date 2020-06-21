declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                /**
                 * Defines the flags for used by the flags component of an ACL {@link AclEntry
                 * entry}.
                 * <p> In this release, this class does not define flags related to {@link
                 * AclEntryType#AUDIT} and {@link AclEntryType#ALARM} entry types.
                 * @since 1.7
                 */
                // @ts-ignore
                class AclEntryFlag extends java.lang.Enum<java.nio.file.attribute.AclEntryFlag> {
                    /**
                     * Can be placed on a directory and indicates that the ACL entry should be
                     * added to each new non-directory file created.
                     */
                    // @ts-ignore
                    readonly FILE_INHERIT: java.nio.file.attribute.AclEntryFlag
                    /**
                     * Can be placed on a directory and indicates that the ACL entry should be
                     * added to each new directory created.
                     */
                    // @ts-ignore
                    readonly DIRECTORY_INHERIT: java.nio.file.attribute.AclEntryFlag
                    /**
                     * Can be placed on a directory to indicate that the ACL entry should not
                     * be placed on the newly created directory which is inheritable by
                     * subdirectories of the created directory.
                     */
                    // @ts-ignore
                    readonly NO_PROPAGATE_INHERIT: java.nio.file.attribute.AclEntryFlag
                    /**
                     * Can be placed on a directory but does not apply to the directory,
                     * only to newly created files/directories as specified by the
                     * {@link #FILE_INHERIT} and {@link #DIRECTORY_INHERIT} flags.
                     */
                    // @ts-ignore
                    readonly INHERIT_ONLY: java.nio.file.attribute.AclEntryFlag
                    // @ts-ignore
                    values(): java.nio.file.attribute.AclEntryFlag[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): java.nio.file.attribute.AclEntryFlag
                }
            }
        }
    }
}
