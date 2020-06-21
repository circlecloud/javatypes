declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * Implements View interface for a simple multi-line text view
             * that has text in one font and color.  The view represents each
             * child element as a line of text.
             * @author Timothy Prinzing
             * @see View
             */
            // @ts-ignore
            class PlainView extends javax.swing.text.View implements javax.swing.text.TabExpander {
                /**
                 * Constructs a new PlainView wrapped on an element.
                 * @param elem the element
                 */
                // @ts-ignore
                constructor(elem: javax.swing.text.Element)
                /**
                 * Font metrics for the current font.
                 */
                // @ts-ignore
                metrics: java.awt.FontMetrics
                /**
                 * Returns the tab size set for the document, defaulting to 8.
                 * @return the tab size
                 */
                // @ts-ignore
                getTabSize(): number /*int*/
                /**
                 * Renders a line of text, suppressing whitespace at the end
                 * and expanding any tabs.  This is implemented to make calls
                 * to the methods <code>drawUnselectedText</code> and
                 * <code>drawSelectedText</code> so that the way selected and
                 * unselected text are rendered can be customized.
                 * @param lineIndex the line to draw &gt;= 0
                 * @param g the <code>Graphics</code> context
                 * @param x the starting X position &gt;= 0
                 * @param y the starting Y position &gt;= 0
                 * @see #drawUnselectedText
                 * @see #drawSelectedText
                 */
                // @ts-ignore
                drawLine(lineIndex: number /*int*/, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/): void
                /**
                 * Renders the given range in the model as normal unselected
                 * text.  Uses the foreground or disabled color to render the text.
                 * @param g the graphics context
                 * @param x the starting X coordinate &gt;= 0
                 * @param y the starting Y coordinate &gt;= 0
                 * @param p0 the beginning position in the model &gt;= 0
                 * @param p1 the ending position in the model &gt;= 0
                 * @return the X location of the end of the range &gt;= 0
                 * @exception BadLocationException if the range is invalid
                 */
                // @ts-ignore
                drawUnselectedText(g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, p0: number /*int*/, p1: number /*int*/): number /*int*/
                /**
                 * Renders the given range in the model as selected text.  This
                 * is implemented to render the text in the color specified in
                 * the hosting component.  It assumes the highlighter will render
                 * the selected background.
                 * @param g the graphics context
                 * @param x the starting X coordinate &gt;= 0
                 * @param y the starting Y coordinate &gt;= 0
                 * @param p0 the beginning position in the model &gt;= 0
                 * @param p1 the ending position in the model &gt;= 0
                 * @return the location of the end of the range
                 * @exception BadLocationException if the range is invalid
                 */
                // @ts-ignore
                drawSelectedText(g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, p0: number /*int*/, p1: number /*int*/): number /*int*/
                /**
                 * Gives access to a buffer that can be used to fetch
                 * text from the associated document.
                 * @return the buffer
                 */
                // @ts-ignore
                getLineBuffer(): javax.swing.text.Segment
                /**
                 * Checks to see if the font metrics and longest line
                 * are up-to-date.
                 * @since 1.4
                 */
                // @ts-ignore
                updateMetrics(): void
                /**
                 * Determines the preferred span for this view along an
                 * axis.
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the span the view would like to be rendered into &gt;= 0.
                 *            Typically the view is told to render into the span
                 *            that is returned, although there is no guarantee.
                 *            The parent may choose to resize or break the view.
                 * @exception IllegalArgumentException for an invalid axis
                 */
                // @ts-ignore
                public getPreferredSpan(axis: number /*int*/): number /*float*/
                /**
                 * Renders using the given rendering surface and area on that surface.
                 * The view may need to do layout and create child views to enable
                 * itself to render into the given allocation.
                 * @param g the rendering surface to use
                 * @param a the allocated region to render into
                 * @see View#paint
                 */
                // @ts-ignore
                public paint(g: java.awt.Graphics, a: java.awt.Shape): void
                /**
                 * Provides a mapping from the document model coordinate space
                 * to the coordinate space of the view mapped to it.
                 * @param pos the position to convert &gt;= 0
                 * @param a the allocated region to render into
                 * @return the bounding box of the given position
                 * @exception BadLocationException  if the given position does not
                 *    represent a valid location in the associated document
                 * @see View#modelToView
                 */
                // @ts-ignore
                public modelToView(pos: number /*int*/, a: java.awt.Shape, b: javax.swing.text.Position.Bias): java.awt.Shape
                /**
                 * Provides a mapping from the view coordinate space to the logical
                 * coordinate space of the model.
                 * @param fx the X coordinate &gt;= 0
                 * @param fy the Y coordinate &gt;= 0
                 * @param a the allocated region to render into
                 * @return the location within the model that best represents the
                 *   given point in the view &gt;= 0
                 * @see View#viewToModel
                 */
                // @ts-ignore
                public viewToModel(fx: number /*float*/, fy: number /*float*/, a: java.awt.Shape, bias: javax.swing.text.Position.Bias[]): number /*int*/
                /**
                 * Gives notification that something was inserted into the document
                 * in a location that this view is responsible for.
                 * @param changes the change information from the associated document
                 * @param a the current allocation of the view
                 * @param f the factory to use to rebuild if the view has children
                 * @see View#insertUpdate
                 */
                // @ts-ignore
                public insertUpdate(changes: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                /**
                 * Gives notification that something was removed from the document
                 * in a location that this view is responsible for.
                 * @param changes the change information from the associated document
                 * @param a the current allocation of the view
                 * @param f the factory to use to rebuild if the view has children
                 * @see View#removeUpdate
                 */
                // @ts-ignore
                public removeUpdate(changes: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                /**
                 * Gives notification from the document that attributes were changed
                 * in a location that this view is responsible for.
                 * @param changes the change information from the associated document
                 * @param a the current allocation of the view
                 * @param f the factory to use to rebuild if the view has children
                 * @see View#changedUpdate
                 */
                // @ts-ignore
                public changedUpdate(changes: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                /**
                 * Sets the size of the view.  This should cause
                 * layout of the view along the given axis, if it
                 * has any layout duties.
                 * @param width the width &gt;= 0
                 * @param height the height &gt;= 0
                 */
                // @ts-ignore
                public setSize(width: number /*float*/, height: number /*float*/): void
                /**
                 * Returns the next tab stop position after a given reference position.
                 * This implementation does not support things like centering so it
                 * ignores the tabOffset argument.
                 * @param x the current position &gt;= 0
                 * @param tabOffset the position within the text stream
                 *    that the tab occurred at &gt;= 0.
                 * @return the tab stop, measured in points &gt;= 0
                 */
                // @ts-ignore
                public nextTabStop(x: number /*float*/, tabOffset: number /*int*/): number /*float*/
                /**
                 * Repaint the region of change covered by the given document
                 * event.  Damages the line that begins the range to cover
                 * the case when the insert/remove is only on one line.
                 * If lines are added or removed, damages the whole
                 * view.  The longest line is checked to see if it has
                 * changed.
                 * @since 1.4
                 */
                // @ts-ignore
                updateDamage(changes: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                /**
                 * Repaint the given line range.
                 * @param host the component hosting the view (used to call repaint)
                 * @param a  the region allocated for the view to render into
                 * @param line0 the starting line number to repaint.  This must
                 *    be a valid line number in the model.
                 * @param line1 the ending line number to repaint.  This must
                 *    be a valid line number in the model.
                 * @since 1.4
                 */
                // @ts-ignore
                damageLineRange(line0: number /*int*/, line1: number /*int*/, a: java.awt.Shape, host: java.awt.Component): void
                /**
                 * Determine the rectangle that represents the given line.
                 * @param a  the region allocated for the view to render into
                 * @param line the line number to find the region of.  This must
                 *    be a valid line number in the model.
                 * @since 1.4
                 */
                // @ts-ignore
                lineToRect(a: java.awt.Shape, line: number /*int*/): java.awt.Rectangle
            }
        }
    }
}
