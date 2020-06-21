declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    /**
                     * A mutable object containing blocks, tile entities, entities, and possibly
                     * other game objects.
                     */
                    // @ts-ignore
                    interface Extent extends org.spongepowered.api.world.extent.EntityUniverse, org.spongepowered.api.world.extent.TileEntityVolume, org.spongepowered.api.world.extent.InteractableVolume, org.spongepowered.api.world.extent.MutableBiomeVolume, org.spongepowered.api.world.extent.LocationCompositeValueStore, org.spongepowered.api.util.Identifiable, org.spongepowered.api.data.property.LocationBasePropertyHolder {
                        /**
                         * Gets a location in this extent at the given position. Essentially, this
                         * is a 3D pointer in the extent.
                         * @param position The position
                         * @return The location in this extent
                         */
                        // @ts-ignore
                        getLocation(position: Vector3i): org.spongepowered.api.world.Location<any>
                        /**
                         * Gets a location in this extent at the given position. Essentially, this
                         * is a 3D pointer in the extent.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @return The location in this extent
                         */
                        // @ts-ignore
                        getLocation(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.world.Location<any>
                        /**
                         * Gets a location in this extent at the given position. Essentially, this
                         * is a 3D pointer in the extent. This method supports sub-block positions.
                         * Block-related methods use flooring to get integer coordinates.
                         * @param position The position
                         * @return The location in this extent
                         */
                        // @ts-ignore
                        getLocation(position: Vector3d): org.spongepowered.api.world.Location<any>
                        /**
                         * Gets a location in this extent at the given position. Essentially, this
                         * is a 3D pointer in the extent. This method supports sub-block positions.
                         * Block-related methods use flooring to get integer coordinates.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @return The location in this extent
                         */
                        // @ts-ignore
                        getLocation(x: number /*double*/, y: number /*double*/, z: number /*double*/): org.spongepowered.api.world.Location<any>
                        /**
                         * Get the y value of the highest block that sunlight can reach in the given
                         * column.
                         * <p>This method ignores all transparent blocks, providing the highest
                         * opaque block.</p>
                         * @param x The x column value
                         * @param z The z column value
                         * @return The y value of the highest opaque block
                         */
                        // @ts-ignore
                        getHighestYAt(x: number /*int*/, z: number /*int*/): number /*int*/
                        /**
                         * Get the y value of the highest block that sunlight can reach in the given
                         * column.
                         * <p>This method ignores all transparent blocks, providing the highest
                         * opaque block.</p>
                         * @param column The column value
                         * @return The y value of the highest opaque block
                         */
                        // @ts-ignore
                        getHighestYAt(column: Vector2i): number /*int*/
                        /**
                         * Get the {@link Location} of the highest block that sunlight can reach in
                         * the given column.
                         * <p>This method ignores all transparent blocks, providing the highest
                         * opaque block.</p>
                         * @param position The column position
                         * @return The highest opaque position
                         */
                        // @ts-ignore
                        getHighestPositionAt(position: Vector3i): Vector3i
                        /**
                         * Returns the y level that precipitation ends falling in the given column.
                         * <p>A value is still returned for columns in biomes which do not
                         * receive precipitation.</p>
                         * @param x The x column value
                         * @param z The y column value
                         * @return The y level that precipitation ends
                         */
                        // @ts-ignore
                        getPrecipitationLevelAt(x: number /*int*/, z: number /*int*/): number /*int*/
                        /**
                         * Returns the y level that precipitation ends falling in the given column.
                         * <p>A value is still returned for columns in biomes which do not
                         * receive precipitation.</p>
                         * @param column The column value
                         * @return The y level that precipitation ends
                         */
                        // @ts-ignore
                        getPrecipitationLevelAt(column: Vector2i): number /*int*/
                        /**
                         * Returns the position that precipitation ends falling in the column
                         * of the given position.
                         * <p>A position is still returned for positions in biomes which do not
                         * receive precipitation.</p>
                         * @param position The position value
                         * @return The position that precipitation ends
                         */
                        // @ts-ignore
                        getPrecipitationLevelAt(position: Vector3i): Vector3i
                        /**
                         * Sets the block at the given position in the world.
                         * @param position The position
                         * @param blockState The block
                         * @param flag The various change flags controlling some interactions
                         * @return Whether the block change was successful
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the volume
                         */
                        // @ts-ignore
                        setBlock(position: Vector3i, blockState: org.spongepowered.api.block.BlockState, flag: org.spongepowered.api.world.BlockChangeFlag): boolean
                        /**
                         * Sets the block at the given position in the world.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param blockState The block
                         * @param flag The various change flags controlling some interactions
                         * @return Whether the block change was successful
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the volume
                         */
                        // @ts-ignore
                        setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, blockState: org.spongepowered.api.block.BlockState, flag: org.spongepowered.api.world.BlockChangeFlag): boolean
                        /**
                         * Sets the block at the given position in the world.
                         * @param position The position
                         * @param type The block type
                         * @param flag The various change flags controlling some interactions
                         * @return Whether the block change was successful
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the volume
                         */
                        // @ts-ignore
                        setBlockType(position: Vector3i, type: org.spongepowered.api.block.BlockType, flag: org.spongepowered.api.world.BlockChangeFlag): boolean
                        /**
                         * Sets the block at the given position in the world.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param type The block
                         * @param flag The various change flags controlling some interactions
                         * @return Whether the block change was successful
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the volume
                         */
                        // @ts-ignore
                        setBlockType(x: number /*int*/, y: number /*int*/, z: number /*int*/, type: org.spongepowered.api.block.BlockType, flag: org.spongepowered.api.world.BlockChangeFlag): boolean
                        /**
                         * Gets a snapshot of this block at the current point in time.
                         * <p>A snapshot is disconnected from the {@link Extent} that it was taken
                         * from so changes to the original block do not affect the snapshot.</p>
                         * @param position The position of the block
                         * @return A snapshot
                         */
                        // @ts-ignore
                        createSnapshot(position: Vector3i): org.spongepowered.api.block.BlockSnapshot
                        /**
                         * Gets a snapshot of this block at the current point in time.
                         * <p>A snapshot is disconnected from the {@link Extent} that it was taken
                         * from so changes to the original block do not affect the snapshot.</p>
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @return A snapshot
                         */
                        // @ts-ignore
                        createSnapshot(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.block.BlockSnapshot
                        /**
                         * Restores the given {@link BlockSnapshot} using the saved block position
                         * stored within the snapshot.
                         * <p>If forced, the state of the block will change its {@link BlockType} to
                         * match that of the snapshot then set the state. However, if force is set
                         * to false and the {@link BlockType}s does not match, false will be
                         * returned. If notifyNeighbors is true, neighboring blocks will be notified
                         * of changes at the restored block location triggering physic updates.</p>
                         * @param snapshot The snapshot
                         * @param force If true, forces block state to be set even if the
                         *         {#link BlockType} does not match the snapshot one.
                         * @param flag The various change flags controlling some interactions
                         * @return true if the restore was successful, false otherwise
                         */
                        // @ts-ignore
                        restoreSnapshot(snapshot: org.spongepowered.api.block.BlockSnapshot, force: boolean, flag: org.spongepowered.api.world.BlockChangeFlag): boolean
                        /**
                         * Restores the {@link BlockSnapshot} at the given position.
                         * <p>If forced, the state of the block will change its {@link BlockType} to
                         * match that of the snapshot then set the state. However, if force is set
                         * to false and the {@link BlockType}s does not match, false will be
                         * returned. If notifyNeighbors is true, neighboring blocks will be notified
                         * of changes at the restored block location triggering physic updates.</p>
                         * @param position The position of the block
                         * @param snapshot The snapshot
                         * @param force If true, forces block state to be set even if the
                         *         {#link BlockType} does not match the snapshot one.
                         * @param flag The various change flags controlling some interactions
                         * @return true if the restore was successful, false otherwise
                         */
                        // @ts-ignore
                        restoreSnapshot(position: Vector3i, snapshot: org.spongepowered.api.block.BlockSnapshot, force: boolean, flag: org.spongepowered.api.world.BlockChangeFlag): boolean
                        /**
                         * Restores the {@link BlockSnapshot} at the given position.
                         * <p>If forced, the state of the block will change its {@link BlockType} to
                         * match that of the snapshot then set the state. However, if force is set
                         * to false and the {@link BlockType}s does not match, false will be
                         * returned. If notifyNeighbors is true, neighboring blocks will be notified
                         * of changes at the restored block location triggering physic updates.</p>
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param snapshot The snapshot
                         * @param force If true, forces block state to be set even if the
                         *         {#link BlockType} does not match the snapshot one.
                         * @param flag The various change flags controlling some interactions
                         * @return true if the restore was successful, false otherwise
                         */
                        // @ts-ignore
                        restoreSnapshot(x: number /*int*/, y: number /*int*/, z: number /*int*/, snapshot: org.spongepowered.api.block.BlockSnapshot, force: boolean, flag: org.spongepowered.api.world.BlockChangeFlag): boolean
                        /**
                         * Gets a list of {@link ScheduledBlockUpdate}s on this block.
                         * @param position The position of the block
                         * @return A list of ScheduledBlockUpdates on this block
                         */
                        // @ts-ignore
                        getScheduledUpdates(position: Vector3i): Array<org.spongepowered.api.block.ScheduledBlockUpdate>
                        /**
                         * Gets a list of {@link ScheduledBlockUpdate}s on this block.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @return A list of ScheduledBlockUpdates on this block
                         */
                        // @ts-ignore
                        getScheduledUpdates(x: number /*int*/, y: number /*int*/, z: number /*int*/): Array<org.spongepowered.api.block.ScheduledBlockUpdate>
                        /**
                         * Adds a new {@link ScheduledBlockUpdate} to this block.
                         * @param position The position of the block
                         * @param priority The priority of the scheduled update
                         * @param ticks The ticks until the scheduled update should be processed
                         * @return The newly created scheduled update
                         */
                        // @ts-ignore
                        addScheduledUpdate(position: Vector3i, priority: number /*int*/, ticks: number /*int*/): org.spongepowered.api.block.ScheduledBlockUpdate
                        /**
                         * Adds a new {@link ScheduledBlockUpdate} to this block.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param priority The priority of the scheduled update
                         * @param ticks The ticks until the scheduled update should be processed
                         * @return The newly created scheduled update
                         */
                        // @ts-ignore
                        addScheduledUpdate(x: number /*int*/, y: number /*int*/, z: number /*int*/, priority: number /*int*/, ticks: number /*int*/): org.spongepowered.api.block.ScheduledBlockUpdate
                        /**
                         * Removes a {@link ScheduledBlockUpdate} from this block.
                         * @param position The position of the block
                         * @param update The ScheduledBlockUpdate to remove
                         */
                        // @ts-ignore
                        removeScheduledUpdate(position: Vector3i, update: org.spongepowered.api.block.ScheduledBlockUpdate): void
                        /**
                         * Removes a {@link ScheduledBlockUpdate} from this block.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param update The ScheduledBlockUpdate to remove
                         */
                        // @ts-ignore
                        removeScheduledUpdate(x: number /*int*/, y: number /*int*/, z: number /*int*/, update: org.spongepowered.api.block.ScheduledBlockUpdate): void
                        /**
                         * Gets whether or not this extent is currently loaded.
                         * @return Whether or not this extent is loaded
                         */
                        // @ts-ignore
                        isLoaded(): boolean
                        /**
                         * Returns a new extent that is the same or smaller than the current extent.
                         * This does not copy the data, it only provides a new view of the extent.
                         * @param newMin The new minimum coordinates in this extent
                         * @param newMax The new maximum coordinates in this extent
                         * @return The new extent with the new bounds
                         * @throws PositionOutOfBoundsException If the new minimum and maximum are
                         *          outside the current extent
                         */
                        // @ts-ignore
                        getExtentView(newMin: Vector3i, newMax: Vector3i): org.spongepowered.api.world.extent.Extent
                        // @ts-ignore
                        getBiomeWorker(): org.spongepowered.api.world.extent.worker.MutableBiomeVolumeWorker<any>
                        // @ts-ignore
                        getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker<any>
                        /**
                         * Gets the {@link UUID}, if available, of the user who created the
                         * {@link BlockSnapshot} at passed block position.
                         * @param pos The position to be checked
                         * @return The {#link UUID} if one exists
                         */
                        // @ts-ignore
                        getCreator(pos: Vector3i): java.util.Optional<java.util.UUID>
                        /**
                         * Gets the {@link UUID}, if available, of the user who created the
                         * {@link BlockSnapshot} at passed block position.
                         * @param x The x coordinate
                         * @param y The y coordinate
                         * @param z The z coordinate
                         * @return The {#link UUID} if one exists
                         */
                        // @ts-ignore
                        getCreator(x: number /*int*/, y: number /*int*/, z: number /*int*/): java.util.Optional<java.util.UUID>
                        /**
                         * Gets the {@link UUID}, if available, of the user who last notified the
                         * {@link BlockSnapshot} located at passed block position.
                         * @param pos The position to be checked
                         * @return The {#link UUID} if one exists
                         */
                        // @ts-ignore
                        getNotifier(pos: Vector3i): java.util.Optional<java.util.UUID>
                        /**
                         * Gets the {@link UUID}, if available, of the user who last notified the
                         * {@link BlockSnapshot} located at passed block coordinates.
                         * @param x The x coordinate
                         * @param y The y coordinate
                         * @param z The z coordinate
                         * @return The {#link UUID} if available
                         */
                        // @ts-ignore
                        getNotifier(x: number /*int*/, y: number /*int*/, z: number /*int*/): java.util.Optional<java.util.UUID>
                        /**
                         * Sets the {@link UUID} of the user who created the {@link BlockSnapshot}
                         * located at passed block position.
                         * @param pos The block position where the user data should be applied
                         * @param uuid The {#link UUID} to set as creator
                         */
                        // @ts-ignore
                        setCreator(pos: Vector3i, uuid: java.util.UUID): void
                        /**
                         * Sets the {@link UUID} of the user who created the {@link BlockSnapshot}
                         * located at passed block coordinates.
                         * @param x The x coordinate where the user data should be applied
                         * @param y The y coordinate where the user data should be applied
                         * @param z The z coordinate where the user data should be applied
                         * @param uuid The {#link UUID} to set as creator
                         */
                        // @ts-ignore
                        setCreator(x: number /*int*/, y: number /*int*/, z: number /*int*/, uuid: java.util.UUID): void
                        /**
                         * Sets the {@link UUID} of the user who last notified the
                         * {@link BlockSnapshot} located at passed block position.
                         * @param pos The block position where the user data should be applied
                         * @param uuid The {#link UUID} to set as notifier
                         */
                        // @ts-ignore
                        setNotifier(pos: Vector3i, uuid: java.util.UUID): void
                        /**
                         * Sets the {@link UUID} of the user who last notified the
                         * {@link BlockSnapshot} located at passed block coordinates.
                         * @param x The x coordinate where the user data should be applied
                         * @param y The y coordinate where the user data should be applied
                         * @param z The z coordinate where the user data should be applied
                         * @param uuid The {#link UUID} to set as notifier
                         */
                        // @ts-ignore
                        setNotifier(x: number /*int*/, y: number /*int*/, z: number /*int*/, uuid: java.util.UUID): void
                        /**
                         * Gets the bounding box used to select blocks, which appears
                         * as a black outline on a vanilla client.
                         * @param pos The position of the block from which to get the selection box
                         * @return The selection box
                         */
                        // @ts-ignore
                        getBlockSelectionBox(pos: Vector3i): java.util.Optional<org.spongepowered.api.util.AABB>
                        /**
                         * Gets the bounding box used to select blocks, which appears
                         * as a black outline on a vanilla client.
                         * @param x The x coord of the block from which to get the selection box
                         * @param y The y coord of the block from which to get the selection box
                         * @param z The z coord of the block from which to get the selection box
                         * @return The selection box
                         */
                        // @ts-ignore
                        getBlockSelectionBox(x: number /*int*/, y: number /*int*/, z: number /*int*/): java.util.Optional<org.spongepowered.api.util.AABB>
                        /**
                         * Gets all the block collision boxes that intersect the bounding box, in
                         * no particular order. There may be more than one box per block.
                         * @param box The intersection box
                         * @return All the intersecting block collision boxes
                         */
                        // @ts-ignore
                        getIntersectingBlockCollisionBoxes(box: org.spongepowered.api.util.AABB): Array<org.spongepowered.api.util.AABB>
                        /**
                         * Gets all the collision boxes that intersect the bounding box owned by
                         * the entity, in no particular order. There may be more than one box per
                         * block. This also includes entities. Will return an empty set if the
                         * owner does not have a bounding box.
                         * @param owner The entity that owns the bounding box
                         * @return All the intersecting collision boxes
                         */
                        // @ts-ignore
                        getIntersectingCollisionBoxes(owner: org.spongepowered.api.entity.Entity): Array<org.spongepowered.api.util.AABB>
                        /**
                         * Gets all the collision boxes that intersect the bounding box owned by
                         * the entity, in no particular order. There may be more than one box per
                         * block. This also includes entities.
                         * @param owner The entity that owns the bounding box
                         * @param box The intersection box
                         * @return All the intersecting collision boxes
                         */
                        // @ts-ignore
                        getIntersectingCollisionBoxes(owner: org.spongepowered.api.entity.Entity, box: org.spongepowered.api.util.AABB): Array<org.spongepowered.api.util.AABB>
                        /**
                         * Creates a new archetype volume from the specified section of this extent.
                         * The archetype's volume will be shifted such that the position given in
                         * the origin will be the origin of the volume.
                         * @param min The minimum point of the volume to copy
                         * @param max The maximum point of the volume to copy
                         * @param origin The eventual origin on the new archetype volume
                         * @return The archetype volume
                         */
                        // @ts-ignore
                        createArchetypeVolume(min: Vector3i, max: Vector3i, origin: Vector3i): org.spongepowered.api.world.extent.ArchetypeVolume
                    }
                }
            }
        }
    }
}
