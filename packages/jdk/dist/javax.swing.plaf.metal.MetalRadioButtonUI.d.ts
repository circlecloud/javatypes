declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * RadioButtonUI implementation for MetalRadioButtonUI
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Michael C. Albers (Metal modifications)
                 * @author Jeff Dinkins (original BasicRadioButtonCode)
                 */
                // @ts-ignore
                class MetalRadioButtonUI extends javax.swing.plaf.basic.BasicRadioButtonUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    focusColor: java.awt.Color
                    // @ts-ignore
                    selectColor: java.awt.Color
                    // @ts-ignore
                    disabledTextColor: java.awt.Color
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    installDefaults(b: javax.swing.AbstractButton): void
                    // @ts-ignore
                    uninstallDefaults(b: javax.swing.AbstractButton): void
                    // @ts-ignore
                    getSelectColor(): java.awt.Color
                    // @ts-ignore
                    getDisabledTextColor(): java.awt.Color
                    // @ts-ignore
                    getFocusColor(): java.awt.Color
                    // @ts-ignore
                    paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    paintFocus(g: java.awt.Graphics, t: java.awt.Rectangle, d: java.awt.Dimension): void
                }
            }
        }
    }
}
