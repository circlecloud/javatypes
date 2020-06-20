declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * Class that manages a JLF title bar
                 * @author Steve Wilson
                 * @author Brian Beck
                 * @since 1.3
                 */
                // @ts-ignore
                class MetalInternalFrameTitlePane extends javax.swing.plaf.basic.BasicInternalFrameTitlePane {
                    // @ts-ignore
                    constructor(f: javax.swing.JInternalFrame)
                    // @ts-ignore
                    isPalette: boolean
                    // @ts-ignore
                    paletteCloseIcon: javax.swing.Icon
                    // @ts-ignore
                    paletteTitleHeight: number /*int*/
                    // @ts-ignore
                    addNotify(): void
                    // @ts-ignore
                    installDefaults(): void
                    // @ts-ignore
                    uninstallDefaults(): void
                    // @ts-ignore
                    createButtons(): void
                    /**
                     * Override the parent's method to do nothing. Metal frames do not
                     * have system menus.
                     */
                    // @ts-ignore
                    assembleSystemMenu(): void
                    /**
                     * Override the parent's method to do nothing. Metal frames do not
                     * have system menus.
                     */
                    // @ts-ignore
                    addSystemMenuItems(systemMenu: javax.swing.JMenu): void
                    /**
                     * Override the parent's method to do nothing. Metal frames do not
                     * have system menus.
                     */
                    // @ts-ignore
                    showSystemMenu(): void
                    /**
                     * Override the parent's method avoid creating a menu bar. Metal frames
                     * do not have system menus.
                     */
                    // @ts-ignore
                    addSubComponents(): void
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                    // @ts-ignore
                    createLayout(): java.awt.LayoutManager
                    // @ts-ignore
                    paintPalette(g: java.awt.Graphics): void
                    // @ts-ignore
                    paintComponent(g: java.awt.Graphics): void
                    // @ts-ignore
                    setPalette(b: boolean): void
                }
            }
        }
    }
}
