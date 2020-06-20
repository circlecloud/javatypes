declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * A loaded Minecraft world.
                 */
                // @ts-ignore
                interface World extends org.spongepowered.api.world.extent.Extent, org.spongepowered.api.world.weather.WeatherUniverse, org.spongepowered.api.effect.Viewer, org.spongepowered.api.service.context.ContextSource, org.spongepowered.api.text.channel.MessageReceiver, org.spongepowered.api.text.channel.ChatTypeMessageReceiver {
                    /**
                     * Gets an unmodifiable collection of {@link Player}s currently in this world.
                     * @return The players
                     */
                    // @ts-ignore
                    getPlayers(): java.util.Collection<org.spongepowered.api.entity.living.player.Player>
                    // @ts-ignore
                    getLocation(position: Vector3i): org.spongepowered.api.world.Location<org.spongepowered.api.world.World>
                    // @ts-ignore
                    getLocation(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.world.Location<org.spongepowered.api.world.World>
                    // @ts-ignore
                    getLocation(position: Vector3d): org.spongepowered.api.world.Location<org.spongepowered.api.world.World>
                    // @ts-ignore
                    getLocation(x: number /*double*/, y: number /*double*/, z: number /*double*/): org.spongepowered.api.world.Location<org.spongepowered.api.world.World>
                    /**
                     * Gets a {@link LocatableBlock} for the desired {@link Vector3i} position.
                     * @param position The position to get the locatable block
                     * @return The locatable block
                     */
                    // @ts-ignore
                    getLocatableBlock(position: Vector3i): org.spongepowered.api.world.LocatableBlock
                    /**
                     * Gets a {@link LocatableBlock} for the desired {@code x, y, z} coordinates.
                     * @param x The x position
                     * @param y The y position
                     * @param z The z position
                     * @return The locatable block
                     */
                    // @ts-ignore
                    getLocatableBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.world.LocatableBlock
                    /**
                     * Gets the loaded chunk at the given block coordinate position.
                     * @param blockPosition The position
                     * @return The chunk, if available
                     */
                    // @ts-ignore
                    getChunkAtBlock(blockPosition: Vector3i): java.util.Optional<org.spongepowered.api.world.Chunk>
                    /**
                     * Gets the loaded chunk at the given block coordinate position.
                     * @param bx The x coordinate
                     * @param by The y coordinate
                     * @param bz The z coordinate
                     * @return The chunk, if available
                     */
                    // @ts-ignore
                    getChunkAtBlock(bx: number /*int*/, by: number /*int*/, bz: number /*int*/): java.util.Optional<org.spongepowered.api.world.Chunk>
                    /**
                     * Gets the loaded chunk at the given chunk coordinate position.
                     * @param chunkPosition The position
                     * @return The chunk, if available
                     */
                    // @ts-ignore
                    getChunk(chunkPosition: Vector3i): java.util.Optional<org.spongepowered.api.world.Chunk>
                    /**
                     * Gets the loaded chunk at the given chunk coordinate position.
                     * <p>In Vanilla, the y coordinate will always be 0.</p>
                     * @param cx The x coordinate
                     * @param cy The y coordinate
                     * @param cz The z coordinate
                     * @return The chunk, if available
                     */
                    // @ts-ignore
                    getChunk(cx: number /*int*/, cy: number /*int*/, cz: number /*int*/): java.util.Optional<org.spongepowered.api.world.Chunk>
                    /**
                     * Gets the chunk at the given chunk coordinate position if it exists or if
                     * {@code shouldGenerate} is true and the chunk is generated.
                     * @param chunkPosition The position
                     * @param shouldGenerate True to generate a new chunk
                     * @return The loaded or generated chunk, if already generated
                     */
                    // @ts-ignore
                    loadChunk(chunkPosition: Vector3i, shouldGenerate: boolean): java.util.Optional<org.spongepowered.api.world.Chunk>
                    /**
                     * Gets the chunk at the given chunk coordinate position if it exists or if
                     * {@code shouldGenerate} is true and the chunk is generated.
                     * <p>In Vanilla, the y coordinate will always be 0.</p>
                     * @param cx The x coordinate
                     * @param cy The y coordinate
                     * @param cz The z coordinate
                     * @param shouldGenerate True to generate a new chunk
                     * @return The loaded or generated chunk, if already generated
                     */
                    // @ts-ignore
                    loadChunk(cx: number /*int*/, cy: number /*int*/, cz: number /*int*/, shouldGenerate: boolean): java.util.Optional<org.spongepowered.api.world.Chunk>
                    /**
                     * Gets the chunk at the given chunk coordinate position if it exists or if
                     * {@code shouldGenerate} is true and the chunk is generated.
                     * <p>Unlike {@link #loadChunk(Vector3i, boolean)} this method allows the
                     * implementation to load the chunk asynchronously without blocking the
                     * main server thread. The {@link Future} will be called with the chunk once
                     * the operation was completed.</p>
                     * <p><b>Note:</b> If asynchronous chunk loading is not supported by
                     * the implementation, the chunk will be loaded synchronously and the
                     * {@link Future} will be called immediately.</p>
                     * @param chunkPosition The position
                     * @param shouldGenerate True to generate a new chunk
                     * @return The future callback for the loaded chunk
                     */
                    // @ts-ignore
                    loadChunkAsync(chunkPosition: Vector3i, shouldGenerate: boolean): java.util.concurrent.CompletableFuture<java.util.Optional<org.spongepowered.api.world.Chunk>>
                    /**
                     * Gets the chunk at the given chunk coordinate position if it exists or if
                     * {@code shouldGenerate} is true and the chunk is generated.
                     * <p>Unlike {@link #loadChunk(Vector3i, boolean)} this method allows the
                     * implementation to load the chunk asynchronously without blocking the
                     * main server thread. The {@link Future} will be called with the chunk once
                     * the operation was completed.</p>
                     * <p><b>Note:</b> If asynchronous chunk loading is not supported by
                     * the implementation, the chunk will be loaded synchronously and the
                     * {@link Future} will be called immediately.</p>
                     * @param cx The x coordinate
                     * @param cy The y coordinate
                     * @param cz The z coordinate
                     * @param shouldGenerate True to generate a new chunk
                     * @return The future callback for the loaded chunk
                     */
                    // @ts-ignore
                    loadChunkAsync(cx: number /*int*/, cy: number /*int*/, cz: number /*int*/, shouldGenerate: boolean): java.util.concurrent.CompletableFuture<java.util.Optional<org.spongepowered.api.world.Chunk>>
                    /**
                     * Regenerates a chunk at the given chunk coordinate position.
                     * @param chunkPosition The chunk position to regenerate
                     * @return The regenerated chunk, if available
                     */
                    // @ts-ignore
                    regenerateChunk(chunkPosition: Vector3i): java.util.Optional<org.spongepowered.api.world.Chunk>
                    /**
                     * Regenerates a chunk at the given chunk coordinates.
                     * @param cx The chunk x coordinate
                     * @param cy The chunk y coordinate
                     * @param cz The chunk z coordinate
                     * @return The regenerated chunk, if available
                     */
                    // @ts-ignore
                    regenerateChunk(cx: number /*int*/, cy: number /*int*/, cz: number /*int*/): java.util.Optional<org.spongepowered.api.world.Chunk>
                    /**
                     * Regenerates a chunk at the given chunk coordinate position.
                     * @param chunkPosition The chunk position to regenerate
                     * @param flag The chunk regenerate flag to use
                     * @return The regenerated chunk, if available
                     */
                    // @ts-ignore
                    regenerateChunk(chunkPosition: Vector3i, flag: org.spongepowered.api.world.ChunkRegenerateFlag): java.util.Optional<org.spongepowered.api.world.Chunk>
                    /**
                     * Regenerates a chunk at the given chunk coordinates.
                     * @param cx The chunk x coordinate
                     * @param cy The chunk y coordinate
                     * @param cz The chunk z coordinate
                     * @param flag The chunk regenerate flag to use
                     * @return The regenerated chunk, if available
                     */
                    // @ts-ignore
                    regenerateChunk(cx: number /*int*/, cy: number /*int*/, cz: number /*int*/, flag: org.spongepowered.api.world.ChunkRegenerateFlag): java.util.Optional<org.spongepowered.api.world.Chunk>
                    /**
                     * Unloads the given chunk from the world. Returns a {@code boolean} flag
                     * for whether the operation was successful.
                     * @param chunk The chunk to unload
                     * @return Whether the operation was successful
                     */
                    // @ts-ignore
                    unloadChunk(chunk: org.spongepowered.api.world.Chunk): boolean
                    /**
                     * Returns a Collection of all actively loaded chunks in this world.
                     * <p>The ordering of the returned chunks is undefined.</p>
                     * @return The loaded chunks
                     */
                    // @ts-ignore
                    getLoadedChunks(): java.lang.Iterable<org.spongepowered.api.world.Chunk>
                    /**
                     * Gets the entity whose {@link UUID} matches the provided id, possibly
                     * returning no entity if the entity is not loaded or non-existent.
                     * <p>For world implementations, only some parts of the world is usually
                     * loaded, so this method may return no entity if the entity is not
                     * loaded.</p>
                     * @param uuid The unique id
                     * @return An entity, if available
                     */
                    // @ts-ignore
                    getEntity(uuid: java.util.UUID): java.util.Optional<org.spongepowered.api.entity.Entity>
                    /**
                     * Gets the world border for the world.
                     * @return The world border
                     */
                    // @ts-ignore
                    getWorldBorder(): org.spongepowered.api.world.WorldBorder
                    /**
                     * Returns a new builder for creating a task to pre-generate the chunks
                     * inside a square border with a given center and diameter.
                     * @param center The center of the border
                     * @param diameter The diameter of the border
                     * @return The builder for the chunk pre-generate task
                     * @see ChunkPreGenerate
                     */
                    // @ts-ignore
                    newChunkPreGenerate(center: Vector3d, diameter: number /*double*/): org.spongepowered.api.world.ChunkPreGenerate.Builder
                    /**
                     * Returns the {@link Dimension} of this world.
                     * @return The {#link Dimension}
                     */
                    // @ts-ignore
                    getDimension(): org.spongepowered.api.world.Dimension
                    /**
                     * Gets the {@link WorldGenerator} for this world.
                     * <p>Any changes made to the world generator will only affect newly
                     * generated chunks.</p>
                     * @return The world generator
                     */
                    // @ts-ignore
                    getWorldGenerator(): org.spongepowered.api.world.gen.WorldGenerator
                    /**
                     * Gets the properties for this world.
                     * @return The properties
                     */
                    // @ts-ignore
                    getProperties(): org.spongepowered.api.world.storage.WorldProperties
                    /**
                     * Gets the {@link Path} pointing to the root of where the world's data
                     * is being stored.
                     * @return The path
                     */
                    // @ts-ignore
                    getDirectory(): java.nio.file.Path
                    /**
                     * Gets this {@link World}'s {@link UUID}.
                     * @see WorldProperties#getUniqueId()
                     * @return The uuid for this world
                     */
                    // @ts-ignore
                    getUniqueId(): java.util.UUID
                    /**
                     * Gets the name of this {@link World world}.
                     * @see WorldProperties#getWorldName()
                     * @return The name for this world
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Gets the current {@link Difficulty}.
                     * @see WorldProperties#getDifficulty()
                     * @return The difficulty for this world
                     */
                    // @ts-ignore
                    getDifficulty(): org.spongepowered.api.world.difficulty.Difficulty
                    /**
                     * Gets a set game rule's current value, if available and set.
                     * @see WorldProperties#getGameRule(String)
                     * @param gameRule The game rule
                     * @return the game rule, if available
                     */
                    // @ts-ignore
                    getGameRule(gameRule: string): java.util.Optional<java.lang.String>
                    /**
                     * Gets the current {@link Map map} of game rules and their
                     * values. Most game rules can be found in {@link DefaultGameRules}.
                     * @see WorldProperties#getGameRules()
                     * @return The map of game rules and their values
                     */
                    // @ts-ignore
                    getGameRules(): java.util.Map<java.lang.String, java.lang.String>
                    /**
                     * Gets whether the spawn chunks should remain loaded.
                     * @see WorldProperties#doesKeepSpawnLoaded()
                     * @return True if the spawn of this world should remain loaded
                     */
                    // @ts-ignore
                    doesKeepSpawnLoaded(): boolean
                    /**
                     * Sets whether the spawn chunks should remain loaded.
                     * @see WorldProperties#setKeepSpawnLoaded(boolean)
                     * @param keepLoaded Whether to keep spawn loaded
                     */
                    // @ts-ignore
                    setKeepSpawnLoaded(keepLoaded: boolean): void
                    /**
                     * Gets the {@link Location} of the spawn point.
                     * @return The location
                     */
                    // @ts-ignore
                    getSpawnLocation(): org.spongepowered.api.world.Location<org.spongepowered.api.world.World>
                    /**
                     * Gets the {@link SerializationBehavior} to use.
                     * @see WorldProperties#getSerializationBehavior()
                     * @return The serialization behavior of this world
                     */
                    // @ts-ignore
                    getSerializationBehavior(): org.spongepowered.api.world.SerializationBehavior
                    /**
                     * Sets the {@link SerializationBehavior} for use.
                     * @see WorldProperties#setSerializationBehavior(SerializationBehavior)
                     * @param behavior The serialization behavior to set
                     */
                    // @ts-ignore
                    setSerializationBehavior(behavior: org.spongepowered.api.world.SerializationBehavior): void
                    /**
                     * Gets the associated {@link WorldStorage} persisting this world.
                     * @return The associated world storage
                     */
                    // @ts-ignore
                    getWorldStorage(): org.spongepowered.api.world.storage.WorldStorage
                    /**
                     * Causes an {@link Explosion} in a world.
                     * @param explosion The explosion to cause
                     */
                    // @ts-ignore
                    triggerExplosion(explosion: org.spongepowered.api.world.explosion.Explosion): void
                    /**
                     * Gets the portal agent, used for manipulating teleporters.
                     * @return The portal agent
                     */
                    // @ts-ignore
                    getPortalAgent(): org.spongepowered.api.world.PortalAgent
                    /**
                     * Gets the sea level of the world.
                     * @return The sea level
                     */
                    // @ts-ignore
                    getSeaLevel(): int
                    // @ts-ignore
                    getBiomeWorker(): org.spongepowered.api.world.extent.worker.MutableBiomeVolumeWorker<org.spongepowered.api.world.World>
                    // @ts-ignore
                    getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker<org.spongepowered.api.world.World>
                    /**
                     * Instructs the world to save all data.
                     * @return True if save was successfull, or false if
                     *      {#link SerializationBehavior} is {@link SerializationBehaviors#NONE}
                     * @throws IOException If the save failed
                     */
                    // @ts-ignore
                    save(): boolean
                    /**
                     * Gets the view distance (in chunks) for this world.
                     * @return The view distance
                     */
                    // @ts-ignore
                    getViewDistance(): int
                    /**
                     * Sets the view distance (in chunks) for this world.
                     * <p>The view distance must be greater than or equal to 3,
                     * and less than or equal to 32.</p>
                     * @param viewDistance The view distance
                     */
                    // @ts-ignore
                    setViewDistance(viewDistance: number /*int*/): void
                    /**
                     * Resets the view distance to the default value for this world.
                     */
                    // @ts-ignore
                    resetViewDistance(): void
                }
            }
        }
    }
}
