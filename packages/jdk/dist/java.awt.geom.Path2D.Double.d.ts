declare namespace java {
    namespace awt {
        namespace geom {
            namespace Path2D {
                /**
                 * The {@code Double} class defines a geometric path with
                 * coordinates stored in double precision floating point.
                 * @since 1.6
                 */
                // @ts-ignore
                class Double extends java.awt.geom.Path2D implements java.io.Serializable {
                    /**
                     * Constructs a new empty double precision {@code Path2D} object
                     * with a default winding rule of {@link #WIND_NON_ZERO}.
                     * @since 1.6
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a new empty double precision {@code Path2D} object
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
                     * Constructs a new empty double precision {@code Path2D} object
                     * with the specified winding rule and the specified initial
                     * capacity to store path segments.
                     * This number is an initial guess as to how many path segments
                     * are in the path, but the storage is expanded as needed to store
                     * whatever path segments are added to this path.
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
                     * Constructs a new double precision {@code Path2D} object
                     * from an arbitrary {@link Shape} object.
                     * All of the initial geometry and the winding rule for this path are
                     * taken from the specified {@code Shape} object.
                     * @param s the specified {#code Shape} object
                     * @since 1.6
                     */
                    // @ts-ignore
                    constructor(s: java.awt.Shape)
                    /**
                     * Constructs a new double precision {@code Path2D} object
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
                     * {@inheritDoc}
                     * @since 1.6
                     */
                    // @ts-ignore
                    lineTo(x: number /*double*/, y: number /*double*/): void
                    /**
                     * {@inheritDoc}
                     * @since 1.6
                     */
                    // @ts-ignore
                    quadTo(x1: number /*double*/, y1: number /*double*/, x2: number /*double*/, y2: number /*double*/): void
                    /**
                     * {@inheritDoc}
                     * @since 1.6
                     */
                    // @ts-ignore
                    curveTo(x1: number /*double*/, y1: number /*double*/, x2: number /*double*/, y2: number /*double*/, x3: number /*double*/, y3: number /*double*/): void
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
                     * @param at an {#code AffineTransform}
                     * @return a new {#code PathIterator} that iterates along the boundary
                     *          of this {@code Shape} and provides access to the geometry
                     *          of this {@code Shape}'s outline
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
