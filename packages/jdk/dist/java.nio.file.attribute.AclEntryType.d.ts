declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                /**
                 * A typesafe enumeration of the access control entry types.
                 * @since 1.7
                 */
                // @ts-ignore
                class AclEntryType extends java.lang.Enum<java.nio.file.attribute.AclEntryType> {
                    /**
                     * Explicitly grants access to a file or directory.
                     */
                    // @ts-ignore
                    public static readonly ALLOW: java.nio.file.attribute.AclEntryType
                    /**
                     * Explicitly denies access to a file or directory.
                     */
                    // @ts-ignore
                    public static readonly DENY: java.nio.file.attribute.AclEntryType
                    /**
                     * Log, in a system dependent way, the access specified in the
                     * permissions component of the ACL entry.
                     */
                    // @ts-ignore
                    public static readonly AUDIT: java.nio.file.attribute.AclEntryType
                    /**
                     * Generate an alarm, in a system dependent way, the access specified in the
                     * permissions component of the ACL entry.
                     */
                    // @ts-ignore
                    public static readonly ALARM: java.nio.file.attribute.AclEntryType
                    // @ts-ignore
                    public static values(): java.nio.file.attribute.AclEntryType[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): java.nio.file.attribute.AclEntryType
                }
            }
        }
    }
}
