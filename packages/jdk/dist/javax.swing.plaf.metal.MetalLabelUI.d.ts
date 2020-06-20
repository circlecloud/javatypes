declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * A Windows L&amp;F implementation of LabelUI.  This implementation
                 * is completely static, i.e. there's only one UIView implementation
                 * that's shared by all JLabel objects.
                 * @author Hans Muller
                 */
                // @ts-ignore
                class MetalLabelUI extends javax.swing.plaf.basic.BasicLabelUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * The default <code>MetalLabelUI</code> instance. This field might
                     * not be used. To change the default instance use a subclass which
                     * overrides the <code>createUI</code> method, and place that class
                     * name in defaults table under the key "LabelUI".
                     */
                    // @ts-ignore
                    metalLabelUI: javax.swing.plaf.metal.MetalLabelUI
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Just paint the text gray (Label.disabledForeground) rather than
                     * in the labels foreground color.
                     * @see #paint
                     * @see #paintEnabledText
                     */
                    // @ts-ignore
                    paintDisabledText(l: javax.swing.JLabel, g: java.awt.Graphics, s: string, textX: number /*int*/, textY: number /*int*/): void
                }
            }
        }
    }
}
