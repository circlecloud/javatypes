declare namespace javax {
    namespace swing {
        namespace text {
            namespace GlyphView {
                /**
                 * A class to perform rendering of the glyphs.
                 * This can be implemented to be stateless, or
                 * to hold some information as a cache to
                 * facilitate faster rendering and model/view
                 * translation.  At a minimum, the GlyphPainter
                 * allows a View implementation to perform its
                 * duties independant of a particular version
                 * of JVM and selection of capabilities (i.e.
                 * shaping for i18n, etc).
                 * @since 1.3
                 */
                // @ts-ignore
                abstract class GlyphPainter extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Determine the span the glyphs given a start location
                     * (for tab expansion).
                     */
                    // @ts-ignore
                    public abstract getSpan(v: javax.swing.text.GlyphView, p0: number /*int*/, p1: number /*int*/, e: javax.swing.text.TabExpander, x: number /*float*/): number /*float*/
                    // @ts-ignore
                    public abstract getHeight(v: javax.swing.text.GlyphView): number /*float*/
                    // @ts-ignore
                    public abstract getAscent(v: javax.swing.text.GlyphView): number /*float*/
                    // @ts-ignore
                    public abstract getDescent(v: javax.swing.text.GlyphView): number /*float*/
                    /**
                     * Paint the glyphs representing the given range.
                     */
                    // @ts-ignore
                    public abstract paint(v: javax.swing.text.GlyphView, g: java.awt.Graphics, a: java.awt.Shape, p0: number /*int*/, p1: number /*int*/): void
                    /**
                     * Provides a mapping from the document model coordinate space
                     * to the coordinate space of the view mapped to it.
                     * This is shared by the broken views.
                     * @param v     the <code>GlyphView</code> containing the
                     *               destination coordinate space
                     * @param pos   the position to convert
                     * @param bias  either <code>Position.Bias.Forward</code>
                     *                   or <code>Position.Bias.Backward</code>
                     * @param a     Bounds of the View
                     * @return the bounding box of the given position
                     * @exception BadLocationException  if the given position does not represent a
                     *    valid location in the associated document
                     * @see View#modelToView
                     */
                    // @ts-ignore
                    public abstract modelToView(v: javax.swing.text.GlyphView, pos: number /*int*/, bias: javax.swing.text.Position.Bias, a: java.awt.Shape): java.awt.Shape
                    /**
                     * Provides a mapping from the view coordinate space to the logical
                     * coordinate space of the model.
                     * @param v          the <code>GlyphView</code> to provide a mapping for
                     * @param x          the X coordinate
                     * @param y          the Y coordinate
                     * @param a          the allocated region to render into
                     * @param biasReturn either <code>Position.Bias.Forward</code>
                     *                    or <code>Position.Bias.Backward</code>
                     *                    is returned as the zero-th element of this array
                     * @return the location within the model that best represents the
                     *          given point of view
                     * @see View#viewToModel
                     */
                    // @ts-ignore
                    public abstract viewToModel(v: javax.swing.text.GlyphView, x: number /*float*/, y: number /*float*/, a: java.awt.Shape, biasReturn: javax.swing.text.Position.Bias[]): number /*int*/
                    /**
                     * Determines the model location that represents the
                     * maximum advance that fits within the given span.
                     * This could be used to break the given view.  The result
                     * should be a location just shy of the given advance.  This
                     * differs from viewToModel which returns the closest
                     * position which might be proud of the maximum advance.
                     * @param v the view to find the model location to break at.
                     * @param p0 the location in the model where the
                     *   fragment should start it's representation &gt;= 0.
                     * @param x  the graphic location along the axis that the
                     *   broken view would occupy &gt;= 0.  This may be useful for
                     *   things like tab calculations.
                     * @param len specifies the distance into the view
                     *   where a potential break is desired &gt;= 0.
                     * @return the maximum model location possible for a break.
                     * @see View#breakView
                     */
                    // @ts-ignore
                    public abstract getBoundedPosition(v: javax.swing.text.GlyphView, p0: number /*int*/, x: number /*float*/, len: number /*float*/): number /*int*/
                    /**
                     * Create a painter to use for the given GlyphView.  If
                     * the painter carries state it can create another painter
                     * to represent a new GlyphView that is being created.  If
                     * the painter doesn't hold any significant state, it can
                     * return itself.  The default behavior is to return itself.
                     * @param v  the <code>GlyphView</code> to provide a painter for
                     * @param p0 the starting document offset &gt;= 0
                     * @param p1 the ending document offset &gt;= p0
                     */
                    // @ts-ignore
                    public getPainter(v: javax.swing.text.GlyphView, p0: number /*int*/, p1: number /*int*/): javax.swing.text.GlyphView.GlyphPainter
                    /**
                     * Provides a way to determine the next visually represented model
                     * location that one might place a caret.  Some views may not be
                     * visible, they might not be in the same order found in the model, or
                     * they just might not allow access to some of the locations in the
                     * model.
                     * @param v the view to use
                     * @param pos the position to convert &gt;= 0
                     * @param b   either <code>Position.Bias.Forward</code>
                     *                 or <code>Position.Bias.Backward</code>
                     * @param a the allocated region to render into
                     * @param direction the direction from the current position that can
                     *   be thought of as the arrow keys typically found on a keyboard.
                     *   This may be SwingConstants.WEST, SwingConstants.EAST,
                     *   SwingConstants.NORTH, or SwingConstants.SOUTH.
                     * @param biasRet  either <code>Position.Bias.Forward</code>
                     *                  or <code>Position.Bias.Backward</code>
                     *                  is returned as the zero-th element of this array
                     * @return the location within the model that best represents the next
                     *   location visual position.
                     * @exception BadLocationException
                     * @exception IllegalArgumentException for an invalid direction
                     */
                    // @ts-ignore
                    public getNextVisualPositionFrom(v: javax.swing.text.GlyphView, pos: number /*int*/, b: javax.swing.text.Position.Bias, a: java.awt.Shape, direction: number /*int*/, biasRet: javax.swing.text.Position.Bias[]): number /*int*/
                }
            }
        }
    }
}
