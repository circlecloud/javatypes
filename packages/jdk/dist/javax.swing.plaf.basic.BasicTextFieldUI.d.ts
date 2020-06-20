declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Basis of a look and feel for a JTextField.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Timothy Prinzing
                 */
                // @ts-ignore
                class BasicTextFieldUI extends javax.swing.plaf.basic.BasicTextUI {
                    /**
                     * Creates a new BasicTextFieldUI.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a UI for a JTextField.
                     * @param c the text field
                     * @return the UI
                     */
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Fetches the name used as a key to lookup properties through the
                     * UIManager.  This is used as a prefix to all the standard
                     * text properties.
                     * @return the name ("TextField")
                     */
                    // @ts-ignore
                    getPropertyPrefix(): java.lang.String
                    /**
                     * Creates a view (FieldView) based on an element.
                     * @param elem the element
                     * @return the view
                     */
                    // @ts-ignore
                    create(elem: javax.swing.text.Element): javax.swing.text.View
                    /**
                     * Returns the baseline.
                     * @throws NullPointerException {#inheritDoc}
                     * @throws IllegalArgumentException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): int
                    /**
                     * Returns an enum indicating how the baseline of the component
                     * changes as the size changes.
                     * @throws NullPointerException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaselineResizeBehavior(c: javax.swing.JComponent): java.awt.Component.BaselineResizeBehavior
                }
            }
        }
    }
}
