declare namespace javax {
    namespace swing {
        namespace text {
            namespace DefaultHighlighter {
                /**
                 * Simple highlight painter that fills a highlighted area with
                 * a solid color.
                 */
                // @ts-ignore
                class DefaultHighlightPainter extends javax.swing.text.LayeredHighlighter.LayerPainter {
                    /**
                     * Constructs a new highlight painter. If <code>c</code> is null,
                     * the JTextComponent will be queried for its selection color.
                     * @param c the color for the highlight
                     */
                    // @ts-ignore
                    constructor(c: java.awt.Color)
                    /**
                     * Returns the color of the highlight.
                     * @return the color
                     */
                    // @ts-ignore
                    getColor(): java.awt.Color
                    /**
                     * Paints a highlight.
                     * @param g the graphics context
                     * @param offs0 the starting model offset &gt;= 0
                     * @param offs1 the ending model offset &gt;= offs1
                     * @param bounds the bounding box for the highlight
                     * @param c the editor
                     */
                    // @ts-ignore
                    paint(g: java.awt.Graphics, offs0: number /*int*/, offs1: number /*int*/, bounds: java.awt.Shape, c: javax.swing.text.JTextComponent): void
                    /**
                     * Paints a portion of a highlight.
                     * @param g the graphics context
                     * @param offs0 the starting model offset &gt;= 0
                     * @param offs1 the ending model offset &gt;= offs1
                     * @param bounds the bounding box of the view, which is not
                     *         necessarily the region to paint.
                     * @param c the editor
                     * @param view View painting for
                     * @return region drawing occurred in
                     */
                    // @ts-ignore
                    paintLayer(g: java.awt.Graphics, offs0: number /*int*/, offs1: number /*int*/, bounds: java.awt.Shape, c: javax.swing.text.JTextComponent, view: javax.swing.text.View): java.awt.Shape
                }
            }
        }
    }
}
