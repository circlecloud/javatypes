declare namespace java {
    namespace awt {
        namespace geom {
            /**
             * The <code>RoundRectangle2D</code> class defines a rectangle with
             * rounded corners defined by a location {@code (x,y)}, a
             * dimension {@code (w x h)}, and the width and height of an arc
             * with which to round the corners.
             * <p>
             * This class is the abstract superclass for all objects that
             * store a 2D rounded rectangle.
             * The actual storage representation of the coordinates is left to
             * the subclass.
             * @author Jim Graham
             * @since 1.2
             */
            // @ts-ignore
            class RoundRectangle2D extends java.awt.geom.RectangularShape {
                /**
                 * This is an abstract class that cannot be instantiated directly.
                 * Type-specific implementation subclasses are available for
                 * instantiation and provide a number of formats for storing
                 * the information necessary to satisfy the various accessor
                 * methods below.
                 * @see java.awt.geom.RoundRectangle2D.Float
                 * @see java.awt.geom.RoundRectangle2D.Double
                 * @since 1.2
                 */
                // @ts-ignore
                constructor()
                /**
                 * Gets the width of the arc that rounds off the corners.
                 * @return the width of the arc that rounds off the corners
                 *  of this <code>RoundRectangle2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                abstract getArcWidth(): double
                /**
                 * Gets the height of the arc that rounds off the corners.
                 * @return the height of the arc that rounds off the corners
                 *  of this <code>RoundRectangle2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                abstract getArcHeight(): double
                /**
                 * Sets the location, size, and corner radii of this
                 * <code>RoundRectangle2D</code> to the specified
                 * <code>double</code> values.
                 * @param x the X coordinate to which to set the
                 *           location of this <code>RoundRectangle2D</code>
                 * @param y the Y coordinate to which to set the
                 *           location of this <code>RoundRectangle2D</code>
                 * @param w the width to which to set this
                 *           <code>RoundRectangle2D</code>
                 * @param h the height to which to set this
                 *           <code>RoundRectangle2D</code>
                 * @param arcWidth the width to which to set the arc of this
                 *                  <code>RoundRectangle2D</code>
                 * @param arcHeight the height to which to set the arc of this
                 *                   <code>RoundRectangle2D</code>
                 * @since 1.2
                 */
                // @ts-ignore
                abstract setRoundRect(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/, arcWidth: number /*double*/, arcHeight: number /*double*/): void
                /**
                 * Sets this <code>RoundRectangle2D</code> to be the same as the
                 * specified <code>RoundRectangle2D</code>.
                 * @param rr the specified <code>RoundRectangle2D</code>
                 * @since 1.2
                 */
                // @ts-ignore
                setRoundRect(rr: java.awt.geom.RoundRectangle2D): void
                /**
                 * {@inheritDoc}
                 * @since 1.2
                 */
                // @ts-ignore
                setFrame(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): void
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
                 * <code>RoundRectangle2D</code>.
                 * The iterator for this class is multi-threaded safe, which means
                 * that this <code>RoundRectangle2D</code> class guarantees that
                 * modifications to the geometry of this <code>RoundRectangle2D</code>
                 * object do not affect any iterations of that geometry that
                 * are already in process.
                 * @param at an optional <code>AffineTransform</code> to be applied to
                 *  the coordinates as they are returned in the iteration, or
                 *  <code>null</code> if untransformed coordinates are desired
                 * @return the <code>PathIterator</code> object that returns the
                 *           geometry of the outline of this
                 *           <code>RoundRectangle2D</code>, one segment at a time.
                 * @since 1.2
                 */
                // @ts-ignore
                getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
                /**
                 * Returns the hashcode for this <code>RoundRectangle2D</code>.
                 * @return the hashcode for this <code>RoundRectangle2D</code>.
                 * @since 1.6
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Determines whether or not the specified <code>Object</code> is
                 * equal to this <code>RoundRectangle2D</code>.  The specified
                 * <code>Object</code> is equal to this <code>RoundRectangle2D</code>
                 * if it is an instance of <code>RoundRectangle2D</code> and if its
                 * location, size, and corner arc dimensions are the same as this
                 * <code>RoundRectangle2D</code>.
                 * @param obj  an <code>Object</code> to be compared with this
                 *              <code>RoundRectangle2D</code>.
                 * @return <code>true</code> if <code>obj</code> is an instance
                 *           of <code>RoundRectangle2D</code> and has the same values;
                 *           <code>false</code> otherwise.
                 * @since 1.6
                 */
                // @ts-ignore
                equals(obj: any): boolean
            }
        }
    }
}
