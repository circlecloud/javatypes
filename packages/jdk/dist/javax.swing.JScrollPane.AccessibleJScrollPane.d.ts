declare namespace javax {
    namespace swing {
        namespace JScrollPane {
            /**
             * This class implements accessibility support for the
             * <code>JScrollPane</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to scroll pane user-interface
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
            class AccessibleJScrollPane extends javax.swing.JComponent.AccessibleJComponent implements javax.swing.event.ChangeListener, java.beans.PropertyChangeListener {
                /**
                 * AccessibleJScrollPane constructor
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                viewPort: javax.swing.JViewport
                // @ts-ignore
                resetViewPort(): void
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Invoked when the target of the listener has changed its state.
                 * @param e  a <code>ChangeEvent</code> object. Must not be null.
                 * @throws NullPointerException if the parameter is null.
                 */
                // @ts-ignore
                stateChanged(e: javax.swing.event.ChangeEvent): void
                /**
                 * This method gets called when a bound property is changed.
                 * @param e A <code>PropertyChangeEvent</code> object describing
                 *  the event source and the property that has changed. Must not be null.
                 * @throws NullPointerException if the parameter is null.
                 * @since 1.5
                 */
                // @ts-ignore
                propertyChange(e: java.beans.PropertyChangeEvent): void
            }
        }
    }
}
