declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * View of plain text (text with only one font and color)
             * that does line-wrapping.  This view expects that its
             * associated element has child elements that represent
             * the lines it should be wrapping.  It is implemented
             * as a vertical box that contains logical line views.
             * The logical line views are nested classes that render
             * the logical line as multiple physical line if the logical
             * line is too wide to fit within the allocation.  The
             * line views draw upon the outer class for its state
             * to reduce their memory requirements.
             * <p>
             * The line views do all of their rendering through the
             * <code>drawLine</code> method which in turn does all of
             * its rendering through the <code>drawSelectedText</code>
             * and <code>drawUnselectedText</code> methods.  This
             * enables subclasses to easily specialize the rendering
             * without concern for the layout aspects.
             * @author Timothy Prinzing
             * @see View
             */
            // @ts-ignore
            class WrappedPlainView extends javax.swing.text.BoxView implements javax.swing.text.TabExpander {
                /**
                 * Creates a new WrappedPlainView.  Lines will be wrapped
                 * on character boundaries.
                 * @param elem the element underlying the view
                 */
                // @ts-ignore
                constructor(elem: javax.swing.text.Element)
                /**
                 * Creates a new WrappedPlainView.  Lines can be wrapped on
                 * either character or word boundaries depending upon the
                 * setting of the wordWrap parameter.
                 * @param elem the element underlying the view
                 * @param wordWrap should lines be wrapped on word boundaries?
                 */
                // @ts-ignore
                constructor(elem: javax.swing.text.Element, wordWrap: boolean)
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
                 * @param p0 the starting document location to use &gt;= 0
                 * @param p1 the ending document location to use &gt;= p1
                 * @param g the graphics context
                 * @param x the starting X position &gt;= 0
                 * @param y the starting Y position &gt;= 0
                 * @see #drawUnselectedText
                 * @see #drawSelectedText
                 */
                // @ts-ignore
                drawLine(p0: number /*int*/, p1: number /*int*/, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/): void
                /**
                 * Renders the given range in the model as normal unselected
                 * text.
                 * @param g the graphics context
                 * @param x the starting X coordinate &gt;= 0
                 * @param y the starting Y coordinate &gt;= 0
                 * @param p0 the beginning position in the model &gt;= 0
                 * @param p1 the ending position in the model &gt;= p0
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
                 * @param p1 the ending position in the model &gt;= p0
                 * @return the location of the end of the range.
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
                 * This is called by the nested wrapped line
                 * views to determine the break location.  This can
                 * be reimplemented to alter the breaking behavior.
                 * It will either break at word or character boundaries
                 * depending upon the break argument given at
                 * construction.
                 */
                // @ts-ignore
                calculateBreakPosition(p0: number /*int*/, p1: number /*int*/): number /*int*/
                /**
                 * Loads all of the children to initialize the view.
                 * This is called by the <code>setParent</code> method.
                 * Subclasses can reimplement this to initialize their
                 * child views in a different manner.  The default
                 * implementation creates a child view for each
                 * child element.
                 * @param f the view factory
                 */
                // @ts-ignore
                loadChildren(f: javax.swing.text.ViewFactory): void
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
                 * Renders using the given rendering surface and area
                 * on that surface.  This is implemented to stash the
                 * selection positions, selection colors, and font
                 * metrics for the nested lines to use.
                 * @param g the rendering surface to use
                 * @param a the allocated region to render into
                 * @see View#paint
                 */
                // @ts-ignore
                public paint(g: java.awt.Graphics, a: java.awt.Shape): void
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
                 * Determines the preferred span for this view along an
                 * axis.  This is implemented to provide the superclass
                 * behavior after first making sure that the current font
                 * metrics are cached (for the nested lines which use
                 * the metrics to determine the height of the potentially
                 * wrapped lines).
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the span the view would like to be rendered into.
                 *            Typically the view is told to render into the span
                 *            that is returned, although there is no guarantee.
                 *            The parent may choose to resize or break the view.
                 * @see View#getPreferredSpan
                 */
                // @ts-ignore
                public getPreferredSpan(axis: number /*int*/): number /*float*/
                /**
                 * Determines the minimum span for this view along an
                 * axis.  This is implemented to provide the superclass
                 * behavior after first making sure that the current font
                 * metrics are cached (for the nested lines which use
                 * the metrics to determine the height of the potentially
                 * wrapped lines).
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the span the view would like to be rendered into.
                 *            Typically the view is told to render into the span
                 *            that is returned, although there is no guarantee.
                 *            The parent may choose to resize or break the view.
                 * @see View#getMinimumSpan
                 */
                // @ts-ignore
                public getMinimumSpan(axis: number /*int*/): number /*float*/
                /**
                 * Determines the maximum span for this view along an
                 * axis.  This is implemented to provide the superclass
                 * behavior after first making sure that the current font
                 * metrics are cached (for the nested lines which use
                 * the metrics to determine the height of the potentially
                 * wrapped lines).
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the span the view would like to be rendered into.
                 *            Typically the view is told to render into the span
                 *            that is returned, although there is no guarantee.
                 *            The parent may choose to resize or break the view.
                 * @see View#getMaximumSpan
                 */
                // @ts-ignore
                public getMaximumSpan(axis: number /*int*/): number /*float*/
                /**
                 * Gives notification that something was inserted into the
                 * document in a location that this view is responsible for.
                 * This is implemented to simply update the children.
                 * @param e the change information from the associated document
                 * @param a the current allocation of the view
                 * @param f the factory to use to rebuild if the view has children
                 * @see View#insertUpdate
                 */
                // @ts-ignore
                public insertUpdate(e: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                /**
                 * Gives notification that something was removed from the
                 * document in a location that this view is responsible for.
                 * This is implemented to simply update the children.
                 * @param e the change information from the associated document
                 * @param a the current allocation of the view
                 * @param f the factory to use to rebuild if the view has children
                 * @see View#removeUpdate
                 */
                // @ts-ignore
                public removeUpdate(e: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                /**
                 * Gives notification from the document that attributes were changed
                 * in a location that this view is responsible for.
                 * @param e the change information from the associated document
                 * @param a the current allocation of the view
                 * @param f the factory to use to rebuild if the view has children
                 * @see View#changedUpdate
                 */
                // @ts-ignore
                public changedUpdate(e: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
            }
        }
    }
}
