declare namespace javax {
    namespace swing {
        namespace filechooser {
            /**
             * <code>FileFilter</code> is an abstract class used by {@code JFileChooser}
             * for filtering the set of files shown to the user. See
             * {@code FileNameExtensionFilter} for an implementation that filters using
             * the file name extension.
             * <p>
             * A <code>FileFilter</code>
             * can be set on a <code>JFileChooser</code> to
             * keep unwanted files from appearing in the directory listing.
             * For an example implementation of a simple file filter, see
             * <code><i>yourJDK</i>/demo/jfc/FileChooserDemo/ExampleFileFilter.java</code>.
             * For more information and examples see
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/filechooser.html">How to Use File Choosers</a>,
             * a section in <em>The Java Tutorial</em>.
             * @see FileNameExtensionFilter
             * @see javax.swing.JFileChooser#setFileFilter
             * @see javax.swing.JFileChooser#addChoosableFileFilter
             * @author Jeff Dinkins
             */
            // @ts-ignore
            class FileFilter extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Whether the given file is accepted by this filter.
                 */
                // @ts-ignore
                abstract accept(f: java.io.File): boolean
                /**
                 * The description of this filter. For example: "JPG and GIF Images"
                 * @see FileView#getName
                 */
                // @ts-ignore
                abstract getDescription(): java.lang.String
            }
        }
    }
}
