declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicFileChooserUI {
                    // @ts-ignore
                    class DoubleClickListener extends java.awt.event.MouseAdapter {
                        // @ts-ignore
                        constructor(list: javax.swing.JList)
                        /**
                         * The JList used for representing the files is created by subclasses, but the
                         * selection is monitored in this class.  The TransferHandler installed in the
                         * JFileChooser is also installed in the file list as it is used as the actual
                         * transfer source.  The list is updated on a mouse enter to reflect the current
                         * data transfer state of the file chooser.
                         */
                        // @ts-ignore
                        mouseEntered(e: java.awt.event.MouseEvent): void
                        // @ts-ignore
                        mouseClicked(e: java.awt.event.MouseEvent): void
                    }
                }
            }
        }
    }
}
