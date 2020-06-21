declare namespace javax {
    namespace swing {
        namespace JRootPane {
            /**
             * This class implements accessibility support for the
             * <code>JRootPane</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to root pane user-interface elements.
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
            class AccessibleJRootPane extends javax.swing.JComponent.AccessibleJComponent {
                // @ts-ignore
                constructor()
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of
                 *  the object
                 */
                // @ts-ignore
                public getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Returns the number of accessible children of the object.
                 * @return the number of accessible children of the object.
                 */
                // @ts-ignore
                public getAccessibleChildrenCount(): number /*int*/
                /**
                 * Returns the specified Accessible child of the object.  The Accessible
                 * children of an Accessible object are zero-based, so the first child
                 * of an Accessible child is at index 0, the second child is at index 1,
                 * and so on.
                 * @param i zero-based index of child
                 * @return the Accessible child of the object
                 * @see #getAccessibleChildrenCount
                 */
                // @ts-ignore
                public getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
            }
        }
    }
}
