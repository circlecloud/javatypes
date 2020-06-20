declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for menu items. This is used by {@link MenuItem}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface MenuItemPeer extends java.awt.peer.MenuComponentPeer {
                /**
                 * Sets the label to be displayed in this menu item.
                 * @param label the label to be displayed
                 */
                // @ts-ignore
                setLabel(label: string): void
                /**
                 * Enables or disables the menu item.
                 * @param e {#code true} to enable the menu item, {@code false}
                 *         to disable it
                 */
                // @ts-ignore
                setEnabled(e: boolean): void
            }
        }
    }
}
