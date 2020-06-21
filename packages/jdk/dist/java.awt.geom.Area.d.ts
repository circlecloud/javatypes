declare namespace java {
    namespace awt {
        namespace geom {
            /**
             * An <code>Area</code> object stores and manipulates a
             * resolution-independent description of an enclosed area of
             * 2-dimensional space.
             * <code>Area</code> objects can be transformed and can perform
             * various Constructive Area Geometry (CAG) operations when combined
             * with other <code>Area</code> objects.
             * The CAG operations include area
             * {@link #add addition}, {@link #subtract subtraction},
             * {@link #intersect intersection}, and {@link #exclusiveOr exclusive or}.
             * See the linked method documentation for examples of the various
             * operations.
             * <p>
             * The <code>Area</code> class implements the <code>Shape</code>
             * interface and provides full support for all of its hit-testing
             * and path iteration facilities, but an <code>Area</code> is more
             * specific than a generalized path in a number of ways:
             * <ul>
             * <li>Only closed paths and sub-paths are stored.
             * <code>Area</code> objects constructed from unclosed paths
             * are implicitly closed during construction as if those paths
             * had been filled by the <code>Graphics2D.fill</code> method.
             * <li>The interiors of the individual stored sub-paths are all
             * non-empty and non-overlapping.  Paths are decomposed during
             * construction into separate component non-overlapping parts,
             * empty pieces of the path are discarded, and then these
             * non-empty and non-overlapping properties are maintained
             * through all subsequent CAG operations.  Outlines of different
             * component sub-paths may touch each other, as long as they
             * do not cross so that their enclosed areas overlap.
             * <li>The geometry of the path describing the outline of the
             * <code>Area</code> resembles the path from which it was
             * constructed only in that it describes the same enclosed
             * 2-dimensional area, but may use entirely different types
             * and ordering of the path segments to do so.
             * </ul>
             * Interesting issues which are not always obvious when using
             * the <code>Area</code> include:
             * <ul>
             * <li>Creating an <code>Area</code> from an unclosed (open)
             * <code>Shape</code> results in a closed outline in the
             * <code>Area</code> object.
             * <li>Creating an <code>Area</code> from a <code>Shape</code>
             * which encloses no area (even when "closed") produces an
             * empty <code>Area</code>.  A common example of this issue
             * is that producing an <code>Area</code> from a line will
             * be empty since the line encloses no area.  An empty
             * <code>Area</code> will iterate no geometry in its
             * <code>PathIterator</code> objects.
             * <li>A self-intersecting <code>Shape</code> may be split into
             * two (or more) sub-paths each enclosing one of the
             * non-intersecting portions of the original path.
             * <li>An <code>Area</code> may take more path segments to
             * describe the same geometry even when the original
             * outline is simple and obvious.  The analysis that the
             * <code>Area</code> class must perform on the path may
             * not reflect the same concepts of "simple and obvious"
             * as a human being perceives.
             * </ul>
             * @since 1.2
             */
            // @ts-ignore
            class Area extends java.lang.Object implements java.awt.Shape, java.lang.Cloneable {
                /**
                 * Default constructor which creates an empty area.
                 * @since 1.2
                 */
                // @ts-ignore
                constructor()
                /**
                 * The <code>Area</code> class creates an area geometry from the
                 * specified {@link Shape} object.  The geometry is explicitly
                 * closed, if the <code>Shape</code> is not already closed.  The
                 * fill rule (even-odd or winding) specified by the geometry of the
                 * <code>Shape</code> is used to determine the resulting enclosed area.
                 * @param s  the <code>Shape</code> from which the area is constructed
                 * @throws NullPointerException if <code>s</code> is null
                 * @since 1.2
                 */
                // @ts-ignore
                constructor(s: java.awt.Shape)
                /**
                 * Adds the shape of the specified <code>Area</code> to the
                 * shape of this <code>Area</code>.
                 * The resulting shape of this <code>Area</code> will include
                 * the union of both shapes, or all areas that were contained
                 * in either this or the specified <code>Area</code>.
                 * <pre>
                 * // Example:
                 * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
                 * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
                 * a1.add(a2);
                 * a1(before)     +         a2         =     a1(after)
                 * ################     ################     ################
                 * ##############         ##############     ################
                 * ############             ############     ################
                 * ##########                 ##########     ################
                 * ########                     ########     ################
                 * ######                         ######     ######    ######
                 * ####                             ####     ####        ####
                 * ##                                 ##     ##            ##
                 * </pre>
                 * @param rhs  the <code>Area</code> to be added to the
                 *           current shape
                 * @throws NullPointerException if <code>rhs</code> is null
                 * @since 1.2
                 */
                // @ts-ignore
                public add(rhs: java.awt.geom.Area): void
                /**
                 * Subtracts the shape of the specified <code>Area</code> from the
                 * shape of this <code>Area</code>.
                 * The resulting shape of this <code>Area</code> will include
                 * areas that were contained only in this <code>Area</code>
                 * and not in the specified <code>Area</code>.
                 * <pre>
                 * // Example:
                 * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
                 * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
                 * a1.subtract(a2);
                 * a1(before)     -         a2         =     a1(after)
                 * ################     ################
                 * ##############         ##############     ##
                 * ############             ############     ####
                 * ##########                 ##########     ######
                 * ########                     ########     ########
                 * ######                         ######     ######
                 * ####                             ####     ####
                 * ##                                 ##     ##
                 * </pre>
                 * @param rhs  the <code>Area</code> to be subtracted from the
                 *           current shape
                 * @throws NullPointerException if <code>rhs</code> is null
                 * @since 1.2
                 */
                // @ts-ignore
                public subtract(rhs: java.awt.geom.Area): void
                /**
                 * Sets the shape of this <code>Area</code> to the intersection of
                 * its current shape and the shape of the specified <code>Area</code>.
                 * The resulting shape of this <code>Area</code> will include
                 * only areas that were contained in both this <code>Area</code>
                 * and also in the specified <code>Area</code>.
                 * <pre>
                 * // Example:
                 * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
                 * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
                 * a1.intersect(a2);
                 * a1(before)   intersect     a2         =     a1(after)
                 * ################     ################     ################
                 * ##############         ##############       ############
                 * ############             ############         ########
                 * ##########                 ##########           ####
                 * ########                     ########
                 * ######                         ######
                 * ####                             ####
                 * ##                                 ##
                 * </pre>
                 * @param rhs  the <code>Area</code> to be intersected with this
                 *           <code>Area</code>
                 * @throws NullPointerException if <code>rhs</code> is null
                 * @since 1.2
                 */
                // @ts-ignore
                public intersect(rhs: java.awt.geom.Area): void
                /**
                 * Sets the shape of this <code>Area</code> to be the combined area
                 * of its current shape and the shape of the specified <code>Area</code>,
                 * minus their intersection.
                 * The resulting shape of this <code>Area</code> will include
                 * only areas that were contained in either this <code>Area</code>
                 * or in the specified <code>Area</code>, but not in both.
                 * <pre>
                 * // Example:
                 * Area a1 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 0,8]);
                 * Area a2 = new Area([triangle 0,0 =&gt; 8,0 =&gt; 8,8]);
                 * a1.exclusiveOr(a2);
                 * a1(before)    xor        a2         =     a1(after)
                 * ################     ################
                 * ##############         ##############     ##            ##
                 * ############             ############     ####        ####
                 * ##########                 ##########     ######    ######
                 * ########                     ########     ################
                 * ######                         ######     ######    ######
                 * ####                             ####     ####        ####
                 * ##                                 ##     ##            ##
                 * </pre>
                 * @param rhs  the <code>Area</code> to be exclusive ORed with this
                 *           <code>Area</code>.
                 * @throws NullPointerException if <code>rhs</code> is null
                 * @since 1.2
                 */
                // @ts-ignore
                public exclusiveOr(rhs: java.awt.geom.Area): void
                /**
                 * Removes all of the geometry from this <code>Area</code> and
                 * restores it to an empty area.
                 * @since 1.2
                 */
                // @ts-ignore
                public reset(): void
                /**
                 * Tests whether this <code>Area</code> object encloses any area.
                 * @return <code>true</code> if this <code>Area</code> object
                 *  represents an empty area; <code>false</code> otherwise.
                 * @since 1.2
                 */
                // @ts-ignore
                public isEmpty(): boolean
                /**
                 * Tests whether this <code>Area</code> consists entirely of
                 * straight edged polygonal geometry.
                 * @return <code>true</code> if the geometry of this
                 *  <code>Area</code> consists entirely of line segments;
                 *  <code>false</code> otherwise.
                 * @since 1.2
                 */
                // @ts-ignore
                public isPolygonal(): boolean
                /**
                 * Tests whether this <code>Area</code> is rectangular in shape.
                 * @return <code>true</code> if the geometry of this
                 *  <code>Area</code> is rectangular in shape; <code>false</code>
                 *  otherwise.
                 * @since 1.2
                 */
                // @ts-ignore
                public isRectangular(): boolean
                /**
                 * Tests whether this <code>Area</code> is comprised of a single
                 * closed subpath.  This method returns <code>true</code> if the
                 * path contains 0 or 1 subpaths, or <code>false</code> if the path
                 * contains more than 1 subpath.  The subpaths are counted by the
                 * number of {@link PathIterator#SEG_MOVETO SEG_MOVETO}  segments
                 * that appear in the path.
                 * @return <code>true</code> if the <code>Area</code> is comprised
                 *  of a single basic geometry; <code>false</code> otherwise.
                 * @since 1.2
                 */
                // @ts-ignore
                public isSingular(): boolean
                /**
                 * Returns a high precision bounding {@link Rectangle2D} that
                 * completely encloses this <code>Area</code>.
                 * <p>
                 * The Area class will attempt to return the tightest bounding
                 * box possible for the Shape.  The bounding box will not be
                 * padded to include the control points of curves in the outline
                 * of the Shape, but should tightly fit the actual geometry of
                 * the outline itself.
                 * @return the bounding <code>Rectangle2D</code> for the
                 *  <code>Area</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public getBounds2D(): java.awt.geom.Rectangle2D
                /**
                 * Returns a bounding {@link Rectangle} that completely encloses
                 * this <code>Area</code>.
                 * <p>
                 * The Area class will attempt to return the tightest bounding
                 * box possible for the Shape.  The bounding box will not be
                 * padded to include the control points of curves in the outline
                 * of the Shape, but should tightly fit the actual geometry of
                 * the outline itself.  Since the returned object represents
                 * the bounding box with integers, the bounding box can only be
                 * as tight as the nearest integer coordinates that encompass
                 * the geometry of the Shape.
                 * @return the bounding <code>Rectangle</code> for the
                 *  <code>Area</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public getBounds(): java.awt.Rectangle
                /**
                 * Returns an exact copy of this <code>Area</code> object.
                 * @return Created clone object
                 * @since 1.2
                 */
                // @ts-ignore
                public clone(): any
                /**
                 * Tests whether the geometries of the two <code>Area</code> objects
                 * are equal.
                 * This method will return false if the argument is null.
                 * @param other  the <code>Area</code> to be compared to this
                 *           <code>Area</code>
                 * @return <code>true</code> if the two geometries are equal;
                 *           <code>false</code> otherwise.
                 * @since 1.2
                 */
                // @ts-ignore
                public equals(other: java.awt.geom.Area): boolean
                /**
                 * Transforms the geometry of this <code>Area</code> using the specified
                 * {@link AffineTransform}.  The geometry is transformed in place, which
                 * permanently changes the enclosed area defined by this object.
                 * @param t  the transformation used to transform the area
                 * @throws NullPointerException if <code>t</code> is null
                 * @since 1.2
                 */
                // @ts-ignore
                public transform(t: java.awt.geom.AffineTransform): void
                /**
                 * Creates a new <code>Area</code> object that contains the same
                 * geometry as this <code>Area</code> transformed by the specified
                 * <code>AffineTransform</code>.  This <code>Area</code> object
                 * is unchanged.
                 * @param t  the specified <code>AffineTransform</code> used to transform
                 *            the new <code>Area</code>
                 * @throws NullPointerException if <code>t</code> is null
                 * @return a new <code>Area</code> object representing the transformed
                 *            geometry.
                 * @since 1.2
                 */
                // @ts-ignore
                public createTransformedArea(t: java.awt.geom.AffineTransform): java.awt.geom.Area
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
                public intersects(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): boolean
                /**
                 * {@inheritDoc}
                 * @since 1.2
                 */
                // @ts-ignore
                public intersects(r: java.awt.geom.Rectangle2D): boolean
                /**
                 * Creates a {@link PathIterator} for the outline of this
                 * <code>Area</code> object.  This <code>Area</code> object is unchanged.
                 * @param at an optional <code>AffineTransform</code> to be applied to
                 *  the coordinates as they are returned in the iteration, or
                 *  <code>null</code> if untransformed coordinates are desired
                 * @return the <code>PathIterator</code> object that returns the
                 *           geometry of the outline of this <code>Area</code>, one
                 *           segment at a time.
                 * @since 1.2
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
                /**
                 * Creates a <code>PathIterator</code> for the flattened outline of
                 * this <code>Area</code> object.  Only uncurved path segments
                 * represented by the SEG_MOVETO, SEG_LINETO, and SEG_CLOSE point
                 * types are returned by the iterator.  This <code>Area</code>
                 * object is unchanged.
                 * @param at an optional <code>AffineTransform</code> to be
                 *  applied to the coordinates as they are returned in the
                 *  iteration, or <code>null</code> if untransformed coordinates
                 *  are desired
                 * @param flatness the maximum amount that the control points
                 *  for a given curve can vary from colinear before a subdivided
                 *  curve is replaced by a straight line connecting the end points
                 * @return the <code>PathIterator</code> object that returns the
                 *  geometry of the outline of this <code>Area</code>, one segment
                 *  at a time.
                 * @since 1.2
                 */
                // @ts-ignore
                public getPathIterator(at: java.awt.geom.AffineTransform, flatness: number /*double*/): java.awt.geom.PathIterator
            }
        }
    }
}
