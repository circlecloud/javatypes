declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * A Metal L&amp;F extension of BasicToolTipUI.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Steve Wilson
                 */
                // @ts-ignore
                class MetalToolTipUI extends javax.swing.plaf.basic.BasicToolTipUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly padSpaceBetweenStrings: number /*int*/
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    isAcceleratorHidden(): boolean
                    // @ts-ignore
                    getAcceleratorString(): java.lang.String
                }
            }
        }
    }
}
