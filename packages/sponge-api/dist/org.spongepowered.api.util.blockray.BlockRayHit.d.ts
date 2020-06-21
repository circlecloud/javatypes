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
                        constructor(extent: E, x: number /*double*/, y: number /*double*/, z: number /*double*/, direction: Vector3d, normal: Vector3d)
                        /**
                         * Returns the extent that contains the block.
                         * @return The extent
                         */
                        // @ts-ignore
                        public getExtent(): E
                        /**
                         * Returns the x coordinate of the intersection.
                         * @return The x coordinate
                         */
                        // @ts-ignore
                        public getX(): number /*double*/
                        /**
                         * Returns the y coordinate of the intersection.
                         * @return The y coordinate
                         */
                        // @ts-ignore
                        public getY(): number /*double*/
                        /**
                         * Returns the z coordinate of the intersection.
                         * @return The z coordinate
                         */
                        // @ts-ignore
                        public getZ(): number /*double*/
                        /**
                         * Returns the position of the intersection.
                         * @return The intersection coordinates
                         */
                        // @ts-ignore
                        public getPosition(): Vector3d
                        /**
                         * Returns the x coordinate of the block that was hit.
                         * @return The x coordinate
                         */
                        // @ts-ignore
                        public getBlockX(): number /*int*/
                        /**
                         * Returns the y coordinate of the block that was hit.
                         * @return The y coordinate
                         */
                        // @ts-ignore
                        public getBlockY(): number /*int*/
                        /**
                         * Returns the z coordinate of the block that was hit.
                         * @return The z coordinate
                         */
                        // @ts-ignore
                        public getBlockZ(): number /*int*/
                        /**
                         * Returns the position of the block that was hit.
                         * @return The coordinates of the hit block
                         */
                        // @ts-ignore
                        public getBlockPosition(): Vector3i
                        /**
                         * Returns the location of the hit block, <b>not the intersection
                         * location</b>.
                         * @return The location of the hit block
                         */
                        // @ts-ignore
                        public getLocation(): org.spongepowered.api.world.Location<E>
                        /**
                         * Returns the direction of the ray as a normalized vector.
                         * @return The ray direction
                         */
                        // @ts-ignore
                        public getDirection(): Vector3d
                        /**
                         * Returns the normal of the entered face, edge or corner.
                         * Edges and corners use the average of the surrounding faces.
                         * @return The entered face, edge or corner normal
                         */
                        // @ts-ignore
                        public getNormal(): Vector3d
                        /**
                         * Returns all the intersected faces. In most cases, this is only one face,
                         * but if the ray enters an edge, two faces are returned (the ones
                         * that form it). Similarly for corners, but three faces.
                         * @return An array of intersected faces, between one and three in length
                         */
                        // @ts-ignore
                        public getFaces(): org.spongepowered.api.util.Direction[]
                        /**
                         * Calls the mapper function on the extent and position.
                         * @param mapper The mapper
                         * @param <T> The return type of the mapper
                         * @return The results of the mapping
                         */
                        // @ts-ignore
                        public map<T>(mapper: java.util.function$.BiFunction<E, Vector3d, T>): T
                        /**
                         * Calls the mapper function on the extent and block position.
                         * @param mapper The mapper
                         * @param <T> The return type of the mapper
                         * @return The results of the mapping
                         */
                        // @ts-ignore
                        public mapBlock<T>(mapper: java.util.function$.BiFunction<E, Vector3i, T>): T
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
