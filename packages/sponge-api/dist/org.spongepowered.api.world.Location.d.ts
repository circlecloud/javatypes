declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * A position within a particular {@link Extent}.
                 * <p>This class is primarily a helper class to represent a location in a
                 * particular {@link Extent}. The methods provided are proxy methods to ones on
                 * {@link Extent}.</p>
                 * <p>Each instance can be used to either represent a block or a location on a
                 * continuous coordinate system. Internally, positions are stored using doubles.
                 * When a block-related method is used, the components of the position are each
                 * rounded to an integer.</p>
                 * <p>Locations are immutable. Methods that change the properties of the
                 * location create a new instance.</p>
                 * @param <E> The type of extent containing this location
                 */
                // @ts-ignore
                class Location<E extends org.spongepowered.api.world.extent.Extent> extends java.lang.Object implements org.spongepowered.api.data.DataHolder {
                    /**
                     * Create a new instance.
                     * @param extent The extent
                     * @param position The position
                     */
                    // @ts-ignore
                    constructor(extent: E extends org.spongepowered.api.world.extent.Extent, position: Vector3d)
                    /**
                     * Create a new instance.
                     * @param extent The extent
                     * @param x The X-axis position
                     * @param y The Y-axis position
                     * @param z The Z-axis position
                     */
                    // @ts-ignore
                    constructor(extent: E extends org.spongepowered.api.world.extent.Extent, x: number /*double*/, y: number /*double*/, z: number /*double*/)
                    /**
                     * Create a new instance.
                     * @param extent The extent
                     * @param blockPosition The position
                     */
                    // @ts-ignore
                    constructor(extent: E extends org.spongepowered.api.world.extent.Extent, blockPosition: Vector3i)
                    /**
                     * Create a new instance.
                     * @param extent The extent
                     * @param x The X-axis position
                     * @param y The Y-axis position
                     * @param z The Z-axis position
                     */
                    // @ts-ignore
                    constructor(extent: E extends org.spongepowered.api.world.extent.Extent, x: number /*int*/, y: number /*int*/, z: number /*int*/)
                    /**
                     * Gets the underlying extent.
                     * <p>Note: This can be null if the {@link Extent} is unloaded and garbage
                     * collected.</p>
                     * @return The extent, if available
                     * @throws IllegalStateException If the {#link Extent} is null
                     */
                    // @ts-ignore
                    getExtent(): E
                    /**
                     * Gets the underlying position.
                     * @return The underlying position
                     */
                    // @ts-ignore
                    getPosition(): Vector3d
                    /**
                     * Gets the underlying block position.
                     * @return The underlying block position
                     */
                    // @ts-ignore
                    getBlockPosition(): Vector3i
                    /**
                     * Gets the underlying chunk position.
                     * @return The underlying chunk position
                     */
                    // @ts-ignore
                    getChunkPosition(): Vector3i
                    /**
                     * Gets the underlying biome position.
                     * @return The underlying biome position
                     */
                    // @ts-ignore
                    getBiomePosition(): Vector3i
                    /**
                     * Gets the X component of this instance's position.
                     * @return The x component
                     */
                    // @ts-ignore
                    getX(): double
                    /**
                     * Gets the Y component of this instance's position.
                     * @return The y component
                     */
                    // @ts-ignore
                    getY(): double
                    /**
                     * Gets the Z component of this instance's position.
                     * @return The z component
                     */
                    // @ts-ignore
                    getZ(): double
                    /**
                     * Gets the floored X component of this instance's position.
                     * @return The floored x component
                     */
                    // @ts-ignore
                    getBlockX(): int
                    /**
                     * Gets the floored Y component of this instance's position.
                     * @return The floored y component
                     */
                    // @ts-ignore
                    getBlockY(): int
                    /**
                     * Gets the floored Z component of this instance's position.
                     * @return The floored z component
                     */
                    // @ts-ignore
                    getBlockZ(): int
                    /**
                     * Returns true if this location is in the given extent. This is implemented
                     * as an {@link Object#equals(Object)} check.
                     * @param extent The extent to check
                     * @return Whether this location is in the extent
                     */
                    // @ts-ignore
                    inExtent(extent: org.spongepowered.api.world.extent.Extent): boolean
                    /**
                     * Returns true if this location has a biome at its
                     * {@link #getBiomePosition()}.
                     * @return Whether or not there is a biome at this location.
                     */
                    // @ts-ignore
                    hasBiome(): boolean
                    /**
                     * Returns true if this location has a block at its
                     * {@link #getBlockPosition()} ()}.
                     * @return Whether or not there is a block at this location.
                     */
                    // @ts-ignore
                    hasBlock(): boolean
                    /**
                     * Gets a {@link LocatableBlock} if the parent {@link Extent} of this
                     * {@link Location} is a {@link World}.
                     * @return The locatable block of this location, if available
                     */
                    // @ts-ignore
                    getLocatableBlock(): java.util.Optional<org.spongepowered.api.world.LocatableBlock>
                    /**
                     * Create a new instance with a new extent.
                     * @param extent The new extent
                     * @return A new instance
                     */
                    // @ts-ignore
                    setExtent(extent: E extends org.spongepowered.api.world.extent.Extent): org.spongepowered.api.world.Location<E>
                    /**
                     * Create a new instance with a new position.
                     * @param position The new position
                     * @return A new instance
                     */
                    // @ts-ignore
                    setPosition(position: Vector3d): org.spongepowered.api.world.Location<E>
                    /**
                     * Create a new instance with a new block position.
                     * @param position The new position
                     * @return A new instance
                     */
                    // @ts-ignore
                    setBlockPosition(position: Vector3i): org.spongepowered.api.world.Location<E>
                    /**
                     * Subtract another Vector3d to the position on this instance, returning
                     * a new Location instance.
                     * @param v The vector to subtract
                     * @return A new instance
                     */
                    // @ts-ignore
                    sub(v: Vector3d): org.spongepowered.api.world.Location<E>
                    /**
                     * Subtract another Vector3i to the position on this instance, returning
                     * a new Location instance.
                     * @param v The vector to subtract
                     * @return A new instance
                     */
                    // @ts-ignore
                    sub(v: Vector3i): org.spongepowered.api.world.Location<E>
                    /**
                     * Subtract vector components to the position on this instance, returning a
                     * new Location instance.
                     * @param x The x component
                     * @param y The y component
                     * @param z The z component
                     * @return A new instance
                     */
                    // @ts-ignore
                    sub(x: number /*double*/, y: number /*double*/, z: number /*double*/): org.spongepowered.api.world.Location<E>
                    /**
                     * Add another Vector3d to the position on this instance, returning a new
                     * Location instance.
                     * @param v The vector to add
                     * @return A new instance
                     */
                    // @ts-ignore
                    add(v: Vector3d): org.spongepowered.api.world.Location<E>
                    /**
                     * Add another Vector3i to the position on this instance, returning a new
                     * Location instance.
                     * @param v The vector to add
                     * @return A new instance
                     */
                    // @ts-ignore
                    add(v: Vector3i): org.spongepowered.api.world.Location<E>
                    /**
                     * Add vector components to the position on this instance, returning a new
                     * Location instance.
                     * @param x The x component
                     * @param y The y component
                     * @param z The z component
                     * @return A new instance
                     */
                    // @ts-ignore
                    add(x: number /*double*/, y: number /*double*/, z: number /*double*/): org.spongepowered.api.world.Location<E>
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
                    /**
                     * Calls the mapper function on the extent and chunk position.
                     * @param mapper The mapper
                     * @param <T> The return type of the mapper
                     * @return The results of the mapping
                     */
                    // @ts-ignore
                    mapChunk<T>(mapper: java.util.function.BiFunction<E, Vector3i, T> | java.util.function$.BiFunction<E, Vector3i, T>): T
                    /**
                     * Calls the mapper function on the extent and biome position.
                     * @param mapper The mapper
                     * @param <T> The return type of the mapper
                     * @return The results of the mapping
                     */
                    // @ts-ignore
                    mapBiome<T>(mapper: java.util.function.BiFunction<E, Vector3i, T> | java.util.function$.BiFunction<E, Vector3i, T>): T
                    /**
                     * Gets the location next to this one in the given direction.
                     * Always moves by a unit amount, even diagonally.
                     * @param direction The direction to move in
                     * @return The location in that direction
                     */
                    // @ts-ignore
                    getRelative(direction: org.spongepowered.api.util.Direction): org.spongepowered.api.world.Location<E>
                    /**
                     * Gets the location next to this one in the given direction.
                     * Always moves by a block amount, even diagonally.
                     * <p>{@link org.spongepowered.api.util.Direction.Division#SECONDARY_ORDINAL}
                     * directions are not a valid argument. These will throw an exception.
                     * </p>
                     * @param direction The direction to move in
                     * @return The location in that direction
                     * @throws IllegalArgumentException If the direction is a
                     *  {#link org.spongepowered.api.util.Direction.Division#SECONDARY_ORDINAL}
                     */
                    // @ts-ignore
                    getBlockRelative(direction: org.spongepowered.api.util.Direction): org.spongepowered.api.world.Location<E>
                    /**
                     * Gets the block at this location.
                     * @return The biome at this location
                     */
                    // @ts-ignore
                    getBiome(): org.spongepowered.api.world.biome.BiomeType
                    /**
                     * Gets the base type of block.
                     * <p>The type does not include block data such as the contents of
                     * inventories.</p>
                     * @return The type of block
                     */
                    // @ts-ignore
                    getBlockType(): org.spongepowered.api.block.BlockType
                    /**
                     * Gets the {@link BlockState} for this position.
                     * @return The block state
                     */
                    // @ts-ignore
                    getBlock(): org.spongepowered.api.block.BlockState
                    /**
                     * Checks for whether the block at this position contains tile entity data.
                     * @return True if the block at this position has tile entity data, false
                     *       otherwise
                     */
                    // @ts-ignore
                    hasTileEntity(): boolean
                    /**
                     * Gets the associated {@link TileEntity} on this block.
                     * @return The associated tile entity, if available
                     */
                    // @ts-ignore
                    getTileEntity(): java.util.Optional<org.spongepowered.api.block.tileentity.TileEntity>
                    /**
                     * Replace the block at this position with a new state.
                     * <p>This will remove any extended block data at the given position.</p>
                     * @param state The new block state
                     * @return True if the block change was successful
                     */
                    // @ts-ignore
                    setBlock(state: org.spongepowered.api.block.BlockState): boolean
                    /**
                     * Replace the block at this position with a new state.
                     * <p>This will remove any extended block data at the given position.</p>
                     * @param state The new block state
                     * @param flag The various change flags controlling some interactions
                     * @return True if the block change was successful
                     */
                    // @ts-ignore
                    setBlock(state: org.spongepowered.api.block.BlockState, flag: org.spongepowered.api.world.BlockChangeFlag): boolean
                    /**
                     * Replace the block type at this position by a new type.
                     * <p>This will remove any extended block data at the given position.</p>
                     * @param type The new type
                     * @return True if the block change was successful
                     */
                    // @ts-ignore
                    setBlockType(type: org.spongepowered.api.block.BlockType): boolean
                    /**
                     * Replace the block type at this position by a new type.
                     * <p>This will remove any extended block data at the given position.</p>
                     * @param type The new type
                     * @param flag The various change flags controlling some interactions
                     * @return True if the block change was successful
                     */
                    // @ts-ignore
                    setBlockType(type: org.spongepowered.api.block.BlockType, flag: org.spongepowered.api.world.BlockChangeFlag): boolean
                    /**
                     * Replace the block at this position with a copy of the given snapshot.
                     * <p>Changing the snapshot afterwards will not affect the block that has
                     * been placed at this location.</p>
                     * @param snapshot The snapshot
                     * @param force If true, forces block state to be set even if the
                     *  {#link BlockType} does not match the snapshot one.
                     * @param flag The various change flags controlling some interactions
                     * @return True if the snapshot restore was successful
                     */
                    // @ts-ignore
                    restoreSnapshot(snapshot: org.spongepowered.api.block.BlockSnapshot, force: boolean, flag: org.spongepowered.api.world.BlockChangeFlag): boolean
                    /**
                     * Remove the block at this position by replacing it with
                     * {@link BlockTypes#AIR}.
                     * <p>This will remove any extended block data at the given position.</p>
                     * @return True if the block change was successful
                     */
                    // @ts-ignore
                    removeBlock(): boolean
                    /**
                     * Create an entity instance at the given position.
                     * <p>Creating an entity does not spawn the entity into the world. An entity
                     * created means the entity can be spawned at the given location. If
                     * {@link Optional#empty()} was returned, the entity is not able to spawn at
                     * the given location. Furthermore, this allows for the {@link Entity} to be
                     * customized further prior to traditional "ticking" and processing by core
                     * systems.</p>
                     * @param type The type
                     * @return An entity, if one was created
                     * @throws IllegalArgumentException If the position or entity type is not
                     *      valid to create
                     * @throws IllegalStateException If a constructor cannot be found
                     * @see EntityUniverse#createEntity(EntityType, Vector3d)
                     */
                    // @ts-ignore
                    createEntity(type: org.spongepowered.api.entity.EntityType): org.spongepowered.api.entity.Entity
                    /**
                     * Spawns an {@link Entity} using the already set properties (extent,
                     * position, rotation) and applicable {@link DataManipulator}s with the
                     * specified {@link Cause} for spawning the entity.
                     * <p>Note that for the {@link Cause} to be useful in the expected
                     * {@link SpawnEntityEvent}, a {@link SpawnType} should be provided in the
                     * {@link EventContext} for other plugins to understand and have finer
                     * control over the event.</p>
                     * <p>The requirements involve that all necessary setup of states and data
                     * is already preformed on the entity retrieved from the various
                     * {@link EntityUniverse#createEntity(EntityType,Vector3d)} methods. Calling
                     * this will make the now-spawned entity able to be processed by various
                     * systems.</p>
                     * <p>If the entity was unable to spawn, the entity is not removed, but it
                     * should be taken note that there can be many reasons for a failure.</p>
                     * @param entity The entity to spawn
                     * @return True if successful, false if not
                     * @see EntityUniverse#spawnEntity(Entity)
                     */
                    // @ts-ignore
                    spawnEntity(entity: org.spongepowered.api.entity.Entity): boolean
                    /**
                     * Similar to {@link #spawnEntity(Entity)} except where multiple
                     * entities can be attempted to be spawned with a customary {@link Cause}.
                     * The recommended use is to easily process the entity spawns without
                     * interference with the cause tracking system.
                     * @param entities The entities which spawned correctly, or empty if none
                     * @return True if any of the entities were successfully spawned
                     * @see EntityUniverse#spawnEntities(Iterable)
                     */
                    // @ts-ignore
                    spawnEntities(entities: java.lang.Iterable<org.spongepowered.api.entity.Entity>): java.util.Collection<org.spongepowered.api.entity.Entity>
                    /**
                     * Gets the highest {@link Location} at this location.
                     * @return The highest location at this location
                     * @see Extent#getHighestPositionAt(Vector3i)
                     */
                    // @ts-ignore
                    asHighestLocation(): org.spongepowered.api.world.Location<E>
                    // @ts-ignore
                    remove(containerClass: java.lang.Class<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>): org.spongepowered.api.data.DataTransactionResult
                    // @ts-ignore
                    remove(value: org.spongepowered.api.data.value.BaseValue<any>): org.spongepowered.api.data.DataTransactionResult
                    // @ts-ignore
                    remove(key: org.spongepowered.api.data.key.Key<any>): org.spongepowered.api.data.DataTransactionResult
                    /**
                     * Gets a snapshot of this block at the current point in time.
                     * <p>A snapshot is disconnected from the {@link Extent} that it was taken
                     * from so changes to the original block do not affect the snapshot.</p>
                     * @return A snapshot
                     */
                    // @ts-ignore
                    createSnapshot(): org.spongepowered.api.block.BlockSnapshot
                    /**
                     * Gets a list of {@link ScheduledBlockUpdate}s on this block.
                     * @return A list of ScheduledBlockUpdates on this block
                     */
                    // @ts-ignore
                    getScheduledUpdates(): java.util.Collection<org.spongepowered.api.block.ScheduledBlockUpdate>
                    /**
                     * Adds a new {@link ScheduledBlockUpdate} to this block.
                     * @param priority The priority of the scheduled update
                     * @param ticks The ticks until the scheduled update should be processed
                     * @return The newly created scheduled update
                     */
                    // @ts-ignore
                    addScheduledUpdate(priority: number /*int*/, ticks: number /*int*/): org.spongepowered.api.block.ScheduledBlockUpdate
                    /**
                     * Removes a {@link ScheduledBlockUpdate} from this block.
                     * @param update The ScheduledBlockUpdate to remove
                     */
                    // @ts-ignore
                    removeScheduledUpdate(update: org.spongepowered.api.block.ScheduledBlockUpdate): void
                    // @ts-ignore
                    getProperty<T extends org.spongepowered.api.data.Property<?, ?>>(propertyClass: java.lang.Class<T>): java.util.Optional<T>
                    // @ts-ignore
                    getApplicableProperties(): java.util.Collection<org.spongepowered.api.data.Property<?, ?>>
                    // @ts-ignore
                    validateRawData(container: org.spongepowered.api.data.DataView): boolean
                    // @ts-ignore
                    setRawData(container: org.spongepowered.api.data.DataView): void
                    // @ts-ignore
                    getContentVersion(): int
                    // @ts-ignore
                    toContainer(): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    get<T extends org.spongepowered.api.data.manipulator.DataManipulator<?, ?>>(containerClass: java.lang.Class<T>): java.util.Optional<T>
                    // @ts-ignore
                    get<T>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<T>>): java.util.Optional<T>
                    // @ts-ignore
                    getOrCreate<T extends org.spongepowered.api.data.manipulator.DataManipulator<?, ?>>(containerClass: java.lang.Class<T>): java.util.Optional<T>
                    // @ts-ignore
                    offer<T>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<T>>, value: T): org.spongepowered.api.data.DataTransactionResult
                    // @ts-ignore
                    offer(valueHolders: java.lang.Iterable<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>): org.spongepowered.api.data.DataTransactionResult
                    // @ts-ignore
                    offer(values: java.lang.Iterable<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult
                    // @ts-ignore
                    offer<T>(value: org.spongepowered.api.data.value.BaseValue<T>): org.spongepowered.api.data.DataTransactionResult
                    // @ts-ignore
                    offer(valueContainer: org.spongepowered.api.data.manipulator.DataManipulator<any, ?>): org.spongepowered.api.data.DataTransactionResult
                    // @ts-ignore
                    offer(valueContainer: org.spongepowered.api.data.manipulator.DataManipulator<any, ?>, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult
                    // @ts-ignore
                    undo(result: org.spongepowered.api.data.DataTransactionResult): org.spongepowered.api.data.DataTransactionResult
                    // @ts-ignore
                    supports(holderClass: java.lang.Class<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>): boolean
                    // @ts-ignore
                    supports(key: org.spongepowered.api.data.key.Key<any>): boolean
                    // @ts-ignore
                    transform<T>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<T>>, func: java.util.function.Function<T, T> | java.util.function$.Function<T, T>): org.spongepowered.api.data.DataTransactionResult
                    // @ts-ignore
                    copyFrom(that: org.spongepowered.api.data.DataHolder): org.spongepowered.api.data.DataTransactionResult
                    // @ts-ignore
                    copyFrom(that: org.spongepowered.api.data.DataHolder, strategy: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult
                    // @ts-ignore
                    getContainers(): java.util.Collection<org.spongepowered.api.data.manipulator.DataManipulator<?, ?>>
                    // @ts-ignore
                    getValue<T, V extends org.spongepowered.api.data.value.BaseValue<T>>(key: org.spongepowered.api.data.key.Key<V>): java.util.Optional<V>
                    // @ts-ignore
                    copy(): org.spongepowered.api.world.Location<E>
                    // @ts-ignore
                    getKeys(): java.util.Set<org.spongepowered.api.data.key.Key<?>>
                    // @ts-ignore
                    getValues(): java.util.Set<org.spongepowered.api.data.value.immutable.ImmutableValue<?>>
                    // @ts-ignore
                    toString(): java.lang.String
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    equals(other: any): boolean
                }
            }
        }
    }
}
