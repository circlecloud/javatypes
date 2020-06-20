declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace blockray {
                    /**
                     * Represents a block hit by a ray. Stores more information than a regular
                     * location. Extra object are lazily computed and cached.
                     * @param <E> The extent containing the hit
                     */
                    // @ts-ignore
                    class BlockRayHit<E extends org.spongepowered.api.world.extent.Extent> extends java.lang.Object {
                        /**
                         * Constructs a new block ray hit from the extent that contains it, the
                         * coordinates and the face that was entered.
                         * @param extent The extent of the block
                         * @param x The x coordinate of the block
                         * @param y The y coordinate of the block
                         * @param z The x coordinate of the block
                         * @param direction A normal vector of the ray direction
                         * @param normal The normal of the entered face, edge or corner
                         */
                        // @ts-ignore
                        constructor(extent: E extends org.spongepowered.api.world.extent.Extent, x: number /*double*/, y: number /*double*/, z: number /*double*/, direction: Vector3d, normal: Vector3d)
                        /**
                         * Returns the extent that contains the block.
                         * @return The extent
                         */
                        // @ts-ignore
                        getExtent(): E
                        /**
                         * Returns the x coordinate of the intersection.
                         * @return The x coordinate
                         */
                        // @ts-ignore
                        getX(): double
                        /**
                         * Returns the y coordinate of the intersection.
                         * @return The y coordinate
                         */
                        // @ts-ignore
                        getY(): double
                        /**
                         * Returns the z coordinate of the intersection.
                         * @return The z coordinate
                         */
                        // @ts-ignore
                        getZ(): double
                        /**
                         * Returns the position of the intersection.
                         * @return The intersection coordinates
                         */
                        // @ts-ignore
                        getPosition(): Vector3d
                        /**
                         * Returns the x coordinate of the block that was hit.
                         * @return The x coordinate
                         */
                        // @ts-ignore
                        getBlockX(): int
                        /**
                         * Returns the y coordinate of the block that was hit.
                         * @return The y coordinate
                         */
                        // @ts-ignore
                        getBlockY(): int
                        /**
                         * Returns the z coordinate of the block that was hit.
                         * @return The z coordinate
                         */
                        // @ts-ignore
                        getBlockZ(): int
                        /**
                         * Returns the position of the block that was hit.
                         * @return The coordinates of the hit block
                         */
                        // @ts-ignore
                        getBlockPosition(): Vector3i
                        /**
                         * Returns the location of the hit block, <b>not the intersection
                         * location</b>.
                         * @return The location of the hit block
                         */
                        // @ts-ignore
                        getLocation(): org.spongepowered.api.world.Location<E>
                        /**
                         * Returns the direction of the ray as a normalized vector.
                         * @return The ray direction
                         */
                        // @ts-ignore
                        getDirection(): Vector3d
                        /**
                         * Returns the normal of the entered face, edge or corner.
                         * Edges and corners use the average of the surrounding faces.
                         * @return The entered face, edge or corner normal
                         */
                        // @ts-ignore
                        getNormal(): Vector3d
                        /**
                         * Returns all the intersected faces. In most cases, this is only one face,
                         * but if the ray enters an edge, two faces are returned (the ones
                         * that form it). Similarly for corners, but three faces.
                         * @return An array of intersected faces, between one and three in length
                         */
                        // @ts-ignore
                        getFaces(): org.spongepowered.api.util.Direction[]
                        /**
                         * Calls the mapper function on the extent and position.
                         * @param mapper The mapper
                         * @param <T> The return type of the mapper
                         * @return The results of the mapping
                         */
                        // @ts-ignore
                        map<T>(mapper: java.util.function.BiFunction<E, Vector3d, T> | java.util.function$.BiFunction<E, Vector3d, T>): T
                        /**
                         * Calls the mapper function on the extent and block position.
                         * @param mapper The mapper
                         * @param <T> The return type of the mapper
                         * @return The results of the mapping
                         */
                        // @ts-ignore
                        mapBlock<T>(mapper: java.util.function.BiFunction<E, Vector3i, T> | java.util.function$.BiFunction<E, Vector3i, T>): T
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
