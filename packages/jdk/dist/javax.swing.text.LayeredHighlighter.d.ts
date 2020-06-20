declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * @author Scott Violet
             * @author Timothy Prinzing
             * @see Highlighter
             */
            // @ts-ignore
            class LayeredHighlighter extends java.lang.Object implements javax.swing.text.Highlighter {
                // @ts-ignore
                constructor()
                /**
                 * When leaf Views (such as LabelView) are rendering they should
                 * call into this method. If a highlight is in the given region it will
                 * be drawn immediately.
                 * @param g Graphics used to draw
                 * @param p0 starting offset of view
                 * @param p1 ending offset of view
                 * @param viewBounds Bounds of View
                 * @param editor JTextComponent
                 * @param view View instance being rendered
                 */
                // @ts-ignore
                abstract paintLayeredHighlights(g: java.awt.Graphics, p0: number /*int*/, p1: number /*int*/, viewBounds: java.awt.Shape, editor: javax.swing.text.JTextComponent, view: javax.swing.text.View): void
            }
        }
    }
}
