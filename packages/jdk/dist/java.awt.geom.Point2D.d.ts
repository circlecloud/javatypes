declare namespace java {
    namespace awt {
        namespace geom {
            /**
             * The <code>Point2D</code> class defines a point representing a location
             * in {@code (x,y)} coordinate space.
             * <p>
             * This class is only the abstract superclass for all objects that
             * store a 2D coordinate.
             * The actual storage representation of the coordinates is left to
             * the subclass.
             * @author Jim Graham
             * @since 1.2
             */
            // @ts-ignore
            abstract class Point2D extends java.lang.Object implements java.lang.Cloneable {
                /**
                 * This is an abstract class that cannot be instantiated directly.
                 * Type-specific implementation subclasses are available for
                 * instantiation and provide a number of formats for storing
                 * the information necessary to satisfy the various accessor
                 * methods below.
                 * @see java.awt.geom.Point2D.Float
                 * @see java.awt.geom.Point2D.Double
                 * @see java.awt.Point
                 * @since 1.2
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the X coordinate of this <code>Point2D</code> in
                 * <code>double</code> precision.
                 * @return the X coordinate of this <code>Point2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getX(): number /*double*/
                /**
                 * Returns the Y coordinate of this <code>Point2D</code> in
                 * <code>double</code> precision.
                 * @return the Y coordinate of this <code>Point2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getY(): number /*double*/
                /**
                 * Sets the location of this <code>Point2D</code> to the
                 * specified <code>double</code> coordinates.
                 * @param x the new X coordinate of this {#code Point2D}
                 * @param y the new Y coordinate of this {#code Point2D}
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract setLocation(x: number /*double*/, y: number /*double*/): void
                /**
                 * Sets the location of this <code>Point2D</code> to the same
                 * coordinates as the specified <code>Point2D</code> object.
                 * @param p the specified <code>Point2D</code> to which to set
                 *  this <code>Point2D</code>
                 * @since 1.2
                 */
                // @ts-ignore
                public setLocation(p: java.awt.geom.Point2D): void
                /**
                 * Returns the square of the distance between two points.
                 * @param x1 the X coordinate of the first specified point
                 * @param y1 the Y coordinate of the first specified point
                 * @param x2 the X coordinate of the second specified point
                 * @param y2 the Y coordinate of the second specified point
                 * @return the square of the distance between the two
                 *  sets of specified coordinates.
                 * @since 1.2
                 */
                // @ts-ignore
                public static distanceSq(x1: number /*double*/, y1: number /*double*/, x2: number /*double*/, y2: number /*double*/): number /*double*/
                /**
                 * Returns the distance between two points.
                 * @param x1 the X coordinate of the first specified point
                 * @param y1 the Y coordinate of the first specified point
                 * @param x2 the X coordinate of the second specified point
                 * @param y2 the Y coordinate of the second specified point
                 * @return the distance between the two sets of specified
                 *  coordinates.
                 * @since 1.2
                 */
                // @ts-ignore
                public static distance(x1: number /*double*/, y1: number /*double*/, x2: number /*double*/, y2: number /*double*/): number /*double*/
                /**
                 * Returns the square of the distance from this
                 * <code>Point2D</code> to a specified point.
                 * @param px the X coordinate of the specified point to be measured
                 *            against this <code>Point2D</code>
                 * @param py the Y coordinate of the specified point to be measured
                 *            against this <code>Point2D</code>
                 * @return the square of the distance between this
                 *  <code>Point2D</code> and the specified point.
                 * @since 1.2
                 */
                // @ts-ignore
                public distanceSq(px: number /*double*/, py: number /*double*/): number /*double*/
                /**
                 * Returns the square of the distance from this
                 * <code>Point2D</code> to a specified <code>Point2D</code>.
                 * @param pt the specified point to be measured
                 *            against this <code>Point2D</code>
                 * @return the square of the distance between this
                 *  <code>Point2D</code> to a specified <code>Point2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public distanceSq(pt: java.awt.geom.Point2D): number /*double*/
                /**
                 * Returns the distance from this <code>Point2D</code> to
                 * a specified point.
                 * @param px the X coordinate of the specified point to be measured
                 *            against this <code>Point2D</code>
                 * @param py the Y coordinate of the specified point to be measured
                 *            against this <code>Point2D</code>
                 * @return the distance between this <code>Point2D</code>
                 *  and a specified point.
                 * @since 1.2
                 */
                // @ts-ignore
                public distance(px: number /*double*/, py: number /*double*/): number /*double*/
                /**
                 * Returns the distance from this <code>Point2D</code> to a
                 * specified <code>Point2D</code>.
                 * @param pt the specified point to be measured
                 *            against this <code>Point2D</code>
                 * @return the distance between this <code>Point2D</code> and
                 *  the specified <code>Point2D</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public distance(pt: java.awt.geom.Point2D): number /*double*/
                /**
                 * Creates a new object of the same class and with the
                 * same contents as this object.
                 * @return a clone of this instance.
                 * @exception OutOfMemoryError            if there is not enough memory.
                 * @see java.lang.Cloneable
                 * @since 1.2
                 */
                // @ts-ignore
                public clone(): any
                /**
                 * Returns the hashcode for this <code>Point2D</code>.
                 * @return a hash code for this <code>Point2D</code>.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Determines whether or not two points are equal. Two instances of
                 * <code>Point2D</code> are equal if the values of their
                 * <code>x</code> and <code>y</code> member fields, representing
                 * their position in the coordinate space, are the same.
                 * @param obj an object to be compared with this <code>Point2D</code>
                 * @return <code>true</code> if the object to be compared is
                 *          an instance of <code>Point2D</code> and has
                 *          the same values; <code>false</code> otherwise.
                 * @since 1.2
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
            }
        }
    }
}
