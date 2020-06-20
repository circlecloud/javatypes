declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * BasicToggleButton implementation
                 * <p>
                 * @author Jeff Dinkins
                 */
                // @ts-ignore
                class BasicToggleButtonUI extends javax.swing.plaf.basic.BasicButtonUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    createUI(b: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    getPropertyPrefix(): java.lang.String
                    // @ts-ignore
                    paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    paintIcon(g: java.awt.Graphics, b: javax.swing.AbstractButton, iconRect: java.awt.Rectangle): void
                    /**
                     * Overriden so that the text will not be rendered as shifted for
                     * Toggle buttons and subclasses.
                     */
                    // @ts-ignore
                    getTextShiftOffset(): int
                }
            }
        }
    }
}
