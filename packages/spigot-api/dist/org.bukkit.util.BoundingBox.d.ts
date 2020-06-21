declare namespace org {
    namespace bukkit {
        namespace util {
            /**
             * A mutable axis aligned bounding box (AABB).
             * <p>
             * This basically represents a rectangular box (specified by minimum and maximum
             * corners) that can for example be used to describe the position and extents of
             * an object (such as an entity, block, or rectangular region) in 3D space. Its
             * edges and faces are parallel to the axes of the cartesian coordinate system.
             * <p>
             * The bounding box may be degenerate (one or more sides having the length 0).
             * <p>
             * Because bounding boxes are mutable, storing them long term may be dangerous
             * if they get modified later. If you want to keep around a bounding box, it may
             * be wise to call {@link #clone()} in order to get a copy.
             */
            // @ts-ignore
            class BoundingBox extends java.lang.Object implements java.lang.Cloneable, org.bukkit.configuration.serialization.ConfigurationSerializable {
                /**
                 * Creates a new (degenerate) bounding box with all corner coordinates at
                 * <code>0</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a new bounding box from the given corner coordinates.
                 * @param x1 the first corner's x value
                 * @param y1 the first corner's y value
                 * @param z1 the first corner's z value
                 * @param x2 the second corner's x value
                 * @param y2 the second corner's y value
                 * @param z2 the second corner's z value
                 */
                // @ts-ignore
                constructor(x1: number /*double*/, y1: number /*double*/, z1: number /*double*/, x2: number /*double*/, y2: number /*double*/, z2: number /*double*/)
                /**
                 * Creates a new bounding box using the coordinates of the given vectors as
                 * corners.
                 * @param corner1 the first corner
                 * @param corner2 the second corner
                 * @return the bounding box
                 */
                // @ts-ignore
                public static of(corner1: org.bukkit.util.Vector, corner2: org.bukkit.util.Vector): org.bukkit.util.BoundingBox
                /**
                 * Creates a new bounding box using the coordinates of the given locations
                 * as corners.
                 * @param corner1 the first corner
                 * @param corner2 the second corner
                 * @return the bounding box
                 */
                // @ts-ignore
                public static of(corner1: org.bukkit.Location, corner2: org.bukkit.Location): org.bukkit.util.BoundingBox
                /**
                 * Creates a new bounding box using the coordinates of the given blocks as
                 * corners.
                 * <p>
                 * The bounding box will be sized to fully contain both blocks.
                 * @param corner1 the first corner block
                 * @param corner2 the second corner block
                 * @return the bounding box
                 */
                // @ts-ignore
                public static of(corner1: org.bukkit.block.Block, corner2: org.bukkit.block.Block): org.bukkit.util.BoundingBox
                /**
                 * Creates a new 1x1x1 sized bounding box containing the given block.
                 * @param block the block
                 * @return the bounding box
                 */
                // @ts-ignore
                public static of(block: org.bukkit.block.Block): org.bukkit.util.BoundingBox
                /**
                 * Creates a new bounding box using the given center and extents.
                 * @param center the center
                 * @param x 1/2 the size of the bounding box along the x axis
                 * @param y 1/2 the size of the bounding box along the y axis
                 * @param z 1/2 the size of the bounding box along the z axis
                 * @return the bounding box
                 */
                // @ts-ignore
                public static of(center: org.bukkit.util.Vector, x: number /*double*/, y: number /*double*/, z: number /*double*/): org.bukkit.util.BoundingBox
                /**
                 * Creates a new bounding box using the given center and extents.
                 * @param center the center
                 * @param x 1/2 the size of the bounding box along the x axis
                 * @param y 1/2 the size of the bounding box along the y axis
                 * @param z 1/2 the size of the bounding box along the z axis
                 * @return the bounding box
                 */
                // @ts-ignore
                public static of(center: org.bukkit.Location, x: number /*double*/, y: number /*double*/, z: number /*double*/): org.bukkit.util.BoundingBox
                /**
                 * Resizes this bounding box.
                 * @param x1 the first corner's x value
                 * @param y1 the first corner's y value
                 * @param z1 the first corner's z value
                 * @param x2 the second corner's x value
                 * @param y2 the second corner's y value
                 * @param z2 the second corner's z value
                 * @return this bounding box (resized)
                 */
                // @ts-ignore
                public resize(x1: number /*double*/, y1: number /*double*/, z1: number /*double*/, x2: number /*double*/, y2: number /*double*/, z2: number /*double*/): org.bukkit.util.BoundingBox
                /**
                 * Gets the minimum x value.
                 * @return the minimum x value
                 */
                // @ts-ignore
                public getMinX(): number /*double*/
                /**
                 * Gets the minimum y value.
                 * @return the minimum y value
                 */
                // @ts-ignore
                public getMinY(): number /*double*/
                /**
                 * Gets the minimum z value.
                 * @return the minimum z value
                 */
                // @ts-ignore
                public getMinZ(): number /*double*/
                /**
                 * Gets the minimum corner as vector.
                 * @return the minimum corner as vector
                 */
                // @ts-ignore
                public getMin(): org.bukkit.util.Vector
                /**
                 * Gets the maximum x value.
                 * @return the maximum x value
                 */
                // @ts-ignore
                public getMaxX(): number /*double*/
                /**
                 * Gets the maximum y value.
                 * @return the maximum y value
                 */
                // @ts-ignore
                public getMaxY(): number /*double*/
                /**
                 * Gets the maximum z value.
                 * @return the maximum z value
                 */
                // @ts-ignore
                public getMaxZ(): number /*double*/
                /**
                 * Gets the maximum corner as vector.
                 * @return the maximum corner vector
                 */
                // @ts-ignore
                public getMax(): org.bukkit.util.Vector
                /**
                 * Gets the width of the bounding box in the x direction.
                 * @return the width in the x direction
                 */
                // @ts-ignore
                public getWidthX(): number /*double*/
                /**
                 * Gets the width of the bounding box in the z direction.
                 * @return the width in the z direction
                 */
                // @ts-ignore
                public getWidthZ(): number /*double*/
                /**
                 * Gets the height of the bounding box.
                 * @return the height
                 */
                // @ts-ignore
                public getHeight(): number /*double*/
                /**
                 * Gets the volume of the bounding box.
                 * @return the volume
                 */
                // @ts-ignore
                public getVolume(): number /*double*/
                /**
                 * Gets the x coordinate of the center of the bounding box.
                 * @return the center's x coordinate
                 */
                // @ts-ignore
                public getCenterX(): number /*double*/
                /**
                 * Gets the y coordinate of the center of the bounding box.
                 * @return the center's y coordinate
                 */
                // @ts-ignore
                public getCenterY(): number /*double*/
                /**
                 * Gets the z coordinate of the center of the bounding box.
                 * @return the center's z coordinate
                 */
                // @ts-ignore
                public getCenterZ(): number /*double*/
                /**
                 * Gets the center of the bounding box.
                 * @return the center
                 */
                // @ts-ignore
                public getCenter(): org.bukkit.util.Vector
                /**
                 * Copies another bounding box.
                 * @param other the other bounding box
                 * @return this bounding box
                 */
                // @ts-ignore
                public copy(other: org.bukkit.util.BoundingBox): org.bukkit.util.BoundingBox
                /**
                 * Expands this bounding box by the given values in the corresponding
                 * directions.
                 * <p>
                 * Negative values will shrink the bounding box in the corresponding
                 * direction. Shrinking will be limited to the point where the affected
                 * opposite faces would meet if the they shrank at uniform speeds.
                 * @param negativeX the amount of expansion in the negative x direction
                 * @param negativeY the amount of expansion in the negative y direction
                 * @param negativeZ the amount of expansion in the negative z direction
                 * @param positiveX the amount of expansion in the positive x direction
                 * @param positiveY the amount of expansion in the positive y direction
                 * @param positiveZ the amount of expansion in the positive z direction
                 * @return this bounding box (now expanded)
                 */
                // @ts-ignore
                public expand(negativeX: number /*double*/, negativeY: number /*double*/, negativeZ: number /*double*/, positiveX: number /*double*/, positiveY: number /*double*/, positiveZ: number /*double*/): org.bukkit.util.BoundingBox
                /**
                 * Expands this bounding box uniformly by the given values in both positive
                 * and negative directions.
                 * <p>
                 * Negative values will shrink the bounding box. Shrinking will be limited
                 * to the bounding box's current size.
                 * @param x the amount of expansion in both positive and negative x
                 *  direction
                 * @param y the amount of expansion in both positive and negative y
                 *  direction
                 * @param z the amount of expansion in both positive and negative z
                 *  direction
                 * @return this bounding box (now expanded)
                 */
                // @ts-ignore
                public expand(x: number /*double*/, y: number /*double*/, z: number /*double*/): org.bukkit.util.BoundingBox
                /**
                 * Expands this bounding box uniformly by the given values in both positive
                 * and negative directions.
                 * <p>
                 * Negative values will shrink the bounding box. Shrinking will be limited
                 * to the bounding box's current size.
                 * @param expansion the expansion values
                 * @return this bounding box (now expanded)
                 */
                // @ts-ignore
                public expand(expansion: org.bukkit.util.Vector): org.bukkit.util.BoundingBox
                /**
                 * Expands this bounding box uniformly by the given value in all directions.
                 * <p>
                 * A negative value will shrink the bounding box. Shrinking will be limited
                 * to the bounding box's current size.
                 * @param expansion the amount of expansion
                 * @return this bounding box (now expanded)
                 */
                // @ts-ignore
                public expand(expansion: number /*double*/): org.bukkit.util.BoundingBox
                /**
                 * Expands this bounding box in the specified direction.
                 * <p>
                 * The magnitude of the direction will scale the expansion. A negative
                 * expansion value will shrink the bounding box in this direction. Shrinking
                 * will be limited to the bounding box's current size.
                 * @param dirX the x direction component
                 * @param dirY the y direction component
                 * @param dirZ the z direction component
                 * @param expansion the amount of expansion
                 * @return this bounding box (now expanded)
                 */
                // @ts-ignore
                public expand(dirX: number /*double*/, dirY: number /*double*/, dirZ: number /*double*/, expansion: number /*double*/): org.bukkit.util.BoundingBox
                /**
                 * Expands this bounding box in the specified direction.
                 * <p>
                 * The magnitude of the direction will scale the expansion. A negative
                 * expansion value will shrink the bounding box in this direction. Shrinking
                 * will be limited to the bounding box's current size.
                 * @param direction the direction
                 * @param expansion the amount of expansion
                 * @return this bounding box (now expanded)
                 */
                // @ts-ignore
                public expand(direction: org.bukkit.util.Vector, expansion: number /*double*/): org.bukkit.util.BoundingBox
                /**
                 * Expands this bounding box in the direction specified by the given block
                 * face.
                 * <p>
                 * A negative expansion value will shrink the bounding box in this
                 * direction. Shrinking will be limited to the bounding box's current size.
                 * @param blockFace the block face
                 * @param expansion the amount of expansion
                 * @return this bounding box (now expanded)
                 */
                // @ts-ignore
                public expand(blockFace: org.bukkit.block.BlockFace, expansion: number /*double*/): org.bukkit.util.BoundingBox
                /**
                 * Expands this bounding box in the specified direction.
                 * <p>
                 * Negative values will expand the bounding box in the negative direction,
                 * positive values will expand it in the positive direction. The magnitudes
                 * of the direction components determine the corresponding amounts of
                 * expansion.
                 * @param dirX the x direction component
                 * @param dirY the y direction component
                 * @param dirZ the z direction component
                 * @return this bounding box (now expanded)
                 */
                // @ts-ignore
                public expandDirectional(dirX: number /*double*/, dirY: number /*double*/, dirZ: number /*double*/): org.bukkit.util.BoundingBox
                /**
                 * Expands this bounding box in the specified direction.
                 * <p>
                 * Negative values will expand the bounding box in the negative direction,
                 * positive values will expand it in the positive direction. The magnitude
                 * of the direction vector determines the amount of expansion.
                 * @param direction the direction and magnitude of the expansion
                 * @return this bounding box (now expanded)
                 */
                // @ts-ignore
                public expandDirectional(direction: org.bukkit.util.Vector): org.bukkit.util.BoundingBox
                /**
                 * Expands this bounding box to contain (or border) the specified position.
                 * @param posX the x position value
                 * @param posY the y position value
                 * @param posZ the z position value
                 * @return this bounding box (now expanded)
                 * @see #contains(double, double, double)
                 */
                // @ts-ignore
                public union(posX: number /*double*/, posY: number /*double*/, posZ: number /*double*/): org.bukkit.util.BoundingBox
                /**
                 * Expands this bounding box to contain (or border) the specified position.
                 * @param position the position
                 * @return this bounding box (now expanded)
                 * @see #contains(double, double, double)
                 */
                // @ts-ignore
                public union(position: org.bukkit.util.Vector): org.bukkit.util.BoundingBox
                /**
                 * Expands this bounding box to contain (or border) the specified position.
                 * @param position the position
                 * @return this bounding box (now expanded)
                 * @see #contains(double, double, double)
                 */
                // @ts-ignore
                public union(position: org.bukkit.Location): org.bukkit.util.BoundingBox
                /**
                 * Expands this bounding box to contain both this and the given bounding
                 * box.
                 * @param other the other bounding box
                 * @return this bounding box (now expanded)
                 */
                // @ts-ignore
                public union(other: org.bukkit.util.BoundingBox): org.bukkit.util.BoundingBox
                /**
                 * Resizes this bounding box to represent the intersection of this and the
                 * given bounding box.
                 * @param other the other bounding box
                 * @return this bounding box (now representing the intersection)
                 * @throws IllegalArgumentException if the bounding boxes don't overlap
                 */
                // @ts-ignore
                public intersection(other: org.bukkit.util.BoundingBox): org.bukkit.util.BoundingBox
                /**
                 * Shifts this bounding box by the given amounts.
                 * @param shiftX the shift in x direction
                 * @param shiftY the shift in y direction
                 * @param shiftZ the shift in z direction
                 * @return this bounding box (now shifted)
                 */
                // @ts-ignore
                public shift(shiftX: number /*double*/, shiftY: number /*double*/, shiftZ: number /*double*/): org.bukkit.util.BoundingBox
                /**
                 * Shifts this bounding box by the given amounts.
                 * @param shift the shift
                 * @return this bounding box (now shifted)
                 */
                // @ts-ignore
                public shift(shift: org.bukkit.util.Vector): org.bukkit.util.BoundingBox
                /**
                 * Shifts this bounding box by the given amounts.
                 * @param shift the shift
                 * @return this bounding box (now shifted)
                 */
                // @ts-ignore
                public shift(shift: org.bukkit.Location): org.bukkit.util.BoundingBox
                /**
                 * Checks if this bounding box overlaps with the given bounding box.
                 * <p>
                 * Bounding boxes that are only intersecting at the borders are not
                 * considered overlapping.
                 * @param other the other bounding box
                 * @return <code>true</code> if overlapping
                 */
                // @ts-ignore
                public overlaps(other: org.bukkit.util.BoundingBox): boolean
                /**
                 * Checks if this bounding box overlaps with the bounding box that is
                 * defined by the given corners.
                 * <p>
                 * Bounding boxes that are only intersecting at the borders are not
                 * considered overlapping.
                 * @param min the first corner
                 * @param max the second corner
                 * @return <code>true</code> if overlapping
                 */
                // @ts-ignore
                public overlaps(min: org.bukkit.util.Vector, max: org.bukkit.util.Vector): boolean
                /**
                 * Checks if this bounding box contains the specified position.
                 * <p>
                 * Positions exactly on the minimum borders of the bounding box are
                 * considered to be inside the bounding box, while positions exactly on the
                 * maximum borders are considered to be outside. This allows bounding boxes
                 * to reside directly next to each other with positions always only residing
                 * in exactly one of them.
                 * @param x the position's x coordinates
                 * @param y the position's y coordinates
                 * @param z the position's z coordinates
                 * @return <code>true</code> if the bounding box contains the position
                 */
                // @ts-ignore
                public contains(x: number /*double*/, y: number /*double*/, z: number /*double*/): boolean
                /**
                 * Checks if this bounding box contains the specified position.
                 * <p>
                 * Positions exactly on the minimum borders of the bounding box are
                 * considered to be inside the bounding box, while positions exactly on the
                 * maximum borders are considered to be outside. This allows bounding boxes
                 * to reside directly next to each other with positions always only residing
                 * in exactly one of them.
                 * @param position the position
                 * @return <code>true</code> if the bounding box contains the position
                 */
                // @ts-ignore
                public contains(position: org.bukkit.util.Vector): boolean
                /**
                 * Checks if this bounding box fully contains the given bounding box.
                 * @param other the other bounding box
                 * @return <code>true</code> if the bounding box contains the given bounding
                 *  box
                 */
                // @ts-ignore
                public contains(other: org.bukkit.util.BoundingBox): boolean
                /**
                 * Checks if this bounding box fully contains the bounding box that is
                 * defined by the given corners.
                 * @param min the first corner
                 * @param max the second corner
                 * @return <code>true</code> if the bounding box contains the specified
                 *      bounding box
                 */
                // @ts-ignore
                public contains(min: org.bukkit.util.Vector, max: org.bukkit.util.Vector): boolean
                /**
                 * Calculates the intersection of this bounding box with the specified line
                 * segment.
                 * <p>
                 * Intersections at edges and corners yield one of the affected block faces
                 * as hit result, but it is not defined which of them.
                 * @param start the start position
                 * @param direction the ray direction
                 * @param maxDistance the maximum distance
                 * @return the ray trace hit result, or <code>null</code> if there is no hit
                 */
                // @ts-ignore
                public rayTrace(start: org.bukkit.util.Vector, direction: org.bukkit.util.Vector, maxDistance: number /*double*/): org.bukkit.util.RayTraceResult
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                // @ts-ignore
                public toString(): string
                /**
                 * Creates a copy of this bounding box.
                 * @return the cloned bounding box
                 */
                // @ts-ignore
                public clone(): org.bukkit.util.BoundingBox
                // @ts-ignore
                public serialize(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                // @ts-ignore
                public static deserialize(args: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.bukkit.util.BoundingBox
            }
        }
    }
}
