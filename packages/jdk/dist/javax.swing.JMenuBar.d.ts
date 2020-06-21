declare namespace javax {
    namespace swing {
        /**
         * An implementation of a menu bar. You add <code>JMenu</code> objects to the
         * menu bar to construct a menu. When the user selects a <code>JMenu</code>
         * object, its associated <code>JPopupMenu</code> is displayed, allowing the
         * user to select one of the <code>JMenuItems</code> on it.
         * <p>
         * For information and examples of using menu bars see
         * <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/components/menu.html">How to Use Menus</a>,
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
         * <p>
         * <strong>Warning:</strong>
         * By default, pressing the Tab key does not transfer focus from a <code>
         * JMenuBar</code> which is added to a container together with other Swing
         * components, because the <code>focusTraversalKeysEnabled</code> property
         * of <code>JMenuBar</code> is set to <code>false</code>. To resolve this,
         * you should call the <code>JMenuBar.setFocusTraversalKeysEnabled(true)</code>
         * method.
         * @beaninfo attribute: isContainer true
         *  description: A container for holding and displaying menus.
         * @author Georges Saab
         * @author David Karlton
         * @author Arnaud Weber
         * @see JMenu
         * @see JPopupMenu
         * @see JMenuItem
         */
        // @ts-ignore
        class JMenuBar extends javax.swing.JComponent implements javax.accessibility.Accessible, javax.swing.MenuElement {
            /**
             * Creates a new menu bar.
             */
            // @ts-ignore
            constructor()
            /**
             * Returns the menubar's current UI.
             * @see #setUI
             */
            // @ts-ignore
            public getUI(): javax.swing.plaf.MenuBarUI
            /**
             * Sets the L&amp;F object that renders this component.
             * @param ui the new MenuBarUI L&amp;F object
             * @see UIDefaults#getUI
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the Component's LookAndFeel.
             */
            // @ts-ignore
            public setUI(ui: javax.swing.plaf.MenuBarUI): void
            /**
             * Resets the UI property with a value from the current look and feel.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            public updateUI(): void
            /**
             * Returns the name of the L&amp;F class that renders this component.
             * @return the string "MenuBarUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            public getUIClassID(): string
            /**
             * Returns the model object that handles single selections.
             * @return the <code>SingleSelectionModel</code> property
             * @see SingleSelectionModel
             */
            // @ts-ignore
            public getSelectionModel(): javax.swing.SingleSelectionModel
            /**
             * Sets the model object to handle single selections.
             * @param model the <code>SingleSelectionModel</code> to use
             * @see SingleSelectionModel
             * @beaninfo bound: true
             *  description: The selection model, recording which child is selected.
             */
            // @ts-ignore
            public setSelectionModel(model: javax.swing.SingleSelectionModel): void
            /**
             * Appends the specified menu to the end of the menu bar.
             * @param c the <code>JMenu</code> component to add
             * @return the menu component
             */
            // @ts-ignore
            public add(c: javax.swing.JMenu): javax.swing.JMenu
            /**
             * Returns the menu at the specified position in the menu bar.
             * @param index  an integer giving the position in the menu bar, where
             *                0 is the first position
             * @return the <code>JMenu</code> at that position, or <code>null</code> if
             *           if there is no <code>JMenu</code> at that position (ie. if
             *           it is a <code>JMenuItem</code>)
             */
            // @ts-ignore
            public getMenu(index: number /*int*/): javax.swing.JMenu
            /**
             * Returns the number of items in the menu bar.
             * @return the number of items in the menu bar
             */
            // @ts-ignore
            public getMenuCount(): number /*int*/
            /**
             * Sets the help menu that appears when the user selects the
             * "help" option in the menu bar. This method is not yet implemented
             * and will throw an exception.
             * @param menu the JMenu that delivers help to the user
             */
            // @ts-ignore
            public setHelpMenu(menu: javax.swing.JMenu): void
            /**
             * Gets the help menu for the menu bar.  This method is not yet
             * implemented and will throw an exception.
             * @return the <code>JMenu</code> that delivers help to the user
             */
            // @ts-ignore
            public getHelpMenu(): javax.swing.JMenu
            /**
             * Returns the component at the specified index.
             * @param i an integer specifying the position, where 0 is first
             * @return the <code>Component</code> at the position,
             *           or <code>null</code> for an invalid index
             * @deprecated replaced by <code>getComponent(int i)</code>
             */
            // @ts-ignore
            public getComponentAtIndex(i: number /*int*/): java.awt.Component
            /**
             * Returns the index of the specified component.
             * @param c  the <code>Component</code> to find
             * @return an integer giving the component's position, where 0 is first;
             *           or -1 if it can't be found
             */
            // @ts-ignore
            public getComponentIndex(c: java.awt.Component): number /*int*/
            /**
             * Sets the currently selected component, producing a
             * a change to the selection model.
             * @param sel the <code>Component</code> to select
             */
            // @ts-ignore
            public setSelected(sel: java.awt.Component): void
            /**
             * Returns true if the menu bar currently has a component selected.
             * @return true if a selection has been made, else false
             */
            // @ts-ignore
            public isSelected(): boolean
            /**
             * Returns true if the menu bars border should be painted.
             * @return true if the border should be painted, else false
             */
            // @ts-ignore
            public isBorderPainted(): boolean
            /**
             * Sets whether the border should be painted.
             * @param b if true and border property is not <code>null</code>,
             *           the border is painted.
             * @see #isBorderPainted
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: Whether the border should be painted.
             */
            // @ts-ignore
            public setBorderPainted(b: boolean): void
            /**
             * Paints the menubar's border if <code>BorderPainted</code>
             * property is true.
             * @param g the <code>Graphics</code> context to use for painting
             * @see JComponent#paint
             * @see JComponent#setBorder
             */
            // @ts-ignore
            paintBorder(g: java.awt.Graphics): void
            /**
             * Sets the margin between the menubar's border and
             * its menus. Setting to <code>null</code> will cause the menubar to
             * use the default margins.
             * @param m an Insets object containing the margin values
             * @see Insets
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: The space between the menubar's border and its contents
             */
            // @ts-ignore
            public setMargin(m: java.awt.Insets): void
            /**
             * Returns the margin between the menubar's border and
             * its menus.  If there is no previous margin, it will create
             * a default margin with zero size.
             * @return an <code>Insets</code> object containing the margin values
             * @see Insets
             */
            // @ts-ignore
            public getMargin(): java.awt.Insets
            /**
             * Implemented to be a <code>MenuElement</code> -- does nothing.
             * @see #getSubElements
             */
            // @ts-ignore
            public processMouseEvent(event: java.awt.event.MouseEvent, path: javax.swing.MenuElement[], manager: javax.swing.MenuSelectionManager): void
            /**
             * Implemented to be a <code>MenuElement</code> -- does nothing.
             * @see #getSubElements
             */
            // @ts-ignore
            public processKeyEvent(e: java.awt.event.KeyEvent, path: javax.swing.MenuElement[], manager: javax.swing.MenuSelectionManager): void
            /**
             * Implemented to be a <code>MenuElement</code> -- does nothing.
             * @see #getSubElements
             */
            // @ts-ignore
            public menuSelectionChanged(isIncluded: boolean): void
            /**
             * Implemented to be a <code>MenuElement</code> -- returns the
             * menus in this menu bar.
             * This is the reason for implementing the <code>MenuElement</code>
             * interface -- so that the menu bar can be treated the same as
             * other menu elements.
             * @return an array of menu items in the menu bar.
             */
            // @ts-ignore
            public getSubElements(): javax.swing.MenuElement[]
            /**
             * Implemented to be a <code>MenuElement</code>. Returns this object.
             * @return the current <code>Component</code> (this)
             * @see #getSubElements
             */
            // @ts-ignore
            public getComponent(): java.awt.Component
            /**
             * Returns a string representation of this <code>JMenuBar</code>.
             * This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JMenuBar</code>
             */
            // @ts-ignore
            paramString(): string
            /**
             * Gets the AccessibleContext associated with this JMenuBar.
             * For JMenuBars, the AccessibleContext takes the form of an
             * AccessibleJMenuBar.
             * A new AccessibleJMenuBar instance is created if necessary.
             * @return an AccessibleJMenuBar that serves as the
             *          AccessibleContext of this JMenuBar
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            /**
             * Subclassed to check all the child menus.
             * @since 1.3
             */
            // @ts-ignore
            processKeyBinding(ks: javax.swing.KeyStroke, e: java.awt.event.KeyEvent, condition: number /*int*/, pressed: boolean): boolean
            /**
             * Overrides <code>JComponent.addNotify</code> to register this
             * menu bar with the current keyboard manager.
             */
            // @ts-ignore
            public addNotify(): void
            /**
             * Overrides <code>JComponent.removeNotify</code> to unregister this
             * menu bar with the current keyboard manager.
             */
            // @ts-ignore
            public removeNotify(): void
        }
    }
}
