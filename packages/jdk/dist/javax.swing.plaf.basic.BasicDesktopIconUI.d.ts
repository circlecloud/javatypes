declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Basic L&amp;F for a minimized window on a desktop.
                 * @author David Kloba
                 * @author Steve Wilson
                 * @author Rich Schiavi
                 */
                // @ts-ignore
                class BasicDesktopIconUI extends javax.swing.plaf.DesktopIconUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    desktopIcon: javax.swing.JInternalFrame.JDesktopIcon
                    // @ts-ignore
                    frame: javax.swing.JInternalFrame
                    /**
                     * The title pane component used in the desktop icon.
                     * @since 1.5
                     */
                    // @ts-ignore
                    iconPane: javax.swing.JComponent
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installComponents(): void
                    // @ts-ignore
                    uninstallComponents(): void
                    // @ts-ignore
                    installListeners(): void
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    installDefaults(): void
                    // @ts-ignore
                    uninstallDefaults(): void
                    // @ts-ignore
                    createMouseInputListener(): javax.swing.event.MouseInputListener
                    // @ts-ignore
                    getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Desktop icons can not be resized.  Therefore, we should always
                     * return the minimum size of the desktop icon.
                     * @see #getMinimumSize
                     */
                    // @ts-ignore
                    getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    getInsets(c: javax.swing.JComponent): java.awt.Insets
                    // @ts-ignore
                    deiconize(): void
                }
            }
        }
    }
}
