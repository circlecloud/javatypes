declare namespace javax {
    namespace swing {
        namespace JTabbedPane {
            /**
             * This class implements accessibility support for the
             * <code>JTabbedPane</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to tabbed pane user-interface
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
            class AccessibleJTabbedPane extends javax.swing.JComponent.AccessibleJComponent implements javax.accessibility.AccessibleSelection, javax.swing.event.ChangeListener {
                /**
                 * Constructs an AccessibleJTabbedPane
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the accessible name of this object, or {@code null} if
                 * there is no accessible name.
                 * @return the accessible name of this object, nor {#code null}.
                 * @since 1.6
                 */
                // @ts-ignore
                getAccessibleName(): java.lang.String
                // @ts-ignore
                stateChanged(e: javax.swing.event.ChangeEvent): void
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of
                 *           the object
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Returns the number of accessible children in the object.
                 * @return the number of accessible children in the object.
                 */
                // @ts-ignore
                getAccessibleChildrenCount(): int
                /**
                 * Return the specified Accessible child of the object.
                 * @param i zero-based index of child
                 * @return the Accessible child of the object
                 * @exception IllegalArgumentException if index is out of bounds
                 */
                // @ts-ignore
                getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                /**
                 * Gets the <code>AccessibleSelection</code> associated with
                 * this object.  In the implementation of the Java
                 * Accessibility API for this class,
                 * returns this object, which is responsible for implementing the
                 * <code>AccessibleSelection</code> interface on behalf of itself.
                 * @return this object
                 */
                // @ts-ignore
                getAccessibleSelection(): javax.accessibility.AccessibleSelection
                /**
                 * Returns the <code>Accessible</code> child contained at
                 * the local coordinate <code>Point</code>, if one exists.
                 * Otherwise returns the currently selected tab.
                 * @return the <code>Accessible</code> at the specified
                 *     location, if it exists
                 */
                // @ts-ignore
                getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible
                // @ts-ignore
                getAccessibleSelectionCount(): int
                // @ts-ignore
                getAccessibleSelection(i: number /*int*/): javax.accessibility.Accessible
                // @ts-ignore
                isAccessibleChildSelected(i: number /*int*/): boolean
                // @ts-ignore
                addAccessibleSelection(i: number /*int*/): void
                // @ts-ignore
                removeAccessibleSelection(i: number /*int*/): void
                // @ts-ignore
                clearAccessibleSelection(): void
                // @ts-ignore
                selectAllAccessibleSelection(): void
            }
        }
    }
}
