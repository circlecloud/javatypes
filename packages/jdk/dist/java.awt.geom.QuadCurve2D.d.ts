declare namespace java {
    namespace awt {
        namespace geom {
            /**
             * The <code>QuadCurve2D</code> class defines a quadratic parametric curve
             * segment in {@code (x,y)} coordinate space.
             * <p>
             * This class is only the abstract superclass for all objects that
             * store a 2D quadratic curve segment.
             * The actual storage representation of the coordinates is left to
             * the subclass.
             * @author Jim Graham
             * @since 1.2
             */
            // @ts-ignore
            abstract class QuadCurve2D extends java.lang.Object implements java.awt.Shape, java.lang.Cloneable {
                /**
                 * This is an abstract class that cannot be instantiated directly.
                 * Type-specific implementation subclasses are available for
                 * instantiation and provide a number of formats for storing
                 * the information necessary to satisfy the various accessor
                 * methods below.
                 * @see java.awt.geom.QuadCurve2D.Float
                 * @see java.awt.geom.QuadCurve2D.Double
                 * @since 1.2
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the X coordinate of the start point in
                 * <code>double</code> in precision.
                 * @return the X coordinate of the start point.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getX1(): number /*double*/
                /**
                 * Returns the Y coordinate of the start point in
                 * <code>double</code> precision.
                 * @return the Y coordinate of the start point.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getY1(): number /*double*/
                /**
                 * Returns the start point.
                 * @return a <code>Point2D</code> that is the start point of this
                 *           <code>QuadCurve2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getP1(): java.awt.geom.Point2D
                /**
                 * Returns the X coordinate of the control point in
                 * <code>double</code> precision.
                 * @return X coordinate the control point
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getCtrlX(): number /*double*/
                /**
                 * Returns the Y coordinate of the control point in
                 * <code>double</code> precision.
                 * @return the Y coordinate of the control point.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getCtrlY(): number /*double*/
                /**
                 * Returns the control point.
                 * @return a <code>Point2D</code> that is the control point of this
                 *           <code>Point2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getCtrlPt(): java.awt.geom.Point2D
                /**
                 * Returns the X coordinate of the end point in
                 * <code>double</code> precision.
                 * @return the x coordinate of the end point.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getX2(): number /*double*/
                /**
                 * Returns the Y coordinate of the end point in
                 * <code>double</code> precision.
                 * @return the Y coordinate of the end point.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getY2(): number /*double*/
                /**
                 * Returns the end point.
                 * @return a <code>Point</code> object that is the end point
                 *           of this <code>Point2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getP2(): java.awt.geom.Point2D
                /**
                 * Sets the location of the end points and control point of this curve
                 * to the specified <code>double</code> coordinates.
                 * @param x1 the X coordinate of the start point
                 * @param y1 the Y coordinate of the start point
                 * @param ctrlx the X coordinate of the control point
                 * @param ctrly the Y coordinate of the control point
                 * @param x2 the X coordinate of the end point
                 * @param y2 the Y coordinate of the end point
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract setCurve(x1: number /*double*/, y1: number /*double*/, ctrlx: number /*double*/, ctrly: number /*double*/, x2: number /*double*/, y2: number /*double*/): void
                /**
                 * Sets the location of the end points and control points of this
                 * <code>QuadCurve2D</code> to the <code>double</code> coordinates at
                 * the specified offset in the specified array.
                 * @param coords the array containing coordinate values
                 * @param offset the index into the array from which to start
                 *           getting the coordinate values and assigning them to this
                 *           <code>QuadCurve2D</code>
                 * @since 1.2
                 */
                // @ts-ignore
                public setCurve(coords: number /*double*/[], offset: number /*int*/): void
                /**
                 * Sets the location of the end points and control point of this
                 * <code>QuadCurve2D</code> to the specified <code>Point2D</code>
                 * coordinates.
                 * @param p1 the start point
                 * @param cp the control point
                 * @param p2 the end point
                 * @since 1.2
                 */
                // @ts-ignore
                public setCurve(p1: java.awt.geom.Point2D, cp: java.awt.geom.Point2D, p2: java.awt.geom.Point2D): void
                /**
                 * Sets the location of the end points and control points of this
                 * <code>QuadCurve2D</code> to the coordinates of the
                 * <code>Point2D</code> objects at the specified offset in
                 * the specified array.
                 * @param pts an array containing <code>Point2D</code> that define
                 *           coordinate values
                 * @param offset the index into <code>pts</code> from which to start
                 *           getting the coordinate values and assigning them to this
                 *           <code>QuadCurve2D</code>
                 * @since 1.2
                 */
                // @ts-ignore
                public setCurve(pts: java.awt.geom.Point2D[], offset: number /*int*/): void
                /**
                 * Sets the location of the end points and control point of this
                 * <code>QuadCurve2D</code> to the same as those in the specified
                 * <code>QuadCurve2D</code>.
                 * @param c the specified <code>QuadCurve2D</code>
                 * @since 1.2
                 */
                // @ts-ignore
                public setCurve(c: java.awt.geom.QuadCurve2D): void
                /**
                 * Returns the square of the flatness, or maximum distance of a
                 * control point from the line connecting the end points, of the
                 * quadratic curve specified by the indicated control points.
                 * @param x1 the X coordinate of the start point
                 * @param y1 the Y coordinate of the start point
                 * @param ctrlx the X coordinate of the control point
                 * @param ctrly the Y coordinate of the control point
                 * @param x2 the X coordinate of the end point
                 * @param y2 the Y coordinate of the end point
                 * @return the square of the flatness of the quadratic curve
                 *           defined by the specified coordinates.
                 * @since 1.2
                 */
                // @ts-ignore
                public static getFlatnessSq(x1: number /*double*/, y1: number /*double*/, ctrlx: number /*double*/, ctrly: number /*double*/, x2: number /*double*/, y2: number /*double*/): number /*double*/
                /**
                 * Returns the flatness, or maximum distance of a
                 * control point from the line connecting the end points, of the
                 * quadratic curve specified by the indicated control points.
                 * @param x1 the X coordinate of the start point
                 * @param y1 the Y coordinate of the start point
                 * @param ctrlx the X coordinate of the control point
                 * @param ctrly the Y coordinate of the control point
                 * @param x2 the X coordinate of the end point
                 * @param y2 the Y coordinate of the end point
                 * @return the flatness of the quadratic curve defined by the
                 *           specified coordinates.
                 * @since 1.2
                 */
                // @ts-ignore
                public static getFlatness(x1: number /*double*/, y1: number /*double*/, ctrlx: number /*double*/, ctrly: number /*double*/, x2: number /*double*/, y2: number /*double*/): number /*double*/
                /**
                 * Returns the square of the flatness, or maximum distance of a
                 * control point from the line connecting the end points, of the
                 * quadratic curve specified by the control points stored in the
                 * indicated array at the indicated index.
                 * @param coords an array containing coordinate values
                 * @param offset the index into <code>coords</code> from which to
                 *           to start getting the values from the array
                 * @return the flatness of the quadratic curve that is defined by the
                 *           values in the specified array at the specified index.
                 * @since 1.2
                 */
                // @ts-ignore
                public static getFlatnessSq(coords: number /*double*/[], offset: number /*int*/): number /*double*/
                /**
                 * Returns the flatness, or maximum distance of a
                 * control point from the line connecting the end points, of the
                 * quadratic curve specified by the control points stored in the
                 * indicated array at the indicated index.
                 * @param coords an array containing coordinate values
                 * @param offset the index into <code>coords</code> from which to
                 *           start getting the coordinate values
                 * @return the flatness of a quadratic curve defined by the
                 *           specified array at the specified offset.
                 * @since 1.2
                 */
                // @ts-ignore
                public static getFlatness(coords: number /*double*/[], offset: number /*int*/): number /*double*/
                /**
                 * Returns the square of the flatness, or maximum distance of a
                 * control point from the line connecting the end points, of this
                 * <code>QuadCurve2D</code>.
                 * @return the square of the flatness of this
                 *           <code>QuadCurve2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public getFlatnessSq(): number /*double*/
                /**
                 * Returns the flatness, or maximum distance of a
                 * control point from the line connecting the end points, of this
                 * <code>QuadCurve2D</code>.
                 * @return the flatness of this <code>QuadCurve2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public getFlatness(): number /*double*/
                /**
                 * Subdivides this <code>QuadCurve2D</code> and stores the resulting
                 * two subdivided curves into the <code>left</code> and
                 * <code>right</code> curve parameters.
                 * Either or both of the <code>left</code> and <code>right</code>
                 * objects can be the same as this <code>QuadCurve2D</code> or
                 * <code>null</code>.
                 * @param left the <code>QuadCurve2D</code> object for storing the
                 *  left or first half of the subdivided curve
                 * @param right the <code>QuadCurve2D</code> object for storing the
                 *  right or second half of the subdivided curve
                 * @since 1.2
                 */
                // @ts-ignore
                public subdivide(left: java.awt.geom.QuadCurve2D, right: java.awt.geom.QuadCurve2D): void
                /**
                 * Subdivides the quadratic curve specified by the <code>src</code>
                 * parameter and stores the resulting two subdivided curves into the
                 * <code>left</code> and <code>right</code> curve parameters.
                 * Either or both of the <code>left</code> and <code>right</code>
                 * objects can be the same as the <code>src</code> object or
                 * <code>null</code>.
                 * @param src the quadratic curve to be subdivided
                 * @param left the <code>QuadCurve2D</code> object for storing the
                 *           left or first half of the subdivided curve
                 * @param right the <code>QuadCurve2D</code> object for storing the
                 *           right or second half of the subdivided curve
                 * @since 1.2
                 */
                // @ts-ignore
                public static subdivide(src: java.awt.geom.QuadCurve2D, left: java.awt.geom.QuadCurve2D, right: java.awt.geom.QuadCurve2D): void
                /**
                 * Subdivides the quadratic curve specified by the coordinates
                 * stored in the <code>src</code> array at indices
                 * <code>srcoff</code> through <code>srcoff</code>&nbsp;+&nbsp;5
                 * and stores the resulting two subdivided curves into the two
                 * result arrays at the corresponding indices.
                 * Either or both of the <code>left</code> and <code>right</code>
                 * arrays can be <code>null</code> or a reference to the same array
                 * and offset as the <code>src</code> array.
                 * Note that the last point in the first subdivided curve is the
                 * same as the first point in the second subdivided curve.  Thus,
                 * it is possible to pass the same array for <code>left</code> and
                 * <code>right</code> and to use offsets such that
                 * <code>rightoff</code> equals <code>leftoff</code> + 4 in order
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
                 * Solves the quadratic whose coefficients are in the <code>eqn</code>
                 * array and places the non-complex roots back into the same array,
                 * returning the number of roots.  The quadratic solved is represented
                 * by the equation:
                 * <pre>
                 * eqn = {C, B, A};
                 * ax^2 + bx + c = 0
                 * </pre>
                 * A return value of <code>-1</code> is used to distinguish a constant
                 * equation, which might be always 0 or never 0, from an equation that
                 * has no zeroes.
                 * @param eqn the array that contains the quadratic coefficients
                 * @return the number of roots, or <code>-1</code> if the equation is
                 *           a constant
                 * @since 1.2
                 */
                // @ts-ignore
                public static solveQuadratic(eqn: number /*double*/[]): number /*int*/
                /**
                 * Solves the quadratic whose coefficients are in the <code>eqn</code>
                 * array and places the non-complex roots into the <code>res</code>
                 * array, returning the number of roots.
                 * The quadratic solved is represented by the equation:
                 * <pre>
                 * eqn = {C, B, A};
                 * ax^2 + bx + c = 0
                 * </pre>
                 * A return value of <code>-1</code> is used to distinguish a constant
                 * equation, which might be always 0 or never 0, from an equation that
                 * has no zeroes.
                 * @param eqn the specified array of coefficients to use to solve
                 *         the quadratic equation
                 * @param res the array that contains the non-complex roots
                 *         resulting from the solution of the quadratic equation
                 * @return the number of roots, or <code>-1</code> if the equation is
                 *   a constant.
                 * @since 1.3
                 */
                // @ts-ignore
                public static solveQuadratic(eqn: number /*double*/[], res: number /*double*/[]): number /*int*/
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
                 * shape of this <code>QuadCurve2D</code>.
                 * The iterator for this class is not multi-threaded safe,
                 * which means that this <code>QuadCurve2D</code> class does not
                 * guarantee that modifications to the geometry of this
                 * <code>QuadCurve2D</code> object do not affect any iterations of
                 * that geometry that are already in process.
                 * @param at an optional {#link AffineTransform} to apply to the
                 *           shape boundary
                 * @return a {#link PathIterator} object that defines the boundary
                 *           of the shape.
                 * @since 1.2
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
                /**
                 * Returns an iteration object that defines the boundary of the
                 * flattened shape of this <code>QuadCurve2D</code>.
                 * The iterator for this class is not multi-threaded safe,
                 * which means that this <code>QuadCurve2D</code> class does not
                 * guarantee that modifications to the geometry of this
                 * <code>QuadCurve2D</code> object do not affect any iterations of
                 * that geometry that are already in process.
                 * @param at an optional <code>AffineTransform</code> to apply
                 *           to the boundary of the shape
                 * @param flatness the maximum distance that the control points for a
                 *           subdivided curve can be with respect to a line connecting
                 *           the end points of this curve before this curve is
                 *           replaced by a straight line connecting the end points.
                 * @return a <code>PathIterator</code> object that defines the
                 *           flattened boundary of the shape.
                 * @since 1.2
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform, flatness: number /*double*/): java.awt.geom.PathIterator
                /**
                 * Creates a new object of the same class and with the same contents
                 * as this object.
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
