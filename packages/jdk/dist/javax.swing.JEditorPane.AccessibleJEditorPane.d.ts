declare namespace javax {
    namespace swing {
        namespace JEditorPane {
            /**
             * This class implements accessibility support for the
             * <code>JEditorPane</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to editor pane user-interface
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
            class AccessibleJEditorPane extends javax.swing.text.JTextComponent.AccessibleJTextComponent {
                // @ts-ignore
                constructor()
                /**
                 * Gets the accessibleDescription property of this object.  If this
                 * property isn't set, returns the content type of this
                 * <code>JEditorPane</code> instead (e.g. "plain/text", "html/text").
                 * @return the localized description of the object; <code>null</code>
                 *       if this object does not have a description
                 * @see #setAccessibleName
                 */
                // @ts-ignore
                getAccessibleDescription(): java.lang.String
                /**
                 * Gets the state set of this object.
                 * @return an instance of AccessibleStateSet describing the states
                 *  of the object
                 * @see AccessibleStateSet
                 */
                // @ts-ignore
                getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
            }
        }
    }
}
