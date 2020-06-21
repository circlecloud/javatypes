declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                /**
                 * Defines the bits for use with the {@link PosixFileAttributes#permissions()
                 * permissions} attribute.
                 * <p> The {@link PosixFilePermissions} class defines methods for manipulating
                 * set of permissions.
                 * @since 1.7
                 */
                // @ts-ignore
                class PosixFilePermission extends java.lang.Enum<java.nio.file.attribute.PosixFilePermission> {
                    /**
                     * Read permission, owner.
                     */
                    // @ts-ignore
                    readonly OWNER_READ: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Write permission, owner.
                     */
                    // @ts-ignore
                    readonly OWNER_WRITE: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Execute/search permission, owner.
                     */
                    // @ts-ignore
                    readonly OWNER_EXECUTE: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Read permission, group.
                     */
                    // @ts-ignore
                    readonly GROUP_READ: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Write permission, group.
                     */
                    // @ts-ignore
                    readonly GROUP_WRITE: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Execute/search permission, group.
                     */
                    // @ts-ignore
                    readonly GROUP_EXECUTE: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Read permission, others.
                     */
                    // @ts-ignore
                    readonly OTHERS_READ: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Write permission, others.
                     */
                    // @ts-ignore
                    readonly OTHERS_WRITE: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Execute/search permission, others.
                     */
                    // @ts-ignore
                    readonly OTHERS_EXECUTE: java.nio.file.attribute.PosixFilePermission
                    // @ts-ignore
                    values(): java.nio.file.attribute.PosixFilePermission[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): java.nio.file.attribute.PosixFilePermission
                }
            }
        }
    }
}
