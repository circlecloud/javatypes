declare namespace java {
    namespace awt {
        namespace geom {
            /**
             * The <code>CubicCurve2D</code> class defines a cubic parametric curve
             * segment in {@code (x,y)} coordinate space.
             * <p>
             * This class is only the abstract superclass for all objects which
             * store a 2D cubic curve segment.
             * The actual storage representation of the coordinates is left to
             * the subclass.
             * @author Jim Graham
             * @since 1.2
             */
            // @ts-ignore
            abstract class CubicCurve2D extends java.lang.Object implements java.awt.Shape, java.lang.Cloneable {
                /**
                 * This is an abstract class that cannot be instantiated directly.
                 * Type-specific implementation subclasses are available for
                 * instantiation and provide a number of formats for storing
                 * the information necessary to satisfy the various accessor
                 * methods below.
                 * @see java.awt.geom.CubicCurve2D.Float
                 * @see java.awt.geom.CubicCurve2D.Double
                 * @since 1.2
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the X coordinate of the start point in double precision.
                 * @return the X coordinate of the start point of the
                 *          {#code CubicCurve2D}.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getX1(): number /*double*/
                /**
                 * Returns the Y coordinate of the start point in double precision.
                 * @return the Y coordinate of the start point of the
                 *          {#code CubicCurve2D}.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getY1(): number /*double*/
                /**
                 * Returns the start point.
                 * @return a {#code Point2D} that is the start point of
                 *          the {@code CubicCurve2D}.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getP1(): java.awt.geom.Point2D
                /**
                 * Returns the X coordinate of the first control point in double precision.
                 * @return the X coordinate of the first control point of the
                 *          {#code CubicCurve2D}.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getCtrlX1(): number /*double*/
                /**
                 * Returns the Y coordinate of the first control point in double precision.
                 * @return the Y coordinate of the first control point of the
                 *          {#code CubicCurve2D}.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getCtrlY1(): number /*double*/
                /**
                 * Returns the first control point.
                 * @return a {#code Point2D} that is the first control point of
                 *          the {@code CubicCurve2D}.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getCtrlP1(): java.awt.geom.Point2D
                /**
                 * Returns the X coordinate of the second control point
                 * in double precision.
                 * @return the X coordinate of the second control point of the
                 *          {#code CubicCurve2D}.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getCtrlX2(): number /*double*/
                /**
                 * Returns the Y coordinate of the second control point
                 * in double precision.
                 * @return the Y coordinate of the second control point of the
                 *          {#code CubicCurve2D}.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getCtrlY2(): number /*double*/
                /**
                 * Returns the second control point.
                 * @return a {#code Point2D} that is the second control point of
                 *          the {@code CubicCurve2D}.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getCtrlP2(): java.awt.geom.Point2D
                /**
                 * Returns the X coordinate of the end point in double precision.
                 * @return the X coordinate of the end point of the
                 *          {#code CubicCurve2D}.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getX2(): number /*double*/
                /**
                 * Returns the Y coordinate of the end point in double precision.
                 * @return the Y coordinate of the end point of the
                 *          {#code CubicCurve2D}.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getY2(): number /*double*/
                /**
                 * Returns the end point.
                 * @return a {#code Point2D} that is the end point of
                 *          the {@code CubicCurve2D}.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getP2(): java.awt.geom.Point2D
                /**
                 * Sets the location of the end points and control points of this curve
                 * to the specified double coordinates.
                 * @param x1 the X coordinate used to set the start point
                 *            of this {#code CubicCurve2D}
                 * @param y1 the Y coordinate used to set the start point
                 *            of this {#code CubicCurve2D}
                 * @param ctrlx1 the X coordinate used to set the first control point
                 *                of this {#code CubicCurve2D}
                 * @param ctrly1 the Y coordinate used to set the first control point
                 *                of this {#code CubicCurve2D}
                 * @param ctrlx2 the X coordinate used to set the second control point
                 *                of this {#code CubicCurve2D}
                 * @param ctrly2 the Y coordinate used to set the second control point
                 *                of this {#code CubicCurve2D}
                 * @param x2 the X coordinate used to set the end point
                 *            of this {#code CubicCurve2D}
                 * @param y2 the Y coordinate used to set the end point
                 *            of this {#code CubicCurve2D}
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract setCurve(x1: number /*double*/, y1: number /*double*/, ctrlx1: number /*double*/, ctrly1: number /*double*/, ctrlx2: number /*double*/, ctrly2: number /*double*/, x2: number /*double*/, y2: number /*double*/): void
                /**
                 * Sets the location of the end points and control points of this curve
                 * to the double coordinates at the specified offset in the specified
                 * array.
                 * @param coords a double array containing coordinates
                 * @param offset the index of <code>coords</code> from which to begin
                 *           setting the end points and control points of this curve
                 *           to the coordinates contained in <code>coords</code>
                 * @since 1.2
                 */
                // @ts-ignore
                public setCurve(coords: number /*double*/[], offset: number /*int*/): void
                /**
                 * Sets the location of the end points and control points of this curve
                 * to the specified <code>Point2D</code> coordinates.
                 * @param p1 the first specified <code>Point2D</code> used to set the
                 *           start point of this curve
                 * @param cp1 the second specified <code>Point2D</code> used to set the
                 *           first control point of this curve
                 * @param cp2 the third specified <code>Point2D</code> used to set the
                 *           second control point of this curve
                 * @param p2 the fourth specified <code>Point2D</code> used to set the
                 *           end point of this curve
                 * @since 1.2
                 */
                // @ts-ignore
                public setCurve(p1: java.awt.geom.Point2D, cp1: java.awt.geom.Point2D, cp2: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void
                /**
                 * Sets the location of the end points and control points of this curve
                 * to the coordinates of the <code>Point2D</code> objects at the specified
                 * offset in the specified array.
                 * @param pts an array of <code>Point2D</code> objects
                 * @param offset  the index of <code>pts</code> from which to begin setting
                 *           the end points and control points of this curve to the
                 *           points contained in <code>pts</code>
                 * @since 1.2
                 */
                // @ts-ignore
                public setCurve(pts: java.awt.geom.Point2D[], offset: number /*int*/): void
                /**
                 * Sets the location of the end points and control points of this curve
                 * to the same as those in the specified <code>CubicCurve2D</code>.
                 * @param c the specified <code>CubicCurve2D</code>
                 * @since 1.2
                 */
                // @ts-ignore
                public setCurve(c: java.awt.geom.CubicCurve2D): void
                /**
                 * Returns the square of the flatness of the cubic curve specified
                 * by the indicated control points. The flatness is the maximum distance
                 * of a control point from the line connecting the end points.
                 * @param x1 the X coordinate that specifies the start point
                 *            of a {#code CubicCurve2D}
                 * @param y1 the Y coordinate that specifies the start point
                 *            of a {#code CubicCurve2D}
                 * @param ctrlx1 the X coordinate that specifies the first control point
                 *                of a {#code CubicCurve2D}
                 * @param ctrly1 the Y coordinate that specifies the first control point
                 *                of a {#code CubicCurve2D}
                 * @param ctrlx2 the X coordinate that specifies the second control point
                 *                of a {#code CubicCurve2D}
                 * @param ctrly2 the Y coordinate that specifies the second control point
                 *                of a {#code CubicCurve2D}
                 * @param x2 the X coordinate that specifies the end point
                 *            of a {#code CubicCurve2D}
                 * @param y2 the Y coordinate that specifies the end point
                 *            of a {#code CubicCurve2D}
                 * @return the square of the flatness of the {#code CubicCurve2D}
                 *           represented by the specified coordinates.
                 * @since 1.2
                 */
                // @ts-ignore
                public static getFlatnessSq(x1: number /*double*/, y1: number /*double*/, ctrlx1: number /*double*/, ctrly1: number /*double*/, ctrlx2: number /*double*/, ctrly2: number /*double*/, x2: number /*double*/, y2: number /*double*/): number /*double*/
                /**
                 * Returns the flatness of the cubic curve specified
                 * by the indicated control points. The flatness is the maximum distance
                 * of a control point from the line connecting the end points.
                 * @param x1 the X coordinate that specifies the start point
                 *            of a {#code CubicCurve2D}
                 * @param y1 the Y coordinate that specifies the start point
                 *            of a {#code CubicCurve2D}
                 * @param ctrlx1 the X coordinate that specifies the first control point
                 *                of a {#code CubicCurve2D}
                 * @param ctrly1 the Y coordinate that specifies the first control point
                 *                of a {#code CubicCurve2D}
                 * @param ctrlx2 the X coordinate that specifies the second control point
                 *                of a {#code CubicCurve2D}
                 * @param ctrly2 the Y coordinate that specifies the second control point
                 *                of a {#code CubicCurve2D}
                 * @param x2 the X coordinate that specifies the end point
                 *            of a {#code CubicCurve2D}
                 * @param y2 the Y coordinate that specifies the end point
                 *            of a {#code CubicCurve2D}
                 * @return the flatness of the {#code CubicCurve2D}
                 *           represented by the specified coordinates.
                 * @since 1.2
                 */
                // @ts-ignore
                public static getFlatness(x1: number /*double*/, y1: number /*double*/, ctrlx1: number /*double*/, ctrly1: number /*double*/, ctrlx2: number /*double*/, ctrly2: number /*double*/, x2: number /*double*/, y2: number /*double*/): number /*double*/
                /**
                 * Returns the square of the flatness of the cubic curve specified
                 * by the control points stored in the indicated array at the
                 * indicated index. The flatness is the maximum distance
                 * of a control point from the line connecting the end points.
                 * @param coords an array containing coordinates
                 * @param offset the index of <code>coords</code> from which to begin
                 *           getting the end points and control points of the curve
                 * @return the square of the flatness of the <code>CubicCurve2D</code>
                 *           specified by the coordinates in <code>coords</code> at
                 *           the specified offset.
                 * @since 1.2
                 */
                // @ts-ignore
                public static getFlatnessSq(coords: number /*double*/[], offset: number /*int*/): number /*double*/
                /**
                 * Returns the flatness of the cubic curve specified
                 * by the control points stored in the indicated array at the
                 * indicated index.  The flatness is the maximum distance
                 * of a control point from the line connecting the end points.
                 * @param coords an array containing coordinates
                 * @param offset the index of <code>coords</code> from which to begin
                 *           getting the end points and control points of the curve
                 * @return the flatness of the <code>CubicCurve2D</code>
                 *           specified by the coordinates in <code>coords</code> at
                 *           the specified offset.
                 * @since 1.2
                 */
                // @ts-ignore
                public static getFlatness(coords: number /*double*/[], offset: number /*int*/): number /*double*/
                /**
                 * Returns the square of the flatness of this curve.  The flatness is the
                 * maximum distance of a control point from the line connecting the
                 * end points.
                 * @return the square of the flatness of this curve.
                 * @since 1.2
                 */
                // @ts-ignore
                public getFlatnessSq(): number /*double*/
                /**
                 * Returns the flatness of this curve.  The flatness is the
                 * maximum distance of a control point from the line connecting the
                 * end points.
                 * @return the flatness of this curve.
                 * @since 1.2
                 */
                // @ts-ignore
                public getFlatness(): number /*double*/
                /**
                 * Subdivides this cubic curve and stores the resulting two
                 * subdivided curves into the left and right curve parameters.
                 * Either or both of the left and right objects may be the same
                 * as this object or null.
                 * @param left the cubic curve object for storing for the left or
                 *  first half of the subdivided curve
                 * @param right the cubic curve object for storing for the right or
                 *  second half of the subdivided curve
                 * @since 1.2
                 */
                // @ts-ignore
                public subdivide(left: java.awt.geom.CubicCurve2D, right: java.awt.geom.CubicCurve2D): void
                /**
                 * Subdivides the cubic curve specified by the <code>src</code> parameter
                 * and stores the resulting two subdivided curves into the
                 * <code>left</code> and <code>right</code> curve parameters.
                 * Either or both of the <code>left</code> and <code>right</code> objects
                 * may be the same as the <code>src</code> object or <code>null</code>.
                 * @param src the cubic curve to be subdivided
                 * @param left the cubic curve object for storing the left or
                 *  first half of the subdivided curve
                 * @param right the cubic curve object for storing the right or
                 *  second half of the subdivided curve
                 * @since 1.2
                 */
                // @ts-ignore
                public static subdivide(src: java.awt.geom.CubicCurve2D, left: java.awt.geom.CubicCurve2D, right: java.awt.geom.CubicCurve2D): void
                /**
                 * Subdivides the cubic curve specified by the coordinates
                 * stored in the <code>src</code> array at indices <code>srcoff</code>
                 * through (<code>srcoff</code>&nbsp;+&nbsp;7) and stores the
                 * resulting two subdivided curves into the two result arrays at the
                 * corresponding indices.
                 * Either or both of the <code>left</code> and <code>right</code>
                 * arrays may be <code>null</code> or a reference to the same array
                 * as the <code>src</code> array.
                 * Note that the last point in the first subdivided curve is the
                 * same as the first point in the second subdivided curve. Thus,
                 * it is possible to pass the same array for <code>left</code>
                 * and <code>right</code> and to use offsets, such as <code>rightoff</code>
                 * equals (<code>leftoff</code> + 6), in order
                 * to avoid allocating extra storage for this common point.
                 * @param src the array holding the coordinates for the source curve
                 * @param srcoff the offset into the array of the beginning of the
                 *  the 6 source coordinates
                 * @param left the array for storing the coordinates for the first
                 *  half of the subdivided curve
                 * @param leftoff the offset into the array of the beginning of the
                 *  the 6 left coordinates
                 * @param right the array for storing the coordinates for the second
                 *  half of the subdivided curve
                 * @param rightoff the offset into the array of the beginning of the
                 *  the 6 right coordinates
                 * @since 1.2
                 */
                // @ts-ignore
                public static subdivide(src: number /*double*/[], srcoff: number /*int*/, left: number /*double*/[], leftoff: number /*int*/, right: number /*double*/[], rightoff: number /*int*/): void
                /**
                 * Solves the cubic whose coefficients are in the <code>eqn</code>
                 * array and places the non-complex roots back into the same array,
                 * returning the number of roots.  The solved cubic is represented
                 * by the equation:
                 * <pre>
                 * eqn = {c, b, a, d}
                 * dx^3 + ax^2 + bx + c = 0
                 * </pre>
                 * A return value of -1 is used to distinguish a constant equation
                 * that might be always 0 or never 0 from an equation that has no
                 * zeroes.
                 * @param eqn an array containing coefficients for a cubic
                 * @return the number of roots, or -1 if the equation is a constant.
                 * @since 1.2
                 */
                // @ts-ignore
                public static solveCubic(eqn: number /*double*/[]): number /*int*/
                /**
                 * Solve the cubic whose coefficients are in the <code>eqn</code>
                 * array and place the non-complex roots into the <code>res</code>
                 * array, returning the number of roots.
                 * The cubic solved is represented by the equation:
                 * eqn = {c, b, a, d}
                 * dx^3 + ax^2 + bx + c = 0
                 * A return value of -1 is used to distinguish a constant equation,
                 * which may be always 0 or never 0, from an equation which has no
                 * zeroes.
                 * @param eqn the specified array of coefficients to use to solve
                 *         the cubic equation
                 * @param res the array that contains the non-complex roots
                 *         resulting from the solution of the cubic equation
                 * @return the number of roots, or -1 if the equation is a constant
                 * @since 1.3
                 */
                // @ts-ignore
                public static solveCubic(eqn: number /*double*/[], res: number /*double*/[]): number /*int*/
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
                public contains(p: java.awt.geom.Point2D): boolean
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
                public intersects(r: java.awt.geom.Rectangle2D): boolean
                /**
                 * {@inheritDoc}
                 * @since 1.2
                 */
                // @ts-ignore
                public contains(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): boolean
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
                 * Returns an iteration object that defines the boundary of the
                 * shape.
                 * The iterator for this class is not multi-threaded safe,
                 * which means that this <code>CubicCurve2D</code> class does not
                 * guarantee that modifications to the geometry of this
                 * <code>CubicCurve2D</code> object do not affect any iterations of
                 * that geometry that are already in process.
                 * @param at an optional <code>AffineTransform</code> to be applied to the
                 *  coordinates as they are returned in the iteration, or <code>null</code>
                 *  if untransformed coordinates are desired
                 * @return the <code>PathIterator</code> object that returns the
                 *           geometry of the outline of this <code>CubicCurve2D</code>, one
                 *           segment at a time.
                 * @since 1.2
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
                /**
                 * Return an iteration object that defines the boundary of the
                 * flattened shape.
                 * The iterator for this class is not multi-threaded safe,
                 * which means that this <code>CubicCurve2D</code> class does not
                 * guarantee that modifications to the geometry of this
                 * <code>CubicCurve2D</code> object do not affect any iterations of
                 * that geometry that are already in process.
                 * @param at an optional <code>AffineTransform</code> to be applied to the
                 *  coordinates as they are returned in the iteration, or <code>null</code>
                 *  if untransformed coordinates are desired
                 * @param flatness the maximum amount that the control points
                 *  for a given curve can vary from colinear before a subdivided
                 *  curve is replaced by a straight line connecting the end points
                 * @return the <code>PathIterator</code> object that returns the
                 *  geometry of the outline of this <code>CubicCurve2D</code>,
                 *  one segment at a time.
                 * @since 1.2
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform, flatness: number /*double*/): java.awt.geom.PathIterator
                /**
                 * Creates a new object of the same class as this object.
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
