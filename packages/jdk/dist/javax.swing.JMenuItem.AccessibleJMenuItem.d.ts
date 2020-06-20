declare namespace javax {
    namespace swing {
        namespace JMenuItem {
            /**
             * This class implements accessibility support for the
             * <code>JMenuItem</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to menu item user-interface
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
            class AccessibleJMenuItem extends javax.swing.AbstractButton.AccessibleAbstractButton implements javax.swing.event.ChangeListener {
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Supports the change listener interface and fires property changes.
                 */
                // @ts-ignore
                stateChanged(e: javax.swing.event.ChangeEvent): void
            }
        }
    }
}
