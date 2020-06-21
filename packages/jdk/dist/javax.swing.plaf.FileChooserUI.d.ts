declare namespace javax {
    namespace swing {
        namespace plaf {
            /**
             * Pluggable look and feel interface for <code>JFileChooser</code>.
             * @author Jeff Dinkins
             */
            // @ts-ignore
            abstract class FileChooserUI extends javax.swing.plaf.ComponentUI {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public abstract getAcceptAllFileFilter(fc: javax.swing.JFileChooser): javax.swing.filechooser.FileFilter
                // @ts-ignore
                public abstract getFileView(fc: javax.swing.JFileChooser): javax.swing.filechooser.FileView
                // @ts-ignore
                public abstract getApproveButtonText(fc: javax.swing.JFileChooser): string
                // @ts-ignore
                public abstract getDialogTitle(fc: javax.swing.JFileChooser): string
                // @ts-ignore
                public abstract rescanCurrentDirectory(fc: javax.swing.JFileChooser): void
                // @ts-ignore
                public abstract ensureFileIsVisible(fc: javax.swing.JFileChooser, f: java.io.File): void
                /**
                 * Returns default button for current <code>LookAndFeel</code>.
                 * <code>JFileChooser</code> will use this button as default button
                 * for dialog windows.
                 * @since 1.7
                 */
                // @ts-ignore
                public getDefaultButton(fc: javax.swing.JFileChooser): javax.swing.JButton
            }
        }
    }
}
