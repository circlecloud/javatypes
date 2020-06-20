declare namespace javax {
    namespace swing {
        /**
         * An implementation of a popup menu -- a small window that pops up
         * and displays a series of choices. A <code>JPopupMenu</code> is used for the
         * menu that appears when the user selects an item on the menu bar.
         * It is also used for "pull-right" menu that appears when the
         * selects a menu item that activates it. Finally, a <code>JPopupMenu</code>
         * can also be used anywhere else you want a menu to appear.  For
         * example, when the user right-clicks in a specified area.
         * <p>
         * For information and examples of using popup menus, see
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
         *  description: A small window that pops up and displays a series of choices.
         * @author Georges Saab
         * @author David Karlton
         * @author Arnaud Weber
         */
        // @ts-ignore
        class JPopupMenu extends javax.swing.JComponent implements javax.accessibility.Accessible, javax.swing.MenuElement {
            /**
             * Constructs a <code>JPopupMenu</code> without an "invoker".
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>JPopupMenu</code> with the specified title.
             * @param label  the string that a UI may use to display as a title
             *  for the popup menu.
             */
            // @ts-ignore
            constructor(label: string)
            /**
             * Sets the default value of the <code>lightWeightPopupEnabled</code>
             * property.
             * @param aFlag <code>true</code> if popups can be lightweight,
             *                otherwise <code>false</code>
             * @see #getDefaultLightWeightPopupEnabled
             * @see #setLightWeightPopupEnabled
             */
            // @ts-ignore
            setDefaultLightWeightPopupEnabled(aFlag: boolean): void
            /**
             * Gets the <code>defaultLightWeightPopupEnabled</code> property,
             * which by default is <code>true</code>.
             * @return the value of the <code>defaultLightWeightPopupEnabled</code>
             *           property
             * @see #setDefaultLightWeightPopupEnabled
             */
            // @ts-ignore
            getDefaultLightWeightPopupEnabled(): boolean
            /**
             * Returns the look and feel (L&amp;F) object that renders this component.
             * @return the <code>PopupMenuUI</code> object that renders this component
             */
            // @ts-ignore
            getUI(): javax.swing.plaf.PopupMenuUI
            /**
             * Sets the L&amp;F object that renders this component.
             * @param ui the new <code>PopupMenuUI</code> L&amp;F object
             * @see UIDefaults#getUI
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the Component's LookAndFeel.
             */
            // @ts-ignore
            setUI(ui: javax.swing.plaf.PopupMenuUI): void
            /**
             * Resets the UI property to a value from the current look and feel.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            updateUI(): void
            /**
             * Returns the name of the L&amp;F class that renders this component.
             * @return the string "PopupMenuUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            getUIClassID(): java.lang.String
            // @ts-ignore
            processFocusEvent(evt: java.awt.event.FocusEvent): void
            /**
             * Processes key stroke events such as mnemonics and accelerators.
             * @param evt  the key event to be processed
             */
            // @ts-ignore
            processKeyEvent(evt: java.awt.event.KeyEvent): void
            /**
             * Returns the model object that handles single selections.
             * @return the <code>selectionModel</code> property
             * @see SingleSelectionModel
             */
            // @ts-ignore
            getSelectionModel(): javax.swing.SingleSelectionModel
            /**
             * Sets the model object to handle single selections.
             * @param model the new <code>SingleSelectionModel</code>
             * @see SingleSelectionModel
             * @beaninfo description: The selection model for the popup menu
             *       expert: true
             */
            // @ts-ignore
            setSelectionModel(model: javax.swing.SingleSelectionModel): void
            /**
             * Appends the specified menu item to the end of this menu.
             * @param menuItem the <code>JMenuItem</code> to add
             * @return the <code>JMenuItem</code> added
             */
            // @ts-ignore
            add(menuItem: javax.swing.JMenuItem): javax.swing.JMenuItem
            /**
             * Creates a new menu item with the specified text and appends
             * it to the end of this menu.
             * @param s the string for the menu item to be added
             */
            // @ts-ignore
            add(s: string): javax.swing.JMenuItem
            /**
             * Appends a new menu item to the end of the menu which
             * dispatches the specified <code>Action</code> object.
             * @param a the <code>Action</code> to add to the menu
             * @return the new menu item
             * @see Action
             */
            // @ts-ignore
            add(a: javax.swing.Action): javax.swing.JMenuItem
            /**
             * Factory method which creates the <code>JMenuItem</code> for
             * <code>Actions</code> added to the <code>JPopupMenu</code>.
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
             * Removes the component at the specified index from this popup menu.
             * @param pos the position of the item to be removed
             * @exception IllegalArgumentException if the value of
             *                           <code>pos</code> &lt; 0, or if the value of
             *                           <code>pos</code> is greater than the
             *                           number of items
             */
            // @ts-ignore
            remove(pos: number /*int*/): void
            /**
             * Sets the value of the <code>lightWeightPopupEnabled</code> property,
             * which by default is <code>true</code>.
             * By default, when a look and feel displays a popup,
             * it can choose to
             * use a lightweight (all-Java) popup.
             * Lightweight popup windows are more efficient than heavyweight
             * (native peer) windows,
             * but lightweight and heavyweight components do not mix well in a GUI.
             * If your application mixes lightweight and heavyweight components,
             * you should disable lightweight popups.
             * Some look and feels might always use heavyweight popups,
             * no matter what the value of this property.
             * @param aFlag  <code>false</code> to disable lightweight popups
             * @beaninfo description: Determines whether lightweight popups are used when possible
             *       expert: true
             * @see #isLightWeightPopupEnabled
             */
            // @ts-ignore
            setLightWeightPopupEnabled(aFlag: boolean): void
            /**
             * Gets the <code>lightWeightPopupEnabled</code> property.
             * @return the value of the <code>lightWeightPopupEnabled</code> property
             * @see #setLightWeightPopupEnabled
             */
            // @ts-ignore
            isLightWeightPopupEnabled(): boolean
            /**
             * Returns the popup menu's label
             * @return a string containing the popup menu's label
             * @see #setLabel
             */
            // @ts-ignore
            getLabel(): java.lang.String
            /**
             * Sets the popup menu's label.  Different look and feels may choose
             * to display or not display this.
             * @param label a string specifying the label for the popup menu
             * @see #setLabel
             * @beaninfo description: The label for the popup menu.
             *        bound: true
             */
            // @ts-ignore
            setLabel(label: string): void
            /**
             * Appends a new separator at the end of the menu.
             */
            // @ts-ignore
            addSeparator(): void
            /**
             * Inserts a menu item for the specified <code>Action</code> object at
             * a given position.
             * @param a  the <code>Action</code> object to insert
             * @param index      specifies the position at which to insert the
             *                    <code>Action</code>, where 0 is the first
             * @exception IllegalArgumentException if <code>index</code> &lt; 0
             * @see Action
             */
            // @ts-ignore
            insert(a: javax.swing.Action, index: number /*int*/): void
            /**
             * Inserts the specified component into the menu at a given
             * position.
             * @param component  the <code>Component</code> to insert
             * @param index      specifies the position at which
             *                    to insert the component, where 0 is the first
             * @exception IllegalArgumentException if <code>index</code> &lt; 0
             */
            // @ts-ignore
            insert(component: java.awt.Component, index: number /*int*/): void
            /**
             * Adds a <code>PopupMenu</code> listener.
             * @param l  the <code>PopupMenuListener</code> to add
             */
            // @ts-ignore
            addPopupMenuListener(l: javax.swing.event.PopupMenuListener): void
            /**
             * Removes a <code>PopupMenu</code> listener.
             * @param l  the <code>PopupMenuListener</code> to remove
             */
            // @ts-ignore
            removePopupMenuListener(l: javax.swing.event.PopupMenuListener): void
            /**
             * Returns an array of all the <code>PopupMenuListener</code>s added
             * to this JMenuItem with addPopupMenuListener().
             * @return all of the <code>PopupMenuListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getPopupMenuListeners(): javax.swing.event.PopupMenuListener[]
            /**
             * Adds a <code>MenuKeyListener</code> to the popup menu.
             * @param l the <code>MenuKeyListener</code> to be added
             * @since 1.5
             */
            // @ts-ignore
            addMenuKeyListener(l: javax.swing.event.MenuKeyListener): void
            /**
             * Removes a <code>MenuKeyListener</code> from the popup menu.
             * @param l the <code>MenuKeyListener</code> to be removed
             * @since 1.5
             */
            // @ts-ignore
            removeMenuKeyListener(l: javax.swing.event.MenuKeyListener): void
            /**
             * Returns an array of all the <code>MenuKeyListener</code>s added
             * to this JPopupMenu with addMenuKeyListener().
             * @return all of the <code>MenuKeyListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.5
             */
            // @ts-ignore
            getMenuKeyListeners(): javax.swing.event.MenuKeyListener[]
            /**
             * Notifies <code>PopupMenuListener</code>s that this popup menu will
             * become visible.
             */
            // @ts-ignore
            firePopupMenuWillBecomeVisible(): void
            /**
             * Notifies <code>PopupMenuListener</code>s that this popup menu will
             * become invisible.
             */
            // @ts-ignore
            firePopupMenuWillBecomeInvisible(): void
            /**
             * Notifies <code>PopupMenuListeners</code> that this popup menu is
             * cancelled.
             */
            // @ts-ignore
            firePopupMenuCanceled(): void
            /**
             * Lays out the container so that it uses the minimum space
             * needed to display its contents.
             */
            // @ts-ignore
            pack(): void
            /**
             * Sets the visibility of the popup menu.
             * @param b true to make the popup visible, or false to
             *           hide it
             * @beaninfo bound: true
             *      description: Makes the popup visible
             */
            // @ts-ignore
            setVisible(b: boolean): void
            /**
             * Returns true if the popup menu is visible (currently
             * being displayed).
             */
            // @ts-ignore
            isVisible(): boolean
            /**
             * Sets the location of the upper left corner of the
             * popup menu using x, y coordinates.
             * <p>
             * The method changes the geometry-related data. Therefore,
             * the native windowing system may ignore such requests, or it may modify
             * the requested data, so that the {@code JPopupMenu} object is placed and sized
             * in a way that corresponds closely to the desktop settings.
             * @param x the x coordinate of the popup's new position
             *           in the screen's coordinate space
             * @param y the y coordinate of the popup's new position
             *           in the screen's coordinate space
             * @beaninfo description: The location of the popup menu.
             */
            // @ts-ignore
            setLocation(x: number /*int*/, y: number /*int*/): void
            /**
             * Returns the component which is the 'invoker' of this
             * popup menu.
             * @return the <code>Component</code> in which the popup menu is displayed
             */
            // @ts-ignore
            getInvoker(): java.awt.Component
            /**
             * Sets the invoker of this popup menu -- the component in which
             * the popup menu menu is to be displayed.
             * @param invoker the <code>Component</code> in which the popup
             *           menu is displayed
             * @beaninfo description: The invoking component for the popup menu
             *       expert: true
             */
            // @ts-ignore
            setInvoker(invoker: java.awt.Component): void
            /**
             * Displays the popup menu at the position x,y in the coordinate
             * space of the component invoker.
             * @param invoker the component in whose space the popup menu is to appear
             * @param x the x coordinate in invoker's coordinate space at which
             *  the popup menu is to be displayed
             * @param y the y coordinate in invoker's coordinate space at which
             *  the popup menu is to be displayed
             */
            // @ts-ignore
            show(invoker: java.awt.Component, x: number /*int*/, y: number /*int*/): void
            /**
             * Returns the component at the specified index.
             * @param i  the index of the component, where 0 is the first
             * @return the <code>Component</code> at that index
             * @deprecated replaced by {#link java.awt.Container#getComponent(int)}
             */
            // @ts-ignore
            getComponentAtIndex(i: number /*int*/): java.awt.Component
            /**
             * Returns the index of the specified component.
             * @param c the <code>Component</code> to find
             * @return the index of the component, where 0 is the first;
             *          or -1 if the component is not found
             */
            // @ts-ignore
            getComponentIndex(c: java.awt.Component): int
            /**
             * Sets the size of the Popup window using a <code>Dimension</code> object.
             * This is equivalent to <code>setPreferredSize(d)</code>.
             * @param d   the <code>Dimension</code> specifying the new size
             *  of this component.
             * @beaninfo description: The size of the popup menu
             */
            // @ts-ignore
            setPopupSize(d: java.awt.Dimension): void
            /**
             * Sets the size of the Popup window to the specified width and
             * height. This is equivalent to
             * <code>setPreferredSize(new Dimension(width, height))</code>.
             * @param width the new width of the Popup in pixels
             * @param height the new height of the Popup in pixels
             * @beaninfo description: The size of the popup menu
             */
            // @ts-ignore
            setPopupSize(width: number /*int*/, height: number /*int*/): void
            /**
             * Sets the currently selected component,  This will result
             * in a change to the selection model.
             * @param sel the <code>Component</code> to select
             * @beaninfo description: The selected component on the popup menu
             *       expert: true
             *       hidden: true
             */
            // @ts-ignore
            setSelected(sel: java.awt.Component): void
            /**
             * Checks whether the border should be painted.
             * @return true if the border is painted, false otherwise
             * @see #setBorderPainted
             */
            // @ts-ignore
            isBorderPainted(): boolean
            /**
             * Sets whether the border should be painted.
             * @param b if true, the border is painted.
             * @see #isBorderPainted
             * @beaninfo description: Is the border of the popup menu painted
             */
            // @ts-ignore
            setBorderPainted(b: boolean): void
            /**
             * Paints the popup menu's border if the <code>borderPainted</code>
             * property is <code>true</code>.
             * @param g  the <code>Graphics</code> object
             * @see JComponent#paint
             * @see JComponent#setBorder
             */
            // @ts-ignore
            paintBorder(g: java.awt.Graphics): void
            /**
             * Returns the margin, in pixels, between the popup menu's border and
             * its containers.
             * @return an <code>Insets</code> object containing the margin values.
             */
            // @ts-ignore
            getMargin(): java.awt.Insets
            /**
             * Returns a string representation of this <code>JPopupMenu</code>.
             * This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JPopupMenu</code>.
             */
            // @ts-ignore
            paramString(): java.lang.String
            /**
             * Gets the AccessibleContext associated with this JPopupMenu.
             * For JPopupMenus, the AccessibleContext takes the form of an
             * AccessibleJPopupMenu.
             * A new AccessibleJPopupMenu instance is created if necessary.
             * @return an AccessibleJPopupMenu that serves as the
             *          AccessibleContext of this JPopupMenu
             */
            // @ts-ignore
            getAccessibleContext(): javax.accessibility.AccessibleContext
            /**
             * This method is required to conform to the
             * <code>MenuElement</code> interface, but it not implemented.
             * @see MenuElement#processMouseEvent(MouseEvent, MenuElement[], MenuSelectionManager)
             */
            // @ts-ignore
            processMouseEvent(event: java.awt.event.MouseEvent, path: javax.swing.MenuElement[], manager: javax.swing.MenuSelectionManager): void
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
             * Messaged when the menubar selection changes to activate or
             * deactivate this menu. This implements the
             * <code>javax.swing.MenuElement</code> interface.
             * Overrides <code>MenuElement.menuSelectionChanged</code>.
             * @param isIncluded  true if this menu is active, false if
             *         it is not
             * @see MenuElement#menuSelectionChanged(boolean)
             */
            // @ts-ignore
            menuSelectionChanged(isIncluded: boolean): void
            /**
             * Returns an array of <code>MenuElement</code>s containing the submenu
             * for this menu component.  It will only return items conforming to
             * the <code>JMenuElement</code> interface.
             * If popup menu is <code>null</code> returns
             * an empty array.  This method is required to conform to the
             * <code>MenuElement</code> interface.
             * @return an array of <code>MenuElement</code> objects
             * @see MenuElement#getSubElements
             */
            // @ts-ignore
            getSubElements(): javax.swing.MenuElement[]
            /**
             * Returns this <code>JPopupMenu</code> component.
             * @return this <code>JPopupMenu</code> object
             * @see MenuElement#getComponent
             */
            // @ts-ignore
            getComponent(): java.awt.Component
            /**
             * Returns true if the <code>MouseEvent</code> is considered a popup trigger
             * by the <code>JPopupMenu</code>'s currently installed UI.
             * @return true if the mouse event is a popup trigger
             * @since 1.3
             */
            // @ts-ignore
            isPopupTrigger(e: java.awt.event.MouseEvent): boolean
        }
    }
}
