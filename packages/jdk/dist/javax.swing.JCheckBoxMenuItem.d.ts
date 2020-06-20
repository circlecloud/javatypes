declare namespace javax {
    namespace swing {
        /**
         * A menu item that can be selected or deselected. If selected, the menu
         * item typically appears with a checkmark next to it. If unselected or
         * deselected, the menu item appears without a checkmark. Like a regular
         * menu item, a check box menu item can have either text or a graphic
         * icon associated with it, or both.
         * <p>
         * Either <code>isSelected</code>/<code>setSelected</code> or
         * <code>getState</code>/<code>setState</code> can be used
         * to determine/specify the menu item's selection state. The
         * preferred methods are <code>isSelected</code> and
         * <code>setSelected</code>, which work for all menus and buttons.
         * The <code>getState</code> and <code>setState</code> methods exist for
         * compatibility with other component sets.
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
         * For further information and examples of using check box menu items,
         * see <a
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
         * @beaninfo attribute: isContainer false
         *  description: A menu item which can be selected or deselected.
         * @author Georges Saab
         * @author David Karlton
         */
        // @ts-ignore
        class JCheckBoxMenuItem extends javax.swing.JMenuItem implements javax.swing.SwingConstants, javax.accessibility.Accessible {
            /**
             * Creates an initially unselected check box menu item with no set text or icon.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates an initially unselected check box menu item with an icon.
             * @param icon the icon of the CheckBoxMenuItem.
             */
            // @ts-ignore
            constructor(icon: javax.swing.Icon)
            /**
             * Creates an initially unselected check box menu item with text.
             * @param text the text of the CheckBoxMenuItem
             */
            // @ts-ignore
            constructor(text: string)
            /**
             * Creates a menu item whose properties are taken from the
             * Action supplied.
             * @since 1.3
             */
            // @ts-ignore
            constructor(a: javax.swing.Action)
            /**
             * Creates an initially unselected check box menu item with the specified text and icon.
             * @param text the text of the CheckBoxMenuItem
             * @param icon the icon of the CheckBoxMenuItem
             */
            // @ts-ignore
            constructor(text: string, icon: javax.swing.Icon)
            /**
             * Creates a check box menu item with the specified text and selection state.
             * @param text the text of the check box menu item.
             * @param b the selected state of the check box menu item
             */
            // @ts-ignore
            constructor(text: string, b: boolean)
            /**
             * Creates a check box menu item with the specified text, icon, and selection state.
             * @param text the text of the check box menu item
             * @param icon the icon of the check box menu item
             * @param b the selected state of the check box menu item
             */
            // @ts-ignore
            constructor(text: string, icon: javax.swing.Icon, b: boolean)
            /**
             * Returns the name of the L&amp;F class
             * that renders this component.
             * @return "CheckBoxMenuItemUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            getUIClassID(): java.lang.String
            /**
             * Returns the selected-state of the item. This method
             * exists for AWT compatibility only.  New code should
             * use isSelected() instead.
             * @return true  if the item is selected
             */
            // @ts-ignore
            getState(): boolean
            /**
             * Sets the selected-state of the item. This method
             * exists for AWT compatibility only.  New code should
             * use setSelected() instead.
             * @param b  a boolean value indicating the item's
             *            selected-state, where true=selected
             * @beaninfo description: The selection state of the check box menu item
             *       hidden: true
             */
            // @ts-ignore
            setState(b: boolean): void
            /**
             * Returns an array (length 1) containing the check box menu item
             * label or null if the check box is not selected.
             * @return an array containing one Object -- the text of the menu item
             *          -- if the item is selected; otherwise null
             */
            // @ts-ignore
            getSelectedObjects(): java.lang.Object[]
            /**
             * Returns a string representation of this JCheckBoxMenuItem. This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this JCheckBoxMenuItem.
             */
            // @ts-ignore
            paramString(): java.lang.String
            /**
             * Gets the AccessibleContext associated with this JCheckBoxMenuItem.
             * For JCheckBoxMenuItems, the AccessibleContext takes the form of an
             * AccessibleJCheckBoxMenuItem.
             * A new AccessibleJCheckBoxMenuItem instance is created if necessary.
             * @return an AccessibleJCheckBoxMenuItem that serves as the
             *          AccessibleContext of this AccessibleJCheckBoxMenuItem
             */
            // @ts-ignore
            getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
