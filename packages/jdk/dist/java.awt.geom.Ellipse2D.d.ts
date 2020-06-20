declare namespace java {
    namespace awt {
        namespace geom {
            /**
             * The <code>Ellipse2D</code> class describes an ellipse that is defined
             * by a framing rectangle.
             * <p>
             * This class is only the abstract superclass for all objects which
             * store a 2D ellipse.
             * The actual storage representation of the coordinates is left to
             * the subclass.
             * @author Jim Graham
             * @since 1.2
             */
            // @ts-ignore
            class Ellipse2D extends java.awt.geom.RectangularShape {
                /**
                 * This is an abstract class that cannot be instantiated directly.
                 * Type-specific implementation subclasses are available for
                 * instantiation and provide a number of formats for storing
                 * the information necessary to satisfy the various accessor
                 * methods below.
                 * @see java.awt.geom.Ellipse2D.Float
                 * @see java.awt.geom.Ellipse2D.Double
                 * @since 1.2
                 */
                // @ts-ignore
                constructor()
                /**
                 * {@inheritDoc}
                 * @since 1.2
                 */
                // @ts-ignore
                contains(x: number /*double*/, y: number /*double*/): boolean
                /**
                 * {@inheritDoc}
                 * @since 1.2
                 */
                // @ts-ignore
                intersects(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): boolean
                /**
                 * {@inheritDoc}
                 * @since 1.2
                 */
                // @ts-ignore
                contains(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): boolean
                /**
                 * Returns an iteration object that defines the boundary of this
                 * <code>Ellipse2D</code>.
                 * The iterator for this class is multi-threaded safe, which means
                 * that this <code>Ellipse2D</code> class guarantees that
                 * modifications to the geometry of this <code>Ellipse2D</code>
                 * object do not affect any iterations of that geometry that
                 * are already in process.
                 * @param at an optional <code>AffineTransform</code> to be applied to
                 *  the coordinates as they are returned in the iteration, or
                 *  <code>null</code> if untransformed coordinates are desired
                 * @return the <code>PathIterator</code> object that returns the
                 *           geometry of the outline of this <code>Ellipse2D</code>,
                 *           one segment at a time.
                 * @since 1.2
                 */
                // @ts-ignore
                getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
                /**
                 * Returns the hashcode for this <code>Ellipse2D</code>.
                 * @return the hashcode for this <code>Ellipse2D</code>.
                 * @since 1.6
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Determines whether or not the specified <code>Object</code> is
                 * equal to this <code>Ellipse2D</code>.  The specified
                 * <code>Object</code> is equal to this <code>Ellipse2D</code>
                 * if it is an instance of <code>Ellipse2D</code> and if its
                 * location and size are the same as this <code>Ellipse2D</code>.
                 * @param obj  an <code>Object</code> to be compared with this
                 *              <code>Ellipse2D</code>.
                 * @return <code>true</code> if <code>obj</code> is an instance
                 *           of <code>Ellipse2D</code> and has the same values;
                 *           <code>false</code> otherwise.
                 * @since 1.6
                 */
                // @ts-ignore
                equals(obj: any): boolean
            }
        }
    }
}
