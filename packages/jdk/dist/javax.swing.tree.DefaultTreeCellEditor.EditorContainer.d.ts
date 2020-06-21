declare namespace javax {
    namespace swing {
        namespace tree {
            namespace DefaultTreeCellEditor {
                /**
                 * Container responsible for placing the <code>editingComponent</code>.
                 */
                // @ts-ignore
                class EditorContainer extends java.awt.Container {
                    /**
                     * Constructs an <code>EditorContainer</code> object.
                     */
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public EditorContainer(): void
                    /**
                     * Overrides <code>Container.paint</code> to paint the node's
                     * icon and use the selection color for the background.
                     */
                    // @ts-ignore
                    public paint(g: java.awt.Graphics): void
                    /**
                     * Lays out this <code>Container</code>.  If editing,
                     * the editor will be placed at
                     * <code>offset</code> in the x direction and 0 for y.
                     */
                    // @ts-ignore
                    public doLayout(): void
                    /**
                     * Returns the preferred size for the <code>Container</code>.
                     * This will be at least preferred size of the editor plus
                     * <code>offset</code>.
                     * @return a <code>Dimension</code> containing the preferred
                     *    size for the <code>Container</code>; if
                     *    <code>editingComponent</code> is <code>null</code> the
                     *    <code>Dimension</code> returned is 0, 0
                     */
                    // @ts-ignore
                    public getPreferredSize(): java.awt.Dimension
                }
            }
        }
    }
}
