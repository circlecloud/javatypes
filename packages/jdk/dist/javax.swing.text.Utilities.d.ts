declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * A collection of methods to deal with various text
             * related activities.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            class Utilities extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Draws the given text, expanding any tabs that are contained
                 * using the given tab expansion technique.  This particular
                 * implementation renders in a 1.1 style coordinate system
                 * where ints are used and 72dpi is assumed.
                 * @param s  the source of the text
                 * @param x  the X origin &gt;= 0
                 * @param y  the Y origin &gt;= 0
                 * @param g  the graphics context
                 * @param e  how to expand the tabs.  If this value is null,
                 *    tabs will be expanded as a space character.
                 * @param startOffset starting offset of the text in the document &gt;= 0
                 * @return the X location at the end of the rendered text
                 */
                // @ts-ignore
                public static drawTabbedText(s: javax.swing.text.Segment, x: number /*int*/, y: number /*int*/, g: java.awt.Graphics, e: javax.swing.text.TabExpander, startOffset: number /*int*/): number /*int*/
                /**
                 * Determines the width of the given segment of text taking tabs
                 * into consideration.  This is implemented in a 1.1 style coordinate
                 * system where ints are used and 72dpi is assumed.
                 * @param s  the source of the text
                 * @param metrics the font metrics to use for the calculation
                 * @param x  the X origin &gt;= 0
                 * @param e  how to expand the tabs.  If this value is null,
                 *    tabs will be expanded as a space character.
                 * @param startOffset starting offset of the text in the document &gt;= 0
                 * @return the width of the text
                 */
                // @ts-ignore
                public static getTabbedTextWidth(s: javax.swing.text.Segment, metrics: java.awt.FontMetrics, x: number /*int*/, e: javax.swing.text.TabExpander, startOffset: number /*int*/): number /*int*/
                /**
                 * Determines the relative offset into the given text that
                 * best represents the given span in the view coordinate
                 * system.  This is implemented in a 1.1 style coordinate
                 * system where ints are used and 72dpi is assumed.
                 * @param s  the source of the text
                 * @param metrics the font metrics to use for the calculation
                 * @param x0 the starting view location representing the start
                 *    of the given text &gt;= 0.
                 * @param x  the target view location to translate to an
                 *    offset into the text &gt;= 0.
                 * @param e  how to expand the tabs.  If this value is null,
                 *    tabs will be expanded as a space character.
                 * @param startOffset starting offset of the text in the document &gt;= 0
                 * @return the offset into the text &gt;= 0
                 */
                // @ts-ignore
                public static getTabbedTextOffset(s: javax.swing.text.Segment, metrics: java.awt.FontMetrics, x0: number /*int*/, x: number /*int*/, e: javax.swing.text.TabExpander, startOffset: number /*int*/): number /*int*/
                // @ts-ignore
                public static getTabbedTextOffset(s: javax.swing.text.Segment, metrics: java.awt.FontMetrics, x0: number /*int*/, x: number /*int*/, e: javax.swing.text.TabExpander, startOffset: number /*int*/, round: boolean): number /*int*/
                /**
                 * Determine where to break the given text to fit
                 * within the given span. This tries to find a word boundary.
                 * @param s  the source of the text
                 * @param metrics the font metrics to use for the calculation
                 * @param x0 the starting view location representing the start
                 *    of the given text.
                 * @param x  the target view location to translate to an
                 *    offset into the text.
                 * @param e  how to expand the tabs.  If this value is null,
                 *    tabs will be expanded as a space character.
                 * @param startOffset starting offset in the document of the text
                 * @return the offset into the given text
                 */
                // @ts-ignore
                public static getBreakLocation(s: javax.swing.text.Segment, metrics: java.awt.FontMetrics, x0: number /*int*/, x: number /*int*/, e: javax.swing.text.TabExpander, startOffset: number /*int*/): number /*int*/
                /**
                 * Determines the starting row model position of the row that contains
                 * the specified model position.  The component given must have a
                 * size to compute the result.  If the component doesn't have a size
                 * a value of -1 will be returned.
                 * @param c the editor
                 * @param offs the offset in the document &gt;= 0
                 * @return the position &gt;= 0 if the request can be computed, otherwise
                 *   a value of -1 will be returned.
                 * @exception BadLocationException if the offset is out of range
                 */
                // @ts-ignore
                public static getRowStart(c: javax.swing.text.JTextComponent, offs: number /*int*/): number /*int*/
                /**
                 * Determines the ending row model position of the row that contains
                 * the specified model position.  The component given must have a
                 * size to compute the result.  If the component doesn't have a size
                 * a value of -1 will be returned.
                 * @param c the editor
                 * @param offs the offset in the document &gt;= 0
                 * @return the position &gt;= 0 if the request can be computed, otherwise
                 *   a value of -1 will be returned.
                 * @exception BadLocationException if the offset is out of range
                 */
                // @ts-ignore
                public static getRowEnd(c: javax.swing.text.JTextComponent, offs: number /*int*/): number /*int*/
                /**
                 * Determines the position in the model that is closest to the given
                 * view location in the row above.  The component given must have a
                 * size to compute the result.  If the component doesn't have a size
                 * a value of -1 will be returned.
                 * @param c the editor
                 * @param offs the offset in the document &gt;= 0
                 * @param x the X coordinate &gt;= 0
                 * @return the position &gt;= 0 if the request can be computed, otherwise
                 *   a value of -1 will be returned.
                 * @exception BadLocationException if the offset is out of range
                 */
                // @ts-ignore
                public static getPositionAbove(c: javax.swing.text.JTextComponent, offs: number /*int*/, x: number /*int*/): number /*int*/
                /**
                 * Determines the position in the model that is closest to the given
                 * view location in the row below.  The component given must have a
                 * size to compute the result.  If the component doesn't have a size
                 * a value of -1 will be returned.
                 * @param c the editor
                 * @param offs the offset in the document &gt;= 0
                 * @param x the X coordinate &gt;= 0
                 * @return the position &gt;= 0 if the request can be computed, otherwise
                 *   a value of -1 will be returned.
                 * @exception BadLocationException if the offset is out of range
                 */
                // @ts-ignore
                public static getPositionBelow(c: javax.swing.text.JTextComponent, offs: number /*int*/, x: number /*int*/): number /*int*/
                /**
                 * Determines the start of a word for the given model location.
                 * Uses BreakIterator.getWordInstance() to actually get the words.
                 * @param c the editor
                 * @param offs the offset in the document &gt;= 0
                 * @return the location in the model of the word start &gt;= 0
                 * @exception BadLocationException if the offset is out of range
                 */
                // @ts-ignore
                public static getWordStart(c: javax.swing.text.JTextComponent, offs: number /*int*/): number /*int*/
                /**
                 * Determines the end of a word for the given location.
                 * Uses BreakIterator.getWordInstance() to actually get the words.
                 * @param c the editor
                 * @param offs the offset in the document &gt;= 0
                 * @return the location in the model of the word end &gt;= 0
                 * @exception BadLocationException if the offset is out of range
                 */
                // @ts-ignore
                public static getWordEnd(c: javax.swing.text.JTextComponent, offs: number /*int*/): number /*int*/
                /**
                 * Determines the start of the next word for the given location.
                 * Uses BreakIterator.getWordInstance() to actually get the words.
                 * @param c the editor
                 * @param offs the offset in the document &gt;= 0
                 * @return the location in the model of the word start &gt;= 0
                 * @exception BadLocationException if the offset is out of range
                 */
                // @ts-ignore
                public static getNextWord(c: javax.swing.text.JTextComponent, offs: number /*int*/): number /*int*/
                /**
                 * Determine the start of the prev word for the given location.
                 * Uses BreakIterator.getWordInstance() to actually get the words.
                 * @param c the editor
                 * @param offs the offset in the document &gt;= 0
                 * @return the location in the model of the word start &gt;= 0
                 * @exception BadLocationException if the offset is out of range
                 */
                // @ts-ignore
                public static getPreviousWord(c: javax.swing.text.JTextComponent, offs: number /*int*/): number /*int*/
                /**
                 * Determines the element to use for a paragraph/line.
                 * @param c the editor
                 * @param offs the starting offset in the document &gt;= 0
                 * @return the element
                 */
                // @ts-ignore
                public static getParagraphElement(c: javax.swing.text.JTextComponent, offs: number /*int*/): javax.swing.text.Element
            }
        }
    }
}
