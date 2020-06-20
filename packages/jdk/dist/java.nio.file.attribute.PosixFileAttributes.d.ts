declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                /**
                 * File attributes associated with files on file systems used by operating systems
                 * that implement the Portable Operating System Interface (POSIX) family of
                 * standards.
                 * <p> The POSIX attributes of a file are retrieved using a {@link
                 * PosixFileAttributeView} by invoking its {@link
                 * PosixFileAttributeView#readAttributes readAttributes} method.
                 * @since 1.7
                 */
                // @ts-ignore
                interface PosixFileAttributes extends java.nio.file.attribute.BasicFileAttributes {
                    /**
                     * Returns the owner of the file.
                     * @return the file owner
                     * @see PosixFileAttributeView#setOwner
                     */
                    // @ts-ignore
                    owner(): java.nio.file.attribute.UserPrincipal
                    /**
                     * Returns the group owner of the file.
                     * @return the file group owner
                     * @see PosixFileAttributeView#setGroup
                     */
                    // @ts-ignore
                    group(): java.nio.file.attribute.GroupPrincipal
                    /**
                     * Returns the permissions of the file. The file permissions are returned
                     * as a set of {@link PosixFilePermission} elements. The returned set is a
                     * copy of the file permissions and is modifiable. This allows the result
                     * to be modified and passed to the {@link PosixFileAttributeView#setPermissions
                     * setPermissions} method to update the file's permissions.
                     * @return the file permissions
                     * @see PosixFileAttributeView#setPermissions
                     */
                    // @ts-ignore
                    permissions(): java.util.Set<java.nio.file.attribute.PosixFilePermission>
                }
            }
        }
    }
}
