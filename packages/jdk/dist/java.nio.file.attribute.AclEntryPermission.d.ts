declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                /**
                 * Defines the permissions for use with the permissions component of an ACL
                 * {@link AclEntry entry}.
                 * @since 1.7
                 */
                // @ts-ignore
                class AclEntryPermission extends java.lang.Enum<java.nio.file.attribute.AclEntryPermission> {
                    /**
                     * Permission to list the entries of a directory (equal to {@link #READ_DATA})
                     */
                    // @ts-ignore
                    readonly LIST_DIRECTORY: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to add a new file to a directory (equal to {@link #WRITE_DATA})
                     */
                    // @ts-ignore
                    readonly ADD_FILE: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to create a subdirectory to a directory (equal to {@link #APPEND_DATA})
                     */
                    // @ts-ignore
                    readonly ADD_SUBDIRECTORY: java.nio.file.attribute.AclEntryPermission
                    // @ts-ignore
                    values(): java.nio.file.attribute.AclEntryPermission[]
                    // @ts-ignore
                    valueOf(name: string): java.nio.file.attribute.AclEntryPermission
                }
            }
        }
    }
}
