declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace storage {
                    /**
                     * A class for information about the chunk coordinate space, aka the layout.
                     * This can be used to obtain information about the chunk size and the space
                     * bounds, validate coordinates, convert from chunk to world and vice-versa and
                     * translate coordinates; among other things.
                     */
                    // @ts-ignore
                    interface ChunkLayout {
                        /**
                         * Returns the size of the chunks in blocks. The axes are matched to the
                         * corresponding vector components.
                         * @return The size of chunks
                         */
                        // @ts-ignore
                        getChunkSize(): Vector3i
                        /**
                         * Returns the maximum coordinates for chunks for each axis. The axes are
                         * matched to the corresponding vector components. Due to the limited
                         * precision of 32bit integers, there always is a practical limit.
                         * @return The maximum coordinates of chunks
                         */
                        // @ts-ignore
                        getSpaceMax(): Vector3i
                        /**
                         * Returns the minimum coordinates for chunks for each axis. The axes are
                         * matched to the corresponding vector components. Due to the limited
                         * precision of 32bit integers, there always is a practical limit.
                         * @return The minimum coordinates of chunks
                         */
                        // @ts-ignore
                        getSpaceMin(): Vector3i
                        /**
                         * Gets the total size of the chunk space, which is equivalent to
                         * {@link #getSpaceMax()} - {@link #getSpaceMin()} + 1.
                         * @return The total size of the chunk space
                         */
                        // @ts-ignore
                        getSpaceSize(): Vector3i
                        /**
                         * Returns the origin of the chunk coordinate space. Normally
                         * {@link Vector3i#ZERO}.
                         * @return The origin of the chunk coordinate space
                         */
                        // @ts-ignore
                        getSpaceOrigin(): Vector3i
                        /**
                         * Returns true if the coordinates are valid chunk coordinates. False if
                         * otherwise.
                         * @param coords The coordinates to validate
                         * @return Whether or not the coordinates are valid for chunks
                         */
                        // @ts-ignore
                        isValidChunk(coords: Vector3i): boolean
                        /**
                         * Returns true if the coordinates are valid chunk coordinates. False if
                         * otherwise.
                         * @param x The x coordinate to validate
                         * @param y The y coordinate to validate
                         * @param z The z coordinate to validate
                         * @return Whether or not the coordinates are valid for chunks
                         */
                        // @ts-ignore
                        isValidChunk(x: number /*int*/, y: number /*int*/, z: number /*int*/): boolean
                        /**
                         * Returns true if the local coordinates fit in a chunk. That is they are
                         * positive and smaller than the chunk's size.
                         * @param localCoords The coordinates to check
                         * @return Whether or not the coordinates fit in a chunk
                         */
                        // @ts-ignore
                        isInChunk(localCoords: Vector3i): boolean
                        /**
                         * Returns true if the local coordinates fit in a chunk. That is they are
                         * positive and smaller than the chunk's size.
                         * @param x The x local coordinate to validate
                         * @param y The y local coordinate to validate
                         * @param z The z local coordinate to validate
                         * @return Whether or not the coordinates fit in a chunk
                         */
                        // @ts-ignore
                        isInChunk(x: number /*int*/, y: number /*int*/, z: number /*int*/): boolean
                        /**
                         * Returns true if the world coordinates fit in the chunk at the given
                         * coordinates.
                         * @param worldCoords The world coordinates to validate
                         * @param chunkCoords The chunk coordinates in which they must fit
                         * @return Whether or not the world coordinates fit in the chunk
                         */
                        // @ts-ignore
                        isInChunk(worldCoords: Vector3i, chunkCoords: Vector3i): boolean
                        /**
                         * Returns true if the world coordinates fit in the chunk at the given
                         * coordinates.
                         * @param wx The x world coordinate to validate
                         * @param wy The y world coordinate to validate
                         * @param wz The z world coordinate to validate
                         * @param cx The x chunk coordinate in which they must fit
                         * @param cy The y chunk coordinate in which they must fit
                         * @param cz The z chunk coordinate in which they must fit
                         * @return Whether or not the world coordinates fit in the chunk
                         */
                        // @ts-ignore
                        isInChunk(wx: number /*int*/, wy: number /*int*/, wz: number /*int*/, cx: number /*int*/, cy: number /*int*/, cz: number /*int*/): boolean
                        /**
                         * Converts world coordinates to chunk coordinates. Returns nothing if the
                         * conversion failed because the resulting chunk coordinates aren't valid.
                         * @param worldCoords The world coordinates to convert to chunk coordinates
                         * @return The chunk coordinates on success, else nothing
                         */
                        // @ts-ignore
                        toChunk(worldCoords: Vector3i): java.util.Optional<Vector3i>
                        /**
                         * Converts world coordinates to chunk coordinates. Returns nothing if the
                         * conversion failed because the resulting chunk coordinates aren't valid.
                         * @param x The x world coordinate to convert to chunk coordinates
                         * @param y The y world coordinate to convert to chunk coordinates
                         * @param z The z world coordinate to convert to chunk coordinates
                         * @return The chunk coordinates on success, else nothing
                         */
                        // @ts-ignore
                        toChunk(x: number /*int*/, y: number /*int*/, z: number /*int*/): java.util.Optional<Vector3i>
                        /**
                         * Converts chunk coordinates to world coordinates. Returns nothing if the
                         * conversion failed because the given chunk coordinates aren't valid.
                         * @param chunkCoords The chunk coordinates to convert to world coordinates
                         * @return The world coordinates on success, else nothing
                         */
                        // @ts-ignore
                        toWorld(chunkCoords: Vector3i): java.util.Optional<Vector3i>
                        /**
                         * Converts chunk coordinates to world coordinates. Returns nothing if the
                         * conversion failed because the given chunk coordinates aren't valid.
                         * @param x The x chunk coordinate to convert to world coordinates
                         * @param y The y chunk coordinate to convert to world coordinates
                         * @param z The z chunk coordinate to convert to world coordinates
                         * @return The world coordinates on success, else nothing
                         */
                        // @ts-ignore
                        toWorld(x: number /*int*/, y: number /*int*/, z: number /*int*/): java.util.Optional<Vector3i>
                        /**
                         * Converts world coordinates to chunk coordinates. This method never fails
                         * and can returns invalid chunk coordinates.
                         * @param worldCoords The world coordinates to convert to chunk coordinates
                         * @return The chunk coordinates
                         */
                        // @ts-ignore
                        forceToChunk(worldCoords: Vector3i): Vector3i
                        /**
                         * Converts world coordinates to chunk coordinates. This method never fails
                         * and can returns invalid chunk coordinates.
                         * @param x The x world coordinate to convert to chunk coordinates
                         * @param y The y world coordinate to convert to chunk coordinates
                         * @param z The z world coordinate to convert to chunk coordinates
                         * @return The chunk coordinates
                         */
                        // @ts-ignore
                        forceToChunk(x: number /*int*/, y: number /*int*/, z: number /*int*/): Vector3i
                        /**
                         * Converts chunk coordinates to world coordinates. This method never fails
                         * and can returns invalid world coordinates.
                         * @param chunkCoords The chunk coordinates to convert to world coordinates
                         * @return The world coordinates
                         */
                        // @ts-ignore
                        forceToWorld(chunkCoords: Vector3i): Vector3i
                        /**
                         * Converts chunk coordinates to world coordinates. This method never fails
                         * and can returns invalid world coordinates.
                         * @param x The x chunk coordinate to convert to world coordinates
                         * @param y The y chunk coordinate to convert to world coordinates
                         * @param z The z chunk coordinate to convert to world coordinates
                         * @return The world coordinates
                         */
                        // @ts-ignore
                        forceToWorld(x: number /*int*/, y: number /*int*/, z: number /*int*/): Vector3i
                        /**
                         * Adds the chunk offset to the chunk coordinates. Returns nothing if the
                         * new coordinates are not valid.
                         * @param chunkCoords The chunk coordinates to add to
                         * @param chunkOffset The chunk offset to add to the chunk coordinates
                         * @return The new chunk coordinates if they are valid
                         */
                        // @ts-ignore
                        addToChunk(chunkCoords: Vector3i, chunkOffset: Vector3i): java.util.Optional<Vector3i>
                        /**
                         * Adds the chunk offset to the chunk coordinates. Returns nothing if the
                         * new coordinates are not valid.
                         * @param cx The x chunk coordinate to add to
                         * @param cy The y chunk coordinate to add to
                         * @param cz The z chunk coordinate to add to
                         * @param ox The x chunk offset to add to the chunk coordinates
                         * @param oy The y chunk offset to add to the chunk coordinates
                         * @param oz The z chunk offset to add to the chunk coordinates
                         * @return The new chunk coordinates if they are valid
                         */
                        // @ts-ignore
                        addToChunk(cx: number /*int*/, cy: number /*int*/, cz: number /*int*/, ox: number /*int*/, oy: number /*int*/, oz: number /*int*/): java.util.Optional<Vector3i>
                        /**
                         * Moves chunk coordinates one step in the given direction. Returns nothing
                         * if the new coordinates are not valid. {@link Division#SECONDARY_ORDINAL}
                         * directions are not a valid argument. These will throw an exception.
                         * @param chunkCoords The chunk coordinates to move from
                         * @param direction The direction in which to move a step
                         * @return The new chunk coordinates if they are valid
                         * @throws IllegalArgumentException If the direction is a
                         *  {#link Division#SECONDARY_ORDINAL}
                         */
                        // @ts-ignore
                        moveToChunk(chunkCoords: Vector3i, direction: org.spongepowered.api.util.Direction): java.util.Optional<Vector3i>
                        /**
                         * Moves chunk coordinates one step in the given direction. Returns nothing
                         * if the new coordinates are not valid.
                         * {@link Division#SECONDARY_ORDINAL} directions are not a valid
                         * argument. These will throw an exception.
                         * @param x The x chunk coordinate to move from
                         * @param y The y chunk coordinate to move from
                         * @param z The z chunk coordinate to move from
                         * @param direction The direction in which to move a step
                         * @return The new chunk coordinates if they are valid
                         * @throws IllegalArgumentException If the direction is a
                         *  {#link Division#SECONDARY_ORDINAL}
                         */
                        // @ts-ignore
                        moveToChunk(x: number /*int*/, y: number /*int*/, z: number /*int*/, direction: org.spongepowered.api.util.Direction): java.util.Optional<Vector3i>
                        /**
                         * Moves chunk coordinates a number of steps in the given direction. Returns
                         * nothing if the new coordinates are not valid.
                         * {@link Division#SECONDARY_ORDINAL} directions are not a valid
                         * argument. These will throw an exception.
                         * @param chunkCoords The chunk coordinates to move from
                         * @param direction The direction in which to move
                         * @param steps The number of steps to take
                         * @return The new chunk coordinates if they are valid
                         * @throws IllegalArgumentException If the direction is a
                         *  {#link Division#SECONDARY_ORDINAL}
                         */
                        // @ts-ignore
                        moveToChunk(chunkCoords: Vector3i, direction: org.spongepowered.api.util.Direction, steps: number /*int*/): java.util.Optional<Vector3i>
                        /**
                         * Moves chunk coordinates a number of steps in the given direction. Returns
                         * nothing if the new coordinates are not valid.
                         * {@link Division#SECONDARY_ORDINAL} directions are not a valid
                         * argument. These will throw an exception.
                         * @param x The x chunk coordinate to move from
                         * @param y The y chunk coordinate to move from
                         * @param z The z chunk coordinate to move from
                         * @param direction The direction in which to move
                         * @param steps The number of steps to take
                         * @return The new chunk coordinates if they are valid
                         * @throws IllegalArgumentException If the direction is a
                         *  {#link Division#SECONDARY_ORDINAL}
                         */
                        // @ts-ignore
                        moveToChunk(x: number /*int*/, y: number /*int*/, z: number /*int*/, direction: org.spongepowered.api.util.Direction, steps: number /*int*/): java.util.Optional<Vector3i>
                    }
                }
            }
        }
    }
}
