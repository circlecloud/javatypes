declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * BasicPanel implementation
                 * @author Steve Wilson
                 */
                // @ts-ignore
                class BasicPanelUI extends javax.swing.plaf.PanelUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installDefaults(p: javax.swing.JPanel): void
                    // @ts-ignore
                    uninstallDefaults(p: javax.swing.JPanel): void
                    /**
                     * Returns the baseline.
                     * @throws NullPointerException {#inheritDoc}
                     * @throws IllegalArgumentException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    public getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): number /*int*/
                    /**
                     * Returns an enum indicating how the baseline of the component
                     * changes as the size changes.
                     * @throws NullPointerException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    public getBaselineResizeBehavior(c: javax.swing.JComponent): java.awt.Component.BaselineResizeBehavior
                }
            }
        }
    }
}
