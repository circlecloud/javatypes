declare namespace javax {
    namespace swing {
        namespace table {
            namespace JTableHeader {
                /**
                 * This class implements accessibility support for the
                 * <code>JTableHeader</code> class.  It provides an implementation of the
                 * Java Accessibility API appropriate to table header user-interface
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
                class AccessibleJTableHeader extends javax.swing.JComponent.AccessibleJComponent {
                    // @ts-ignore
                    constructor()
                    /**
                     * Get the role of this object.
                     * @return an instance of AccessibleRole describing the role of the
                     *  object
                     * @see AccessibleRole
                     */
                    // @ts-ignore
                    public getAccessibleRole(): javax.accessibility.AccessibleRole
                    /**
                     * Returns the Accessible child, if one exists, contained at the local
                     * coordinate Point.
                     * @param p The point defining the top-left corner of the Accessible,
                     *  given in the coordinate space of the object's parent.
                     * @return the Accessible, if it exists, at the specified location;
                     *  else null
                     */
                    // @ts-ignore
                    public getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible
                    /**
                     * Returns the number of accessible children in the object.  If all
                     * of the children of this object implement Accessible, than this
                     * method should return the number of children of this object.
                     * @return the number of accessible children in the object.
                     */
                    // @ts-ignore
                    public getAccessibleChildrenCount(): number /*int*/
                    /**
                     * Return the nth Accessible child of the object.
                     * @param i zero-based index of child
                     * @return the nth Accessible child of the object
                     */
                    // @ts-ignore
                    public getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                }
            }
        }
    }
}
