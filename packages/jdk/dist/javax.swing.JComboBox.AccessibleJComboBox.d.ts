declare namespace javax {
    namespace swing {
        namespace JComboBox {
            /**
             * This class implements accessibility support for the
             * <code>JComboBox</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to Combo Box user-interface elements.
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
            class AccessibleJComboBox extends javax.swing.JComponent.AccessibleJComponent implements javax.accessibility.AccessibleAction, javax.accessibility.AccessibleSelection {
                /**
                 * Returns an AccessibleJComboBox instance
                 * @since 1.4
                 */
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
                 * The child at index zero represents the popup.
                 * If the combo box is editable, the child at index one
                 * represents the editor.
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
                 * Gets the state set of this object.  The AccessibleStateSet of
                 * an object is composed of a set of unique AccessibleStates.
                 * A change in the AccessibleStateSet of an object will cause a
                 * PropertyChangeEvent to be fired for the ACCESSIBLE_STATE_PROPERTY
                 * property.
                 * @return an instance of AccessibleStateSet containing the
                 *  current state set of the object
                 * @see AccessibleStateSet
                 * @see AccessibleState
                 * @see #addPropertyChangeListener
                 */
                // @ts-ignore
                public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                /**
                 * Get the AccessibleAction associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleAction interface on behalf of itself.
                 * @return this object
                 */
                // @ts-ignore
                public getAccessibleAction(): javax.accessibility.AccessibleAction
                /**
                 * Return a description of the specified action of the object.
                 * @param i zero-based index of the actions
                 */
                // @ts-ignore
                public getAccessibleActionDescription(i: number /*int*/): string
                /**
                 * Returns the number of Actions available in this object.  The
                 * default behavior of a combo box is to have one action.
                 * @return 1, the number of Actions in this object
                 */
                // @ts-ignore
                public getAccessibleActionCount(): number /*int*/
                /**
                 * Perform the specified Action on the object
                 * @param i zero-based index of actions
                 * @return true if the the action was performed; else false.
                 */
                // @ts-ignore
                public doAccessibleAction(i: number /*int*/): boolean
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
                 * Returns the number of Accessible children currently selected.
                 * If no children are selected, the return value will be 0.
                 * @return the number of items currently selected.
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleSelectionCount(): number /*int*/
                /**
                 * Returns an Accessible representing the specified selected child
                 * in the popup.  If there isn't a selection, or there are
                 * fewer children selected than the integer passed in, the return
                 * value will be null.
                 * <p>Note that the index represents the i-th selected child, which
                 * is different from the i-th child.
                 * @param i the zero-based index of selected children
                 * @return the i-th selected child
                 * @see #getAccessibleSelectionCount
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleSelection(i: number /*int*/): javax.accessibility.Accessible
                /**
                 * Determines if the current child of this object is selected.
                 * @return true if the current child of this object is selected;
                 *               else false
                 * @param i the zero-based index of the child in this Accessible
                 *  object.
                 * @see AccessibleContext#getAccessibleChild
                 * @since 1.3
                 */
                // @ts-ignore
                public isAccessibleChildSelected(i: number /*int*/): boolean
                /**
                 * Adds the specified Accessible child of the object to the object's
                 * selection.  If the object supports multiple selections,
                 * the specified child is added to any existing selection, otherwise
                 * it replaces any existing selection in the object.  If the
                 * specified child is already selected, this method has no effect.
                 * @param i the zero-based index of the child
                 * @see AccessibleContext#getAccessibleChild
                 * @since 1.3
                 */
                // @ts-ignore
                public addAccessibleSelection(i: number /*int*/): void
                /**
                 * Removes the specified child of the object from the object's
                 * selection.  If the specified item isn't currently selected, this
                 * method has no effect.
                 * @param i the zero-based index of the child
                 * @see AccessibleContext#getAccessibleChild
                 * @since 1.3
                 */
                // @ts-ignore
                public removeAccessibleSelection(i: number /*int*/): void
                /**
                 * Clears the selection in the object, so that no children in the
                 * object are selected.
                 * @since 1.3
                 */
                // @ts-ignore
                public clearAccessibleSelection(): void
                /**
                 * Causes every child of the object to be selected
                 * if the object supports multiple selections.
                 * @since 1.3
                 */
                // @ts-ignore
                public selectAllAccessibleSelection(): void
            }
        }
    }
}
