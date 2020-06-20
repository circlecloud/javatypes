declare namespace javax {
    namespace swing {
        namespace JEditorPane {
            /**
             * This class provides support for <code>AccessibleHypertext</code>,
             * and is used in instances where the <code>EditorKit</code>
             * installed in this <code>JEditorPane</code> is an instance of
             * <code>HTMLEditorKit</code>.
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
            class AccessibleJEditorPaneHTML extends javax.swing.JEditorPane.AccessibleJEditorPane {
                // @ts-ignore
                constructor()
                // @ts-ignore
                getAccessibleText(): javax.accessibility.AccessibleText
                /**
                 * Returns the number of accessible children of the object.
                 * @return the number of accessible children of the object.
                 */
                // @ts-ignore
                getAccessibleChildrenCount(): int
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
                getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                /**
                 * Returns the Accessible child, if one exists, contained at the local
                 * coordinate Point.
                 * @param p The point relative to the coordinate system of this object.
                 * @return the Accessible, if it exists, at the specified location;
                 *  otherwise null
                 */
                // @ts-ignore
                getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible
            }
        }
    }
}
