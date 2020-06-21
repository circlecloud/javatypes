declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * A chunk is a specific grid-aligned partition of a {@link Extent}.
                 * <p>In Minecraft, the chunk is 16 by 16 blocks on the X and Z axes. The height
                 * of each chunk varies between worlds.</p>
                 */
                // @ts-ignore
                interface Chunk extends org.spongepowered.api.world.extent.Extent {
                    // @ts-ignore
                    getLocation(position: Vector3i): org.spongepowered.api.world.Location<org.spongepowered.api.world.Chunk>
                    // @ts-ignore
                    getLocation(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.world.Location<org.spongepowered.api.world.Chunk>
                    // @ts-ignore
                    getLocation(position: Vector3d): org.spongepowered.api.world.Location<org.spongepowered.api.world.Chunk>
                    // @ts-ignore
                    getLocation(x: number /*double*/, y: number /*double*/, z: number /*double*/): org.spongepowered.api.world.Location<org.spongepowered.api.world.Chunk>
                    /**
                     * Gets the position of the chunk.
                     * <p>The returned position is 3-dimensional with the Y-coordinate set to be
                     * the base (lowest) Y-position of the chunk. As 3-dimensional chunks do not
                     * yet exist in Minecraft, the returned position will always have a
                     * {@code y} set to 0.</p>
                     * @return The position
                     */
                    // @ts-ignore
                    getPosition(): Vector3i
                    /**
                     * Gets the world the chunk is in.
                     * @return The world
                     */
                    // @ts-ignore
                    getWorld(): org.spongepowered.api.world.World
                    /**
                     * Gets if the chunk has been populated by the generator.
                     * @return Whether or not the chunk has been populated.
                     */
                    // @ts-ignore
                    isPopulated(): boolean
                    /**
                     * Loads this chunk, and generates if specified and required.
                     * @param generate Whether or not to generate the chunk if it does not yet
                     *      exist
                     * @return If the chunk was successfully loaded
                     */
                    // @ts-ignore
                    loadChunk(generate: boolean): boolean
                    /**
                     * Unloads this chunk, if possible.
                     * @return Whether or not the chunk unloaded
                     */
                    // @ts-ignore
                    unloadChunk(): boolean
                    /**
                     * Gets the number of ticks players have been present in this chunk, used
                     * for calculation of the regional difficulty factor. In vanilla, it is
                     * increased by the number of players in the chunk every tick, and is capped
                     * at 3,600,000 ticks (50 hours).
                     * @return The number of ticks
                     * @deprecated Due to misspelling, use {#link #getInhabitedTime()} instead
                     */
                    // @ts-ignore
                    getInhabittedTime(): number /*int*/
                    /**
                     * Gets the number of ticks players have been present in this chunk, used
                     * for calculation of the regional difficulty factor. In vanilla, it is
                     * increased by the number of players in the chunk every tick, and is capped
                     * at 3,600,000 ticks (50 hours).
                     * @return The number of ticks
                     */
                    // @ts-ignore
                    getInhabitedTime(): number /*int*/
                    /**
                     * Gets the regional difficulty factor for this chunk. In vanilla, it is
                     * dependent on the playtime of the world, inhabited time of the chunk, the
                     * phase of the moon, and the current difficulty setting. This number ranges
                     * from 0.75-1.5 on easy, 1.5-4.0 on normal, and 2.25-6.75 on hard.
                     * <p>This value is used for display only in vanilla.</p>
                     * @return The regional difficulty factor for this chunk
                     */
                    // @ts-ignore
                    getRegionalDifficultyFactor(): number /*double*/
                    /**
                     * Gets the regional difficulty percentage for this chunk. It is calculated
                     * by taking the regional difficulty factor and using the following rules:
                     * If the factor is less than 2.0, the percentage is 0%. If the factor is
                     * greater than 4.0, the percentage is 100%. Otherwise, the percentage is
                     * the factor minus 2.0, divided by 2.0.
                     * <p>This is the value that is used in vanilla to find which effects are
                     * caused by the regional difficulty.</p>
                     * @return The regional difficulty percentage for this chunk
                     */
                    // @ts-ignore
                    getRegionalDifficultyPercentage(): number /*double*/
                    /**
                     * Gets the chunk in the given direction from this chunk, if it exists.
                     * @param direction The cardinal or ordinal direction to get the chunk from
                     * @return The neighbor chunk, if available
                     */
                    // @ts-ignore
                    getNeighbor(direction: org.spongepowered.api.util.Direction): java.util.Optional<org.spongepowered.api.world.Chunk>
                    /**
                     * Gets the chunk in the given direction from this chunk.
                     * @param direction The cardinal or ordinal direction to get the chunk from
                     * @param shouldLoad Whether the server should load or generate the chunk
                     *      if unavailable
                     * @return The neighbor chunk, if available or if {#code shouldLoad} is true
                     */
                    // @ts-ignore
                    getNeighbor(direction: org.spongepowered.api.util.Direction, shouldLoad: boolean): java.util.Optional<org.spongepowered.api.world.Chunk>
                    // @ts-ignore
                    getBiomeWorker(): org.spongepowered.api.world.extent.worker.MutableBiomeVolumeWorker<org.spongepowered.api.world.Chunk>
                    // @ts-ignore
                    getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker<org.spongepowered.api.world.Chunk>
                }
            }
        }
    }
}
