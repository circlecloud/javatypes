declare namespace javax {
    namespace swing {
        /**
         * An implementation of an item in a menu. A menu item is essentially a button
         * sitting in a list. When the user selects the "button", the action
         * associated with the menu item is performed. A <code>JMenuItem</code>
         * contained in a <code>JPopupMenu</code> performs exactly that function.
         * <p>
         * Menu items can be configured, and to some degree controlled, by
         * <code><a href="Action.html">Action</a></code>s.  Using an
         * <code>Action</code> with a menu item has many benefits beyond directly
         * configuring a menu item.  Refer to <a href="Action.html#buttonActions">
         * Swing Components Supporting <code>Action</code></a> for more
         * details, and you can find more information in <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/misc/action.html">How
         * to Use Actions</a>, a section in <em>The Java Tutorial</em>.
         * <p>
         * For further documentation and for examples, see
         * <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/components/menu.html">How to Use Menus</a>
         * in <em>The Java Tutorial.</em>
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
         * @beaninfo attribute: isContainer false
         *  description: An item which can be selected in a menu.
         * @author Georges Saab
         * @author David Karlton
         * @see JPopupMenu
         * @see JMenu
         * @see JCheckBoxMenuItem
         * @see JRadioButtonMenuItem
         */
        // @ts-ignore
        class JMenuItem extends javax.swing.AbstractButton implements javax.accessibility.Accessible, javax.swing.MenuElement {
            /**
             * Creates a <code>JMenuItem</code> with no set text or icon.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a <code>JMenuItem</code> with the specified icon.
             * @param icon the icon of the <code>JMenuItem</code>
             */
            // @ts-ignore
            constructor(icon: javax.swing.Icon)
            /**
             * Creates a <code>JMenuItem</code> with the specified text.
             * @param text the text of the <code>JMenuItem</code>
             */
            // @ts-ignore
            constructor(text: string)
            /**
             * Creates a menu item whose properties are taken from the
             * specified <code>Action</code>.
             * @param a the action of the <code>JMenuItem</code>
             * @since 1.3
             */
            // @ts-ignore
            constructor(a: javax.swing.Action)
            /**
             * Creates a <code>JMenuItem</code> with the specified text and icon.
             * @param text the text of the <code>JMenuItem</code>
             * @param icon the icon of the <code>JMenuItem</code>
             */
            // @ts-ignore
            constructor(text: string, icon: javax.swing.Icon)
            /**
             * Creates a <code>JMenuItem</code> with the specified text and
             * keyboard mnemonic.
             * @param text the text of the <code>JMenuItem</code>
             * @param mnemonic the keyboard mnemonic for the <code>JMenuItem</code>
             */
            // @ts-ignore
            constructor(text: string, mnemonic: number /*int*/)
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            setModel(newModel: javax.swing.ButtonModel): void
            /**
             * Initializes the menu item with the specified text and icon.
             * @param text the text of the <code>JMenuItem</code>
             * @param icon the icon of the <code>JMenuItem</code>
             */
            // @ts-ignore
            init(text: string, icon: javax.swing.Icon): void
            /**
             * Sets the look and feel object that renders this component.
             * @param ui  the <code>JMenuItemUI</code> L&amp;F object
             * @see UIDefaults#getUI
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the Component's LookAndFeel.
             */
            // @ts-ignore
            setUI(ui: javax.swing.plaf.MenuItemUI): void
            /**
             * Resets the UI property with a value from the current look and feel.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            updateUI(): void
            /**
             * Returns the suffix used to construct the name of the L&amp;F class used to
             * render this component.
             * @return the string "MenuItemUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            getUIClassID(): java.lang.String
            /**
             * Identifies the menu item as "armed". If the mouse button is
             * released while it is over this item, the menu's action event
             * will fire. If the mouse button is released elsewhere, the
             * event will not fire and the menu item will be disarmed.
             * @param b true to arm the menu item so it can be selected
             * @beaninfo description: Mouse release will fire an action event
             *          hidden: true
             */
            // @ts-ignore
            setArmed(b: boolean): void
            /**
             * Returns whether the menu item is "armed".
             * @return true if the menu item is armed, and it can be selected
             * @see #setArmed
             */
            // @ts-ignore
            isArmed(): boolean
            /**
             * Enables or disables the menu item.
             * @param b  true to enable the item
             * @beaninfo description: Does the component react to user interaction
             *           bound: true
             *       preferred: true
             */
            // @ts-ignore
            setEnabled(b: boolean): void
            /**
             * Sets the key combination which invokes the menu item's
             * action listeners without navigating the menu hierarchy. It is the
             * UI's responsibility to install the correct action.  Note that
             * when the keyboard accelerator is typed, it will work whether or
             * not the menu is currently displayed.
             * @param keyStroke the <code>KeyStroke</code> which will
             *           serve as an accelerator
             * @beaninfo description: The keystroke combination which will invoke the
             *                   JMenuItem's actionlisteners without navigating the
             *                   menu hierarchy
             *            bound: true
             *        preferred: true
             */
            // @ts-ignore
            setAccelerator(keyStroke: javax.swing.KeyStroke): void
            /**
             * Returns the <code>KeyStroke</code> which serves as an accelerator
             * for the menu item.
             * @return a <code>KeyStroke</code> object identifying the
             *           accelerator key
             */
            // @ts-ignore
            getAccelerator(): javax.swing.KeyStroke
            /**
             * {@inheritDoc}
             * @since 1.3
             */
            // @ts-ignore
            configurePropertiesFromAction(a: javax.swing.Action): void
            /**
             * {@inheritDoc}
             * @since 1.6
             */
            // @ts-ignore
            actionPropertyChanged(action: javax.swing.Action, propertyName: string): void
            /**
             * Processes a mouse event forwarded from the
             * <code>MenuSelectionManager</code> and changes the menu
             * selection, if necessary, by using the
             * <code>MenuSelectionManager</code>'s API.
             * <p>
             * Note: you do not have to forward the event to sub-components.
             * This is done automatically by the <code>MenuSelectionManager</code>.
             * @param e   a <code>MouseEvent</code>
             * @param path  the <code>MenuElement</code> path array
             * @param manager   the <code>MenuSelectionManager</code>
             */
            // @ts-ignore
            processMouseEvent(e: java.awt.event.MouseEvent, path: javax.swing.MenuElement[], manager: javax.swing.MenuSelectionManager): void
            /**
             * Processes a key event forwarded from the
             * <code>MenuSelectionManager</code> and changes the menu selection,
             * if necessary, by using <code>MenuSelectionManager</code>'s API.
             * <p>
             * Note: you do not have to forward the event to sub-components.
             * This is done automatically by the <code>MenuSelectionManager</code>.
             * @param e  a <code>KeyEvent</code>
             * @param path the <code>MenuElement</code> path array
             * @param manager   the <code>MenuSelectionManager</code>
             */
            // @ts-ignore
            processKeyEvent(e: java.awt.event.KeyEvent, path: javax.swing.MenuElement[], manager: javax.swing.MenuSelectionManager): void
            /**
             * Handles mouse drag in a menu.
             * @param e  a <code>MenuDragMouseEvent</code> object
             */
            // @ts-ignore
            processMenuDragMouseEvent(e: javax.swing.event.MenuDragMouseEvent): void
            /**
             * Handles a keystroke in a menu.
             * @param e  a <code>MenuKeyEvent</code> object
             */
            // @ts-ignore
            processMenuKeyEvent(e: javax.swing.event.MenuKeyEvent): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.
             * @param event a <code>MenuMouseDragEvent</code>
             * @see EventListenerList
             */
            // @ts-ignore
            fireMenuDragMouseEntered(event: javax.swing.event.MenuDragMouseEvent): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.
             * @param event a <code>MenuDragMouseEvent</code>
             * @see EventListenerList
             */
            // @ts-ignore
            fireMenuDragMouseExited(event: javax.swing.event.MenuDragMouseEvent): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.
             * @param event a <code>MenuDragMouseEvent</code>
             * @see EventListenerList
             */
            // @ts-ignore
            fireMenuDragMouseDragged(event: javax.swing.event.MenuDragMouseEvent): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.
             * @param event a <code>MenuDragMouseEvent</code>
             * @see EventListenerList
             */
            // @ts-ignore
            fireMenuDragMouseReleased(event: javax.swing.event.MenuDragMouseEvent): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.
             * @param event a <code>MenuKeyEvent</code>
             * @see EventListenerList
             */
            // @ts-ignore
            fireMenuKeyPressed(event: javax.swing.event.MenuKeyEvent): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.
             * @param event a <code>MenuKeyEvent</code>
             * @see EventListenerList
             */
            // @ts-ignore
            fireMenuKeyReleased(event: javax.swing.event.MenuKeyEvent): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.
             * @param event a <code>MenuKeyEvent</code>
             * @see EventListenerList
             */
            // @ts-ignore
            fireMenuKeyTyped(event: javax.swing.event.MenuKeyEvent): void
            /**
             * Called by the <code>MenuSelectionManager</code> when the
             * <code>MenuElement</code> is selected or unselected.
             * @param isIncluded  true if this menu item is on the part of the menu
             *                     path that changed, false if this menu is part of the
             *                     a menu path that changed, but this particular part of
             *                     that path is still the same
             * @see MenuSelectionManager#setSelectedPath(MenuElement[])
             */
            // @ts-ignore
            menuSelectionChanged(isIncluded: boolean): void
            /**
             * This method returns an array containing the sub-menu
             * components for this menu component.
             * @return an array of <code>MenuElement</code>s
             */
            // @ts-ignore
            getSubElements(): javax.swing.MenuElement[]
            /**
             * Returns the <code>java.awt.Component</code> used to paint
             * this object. The returned component will be used to convert
             * events and detect if an event is inside a menu component.
             * @return the <code>Component</code> that paints this menu item
             */
            // @ts-ignore
            getComponent(): java.awt.Component
            /**
             * Adds a <code>MenuDragMouseListener</code> to the menu item.
             * @param l the <code>MenuDragMouseListener</code> to be added
             */
            // @ts-ignore
            addMenuDragMouseListener(l: javax.swing.event.MenuDragMouseListener): void
            /**
             * Removes a <code>MenuDragMouseListener</code> from the menu item.
             * @param l the <code>MenuDragMouseListener</code> to be removed
             */
            // @ts-ignore
            removeMenuDragMouseListener(l: javax.swing.event.MenuDragMouseListener): void
            /**
             * Returns an array of all the <code>MenuDragMouseListener</code>s added
             * to this JMenuItem with addMenuDragMouseListener().
             * @return all of the <code>MenuDragMouseListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getMenuDragMouseListeners(): javax.swing.event.MenuDragMouseListener[]
            /**
             * Adds a <code>MenuKeyListener</code> to the menu item.
             * @param l the <code>MenuKeyListener</code> to be added
             */
            // @ts-ignore
            addMenuKeyListener(l: javax.swing.event.MenuKeyListener): void
            /**
             * Removes a <code>MenuKeyListener</code> from the menu item.
             * @param l the <code>MenuKeyListener</code> to be removed
             */
            // @ts-ignore
            removeMenuKeyListener(l: javax.swing.event.MenuKeyListener): void
            /**
             * Returns an array of all the <code>MenuKeyListener</code>s added
             * to this JMenuItem with addMenuKeyListener().
             * @return all of the <code>MenuKeyListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getMenuKeyListeners(): javax.swing.event.MenuKeyListener[]
            /**
             * Returns a string representation of this <code>JMenuItem</code>.
             * This method is intended to be used only for debugging purposes,
             * and the content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JMenuItem</code>
             */
            // @ts-ignore
            paramString(): java.lang.String
            /**
             * Returns the <code>AccessibleContext</code> associated with this
             * <code>JMenuItem</code>. For <code>JMenuItem</code>s,
             * the <code>AccessibleContext</code> takes the form of an
             * <code>AccessibleJMenuItem</code>.
             * A new AccessibleJMenuItme instance is created if necessary.
             * @return an <code>AccessibleJMenuItem</code> that serves as the
             *          <code>AccessibleContext</code> of this <code>JMenuItem</code>
             */
            // @ts-ignore
            getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
