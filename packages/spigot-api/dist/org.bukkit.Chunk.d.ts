declare namespace org {
    namespace bukkit {
        /**
         * Represents a chunk of blocks
         */
        // @ts-ignore
        interface Chunk {
            /**
             * Gets the X-coordinate of this chunk
             * @return X-coordinate
             */
            // @ts-ignore
            getX(): number /*int*/
            /**
             * Gets the Z-coordinate of this chunk
             * @return Z-coordinate
             */
            // @ts-ignore
            getZ(): number /*int*/
            /**
             * Gets the world containing this chunk
             * @return Parent World
             */
            // @ts-ignore
            getWorld(): org.bukkit.World
            /**
             * Gets a block from this chunk
             * @param x 0-15
             * @param y 0-255
             * @param z 0-15
             * @return the Block
             */
            // @ts-ignore
            getBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.bukkit.block.Block
            /**
             * Capture thread-safe read-only snapshot of chunk data
             * @return ChunkSnapshot
             */
            // @ts-ignore
            getChunkSnapshot(): org.bukkit.ChunkSnapshot
            /**
             * Capture thread-safe read-only snapshot of chunk data
             * @param includeMaxblocky - if true, snapshot includes per-coordinate
             *      maximum Y values
             * @param includeBiome - if true, snapshot includes per-coordinate biome
             *      type
             * @param includeBiomeTempRain - if true, snapshot includes per-coordinate
             *      raw biome temperature and rainfall
             * @return ChunkSnapshot
             */
            // @ts-ignore
            getChunkSnapshot(includeMaxblocky: boolean, includeBiome: boolean, includeBiomeTempRain: boolean): org.bukkit.ChunkSnapshot
            /**
             * Get a list of all entities in the chunk.
             * @return The entities.
             */
            // @ts-ignore
            getEntities(): org.bukkit.entity.Entity[]
            /**
             * Get a list of all tile entities in the chunk.
             * @return The tile entities.
             */
            // @ts-ignore
            getTileEntities(): org.bukkit.block.BlockState[]
            /**
             * Checks if the chunk is loaded.
             * @return True if it is loaded.
             */
            // @ts-ignore
            isLoaded(): boolean
            /**
             * Loads the chunk.
             * @param generate Whether or not to generate a chunk if it doesn't
             *      already exist
             * @return true if the chunk has loaded successfully, otherwise false
             */
            // @ts-ignore
            load(generate: boolean): boolean
            /**
             * Loads the chunk.
             * @return true if the chunk has loaded successfully, otherwise false
             */
            // @ts-ignore
            load(): boolean
            /**
             * Unloads and optionally saves the Chunk
             * @param save Controls whether the chunk is saved
             * @return true if the chunk has unloaded successfully, otherwise false
             */
            // @ts-ignore
            unload(save: boolean): boolean
            /**
             * Unloads and optionally saves the Chunk
             * @return true if the chunk has unloaded successfully, otherwise false
             */
            // @ts-ignore
            unload(): boolean
            /**
             * Checks if this chunk can spawn slimes without being a swamp biome.
             * @return true if slimes are able to spawn in this chunk
             */
            // @ts-ignore
            isSlimeChunk(): boolean
            /**
             * Gets whether the chunk at the specified chunk coordinates is force
             * loaded.
             * <p>
             * A force loaded chunk will not be unloaded due to lack of player activity.
             * @return force load status
             * @see World#isChunkForceLoaded(int, int)
             */
            // @ts-ignore
            isForceLoaded(): boolean
            /**
             * Sets whether the chunk at the specified chunk coordinates is force
             * loaded.
             * <p>
             * A force loaded chunk will not be unloaded due to lack of player activity.
             * @param forced force load status
             * @see World#setChunkForceLoaded(int, int, boolean)
             */
            // @ts-ignore
            setForceLoaded(forced: boolean): void
            /**
             * Adds a plugin ticket for this chunk, loading this chunk if it is not
             * already loaded.
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             * @param plugin Plugin which owns the ticket
             * @return {#code true} if a plugin ticket was added, {@code false} if the
             *  ticket already exists for the plugin
             * @throws IllegalStateException If the specified plugin is not enabled
             * @see World#addPluginChunkTicket(int, int, Plugin)
             */
            // @ts-ignore
            addPluginChunkTicket(plugin: org.bukkit.plugin.Plugin): boolean
            /**
             * Removes the specified plugin's ticket for this chunk
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             * @param plugin Plugin which owns the ticket
             * @return {#code true} if the plugin ticket was removed, {@code false} if
             *  there is no plugin ticket for the chunk
             * @see World#removePluginChunkTicket(int, int, Plugin)
             */
            // @ts-ignore
            removePluginChunkTicket(plugin: org.bukkit.plugin.Plugin): boolean
            /**
             * Retrieves a collection specifying which plugins have tickets for this
             * chunk. This collection is not updated when plugin tickets are added or
             * removed to this chunk.
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             * @return unmodifiable collection containing which plugins have tickets for
             *  this chunk
             * @see World#getPluginChunkTickets(int, int)
             */
            // @ts-ignore
            getPluginChunkTickets(): Array<org.bukkit.plugin.Plugin>
            /**
             * Gets the amount of time in ticks that this chunk has been inhabited.
             * Note that the time is incremented once per tick per player in the chunk.
             * @return inhabited time
             */
            // @ts-ignore
            getInhabitedTime(): number /*long*/
            /**
             * Sets the amount of time in ticks that this chunk has been inhabited.
             * @param ticks new inhabited time
             */
            // @ts-ignore
            setInhabitedTime(ticks: number /*long*/): void
            /**
             * Tests if this chunk contains the specified block.
             * @param block block to test
             * @return if the block is contained within
             */
            // @ts-ignore
            contains(block: org.bukkit.block.data.BlockData): boolean
        }
    }
}
