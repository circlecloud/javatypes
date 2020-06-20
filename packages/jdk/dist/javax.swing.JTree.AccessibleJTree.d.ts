declare namespace javax {
    namespace swing {
        namespace JTree {
            /**
             * This class implements accessibility support for the
             * <code>JTree</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to tree user-interface elements.
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
            class AccessibleJTree extends javax.swing.JComponent.AccessibleJComponent implements javax.accessibility.AccessibleSelection, javax.swing.event.TreeSelectionListener, javax.swing.event.TreeModelListener, javax.swing.event.TreeExpansionListener {
                // @ts-ignore
                constructor()
                /**
                 * Tree Selection Listener value change method. Used to fire the
                 * property change
                 * @param e ListSelectionEvent
                 */
                // @ts-ignore
                valueChanged(e: javax.swing.event.TreeSelectionEvent): void
                /**
                 * Fire a visible data property change notification.
                 * A 'visible' data property is one that represents
                 * something about the way the component appears on the
                 * display, where that appearance isn't bound to any other
                 * property. It notifies screen readers  that the visual
                 * appearance of the component has changed, so they can
                 * notify the user.
                 */
                // @ts-ignore
                fireVisibleDataPropertyChange(): void
                /**
                 * Tree Model Node change notification.
                 * @param e  a Tree Model event
                 */
                // @ts-ignore
                treeNodesChanged(e: javax.swing.event.TreeModelEvent): void
                /**
                 * Tree Model Node change notification.
                 * @param e  a Tree node insertion event
                 */
                // @ts-ignore
                treeNodesInserted(e: javax.swing.event.TreeModelEvent): void
                /**
                 * Tree Model Node change notification.
                 * @param e  a Tree node(s) removal event
                 */
                // @ts-ignore
                treeNodesRemoved(e: javax.swing.event.TreeModelEvent): void
                /**
                 * Tree Model structure change change notification.
                 * @param e  a Tree Model event
                 */
                // @ts-ignore
                treeStructureChanged(e: javax.swing.event.TreeModelEvent): void
                /**
                 * Tree Collapsed notification.
                 * @param e  a TreeExpansionEvent
                 */
                // @ts-ignore
                treeCollapsed(e: javax.swing.event.TreeExpansionEvent): void
                /**
                 * Tree Model Expansion notification.
                 * @param e  a Tree node insertion event
                 */
                // @ts-ignore
                treeExpanded(e: javax.swing.event.TreeExpansionEvent): void
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Returns the <code>Accessible</code> child, if one exists,
                 * contained at the local coordinate <code>Point</code>.
                 * Otherwise returns <code>null</code>.
                 * @param p point in local coordinates of this <code>Accessible</code>
                 * @return the <code>Accessible</code>, if it exists,
                 *     at the specified location; else <code>null</code>
                 */
                // @ts-ignore
                getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible
                /**
                 * Returns the number of top-level children nodes of this
                 * JTree.  Each of these nodes may in turn have children nodes.
                 * @return the number of accessible children nodes in the tree.
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
                 * Get the index of this object in its accessible parent.
                 * @return the index of this object in its parent.  Since a JTree
                 *  top-level object does not have an accessible parent.
                 * @see #getAccessibleParent
                 */
                // @ts-ignore
                getAccessibleIndexInParent(): int
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
                 * @param i the zero-based index of the child in this Accessible object.
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
