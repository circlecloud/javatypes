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
                    // @ts-ignore
                    values(): java.nio.file.attribute.AclEntryFlag[]
                    // @ts-ignore
                    valueOf(name: string): java.nio.file.attribute.AclEntryFlag
                }
            }
        }
    }
}
