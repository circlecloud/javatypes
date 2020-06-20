declare namespace javax {
    namespace swing {
        namespace text {
            namespace Highlighter {
                /**
                 * Highlight renderer.
                 */
                // @ts-ignore
                interface HighlightPainter {
                    /**
                     * Renders the highlight.
                     * @param g the graphics context
                     * @param p0 the starting offset in the model &gt;= 0
                     * @param p1 the ending offset in the model &gt;= p0
                     * @param bounds the bounding box for the highlight
                     * @param c the editor
                     */
                    // @ts-ignore
                    paint(g: java.awt.Graphics, p0: number /*int*/, p1: number /*int*/, bounds: java.awt.Shape, c: javax.swing.text.JTextComponent): void
                }
            }
        }
    }
}
