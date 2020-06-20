declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link Dialog}. This adds a couple of dialog specific
             * features to the {@link WindowPeer} interface.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface DialogPeer extends java.awt.peer.WindowPeer {
                /**
                 * Sets the title on the dialog window.
                 * @param title the title to set
                 * @see Dialog#setTitle(String)
                 */
                // @ts-ignore
                setTitle(title: string): void
                /**
                 * Sets if the dialog should be resizable or not.
                 * @param resizeable {#code true} when the dialog should be resizable,
                 *         {@code false} if not
                 * @see Dialog#setResizable(boolean)
                 */
                // @ts-ignore
                setResizable(resizeable: boolean): void
                /**
                 * Block the specified windows. This is used for modal dialogs.
                 * @param windows the windows to block
                 * @see Dialog#modalShow()
                 * @see Dialog#blockWindows()
                 */
                // @ts-ignore
                blockWindows(windows: Array<java.awt.Window>): void
            }
        }
    }
}
