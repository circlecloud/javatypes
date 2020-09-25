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
                    public static readonly OWNER_READ: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Write permission, owner.
                     */
                    // @ts-ignore
                    public static readonly OWNER_WRITE: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Execute/search permission, owner.
                     */
                    // @ts-ignore
                    public static readonly OWNER_EXECUTE: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Read permission, group.
                     */
                    // @ts-ignore
                    public static readonly GROUP_READ: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Write permission, group.
                     */
                    // @ts-ignore
                    public static readonly GROUP_WRITE: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Execute/search permission, group.
                     */
                    // @ts-ignore
                    public static readonly GROUP_EXECUTE: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Read permission, others.
                     */
                    // @ts-ignore
                    public static readonly OTHERS_READ: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Write permission, others.
                     */
                    // @ts-ignore
                    public static readonly OTHERS_WRITE: java.nio.file.attribute.PosixFilePermission
                    /**
                     * Execute/search permission, others.
                     */
                    // @ts-ignore
                    public static readonly OTHERS_EXECUTE: java.nio.file.attribute.PosixFilePermission
                    // @ts-ignore
                    public static values(): java.nio.file.attribute.PosixFilePermission[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): java.nio.file.attribute.PosixFilePermission
                }
            }
        }
    }
}
