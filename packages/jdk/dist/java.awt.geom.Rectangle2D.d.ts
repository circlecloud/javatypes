declare namespace java {
    namespace awt {
        namespace geom {
            /**
             * The <code>Rectangle2D</code> class describes a rectangle
             * defined by a location {@code (x,y)} and dimension
             * {@code (w x h)}.
             * <p>
             * This class is only the abstract superclass for all objects that
             * store a 2D rectangle.
             * The actual storage representation of the coordinates is left to
             * the subclass.
             * @author Jim Graham
             * @since 1.2
             */
            // @ts-ignore
            abstract class Rectangle2D extends java.awt.geom.RectangularShape {
                /**
                 * This is an abstract class that cannot be instantiated directly.
                 * Type-specific implementation subclasses are available for
                 * instantiation and provide a number of formats for storing
                 * the information necessary to satisfy the various accessor
                 * methods below.
                 * @see java.awt.geom.Rectangle2D.Float
                 * @see java.awt.geom.Rectangle2D.Double
                 * @see java.awt.Rectangle
                 * @since 1.2
                 */
                // @ts-ignore
                constructor()
                /**
                 * The bitmask that indicates that a point lies to the left of
                 * this <code>Rectangle2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public static readonly OUT_LEFT: number /*int*/
                /**
                 * The bitmask that indicates that a point lies above
                 * this <code>Rectangle2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public static readonly OUT_TOP: number /*int*/
                /**
                 * The bitmask that indicates that a point lies to the right of
                 * this <code>Rectangle2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public static readonly OUT_RIGHT: number /*int*/
                /**
                 * The bitmask that indicates that a point lies below
                 * this <code>Rectangle2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public static readonly OUT_BOTTOM: number /*int*/
                /**
                 * Sets the location and size of this <code>Rectangle2D</code>
                 * to the specified <code>double</code> values.
                 * @param x the X coordinate of the upper-left corner
                 *           of this <code>Rectangle2D</code>
                 * @param y the Y coordinate of the upper-left corner
                 *           of this <code>Rectangle2D</code>
                 * @param w the width of this <code>Rectangle2D</code>
                 * @param h the height of this <code>Rectangle2D</code>
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract setRect(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): void
                /**
                 * Sets this <code>Rectangle2D</code> to be the same as the specified
                 * <code>Rectangle2D</code>.
                 * @param r the specified <code>Rectangle2D</code>
                 * @since 1.2
                 */
                // @ts-ignore
                public setRect(r: java.awt.geom.Rectangle2D): void
                /**
                 * Tests if the specified line segment intersects the interior of this
                 * <code>Rectangle2D</code>.
                 * @param x1 the X coordinate of the start point of the specified
                 *            line segment
                 * @param y1 the Y coordinate of the start point of the specified
                 *            line segment
                 * @param x2 the X coordinate of the end point of the specified
                 *            line segment
                 * @param y2 the Y coordinate of the end point of the specified
                 *            line segment
                 * @return <code>true</code> if the specified line segment intersects
                 *  the interior of this <code>Rectangle2D</code>; <code>false</code>
                 *  otherwise.
                 * @since 1.2
                 */
                // @ts-ignore
                public intersectsLine(x1: number /*double*/, y1: number /*double*/, x2: number /*double*/, y2: number /*double*/): boolean
                /**
                 * Tests if the specified line segment intersects the interior of this
                 * <code>Rectangle2D</code>.
                 * @param l the specified {#link Line2D} to test for intersection
                 *  with the interior of this <code>Rectangle2D</code>
                 * @return <code>true</code> if the specified <code>Line2D</code>
                 *  intersects the interior of this <code>Rectangle2D</code>;
                 *  <code>false</code> otherwise.
                 * @since 1.2
                 */
                // @ts-ignore
                public intersectsLine(l: java.awt.geom.Line2D): boolean
                /**
                 * Determines where the specified coordinates lie with respect
                 * to this <code>Rectangle2D</code>.
                 * This method computes a binary OR of the appropriate mask values
                 * indicating, for each side of this <code>Rectangle2D</code>,
                 * whether or not the specified coordinates are on the same side
                 * of the edge as the rest of this <code>Rectangle2D</code>.
                 * @param x the specified X coordinate
                 * @param y the specified Y coordinate
                 * @return the logical OR of all appropriate out codes.
                 * @see #OUT_LEFT
                 * @see #OUT_TOP
                 * @see #OUT_RIGHT
                 * @see #OUT_BOTTOM
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract outcode(x: number /*double*/, y: number /*double*/): number /*int*/
                /**
                 * Determines where the specified {@link Point2D} lies with
                 * respect to this <code>Rectangle2D</code>.
                 * This method computes a binary OR of the appropriate mask values
                 * indicating, for each side of this <code>Rectangle2D</code>,
                 * whether or not the specified <code>Point2D</code> is on the same
                 * side of the edge as the rest of this <code>Rectangle2D</code>.
                 * @param p the specified <code>Point2D</code>
                 * @return the logical OR of all appropriate out codes.
                 * @see #OUT_LEFT
                 * @see #OUT_TOP
                 * @see #OUT_RIGHT
                 * @see #OUT_BOTTOM
                 * @since 1.2
                 */
                // @ts-ignore
                public outcode(p: java.awt.geom.Point2D): number /*int*/
                /**
                 * Sets the location and size of the outer bounds of this
                 * <code>Rectangle2D</code> to the specified rectangular values.
                 * @param x the X coordinate of the upper-left corner
                 *           of this <code>Rectangle2D</code>
                 * @param y the Y coordinate of the upper-left corner
                 *           of this <code>Rectangle2D</code>
                 * @param w the width of this <code>Rectangle2D</code>
                 * @param h the height of this <code>Rectangle2D</code>
                 * @since 1.2
                 */
                // @ts-ignore
                public setFrame(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): void
                /**
                 * {@inheritDoc}
                 * @since 1.2
                 */
                // @ts-ignore
                public getBounds2D(): java.awt.geom.Rectangle2D
                /**
                 * {@inheritDoc}
                 * @since 1.2
                 */
                // @ts-ignore
                public contains(x: number /*double*/, y: number /*double*/): boolean
                /**
                 * {@inheritDoc}
                 * @since 1.2
                 */
                // @ts-ignore
                public intersects(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): boolean
                /**
                 * {@inheritDoc}
                 * @since 1.2
                 */
                // @ts-ignore
                public contains(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): boolean
                /**
                 * Returns a new <code>Rectangle2D</code> object representing the
                 * intersection of this <code>Rectangle2D</code> with the specified
                 * <code>Rectangle2D</code>.
                 * @param r the <code>Rectangle2D</code> to be intersected with
                 *  this <code>Rectangle2D</code>
                 * @return the largest <code>Rectangle2D</code> contained in both
                 *           the specified <code>Rectangle2D</code> and in this
                 *           <code>Rectangle2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract createIntersection(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
                /**
                 * Intersects the pair of specified source <code>Rectangle2D</code>
                 * objects and puts the result into the specified destination
                 * <code>Rectangle2D</code> object.  One of the source rectangles
                 * can also be the destination to avoid creating a third Rectangle2D
                 * object, but in this case the original points of this source
                 * rectangle will be overwritten by this method.
                 * @param src1 the first of a pair of <code>Rectangle2D</code>
                 *  objects to be intersected with each other
                 * @param src2 the second of a pair of <code>Rectangle2D</code>
                 *  objects to be intersected with each other
                 * @param dest the <code>Rectangle2D</code> that holds the
                 *  results of the intersection of <code>src1</code> and
                 *  <code>src2</code>
                 * @since 1.2
                 */
                // @ts-ignore
                public static intersect(src1: java.awt.geom.Rectangle2D, src2: java.awt.geom.Rectangle2D, dest: java.awt.geom.Rectangle2D): void
                /**
                 * Returns a new <code>Rectangle2D</code> object representing the
                 * union of this <code>Rectangle2D</code> with the specified
                 * <code>Rectangle2D</code>.
                 * @param r the <code>Rectangle2D</code> to be combined with
                 *  this <code>Rectangle2D</code>
                 * @return the smallest <code>Rectangle2D</code> containing both
                 *  the specified <code>Rectangle2D</code> and this
                 *  <code>Rectangle2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract createUnion(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
                /**
                 * Unions the pair of source <code>Rectangle2D</code> objects
                 * and puts the result into the specified destination
                 * <code>Rectangle2D</code> object.  One of the source rectangles
                 * can also be the destination to avoid creating a third Rectangle2D
                 * object, but in this case the original points of this source
                 * rectangle will be overwritten by this method.
                 * @param src1 the first of a pair of <code>Rectangle2D</code>
                 *  objects to be combined with each other
                 * @param src2 the second of a pair of <code>Rectangle2D</code>
                 *  objects to be combined with each other
                 * @param dest the <code>Rectangle2D</code> that holds the
                 *  results of the union of <code>src1</code> and
                 *  <code>src2</code>
                 * @since 1.2
                 */
                // @ts-ignore
                public static union(src1: java.awt.geom.Rectangle2D, src2: java.awt.geom.Rectangle2D, dest: java.awt.geom.Rectangle2D): void
                /**
                 * Adds a point, specified by the double precision arguments
                 * <code>newx</code> and <code>newy</code>, to this
                 * <code>Rectangle2D</code>.  The resulting <code>Rectangle2D</code>
                 * is the smallest <code>Rectangle2D</code> that
                 * contains both the original <code>Rectangle2D</code> and the
                 * specified point.
                 * <p>
                 * After adding a point, a call to <code>contains</code> with the
                 * added point as an argument does not necessarily return
                 * <code>true</code>. The <code>contains</code> method does not
                 * return <code>true</code> for points on the right or bottom
                 * edges of a rectangle. Therefore, if the added point falls on
                 * the left or bottom edge of the enlarged rectangle,
                 * <code>contains</code> returns <code>false</code> for that point.
                 * @param newx the X coordinate of the new point
                 * @param newy the Y coordinate of the new point
                 * @since 1.2
                 */
                // @ts-ignore
                public add(newx: number /*double*/, newy: number /*double*/): void
                /**
                 * Adds the <code>Point2D</code> object <code>pt</code> to this
                 * <code>Rectangle2D</code>.
                 * The resulting <code>Rectangle2D</code> is the smallest
                 * <code>Rectangle2D</code> that contains both the original
                 * <code>Rectangle2D</code> and the specified <code>Point2D</code>.
                 * <p>
                 * After adding a point, a call to <code>contains</code> with the
                 * added point as an argument does not necessarily return
                 * <code>true</code>. The <code>contains</code>
                 * method does not return <code>true</code> for points on the right
                 * or bottom edges of a rectangle. Therefore, if the added point falls
                 * on the left or bottom edge of the enlarged rectangle,
                 * <code>contains</code> returns <code>false</code> for that point.
                 * @param pt the new <code>Point2D</code> to add to this
                 *  <code>Rectangle2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public add(pt: java.awt.geom.Point2D): void
                /**
                 * Adds a <code>Rectangle2D</code> object to this
                 * <code>Rectangle2D</code>.  The resulting <code>Rectangle2D</code>
                 * is the union of the two <code>Rectangle2D</code> objects.
                 * @param r the <code>Rectangle2D</code> to add to this
                 *  <code>Rectangle2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public add(r: java.awt.geom.Rectangle2D): void
                /**
                 * Returns an iteration object that defines the boundary of this
                 * <code>Rectangle2D</code>.
                 * The iterator for this class is multi-threaded safe, which means
                 * that this <code>Rectangle2D</code> class guarantees that
                 * modifications to the geometry of this <code>Rectangle2D</code>
                 * object do not affect any iterations of that geometry that
                 * are already in process.
                 * @param at an optional <code>AffineTransform</code> to be applied to
                 *  the coordinates as they are returned in the iteration, or
                 *  <code>null</code> if untransformed coordinates are desired
                 * @return the <code>PathIterator</code> object that returns the
                 *           geometry of the outline of this
                 *           <code>Rectangle2D</code>, one segment at a time.
                 * @since 1.2
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
                /**
                 * Returns an iteration object that defines the boundary of the
                 * flattened <code>Rectangle2D</code>.  Since rectangles are already
                 * flat, the <code>flatness</code> parameter is ignored.
                 * The iterator for this class is multi-threaded safe, which means
                 * that this <code>Rectangle2D</code> class guarantees that
                 * modifications to the geometry of this <code>Rectangle2D</code>
                 * object do not affect any iterations of that geometry that
                 * are already in process.
                 * @param at an optional <code>AffineTransform</code> to be applied to
                 *  the coordinates as they are returned in the iteration, or
                 *  <code>null</code> if untransformed coordinates are desired
                 * @param flatness the maximum distance that the line segments used to
                 *  approximate the curved segments are allowed to deviate from any
                 *  point on the original curve.  Since rectangles are already flat,
                 *  the <code>flatness</code> parameter is ignored.
                 * @return the <code>PathIterator</code> object that returns the
                 *           geometry of the outline of this
                 *           <code>Rectangle2D</code>, one segment at a time.
                 * @since 1.2
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform, flatness: number /*double*/): java.awt.geom.PathIterator
                /**
                 * Returns the hashcode for this <code>Rectangle2D</code>.
                 * @return the hashcode for this <code>Rectangle2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Determines whether or not the specified <code>Object</code> is
                 * equal to this <code>Rectangle2D</code>.  The specified
                 * <code>Object</code> is equal to this <code>Rectangle2D</code>
                 * if it is an instance of <code>Rectangle2D</code> and if its
                 * location and size are the same as this <code>Rectangle2D</code>.
                 * @param obj an <code>Object</code> to be compared with this
                 *  <code>Rectangle2D</code>.
                 * @return <code>true</code> if <code>obj</code> is an instance
                 *                      of <code>Rectangle2D</code> and has
                 *                      the same values; <code>false</code> otherwise.
                 * @since 1.2
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
            }
        }
    }
}
