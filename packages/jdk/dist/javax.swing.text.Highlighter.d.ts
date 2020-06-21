declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * An interface for an object that allows one to mark up the background
             * with colored areas.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            interface Highlighter {
                /**
                 * Called when the UI is being installed into the
                 * interface of a JTextComponent.  This can be used
                 * to gain access to the model that is being navigated
                 * by the implementation of this interface.
                 * @param c the JTextComponent editor
                 */
                // @ts-ignore
                install(c: javax.swing.text.JTextComponent): void
                /**
                 * Called when the UI is being removed from the
                 * interface of a JTextComponent.  This is used to
                 * unregister any listeners that were attached.
                 * @param c the JTextComponent editor
                 */
                // @ts-ignore
                deinstall(c: javax.swing.text.JTextComponent): void
                /**
                 * Renders the highlights.
                 * @param g the graphics context.
                 */
                // @ts-ignore
                paint(g: java.awt.Graphics): void
                /**
                 * Adds a highlight to the view.  Returns a tag that can be used
                 * to refer to the highlight.
                 * @param p0 the beginning of the range &gt;= 0
                 * @param p1 the end of the range &gt;= p0
                 * @param p the painter to use for the actual highlighting
                 * @return an object that refers to the highlight
                 * @exception BadLocationException for an invalid range specification
                 */
                // @ts-ignore
                addHighlight(p0: number /*int*/, p1: number /*int*/, p: javax.swing.text.Highlighter.HighlightPainter): any
                /**
                 * Removes a highlight from the view.
                 * @param tag  which highlight to remove
                 */
                // @ts-ignore
                removeHighlight(tag: java.lang.Object | any): void
                /**
                 * Removes all highlights this highlighter is responsible for.
                 */
                // @ts-ignore
                removeAllHighlights(): void
                /**
                 * Changes the given highlight to span a different portion of
                 * the document.  This may be more efficient than a remove/add
                 * when a selection is expanding/shrinking (such as a sweep
                 * with a mouse) by damaging only what changed.
                 * @param tag  which highlight to change
                 * @param p0 the beginning of the range &gt;= 0
                 * @param p1 the end of the range &gt;= p0
                 * @exception BadLocationException for an invalid range specification
                 */
                // @ts-ignore
                changeHighlight(tag: java.lang.Object | any, p0: number /*int*/, p1: number /*int*/): void
                /**
                 * Fetches the current list of highlights.
                 * @return the highlight list
                 */
                // @ts-ignore
                getHighlights(): javax.swing.text.Highlighter.Highlight[]
            }
        }
    }
}
