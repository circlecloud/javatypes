declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * A Basic L&amp;F implementation of SeparatorUI.  This implementation
                 * is a "combined" view/controller.
                 * @author Georges Saab
                 * @author Jeff Shapiro
                 */
                // @ts-ignore
                class BasicSeparatorUI extends javax.swing.plaf.SeparatorUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    shadow: java.awt.Color
                    // @ts-ignore
                    highlight: java.awt.Color
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installDefaults(s: javax.swing.JSeparator): void
                    // @ts-ignore
                    uninstallDefaults(s: javax.swing.JSeparator): void
                    // @ts-ignore
                    installListeners(s: javax.swing.JSeparator): void
                    // @ts-ignore
                    uninstallListeners(s: javax.swing.JSeparator): void
                    // @ts-ignore
                    paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                }
            }
        }
    }
}
