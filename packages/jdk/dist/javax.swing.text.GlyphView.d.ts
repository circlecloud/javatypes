declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * A GlyphView is a styled chunk of text that represents a view
             * mapped over an element in the text model. This view is generally
             * responsible for displaying text glyphs using character level
             * attributes in some way.
             * An implementation of the GlyphPainter class is used to do the
             * actual rendering and model/view translations.  This separates
             * rendering from layout and management of the association with
             * the model.
             * <p>
             * The view supports breaking for the purpose of formatting.
             * The fragments produced by breaking share the view that has
             * primary responsibility for the element (i.e. they are nested
             * classes and carry only a small amount of state of their own)
             * so they can share its resources.
             * <p>
             * Since this view
             * represents text that may have tabs embedded in it, it implements the
             * <code>TabableView</code> interface.  Tabs will only be
             * expanded if this view is embedded in a container that does
             * tab expansion.  ParagraphView is an example of a container
             * that does tab expansion.
             * <p>
             * @since 1.3
             * @author Timothy Prinzing
             */
            // @ts-ignore
            class GlyphView extends javax.swing.text.View implements javax.swing.text.TabableView, java.lang.Cloneable {
                /**
                 * Constructs a new view wrapped on an element.
                 * @param elem the element
                 */
                // @ts-ignore
                constructor(elem: javax.swing.text.Element)
                /**
                 * Creates a shallow copy.  This is used by the
                 * createFragment and breakView methods.
                 * @return the copy
                 */
                // @ts-ignore
                clone(): any
                /**
                 * Fetch the currently installed glyph painter.
                 * If a painter has not yet been installed, and
                 * a default was not yet needed, null is returned.
                 */
                // @ts-ignore
                public getGlyphPainter(): javax.swing.text.GlyphView.GlyphPainter
                /**
                 * Sets the painter to use for rendering glyphs.
                 */
                // @ts-ignore
                public setGlyphPainter(p: javax.swing.text.GlyphView.GlyphPainter): void
                /**
                 * Fetch a reference to the text that occupies
                 * the given range.  This is normally used by
                 * the GlyphPainter to determine what characters
                 * it should render glyphs for.
                 * @param p0  the starting document offset &gt;= 0
                 * @param p1  the ending document offset &gt;= p0
                 * @return the <code>Segment</code> containing the text
                 */
                // @ts-ignore
                public getText(p0: number /*int*/, p1: number /*int*/): javax.swing.text.Segment
                /**
                 * Fetch the background color to use to render the
                 * glyphs.  If there is no background color, null should
                 * be returned.  This is implemented to call
                 * <code>StyledDocument.getBackground</code> if the associated
                 * document is a styled document, otherwise it returns null.
                 */
                // @ts-ignore
                public getBackground(): java.awt.Color
                /**
                 * Fetch the foreground color to use to render the
                 * glyphs.  If there is no foreground color, null should
                 * be returned.  This is implemented to call
                 * <code>StyledDocument.getBackground</code> if the associated
                 * document is a StyledDocument.  If the associated document
                 * is not a StyledDocument, the associated components foreground
                 * color is used.  If there is no associated component, null
                 * is returned.
                 */
                // @ts-ignore
                public getForeground(): java.awt.Color
                /**
                 * Fetch the font that the glyphs should be based
                 * upon.  This is implemented to call
                 * <code>StyledDocument.getFont</code> if the associated
                 * document is a StyledDocument.  If the associated document
                 * is not a StyledDocument, the associated components font
                 * is used.  If there is no associated component, null
                 * is returned.
                 */
                // @ts-ignore
                public getFont(): java.awt.Font
                /**
                 * Determine if the glyphs should be underlined.  If true,
                 * an underline should be drawn through the baseline.
                 */
                // @ts-ignore
                public isUnderline(): boolean
                /**
                 * Determine if the glyphs should have a strikethrough
                 * line.  If true, a line should be drawn through the center
                 * of the glyphs.
                 */
                // @ts-ignore
                public isStrikeThrough(): boolean
                /**
                 * Determine if the glyphs should be rendered as superscript.
                 */
                // @ts-ignore
                public isSubscript(): boolean
                /**
                 * Determine if the glyphs should be rendered as subscript.
                 */
                // @ts-ignore
                public isSuperscript(): boolean
                /**
                 * Fetch the TabExpander to use if tabs are present in this view.
                 */
                // @ts-ignore
                public getTabExpander(): javax.swing.text.TabExpander
                /**
                 * Check to see that a glyph painter exists.  If a painter
                 * doesn't exist, a default glyph painter will be installed.
                 */
                // @ts-ignore
                checkPainter(): void
                /**
                 * Determines the desired span when using the given
                 * tab expansion implementation.
                 * @param x the position the view would be located
                 *   at for the purpose of tab expansion &gt;= 0.
                 * @param e how to expand the tabs when encountered.
                 * @return the desired span &gt;= 0
                 * @see TabableView#getTabbedSpan
                 */
                // @ts-ignore
                public getTabbedSpan(x: number /*float*/, e: javax.swing.text.TabExpander): number /*float*/
                /**
                 * Determines the span along the same axis as tab
                 * expansion for a portion of the view.  This is
                 * intended for use by the TabExpander for cases
                 * where the tab expansion involves aligning the
                 * portion of text that doesn't have whitespace
                 * relative to the tab stop.  There is therefore
                 * an assumption that the range given does not
                 * contain tabs.
                 * <p>
                 * This method can be called while servicing the
                 * getTabbedSpan or getPreferredSize.  It has to
                 * arrange for its own text buffer to make the
                 * measurements.
                 * @param p0 the starting document offset &gt;= 0
                 * @param p1 the ending document offset &gt;= p0
                 * @return the span &gt;= 0
                 */
                // @ts-ignore
                public getPartialSpan(p0: number /*int*/, p1: number /*int*/): number /*float*/
                /**
                 * Fetches the portion of the model that this view is responsible for.
                 * @return the starting offset into the model
                 * @see View#getStartOffset
                 */
                // @ts-ignore
                public getStartOffset(): number /*int*/
                /**
                 * Fetches the portion of the model that this view is responsible for.
                 * @return the ending offset into the model
                 * @see View#getEndOffset
                 */
                // @ts-ignore
                public getEndOffset(): number /*int*/
                /**
                 * Renders a portion of a text style run.
                 * @param g the rendering surface to use
                 * @param a the allocated region to render into
                 */
                // @ts-ignore
                public paint(g: java.awt.Graphics, a: java.awt.Shape): void
                /**
                 * Determines the minimum span for this view along an axis.
                 * <p>This implementation returns the longest non-breakable area within
                 * the view as a minimum span for {@code View.X_AXIS}.</p>
                 * @param axis  may be either {#code View.X_AXIS} or {@code View.Y_AXIS}
                 * @return the minimum span the view can be rendered into
                 * @throws IllegalArgumentException if the {#code axis} parameter is invalid
                 * @see javax.swing.text.View#getMinimumSpan
                 */
                // @ts-ignore
                public getMinimumSpan(axis: number /*int*/): number /*float*/
                /**
                 * Determines the preferred span for this view along an
                 * axis.
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the span the view would like to be rendered into &gt;= 0.
                 *            Typically the view is told to render into the span
                 *            that is returned, although there is no guarantee.
                 *            The parent may choose to resize or break the view.
                 */
                // @ts-ignore
                public getPreferredSpan(axis: number /*int*/): number /*float*/
                /**
                 * Determines the desired alignment for this view along an
                 * axis.  For the label, the alignment is along the font
                 * baseline for the y axis, and the superclasses alignment
                 * along the x axis.
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @return the desired alignment.  This should be a value
                 *    between 0.0 and 1.0 inclusive, where 0 indicates alignment at the
                 *    origin and 1.0 indicates alignment to the full span
                 *    away from the origin.  An alignment of 0.5 would be the
                 *    center of the view.
                 */
                // @ts-ignore
                public getAlignment(axis: number /*int*/): number /*float*/
                /**
                 * Provides a mapping from the document model coordinate space
                 * to the coordinate space of the view mapped to it.
                 * @param pos the position to convert &gt;= 0
                 * @param a   the allocated region to render into
                 * @param b   either <code>Position.Bias.Forward</code>
                 *                 or <code>Position.Bias.Backward</code>
                 * @return the bounding box of the given position
                 * @exception BadLocationException  if the given position does not represent a
                 *    valid location in the associated document
                 * @see View#modelToView
                 */
                // @ts-ignore
                public modelToView(pos: number /*int*/, a: java.awt.Shape, b: javax.swing.text.Position.Bias): java.awt.Shape
                /**
                 * Provides a mapping from the view coordinate space to the logical
                 * coordinate space of the model.
                 * @param x the X coordinate &gt;= 0
                 * @param y the Y coordinate &gt;= 0
                 * @param a the allocated region to render into
                 * @param biasReturn either <code>Position.Bias.Forward</code>
                 *   or <code>Position.Bias.Backward</code> is returned as the
                 *   zero-th element of this array
                 * @return the location within the model that best represents the
                 *   given point of view &gt;= 0
                 * @see View#viewToModel
                 */
                // @ts-ignore
                public viewToModel(x: number /*float*/, y: number /*float*/, a: java.awt.Shape, biasReturn: javax.swing.text.Position.Bias[]): number /*int*/
                /**
                 * Determines how attractive a break opportunity in
                 * this view is.  This can be used for determining which
                 * view is the most attractive to call <code>breakView</code>
                 * on in the process of formatting.  The
                 * higher the weight, the more attractive the break.  A
                 * value equal to or lower than <code>View.BadBreakWeight</code>
                 * should not be considered for a break.  A value greater
                 * than or equal to <code>View.ForcedBreakWeight</code> should
                 * be broken.
                 * <p>
                 * This is implemented to forward to the superclass for
                 * the Y_AXIS.  Along the X_AXIS the following values
                 * may be returned.
                 * <dl>
                 * <dt><b>View.ExcellentBreakWeight</b>
                 * <dd>if there is whitespace proceeding the desired break
                 * location.
                 * <dt><b>View.BadBreakWeight</b>
                 * <dd>if the desired break location results in a break
                 * location of the starting offset.
                 * <dt><b>View.GoodBreakWeight</b>
                 * <dd>if the other conditions don't occur.
                 * </dl>
                 * This will normally result in the behavior of breaking
                 * on a whitespace location if one can be found, otherwise
                 * breaking between characters.
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @param pos the potential location of the start of the
                 *    broken view &gt;= 0.  This may be useful for calculating tab
                 *    positions.
                 * @param len specifies the relative length from <em>pos</em>
                 *    where a potential break is desired &gt;= 0.
                 * @return the weight, which should be a value between
                 *    View.ForcedBreakWeight and View.BadBreakWeight.
                 * @see LabelView
                 * @see ParagraphView
                 * @see View#BadBreakWeight
                 * @see View#GoodBreakWeight
                 * @see View#ExcellentBreakWeight
                 * @see View#ForcedBreakWeight
                 */
                // @ts-ignore
                public getBreakWeight(axis: number /*int*/, pos: number /*float*/, len: number /*float*/): number /*int*/
                /**
                 * Breaks this view on the given axis at the given length.
                 * This is implemented to attempt to break on a whitespace
                 * location, and returns a fragment with the whitespace at
                 * the end.  If a whitespace location can't be found, the
                 * nearest character is used.
                 * @param axis may be either View.X_AXIS or View.Y_AXIS
                 * @param p0 the location in the model where the
                 *   fragment should start it's representation &gt;= 0.
                 * @param pos the position along the axis that the
                 *   broken view would occupy &gt;= 0.  This may be useful for
                 *   things like tab calculations.
                 * @param len specifies the distance along the axis
                 *   where a potential break is desired &gt;= 0.
                 * @return the fragment of the view that represents the
                 *   given span, if the view can be broken.  If the view
                 *   doesn't support breaking behavior, the view itself is
                 *   returned.
                 * @see View#breakView
                 */
                // @ts-ignore
                public breakView(axis: number /*int*/, p0: number /*int*/, pos: number /*float*/, len: number /*float*/): javax.swing.text.View
                /**
                 * Creates a view that represents a portion of the element.
                 * This is potentially useful during formatting operations
                 * for taking measurements of fragments of the view.  If
                 * the view doesn't support fragmenting (the default), it
                 * should return itself.
                 * <p>
                 * This view does support fragmenting.  It is implemented
                 * to return a nested class that shares state in this view
                 * representing only a portion of the view.
                 * @param p0 the starting offset &gt;= 0.  This should be a value
                 *    greater or equal to the element starting offset and
                 *    less than the element ending offset.
                 * @param p1 the ending offset &gt; p0.  This should be a value
                 *    less than or equal to the elements end offset and
                 *    greater than the elements starting offset.
                 * @return the view fragment, or itself if the view doesn't
                 *    support breaking into fragments
                 * @see LabelView
                 */
                // @ts-ignore
                public createFragment(p0: number /*int*/, p1: number /*int*/): javax.swing.text.View
                /**
                 * Provides a way to determine the next visually represented model
                 * location that one might place a caret.  Some views may not be
                 * visible, they might not be in the same order found in the model, or
                 * they just might not allow access to some of the locations in the
                 * model.
                 * This method enables specifying a position to convert
                 * within the range of &gt;=0.  If the value is -1, a position
                 * will be calculated automatically.  If the value &lt; -1,
                 * the {@code BadLocationException} will be thrown.
                 * @param pos the position to convert
                 * @param a the allocated region to render into
                 * @param direction the direction from the current position that can
                 *   be thought of as the arrow keys typically found on a keyboard.
                 *   This may be SwingConstants.WEST, SwingConstants.EAST,
                 *   SwingConstants.NORTH, or SwingConstants.SOUTH.
                 * @return the location within the model that best represents the next
                 *   location visual position.
                 * @exception BadLocationException the given position is not a valid
                 *                                  position within the document
                 * @exception IllegalArgumentException for an invalid direction
                 */
                // @ts-ignore
                public getNextVisualPositionFrom(pos: number /*int*/, b: javax.swing.text.Position.Bias, a: java.awt.Shape, direction: number /*int*/, biasRet: javax.swing.text.Position.Bias[]): number /*int*/
                /**
                 * Gives notification that something was inserted into
                 * the document in a location that this view is responsible for.
                 * This is implemented to call preferenceChanged along the
                 * axis the glyphs are rendered.
                 * @param e the change information from the associated document
                 * @param a the current allocation of the view
                 * @param f the factory to use to rebuild if the view has children
                 * @see View#insertUpdate
                 */
                // @ts-ignore
                public insertUpdate(e: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                /**
                 * Gives notification that something was removed from the document
                 * in a location that this view is responsible for.
                 * This is implemented to call preferenceChanged along the
                 * axis the glyphs are rendered.
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
                 * This is implemented to call preferenceChanged along both the
                 * horizontal and vertical axis.
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
