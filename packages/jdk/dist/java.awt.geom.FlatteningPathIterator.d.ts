declare namespace java {
    namespace awt {
        namespace geom {
            /**
             * The <code>FlatteningPathIterator</code> class returns a flattened view of
             * another {@link PathIterator} object.  Other {@link java.awt.Shape Shape}
             * classes can use this class to provide flattening behavior for their paths
             * without having to perform the interpolation calculations themselves.
             * @author Jim Graham
             */
            // @ts-ignore
            class FlatteningPathIterator extends java.lang.Object implements java.awt.geom.PathIterator {
                /**
                 * Constructs a new <code>FlatteningPathIterator</code> object that
                 * flattens a path as it iterates over it.  The iterator does not
                 * subdivide any curve read from the source iterator to more than
                 * 10 levels of subdivision which yields a maximum of 1024 line
                 * segments per curve.
                 * @param src the original unflattened path being iterated over
                 * @param flatness the maximum allowable distance between the
                 *  control points and the flattened curve
                 */
                // @ts-ignore
                constructor(src: java.awt.geom.PathIterator, flatness: number /*double*/)
                /**
                 * Constructs a new <code>FlatteningPathIterator</code> object
                 * that flattens a path as it iterates over it.
                 * The <code>limit</code> parameter allows you to control the
                 * maximum number of recursive subdivisions that the iterator
                 * can make before it assumes that the curve is flat enough
                 * without measuring against the <code>flatness</code> parameter.
                 * The flattened iteration therefore never generates more than
                 * a maximum of <code>(2^limit)</code> line segments per curve.
                 * @param src the original unflattened path being iterated over
                 * @param flatness the maximum allowable distance between the
                 *  control points and the flattened curve
                 * @param limit the maximum number of recursive subdivisions
                 *  allowed for any curved segment
                 * @exception IllegalArgumentException if
                 *           <code>flatness</code> or <code>limit</code>
                 *           is less than zero
                 */
                // @ts-ignore
                constructor(src: java.awt.geom.PathIterator, flatness: number /*double*/, limit: number /*int*/)
                /**
                 * Returns the flatness of this iterator.
                 * @return the flatness of this <code>FlatteningPathIterator</code>.
                 */
                // @ts-ignore
                public getFlatness(): number /*double*/
                /**
                 * Returns the recursion limit of this iterator.
                 * @return the recursion limit of this
                 *  <code>FlatteningPathIterator</code>.
                 */
                // @ts-ignore
                public getRecursionLimit(): number /*int*/
                /**
                 * Returns the winding rule for determining the interior of the
                 * path.
                 * @return the winding rule of the original unflattened path being
                 *  iterated over.
                 * @see PathIterator#WIND_EVEN_ODD
                 * @see PathIterator#WIND_NON_ZERO
                 */
                // @ts-ignore
                public getWindingRule(): number /*int*/
                /**
                 * Tests if the iteration is complete.
                 * @return <code>true</code> if all the segments have
                 *  been read; <code>false</code> otherwise.
                 */
                // @ts-ignore
                public isDone(): boolean
                /**
                 * Moves the iterator to the next segment of the path forwards
                 * along the primary direction of traversal as long as there are
                 * more points in that direction.
                 */
                // @ts-ignore
                public next(): void
                /**
                 * Returns the coordinates and type of the current path segment in
                 * the iteration.
                 * The return value is the path segment type:
                 * SEG_MOVETO, SEG_LINETO, or SEG_CLOSE.
                 * A float array of length 6 must be passed in and can be used to
                 * store the coordinates of the point(s).
                 * Each point is stored as a pair of float x,y coordinates.
                 * SEG_MOVETO and SEG_LINETO types return one point,
                 * and SEG_CLOSE does not return any points.
                 * @param coords an array that holds the data returned from
                 *  this method
                 * @return the path segment type of the current path segment.
                 * @exception NoSuchElementException if there
                 *           are no more elements in the flattening path to be
                 *           returned.
                 * @see PathIterator#SEG_MOVETO
                 * @see PathIterator#SEG_LINETO
                 * @see PathIterator#SEG_CLOSE
                 */
                // @ts-ignore
                public currentSegment(coords: number /*float*/[]): number /*int*/
                /**
                 * Returns the coordinates and type of the current path segment in
                 * the iteration.
                 * The return value is the path segment type:
                 * SEG_MOVETO, SEG_LINETO, or SEG_CLOSE.
                 * A double array of length 6 must be passed in and can be used to
                 * store the coordinates of the point(s).
                 * Each point is stored as a pair of double x,y coordinates.
                 * SEG_MOVETO and SEG_LINETO types return one point,
                 * and SEG_CLOSE does not return any points.
                 * @param coords an array that holds the data returned from
                 *  this method
                 * @return the path segment type of the current path segment.
                 * @exception NoSuchElementException if there
                 *           are no more elements in the flattening path to be
                 *           returned.
                 * @see PathIterator#SEG_MOVETO
                 * @see PathIterator#SEG_LINETO
                 * @see PathIterator#SEG_CLOSE
                 */
                // @ts-ignore
                public currentSegment(coords: number /*double*/[]): number /*int*/
            }
        }
    }
}
