declare namespace java {
    namespace awt {
        namespace List {
            /**
             * This class implements accessibility support for the
             * <code>List</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to list user-interface elements.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleAWTList extends java.awt.Component.AccessibleAWTComponent implements javax.accessibility.AccessibleSelection, java.awt.event.ItemListener, java.awt.event.ActionListener {
                // @ts-ignore
                constructor()
                // @ts-ignore
                actionPerformed(event: java.awt.event.ActionEvent): void
                // @ts-ignore
                itemStateChanged(event: java.awt.event.ItemEvent): void
                /**
                 * Get the state set of this object.
                 * @return an instance of AccessibleState containing the current state
                 *  of the object
                 * @see AccessibleState
                 */
                // @ts-ignore
                getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Returns the Accessible child contained at the local coordinate
                 * Point, if one exists.
                 * @return the Accessible at the specified location, if it exists
                 */
                // @ts-ignore
                getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible
                /**
                 * Returns the number of accessible children in the object.  If all
                 * of the children of this object implement Accessible, than this
                 * method should return the number of children of this object.
                 * @return the number of accessible children in the object.
                 */
                // @ts-ignore
                getAccessibleChildrenCount(): int
                /**
                 * Return the nth Accessible child of the object.
                 * @param i zero-based index of child
                 * @return the nth Accessible child of the object
                 */
                // @ts-ignore
                getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
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
                 * Returns the number of items currently selected.
                 * If no items are selected, the return value will be 0.
                 * @return the number of items currently selected.
                 */
                // @ts-ignore
                getAccessibleSelectionCount(): int
                /**
                 * Returns an Accessible representing the specified selected item
                 * in the object.  If there isn't a selection, or there are
                 * fewer items selected than the integer passed in, the return
                 * value will be null.
                 * @param i the zero-based index of selected items
                 * @return an Accessible containing the selected item
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
                 * Adds the specified selected item in the object to the object's
                 * selection.  If the object supports multiple selections,
                 * the specified item is added to any existing selection, otherwise
                 * it replaces any existing selection in the object.  If the
                 * specified item is already selected, this method has no effect.
                 * @param i the zero-based index of selectable items
                 */
                // @ts-ignore
                addAccessibleSelection(i: number /*int*/): void
                /**
                 * Removes the specified selected item in the object from the object's
                 * selection.  If the specified item isn't currently selected, this
                 * method has no effect.
                 * @param i the zero-based index of selectable items
                 */
                // @ts-ignore
                removeAccessibleSelection(i: number /*int*/): void
                /**
                 * Clears the selection in the object, so that nothing in the
                 * object is selected.
                 */
                // @ts-ignore
                clearAccessibleSelection(): void
                /**
                 * Causes every selected item in the object to be selected
                 * if the object supports multiple selections.
                 */
                // @ts-ignore
                selectAllAccessibleSelection(): void
            }
        }
    }
}
