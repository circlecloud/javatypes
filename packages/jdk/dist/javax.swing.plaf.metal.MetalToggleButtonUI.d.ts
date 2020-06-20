declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * MetalToggleButton implementation
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
                class MetalToggleButtonUI extends javax.swing.plaf.basic.BasicToggleButtonUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    focusColor: java.awt.Color
                    // @ts-ignore
                    selectColor: java.awt.Color
                    // @ts-ignore
                    disabledTextColor: java.awt.Color
                    // @ts-ignore
                    createUI(b: javax.swing.JComponent): javax.swing.plaf.ComponentUI
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
                    /**
                     * If necessary paints the background of the component, then invokes
                     * <code>paint</code>.
                     * @param g Graphics to paint to
                     * @param c JComponent painting on
                     * @throws NullPointerException if <code>g</code> or <code>c</code> is
                     *          null
                     * @see javax.swing.plaf.ComponentUI#update
                     * @see javax.swing.plaf.ComponentUI#paint
                     * @since 1.5
                     */
                    // @ts-ignore
                    update(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    paintButtonPressed(g: java.awt.Graphics, b: javax.swing.AbstractButton): void
                    // @ts-ignore
                    paintText(g: java.awt.Graphics, c: javax.swing.JComponent, textRect: java.awt.Rectangle, text: string): void
                    // @ts-ignore
                    paintFocus(g: java.awt.Graphics, b: javax.swing.AbstractButton, viewRect: java.awt.Rectangle, textRect: java.awt.Rectangle, iconRect: java.awt.Rectangle): void
                    /**
                     * Paints the appropriate icon of the button <code>b</code> in the
                     * space <code>iconRect</code>.
                     * @param g Graphics to paint to
                     * @param b Button to render for
                     * @param iconRect space to render in
                     * @throws NullPointerException if any of the arguments are null.
                     * @since 1.5
                     */
                    // @ts-ignore
                    paintIcon(g: java.awt.Graphics, b: javax.swing.AbstractButton, iconRect: java.awt.Rectangle): void
                }
            }
        }
    }
}
