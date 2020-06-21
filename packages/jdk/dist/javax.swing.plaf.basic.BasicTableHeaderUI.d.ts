declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * BasicTableHeaderUI implementation
                 * @author Alan Chung
                 * @author Philip Milne
                 */
                // @ts-ignore
                class BasicTableHeaderUI extends javax.swing.plaf.TableHeaderUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * The JTableHeader that is delegating the painting to this UI.
                     */
                    // @ts-ignore
                    header: javax.swing.table.JTableHeader
                    // @ts-ignore
                    rendererPane: javax.swing.CellRendererPane
                    // @ts-ignore
                    mouseInputListener: javax.swing.event.MouseInputListener
                    /**
                     * Creates the mouse listener for the JTableHeader.
                     */
                    // @ts-ignore
                    createMouseInputListener(): javax.swing.event.MouseInputListener
                    // @ts-ignore
                    public static createUI(h: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    /**
                     * Initializes JTableHeader properties such as font, foreground, and background.
                     * The font, foreground, and background properties are only set if their
                     * current value is either null or a UIResource, other properties are set
                     * if the current value is null.
                     * @see #installUI
                     */
                    // @ts-ignore
                    installDefaults(): void
                    /**
                     * Attaches listeners to the JTableHeader.
                     */
                    // @ts-ignore
                    installListeners(): void
                    /**
                     * Register all keyboard actions on the JTableHeader.
                     */
                    // @ts-ignore
                    installKeyboardActions(): void
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallDefaults(): void
                    // @ts-ignore
                    uninstallListeners(): void
                    /**
                     * Unregisters default key actions.
                     */
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    /**
                     * Returns the index of the column header over which the mouse
                     * currently is. When the mouse is not over the table header,
                     * -1 is returned.
                     * @see #rolloverColumnUpdated(int, int)
                     * @return the index of the current rollover column
                     * @since 1.6
                     */
                    // @ts-ignore
                    getRolloverColumn(): number /*int*/
                    /**
                     * This method gets called every time when a rollover column in the table
                     * header is updated. Every look and feel that supports a rollover effect
                     * in a table header should override this method and repaint the header.
                     * @param oldColumn the index of the previous rollover column or -1 if the
                     *  mouse was not over a column
                     * @param newColumn the index of the new rollover column or -1 if the mouse
                     *  is not over a column
                     * @see #getRolloverColumn()
                     * @see JTableHeader#getHeaderRect(int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    rolloverColumnUpdated(oldColumn: number /*int*/, newColumn: number /*int*/): void
                    /**
                     * Returns the baseline.
                     * @throws NullPointerException {#inheritDoc}
                     * @throws IllegalArgumentException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    public getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): number /*int*/
                    // @ts-ignore
                    public paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * Return the minimum size of the header. The minimum width is the sum
                     * of the minimum widths of each column (plus inter-cell spacing).
                     */
                    // @ts-ignore
                    public getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Return the preferred size of the header. The preferred height is the
                     * maximum of the preferred heights of all of the components provided
                     * by the header renderers. The preferred width is the sum of the
                     * preferred widths of each column (plus inter-cell spacing).
                     */
                    // @ts-ignore
                    public getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Return the maximum size of the header. The maximum width is the sum
                     * of the maximum widths of each column (plus inter-cell spacing).
                     */
                    // @ts-ignore
                    public getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                }
            }
        }
    }
}
