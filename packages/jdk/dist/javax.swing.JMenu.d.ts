declare namespace javax {
    namespace swing {
        /**
         * An implementation of a menu -- a popup window containing
         * <code>JMenuItem</code>s that
         * is displayed when the user selects an item on the <code>JMenuBar</code>.
         * In addition to <code>JMenuItem</code>s, a <code>JMenu</code> can
         * also contain <code>JSeparator</code>s.
         * <p>
         * In essence, a menu is a button with an associated <code>JPopupMenu</code>.
         * When the "button" is pressed, the <code>JPopupMenu</code> appears. If the
         * "button" is on the <code>JMenuBar</code>, the menu is a top-level window.
         * If the "button" is another menu item, then the <code>JPopupMenu</code> is
         * "pull-right" menu.
         * <p>
         * Menus can be configured, and to some degree controlled, by
         * <code><a href="Action.html">Action</a></code>s.  Using an
         * <code>Action</code> with a menu has many benefits beyond directly
         * configuring a menu.  Refer to <a href="Action.html#buttonActions">
         * Swing Components Supporting <code>Action</code></a> for more
         * details, and you can find more information in <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/misc/action.html">How
         * to Use Actions</a>, a section in <em>The Java Tutorial</em>.
         * <p>
         * For information and examples of using menus see
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/menu.html">How to Use Menus</a>,
         * a section in <em>The Java Tutorial.</em>
         * <p>
         * <strong>Warning:</strong> Swing is not thread safe. For more
         * information see <a
         * href="package-summary.html#threading">Swing's Threading
         * Policy</a>.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @beaninfo attribute: isContainer true
         *  description: A popup window containing menu items displayed in a menu bar.
         * @author Georges Saab
         * @author David Karlton
         * @author Arnaud Weber
         * @see JMenuItem
         * @see JSeparator
         * @see JMenuBar
         * @see JPopupMenu
         */
        // @ts-ignore
        class JMenu extends javax.swing.JMenuItem implements javax.accessibility.Accessible, javax.swing.MenuElement {
            /**
             * Constructs a new <code>JMenu</code> with no text.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new <code>JMenu</code> with the supplied string
             * as its text.
             * @param s  the text for the menu label
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
            /**
             * Constructs a menu whose properties are taken from the
             * <code>Action</code> supplied.
             * @param a an <code>Action</code>
             * @since 1.3
             */
            // @ts-ignore
            constructor(a: javax.swing.Action)
            /**
             * Constructs a new <code>JMenu</code> with the supplied string as
             * its text and specified as a tear-off menu or not.
             * @param s the text for the menu label
             * @param b can the menu be torn off (not yet implemented)
             */
            // @ts-ignore
            constructor(s: java.lang.String | string, b: boolean)
            /**
             * The window-closing listener for the popup.
             * @see WinListener
             */
            // @ts-ignore
            popupListener: javax.swing.JMenu.WinListener
            /**
             * Resets the UI property with a value from the current look and feel.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            public updateUI(): void
            /**
             * Returns the name of the L&amp;F class that renders this component.
             * @return the string "MenuUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            public getUIClassID(): string
            /**
             * Sets the data model for the "menu button" -- the label
             * that the user clicks to open or close the menu.
             * @param newModel the <code>ButtonModel</code>
             * @see #getModel
             * @beaninfo description: The menu's model
             *        bound: true
             *       expert: true
             *       hidden: true
             */
            // @ts-ignore
            public setModel(newModel: javax.swing.ButtonModel): void
            /**
             * Returns true if the menu is currently selected (highlighted).
             * @return true if the menu is selected, else false
             */
            // @ts-ignore
            public isSelected(): boolean
            /**
             * Sets the selection status of the menu.
             * @param b  true to select (highlight) the menu; false to de-select
             *           the menu
             * @beaninfo description: When the menu is selected, its popup child is shown.
             *            expert: true
             *            hidden: true
             */
            // @ts-ignore
            public setSelected(b: boolean): void
            /**
             * Returns true if the menu's popup window is visible.
             * @return true if the menu is visible, else false
             */
            // @ts-ignore
            public isPopupMenuVisible(): boolean
            /**
             * Sets the visibility of the menu's popup.  If the menu is
             * not enabled, this method will have no effect.
             * @param b  a boolean value -- true to make the menu visible,
             *            false to hide it
             * @beaninfo description: The popup menu's visibility
             *            expert: true
             *            hidden: true
             */
            // @ts-ignore
            public setPopupMenuVisible(b: boolean): void
            /**
             * Computes the origin for the <code>JMenu</code>'s popup menu.
             * This method uses Look and Feel properties named
             * <code>Menu.menuPopupOffsetX</code>,
             * <code>Menu.menuPopupOffsetY</code>,
             * <code>Menu.submenuPopupOffsetX</code>, and
             * <code>Menu.submenuPopupOffsetY</code>
             * to adjust the exact location of popup.
             * @return a <code>Point</code> in the coordinate space of the
             *           menu which should be used as the origin
             *           of the <code>JMenu</code>'s popup menu
             * @since 1.3
             */
            // @ts-ignore
            getPopupMenuOrigin(): java.awt.Point
            /**
             * Returns the suggested delay, in milliseconds, before submenus
             * are popped up or down.
             * Each look and feel (L&amp;F) may determine its own policy for
             * observing the <code>delay</code> property.
             * In most cases, the delay is not observed for top level menus
             * or while dragging.  The default for <code>delay</code> is 0.
             * This method is a property of the look and feel code and is used
             * to manage the idiosyncrasies of the various UI implementations.
             * @return the <code>delay</code> property
             */
            // @ts-ignore
            public getDelay(): number /*int*/
            /**
             * Sets the suggested delay before the menu's <code>PopupMenu</code>
             * is popped up or down.  Each look and feel (L&amp;F) may determine
             * it's own policy for observing the delay property.  In most cases,
             * the delay is not observed for top level menus or while dragging.
             * This method is a property of the look and feel code and is used
             * to manage the idiosyncrasies of the various UI implementations.
             * @param d the number of milliseconds to delay
             * @exception IllegalArgumentException if <code>d</code>
             *                        is less than 0
             * @beaninfo description: The delay between menu selection and making the popup menu visible
             *            expert: true
             */
            // @ts-ignore
            public setDelay(d: number /*int*/): void
            /**
             * Sets the location of the popup component.
             * @param x the x coordinate of the popup's new position
             * @param y the y coordinate of the popup's new position
             */
            // @ts-ignore
            public setMenuLocation(x: number /*int*/, y: number /*int*/): void
            /**
             * Appends a menu item to the end of this menu.
             * Returns the menu item added.
             * @param menuItem the <code>JMenuitem</code> to be added
             * @return the <code>JMenuItem</code> added
             */
            // @ts-ignore
            public add(menuItem: javax.swing.JMenuItem): javax.swing.JMenuItem
            /**
             * Appends a component to the end of this menu.
             * Returns the component added.
             * @param c the <code>Component</code> to add
             * @return the <code>Component</code> added
             */
            // @ts-ignore
            public add(c: java.awt.Component): java.awt.Component
            /**
             * Adds the specified component to this container at the given
             * position. If <code>index</code> equals -1, the component will
             * be appended to the end.
             * @param c   the <code>Component</code> to add
             * @param index    the position at which to insert the component
             * @return the <code>Component</code> added
             * @see #remove
             * @see java.awt.Container#add(Component, int)
             */
            // @ts-ignore
            public add(c: java.awt.Component, index: number /*int*/): java.awt.Component
            /**
             * Creates a new menu item with the specified text and appends
             * it to the end of this menu.
             * @param s the string for the menu item to be added
             */
            // @ts-ignore
            public add(s: java.lang.String | string): javax.swing.JMenuItem
            /**
             * Creates a new menu item attached to the specified
             * <code>Action</code> object and appends it to the end of this menu.
             * @param a the <code>Action</code> for the menu item to be added
             * @see Action
             */
            // @ts-ignore
            public add(a: javax.swing.Action): javax.swing.JMenuItem
            /**
             * Factory method which creates the <code>JMenuItem</code> for
             * <code>Action</code>s added to the <code>JMenu</code>.
             * @param a the <code>Action</code> for the menu item to be added
             * @return the new menu item
             * @see Action
             * @since 1.3
             */
            // @ts-ignore
            createActionComponent(a: javax.swing.Action): javax.swing.JMenuItem
            /**
             * Returns a properly configured <code>PropertyChangeListener</code>
             * which updates the control as changes to the <code>Action</code> occur.
             */
            // @ts-ignore
            createActionChangeListener(b: javax.swing.JMenuItem): java.beans.PropertyChangeListener
            /**
             * Appends a new separator to the end of the menu.
             */
            // @ts-ignore
            public addSeparator(): void
            /**
             * Inserts a new menu item with the specified text at a
             * given position.
             * @param s the text for the menu item to add
             * @param pos an integer specifying the position at which to add the
             *                new menu item
             * @exception IllegalArgumentException when the value of
             *                   <code>pos</code> &lt; 0
             */
            // @ts-ignore
            public insert(s: java.lang.String | string, pos: number /*int*/): void
            /**
             * Inserts the specified <code>JMenuitem</code> at a given position.
             * @param mi the <code>JMenuitem</code> to add
             * @param pos an integer specifying the position at which to add the
             *                new <code>JMenuitem</code>
             * @return the new menu item
             * @exception IllegalArgumentException if the value of
             *                   <code>pos</code> &lt; 0
             */
            // @ts-ignore
            public insert(mi: javax.swing.JMenuItem, pos: number /*int*/): javax.swing.JMenuItem
            /**
             * Inserts a new menu item attached to the specified <code>Action</code>
             * object at a given position.
             * @param a the <code>Action</code> object for the menu item to add
             * @param pos an integer specifying the position at which to add the
             *                new menu item
             * @exception IllegalArgumentException if the value of
             *                   <code>pos</code> &lt; 0
             */
            // @ts-ignore
            public insert(a: javax.swing.Action, pos: number /*int*/): javax.swing.JMenuItem
            /**
             * Inserts a separator at the specified position.
             * @param index an integer specifying the position at which to
             *                     insert the menu separator
             * @exception IllegalArgumentException if the value of
             *                        <code>index</code> &lt; 0
             */
            // @ts-ignore
            public insertSeparator(index: number /*int*/): void
            /**
             * Returns the <code>JMenuItem</code> at the specified position.
             * If the component at <code>pos</code> is not a menu item,
             * <code>null</code> is returned.
             * This method is included for AWT compatibility.
             * @param pos    an integer specifying the position
             * @exception IllegalArgumentException if the value of
             *                        <code>pos</code> &lt; 0
             * @return the menu item at the specified position; or <code>null</code>
             *           if the item as the specified position is not a menu item
             */
            // @ts-ignore
            public getItem(pos: number /*int*/): javax.swing.JMenuItem
            /**
             * Returns the number of items on the menu, including separators.
             * This method is included for AWT compatibility.
             * @return an integer equal to the number of items on the menu
             * @see #getMenuComponentCount
             */
            // @ts-ignore
            public getItemCount(): number /*int*/
            /**
             * Returns true if the menu can be torn off.  This method is not
             * yet implemented.
             * @return true if the menu can be torn off, else false
             * @exception Error  if invoked -- this method is not yet implemented
             */
            // @ts-ignore
            public isTearOff(): boolean
            /**
             * Removes the specified menu item from this menu.  If there is no
             * popup menu, this method will have no effect.
             * @param item the <code>JMenuItem</code> to be removed from the menu
             */
            // @ts-ignore
            public remove(item: javax.swing.JMenuItem): void
            /**
             * Removes the menu item at the specified index from this menu.
             * @param pos the position of the item to be removed
             * @exception IllegalArgumentException if the value of
             *                        <code>pos</code> &lt; 0, or if <code>pos</code>
             *                        is greater than the number of menu items
             */
            // @ts-ignore
            public remove(pos: number /*int*/): void
            /**
             * Removes the component <code>c</code> from this menu.
             * @param c the component to be removed
             */
            // @ts-ignore
            public remove(c: java.awt.Component): void
            /**
             * Removes all menu items from this menu.
             */
            // @ts-ignore
            public removeAll(): void
            /**
             * Returns the number of components on the menu.
             * @return an integer containing the number of components on the menu
             */
            // @ts-ignore
            public getMenuComponentCount(): number /*int*/
            /**
             * Returns the component at position <code>n</code>.
             * @param n the position of the component to be returned
             * @return the component requested, or <code>null</code>
             *                   if there is no popup menu
             */
            // @ts-ignore
            public getMenuComponent(n: number /*int*/): java.awt.Component
            /**
             * Returns an array of <code>Component</code>s of the menu's
             * subcomponents.  Note that this returns all <code>Component</code>s
             * in the popup menu, including separators.
             * @return an array of <code>Component</code>s or an empty array
             *           if there is no popup menu
             */
            // @ts-ignore
            public getMenuComponents(): java.awt.Component[]
            /**
             * Returns true if the menu is a 'top-level menu', that is, if it is
             * the direct child of a menubar.
             * @return true if the menu is activated from the menu bar;
             *          false if the menu is activated from a menu item
             *          on another menu
             */
            // @ts-ignore
            public isTopLevelMenu(): boolean
            /**
             * Returns true if the specified component exists in the
             * submenu hierarchy.
             * @param c the <code>Component</code> to be tested
             * @return true if the <code>Component</code> exists, false otherwise
             */
            // @ts-ignore
            public isMenuComponent(c: java.awt.Component): boolean
            /**
             * Returns the popupmenu associated with this menu.  If there is
             * no popupmenu, it will create one.
             */
            // @ts-ignore
            public getPopupMenu(): javax.swing.JPopupMenu
            /**
             * Adds a listener for menu events.
             * @param l the listener to be added
             */
            // @ts-ignore
            public addMenuListener(l: javax.swing.event.MenuListener): void
            /**
             * Removes a listener for menu events.
             * @param l the listener to be removed
             */
            // @ts-ignore
            public removeMenuListener(l: javax.swing.event.MenuListener): void
            /**
             * Returns an array of all the <code>MenuListener</code>s added
             * to this JMenu with addMenuListener().
             * @return all of the <code>MenuListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            public getMenuListeners(): javax.swing.event.MenuListener[]
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.  The event instance
             * is created lazily.
             * @exception Error  if there is a <code>null</code> listener
             * @see EventListenerList
             */
            // @ts-ignore
            fireMenuSelected(): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.  The event instance
             * is created lazily.
             * @exception Error if there is a <code>null</code> listener
             * @see EventListenerList
             */
            // @ts-ignore
            fireMenuDeselected(): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.  The event instance
             * is created lazily.
             * @exception Error if there is a <code>null</code> listener
             * @see EventListenerList
             */
            // @ts-ignore
            fireMenuCanceled(): void
            /**
             * Creates a window-closing listener for the popup.
             * @param p the <code>JPopupMenu</code>
             * @return the new window-closing listener
             * @see WinListener
             */
            // @ts-ignore
            createWinListener(p: javax.swing.JPopupMenu): javax.swing.JMenu.WinListener
            /**
             * Messaged when the menubar selection changes to activate or
             * deactivate this menu.
             * Overrides <code>JMenuItem.menuSelectionChanged</code>.
             * @param isIncluded  true if this menu is active, false if
             *         it is not
             */
            // @ts-ignore
            public menuSelectionChanged(isIncluded: boolean): void
            /**
             * Returns an array of <code>MenuElement</code>s containing the submenu
             * for this menu component.  If popup menu is <code>null</code> returns
             * an empty array.  This method is required to conform to the
             * <code>MenuElement</code> interface.  Note that since
             * <code>JSeparator</code>s do not conform to the <code>MenuElement</code>
             * interface, this array will only contain <code>JMenuItem</code>s.
             * @return an array of <code>MenuElement</code> objects
             */
            // @ts-ignore
            public getSubElements(): javax.swing.MenuElement[]
            /**
             * Returns the <code>java.awt.Component</code> used to
             * paint this <code>MenuElement</code>.
             * The returned component is used to convert events and detect if
             * an event is inside a menu component.
             */
            // @ts-ignore
            public getComponent(): java.awt.Component
            /**
             * Sets the <code>ComponentOrientation</code> property of this menu
             * and all components contained within it. This includes all
             * components returned by {@link #getMenuComponents getMenuComponents}.
             * @param o the new component orientation of this menu and
             *         the components contained within it.
             * @exception NullPointerException if <code>orientation</code> is null.
             * @see java.awt.Component#setComponentOrientation
             * @see java.awt.Component#getComponentOrientation
             * @since 1.4
             */
            // @ts-ignore
            public applyComponentOrientation(o: java.awt.ComponentOrientation): void
            // @ts-ignore
            public setComponentOrientation(o: java.awt.ComponentOrientation): void
            /**
             * <code>setAccelerator</code> is not defined for <code>JMenu</code>.
             * Use <code>setMnemonic</code> instead.
             * @param keyStroke  the keystroke combination which will invoke
             *                   the <code>JMenuItem</code>'s actionlisteners
             *                   without navigating the menu hierarchy
             * @exception Error  if invoked -- this method is not defined for JMenu.
             *                   Use <code>setMnemonic</code> instead
             * @beaninfo description: The keystroke combination which will invoke the JMenuItem's
             *                   actionlisteners without navigating the menu hierarchy
             *           hidden: true
             */
            // @ts-ignore
            public setAccelerator(keyStroke: javax.swing.KeyStroke): void
            /**
             * Processes key stroke events such as mnemonics and accelerators.
             * @param evt  the key event to be processed
             */
            // @ts-ignore
            processKeyEvent(evt: java.awt.event.KeyEvent): void
            /**
             * Programmatically performs a "click".  This overrides the method
             * <code>AbstractButton.doClick</code> in order to make the menu pop up.
             * @param pressTime  indicates the number of milliseconds the
             *           button was pressed for
             */
            // @ts-ignore
            public doClick(pressTime: number /*int*/): void
            /**
             * Returns a string representation of this <code>JMenu</code>. This
             * method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this JMenu.
             */
            // @ts-ignore
            paramString(): string
            /**
             * Gets the AccessibleContext associated with this JMenu.
             * For JMenus, the AccessibleContext takes the form of an
             * AccessibleJMenu.
             * A new AccessibleJMenu instance is created if necessary.
             * @return an AccessibleJMenu that serves as the
             *          AccessibleContext of this JMenu
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
