declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for menus. This is used by {@link Menu}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface MenuPeer extends java.awt.peer.MenuItemPeer {
                /**
                 * Adds a separator (e.g. a horizontal line or similar) to the menu.
                 * @see Menu#addSeparator()
                 */
                // @ts-ignore
                addSeparator(): void
                /**
                 * Adds the specified menu item to the menu.
                 * @param item the menu item to add
                 * @see Menu#add(MenuItem)
                 */
                // @ts-ignore
                addItem(item: java.awt.MenuItem): void
                /**
                 * Removes the menu item at the specified index.
                 * @param index the index of the item to remove
                 * @see Menu#remove(int)
                 */
                // @ts-ignore
                delItem(index: number /*int*/): void
            }
        }
    }
}
