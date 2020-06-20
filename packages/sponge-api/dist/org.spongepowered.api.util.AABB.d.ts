declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * An axis aligned bounding box. That is, an un-rotated cuboid.
                 * It is represented by its minimum and maximum corners.
                 * <p>The box will never be degenerate: the corners are always not equal and
                 * respect the minimum and maximum properties.</p>
                 * <p>This class is immutable, all objects returned are either new instances or
                 * itself.</p>
                 */
                // @ts-ignore
                class AABB extends java.lang.Object {
                    /**
                     * Constructs a new bounding box from two opposite corners.
                     * Fails the resulting box would be degenerate (a dimension is 0).
                     * @param firstCorner The first corner
                     * @param secondCorner The second corner
                     */
                    // @ts-ignore
                    constructor(firstCorner: Vector3i, secondCorner: Vector3i)
                    /**
                     * Constructs a new bounding box from two opposite corners.
                     * Fails the resulting box would be degenerate (a dimension is 0).
                     * @param x1 The first corner x coordinate
                     * @param y1 The first corner y coordinate
                     * @param z1 The first corner z coordinate
                     * @param x2 The second corner x coordinate
                     * @param y2 The second corner y coordinate
                     * @param z2 The second corner z coordinate
                     */
                    // @ts-ignore
                    constructor(x1: number /*double*/, y1: number /*double*/, z1: number /*double*/, x2: number /*double*/, y2: number /*double*/, z2: number /*double*/)
                    /**
                     * Constructs a new bounding box from two opposite corners.
                     * Fails the resulting box would be degenerate (a dimension is 0).
                     * @param firstCorner The first corner
                     * @param secondCorner The second corner
                     */
                    // @ts-ignore
                    constructor(firstCorner: Vector3d, secondCorner: Vector3d)
                    /**
                     * The minimum corner of the box.
                     * @return The minimum corner
                     */
                    // @ts-ignore
                    getMin(): Vector3d
                    /**
                     * The maximum corner of the box.
                     * @return The maximum corner
                     */
                    // @ts-ignore
                    getMax(): Vector3d
                    /**
                     * Returns the center of the box, halfway between each corner.
                     * @return The center
                     */
                    // @ts-ignore
                    getCenter(): Vector3d
                    /**
                     * Gets the size of the box.
                     * @return The size
                     */
                    // @ts-ignore
                    getSize(): Vector3d
                    /**
                     * Checks if the bounding box contains a point.
                     * @param point The point to check
                     * @return Whether or not the box contains the point
                     */
                    // @ts-ignore
                    contains(point: Vector3i): boolean
                    /**
                     * Checks if the bounding box contains a point.
                     * @param point The point to check
                     * @return Whether or not the box contains the point
                     */
                    // @ts-ignore
                    contains(point: Vector3d): boolean
                    /**
                     * Checks if the bounding box contains a point.
                     * @param x The x coordinate of the point
                     * @param y The y coordinate of the point
                     * @param z The z coordinate of the point
                     * @return Whether or not the box contains the point
                     */
                    // @ts-ignore
                    contains(x: number /*double*/, y: number /*double*/, z: number /*double*/): boolean
                    /**
                     * Checks if the bounding box intersects another.
                     * @param other The other bounding box to check
                     * @return Whether this bounding box intersects with the other
                     */
                    // @ts-ignore
                    intersects(other: org.spongepowered.api.util.AABB): boolean
                    /**
                     * Tests for intersection between the box and a ray defined by a starting
                     * point and a direction.
                     * @param start The starting point of the ray
                     * @param direction The direction of the ray
                     * @return An intersection point its normal, if any
                     */
                    // @ts-ignore
                    intersects(start: Vector3d, direction: Vector3d): java.util.Optional<org.spongepowered.api.util.Tuple<Vector3d, Vector3d>>
                    /**
                     * Offsets this bounding box by a given amount and returns a new box.
                     * @param offset The offset to apply
                     * @return The new offset box
                     */
                    // @ts-ignore
                    offset(offset: Vector3i): org.spongepowered.api.util.AABB
                    /**
                     * Offsets this bounding box by a given amount and returns a new box.
                     * @param offset The offset to apply
                     * @return The new offset box
                     */
                    // @ts-ignore
                    offset(offset: Vector3d): org.spongepowered.api.util.AABB
                    /**
                     * Offsets this bounding box by a given amount and returns a new box.
                     * @param x The amount of offset for the x coordinate
                     * @param y The amount of offset for the y coordinate
                     * @param z The amount of offset for the z coordinate
                     * @return The new offset box
                     */
                    // @ts-ignore
                    offset(x: number /*double*/, y: number /*double*/, z: number /*double*/): org.spongepowered.api.util.AABB
                    /**
                     * Expands this bounding box by a given amount in both directions and
                     * returns a new box. The expansion is applied half and half to the
                     * minimum and maximum corners.
                     * @param amount The amount of expansion to apply
                     * @return The new expanded box
                     */
                    // @ts-ignore
                    expand(amount: Vector3i): org.spongepowered.api.util.AABB
                    /**
                     * Expands this bounding box by a given amount in both directions and
                     * returns a new box. The expansion is applied half and half to the
                     * minimum and maximum corners.
                     * @param amount The amount of expansion to apply
                     * @return The new expanded box
                     */
                    // @ts-ignore
                    expand(amount: Vector3d): org.spongepowered.api.util.AABB
                    /**
                     * Expands this bounding box by a given amount in both directions and
                     * returns a new box. The expansion is applied half and half to the
                     * minimum and maximum corners.
                     * @param x The amount of expansion for the x coordinate
                     * @param y The amount of expansion for the y coordinate
                     * @param z The amount of expansion for the z coordinate
                     * @return The new expanded box
                     */
                    // @ts-ignore
                    expand(x: number /*double*/, y: number /*double*/, z: number /*double*/): org.spongepowered.api.util.AABB
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
