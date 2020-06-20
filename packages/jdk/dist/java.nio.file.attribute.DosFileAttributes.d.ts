declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                /**
                 * File attributes associated with a file in a file system that supports
                 * legacy "DOS" attributes.
                 * <p> <b>Usage Example:</b>
                 * <pre>
                 * Path file = ...
                 * DosFileAttributes attrs = Files.readAttributes(file, DosFileAttributes.class);
                 * </pre>
                 * @since 1.7
                 */
                // @ts-ignore
                interface DosFileAttributes extends java.nio.file.attribute.BasicFileAttributes {
                    /**
                     * Returns the value of the read-only attribute.
                     * <p> This attribute is often used as a simple access control mechanism
                     * to prevent files from being deleted or updated. Whether the file system
                     * or platform does any enforcement to prevent <em>read-only</em> files
                     * from being updated is implementation specific.
                     * @return the value of the read-only attribute
                     */
                    // @ts-ignore
                    isReadOnly(): boolean
                    /**
                     * Returns the value of the hidden attribute.
                     * <p> This attribute is often used to indicate if the file is visible to
                     * users.
                     * @return the value of the hidden attribute
                     */
                    // @ts-ignore
                    isHidden(): boolean
                    /**
                     * Returns the value of the archive attribute.
                     * <p> This attribute is typically used by backup programs.
                     * @return the value of the archive attribute
                     */
                    // @ts-ignore
                    isArchive(): boolean
                    /**
                     * Returns the value of the system attribute.
                     * <p> This attribute is often used to indicate that the file is a component
                     * of the operating system.
                     * @return the value of the system attribute
                     */
                    // @ts-ignore
                    isSystem(): boolean
                }
            }
        }
    }
}
