declare namespace java {
    namespace awt {
        namespace geom {
            namespace Path2D {
                /**
                 * The {@code Float} class defines a geometric path with
                 * coordinates stored in single precision floating point.
                 * @since 1.6
                 */
                // @ts-ignore
                class Float extends java.awt.geom.Path2D implements java.io.Serializable {
                    /**
                     * Constructs a new empty single precision {@code Path2D} object
                     * with a default winding rule of {@link #WIND_NON_ZERO}.
                     * @since 1.6
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a new empty single precision {@code Path2D} object
                     * with the specified winding rule to control operations that
                     * require the interior of the path to be defined.
                     * @param rule the winding rule
                     * @see #WIND_EVEN_ODD
                     * @see #WIND_NON_ZERO
                     * @since 1.6
                     */
                    // @ts-ignore
                    constructor(rule: number /*int*/)
                    /**
                     * Constructs a new empty single precision {@code Path2D} object
                     * with the specified winding rule and the specified initial
                     * capacity to store path segments.
                     * This number is an initial guess as to how many path segments
                     * will be added to the path, but the storage is expanded as
                     * needed to store whatever path segments are added.
                     * @param rule the winding rule
                     * @param initialCapacity the estimate for the number of path segments
                     *                         in the path
                     * @see #WIND_EVEN_ODD
                     * @see #WIND_NON_ZERO
                     * @since 1.6
                     */
                    // @ts-ignore
                    constructor(rule: number /*int*/, initialCapacity: number /*int*/)
                    /**
                     * Constructs a new single precision {@code Path2D} object
                     * from an arbitrary {@link Shape} object.
                     * All of the initial geometry and the winding rule for this path are
                     * taken from the specified {@code Shape} object.
                     * @param s the specified {#code Shape} object
                     * @since 1.6
                     */
                    // @ts-ignore
                    constructor(s: java.awt.Shape)
                    /**
                     * Constructs a new single precision {@code Path2D} object
                     * from an arbitrary {@link Shape} object, transformed by an
                     * {@link AffineTransform} object.
                     * All of the initial geometry and the winding rule for this path are
                     * taken from the specified {@code Shape} object and transformed
                     * by the specified {@code AffineTransform} object.
                     * @param s the specified {#code Shape} object
                     * @param at the specified {#code AffineTransform} object
                     * @since 1.6
                     */
                    // @ts-ignore
                    constructor(s: java.awt.Shape, at: java.awt.geom.AffineTransform)
                    /**
                     * {@inheritDoc}
                     * @since 1.6
                     */
                    // @ts-ignore
                    moveTo(x: number /*double*/, y: number /*double*/): void
                    /**
                     * Adds a point to the path by moving to the specified
                     * coordinates specified in float precision.
                     * <p>
                     * This method provides a single precision variant of
                     * the double precision {@code moveTo()} method on the
                     * base {@code Path2D} class.
                     * @param x the specified X coordinate
                     * @param y the specified Y coordinate
                     * @see Path2D#moveTo
                     * @since 1.6
                     */
                    // @ts-ignore
                    moveTo(x: number /*float*/, y: number /*float*/): void
                    /**
                     * {@inheritDoc}
                     * @since 1.6
                     */
                    // @ts-ignore
                    lineTo(x: number /*double*/, y: number /*double*/): void
                    /**
                     * Adds a point to the path by drawing a straight line from the
                     * current coordinates to the new specified coordinates
                     * specified in float precision.
                     * <p>
                     * This method provides a single precision variant of
                     * the double precision {@code lineTo()} method on the
                     * base {@code Path2D} class.
                     * @param x the specified X coordinate
                     * @param y the specified Y coordinate
                     * @see Path2D#lineTo
                     * @since 1.6
                     */
                    // @ts-ignore
                    lineTo(x: number /*float*/, y: number /*float*/): void
                    /**
                     * {@inheritDoc}
                     * @since 1.6
                     */
                    // @ts-ignore
                    quadTo(x1: number /*double*/, y1: number /*double*/, x2: number /*double*/, y2: number /*double*/): void
                    /**
                     * Adds a curved segment, defined by two new points, to the path by
                     * drawing a Quadratic curve that intersects both the current
                     * coordinates and the specified coordinates {@code (x2,y2)},
                     * using the specified point {@code (x1,y1)} as a quadratic
                     * parametric control point.
                     * All coordinates are specified in float precision.
                     * <p>
                     * This method provides a single precision variant of
                     * the double precision {@code quadTo()} method on the
                     * base {@code Path2D} class.
                     * @param x1 the X coordinate of the quadratic control point
                     * @param y1 the Y coordinate of the quadratic control point
                     * @param x2 the X coordinate of the final end point
                     * @param y2 the Y coordinate of the final end point
                     * @see Path2D#quadTo
                     * @since 1.6
                     */
                    // @ts-ignore
                    quadTo(x1: number /*float*/, y1: number /*float*/, x2: number /*float*/, y2: number /*float*/): void
                    /**
                     * {@inheritDoc}
                     * @since 1.6
                     */
                    // @ts-ignore
                    curveTo(x1: number /*double*/, y1: number /*double*/, x2: number /*double*/, y2: number /*double*/, x3: number /*double*/, y3: number /*double*/): void
                    /**
                     * Adds a curved segment, defined by three new points, to the path by
                     * drawing a B&eacute;zier curve that intersects both the current
                     * coordinates and the specified coordinates {@code (x3,y3)},
                     * using the specified points {@code (x1,y1)} and {@code (x2,y2)} as
                     * B&eacute;zier control points.
                     * All coordinates are specified in float precision.
                     * <p>
                     * This method provides a single precision variant of
                     * the double precision {@code curveTo()} method on the
                     * base {@code Path2D} class.
                     * @param x1 the X coordinate of the first B&eacute;zier control point
                     * @param y1 the Y coordinate of the first B&eacute;zier control point
                     * @param x2 the X coordinate of the second B&eacute;zier control point
                     * @param y2 the Y coordinate of the second B&eacute;zier control point
                     * @param x3 the X coordinate of the final end point
                     * @param y3 the Y coordinate of the final end point
                     * @see Path2D#curveTo
                     * @since 1.6
                     */
                    // @ts-ignore
                    curveTo(x1: number /*float*/, y1: number /*float*/, x2: number /*float*/, y2: number /*float*/, x3: number /*float*/, y3: number /*float*/): void
                    /**
                     * {@inheritDoc}
                     * @since 1.6
                     */
                    // @ts-ignore
                    append(pi: java.awt.geom.PathIterator, connect: boolean): void
                    /**
                     * {@inheritDoc}
                     * @since 1.6
                     */
                    // @ts-ignore
                    transform(at: java.awt.geom.AffineTransform): void
                    /**
                     * {@inheritDoc}
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBounds2D(): java.awt.geom.Rectangle2D
                    /**
                     * {@inheritDoc}
                     * <p>
                     * The iterator for this class is not multi-threaded safe,
                     * which means that the {@code Path2D} class does not
                     * guarantee that modifications to the geometry of this
                     * {@code Path2D} object do not affect any iterations of
                     * that geometry that are already in process.
                     * @since 1.6
                     */
                    // @ts-ignore
                    getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
                    /**
                     * Creates a new object of the same class as this object.
                     * @return a clone of this instance.
                     * @exception OutOfMemoryError    if there is not enough memory.
                     * @see java.lang.Cloneable
                     * @since 1.6
                     */
                    // @ts-ignore
                    clone(): java.lang.Object
                }
            }
        }
    }
}
