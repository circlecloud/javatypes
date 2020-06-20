declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link MenuBar}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface MenuBarPeer extends java.awt.peer.MenuComponentPeer {
                /**
                 * Adds a menu to the menu bar.
                 * @param m the menu to add
                 * @see MenuBar#add(Menu)
                 */
                // @ts-ignore
                addMenu(m: java.awt.Menu): void
                /**
                 * Deletes a menu from the menu bar.
                 * @param index the index of the menu to remove
                 * @see MenuBar#remove(int)
                 */
                // @ts-ignore
                delMenu(index: number /*int*/): void
                /**
                 * Adds a help menu to the menu bar.
                 * @param m the help menu to add
                 * @see MenuBar#setHelpMenu(Menu)
                 */
                // @ts-ignore
                addHelpMenu(m: java.awt.Menu): void
            }
        }
    }
}
