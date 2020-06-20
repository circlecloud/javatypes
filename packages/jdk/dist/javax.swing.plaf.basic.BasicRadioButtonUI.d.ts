declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * RadioButtonUI implementation for BasicRadioButtonUI
                 * @author Jeff Dinkins
                 */
                // @ts-ignore
                class BasicRadioButtonUI extends javax.swing.plaf.basic.BasicToggleButtonUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * The icon.
                     */
                    // @ts-ignore
                    icon: javax.swing.Icon
                    /**
                     * Returns an instance of {@code BasicRadioButtonUI}.
                     * @param b a component
                     * @return an instance of {#code BasicRadioButtonUI}
                     */
                    // @ts-ignore
                    createUI(b: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    getPropertyPrefix(): java.lang.String
                    // @ts-ignore
                    installDefaults(b: javax.swing.AbstractButton): void
                    // @ts-ignore
                    uninstallDefaults(b: javax.swing.AbstractButton): void
                    /**
                     * Returns the default icon.
                     * @return the default icon
                     */
                    // @ts-ignore
                    getDefaultIcon(): javax.swing.Icon
                    // @ts-ignore
                    installListeners(button: javax.swing.AbstractButton): void
                    // @ts-ignore
                    uninstallListeners(button: javax.swing.AbstractButton): void
                    /**
                     * paint the radio button
                     */
                    // @ts-ignore
                    paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * Paints focused radio button.
                     * @param g an instance of {#code Graphics}
                     * @param textRect bounds
                     * @param size the size of radio button
                     */
                    // @ts-ignore
                    paintFocus(g: java.awt.Graphics, textRect: java.awt.Rectangle, size: java.awt.Dimension): void
                    /**
                     * The preferred size of the radio button
                     */
                    // @ts-ignore
                    getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                }
            }
        }
    }
}
