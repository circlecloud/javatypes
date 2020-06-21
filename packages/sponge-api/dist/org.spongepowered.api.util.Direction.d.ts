declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * Represent the 16 main and secondary cardinal directions plus up and down.
                 * With the following assumptions:
                 * <ul>
                 * <li>{@link #NORTH} targeting towards -Z</li>
                 * <li>{@link #EAST}  targeting towards +X</li>
                 * <li>{@link #SOUTH} targeting towards +Z</li>
                 * <li>{@link #WEST}  targeting towards -X</li>
                 * <li>{@link #UP}    targeting towards +Y</li>
                 * <li>{@link #DOWN}  targeting towards -Y</li>
                 * </ul>
                 */
                // @ts-ignore
                class Direction extends java.lang.Enum<org.spongepowered.api.util.Direction> {
                    // @ts-ignore
                    readonly NORTH: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly NORTH_NORTHEAST: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly NORTHEAST: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly EAST_NORTHEAST: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly EAST: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly EAST_SOUTHEAST: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly SOUTHEAST: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly SOUTH_SOUTHEAST: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly SOUTH: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly SOUTH_SOUTHWEST: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly SOUTHWEST: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly WEST_SOUTHWEST: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly WEST: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly WEST_NORTHWEST: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly NORTHWEST: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly NORTH_NORTHWEST: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly UP: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly DOWN: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    readonly NONE: org.spongepowered.api.util.Direction
                    // @ts-ignore
                    values(): org.spongepowered.api.util.Direction[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.spongepowered.api.util.Direction
                    /**
                     * Gets the closest direction from the given vector. If the vector is the
                     * 0-Vector, this method returns {@link #NONE}. If the vector has the same
                     * horizontal and vertical length, a horizontal direction will be returned.
                     * If the vector is halfway between two directions the clockwise next will
                     * be selected.
                     * @param vector The vector to convert to a direction
                     * @return The closest horizontal direction.
                     */
                    // @ts-ignore
                    getClosest(vector: Vector3d): org.spongepowered.api.util.Direction
                    /**
                     * Gets the closest direction from the given vector. If the vector is the
                     * 0-Vector, this method returns {@link #NONE}. If the vector has the same
                     * horizontal and vertical length, a horizontal direction will be returned.
                     * If the vector is halfway between two directions the clockwise next will
                     * be selected.
                     * @param vector The vector to convert to a direction
                     * @param smallestDivision The smallest compass division that can be
                     *      returned
                     * @return The closest horizontal direction.
                     */
                    // @ts-ignore
                    getClosest(vector: Vector3d, smallestDivision: org.spongepowered.api.util.Direction.Division): org.spongepowered.api.util.Direction
                    /**
                     * Gets the closest horizontal direction from the given vector. If the
                     * vector is the 0-Vector (ignoring y), this method returns {@link #NONE}.
                     * If the vector is halfway between two directions the clockwise next will
                     * be selected.
                     * @param vector The vector to convert to a direction
                     * @return The closest horizontal direction.
                     */
                    // @ts-ignore
                    getClosestHorizontal(vector: Vector3d): org.spongepowered.api.util.Direction
                    /**
                     * Gets the closest horizontal direction from the given vector. If the
                     * vector is the 0-Vector (ignoring y), this method returns {@link #NONE}.
                     * If the vector is halfway between two directions the clockwise next will
                     * be selected.
                     * @param vector The vector to convert to a direction
                     * @param smallestDivision The smallest compass division that can be
                     *      returned
                     * @return The closest horizontal direction.
                     */
                    // @ts-ignore
                    getClosestHorizontal(vector: Vector3d, smallestDivision: org.spongepowered.api.util.Direction.Division): org.spongepowered.api.util.Direction
                    /**
                     * Gets the direction associated with the given axis.
                     * @param axis The axis
                     * @return The direction
                     */
                    // @ts-ignore
                    getFromAxis(axis: org.spongepowered.api.util.Axis): org.spongepowered.api.util.Direction
                    /**
                     * Gets the direction of the axis along the given {@link AxisDirection}.
                     * @param axis The axis
                     * @param direction The direction along the axis
                     * @return The direction
                     */
                    // @ts-ignore
                    getFromAxis(axis: org.spongepowered.api.util.Axis, direction: org.spongepowered.api.util.AxisDirection): org.spongepowered.api.util.Direction
                    /**
                     * Gets the opposite direction i.e. 180 degrees from this direction.
                     * @return The opposite direction
                     */
                    // @ts-ignore
                    getOpposite(): org.spongepowered.api.util.Direction
                    /**
                     * Returns whether the given direction is opposite this.
                     * @param d Direction to test
                     * @return True if it is opposite
                     */
                    // @ts-ignore
                    isOpposite(d: org.spongepowered.api.util.Direction): boolean
                    /**
                     * Return true if the direction is of a cardinal direction (north, west
                     * east, and south).
                     * <p>This evaluates as false for directions that have a non-zero
                     * Y-component.</p>
                     * @return True if cardinal
                     */
                    // @ts-ignore
                    isCardinal(): boolean
                    /**
                     * Return true if the direction is of an ordinal direction (northwest,
                     * southwest, southeast, northeast).
                     * @return True if ordinal
                     */
                    // @ts-ignore
                    isOrdinal(): boolean
                    /**
                     * Return true if the direction is of a secondary ordinal direction
                     * (north-northwest, north-northeast, south-southwest, etc.).
                     * @return True if secondary ordinal
                     */
                    // @ts-ignore
                    isSecondaryOrdinal(): boolean
                    /**
                     * Return whether Y component is non-zero.
                     * @return True if the Y component is non-zero
                     */
                    // @ts-ignore
                    isUpright(): boolean
                    /**
                     * Returns the direction as a unit offset vector.
                     * This vector is also suitable as a unit direction vector.
                     * @return The direction as an offset
                     */
                    // @ts-ignore
                    asOffset(): Vector3d
                    /**
                     * Returns the direction as a block offset vector.
                     * For secondary ordinals the results are approximated to the nearest
                     * block.
                     * <p>The difference between this offset and {@link #asOffset()} is that
                     * a block offset has unit components instead of unit length.</p>
                     * @return The direction as a block offset
                     */
                    // @ts-ignore
                    asBlockOffset(): Vector3i
                }
            }
        }
    }
}
