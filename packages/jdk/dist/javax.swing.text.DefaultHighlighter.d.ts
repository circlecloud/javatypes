declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * Implements the Highlighter interfaces.  Implements a simple highlight
             * painter that renders in a solid color.
             * @author Timothy Prinzing
             * @see Highlighter
             */
            // @ts-ignore
            class DefaultHighlighter extends javax.swing.text.LayeredHighlighter {
                /**
                 * Creates a new DefaultHighlighther object.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Default implementation of LayeredHighlighter.LayerPainter that can
                 * be used for painting highlights.
                 * <p>
                 * As of 1.4 this field is final.
                 */
                // @ts-ignore
                readonly DefaultPainter: javax.swing.text.LayeredHighlighter.LayerPainter
                /**
                 * Renders the highlights.
                 * @param g the graphics context
                 */
                // @ts-ignore
                paint(g: java.awt.Graphics): void
                /**
                 * Called when the UI is being installed into the
                 * interface of a JTextComponent.  Installs the editor, and
                 * removes any existing highlights.
                 * @param c the editor component
                 * @see Highlighter#install
                 */
                // @ts-ignore
                install(c: javax.swing.text.JTextComponent): void
                /**
                 * Called when the UI is being removed from the interface of
                 * a JTextComponent.
                 * @param c the component
                 * @see Highlighter#deinstall
                 */
                // @ts-ignore
                deinstall(c: javax.swing.text.JTextComponent): void
                /**
                 * Adds a highlight to the view.  Returns a tag that can be used
                 * to refer to the highlight.
                 * @param p0   the start offset of the range to highlight &gt;= 0
                 * @param p1   the end offset of the range to highlight &gt;= p0
                 * @param p    the painter to use to actually render the highlight
                 * @return an object that can be used as a tag
                 *    to refer to the highlight
                 * @exception BadLocationException if the specified location is invalid
                 */
                // @ts-ignore
                addHighlight(p0: number /*int*/, p1: number /*int*/, p: javax.swing.text.Highlighter.HighlightPainter): java.lang.Object
                /**
                 * Removes a highlight from the view.
                 * @param tag the reference to the highlight
                 */
                // @ts-ignore
                removeHighlight(tag: any): void
                /**
                 * Removes all highlights.
                 */
                // @ts-ignore
                removeAllHighlights(): void
                /**
                 * Changes a highlight.
                 * @param tag the highlight tag
                 * @param p0 the beginning of the range &gt;= 0
                 * @param p1 the end of the range &gt;= p0
                 * @exception BadLocationException if the specified location is invalid
                 */
                // @ts-ignore
                changeHighlight(tag: any, p0: number /*int*/, p1: number /*int*/): void
                /**
                 * Makes a copy of the highlights.  Does not actually clone each highlight,
                 * but only makes references to them.
                 * @return the copy
                 * @see Highlighter#getHighlights
                 */
                // @ts-ignore
                getHighlights(): javax.swing.text.Highlighter.Highlight[]
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
                paintLayeredHighlights(g: java.awt.Graphics, p0: number /*int*/, p1: number /*int*/, viewBounds: java.awt.Shape, editor: javax.swing.text.JTextComponent, view: javax.swing.text.View): void
                /**
                 * If true, highlights are drawn as the Views draw the text. That is
                 * the Views will call into <code>paintLayeredHighlight</code> which
                 * will result in a rectangle being drawn before the text is drawn
                 * (if the offsets are in a highlighted region that is). For this to
                 * work the painter supplied must be an instance of
                 * LayeredHighlightPainter.
                 */
                // @ts-ignore
                setDrawsLayeredHighlights(newValue: boolean): void
                // @ts-ignore
                getDrawsLayeredHighlights(): boolean
            }
        }
    }
}
