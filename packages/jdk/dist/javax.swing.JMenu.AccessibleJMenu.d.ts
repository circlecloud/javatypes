declare namespace javax {
    namespace swing {
        namespace JMenu {
            /**
             * This class implements accessibility support for the
             * <code>JMenu</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to menu user-interface elements.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             */
            // @ts-ignore
            class AccessibleJMenu extends javax.swing.JMenuItem.AccessibleJMenuItem implements javax.accessibility.AccessibleSelection {
                // @ts-ignore
                constructor()
                /**
                 * Returns the number of accessible children in the object.  If all
                 * of the children of this object implement Accessible, than this
                 * method should return the number of children of this object.
                 * @return the number of accessible children in the object.
                 */
                // @ts-ignore
                public getAccessibleChildrenCount(): number /*int*/
                /**
                 * Returns the nth Accessible child of the object.
                 * @param i zero-based index of child
                 * @return the nth Accessible child of the object
                 */
                // @ts-ignore
                public getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                public getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Get the AccessibleSelection associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleSelection interface on behalf of itself.
                 * @return this object
                 */
                // @ts-ignore
                public getAccessibleSelection(): javax.accessibility.AccessibleSelection
                /**
                 * Returns 1 if a sub-menu is currently selected in this menu.
                 * @return 1 if a menu is currently selected, else 0
                 */
                // @ts-ignore
                public getAccessibleSelectionCount(): number /*int*/
                /**
                 * Returns the currently selected sub-menu if one is selected,
                 * otherwise null (there can only be one selection, and it can
                 * only be a sub-menu, as otherwise menu items don't remain
                 * selected).
                 */
                // @ts-ignore
                public getAccessibleSelection(i: number /*int*/): javax.accessibility.Accessible
                /**
                 * Returns true if the current child of this object is selected
                 * (that is, if this child is a popped-up submenu).
                 * @param i the zero-based index of the child in this Accessible
                 *  object.
                 * @see AccessibleContext#getAccessibleChild
                 */
                // @ts-ignore
                public isAccessibleChildSelected(i: number /*int*/): boolean
                /**
                 * Selects the <code>i</code>th menu in the menu.
                 * If that item is a submenu,
                 * it will pop up in response.  If a different item is already
                 * popped up, this will force it to close.  If this is a sub-menu
                 * that is already popped up (selected), this method has no
                 * effect.
                 * @param i the index of the item to be selected
                 * @see #getAccessibleStateSet
                 */
                // @ts-ignore
                public addAccessibleSelection(i: number /*int*/): void
                /**
                 * Removes the nth item from the selection.  In general, menus
                 * can only have one item within them selected at a time
                 * (e.g. one sub-menu popped open).
                 * @param i the zero-based index of the selected item
                 */
                // @ts-ignore
                public removeAccessibleSelection(i: number /*int*/): void
                /**
                 * Clears the selection in the object, so that nothing in the
                 * object is selected.  This will close any open sub-menu.
                 */
                // @ts-ignore
                public clearAccessibleSelection(): void
                /**
                 * Normally causes every selected item in the object to be selected
                 * if the object supports multiple selections.  This method
                 * makes no sense in a menu bar, and so does nothing.
                 */
                // @ts-ignore
                public selectAllAccessibleSelection(): void
            }
        }
    }
}
