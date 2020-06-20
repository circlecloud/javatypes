declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * Provides the Synth L&amp;F UI delegate for
                 * {@link javax.swing.JFormattedTextField}.
                 * @since 1.7
                 */
                // @ts-ignore
                class SynthFormattedTextFieldUI extends javax.swing.plaf.synth.SynthTextFieldUI {
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
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    paintBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                }
            }
        }
    }
}
