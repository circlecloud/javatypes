declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace multi {
                /**
                 * A multiplexing UI used to combine <code>ScrollBarUI</code>s.
                 * <p>This file was automatically generated by AutoMulti.
                 * @author Otto Multey
                 */
                // @ts-ignore
                class MultiScrollBarUI extends javax.swing.plaf.ScrollBarUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * The vector containing the real UIs.  This is populated
                     * in the call to <code>createUI</code>, and can be obtained by calling
                     * the <code>getUIs</code> method.  The first element is guaranteed to be the real UI
                     * obtained from the default look and feel.
                     */
                    // @ts-ignore
                    uis: java.util.Vector<any>
                    /**
                     * Returns the list of UIs associated with this multiplexing UI.  This
                     * allows processing of the UIs by an application aware of multiplexing
                     * UIs on components.
                     */
                    // @ts-ignore
                    public getUIs(): javax.swing.plaf.ComponentUI[]
                    /**
                     * Invokes the <code>contains</code> method on each UI handled by this object.
                     * @return the value obtained from the first UI, which is
                     *  the UI obtained from the default <code>LookAndFeel</code>
                     */
                    // @ts-ignore
                    public contains(a: javax.swing.JComponent, b: number /*int*/, c: number /*int*/): boolean
                    /**
                     * Invokes the <code>update</code> method on each UI handled by this object.
                     */
                    // @ts-ignore
                    public update(a: java.awt.Graphics, b: javax.swing.JComponent): void
                    /**
                     * Returns a multiplexing UI instance if any of the auxiliary
                     * <code>LookAndFeel</code>s supports this UI.  Otherwise, just returns the
                     * UI object obtained from the default <code>LookAndFeel</code>.
                     */
                    // @ts-ignore
                    public static createUI(a: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Invokes the <code>installUI</code> method on each UI handled by this object.
                     */
                    // @ts-ignore
                    public installUI(a: javax.swing.JComponent): void
                    /**
                     * Invokes the <code>uninstallUI</code> method on each UI handled by this object.
                     */
                    // @ts-ignore
                    public uninstallUI(a: javax.swing.JComponent): void
                    /**
                     * Invokes the <code>paint</code> method on each UI handled by this object.
                     */
                    // @ts-ignore
                    public paint(a: java.awt.Graphics, b: javax.swing.JComponent): void
                    /**
                     * Invokes the <code>getPreferredSize</code> method on each UI handled by this object.
                     * @return the value obtained from the first UI, which is
                     *  the UI obtained from the default <code>LookAndFeel</code>
                     */
                    // @ts-ignore
                    public getPreferredSize(a: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Invokes the <code>getMinimumSize</code> method on each UI handled by this object.
                     * @return the value obtained from the first UI, which is
                     *  the UI obtained from the default <code>LookAndFeel</code>
                     */
                    // @ts-ignore
                    public getMinimumSize(a: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Invokes the <code>getMaximumSize</code> method on each UI handled by this object.
                     * @return the value obtained from the first UI, which is
                     *  the UI obtained from the default <code>LookAndFeel</code>
                     */
                    // @ts-ignore
                    public getMaximumSize(a: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Invokes the <code>getAccessibleChildrenCount</code> method on each UI handled by this object.
                     * @return the value obtained from the first UI, which is
                     *  the UI obtained from the default <code>LookAndFeel</code>
                     */
                    // @ts-ignore
                    public getAccessibleChildrenCount(a: javax.swing.JComponent): number /*int*/
                    /**
                     * Invokes the <code>getAccessibleChild</code> method on each UI handled by this object.
                     * @return the value obtained from the first UI, which is
                     *  the UI obtained from the default <code>LookAndFeel</code>
                     */
                    // @ts-ignore
                    public getAccessibleChild(a: javax.swing.JComponent, b: number /*int*/): javax.accessibility.Accessible
                }
            }
        }
    }
}
