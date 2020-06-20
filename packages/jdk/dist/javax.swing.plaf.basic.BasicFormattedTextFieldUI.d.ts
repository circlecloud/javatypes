declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Provides the look and feel implementation for
                 * <code>JFormattedTextField</code>.
                 * @since 1.4
                 */
                // @ts-ignore
                class BasicFormattedTextFieldUI extends javax.swing.plaf.basic.BasicTextFieldUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a UI for a JFormattedTextField.
                     * @param c the formatted text field
                     * @return the UI
                     */
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Fetches the name used as a key to lookup properties through the
                     * UIManager.  This is used as a prefix to all the standard
                     * text properties.
                     * @return the name "FormattedTextField"
                     */
                    // @ts-ignore
                    getPropertyPrefix(): java.lang.String
                }
            }
        }
    }
}
