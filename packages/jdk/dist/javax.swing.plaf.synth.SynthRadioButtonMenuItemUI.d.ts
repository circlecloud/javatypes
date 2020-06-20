declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * Provides the Synth L&amp;F UI delegate for
                 * {@link javax.swing.JRadioButtonMenuItem}.
                 * @author Georges Saab
                 * @author David Karlton
                 * @since 1.7
                 */
                // @ts-ignore
                class SynthRadioButtonMenuItemUI extends javax.swing.plaf.synth.SynthMenuItemUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a new UI object for the given component.
                     * @param b component to create UI object for
                     * @return the UI object
                     */
                    // @ts-ignore
                    createUI(b: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * {@inheritDoc}
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
