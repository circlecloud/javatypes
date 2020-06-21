declare namespace java {
    namespace awt {
        namespace geom {
            /**
             * <code>RectangularShape</code> is the base class for a number of
             * {@link Shape} objects whose geometry is defined by a rectangular frame.
             * This class does not directly specify any specific geometry by
             * itself, but merely provides manipulation methods inherited by
             * a whole category of <code>Shape</code> objects.
             * The manipulation methods provided by this class can be used to
             * query and modify the rectangular frame, which provides a reference
             * for the subclasses to define their geometry.
             * @author Jim Graham
             * @since 1.2
             */
            // @ts-ignore
            abstract class RectangularShape extends java.lang.Object implements java.awt.Shape, java.lang.Cloneable {
                /**
                 * This is an abstract class that cannot be instantiated directly.
                 * @see Arc2D
                 * @see Ellipse2D
                 * @see Rectangle2D
                 * @see RoundRectangle2D
                 * @since 1.2
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the X coordinate of the upper-left corner of
                 * the framing rectangle in <code>double</code> precision.
                 * @return the X coordinate of the upper-left corner of
                 *  the framing rectangle.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getX(): number /*double*/
                /**
                 * Returns the Y coordinate of the upper-left corner of
                 * the framing rectangle in <code>double</code> precision.
                 * @return the Y coordinate of the upper-left corner of
                 *  the framing rectangle.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getY(): number /*double*/
                /**
                 * Returns the width of the framing rectangle in
                 * <code>double</code> precision.
                 * @return the width of the framing rectangle.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getWidth(): number /*double*/
                /**
                 * Returns the height of the framing rectangle
                 * in <code>double</code> precision.
                 * @return the height of the framing rectangle.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getHeight(): number /*double*/
                /**
                 * Returns the smallest X coordinate of the framing
                 * rectangle of the <code>Shape</code> in <code>double</code>
                 * precision.
                 * @return the smallest X coordinate of the framing
                 *           rectangle of the <code>Shape</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public getMinX(): number /*double*/
                /**
                 * Returns the smallest Y coordinate of the framing
                 * rectangle of the <code>Shape</code> in <code>double</code>
                 * precision.
                 * @return the smallest Y coordinate of the framing
                 *           rectangle of the <code>Shape</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public getMinY(): number /*double*/
                /**
                 * Returns the largest X coordinate of the framing
                 * rectangle of the <code>Shape</code> in <code>double</code>
                 * precision.
                 * @return the largest X coordinate of the framing
                 *           rectangle of the <code>Shape</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public getMaxX(): number /*double*/
                /**
                 * Returns the largest Y coordinate of the framing
                 * rectangle of the <code>Shape</code> in <code>double</code>
                 * precision.
                 * @return the largest Y coordinate of the framing
                 *           rectangle of the <code>Shape</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public getMaxY(): number /*double*/
                /**
                 * Returns the X coordinate of the center of the framing
                 * rectangle of the <code>Shape</code> in <code>double</code>
                 * precision.
                 * @return the X coordinate of the center of the framing rectangle
                 *           of the <code>Shape</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public getCenterX(): number /*double*/
                /**
                 * Returns the Y coordinate of the center of the framing
                 * rectangle of the <code>Shape</code> in <code>double</code>
                 * precision.
                 * @return the Y coordinate of the center of the framing rectangle
                 *           of the <code>Shape</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public getCenterY(): number /*double*/
                /**
                 * Returns the framing {@link Rectangle2D}
                 * that defines the overall shape of this object.
                 * @return a <code>Rectangle2D</code>, specified in
                 *  <code>double</code> coordinates.
                 * @see #setFrame(double, double, double, double)
                 * @see #setFrame(Point2D, Dimension2D)
                 * @see #setFrame(Rectangle2D)
                 * @since 1.2
                 */
                // @ts-ignore
                public getFrame(): java.awt.geom.Rectangle2D
                /**
                 * Determines whether the <code>RectangularShape</code> is empty.
                 * When the <code>RectangularShape</code> is empty, it encloses no
                 * area.
                 * @return <code>true</code> if the <code>RectangularShape</code> is empty;
                 *           <code>false</code> otherwise.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract isEmpty(): boolean
                /**
                 * Sets the location and size of the framing rectangle of this
                 * <code>Shape</code> to the specified rectangular values.
                 * @param x the X coordinate of the upper-left corner of the
                 *           specified rectangular shape
                 * @param y the Y coordinate of the upper-left corner of the
                 *           specified rectangular shape
                 * @param w the width of the specified rectangular shape
                 * @param h the height of the specified rectangular shape
                 * @see #getFrame
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract setFrame(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): void
                /**
                 * Sets the location and size of the framing rectangle of this
                 * <code>Shape</code> to the specified {@link Point2D} and
                 * {@link Dimension2D}, respectively.  The framing rectangle is used
                 * by the subclasses of <code>RectangularShape</code> to define
                 * their geometry.
                 * @param loc the specified <code>Point2D</code>
                 * @param size the specified <code>Dimension2D</code>
                 * @see #getFrame
                 * @since 1.2
                 */
                // @ts-ignore
                public setFrame(loc: java.awt.geom.Point2D, size: java.awt.geom.Dimension2D): void
                /**
                 * Sets the framing rectangle of this <code>Shape</code> to
                 * be the specified <code>Rectangle2D</code>.  The framing rectangle is
                 * used by the subclasses of <code>RectangularShape</code> to define
                 * their geometry.
                 * @param r the specified <code>Rectangle2D</code>
                 * @see #getFrame
                 * @since 1.2
                 */
                // @ts-ignore
                public setFrame(r: java.awt.geom.Rectangle2D): void
                /**
                 * Sets the diagonal of the framing rectangle of this <code>Shape</code>
                 * based on the two specified coordinates.  The framing rectangle is
                 * used by the subclasses of <code>RectangularShape</code> to define
                 * their geometry.
                 * @param x1 the X coordinate of the start point of the specified diagonal
                 * @param y1 the Y coordinate of the start point of the specified diagonal
                 * @param x2 the X coordinate of the end point of the specified diagonal
                 * @param y2 the Y coordinate of the end point of the specified diagonal
                 * @since 1.2
                 */
                // @ts-ignore
                public setFrameFromDiagonal(x1: number /*double*/, y1: number /*double*/, x2: number /*double*/, y2: number /*double*/): void
                /**
                 * Sets the diagonal of the framing rectangle of this <code>Shape</code>
                 * based on two specified <code>Point2D</code> objects.  The framing
                 * rectangle is used by the subclasses of <code>RectangularShape</code>
                 * to define their geometry.
                 * @param p1 the start <code>Point2D</code> of the specified diagonal
                 * @param p2 the end <code>Point2D</code> of the specified diagonal
                 * @since 1.2
                 */
                // @ts-ignore
                public setFrameFromDiagonal(p1: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void
                /**
                 * Sets the framing rectangle of this <code>Shape</code>
                 * based on the specified center point coordinates and corner point
                 * coordinates.  The framing rectangle is used by the subclasses of
                 * <code>RectangularShape</code> to define their geometry.
                 * @param centerX the X coordinate of the specified center point
                 * @param centerY the Y coordinate of the specified center point
                 * @param cornerX the X coordinate of the specified corner point
                 * @param cornerY the Y coordinate of the specified corner point
                 * @since 1.2
                 */
                // @ts-ignore
                public setFrameFromCenter(centerX: number /*double*/, centerY: number /*double*/, cornerX: number /*double*/, cornerY: number /*double*/): void
                /**
                 * Sets the framing rectangle of this <code>Shape</code> based on a
                 * specified center <code>Point2D</code> and corner
                 * <code>Point2D</code>.  The framing rectangle is used by the subclasses
                 * of <code>RectangularShape</code> to define their geometry.
                 * @param center the specified center <code>Point2D</code>
                 * @param corner the specified corner <code>Point2D</code>
                 * @since 1.2
                 */
                // @ts-ignore
                public setFrameFromCenter(center: java.awt.geom.Point2D, corner: java.awt.geom.Point2D): void
                /**
                 * {@inheritDoc}
                 * @since 1.2
                 */
                // @ts-ignore
                public contains(p: java.awt.geom.Point2D): boolean
                /**
                 * {@inheritDoc}
                 * @since 1.2
                 */
                // @ts-ignore
                public intersects(r: java.awt.geom.Rectangle2D): boolean
                /**
                 * {@inheritDoc}
                 * @since 1.2
                 */
                // @ts-ignore
                public contains(r: java.awt.geom.Rectangle2D): boolean
                /**
                 * {@inheritDoc}
                 * @since 1.2
                 */
                // @ts-ignore
                public getBounds(): java.awt.Rectangle
                /**
                 * Returns an iterator object that iterates along the
                 * <code>Shape</code> object's boundary and provides access to a
                 * flattened view of the outline of the <code>Shape</code>
                 * object's geometry.
                 * <p>
                 * Only SEG_MOVETO, SEG_LINETO, and SEG_CLOSE point types will
                 * be returned by the iterator.
                 * <p>
                 * The amount of subdivision of the curved segments is controlled
                 * by the <code>flatness</code> parameter, which specifies the
                 * maximum distance that any point on the unflattened transformed
                 * curve can deviate from the returned flattened path segments.
                 * An optional {@link AffineTransform} can
                 * be specified so that the coordinates returned in the iteration are
                 * transformed accordingly.
                 * @param at an optional <code>AffineTransform</code> to be applied to the
                 *           coordinates as they are returned in the iteration,
                 *           or <code>null</code> if untransformed coordinates are desired.
                 * @param flatness the maximum distance that the line segments used to
                 *           approximate the curved segments are allowed to deviate
                 *           from any point on the original curve
                 * @return a <code>PathIterator</code> object that provides access to
                 *           the <code>Shape</code> object's flattened geometry.
                 * @since 1.2
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform, flatness: number /*double*/): java.awt.geom.PathIterator
                /**
                 * Creates a new object of the same class and with the same
                 * contents as this object.
                 * @return a clone of this instance.
                 * @exception OutOfMemoryError            if there is not enough memory.
                 * @see java.lang.Cloneable
                 * @since 1.2
                 */
                // @ts-ignore
                public clone(): any
            }
        }
    }
}
