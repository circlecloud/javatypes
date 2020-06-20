declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * A default L&amp;F implementation of MenuUI.  This implementation
                 * is a "combined" view/controller.
                 * @author Georges Saab
                 * @author David Karlton
                 * @author Arnaud Weber
                 */
                // @ts-ignore
                class BasicMenuUI extends javax.swing.plaf.basic.BasicMenuItemUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    changeListener: javax.swing.event.ChangeListener
                    // @ts-ignore
                    menuListener: javax.swing.event.MenuListener
                    // @ts-ignore
                    createUI(x: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    installDefaults(): void
                    // @ts-ignore
                    getPropertyPrefix(): java.lang.String
                    // @ts-ignore
                    installListeners(): void
                    // @ts-ignore
                    installKeyboardActions(): void
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    // @ts-ignore
                    createMouseInputListener(c: javax.swing.JComponent): javax.swing.event.MouseInputListener
                    // @ts-ignore
                    createMenuListener(c: javax.swing.JComponent): javax.swing.event.MenuListener
                    // @ts-ignore
                    createChangeListener(c: javax.swing.JComponent): javax.swing.event.ChangeListener
                    // @ts-ignore
                    createPropertyChangeListener(c: javax.swing.JComponent): java.beans.PropertyChangeListener
                    // @ts-ignore
                    uninstallDefaults(): void
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    createMenuDragMouseListener(c: javax.swing.JComponent): javax.swing.event.MenuDragMouseListener
                    // @ts-ignore
                    createMenuKeyListener(c: javax.swing.JComponent): javax.swing.event.MenuKeyListener
                    // @ts-ignore
                    getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    setupPostTimer(menu: javax.swing.JMenu): void
                }
            }
        }
    }
}
