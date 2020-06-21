declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * Provides the Synth L&amp;F UI delegate for
                 * {@link javax.swing.JPasswordField}.
                 * @author Shannon Hickey
                 * @since 1.7
                 */
                // @ts-ignore
                class SynthPasswordFieldUI extends javax.swing.plaf.synth.SynthTextFieldUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a UI for a JPasswordField.
                     * @param c the JPasswordField
                     * @return the UI
                     */
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Fetches the name used as a key to look up properties through the
                     * UIManager.  This is used as a prefix to all the standard
                     * text properties.
                     * @return the name ("PasswordField")
                     */
                    // @ts-ignore
                    getPropertyPrefix(): string
                    /**
                     * Creates a view (PasswordView) for an element.
                     * @param elem the element
                     * @return the view
                     */
                    // @ts-ignore
                    public create(elem: javax.swing.text.Element): javax.swing.text.View
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public paintBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    installKeyboardActions(): void
                }
            }
        }
    }
}
