declare namespace java {
    namespace awt {
        /**
         * The <code>MenuBar</code> class encapsulates the platform's
         * concept of a menu bar bound to a frame. In order to associate
         * the menu bar with a <code>Frame</code> object, call the
         * frame's <code>setMenuBar</code> method.
         * <p>
         * <A NAME="mbexample"></A><!-- target for cross references -->
         * This is what a menu bar might look like:
         * <p>
         * <img src="doc-files/MenuBar-1.gif"
         * alt="Diagram of MenuBar containing 2 menus: Examples and Options.
         * Examples menu is expanded showing items: Basic, Simple, Check, and More Examples."
         * style="float:center; margin: 7px 10px;">
         * <p>
         * A menu bar handles keyboard shortcuts for menu items, passing them
         * along to its child menus.
         * (Keyboard shortcuts, which are optional, provide the user with
         * an alternative to the mouse for invoking a menu item and the
         * action that is associated with it.)
         * Each menu item can maintain an instance of <code>MenuShortcut</code>.
         * The <code>MenuBar</code> class defines several methods,
         * {@link MenuBar#shortcuts} and
         * {@link MenuBar#getShortcutMenuItem}
         * that retrieve information about the shortcuts a given
         * menu bar is managing.
         * @author Sami Shaio
         * @see java.awt.Frame
         * @see java.awt.Frame#setMenuBar(java.awt.MenuBar)
         * @see java.awt.Menu
         * @see java.awt.MenuItem
         * @see java.awt.MenuShortcut
         * @since JDK1.0
         */
        // @ts-ignore
        class MenuBar extends java.awt.MenuComponent implements java.awt.MenuContainer, javax.accessibility.Accessible {
            /**
             * Creates a new menu bar.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            constructor()
            /**
             * Creates the menu bar's peer.  The peer allows us to change the
             * appearance of the menu bar without changing any of the menu bar's
             * functionality.
             */
            // @ts-ignore
            addNotify(): void
            /**
             * Removes the menu bar's peer.  The peer allows us to change the
             * appearance of the menu bar without changing any of the menu bar's
             * functionality.
             */
            // @ts-ignore
            removeNotify(): void
            /**
             * Gets the help menu on the menu bar.
             * @return the help menu on this menu bar.
             */
            // @ts-ignore
            getHelpMenu(): java.awt.Menu
            /**
             * Sets the specified menu to be this menu bar's help menu.
             * If this menu bar has an existing help menu, the old help menu is
             * removed from the menu bar, and replaced with the specified menu.
             * @param m    the menu to be set as the help menu
             */
            // @ts-ignore
            setHelpMenu(m: java.awt.Menu): void
            /**
             * Adds the specified menu to the menu bar.
             * If the menu has been part of another menu bar,
             * removes it from that menu bar.
             * @param m   the menu to be added
             * @return the menu added
             * @see java.awt.MenuBar#remove(int)
             * @see java.awt.MenuBar#remove(java.awt.MenuComponent)
             */
            // @ts-ignore
            add(m: java.awt.Menu): java.awt.Menu
            /**
             * Removes the menu located at the specified
             * index from this menu bar.
             * @param index   the position of the menu to be removed.
             * @see java.awt.MenuBar#add(java.awt.Menu)
             */
            // @ts-ignore
            remove(index: number /*int*/): void
            /**
             * Removes the specified menu component from this menu bar.
             * @param m the menu component to be removed.
             * @see java.awt.MenuBar#add(java.awt.Menu)
             */
            // @ts-ignore
            remove(m: java.awt.MenuComponent): void
            /**
             * Gets the number of menus on the menu bar.
             * @return the number of menus on the menu bar.
             * @since JDK1.1
             */
            // @ts-ignore
            getMenuCount(): int
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>getMenuCount()</code>.
             */
            // @ts-ignore
            countMenus(): int
            /**
             * Gets the specified menu.
             * @param i the index position of the menu to be returned.
             * @return the menu at the specified index of this menu bar.
             */
            // @ts-ignore
            getMenu(i: number /*int*/): java.awt.Menu
            /**
             * Gets an enumeration of all menu shortcuts this menu bar
             * is managing.
             * @return an enumeration of menu shortcuts that this
             *                       menu bar is managing.
             * @see java.awt.MenuShortcut
             * @since JDK1.1
             */
            // @ts-ignore
            shortcuts(): java.util.Enumeration<java.awt.MenuShortcut>
            /**
             * Gets the instance of <code>MenuItem</code> associated
             * with the specified <code>MenuShortcut</code> object,
             * or <code>null</code> if none of the menu items being managed
             * by this menu bar is associated with the specified menu
             * shortcut.
             * @param s the specified menu shortcut.
             * @see java.awt.MenuItem
             * @see java.awt.MenuShortcut
             * @since JDK1.1
             */
            // @ts-ignore
            getShortcutMenuItem(s: java.awt.MenuShortcut): java.awt.MenuItem
            /**
             * Deletes the specified menu shortcut.
             * @param s the menu shortcut to delete.
             * @since JDK1.1
             */
            // @ts-ignore
            deleteShortcut(s: java.awt.MenuShortcut): void
            /**
             * Gets the AccessibleContext associated with this MenuBar.
             * For menu bars, the AccessibleContext takes the form of an
             * AccessibleAWTMenuBar.
             * A new AccessibleAWTMenuBar instance is created if necessary.
             * @return an AccessibleAWTMenuBar that serves as the
             *          AccessibleContext of this MenuBar
             * @since 1.3
             */
            // @ts-ignore
            getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
