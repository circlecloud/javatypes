declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * A default L&amp;F implementation of MenuBarUI.  This implementation
                 * is a "combined" view/controller.
                 * @author Georges Saab
                 * @author David Karlton
                 * @author Arnaud Weber
                 */
                // @ts-ignore
                class BasicMenuBarUI extends javax.swing.plaf.MenuBarUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    menuBar: javax.swing.JMenuBar
                    // @ts-ignore
                    containerListener: java.awt.event.ContainerListener
                    // @ts-ignore
                    changeListener: javax.swing.event.ChangeListener
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
                    createContainerListener(): java.awt.event.ContainerListener
                    // @ts-ignore
                    createChangeListener(): javax.swing.event.ChangeListener
                    // @ts-ignore
                    getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                }
            }
        }
    }
}
