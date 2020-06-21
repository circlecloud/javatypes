declare namespace java {
    namespace awt {
        namespace geom {
            /**
             * The {@code Path2D} class provides a simple, yet flexible
             * shape which represents an arbitrary geometric path.
             * It can fully represent any path which can be iterated by the
             * {@link PathIterator} interface including all of its segment
             * types and winding rules and it implements all of the
             * basic hit testing methods of the {@link Shape} interface.
             * <p>
             * Use {@link Path2D.Float} when dealing with data that can be represented
             * and used with floating point precision.  Use {@link Path2D.Double}
             * for data that requires the accuracy or range of double precision.
             * <p>
             * {@code Path2D} provides exactly those facilities required for
             * basic construction and management of a geometric path and
             * implementation of the above interfaces with little added
             * interpretation.
             * If it is useful to manipulate the interiors of closed
             * geometric shapes beyond simple hit testing then the
             * {@link Area} class provides additional capabilities
             * specifically targeted at closed figures.
             * While both classes nominally implement the {@code Shape}
             * interface, they differ in purpose and together they provide
             * two useful views of a geometric shape where {@code Path2D}
             * deals primarily with a trajectory formed by path segments
             * and {@code Area} deals more with interpretation and manipulation
             * of enclosed regions of 2D geometric space.
             * <p>
             * The {@link PathIterator} interface has more detailed descriptions
             * of the types of segments that make up a path and the winding rules
             * that control how to determine which regions are inside or outside
             * the path.
             * @author Jim Graham
             * @since 1.6
             */
            // @ts-ignore
            abstract class Path2D extends java.lang.Object implements java.awt.Shape, java.lang.Cloneable {
                /**
                 * An even-odd winding rule for determining the interior of
                 * a path.
                 * @see PathIterator#WIND_EVEN_ODD
                 * @since 1.6
                 */
                // @ts-ignore
                public static readonly WIND_EVEN_ODD: number /*int*/
                /**
                 * A non-zero winding rule for determining the interior of a
                 * path.
                 * @see PathIterator#WIND_NON_ZERO
                 * @since 1.6
                 */
                // @ts-ignore
                public static readonly WIND_NON_ZERO: number /*int*/
                /**
                 * Adds a point to the path by moving to the specified
                 * coordinates specified in double precision.
                 * @param x the specified X coordinate
                 * @param y the specified Y coordinate
                 * @since 1.6
                 */
                // @ts-ignore
                public abstract moveTo(x: number /*double*/, y: number /*double*/): void
                /**
                 * Adds a point to the path by drawing a straight line from the
                 * current coordinates to the new specified coordinates
                 * specified in double precision.
                 * @param x the specified X coordinate
                 * @param y the specified Y coordinate
                 * @since 1.6
                 */
                // @ts-ignore
                public abstract lineTo(x: number /*double*/, y: number /*double*/): void
                /**
                 * Adds a curved segment, defined by two new points, to the path by
                 * drawing a Quadratic curve that intersects both the current
                 * coordinates and the specified coordinates {@code (x2,y2)},
                 * using the specified point {@code (x1,y1)} as a quadratic
                 * parametric control point.
                 * All coordinates are specified in double precision.
                 * @param x1 the X coordinate of the quadratic control point
                 * @param y1 the Y coordinate of the quadratic control point
                 * @param x2 the X coordinate of the final end point
                 * @param y2 the Y coordinate of the final end point
                 * @since 1.6
                 */
                // @ts-ignore
                public abstract quadTo(x1: number /*double*/, y1: number /*double*/, x2: number /*double*/, y2: number /*double*/): void
                /**
                 * Adds a curved segment, defined by three new points, to the path by
                 * drawing a B&eacute;zier curve that intersects both the current
                 * coordinates and the specified coordinates {@code (x3,y3)},
                 * using the specified points {@code (x1,y1)} and {@code (x2,y2)} as
                 * B&eacute;zier control points.
                 * All coordinates are specified in double precision.
                 * @param x1 the X coordinate of the first B&eacute;zier control point
                 * @param y1 the Y coordinate of the first B&eacute;zier control point
                 * @param x2 the X coordinate of the second B&eacute;zier control point
                 * @param y2 the Y coordinate of the second B&eacute;zier control point
                 * @param x3 the X coordinate of the final end point
                 * @param y3 the Y coordinate of the final end point
                 * @since 1.6
                 */
                // @ts-ignore
                public abstract curveTo(x1: number /*double*/, y1: number /*double*/, x2: number /*double*/, y2: number /*double*/, x3: number /*double*/, y3: number /*double*/): void
                /**
                 * Closes the current subpath by drawing a straight line back to
                 * the coordinates of the last {@code moveTo}.  If the path is already
                 * closed then this method has no effect.
                 * @since 1.6
                 */
                // @ts-ignore
                public closePath(): void
                /**
                 * Appends the geometry of the specified {@code Shape} object to the
                 * path, possibly connecting the new geometry to the existing path
                 * segments with a line segment.
                 * If the {@code connect} parameter is {@code true} and the
                 * path is not empty then any initial {@code moveTo} in the
                 * geometry of the appended {@code Shape}
                 * is turned into a {@code lineTo} segment.
                 * If the destination coordinates of such a connecting {@code lineTo}
                 * segment match the ending coordinates of a currently open
                 * subpath then the segment is omitted as superfluous.
                 * The winding rule of the specified {@code Shape} is ignored
                 * and the appended geometry is governed by the winding
                 * rule specified for this path.
                 * @param s the {#code Shape} whose geometry is appended
                 *           to this path
                 * @param connect a boolean to control whether or not to turn an initial
                 *                 {#code moveTo} segment into a {@code lineTo} segment
                 *                 to connect the new geometry to the existing path
                 * @since 1.6
                 */
                // @ts-ignore
                public append(s: java.awt.Shape, connect: boolean): void
                /**
                 * Appends the geometry of the specified
                 * {@link PathIterator} object
                 * to the path, possibly connecting the new geometry to the existing
                 * path segments with a line segment.
                 * If the {@code connect} parameter is {@code true} and the
                 * path is not empty then any initial {@code moveTo} in the
                 * geometry of the appended {@code Shape} is turned into a
                 * {@code lineTo} segment.
                 * If the destination coordinates of such a connecting {@code lineTo}
                 * segment match the ending coordinates of a currently open
                 * subpath then the segment is omitted as superfluous.
                 * The winding rule of the specified {@code Shape} is ignored
                 * and the appended geometry is governed by the winding
                 * rule specified for this path.
                 * @param pi the {#code PathIterator} whose geometry is appended to
                 *            this path
                 * @param connect a boolean to control whether or not to turn an initial
                 *                 {#code moveTo} segment into a {@code lineTo} segment
                 *                 to connect the new geometry to the existing path
                 * @since 1.6
                 */
                // @ts-ignore
                public abstract append(pi: java.awt.geom.PathIterator, connect: boolean): void
                /**
                 * Returns the fill style winding rule.
                 * @return an integer representing the current winding rule.
                 * @see #WIND_EVEN_ODD
                 * @see #WIND_NON_ZERO
                 * @see #setWindingRule
                 * @since 1.6
                 */
                // @ts-ignore
                public getWindingRule(): number /*int*/
                /**
                 * Sets the winding rule for this path to the specified value.
                 * @param rule an integer representing the specified
                 *              winding rule
                 * @exception IllegalArgumentException if
                 *           {#code rule} is not either
                 *           {@link #WIND_EVEN_ODD} or
                 *           {@link #WIND_NON_ZERO}
                 * @see #getWindingRule
                 * @since 1.6
                 */
                // @ts-ignore
                public setWindingRule(rule: number /*int*/): void
                /**
                 * Returns the coordinates most recently added to the end of the path
                 * as a {@link Point2D} object.
                 * @return a {#code Point2D} object containing the ending coordinates of
                 *          the path or {@code null} if there are no points in the path.
                 * @since 1.6
                 */
                // @ts-ignore
                public getCurrentPoint(): java.awt.geom.Point2D
                /**
                 * Resets the path to empty.  The append position is set back to the
                 * beginning of the path and all coordinates and point types are
                 * forgotten.
                 * @since 1.6
                 */
                // @ts-ignore
                public reset(): void
                /**
                 * Transforms the geometry of this path using the specified
                 * {@link AffineTransform}.
                 * The geometry is transformed in place, which permanently changes the
                 * boundary defined by this object.
                 * @param at the {#code AffineTransform} used to transform the area
                 * @since 1.6
                 */
                // @ts-ignore
                public abstract transform(at: java.awt.geom.AffineTransform): void
                /**
                 * Returns a new {@code Shape} representing a transformed version
                 * of this {@code Path2D}.
                 * Note that the exact type and coordinate precision of the return
                 * value is not specified for this method.
                 * The method will return a Shape that contains no less precision
                 * for the transformed geometry than this {@code Path2D} currently
                 * maintains, but it may contain no more precision either.
                 * If the tradeoff of precision vs. storage size in the result is
                 * important then the convenience constructors in the
                 * {@link Path2D.Float#Path2D.Float(Shape, AffineTransform) Path2D.Float}
                 * and
                 * {@link Path2D.Double#Path2D.Double(Shape, AffineTransform) Path2D.Double}
                 * subclasses should be used to make the choice explicit.
                 * @param at the {#code AffineTransform} used to transform a
                 *            new {@code Shape}.
                 * @return a new {#code Shape}, transformed with the specified
                 *          {@code AffineTransform}.
                 * @since 1.6
                 */
                // @ts-ignore
                public createTransformedShape(at: java.awt.geom.AffineTransform): java.awt.Shape
                /**
                 * {@inheritDoc}
                 * @since 1.6
                 */
                // @ts-ignore
                public getBounds(): java.awt.Rectangle
                /**
                 * Tests if the specified coordinates are inside the closed
                 * boundary of the specified {@link PathIterator}.
                 * <p>
                 * This method provides a basic facility for implementors of
                 * the {@link Shape} interface to implement support for the
                 * {@link Shape#contains(double, double)} method.
                 * @param pi the specified {#code PathIterator}
                 * @param x the specified X coordinate
                 * @param y the specified Y coordinate
                 * @return {#code true} if the specified coordinates are inside the
                 *          specified {@code PathIterator}; {@code false} otherwise
                 * @since 1.6
                 */
                // @ts-ignore
                public static contains(pi: java.awt.geom.PathIterator, x: number /*double*/, y: number /*double*/): boolean
                /**
                 * Tests if the specified {@link Point2D} is inside the closed
                 * boundary of the specified {@link PathIterator}.
                 * <p>
                 * This method provides a basic facility for implementors of
                 * the {@link Shape} interface to implement support for the
                 * {@link Shape#contains(Point2D)} method.
                 * @param pi the specified {#code PathIterator}
                 * @param p the specified {#code Point2D}
                 * @return {#code true} if the specified coordinates are inside the
                 *          specified {@code PathIterator}; {@code false} otherwise
                 * @since 1.6
                 */
                // @ts-ignore
                public static contains(pi: java.awt.geom.PathIterator, p: java.awt.geom.Point2D): boolean
                /**
                 * {@inheritDoc}
                 * @since 1.6
                 */
                // @ts-ignore
                public contains(x: number /*double*/, y: number /*double*/): boolean
                /**
                 * {@inheritDoc}
                 * @since 1.6
                 */
                // @ts-ignore
                public contains(p: java.awt.geom.Point2D): boolean
                /**
                 * Tests if the specified rectangular area is entirely inside the
                 * closed boundary of the specified {@link PathIterator}.
                 * <p>
                 * This method provides a basic facility for implementors of
                 * the {@link Shape} interface to implement support for the
                 * {@link Shape#contains(double, double, double, double)} method.
                 * <p>
                 * This method object may conservatively return false in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such segments could lie entirely within the interior of the
                 * path if they are part of a path with a {@link #WIND_NON_ZERO}
                 * winding rule or if the segments are retraced in the reverse
                 * direction such that the two sets of segments cancel each
                 * other out without any exterior area falling between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 * @param pi the specified {#code PathIterator}
                 * @param x the specified X coordinate
                 * @param y the specified Y coordinate
                 * @param w the width of the specified rectangular area
                 * @param h the height of the specified rectangular area
                 * @return {#code true} if the specified {@code PathIterator} contains
                 *          the specified rectangular area; {@code false} otherwise.
                 * @since 1.6
                 */
                // @ts-ignore
                public static contains(pi: java.awt.geom.PathIterator, x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): boolean
                /**
                 * Tests if the specified {@link Rectangle2D} is entirely inside the
                 * closed boundary of the specified {@link PathIterator}.
                 * <p>
                 * This method provides a basic facility for implementors of
                 * the {@link Shape} interface to implement support for the
                 * {@link Shape#contains(Rectangle2D)} method.
                 * <p>
                 * This method object may conservatively return false in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such segments could lie entirely within the interior of the
                 * path if they are part of a path with a {@link #WIND_NON_ZERO}
                 * winding rule or if the segments are retraced in the reverse
                 * direction such that the two sets of segments cancel each
                 * other out without any exterior area falling between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 * @param pi the specified {#code PathIterator}
                 * @param r a specified {#code Rectangle2D}
                 * @return {#code true} if the specified {@code PathIterator} contains
                 *          the specified {@code Rectangle2D}; {@code false} otherwise.
                 * @since 1.6
                 */
                // @ts-ignore
                public static contains(pi: java.awt.geom.PathIterator, r: java.awt.geom.Rectangle2D): boolean
                /**
                 * {@inheritDoc}
                 * <p>
                 * This method object may conservatively return false in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such segments could lie entirely within the interior of the
                 * path if they are part of a path with a {@link #WIND_NON_ZERO}
                 * winding rule or if the segments are retraced in the reverse
                 * direction such that the two sets of segments cancel each
                 * other out without any exterior area falling between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 * @since 1.6
                 */
                // @ts-ignore
                public contains(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): boolean
                /**
                 * {@inheritDoc}
                 * <p>
                 * This method object may conservatively return false in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such segments could lie entirely within the interior of the
                 * path if they are part of a path with a {@link #WIND_NON_ZERO}
                 * winding rule or if the segments are retraced in the reverse
                 * direction such that the two sets of segments cancel each
                 * other out without any exterior area falling between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 * @since 1.6
                 */
                // @ts-ignore
                public contains(r: java.awt.geom.Rectangle2D): boolean
                /**
                 * Tests if the interior of the specified {@link PathIterator}
                 * intersects the interior of a specified set of rectangular
                 * coordinates.
                 * <p>
                 * This method provides a basic facility for implementors of
                 * the {@link Shape} interface to implement support for the
                 * {@link Shape#intersects(double, double, double, double)} method.
                 * <p>
                 * This method object may conservatively return true in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such a case may occur if some set of segments of the
                 * path are retraced in the reverse direction such that the
                 * two sets of segments cancel each other out without any
                 * interior area between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 * @param pi the specified {#code PathIterator}
                 * @param x the specified X coordinate
                 * @param y the specified Y coordinate
                 * @param w the width of the specified rectangular coordinates
                 * @param h the height of the specified rectangular coordinates
                 * @return {#code true} if the specified {@code PathIterator} and
                 *          the interior of the specified set of rectangular
                 *          coordinates intersect each other; {@code false} otherwise.
                 * @since 1.6
                 */
                // @ts-ignore
                public static intersects(pi: java.awt.geom.PathIterator, x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): boolean
                /**
                 * Tests if the interior of the specified {@link PathIterator}
                 * intersects the interior of a specified {@link Rectangle2D}.
                 * <p>
                 * This method provides a basic facility for implementors of
                 * the {@link Shape} interface to implement support for the
                 * {@link Shape#intersects(Rectangle2D)} method.
                 * <p>
                 * This method object may conservatively return true in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such a case may occur if some set of segments of the
                 * path are retraced in the reverse direction such that the
                 * two sets of segments cancel each other out without any
                 * interior area between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 * @param pi the specified {#code PathIterator}
                 * @param r the specified {#code Rectangle2D}
                 * @return {#code true} if the specified {@code PathIterator} and
                 *          the interior of the specified {@code Rectangle2D}
                 *          intersect each other; {@code false} otherwise.
                 * @since 1.6
                 */
                // @ts-ignore
                public static intersects(pi: java.awt.geom.PathIterator, r: java.awt.geom.Rectangle2D): boolean
                /**
                 * {@inheritDoc}
                 * <p>
                 * This method object may conservatively return true in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such a case may occur if some set of segments of the
                 * path are retraced in the reverse direction such that the
                 * two sets of segments cancel each other out without any
                 * interior area between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 * @since 1.6
                 */
                // @ts-ignore
                public intersects(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): boolean
                /**
                 * {@inheritDoc}
                 * <p>
                 * This method object may conservatively return true in
                 * cases where the specified rectangular area intersects a
                 * segment of the path, but that segment does not represent a
                 * boundary between the interior and exterior of the path.
                 * Such a case may occur if some set of segments of the
                 * path are retraced in the reverse direction such that the
                 * two sets of segments cancel each other out without any
                 * interior area between them.
                 * To determine whether segments represent true boundaries of
                 * the interior of the path would require extensive calculations
                 * involving all of the segments of the path and the winding
                 * rule and are thus beyond the scope of this implementation.
                 * @since 1.6
                 */
                // @ts-ignore
                public intersects(r: java.awt.geom.Rectangle2D): boolean
                /**
                 * {@inheritDoc}
                 * <p>
                 * The iterator for this class is not multi-threaded safe,
                 * which means that this {@code Path2D} class does not
                 * guarantee that modifications to the geometry of this
                 * {@code Path2D} object do not affect any iterations of
                 * that geometry that are already in process.
                 * @since 1.6
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform, flatness: number /*double*/): java.awt.geom.PathIterator
                /**
                 * Creates a new object of the same class as this object.
                 * @return a clone of this instance.
                 * @exception OutOfMemoryError            if there is not enough memory.
                 * @see java.lang.Cloneable
                 * @since 1.6
                 */
                // @ts-ignore
                public abstract clone(): any
            }
        }
    }
}
