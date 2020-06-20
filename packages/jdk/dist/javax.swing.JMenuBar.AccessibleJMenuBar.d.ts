declare namespace javax {
    namespace swing {
        namespace JMenuBar {
            /**
             * This class implements accessibility support for the
             * <code>JMenuBar</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to menu bar user-interface
             * elements.
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
            class AccessibleJMenuBar extends javax.swing.JComponent.AccessibleJComponent implements javax.accessibility.AccessibleSelection {
                // @ts-ignore
                constructor()
                /**
                 * Get the accessible state set of this object.
                 * @return an instance of AccessibleState containing the current state
                 *          of the object
                 */
                // @ts-ignore
                getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Get the AccessibleSelection associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleSelection interface on behalf of itself.
                 * @return this object
                 */
                // @ts-ignore
                getAccessibleSelection(): javax.accessibility.AccessibleSelection
                /**
                 * Returns 1 if a menu is currently selected in this menu bar.
                 * @return 1 if a menu is currently selected, else 0
                 */
                // @ts-ignore
                getAccessibleSelectionCount(): int
                /**
                 * Returns the currently selected menu if one is selected,
                 * otherwise null.
                 */
                // @ts-ignore
                getAccessibleSelection(i: number /*int*/): javax.accessibility.Accessible
                /**
                 * Returns true if the current child of this object is selected.
                 * @param i the zero-based index of the child in this Accessible
                 *  object.
                 * @see AccessibleContext#getAccessibleChild
                 */
                // @ts-ignore
                isAccessibleChildSelected(i: number /*int*/): boolean
                /**
                 * Selects the nth menu in the menu bar, forcing it to
                 * pop up.  If another menu is popped up, this will force
                 * it to close.  If the nth menu is already selected, this
                 * method has no effect.
                 * @param i the zero-based index of selectable items
                 * @see #getAccessibleStateSet
                 */
                // @ts-ignore
                addAccessibleSelection(i: number /*int*/): void
                /**
                 * Removes the nth selected item in the object from the object's
                 * selection.  If the nth item isn't currently selected, this
                 * method has no effect.  Otherwise, it closes the popup menu.
                 * @param i the zero-based index of selectable items
                 */
                // @ts-ignore
                removeAccessibleSelection(i: number /*int*/): void
                /**
                 * Clears the selection in the object, so that nothing in the
                 * object is selected.  This will close any open menu.
                 */
                // @ts-ignore
                clearAccessibleSelection(): void
                /**
                 * Normally causes every selected item in the object to be selected
                 * if the object supports multiple selections.  This method
                 * makes no sense in a menu bar, and so does nothing.
                 */
                // @ts-ignore
                selectAllAccessibleSelection(): void
            }
        }
    }
}
