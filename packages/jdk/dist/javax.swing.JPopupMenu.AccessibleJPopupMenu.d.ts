declare namespace javax {
    namespace swing {
        namespace JPopupMenu {
            /**
             * This class implements accessibility support for the
             * <code>JPopupMenu</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to popup menu user-interface
             * elements.
             */
            // @ts-ignore
            class AccessibleJPopupMenu extends javax.swing.JComponent.AccessibleJComponent implements java.beans.PropertyChangeListener {
                /**
                 * AccessibleJPopupMenu constructor
                 * @since 1.5
                 */
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
                 * This method gets called when a bound property is changed.
                 * @param e A <code>PropertyChangeEvent</code> object describing
                 *  the event source and the property that has changed. Must not be null.
                 * @throws NullPointerException if the parameter is null.
                 * @since 1.5
                 */
                // @ts-ignore
                public propertyChange(e: java.beans.PropertyChangeEvent): void
            }
        }
    }
}
