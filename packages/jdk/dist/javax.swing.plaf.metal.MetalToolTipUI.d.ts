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
                    public static readonly padSpaceBetweenStrings: number /*int*/
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    public getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    isAcceleratorHidden(): boolean
                    // @ts-ignore
                    public getAcceleratorString(): string
                }
            }
        }
    }
}
