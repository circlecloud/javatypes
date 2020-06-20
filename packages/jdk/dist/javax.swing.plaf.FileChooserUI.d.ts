declare namespace javax {
    namespace swing {
        namespace plaf {
            /**
             * Pluggable look and feel interface for <code>JFileChooser</code>.
             * @author Jeff Dinkins
             */
            // @ts-ignore
            class FileChooserUI extends javax.swing.plaf.ComponentUI {
                // @ts-ignore
                constructor()
                // @ts-ignore
                abstract getAcceptAllFileFilter(fc: javax.swing.JFileChooser): javax.swing.filechooser.FileFilter
                // @ts-ignore
                abstract getFileView(fc: javax.swing.JFileChooser): javax.swing.filechooser.FileView
                // @ts-ignore
                abstract getApproveButtonText(fc: javax.swing.JFileChooser): java.lang.String
                // @ts-ignore
                abstract getDialogTitle(fc: javax.swing.JFileChooser): java.lang.String
                // @ts-ignore
                abstract rescanCurrentDirectory(fc: javax.swing.JFileChooser): void
                // @ts-ignore
                abstract ensureFileIsVisible(fc: javax.swing.JFileChooser, f: java.io.File): void
                /**
                 * Returns default button for current <code>LookAndFeel</code>.
                 * <code>JFileChooser</code> will use this button as default button
                 * for dialog windows.
                 * @since 1.7
                 */
                // @ts-ignore
                getDefaultButton(fc: javax.swing.JFileChooser): javax.swing.JButton
            }
        }
    }
}
