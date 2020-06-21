declare namespace java {
    namespace awt {
        /**
         * A <code>Menu</code> object is a pull-down menu component
         * that is deployed from a menu bar.
         * <p>
         * A menu can optionally be a <i>tear-off</i> menu. A tear-off menu
         * can be opened and dragged away from its parent menu bar or menu.
         * It remains on the screen after the mouse button has been released.
         * The mechanism for tearing off a menu is platform dependent, since
         * the look and feel of the tear-off menu is determined by its peer.
         * On platforms that do not support tear-off menus, the tear-off
         * property is ignored.
         * <p>
         * Each item in a menu must belong to the <code>MenuItem</code>
         * class. It can be an instance of <code>MenuItem</code>, a submenu
         * (an instance of <code>Menu</code>), or a check box (an instance of
         * <code>CheckboxMenuItem</code>).
         * @author Sami Shaio
         * @see java.awt.MenuItem
         * @see java.awt.CheckboxMenuItem
         * @since JDK1.0
         */
        // @ts-ignore
        class Menu extends java.awt.MenuItem implements java.awt.MenuContainer, javax.accessibility.Accessible {
            /**
             * Constructs a new menu with an empty label. This menu is not
             * a tear-off menu.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since JDK1.1
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new menu with the specified label. This menu is not
             * a tear-off menu.
             * @param label the menu's label in the menu bar, or in
             *                    another menu of which this menu is a submenu.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            constructor(label: java.lang.String | string)
            /**
             * Constructs a new menu with the specified label,
             * indicating whether the menu can be torn off.
             * <p>
             * Tear-off functionality may not be supported by all
             * implementations of AWT.  If a particular implementation doesn't
             * support tear-off menus, this value is silently ignored.
             * @param label the menu's label in the menu bar, or in
             *                    another menu of which this menu is a submenu.
             * @param tearOff   if <code>true</code>, the menu
             *                    is a tear-off menu.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since JDK1.0.
             */
            // @ts-ignore
            constructor(label: java.lang.String | string, tearOff: boolean)
            /**
             * Creates the menu's peer.  The peer allows us to modify the
             * appearance of the menu without changing its functionality.
             */
            // @ts-ignore
            public addNotify(): void
            /**
             * Removes the menu's peer.  The peer allows us to modify the appearance
             * of the menu without changing its functionality.
             */
            // @ts-ignore
            public removeNotify(): void
            /**
             * Indicates whether this menu is a tear-off menu.
             * <p>
             * Tear-off functionality may not be supported by all
             * implementations of AWT.  If a particular implementation doesn't
             * support tear-off menus, this value is silently ignored.
             * @return <code>true</code> if this is a tear-off menu;
             *                          <code>false</code> otherwise.
             */
            // @ts-ignore
            public isTearOff(): boolean
            /**
             * Get the number of items in this menu.
             * @return the number of items in this menu.
             * @since JDK1.1
             */
            // @ts-ignore
            public getItemCount(): number /*int*/
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>getItemCount()</code>.
             */
            // @ts-ignore
            public countItems(): number /*int*/
            /**
             * Gets the item located at the specified index of this menu.
             * @param index the position of the item to be returned.
             * @return the item located at the specified index.
             */
            // @ts-ignore
            public getItem(index: number /*int*/): java.awt.MenuItem
            /**
             * Adds the specified menu item to this menu. If the
             * menu item has been part of another menu, removes it
             * from that menu.
             * @param mi   the menu item to be added
             * @return the menu item added
             * @see java.awt.Menu#insert(java.lang.String, int)
             * @see java.awt.Menu#insert(java.awt.MenuItem, int)
             */
            // @ts-ignore
            public add(mi: java.awt.MenuItem): java.awt.MenuItem
            /**
             * Adds an item with the specified label to this menu.
             * @param label   the text on the item
             * @see java.awt.Menu#insert(java.lang.String, int)
             * @see java.awt.Menu#insert(java.awt.MenuItem, int)
             */
            // @ts-ignore
            public add(label: java.lang.String | string): void
            /**
             * Inserts a menu item into this menu
             * at the specified position.
             * @param menuitem  the menu item to be inserted.
             * @param index     the position at which the menu
             *                           item should be inserted.
             * @see java.awt.Menu#add(java.lang.String)
             * @see java.awt.Menu#add(java.awt.MenuItem)
             * @exception IllegalArgumentException if the value of
             *                     <code>index</code> is less than zero
             * @since JDK1.1
             */
            // @ts-ignore
            public insert(menuitem: java.awt.MenuItem, index: number /*int*/): void
            /**
             * Inserts a menu item with the specified label into this menu
             * at the specified position.  This is a convenience method for
             * <code>insert(menuItem, index)</code>.
             * @param label the text on the item
             * @param index the position at which the menu item
             *                       should be inserted
             * @see java.awt.Menu#add(java.lang.String)
             * @see java.awt.Menu#add(java.awt.MenuItem)
             * @exception IllegalArgumentException if the value of
             *                     <code>index</code> is less than zero
             * @since JDK1.1
             */
            // @ts-ignore
            public insert(label: java.lang.String | string, index: number /*int*/): void
            /**
             * Adds a separator line, or a hypen, to the menu at the current position.
             * @see java.awt.Menu#insertSeparator(int)
             */
            // @ts-ignore
            public addSeparator(): void
            /**
             * Inserts a separator at the specified position.
             * @param index the position at which the
             *                        menu separator should be inserted.
             * @exception IllegalArgumentException if the value of
             *                        <code>index</code> is less than 0.
             * @see java.awt.Menu#addSeparator
             * @since JDK1.1
             */
            // @ts-ignore
            public insertSeparator(index: number /*int*/): void
            /**
             * Removes the menu item at the specified index from this menu.
             * @param index the position of the item to be removed.
             */
            // @ts-ignore
            public remove(index: number /*int*/): void
            /**
             * Removes the specified menu item from this menu.
             * @param item the item to be removed from the menu.
             *          If <code>item</code> is <code>null</code>
             *          or is not in this menu, this method does
             *          nothing.
             */
            // @ts-ignore
            public remove(item: java.awt.MenuComponent): void
            /**
             * Removes all items from this menu.
             * @since JDK1.0.
             */
            // @ts-ignore
            public removeAll(): void
            /**
             * Returns a string representing the state of this <code>Menu</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             * @return the parameter string of this menu
             */
            // @ts-ignore
            public paramString(): string
            /**
             * Gets the AccessibleContext associated with this Menu.
             * For menus, the AccessibleContext takes the form of an
             * AccessibleAWTMenu.
             * A new AccessibleAWTMenu instance is created if necessary.
             * @return an AccessibleAWTMenu that serves as the
             *          AccessibleContext of this Menu
             * @since 1.3
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
