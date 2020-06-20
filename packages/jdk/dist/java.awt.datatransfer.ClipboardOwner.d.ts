declare namespace java {
    namespace awt {
        namespace datatransfer {
            /**
             * Defines the interface for classes that will provide data to
             * a clipboard. An instance of this interface becomes the owner
             * of the contents of a clipboard (clipboard owner) if it is
             * passed as an argument to
             * {@link java.awt.datatransfer.Clipboard#setContents} method of
             * the clipboard and this method returns successfully.
             * The instance remains the clipboard owner until another application
             * or another object within this application asserts ownership
             * of this clipboard.
             * @see java.awt.datatransfer.Clipboard
             * @author Amy Fowler
             */
            // @ts-ignore
            interface ClipboardOwner {
                /**
                 * Notifies this object that it is no longer the clipboard owner.
                 * This method will be called when another application or another
                 * object within this application asserts ownership of the clipboard.
                 * @param clipboard the clipboard that is no longer owned
                 * @param contents the contents which this owner had placed on the clipboard
                 */
                // @ts-ignore
                lostOwnership(clipboard: java.awt.datatransfer.Clipboard, contents: java.awt.datatransfer.Transferable): void
            }
        }
    }
}
