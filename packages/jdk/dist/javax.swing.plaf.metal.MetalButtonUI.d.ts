declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * MetalButtonUI implementation
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Tom Santos
                 */
                // @ts-ignore
                class MetalButtonUI extends javax.swing.plaf.basic.BasicButtonUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    focusColor: java.awt.Color
                    // @ts-ignore
                    selectColor: java.awt.Color
                    // @ts-ignore
                    disabledTextColor: java.awt.Color
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installDefaults(b: javax.swing.AbstractButton): void
                    // @ts-ignore
                    public uninstallDefaults(b: javax.swing.AbstractButton): void
                    // @ts-ignore
                    createButtonListener(b: javax.swing.AbstractButton): javax.swing.plaf.basic.BasicButtonListener
                    // @ts-ignore
                    getSelectColor(): java.awt.Color
                    // @ts-ignore
                    getDisabledTextColor(): java.awt.Color
                    // @ts-ignore
                    getFocusColor(): java.awt.Color
                    /**
                     * If necessary paints the background of the component, then
                     * invokes <code>paint</code>.
                     * @param g Graphics to paint to
                     * @param c JComponent painting on
                     * @throws NullPointerException if <code>g</code> or <code>c</code> is
                     *          null
                     * @see javax.swing.plaf.ComponentUI#update
                     * @see javax.swing.plaf.ComponentUI#paint
                     * @since 1.5
                     */
                    // @ts-ignore
                    public update(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    paintButtonPressed(g: java.awt.Graphics, b: javax.swing.AbstractButton): void
                    // @ts-ignore
                    paintFocus(g: java.awt.Graphics, b: javax.swing.AbstractButton, viewRect: java.awt.Rectangle, textRect: java.awt.Rectangle, iconRect: java.awt.Rectangle): void
                    // @ts-ignore
                    paintText(g: java.awt.Graphics, c: javax.swing.JComponent, textRect: java.awt.Rectangle, text: java.lang.String | string): void
                }
            }
        }
    }
}
