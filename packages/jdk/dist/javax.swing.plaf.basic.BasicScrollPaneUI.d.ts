declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * A default L&amp;F implementation of ScrollPaneUI.
                 * @author Hans Muller
                 */
                // @ts-ignore
                class BasicScrollPaneUI extends javax.swing.plaf.ScrollPaneUI implements javax.swing.ScrollPaneConstants {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    scrollpane: javax.swing.JScrollPane
                    // @ts-ignore
                    vsbChangeListener: javax.swing.event.ChangeListener
                    // @ts-ignore
                    hsbChangeListener: javax.swing.event.ChangeListener
                    // @ts-ignore
                    viewportChangeListener: javax.swing.event.ChangeListener
                    // @ts-ignore
                    spPropertyChangeListener: java.beans.PropertyChangeListener
                    // @ts-ignore
                    createUI(x: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * @return new Dimension(Short.MAX_VALUE, Short.MAX_VALUE)
                     */
                    // @ts-ignore
                    getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    installDefaults(scrollpane: javax.swing.JScrollPane): void
                    // @ts-ignore
                    installListeners(c: javax.swing.JScrollPane): void
                    // @ts-ignore
                    installKeyboardActions(c: javax.swing.JScrollPane): void
                    // @ts-ignore
                    installUI(x: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallDefaults(c: javax.swing.JScrollPane): void
                    // @ts-ignore
                    uninstallListeners(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallKeyboardActions(c: javax.swing.JScrollPane): void
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    syncScrollPaneWithViewport(): void
                    /**
                     * Returns the baseline.
                     * @throws NullPointerException {#inheritDoc}
                     * @throws IllegalArgumentException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): int
                    /**
                     * Returns an enum indicating how the baseline of the component
                     * changes as the size changes.
                     * @throws NullPointerException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaselineResizeBehavior(c: javax.swing.JComponent): java.awt.Component.BaselineResizeBehavior
                    // @ts-ignore
                    createViewportChangeListener(): javax.swing.event.ChangeListener
                    // @ts-ignore
                    createHSBChangeListener(): javax.swing.event.ChangeListener
                    // @ts-ignore
                    createVSBChangeListener(): javax.swing.event.ChangeListener
                    /**
                     * Creates an instance of MouseWheelListener, which is added to the
                     * JScrollPane by installUI().  The returned MouseWheelListener is used
                     * to handle mouse wheel-driven scrolling.
                     * @return MouseWheelListener which implements wheel-driven scrolling
                     * @see #installUI
                     * @see MouseWheelHandler
                     * @since 1.4
                     */
                    // @ts-ignore
                    createMouseWheelListener(): java.awt.event.MouseWheelListener
                    // @ts-ignore
                    updateScrollBarDisplayPolicy(e: java.beans.PropertyChangeEvent): void
                    // @ts-ignore
                    updateViewport(e: java.beans.PropertyChangeEvent): void
                    // @ts-ignore
                    updateRowHeader(e: java.beans.PropertyChangeEvent): void
                    // @ts-ignore
                    updateColumnHeader(e: java.beans.PropertyChangeEvent): void
                    /**
                     * Creates an instance of PropertyChangeListener that's added to
                     * the JScrollPane by installUI().  Subclasses can override this method
                     * to return a custom PropertyChangeListener, e.g.
                     * <pre>
                     * class MyScrollPaneUI extends BasicScrollPaneUI {
                     * protected PropertyChangeListener <b>createPropertyChangeListener</b>() {
                     * return new MyPropertyChangeListener();
                     * }
                     * public class MyPropertyChangeListener extends PropertyChangeListener {
                     * public void propertyChange(PropertyChangeEvent e) {
                     * if (e.getPropertyName().equals("viewport")) {
                     * // do some extra work when the viewport changes
                     * }
                     * super.propertyChange(e);
                     * }
                     * }
                     * }
                     * </pre>
                     * @see java.beans.PropertyChangeListener
                     * @see #installUI
                     */
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                }
            }
        }
    }
}
