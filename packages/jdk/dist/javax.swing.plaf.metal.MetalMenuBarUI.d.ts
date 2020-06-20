declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * Metal implementation of <code>MenuBarUI</code>. This class is responsible
                 * for providing the metal look and feel for <code>JMenuBar</code>s.
                 * @see javax.swing.plaf.MenuBarUI
                 * @since 1.5
                 */
                // @ts-ignore
                class MetalMenuBarUI extends javax.swing.plaf.basic.BasicMenuBarUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates the <code>ComponentUI</code> implementation for the passed
                     * in component.
                     * @param x JComponent to create the ComponentUI implementation for
                     * @return ComponentUI implementation for <code>x</code>
                     * @throws NullPointerException if <code>x</code> is null
                     */
                    // @ts-ignore
                    createUI(x: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Configures the specified component appropriate for the metal look and
                     * feel.
                     * @param c the component where this UI delegate is being installed
                     * @throws NullPointerException if <code>c</code> is null.
                     */
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    /**
                     * Reverses configuration which was done on the specified component during
                     * <code>installUI</code>.
                     * @param c the component where this UI delegate is being installed
                     * @throws NullPointerException if <code>c</code> is null.
                     */
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    /**
                     * If necessary paints the background of the component, then
                     * invokes <code>paint</code>.
                     * @param g Graphics to paint to
                     * @param c JComponent painting on
                     * @throws NullPointerException if <code>g</code> or <code>c</code> is
                     *          null
                     * @see javax.swing.plaf.ComponentUI#update
                     * @see javax.swing.plaf.ComponentUI#paint
                     * @since 1.5
                     */
                    // @ts-ignore
                    update(g: java.awt.Graphics, c: javax.swing.JComponent): void
                }
            }
        }
    }
}
