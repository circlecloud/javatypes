declare namespace javax {
    namespace swing {
        namespace filechooser {
            /**
             * An implementation of {@code FileFilter} that filters using a
             * specified set of extensions. The extension for a file is the
             * portion of the file name after the last ".". Files whose name does
             * not contain a "." have no file name extension. File name extension
             * comparisons are case insensitive.
             * <p>
             * The following example creates a
             * {@code FileNameExtensionFilter} that will show {@code jpg} files:
             * <pre>
             * FileFilter filter = new FileNameExtensionFilter("JPEG file", "jpg", "jpeg");
             * JFileChooser fileChooser = ...;
             * fileChooser.addChoosableFileFilter(filter);
             * </pre>
             * @see FileFilter
             * @see javax.swing.JFileChooser#setFileFilter
             * @see javax.swing.JFileChooser#addChoosableFileFilter
             * @see javax.swing.JFileChooser#getFileFilter
             * @since 1.6
             */
            // @ts-ignore
            class FileNameExtensionFilter extends javax.swing.filechooser.FileFilter {
                /**
                 * Creates a {@code FileNameExtensionFilter} with the specified
                 * description and file name extensions. The returned {@code
                 * FileNameExtensionFilter} will accept all directories and any
                 * file with a file name extension contained in {@code extensions}.
                 * @param description textual description for the filter, may be
                 *                     {#code null}
                 * @param extensions the accepted file name extensions
                 * @throws IllegalArgumentException if extensions is {#code null}, empty,
                 *          contains {@code null}, or contains an empty string
                 * @see #accept
                 */
                // @ts-ignore
                constructor(description: java.lang.String | string, ...extensions: java.lang.String[] | string[])
                /**
                 * Tests the specified file, returning true if the file is
                 * accepted, false otherwise. True is returned if the extension
                 * matches one of the file name extensions of this {@code
                 * FileFilter}, or the file is a directory.
                 * @param f the {#code File} to test
                 * @return true if the file is to be accepted, false otherwise
                 */
                // @ts-ignore
                public accept(f: java.io.File): boolean
                /**
                 * The description of this filter. For example: "JPG and GIF Images."
                 * @return the description of this filter
                 */
                // @ts-ignore
                public getDescription(): string
                /**
                 * Returns the set of file name extensions files are tested against.
                 * @return the set of file name extensions files are tested against
                 */
                // @ts-ignore
                public getExtensions(): string[]
                /**
                 * Returns a string representation of the {@code FileNameExtensionFilter}.
                 * This method is intended to be used for debugging purposes,
                 * and the content and format of the returned string may vary
                 * between implementations.
                 * @return a string representation of this {#code FileNameExtensionFilter}
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
