declare namespace javax {
    namespace swing {
        namespace JToggleButton {
            /**
             * This class implements accessibility support for the
             * <code>JToggleButton</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to toggle button user-interface
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
            class AccessibleJToggleButton extends javax.swing.AbstractButton.AccessibleAbstractButton implements java.awt.event.ItemListener {
                // @ts-ignore
                constructor()
                /**
                 * Fire accessible property change events when the state of the
                 * toggle button changes.
                 */
                // @ts-ignore
                itemStateChanged(e: java.awt.event.ItemEvent): void
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
            }
        }
    }
}
