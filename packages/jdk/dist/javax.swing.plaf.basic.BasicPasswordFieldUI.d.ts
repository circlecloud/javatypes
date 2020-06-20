declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Provides the Windows look and feel for a password field.
                 * The only difference from the standard text field is that
                 * the view of the text is simply a string of the echo
                 * character as specified in JPasswordField, rather than the
                 * real text contained in the field.
                 * @author Timothy Prinzing
                 */
                // @ts-ignore
                class BasicPasswordFieldUI extends javax.swing.plaf.basic.BasicTextFieldUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a UI for a JPasswordField.
                     * @param c the JPasswordField
                     * @return the UI
                     */
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Fetches the name used as a key to look up properties through the
                     * UIManager.  This is used as a prefix to all the standard
                     * text properties.
                     * @return the name ("PasswordField")
                     */
                    // @ts-ignore
                    getPropertyPrefix(): java.lang.String
                    /**
                     * Installs the necessary properties on the JPasswordField.
                     * @since 1.6
                     */
                    // @ts-ignore
                    installDefaults(): void
                    /**
                     * Creates a view (PasswordView) for an element.
                     * @param elem the element
                     * @return the view
                     */
                    // @ts-ignore
                    create(elem: javax.swing.text.Element): javax.swing.text.View
                }
            }
        }
    }
}
