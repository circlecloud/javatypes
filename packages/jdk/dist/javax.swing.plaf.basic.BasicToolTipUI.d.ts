declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Standard tool tip L&amp;F.
                 * <p>
                 * @author Dave Moore
                 */
                // @ts-ignore
                class BasicToolTipUI extends javax.swing.plaf.ToolTipUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installDefaults(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallDefaults(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installListeners(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallListeners(c: javax.swing.JComponent): void
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
