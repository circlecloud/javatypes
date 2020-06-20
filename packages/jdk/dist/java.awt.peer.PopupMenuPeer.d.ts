declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link PopupMenu}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface PopupMenuPeer extends java.awt.peer.MenuPeer {
                /**
                 * Shows the popup menu.
                 * @param e a synthetic event describing the origin and location of the
                 *         popup menu
                 * @see PopupMenu#show(java.awt.Component, int, int)
                 */
                // @ts-ignore
                show(e: java.awt.Event): void
            }
        }
    }
}
