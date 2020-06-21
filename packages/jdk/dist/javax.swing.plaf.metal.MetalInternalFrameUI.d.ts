declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * Metal implementation of JInternalFrame.
                 * <p>
                 * @author Steve Wilson
                 */
                // @ts-ignore
                class MetalInternalFrameUI extends javax.swing.plaf.basic.BasicInternalFrameUI {
                    // @ts-ignore
                    constructor(b: javax.swing.JInternalFrame)
                    // @ts-ignore
                    static IS_PALETTE: java.lang.String | string
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installListeners(): void
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    installKeyboardActions(): void
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    // @ts-ignore
                    uninstallComponents(): void
                    // @ts-ignore
                    createNorthPane(w: javax.swing.JInternalFrame): javax.swing.JComponent
                    // @ts-ignore
                    public setPalette(isPalette: boolean): void
                    /**
                     * Returns the <code>MouseInputAdapter</code> that will be installed
                     * on the TitlePane.
                     * @param w the <code>JInternalFrame</code>
                     * @return the <code>MouseInputAdapter</code> that will be installed
                     *  on the TitlePane.
                     * @since 1.6
                     */
                    // @ts-ignore
                    createBorderListener(w: javax.swing.JInternalFrame): javax.swing.event.MouseInputAdapter
                }
            }
        }
    }
}
