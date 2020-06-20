declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * A Windows L&amp;F implementation of PopupMenuUI.  This implementation
                 * is a "combined" view/controller.
                 * @author Georges Saab
                 * @author David Karlton
                 * @author Arnaud Weber
                 */
                // @ts-ignore
                class BasicPopupMenuUI extends javax.swing.plaf.PopupMenuUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    popupMenu: javax.swing.JPopupMenu
                    // @ts-ignore
                    createUI(x: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installDefaults(): void
                    // @ts-ignore
                    installListeners(): void
                    // @ts-ignore
                    installKeyboardActions(): void
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallDefaults(): void
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    // @ts-ignore
                    isPopupTrigger(e: java.awt.event.MouseEvent): boolean
                }
            }
        }
    }
}
