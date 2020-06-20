declare namespace java {
    namespace awt {
        namespace font {
            /**
             * This class is used with the CHAR_REPLACEMENT attribute.
             * <p>
             * The <code>GraphicAttribute</code> class represents a graphic embedded
             * in text. Clients subclass this class to implement their own char
             * replacement graphics.  Clients wishing to embed shapes and images in
             * text need not subclass this class.  Instead, clients can use the
             * {@link ShapeGraphicAttribute} and {@link ImageGraphicAttribute}
             * classes.
             * <p>
             * Subclasses must ensure that their objects are immutable once they
             * are constructed.  Mutating a <code>GraphicAttribute</code> that
             * is used in a {@link TextLayout} results in undefined behavior from the
             * <code>TextLayout</code>.
             */
            // @ts-ignore
            class GraphicAttribute extends java.lang.Object {
                /**
                 * Constructs a <code>GraphicAttribute</code>.
                 * Subclasses use this to define the alignment of the graphic.
                 * @param alignment an int representing one of the
                 *  <code>GraphicAttribute</code> alignment fields
                 * @throws IllegalArgumentException if alignment is not one of the
                 *  five defined values.
                 */
                // @ts-ignore
                constructor(alignment: number /*int*/)
                /**
                 * Aligns top of graphic to top of line.
                 */
                // @ts-ignore
                readonly TOP_ALIGNMENT: number /*int*/
                /**
                 * Aligns bottom of graphic to bottom of line.
                 */
                // @ts-ignore
                readonly BOTTOM_ALIGNMENT: number /*int*/
                /**
                 * Aligns origin of graphic to roman baseline of line.
                 */
                // @ts-ignore
                readonly ROMAN_BASELINE: number /*int*/
                /**
                 * Aligns origin of graphic to center baseline of line.
                 */
                // @ts-ignore
                readonly CENTER_BASELINE: number /*int*/
                /**
                 * Aligns origin of graphic to hanging baseline of line.
                 */
                // @ts-ignore
                readonly HANGING_BASELINE: number /*int*/
                /**
                 * Returns the ascent of this <code>GraphicAttribute</code>.  A
                 * graphic can be rendered above its ascent.
                 * @return the ascent of this <code>GraphicAttribute</code>.
                 * @see #getBounds()
                 */
                // @ts-ignore
                abstract getAscent(): float
                /**
                 * Returns the descent of this <code>GraphicAttribute</code>.  A
                 * graphic can be rendered below its descent.
                 * @return the descent of this <code>GraphicAttribute</code>.
                 * @see #getBounds()
                 */
                // @ts-ignore
                abstract getDescent(): float
                /**
                 * Returns the advance of this <code>GraphicAttribute</code>.  The
                 * <code>GraphicAttribute</code> object's advance is the distance
                 * from the point at which the graphic is rendered and the point where
                 * the next character or graphic is rendered.  A graphic can be
                 * rendered beyond its advance
                 * @return the advance of this <code>GraphicAttribute</code>.
                 * @see #getBounds()
                 */
                // @ts-ignore
                abstract getAdvance(): float
                /**
                 * Returns a {@link Rectangle2D} that encloses all of the
                 * bits drawn by this <code>GraphicAttribute</code> relative to the
                 * rendering position.
                 * A graphic may be rendered beyond its origin, ascent, descent,
                 * or advance;  but if it is, this method's implementation must
                 * indicate where the graphic is rendered.
                 * Default bounds is the rectangle (0, -ascent, advance, ascent+descent).
                 * @return a <code>Rectangle2D</code> that encloses all of the bits
                 *  rendered by this <code>GraphicAttribute</code>.
                 */
                // @ts-ignore
                getBounds(): java.awt.geom.Rectangle2D
                /**
                 * Return a {@link java.awt.Shape} that represents the region that
                 * this <code>GraphicAttribute</code> renders.  This is used when a
                 * {@link TextLayout} is requested to return the outline of the text.
                 * The (untransformed) shape must not extend outside the rectangular
                 * bounds returned by <code>getBounds</code>.
                 * The default implementation returns the rectangle returned by
                 * {@link #getBounds}, transformed by the provided {@link AffineTransform}
                 * if present.
                 * @param tx an optional {#link AffineTransform} to apply to the
                 *    outline of this <code>GraphicAttribute</code>. This can be null.
                 * @return a <code>Shape</code> representing this graphic attribute,
                 *    suitable for stroking or filling.
                 * @since 1.6
                 */
                // @ts-ignore
                getOutline(tx: java.awt.geom.AffineTransform): java.awt.Shape
                /**
                 * Renders this <code>GraphicAttribute</code> at the specified
                 * location.
                 * @param graphics the {#link Graphics2D} into which to render the
                 *  graphic
                 * @param x the user-space X coordinate where the graphic is rendered
                 * @param y the user-space Y coordinate where the graphic is rendered
                 */
                // @ts-ignore
                abstract draw(graphics: java.awt.Graphics2D, x: number /*float*/, y: number /*float*/): void
                /**
                 * Returns the alignment of this <code>GraphicAttribute</code>.
                 * Alignment can be to a particular baseline, or to the absolute top
                 * or bottom of a line.
                 * @return the alignment of this <code>GraphicAttribute</code>.
                 */
                // @ts-ignore
                getAlignment(): int
                /**
                 * Returns the justification information for this
                 * <code>GraphicAttribute</code>.  Subclasses
                 * can override this method to provide different justification
                 * information.
                 * @return a {#link GlyphJustificationInfo} object that contains the
                 *  justification information for this <code>GraphicAttribute</code>.
                 */
                // @ts-ignore
                getJustificationInfo(): java.awt.font.GlyphJustificationInfo
            }
        }
    }
}
