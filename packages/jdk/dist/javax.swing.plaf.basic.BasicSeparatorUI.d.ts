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
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installDefaults(s: javax.swing.JSeparator): void
                    // @ts-ignore
                    uninstallDefaults(s: javax.swing.JSeparator): void
                    // @ts-ignore
                    installListeners(s: javax.swing.JSeparator): void
                    // @ts-ignore
                    uninstallListeners(s: javax.swing.JSeparator): void
                    // @ts-ignore
                    public paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    public getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    public getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    public getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                }
            }
        }
    }
}
