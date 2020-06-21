declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * A Metal Look and Feel implementation of ToolBarUI.  This implementation
                 * is a "combined" view/controller.
                 * <p>
                 * @author Jeff Shapiro
                 */
                // @ts-ignore
                class MetalToolBarUI extends javax.swing.plaf.basic.BasicToolBarUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Use the create method instead.
                     * @see #createContainerListener
                     */
                    // @ts-ignore
                    contListener: java.awt.event.ContainerListener
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Use the create method instead.
                     * @see #createRolloverListener
                     */
                    // @ts-ignore
                    rolloverListener: java.beans.PropertyChangeListener
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installListeners(): void
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    createRolloverBorder(): javax.swing.border.Border
                    // @ts-ignore
                    createNonRolloverBorder(): javax.swing.border.Border
                    // @ts-ignore
                    setBorderToNonRollover(c: java.awt.Component): void
                    /**
                     * Creates a container listener that will be added to the JToolBar.
                     * If this method returns null then it will not be added to the
                     * toolbar.
                     * @return an instance of a <code>ContainerListener</code> or null
                     */
                    // @ts-ignore
                    createContainerListener(): java.awt.event.ContainerListener
                    /**
                     * Creates a property change listener that will be added to the JToolBar.
                     * If this method returns null then it will not be added to the
                     * toolbar.
                     * @return an instance of a <code>PropertyChangeListener</code> or null
                     */
                    // @ts-ignore
                    createRolloverListener(): java.beans.PropertyChangeListener
                    // @ts-ignore
                    createDockingListener(): javax.swing.event.MouseInputListener
                    // @ts-ignore
                    setDragOffset(p: java.awt.Point): void
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
                    public update(g: java.awt.Graphics, c: javax.swing.JComponent): void
                }
            }
        }
    }
}
