declare namespace java {
    namespace awt {
        namespace font {
            /**
             * The <code>ShapeGraphicAttribute</code> class is an implementation of
             * {@link GraphicAttribute} that draws shapes in a {@link TextLayout}.
             * @see GraphicAttribute
             */
            // @ts-ignore
            class ShapeGraphicAttribute extends java.awt.font.GraphicAttribute {
                /**
                 * Constructs a <code>ShapeGraphicAttribute</code> for the specified
                 * {@link Shape}.
                 * @param shape the <code>Shape</code> to render.  The
                 *  <code>Shape</code> is rendered with its origin at the origin of
                 *  this <code>ShapeGraphicAttribute</code> in the
                 *  host <code>TextLayout</code>.  This object maintains a reference to
                 *  <code>shape</code>.
                 * @param alignment one of the alignments from this
                 *  <code>ShapeGraphicAttribute</code>.
                 * @param stroke <code>true</code> if the <code>Shape</code> should be
                 *  stroked; <code>false</code> if the <code>Shape</code> should be
                 *  filled.
                 */
                // @ts-ignore
                constructor(shape: java.awt.Shape, alignment: number /*int*/, stroke: boolean)
                /**
                 * A key indicating the shape should be stroked with a 1-pixel wide stroke.
                 */
                // @ts-ignore
                public static readonly STROKE: boolean
                /**
                 * A key indicating the shape should be filled.
                 */
                // @ts-ignore
                public static readonly FILL: boolean
                /**
                 * Returns the ascent of this <code>ShapeGraphicAttribute</code>.  The
                 * ascent of a <code>ShapeGraphicAttribute</code> is the positive
                 * distance from the origin of its <code>Shape</code> to the top of
                 * bounds of its <code>Shape</code>.
                 * @return the ascent of this <code>ShapeGraphicAttribute</code>.
                 */
                // @ts-ignore
                public getAscent(): number /*float*/
                /**
                 * Returns the descent of this <code>ShapeGraphicAttribute</code>.
                 * The descent of a <code>ShapeGraphicAttribute</code> is the distance
                 * from the origin of its <code>Shape</code> to the bottom of the
                 * bounds of its <code>Shape</code>.
                 * @return the descent of this <code>ShapeGraphicAttribute</code>.
                 */
                // @ts-ignore
                public getDescent(): number /*float*/
                /**
                 * Returns the advance of this <code>ShapeGraphicAttribute</code>.
                 * The advance of a <code>ShapeGraphicAttribute</code> is the distance
                 * from the origin of its <code>Shape</code> to the right side of the
                 * bounds of its <code>Shape</code>.
                 * @return the advance of this <code>ShapeGraphicAttribute</code>.
                 */
                // @ts-ignore
                public getAdvance(): number /*float*/
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public draw(graphics: java.awt.Graphics2D, x: number /*float*/, y: number /*float*/): void
                /**
                 * Returns a {@link Rectangle2D} that encloses all of the
                 * bits drawn by this <code>ShapeGraphicAttribute</code> relative to
                 * the rendering position.  A graphic can be rendered beyond its
                 * origin, ascent, descent, or advance;  but if it does, this method's
                 * implementation should indicate where the graphic is rendered.
                 * @return a <code>Rectangle2D</code> that encloses all of the bits
                 *  rendered by this <code>ShapeGraphicAttribute</code>.
                 */
                // @ts-ignore
                public getBounds(): java.awt.geom.Rectangle2D
                /**
                 * Return a {@link java.awt.Shape} that represents the region that
                 * this <code>ShapeGraphicAttribute</code> renders.  This is used when a
                 * {@link TextLayout} is requested to return the outline of the text.
                 * The (untransformed) shape must not extend outside the rectangular
                 * bounds returned by <code>getBounds</code>.
                 * @param tx an optional {#link AffineTransform} to apply to the
                 *    this <code>ShapeGraphicAttribute</code>. This can be null.
                 * @return the <code>Shape</code> representing this graphic attribute,
                 *    suitable for stroking or filling.
                 * @since 1.6
                 */
                // @ts-ignore
                public getOutline(tx: java.awt.geom.AffineTransform): java.awt.Shape
                /**
                 * Returns a hashcode for this <code>ShapeGraphicAttribute</code>.
                 * @return a hash code value for this
                 *  <code>ShapeGraphicAttribute</code>.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Compares this <code>ShapeGraphicAttribute</code> to the specified
                 * <code>Object</code>.
                 * @param rhs the <code>Object</code> to compare for equality
                 * @return <code>true</code> if this
                 *  <code>ShapeGraphicAttribute</code> equals <code>rhs</code>;
                 *  <code>false</code> otherwise.
                 */
                // @ts-ignore
                public equals(rhs: java.lang.Object | any): boolean
                /**
                 * Compares this <code>ShapeGraphicAttribute</code> to the specified
                 * <code>ShapeGraphicAttribute</code>.
                 * @param rhs the <code>ShapeGraphicAttribute</code> to compare for
                 *  equality
                 * @return <code>true</code> if this
                 *  <code>ShapeGraphicAttribute</code> equals <code>rhs</code>;
                 *  <code>false</code> otherwise.
                 */
                // @ts-ignore
                public equals(rhs: java.awt.font.ShapeGraphicAttribute): boolean
            }
        }
    }
}
