declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * BasicTableUI implementation
                 * @author Philip Milne
                 * @author Shannon Hickey (drag and drop)
                 */
                // @ts-ignore
                class BasicTableUI extends javax.swing.plaf.TableUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    table: javax.swing.JTable
                    // @ts-ignore
                    rendererPane: javax.swing.CellRendererPane
                    // @ts-ignore
                    keyListener: java.awt.event.KeyListener
                    // @ts-ignore
                    focusListener: java.awt.event.FocusListener
                    // @ts-ignore
                    mouseInputListener: javax.swing.event.MouseInputListener
                    /**
                     * Creates the key listener for handling keyboard navigation in the JTable.
                     */
                    // @ts-ignore
                    createKeyListener(): java.awt.event.KeyListener
                    /**
                     * Creates the focus listener for handling keyboard navigation in the JTable.
                     */
                    // @ts-ignore
                    createFocusListener(): java.awt.event.FocusListener
                    /**
                     * Creates the mouse listener for the JTable.
                     */
                    // @ts-ignore
                    createMouseInputListener(): javax.swing.event.MouseInputListener
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    /**
                     * Initialize JTable properties, e.g. font, foreground, and background.
                     * The font, foreground, and background properties are only set if their
                     * current value is either null or a UIResource, other properties are set
                     * if the current value is null.
                     * @see #installUI
                     */
                    // @ts-ignore
                    installDefaults(): void
                    /**
                     * Attaches listeners to the JTable.
                     */
                    // @ts-ignore
                    installListeners(): void
                    /**
                     * Register all keyboard actions on the JTable.
                     */
                    // @ts-ignore
                    installKeyboardActions(): void
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallDefaults(): void
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    /**
                     * Returns the baseline.
                     * @throws NullPointerException {#inheritDoc}
                     * @throws IllegalArgumentException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    public getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): number /*int*/
                    /**
                     * Returns an enum indicating how the baseline of the component
                     * changes as the size changes.
                     * @throws NullPointerException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    public getBaselineResizeBehavior(c: javax.swing.JComponent): java.awt.Component.BaselineResizeBehavior
                    /**
                     * Return the minimum size of the table. The minimum height is the
                     * row height times the number of rows.
                     * The minimum width is the sum of the minimum widths of each column.
                     */
                    // @ts-ignore
                    public getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Return the preferred size of the table. The preferred height is the
                     * row height times the number of rows.
                     * The preferred width is the sum of the preferred widths of each column.
                     */
                    // @ts-ignore
                    public getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Return the maximum size of the table. The maximum height is the
                     * row heighttimes the number of rows.
                     * The maximum width is the sum of the maximum widths of each column.
                     */
                    // @ts-ignore
                    public getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Paint a representation of the <code>table</code> instance
                     * that was set in installUI().
                     */
                    // @ts-ignore
                    public paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                }
            }
        }
    }
}
