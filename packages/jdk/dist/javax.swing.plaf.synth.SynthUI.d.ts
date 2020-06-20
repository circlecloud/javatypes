declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * SynthUI is used to fetch the SynthContext for a particular Component.
                 * @author Scott Violet
                 * @since 1.7
                 */
                // @ts-ignore
                interface SynthUI extends javax.swing.plaf.synth.SynthConstants {
                    /**
                     * Returns the Context for the specified component.
                     * @param c Component requesting SynthContext.
                     * @return SynthContext describing component.
                     */
                    // @ts-ignore
                    getContext(c: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
                    /**
                     * Paints the border.
                     * @param context a component context
                     * @param g {#code Graphics} to paint on
                     * @param x the X coordinate
                     * @param y the Y coordinate
                     * @param w width of the border
                     * @param h height of the border
                     */
                    // @ts-ignore
                    paintBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                }
            }
        }
    }
}
