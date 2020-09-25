declare namespace org {
    namespace bukkit {
        /**
         * Represents a world, which may contain entities, chunks and blocks
         */
        // @ts-ignore
        interface World extends org.bukkit.plugin.messaging.PluginMessageRecipient, org.bukkit.metadata.Metadatable {
            /**
             * Gets the {@link Block} at the given coordinates
             * @param x X-coordinate of the block
             * @param y Y-coordinate of the block
             * @param z Z-coordinate of the block
             * @return Block at the given coordinates
             */
            // @ts-ignore
            getBlockAt(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.bukkit.block.Block
            /**
             * Gets the {@link Block} at the given {@link Location}
             * @param location Location of the block
             * @return Block at the given location
             */
            // @ts-ignore
            getBlockAt(location: org.bukkit.Location): org.bukkit.block.Block
            /**
             * Gets the highest non-empty (impassable) coordinate at the given
             * coordinates.
             * @param x X-coordinate of the blocks
             * @param z Z-coordinate of the blocks
             * @return Y-coordinate of the highest non-empty block
             */
            // @ts-ignore
            getHighestBlockYAt(x: number /*int*/, z: number /*int*/): number /*int*/
            /**
             * Gets the highest non-empty (impassable) coordinate at the given
             * {@link Location}.
             * @param location Location of the blocks
             * @return Y-coordinate of the highest non-empty block
             */
            // @ts-ignore
            getHighestBlockYAt(location: org.bukkit.Location): number /*int*/
            /**
             * Gets the highest non-empty (impassable) block at the given coordinates.
             * @param x X-coordinate of the block
             * @param z Z-coordinate of the block
             * @return Highest non-empty block
             */
            // @ts-ignore
            getHighestBlockAt(x: number /*int*/, z: number /*int*/): org.bukkit.block.Block
            /**
             * Gets the highest non-empty (impassable) block at the given coordinates.
             * @param location Coordinates to get the highest block
             * @return Highest non-empty block
             */
            // @ts-ignore
            getHighestBlockAt(location: org.bukkit.Location): org.bukkit.block.Block
            /**
             * Gets the highest coordinate corresponding to the {@link HeightMap} at the
             * given coordinates.
             * @param x X-coordinate of the blocks
             * @param z Z-coordinate of the blocks
             * @param heightMap the heightMap that is used to determine the highest
             *  point
             * @return Y-coordinate of the highest block corresponding to the
             *  {#link HeightMap}
             */
            // @ts-ignore
            getHighestBlockYAt(x: number /*int*/, z: number /*int*/, heightMap: org.bukkit.HeightMap): number /*int*/
            /**
             * Gets the highest coordinate corresponding to the {@link HeightMap} at the
             * given {@link Location}.
             * @param location Location of the blocks
             * @param heightMap the heightMap that is used to determine the highest
             *  point
             * @return Y-coordinate of the highest block corresponding to the
             *  {#link HeightMap}
             */
            // @ts-ignore
            getHighestBlockYAt(location: org.bukkit.Location, heightMap: org.bukkit.HeightMap): number /*int*/
            /**
             * Gets the highest block corresponding to the {@link HeightMap} at the
             * given coordinates.
             * @param x X-coordinate of the block
             * @param z Z-coordinate of the block
             * @param heightMap the heightMap that is used to determine the highest
             *  point
             * @return Highest block corresponding to the {#link HeightMap}
             */
            // @ts-ignore
            getHighestBlockAt(x: number /*int*/, z: number /*int*/, heightMap: org.bukkit.HeightMap): org.bukkit.block.Block
            /**
             * Gets the highest block corresponding to the {@link HeightMap} at the
             * given coordinates.
             * @param location Coordinates to get the highest block
             * @param heightMap the heightMap that is used to determine the highest
             *  point
             * @return Highest block corresponding to the {#link HeightMap}
             */
            // @ts-ignore
            getHighestBlockAt(location: org.bukkit.Location, heightMap: org.bukkit.HeightMap): org.bukkit.block.Block
            /**
             * Gets the {@link Chunk} at the given coordinates
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             * @return Chunk at the given coordinates
             */
            // @ts-ignore
            getChunkAt(x: number /*int*/, z: number /*int*/): org.bukkit.Chunk
            /**
             * Gets the {@link Chunk} at the given {@link Location}
             * @param location Location of the chunk
             * @return Chunk at the given location
             */
            // @ts-ignore
            getChunkAt(location: org.bukkit.Location): org.bukkit.Chunk
            /**
             * Gets the {@link Chunk} that contains the given {@link Block}
             * @param block Block to get the containing chunk from
             * @return The chunk that contains the given block
             */
            // @ts-ignore
            getChunkAt(block: org.bukkit.block.Block): org.bukkit.Chunk
            /**
             * Checks if the specified {@link Chunk} is loaded
             * @param chunk The chunk to check
             * @return true if the chunk is loaded, otherwise false
             */
            // @ts-ignore
            isChunkLoaded(chunk: org.bukkit.Chunk): boolean
            /**
             * Gets an array of all loaded {@link Chunk}s
             * @return Chunk[] containing all loaded chunks
             */
            // @ts-ignore
            getLoadedChunks(): org.bukkit.Chunk[]
            /**
             * Loads the specified {@link Chunk}.
             * <p>
             * <b>This method will keep the specified chunk loaded until one of the
             * unload methods is manually called. Callers are advised to instead use
             * getChunkAt which will only temporarily load the requested chunk.</b>
             * @param chunk The chunk to load
             */
            // @ts-ignore
            loadChunk(chunk: org.bukkit.Chunk): void
            /**
             * Checks if the {@link Chunk} at the specified coordinates is loaded
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             * @return true if the chunk is loaded, otherwise false
             */
            // @ts-ignore
            isChunkLoaded(x: number /*int*/, z: number /*int*/): boolean
            /**
             * Checks if the {@link Chunk} at the specified coordinates is generated
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             * @return true if the chunk is generated, otherwise false
             */
            // @ts-ignore
            isChunkGenerated(x: number /*int*/, z: number /*int*/): boolean
            /**
             * Checks if the {@link Chunk} at the specified coordinates is loaded and
             * in use by one or more players
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             * @return true if the chunk is loaded and in use by one or more players,
             *      otherwise false
             * @deprecated This method was added to facilitate chunk garbage collection.
             *      As of the current Minecraft version chunks are now strictly managed and
             *      will not be loaded for more than 1 tick unless they are in use.
             */
            // @ts-ignore
            isChunkInUse(x: number /*int*/, z: number /*int*/): boolean
            /**
             * Loads the {@link Chunk} at the specified coordinates.
             * <p>
             * <b>This method will keep the specified chunk loaded until one of the
             * unload methods is manually called. Callers are advised to instead use
             * getChunkAt which will only temporarily load the requested chunk.</b>
             * <p>
             * If the chunk does not exist, it will be generated.
             * <p>
             * This method is analogous to {@link #loadChunk(int, int, boolean)} where
             * generate is true.
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             */
            // @ts-ignore
            loadChunk(x: number /*int*/, z: number /*int*/): void
            /**
             * Loads the {@link Chunk} at the specified coordinates.
             * <p>
             * <b>This method will keep the specified chunk loaded until one of the
             * unload methods is manually called. Callers are advised to instead use
             * getChunkAt which will only temporarily load the requested chunk.</b>
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             * @param generate Whether or not to generate a chunk if it doesn't
             *      already exist
             * @return true if the chunk has loaded successfully, otherwise false
             */
            // @ts-ignore
            loadChunk(x: number /*int*/, z: number /*int*/, generate: boolean): boolean
            /**
             * Safely unloads and saves the {@link Chunk} at the specified coordinates
             * <p>
             * This method is analogous to {@link #unloadChunk(int, int, boolean)}
             * where save is true.
             * @param chunk the chunk to unload
             * @return true if the chunk has unloaded successfully, otherwise false
             */
            // @ts-ignore
            unloadChunk(chunk: org.bukkit.Chunk): boolean
            /**
             * Safely unloads and saves the {@link Chunk} at the specified coordinates
             * <p>
             * This method is analogous to {@link #unloadChunk(int, int, boolean)}
             * where save is true.
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             * @return true if the chunk has unloaded successfully, otherwise false
             */
            // @ts-ignore
            unloadChunk(x: number /*int*/, z: number /*int*/): boolean
            /**
             * Safely unloads and optionally saves the {@link Chunk} at the specified
             * coordinates.
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             * @param save Whether or not to save the chunk
             * @return true if the chunk has unloaded successfully, otherwise false
             */
            // @ts-ignore
            unloadChunk(x: number /*int*/, z: number /*int*/, save: boolean): boolean
            /**
             * Safely queues the {@link Chunk} at the specified coordinates for
             * unloading.
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             * @return true is the queue attempt was successful, otherwise false
             */
            // @ts-ignore
            unloadChunkRequest(x: number /*int*/, z: number /*int*/): boolean
            /**
             * Regenerates the {@link Chunk} at the specified coordinates
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             * @return Whether the chunk was actually regenerated
             * @deprecated regenerating a single chunk is not likely to produce the same
             *  chunk as before as terrain decoration may be spread across chunks. Use of
             *  this method should be avoided as it is known to produce buggy results.
             */
            // @ts-ignore
            regenerateChunk(x: number /*int*/, z: number /*int*/): boolean
            /**
             * Resends the {@link Chunk} to all clients
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             * @return Whether the chunk was actually refreshed
             * @deprecated This method is not guaranteed to work suitably across all client implementations.
             */
            // @ts-ignore
            refreshChunk(x: number /*int*/, z: number /*int*/): boolean
            /**
             * Gets whether the chunk at the specified chunk coordinates is force
             * loaded.
             * <p>
             * A force loaded chunk will not be unloaded due to lack of player activity.
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             * @return force load status
             */
            // @ts-ignore
            isChunkForceLoaded(x: number /*int*/, z: number /*int*/): boolean
            /**
             * Sets whether the chunk at the specified chunk coordinates is force
             * loaded.
             * <p>
             * A force loaded chunk will not be unloaded due to lack of player activity.
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             * @param forced force load status
             */
            // @ts-ignore
            setChunkForceLoaded(x: number /*int*/, z: number /*int*/, forced: boolean): void
            /**
             * Returns all force loaded chunks in this world.
             * <p>
             * A force loaded chunk will not be unloaded due to lack of player activity.
             * @return unmodifiable collection of force loaded chunks
             */
            // @ts-ignore
            getForceLoadedChunks(): Array<org.bukkit.Chunk>
            /**
             * Adds a plugin ticket for the specified chunk, loading the chunk if it is
             * not already loaded.
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             * @param plugin Plugin which owns the ticket
             * @return {#code true} if a plugin ticket was added, {@code false} if the
             *  ticket already exists for the plugin
             * @throws IllegalStateException If the specified plugin is not enabled
             * @see #removePluginChunkTicket(int, int, Plugin)
             */
            // @ts-ignore
            addPluginChunkTicket(x: number /*int*/, z: number /*int*/, plugin: org.bukkit.plugin.Plugin): boolean
            /**
             * Removes the specified plugin's ticket for the specified chunk
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             * @param plugin Plugin which owns the ticket
             * @return {#code true} if the plugin ticket was removed, {@code false} if
             *  there is no plugin ticket for the chunk
             * @see #addPluginChunkTicket(int, int, Plugin)
             */
            // @ts-ignore
            removePluginChunkTicket(x: number /*int*/, z: number /*int*/, plugin: org.bukkit.plugin.Plugin): boolean
            /**
             * Removes all plugin tickets for the specified plugin
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             * @param plugin Specified plugin
             * @see #addPluginChunkTicket(int, int, Plugin)
             * @see #removePluginChunkTicket(int, int, Plugin)
             */
            // @ts-ignore
            removePluginChunkTickets(plugin: org.bukkit.plugin.Plugin): void
            /**
             * Retrieves a collection specifying which plugins have tickets for the
             * specified chunk. This collection is not updated when plugin tickets are
             * added or removed to the chunk.
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             * @param x X-coordinate of the chunk
             * @param z Z-coordinate of the chunk
             * @return unmodifiable collection containing which plugins have tickets for
             *  the chunk
             * @see #addPluginChunkTicket(int, int, Plugin)
             * @see #removePluginChunkTicket(int, int, Plugin)
             */
            // @ts-ignore
            getPluginChunkTickets(x: number /*int*/, z: number /*int*/): Array<org.bukkit.plugin.Plugin>
            /**
             * Returns a map of which plugins have tickets for what chunks. The returned
             * map is not updated when plugin tickets are added or removed to chunks. If
             * a plugin has no tickets, it will be absent from the map.
             * <p>
             * A plugin ticket will prevent a chunk from unloading until it is
             * explicitly removed. A plugin instance may only have one ticket per chunk,
             * but each chunk can have multiple plugin tickets.
             * </p>
             * @return unmodifiable map containing which plugins have tickets for what
             *  chunks
             * @see #addPluginChunkTicket(int, int, Plugin)
             * @see #removePluginChunkTicket(int, int, Plugin)
             */
            // @ts-ignore
            getPluginChunkTickets(): java.util.Map<org.bukkit.plugin.Plugin, java.util.Collection<org.bukkit.Chunk> | Array<org.bukkit.Chunk>>
            /**
             * Drops an item at the specified {@link Location}
             * @param location Location to drop the item
             * @param item ItemStack to drop
             * @return ItemDrop entity created as a result of this method
             */
            // @ts-ignore
            dropItem(location: org.bukkit.Location, item: org.bukkit.inventory.ItemStack): org.bukkit.entity.Item
            /**
             * Drops an item at the specified {@link Location} with a random offset
             * @param location Location to drop the item
             * @param item ItemStack to drop
             * @return ItemDrop entity created as a result of this method
             */
            // @ts-ignore
            dropItemNaturally(location: org.bukkit.Location, item: org.bukkit.inventory.ItemStack): org.bukkit.entity.Item
            /**
             * Creates an {@link Arrow} entity at the given {@link Location}
             * @param location Location to spawn the arrow
             * @param direction Direction to shoot the arrow in
             * @param speed Speed of the arrow. A recommend speed is 0.6
             * @param spread Spread of the arrow. A recommend spread is 12
             * @return Arrow entity spawned as a result of this method
             */
            // @ts-ignore
            spawnArrow(location: org.bukkit.Location, direction: org.bukkit.util.Vector, speed: number /*float*/, spread: number /*float*/): org.bukkit.entity.Arrow
            /**
             * Creates an arrow entity of the given class at the given {@link Location}
             * @param <T> type of arrow to spawn
             * @param location Location to spawn the arrow
             * @param direction Direction to shoot the arrow in
             * @param speed Speed of the arrow. A recommend speed is 0.6
             * @param spread Spread of the arrow. A recommend spread is 12
             * @param clazz the Entity class for the arrow
             *  {#link org.bukkit.entity.SpectralArrow},{@link org.bukkit.entity.Arrow},{@link org.bukkit.entity.TippedArrow}
             * @return Arrow entity spawned as a result of this method
             */
            // @ts-ignore
            spawnArrow<T extends org.bukkit.entity.AbstractArrow>(location: org.bukkit.Location, direction: org.bukkit.util.Vector, speed: number /*float*/, spread: number /*float*/, clazz: java.lang.Class<T>): T
            /**
             * Creates a tree at the given {@link Location}
             * @param location Location to spawn the tree
             * @param type Type of the tree to create
             * @return true if the tree was created successfully, otherwise false
             */
            // @ts-ignore
            generateTree(location: org.bukkit.Location, type: org.bukkit.TreeType): boolean
            /**
             * Creates a tree at the given {@link Location}
             * @param loc Location to spawn the tree
             * @param type Type of the tree to create
             * @param delegate A class to call for each block changed as a result of
             *      this method
             * @return true if the tree was created successfully, otherwise false
             */
            // @ts-ignore
            generateTree(loc: org.bukkit.Location, type: org.bukkit.TreeType, delegate: org.bukkit.BlockChangeDelegate): boolean
            /**
             * Creates a entity at the given {@link Location}
             * @param loc The location to spawn the entity
             * @param type The entity to spawn
             * @return Resulting Entity of this method, or null if it was unsuccessful
             */
            // @ts-ignore
            spawnEntity(loc: org.bukkit.Location, type: org.bukkit.entity.EntityType): org.bukkit.entity.Entity
            /**
             * Strikes lightning at the given {@link Location}
             * @param loc The location to strike lightning
             * @return The lightning entity.
             */
            // @ts-ignore
            strikeLightning(loc: org.bukkit.Location): org.bukkit.entity.LightningStrike
            /**
             * Strikes lightning at the given {@link Location} without doing damage
             * @param loc The location to strike lightning
             * @return The lightning entity.
             */
            // @ts-ignore
            strikeLightningEffect(loc: org.bukkit.Location): org.bukkit.entity.LightningStrike
            /**
             * Get a list of all entities in this World
             * @return A List of all Entities currently residing in this world
             */
            // @ts-ignore
            getEntities(): Array<org.bukkit.entity.Entity>
            /**
             * Get a list of all living entities in this World
             * @return A List of all LivingEntities currently residing in this world
             */
            // @ts-ignore
            getLivingEntities(): Array<org.bukkit.entity.LivingEntity>
            /**
             * Get a collection of all entities in this World matching the given
             * class/interface
             * @param <T> an entity subclass
             * @param classes The classes representing the types of entity to match
             * @return A List of all Entities currently residing in this world that
             *      match the given class/interface
             */
            // @ts-ignore
            getEntitiesByClass<T extends org.bukkit.entity.Entity>(...classes: java.lang.Class<T>[]): Array<T>
            /**
             * Get a collection of all entities in this World matching the given
             * class/interface
             * @param <T> an entity subclass
             * @param cls The class representing the type of entity to match
             * @return A List of all Entities currently residing in this world that
             *      match the given class/interface
             */
            // @ts-ignore
            getEntitiesByClass<T extends org.bukkit.entity.Entity>(cls: java.lang.Class<T>): Array<T>
            /**
             * Get a collection of all entities in this World matching any of the
             * given classes/interfaces
             * @param classes The classes representing the types of entity to match
             * @return A List of all Entities currently residing in this world that
             *      match one or more of the given classes/interfaces
             */
            // @ts-ignore
            getEntitiesByClasses(...classes: java.lang.Class<any>[]): Array<org.bukkit.entity.Entity>
            /**
             * Get a list of all players in this World
             * @return A list of all Players currently residing in this world
             */
            // @ts-ignore
            getPlayers(): Array<org.bukkit.entity.Player>
            /**
             * Returns a list of entities within a bounding box centered around a
             * Location.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the size of the
             * search bounding box.
             * @param location The center of the bounding box
             * @param x 1/2 the size of the box along x axis
             * @param y 1/2 the size of the box along y axis
             * @param z 1/2 the size of the box along z axis
             * @return the collection of entities near location. This will always be a
             *       non-null collection.
             */
            // @ts-ignore
            getNearbyEntities(location: org.bukkit.Location, x: number /*double*/, y: number /*double*/, z: number /*double*/): Array<org.bukkit.entity.Entity>
            /**
             * Returns a list of entities within a bounding box centered around a
             * Location.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the size of the
             * search bounding box.
             * @param location The center of the bounding box
             * @param x 1/2 the size of the box along x axis
             * @param y 1/2 the size of the box along y axis
             * @param z 1/2 the size of the box along z axis
             * @param filter only entities that fulfill this predicate are considered,
             *      or <code>null</code> to consider all entities
             * @return the collection of entities near location. This will always be a
             *      non-null collection.
             */
            // @ts-ignore
            getNearbyEntities(location: org.bukkit.Location, x: number /*double*/, y: number /*double*/, z: number /*double*/, filter: java.util.function$.Predicate<org.bukkit.entity.Entity>): Array<org.bukkit.entity.Entity>
            /**
             * Returns a list of entities within the given bounding box.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the size of the
             * search bounding box.
             * @param boundingBox the bounding box
             * @return the collection of entities within the bounding box, will always
             *      be a non-null collection
             */
            // @ts-ignore
            getNearbyEntities(boundingBox: org.bukkit.util.BoundingBox): Array<org.bukkit.entity.Entity>
            /**
             * Returns a list of entities within the given bounding box.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the size of the
             * search bounding box.
             * @param boundingBox the bounding box
             * @param filter only entities that fulfill this predicate are considered,
             *      or <code>null</code> to consider all entities
             * @return the collection of entities within the bounding box, will always
             *      be a non-null collection
             */
            // @ts-ignore
            getNearbyEntities(boundingBox: org.bukkit.util.BoundingBox, filter: java.util.function$.Predicate<org.bukkit.entity.Entity>): Array<org.bukkit.entity.Entity>
            /**
             * Performs a ray trace that checks for entity collisions.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the maximum
             * distance.
             * @param start the start position
             * @param direction the ray direction
             * @param maxDistance the maximum distance
             * @return the closest ray trace hit result, or <code>null</code> if there
             *      is no hit
             * @see #rayTraceEntities(Location, Vector, double, double, Predicate)
             */
            // @ts-ignore
            rayTraceEntities(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number /*double*/): org.bukkit.util.RayTraceResult
            /**
             * Performs a ray trace that checks for entity collisions.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the maximum
             * distance.
             * @param start the start position
             * @param direction the ray direction
             * @param maxDistance the maximum distance
             * @param raySize entity bounding boxes will be uniformly expanded (or
             *      shrinked) by this value before doing collision checks
             * @return the closest ray trace hit result, or <code>null</code> if there
             *      is no hit
             * @see #rayTraceEntities(Location, Vector, double, double, Predicate)
             */
            // @ts-ignore
            rayTraceEntities(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number /*double*/, raySize: number /*double*/): org.bukkit.util.RayTraceResult
            /**
             * Performs a ray trace that checks for entity collisions.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the maximum
             * distance.
             * @param start the start position
             * @param direction the ray direction
             * @param maxDistance the maximum distance
             * @param filter only entities that fulfill this predicate are considered,
             *      or <code>null</code> to consider all entities
             * @return the closest ray trace hit result, or <code>null</code> if there
             *      is no hit
             * @see #rayTraceEntities(Location, Vector, double, double, Predicate)
             */
            // @ts-ignore
            rayTraceEntities(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number /*double*/, filter: java.util.function$.Predicate<org.bukkit.entity.Entity>): org.bukkit.util.RayTraceResult
            /**
             * Performs a ray trace that checks for entity collisions.
             * <p>
             * This may not consider entities in currently unloaded chunks. Some
             * implementations may impose artificial restrictions on the maximum
             * distance.
             * @param start the start position
             * @param direction the ray direction
             * @param maxDistance the maximum distance
             * @param raySize entity bounding boxes will be uniformly expanded (or
             *      shrinked) by this value before doing collision checks
             * @param filter only entities that fulfill this predicate are considered,
             *      or <code>null</code> to consider all entities
             * @return the closest ray trace hit result, or <code>null</code> if there
             *      is no hit
             */
            // @ts-ignore
            rayTraceEntities(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number /*double*/, raySize: number /*double*/, filter: java.util.function$.Predicate<org.bukkit.entity.Entity>): org.bukkit.util.RayTraceResult
            /**
             * Performs a ray trace that checks for block collisions using the blocks'
             * precise collision shapes.
             * <p>
             * This takes collisions with passable blocks into account, but ignores
             * fluids.
             * <p>
             * This may cause loading of chunks! Some implementations may impose
             * artificial restrictions on the maximum distance.
             * @param start the start location
             * @param direction the ray direction
             * @param maxDistance the maximum distance
             * @return the ray trace hit result, or <code>null</code> if there is no hit
             * @see #rayTraceBlocks(Location, Vector, double, FluidCollisionMode, boolean)
             */
            // @ts-ignore
            rayTraceBlocks(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number /*double*/): org.bukkit.util.RayTraceResult
            /**
             * Performs a ray trace that checks for block collisions using the blocks'
             * precise collision shapes.
             * <p>
             * This takes collisions with passable blocks into account.
             * <p>
             * This may cause loading of chunks! Some implementations may impose
             * artificial restrictions on the maximum distance.
             * @param start the start location
             * @param direction the ray direction
             * @param maxDistance the maximum distance
             * @param fluidCollisionMode the fluid collision mode
             * @return the ray trace hit result, or <code>null</code> if there is no hit
             * @see #rayTraceBlocks(Location, Vector, double, FluidCollisionMode, boolean)
             */
            // @ts-ignore
            rayTraceBlocks(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number /*double*/, fluidCollisionMode: org.bukkit.FluidCollisionMode): org.bukkit.util.RayTraceResult
            /**
             * Performs a ray trace that checks for block collisions using the blocks'
             * precise collision shapes.
             * <p>
             * If collisions with passable blocks are ignored, fluid collisions are
             * ignored as well regardless of the fluid collision mode.
             * <p>
             * Portal blocks are only considered passable if the ray starts within
             * them. Apart from that collisions with portal blocks will be considered
             * even if collisions with passable blocks are otherwise ignored.
             * <p>
             * This may cause loading of chunks! Some implementations may impose
             * artificial restrictions on the maximum distance.
             * @param start the start location
             * @param direction the ray direction
             * @param maxDistance the maximum distance
             * @param fluidCollisionMode the fluid collision mode
             * @param ignorePassableBlocks whether to ignore passable but collidable
             *      blocks (ex. tall grass, signs, fluids, ..)
             * @return the ray trace hit result, or <code>null</code> if there is no hit
             */
            // @ts-ignore
            rayTraceBlocks(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number /*double*/, fluidCollisionMode: org.bukkit.FluidCollisionMode, ignorePassableBlocks: boolean): org.bukkit.util.RayTraceResult
            /**
             * Performs a ray trace that checks for both block and entity collisions.
             * <p>
             * Block collisions use the blocks' precise collision shapes. The
             * <code>raySize</code> parameter is only taken into account for entity
             * collision checks.
             * <p>
             * If collisions with passable blocks are ignored, fluid collisions are
             * ignored as well regardless of the fluid collision mode.
             * <p>
             * Portal blocks are only considered passable if the ray starts within them.
             * Apart from that collisions with portal blocks will be considered even if
             * collisions with passable blocks are otherwise ignored.
             * <p>
             * This may cause loading of chunks! Some implementations may impose
             * artificial restrictions on the maximum distance.
             * @param start the start location
             * @param direction the ray direction
             * @param maxDistance the maximum distance
             * @param fluidCollisionMode the fluid collision mode
             * @param ignorePassableBlocks whether to ignore passable but collidable
             *      blocks (ex. tall grass, signs, fluids, ..)
             * @param raySize entity bounding boxes will be uniformly expanded (or
             *      shrinked) by this value before doing collision checks
             * @param filter only entities that fulfill this predicate are considered,
             *      or <code>null</code> to consider all entities
             * @return the closest ray trace hit result with either a block or an
             *      entity, or <code>null</code> if there is no hit
             */
            // @ts-ignore
            rayTrace(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number /*double*/, fluidCollisionMode: org.bukkit.FluidCollisionMode, ignorePassableBlocks: boolean, raySize: number /*double*/, filter: java.util.function$.Predicate<org.bukkit.entity.Entity>): org.bukkit.util.RayTraceResult
            /**
             * Gets the unique name of this world
             * @return Name of this world
             */
            // @ts-ignore
            getName(): string
            /**
             * Gets the Unique ID of this world
             * @return Unique ID of this world.
             */
            // @ts-ignore
            getUID(): java.util.UUID
            /**
             * Gets the default spawn {@link Location} of this world
             * @return The spawn location of this world
             */
            // @ts-ignore
            getSpawnLocation(): org.bukkit.Location
            /**
             * Sets the spawn location of the world.
             * <br>
             * The location provided must be equal to this world.
             * @param location The {#link Location} to set the spawn for this world at.
             * @return True if it was successfully set.
             */
            // @ts-ignore
            setSpawnLocation(location: org.bukkit.Location): boolean
            /**
             * Sets the spawn location of the world
             * @param x X coordinate
             * @param y Y coordinate
             * @param z Z coordinate
             * @param angle the angle
             * @return True if it was successfully set.
             */
            // @ts-ignore
            setSpawnLocation(x: number /*int*/, y: number /*int*/, z: number /*int*/, angle: number /*float*/): boolean
            /**
             * Sets the spawn location of the world
             * @param x X coordinate
             * @param y Y coordinate
             * @param z Z coordinate
             * @return True if it was successfully set.
             */
            // @ts-ignore
            setSpawnLocation(x: number /*int*/, y: number /*int*/, z: number /*int*/): boolean
            /**
             * Gets the relative in-game time of this world.
             * <p>
             * The relative time is analogous to hours * 1000
             * @return The current relative time
             * @see #getFullTime() Returns an absolute time of this world
             */
            // @ts-ignore
            getTime(): number /*long*/
            /**
             * Sets the relative in-game time on the server.
             * <p>
             * The relative time is analogous to hours * 1000
             * <p>
             * Note that setting the relative time below the current relative time
             * will actually move the clock forward a day. If you require to rewind
             * time, please see {@link #setFullTime(long)}
             * @param time The new relative time to set the in-game time to (in
             *      hours*1000)
             * @see #setFullTime(long) Sets the absolute time of this world
             */
            // @ts-ignore
            setTime(time: number /*long*/): void
            /**
             * Gets the full in-game time on this world
             * @return The current absolute time
             * @see #getTime() Returns a relative time of this world
             */
            // @ts-ignore
            getFullTime(): number /*long*/
            /**
             * Sets the in-game time on the server
             * <p>
             * Note that this sets the full time of the world, which may cause adverse
             * effects such as breaking redstone clocks and any scheduled events
             * @param time The new absolute time to set this world to
             * @see #setTime(long) Sets the relative time of this world
             */
            // @ts-ignore
            setFullTime(time: number /*long*/): void
            /**
             * Returns whether the world has an ongoing storm.
             * @return Whether there is an ongoing storm
             */
            // @ts-ignore
            hasStorm(): boolean
            /**
             * Set whether there is a storm. A duration will be set for the new
             * current conditions.
             * @param hasStorm Whether there is rain and snow
             */
            // @ts-ignore
            setStorm(hasStorm: boolean): void
            /**
             * Get the remaining time in ticks of the current conditions.
             * @return Time in ticks
             */
            // @ts-ignore
            getWeatherDuration(): number /*int*/
            /**
             * Set the remaining time in ticks of the current conditions.
             * @param duration Time in ticks
             */
            // @ts-ignore
            setWeatherDuration(duration: number /*int*/): void
            /**
             * Returns whether there is thunder.
             * @return Whether there is thunder
             */
            // @ts-ignore
            isThundering(): boolean
            /**
             * Set whether it is thundering.
             * @param thundering Whether it is thundering
             */
            // @ts-ignore
            setThundering(thundering: boolean): void
            /**
             * Get the thundering duration.
             * @return Duration in ticks
             */
            // @ts-ignore
            getThunderDuration(): number /*int*/
            /**
             * Set the thundering duration.
             * @param duration Duration in ticks
             */
            // @ts-ignore
            setThunderDuration(duration: number /*int*/): void
            /**
             * Creates explosion at given coordinates with given power
             * @param x X coordinate
             * @param y Y coordinate
             * @param z Z coordinate
             * @param power The power of explosion, where 4F is TNT
             * @return false if explosion was canceled, otherwise true
             */
            // @ts-ignore
            createExplosion(x: number /*double*/, y: number /*double*/, z: number /*double*/, power: number /*float*/): boolean
            /**
             * Creates explosion at given coordinates with given power and optionally
             * setting blocks on fire.
             * @param x X coordinate
             * @param y Y coordinate
             * @param z Z coordinate
             * @param power The power of explosion, where 4F is TNT
             * @param setFire Whether or not to set blocks on fire
             * @return false if explosion was canceled, otherwise true
             */
            // @ts-ignore
            createExplosion(x: number /*double*/, y: number /*double*/, z: number /*double*/, power: number /*float*/, setFire: boolean): boolean
            /**
             * Creates explosion at given coordinates with given power and optionally
             * setting blocks on fire or breaking blocks.
             * @param x X coordinate
             * @param y Y coordinate
             * @param z Z coordinate
             * @param power The power of explosion, where 4F is TNT
             * @param setFire Whether or not to set blocks on fire
             * @param breakBlocks Whether or not to have blocks be destroyed
             * @return false if explosion was canceled, otherwise true
             */
            // @ts-ignore
            createExplosion(x: number /*double*/, y: number /*double*/, z: number /*double*/, power: number /*float*/, setFire: boolean, breakBlocks: boolean): boolean
            /**
             * Creates explosion at given coordinates with given power and optionally
             * setting blocks on fire or breaking blocks.
             * @param x X coordinate
             * @param y Y coordinate
             * @param z Z coordinate
             * @param power The power of explosion, where 4F is TNT
             * @param setFire Whether or not to set blocks on fire
             * @param breakBlocks Whether or not to have blocks be destroyed
             * @param source the source entity, used for tracking damage
             * @return false if explosion was canceled, otherwise true
             */
            // @ts-ignore
            createExplosion(x: number /*double*/, y: number /*double*/, z: number /*double*/, power: number /*float*/, setFire: boolean, breakBlocks: boolean, source: org.bukkit.entity.Entity): boolean
            /**
             * Creates explosion at given coordinates with given power
             * @param loc Location to blow up
             * @param power The power of explosion, where 4F is TNT
             * @return false if explosion was canceled, otherwise true
             */
            // @ts-ignore
            createExplosion(loc: org.bukkit.Location, power: number /*float*/): boolean
            /**
             * Creates explosion at given coordinates with given power and optionally
             * setting blocks on fire.
             * @param loc Location to blow up
             * @param power The power of explosion, where 4F is TNT
             * @param setFire Whether or not to set blocks on fire
             * @return false if explosion was canceled, otherwise true
             */
            // @ts-ignore
            createExplosion(loc: org.bukkit.Location, power: number /*float*/, setFire: boolean): boolean
            /**
             * Creates explosion at given coordinates with given power and optionally
             * setting blocks on fire or breaking blocks.
             * @param loc Location to blow up
             * @param power The power of explosion, where 4F is TNT
             * @param setFire Whether or not to set blocks on fire
             * @param breakBlocks Whether or not to have blocks be destroyed
             * @return false if explosion was canceled, otherwise true
             */
            // @ts-ignore
            createExplosion(loc: org.bukkit.Location, power: number /*float*/, setFire: boolean, breakBlocks: boolean): boolean
            /**
             * Creates explosion at given coordinates with given power and optionally
             * setting blocks on fire or breaking blocks.
             * @param loc Location to blow up
             * @param power The power of explosion, where 4F is TNT
             * @param setFire Whether or not to set blocks on fire
             * @param breakBlocks Whether or not to have blocks be destroyed
             * @param source the source entity, used for tracking damage
             * @return false if explosion was canceled, otherwise true
             */
            // @ts-ignore
            createExplosion(loc: org.bukkit.Location, power: number /*float*/, setFire: boolean, breakBlocks: boolean, source: org.bukkit.entity.Entity): boolean
            /**
             * Gets the {@link Environment} type of this world
             * @return This worlds Environment type
             */
            // @ts-ignore
            getEnvironment(): org.bukkit.World.Environment
            /**
             * Gets the Seed for this world.
             * @return This worlds Seed
             */
            // @ts-ignore
            getSeed(): number /*long*/
            /**
             * Gets the current PVP setting for this world.
             * @return True if PVP is enabled
             */
            // @ts-ignore
            getPVP(): boolean
            /**
             * Sets the PVP setting for this world.
             * @param pvp True/False whether PVP should be Enabled.
             */
            // @ts-ignore
            setPVP(pvp: boolean): void
            /**
             * Gets the chunk generator for this world
             * @return ChunkGenerator associated with this world
             */
            // @ts-ignore
            getGenerator(): org.bukkit.generator.ChunkGenerator
            /**
             * Saves world to disk
             */
            // @ts-ignore
            save(): void
            /**
             * Gets a list of all applied {@link BlockPopulator}s for this World
             * @return List containing any or none BlockPopulators
             */
            // @ts-ignore
            getPopulators(): Array<org.bukkit.generator.BlockPopulator>
            /**
             * Spawn an entity of a specific class at the given {@link Location}
             * @param location the {#link Location} to spawn the entity at
             * @param clazz the class of the {#link Entity} to spawn
             * @param <T> the class of the {#link Entity} to spawn
             * @return an instance of the spawned {#link Entity}
             * @throws IllegalArgumentException if either parameter is null or the
             *      {#link Entity} requested cannot be spawned
             */
            // @ts-ignore
            spawn<T extends org.bukkit.entity.Entity>(location: org.bukkit.Location, clazz: java.lang.Class<T>): T
            /**
             * Spawn an entity of a specific class at the given {@link Location}, with
             * the supplied function run before the entity is added to the world.
             * <br>
             * Note that when the function is run, the entity will not be actually in
             * the world. Any operation involving such as teleporting the entity is undefined
             * until after this function returns.
             * @param location the {#link Location} to spawn the entity at
             * @param clazz the class of the {#link Entity} to spawn
             * @param function the function to be run before the entity is spawned.
             * @param <T> the class of the {#link Entity} to spawn
             * @return an instance of the spawned {#link Entity}
             * @throws IllegalArgumentException if either parameter is null or the
             *      {#link Entity} requested cannot be spawned
             */
            // @ts-ignore
            spawn<T extends org.bukkit.entity.Entity>(location: org.bukkit.Location, clazz: java.lang.Class<T>, func: org.bukkit.util.Consumer<T>): T
            /**
             * Spawn a {@link FallingBlock} entity at the given {@link Location} of
             * the specified {@link Material}. The material dictates what is falling.
             * When the FallingBlock hits the ground, it will place that block.
             * <p>
             * The Material must be a block type, check with {@link Material#isBlock()
             * material.isBlock()}. The Material may not be air.
             * @param location The {#link Location} to spawn the FallingBlock
             * @param data The block data
             * @return The spawned {#link FallingBlock} instance
             * @throws IllegalArgumentException if {#link Location} or {@link
             *      MaterialData} are null or {@link Material} of the {@link MaterialData} is not a block
             */
            // @ts-ignore
            spawnFallingBlock(location: org.bukkit.Location, data: org.bukkit.material.MaterialData): org.bukkit.entity.FallingBlock
            /**
             * Spawn a {@link FallingBlock} entity at the given {@link Location} of
             * the specified {@link Material}. The material dictates what is falling.
             * When the FallingBlock hits the ground, it will place that block.
             * <p>
             * The Material must be a block type, check with {@link Material#isBlock()
             * material.isBlock()}. The Material may not be air.
             * @param location The {#link Location} to spawn the FallingBlock
             * @param data The block data
             * @return The spawned {#link FallingBlock} instance
             * @throws IllegalArgumentException if {#link Location} or {@link
             *      BlockData} are null
             */
            // @ts-ignore
            spawnFallingBlock(location: org.bukkit.Location, data: org.bukkit.block.data.BlockData): org.bukkit.entity.FallingBlock
            /**
             * Spawn a {@link FallingBlock} entity at the given {@link Location} of the
             * specified {@link Material}. The material dictates what is falling.
             * When the FallingBlock hits the ground, it will place that block.
             * <p>
             * The Material must be a block type, check with {@link Material#isBlock()
             * material.isBlock()}. The Material may not be air.
             * @param location The {#link Location} to spawn the FallingBlock
             * @param material The block {#link Material} type
             * @param data The block data
             * @return The spawned {#link FallingBlock} instance
             * @throws IllegalArgumentException if {#link Location} or {@link
             *      Material} are null or {@link Material} is not a block
             * @deprecated Magic value
             */
            // @ts-ignore
            spawnFallingBlock(location: org.bukkit.Location, material: org.bukkit.Material, data: number /*byte*/): org.bukkit.entity.FallingBlock
            /**
             * Plays an effect to all players within a default radius around a given
             * location.
             * @param location the {#link Location} around which players must be to
             *      hear the sound
             * @param effect the {#link Effect}
             * @param data a data bit needed for some effects
             */
            // @ts-ignore
            playEffect(location: org.bukkit.Location, effect: org.bukkit.Effect, data: number /*int*/): void
            /**
             * Plays an effect to all players within a given radius around a location.
             * @param location the {#link Location} around which players must be to
             *      hear the effect
             * @param effect the {#link Effect}
             * @param data a data bit needed for some effects
             * @param radius the radius around the location
             */
            // @ts-ignore
            playEffect(location: org.bukkit.Location, effect: org.bukkit.Effect, data: number /*int*/, radius: number /*int*/): void
            /**
             * Plays an effect to all players within a default radius around a given
             * location.
             * @param <T> data dependant on the type of effect
             * @param location the {#link Location} around which players must be to
             *      hear the sound
             * @param effect the {#link Effect}
             * @param data a data bit needed for some effects
             */
            // @ts-ignore
            playEffect<T>(location: org.bukkit.Location, effect: org.bukkit.Effect, data: T): void
            /**
             * Plays an effect to all players within a given radius around a location.
             * @param <T> data dependant on the type of effect
             * @param location the {#link Location} around which players must be to
             *      hear the effect
             * @param effect the {#link Effect}
             * @param data a data bit needed for some effects
             * @param radius the radius around the location
             */
            // @ts-ignore
            playEffect<T>(location: org.bukkit.Location, effect: org.bukkit.Effect, data: T, radius: number /*int*/): void
            /**
             * Get empty chunk snapshot (equivalent to all air blocks), optionally
             * including valid biome data. Used for representing an ungenerated chunk,
             * or for fetching only biome data without loading a chunk.
             * @param x - chunk x coordinate
             * @param z - chunk z coordinate
             * @param includeBiome - if true, snapshot includes per-coordinate biome
             *      type
             * @param includeBiomeTemp - if true, snapshot includes per-coordinate
             *      raw biome temperature
             * @return The empty snapshot.
             */
            // @ts-ignore
            getEmptyChunkSnapshot(x: number /*int*/, z: number /*int*/, includeBiome: boolean, includeBiomeTemp: boolean): org.bukkit.ChunkSnapshot
            /**
             * Sets the spawn flags for this.
             * @param allowMonsters - if true, monsters are allowed to spawn in this
             *      world.
             * @param allowAnimals - if true, animals are allowed to spawn in this
             *      world.
             */
            // @ts-ignore
            setSpawnFlags(allowMonsters: boolean, allowAnimals: boolean): void
            /**
             * Gets whether animals can spawn in this world.
             * @return whether animals can spawn in this world.
             */
            // @ts-ignore
            getAllowAnimals(): boolean
            /**
             * Gets whether monsters can spawn in this world.
             * @return whether monsters can spawn in this world.
             */
            // @ts-ignore
            getAllowMonsters(): boolean
            /**
             * Gets the biome for the given block coordinates.
             * @param x X coordinate of the block
             * @param z Z coordinate of the block
             * @return Biome of the requested block
             * @deprecated biomes are now 3-dimensional
             */
            // @ts-ignore
            getBiome(x: number /*int*/, z: number /*int*/): org.bukkit.block.Biome
            /**
             * Gets the biome for the given block coordinates.
             * @param x X coordinate of the block
             * @param y Y coordinate of the block
             * @param z Z coordinate of the block
             * @return Biome of the requested block
             */
            // @ts-ignore
            getBiome(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.bukkit.block.Biome
            /**
             * Sets the biome for the given block coordinates
             * @param x X coordinate of the block
             * @param z Z coordinate of the block
             * @param bio new Biome type for this block
             * @deprecated biomes are now 3-dimensional
             */
            // @ts-ignore
            setBiome(x: number /*int*/, z: number /*int*/, bio: org.bukkit.block.Biome): void
            /**
             * Sets the biome for the given block coordinates
             * @param x X coordinate of the block
             * @param y Y coordinate of the block
             * @param z Z coordinate of the block
             * @param bio new Biome type for this block
             */
            // @ts-ignore
            setBiome(x: number /*int*/, y: number /*int*/, z: number /*int*/, bio: org.bukkit.block.Biome): void
            /**
             * Gets the temperature for the given block coordinates.
             * <p>
             * It is safe to run this method when the block does not exist, it will
             * not create the block.
             * <p>
             * This method will return the raw temperature without adjusting for block
             * height effects.
             * @param x X coordinate of the block
             * @param z Z coordinate of the block
             * @return Temperature of the requested block
             * @deprecated biomes are now 3-dimensional
             */
            // @ts-ignore
            getTemperature(x: number /*int*/, z: number /*int*/): number /*double*/
            /**
             * Gets the temperature for the given block coordinates.
             * <p>
             * It is safe to run this method when the block does not exist, it will
             * not create the block.
             * <p>
             * This method will return the raw temperature without adjusting for block
             * height effects.
             * @param x X coordinate of the block
             * @param y Y coordinate of the block
             * @param z Z coordinate of the block
             * @return Temperature of the requested block
             */
            // @ts-ignore
            getTemperature(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*double*/
            /**
             * Gets the humidity for the given block coordinates.
             * <p>
             * It is safe to run this method when the block does not exist, it will
             * not create the block.
             * @param x X coordinate of the block
             * @param z Z coordinate of the block
             * @return Humidity of the requested block
             * @deprecated biomes are now 3-dimensional
             */
            // @ts-ignore
            getHumidity(x: number /*int*/, z: number /*int*/): number /*double*/
            /**
             * Gets the humidity for the given block coordinates.
             * <p>
             * It is safe to run this method when the block does not exist, it will
             * not create the block.
             * @param x X coordinate of the block
             * @param y Y coordinate of the block
             * @param z Z coordinate of the block
             * @return Humidity of the requested block
             */
            // @ts-ignore
            getHumidity(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*double*/
            /**
             * Gets the maximum height of this world.
             * <p>
             * If the max height is 100, there are only blocks from y=0 to y=99.
             * @return Maximum height of the world
             */
            // @ts-ignore
            getMaxHeight(): number /*int*/
            /**
             * Gets the sea level for this world.
             * <p>
             * This is often half of {@link #getMaxHeight()}
             * @return Sea level
             */
            // @ts-ignore
            getSeaLevel(): number /*int*/
            /**
             * Gets whether the world's spawn area should be kept loaded into memory
             * or not.
             * @return true if the world's spawn area will be kept loaded into memory.
             */
            // @ts-ignore
            getKeepSpawnInMemory(): boolean
            /**
             * Sets whether the world's spawn area should be kept loaded into memory
             * or not.
             * @param keepLoaded if true then the world's spawn area will be kept
             *      loaded into memory.
             */
            // @ts-ignore
            setKeepSpawnInMemory(keepLoaded: boolean): void
            /**
             * Gets whether or not the world will automatically save
             * @return true if the world will automatically save, otherwise false
             */
            // @ts-ignore
            isAutoSave(): boolean
            /**
             * Sets whether or not the world will automatically save
             * @param value true if the world should automatically save, otherwise
             *      false
             */
            // @ts-ignore
            setAutoSave(value: boolean): void
            /**
             * Sets the Difficulty of the world.
             * @param difficulty the new difficulty you want to set the world to
             */
            // @ts-ignore
            setDifficulty(difficulty: org.bukkit.Difficulty): void
            /**
             * Gets the Difficulty of the world.
             * @return The difficulty of the world.
             */
            // @ts-ignore
            getDifficulty(): org.bukkit.Difficulty
            /**
             * Gets the folder of this world on disk.
             * @return The folder of this world.
             */
            // @ts-ignore
            getWorldFolder(): java.io.File
            /**
             * Gets the type of this world.
             * @return Type of this world.
             * @deprecated world type is only used to select the default word generation
             *  settings and is not stored in Vanilla worlds, making it impossible for
             *  this method to always return the correct value.
             */
            // @ts-ignore
            getWorldType(): org.bukkit.WorldType
            /**
             * Gets whether or not structures are being generated.
             * @return True if structures are being generated.
             */
            // @ts-ignore
            canGenerateStructures(): boolean
            /**
             * Gets whether the world is hardcore or not.
             * In a hardcore world the difficulty is locked to hard.
             * @return hardcore status
             */
            // @ts-ignore
            isHardcore(): boolean
            /**
             * Sets whether the world is hardcore or not.
             * In a hardcore world the difficulty is locked to hard.
             * @param hardcore Whether the world is hardcore
             */
            // @ts-ignore
            setHardcore(hardcore: boolean): void
            /**
             * Gets the world's ticks per animal spawns value
             * <p>
             * This value determines how many ticks there are between attempts to
             * spawn animals.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn animals in
             * this world every tick.
             * <li>A value of 400 will mean the server will attempt to spawn animals
             * in this world every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b>
             * If set to 0, animal spawning will be disabled for this world. We
             * recommend using {@link #setSpawnFlags(boolean, boolean)} to control
             * this instead.
             * <p>
             * Minecraft default: 400.
             * @return The world's ticks per animal spawns value
             */
            // @ts-ignore
            getTicksPerAnimalSpawns(): number /*long*/
            /**
             * Sets the world's ticks per animal spawns value
             * <p>
             * This value determines how many ticks there are between attempts to
             * spawn animals.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn animals in
             * this world every tick.
             * <li>A value of 400 will mean the server will attempt to spawn animals
             * in this world every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b>
             * If set to 0, animal spawning will be disabled for this world. We
             * recommend using {@link #setSpawnFlags(boolean, boolean)} to control
             * this instead.
             * <p>
             * Minecraft default: 400.
             * @param ticksPerAnimalSpawns the ticks per animal spawns value you want
             *      to set the world to
             */
            // @ts-ignore
            setTicksPerAnimalSpawns(ticksPerAnimalSpawns: number /*int*/): void
            /**
             * Gets the world's ticks per monster spawns value
             * <p>
             * This value determines how many ticks there are between attempts to
             * spawn monsters.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn monsters in
             * this world every tick.
             * <li>A value of 400 will mean the server will attempt to spawn monsters
             * in this world every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b>
             * If set to 0, monsters spawning will be disabled for this world. We
             * recommend using {@link #setSpawnFlags(boolean, boolean)} to control
             * this instead.
             * <p>
             * Minecraft default: 1.
             * @return The world's ticks per monster spawns value
             */
            // @ts-ignore
            getTicksPerMonsterSpawns(): number /*long*/
            /**
             * Sets the world's ticks per monster spawns value
             * <p>
             * This value determines how many ticks there are between attempts to
             * spawn monsters.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn monsters in
             * this world on every tick.
             * <li>A value of 400 will mean the server will attempt to spawn monsters
             * in this world every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b>
             * If set to 0, monsters spawning will be disabled for this world. We
             * recommend using {@link #setSpawnFlags(boolean, boolean)} to control
             * this instead.
             * <p>
             * Minecraft default: 1.
             * @param ticksPerMonsterSpawns the ticks per monster spawns value you
             *      want to set the world to
             */
            // @ts-ignore
            setTicksPerMonsterSpawns(ticksPerMonsterSpawns: number /*int*/): void
            /**
             * Gets the world's ticks per water mob spawns value
             * <p>
             * This value determines how many ticks there are between attempts to
             * spawn water mobs.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn water mobs in
             * this world every tick.
             * <li>A value of 400 will mean the server will attempt to spawn water mobs
             * in this world every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b>
             * If set to 0, water mobs spawning will be disabled for this world.
             * <p>
             * Minecraft default: 1.
             * @return The world's ticks per water mob spawns value
             */
            // @ts-ignore
            getTicksPerWaterSpawns(): number /*long*/
            /**
             * Sets the world's ticks per water mob spawns value
             * <p>
             * This value determines how many ticks there are between attempts to
             * spawn water mobs.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn water mobs in
             * this world on every tick.
             * <li>A value of 400 will mean the server will attempt to spawn water mobs
             * in this world every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b>
             * If set to 0, water mobs spawning will be disabled for this world.
             * <p>
             * Minecraft default: 1.
             * @param ticksPerWaterSpawns the ticks per water mob spawns value you
             *      want to set the world to
             */
            // @ts-ignore
            setTicksPerWaterSpawns(ticksPerWaterSpawns: number /*int*/): void
            /**
             * Gets the default ticks per water ambient mob spawns value.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn water ambient mobs
             * every tick.
             * <li>A value of 400 will mean the server will attempt to spawn water ambient mobs
             * every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b> If set to 0, ambient mobs spawning will be disabled.
             * <p>
             * Minecraft default: 1.
             * @return the default ticks per water ambient mobs spawn value
             */
            // @ts-ignore
            getTicksPerWaterAmbientSpawns(): number /*long*/
            /**
             * Sets the world's ticks per water ambient mob spawns value
             * <p>
             * This value determines how many ticks there are between attempts to
             * spawn water ambient mobs.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn water ambient mobs in
             * this world on every tick.
             * <li>A value of 400 will mean the server will attempt to spawn weater ambient mobs
             * in this world every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b>
             * If set to 0, water ambient mobs spawning will be disabled for this world.
             * <p>
             * Minecraft default: 1.
             * @param ticksPerAmbientSpawns the ticks per water ambient mob spawns value you
             *      want to set the world to
             */
            // @ts-ignore
            setTicksPerWaterAmbientSpawns(ticksPerAmbientSpawns: number /*int*/): void
            /**
             * Gets the world's ticks per ambient mob spawns value
             * <p>
             * This value determines how many ticks there are between attempts to
             * spawn ambient mobs.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn ambient mobs in
             * this world every tick.
             * <li>A value of 400 will mean the server will attempt to spawn ambient mobs
             * in this world every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b>
             * If set to 0, ambient mobs spawning will be disabled for this world.
             * <p>
             * Minecraft default: 1.
             * @return The world's ticks per ambient mob spawns value
             */
            // @ts-ignore
            getTicksPerAmbientSpawns(): number /*long*/
            /**
             * Sets the world's ticks per ambient mob spawns value
             * <p>
             * This value determines how many ticks there are between attempts to
             * spawn ambient mobs.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn ambient mobs in
             * this world on every tick.
             * <li>A value of 400 will mean the server will attempt to spawn ambient mobs
             * in this world every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b>
             * If set to 0, ambient mobs spawning will be disabled for this world.
             * <p>
             * Minecraft default: 1.
             * @param ticksPerAmbientSpawns the ticks per ambient mob spawns value you
             *      want to set the world to
             */
            // @ts-ignore
            setTicksPerAmbientSpawns(ticksPerAmbientSpawns: number /*int*/): void
            /**
             * Gets limit for number of monsters that can spawn in a chunk in this
             * world
             * @return The monster spawn limit
             */
            // @ts-ignore
            getMonsterSpawnLimit(): number /*int*/
            /**
             * Sets the limit for number of monsters that can spawn in a chunk in this
             * world
             * <p>
             * <b>Note:</b> If set to a negative number the world will use the
             * server-wide spawn limit instead.
             * @param limit the new mob limit
             */
            // @ts-ignore
            setMonsterSpawnLimit(limit: number /*int*/): void
            /**
             * Gets the limit for number of animals that can spawn in a chunk in this
             * world
             * @return The animal spawn limit
             */
            // @ts-ignore
            getAnimalSpawnLimit(): number /*int*/
            /**
             * Sets the limit for number of animals that can spawn in a chunk in this
             * world
             * <p>
             * <b>Note:</b> If set to a negative number the world will use the
             * server-wide spawn limit instead.
             * @param limit the new mob limit
             */
            // @ts-ignore
            setAnimalSpawnLimit(limit: number /*int*/): void
            /**
             * Gets the limit for number of water animals that can spawn in a chunk in
             * this world
             * @return The water animal spawn limit
             */
            // @ts-ignore
            getWaterAnimalSpawnLimit(): number /*int*/
            /**
             * Sets the limit for number of water animals that can spawn in a chunk in
             * this world
             * <p>
             * <b>Note:</b> If set to a negative number the world will use the
             * server-wide spawn limit instead.
             * @param limit the new mob limit
             */
            // @ts-ignore
            setWaterAnimalSpawnLimit(limit: number /*int*/): void
            /**
             * Gets user-specified limit for number of water ambient mobs that can spawn
             * in a chunk.
             * @return the water ambient spawn limit
             */
            // @ts-ignore
            getWaterAmbientSpawnLimit(): number /*int*/
            /**
             * Sets the limit for number of water ambient mobs that can spawn in a chunk
             * in this world
             * <p>
             * <b>Note:</b> If set to a negative number the world will use the
             * server-wide spawn limit instead.
             * @param limit the new mob limit
             */
            // @ts-ignore
            setWaterAmbientSpawnLimit(limit: number /*int*/): void
            /**
             * Gets the limit for number of ambient mobs that can spawn in a chunk in
             * this world
             * @return The ambient spawn limit
             */
            // @ts-ignore
            getAmbientSpawnLimit(): number /*int*/
            /**
             * Sets the limit for number of ambient mobs that can spawn in a chunk in
             * this world
             * <p>
             * <b>Note:</b> If set to a negative number the world will use the
             * server-wide spawn limit instead.
             * @param limit the new mob limit
             */
            // @ts-ignore
            setAmbientSpawnLimit(limit: number /*int*/): void
            /**
             * Play a Sound at the provided Location in the World
             * <p>
             * This function will fail silently if Location or Sound are null.
             * @param location The location to play the sound
             * @param sound The sound to play
             * @param volume The volume of the sound
             * @param pitch The pitch of the sound
             */
            // @ts-ignore
            playSound(location: org.bukkit.Location, sound: org.bukkit.Sound, volume: number /*float*/, pitch: number /*float*/): void
            /**
             * Play a Sound at the provided Location in the World.
             * <p>
             * This function will fail silently if Location or Sound are null. No
             * sound will be heard by the players if their clients do not have the
             * respective sound for the value passed.
             * @param location the location to play the sound
             * @param sound the internal sound name to play
             * @param volume the volume of the sound
             * @param pitch the pitch of the sound
             */
            // @ts-ignore
            playSound(location: org.bukkit.Location, sound: java.lang.String | string, volume: number /*float*/, pitch: number /*float*/): void
            /**
             * Play a Sound at the provided Location in the World.
             * <p>
             * This function will fail silently if Location or Sound are null.
             * @param location The location to play the sound
             * @param sound The sound to play
             * @param category the category of the sound
             * @param volume The volume of the sound
             * @param pitch The pitch of the sound
             */
            // @ts-ignore
            playSound(location: org.bukkit.Location, sound: org.bukkit.Sound, category: org.bukkit.SoundCategory, volume: number /*float*/, pitch: number /*float*/): void
            /**
             * Play a Sound at the provided Location in the World.
             * <p>
             * This function will fail silently if Location or Sound are null. No sound
             * will be heard by the players if their clients do not have the respective
             * sound for the value passed.
             * @param location the location to play the sound
             * @param sound the internal sound name to play
             * @param category the category of the sound
             * @param volume the volume of the sound
             * @param pitch the pitch of the sound
             */
            // @ts-ignore
            playSound(location: org.bukkit.Location, sound: java.lang.String | string, category: org.bukkit.SoundCategory, volume: number /*float*/, pitch: number /*float*/): void
            /**
             * Get an array containing the names of all the {@link GameRule}s.
             * @return An array of {#link GameRule} names.
             */
            // @ts-ignore
            getGameRules(): string[]
            /**
             * Gets the current state of the specified rule
             * <p>
             * Will return null if rule passed is null
             * @param rule Rule to look up value of
             * @return String value of rule
             * @deprecated use {#link #getGameRuleValue(GameRule)} instead
             */
            // @ts-ignore
            getGameRuleValue(rule: java.lang.String | string): string
            /**
             * Set the specified gamerule to specified value.
             * <p>
             * The rule may attempt to validate the value passed, will return true if
             * value was set.
             * <p>
             * If rule is null, the function will return false.
             * @param rule Rule to set
             * @param value Value to set rule to
             * @return True if rule was set
             * @deprecated use {#link #setGameRule(GameRule, Object)} instead.
             */
            // @ts-ignore
            setGameRuleValue(rule: java.lang.String | string, value: java.lang.String | string): boolean
            /**
             * Checks if string is a valid game rule
             * @param rule Rule to check
             * @return True if rule exists
             */
            // @ts-ignore
            isGameRule(rule: java.lang.String | string): boolean
            /**
             * Get the current value for a given {@link GameRule}.
             * @param rule the GameRule to check
             * @param <T> the GameRule's type
             * @return the current value
             */
            // @ts-ignore
            getGameRuleValue<T>(rule: org.bukkit.GameRule<T>): T
            /**
             * Get the default value for a given {@link GameRule}. This value is not
             * guaranteed to match the current value.
             * @param rule the rule to return a default value for
             * @param <T> the type of GameRule
             * @return the default value
             */
            // @ts-ignore
            getGameRuleDefault<T>(rule: org.bukkit.GameRule<T>): T
            /**
             * Set the given {@link GameRule}'s new value.
             * @param rule the GameRule to update
             * @param newValue the new value
             * @param <T> the value type of the GameRule
             * @return true if the value was successfully set
             */
            // @ts-ignore
            setGameRule<T>(rule: org.bukkit.GameRule<T>, newValue: T): boolean
            /**
             * Gets the world border for this world.
             * @return The world border for this world.
             */
            // @ts-ignore
            getWorldBorder(): org.bukkit.WorldBorder
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location.
             * @param particle the particle to spawn
             * @param location the location to spawn at
             * @param count the number of particles
             */
            // @ts-ignore
            spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number /*int*/): void
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location.
             * @param particle the particle to spawn
             * @param x the position on the x axis to spawn at
             * @param y the position on the y axis to spawn at
             * @param z the position on the z axis to spawn at
             * @param count the number of particles
             */
            // @ts-ignore
            spawnParticle(particle: org.bukkit.Particle, x: number /*double*/, y: number /*double*/, z: number /*double*/, count: number /*int*/): void
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location.
             * @param <T> type of particle data (see {#link Particle#getDataType()}
             * @param particle the particle to spawn
             * @param location the location to spawn at
             * @param count the number of particles
             * @param data the data to use for the particle or null,
             *              the type of this depends on {#link Particle#getDataType()}
             */
            // @ts-ignore
            spawnParticle<T>(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number /*int*/, data: T): void
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location.
             * @param <T> type of particle data (see {#link Particle#getDataType()}
             * @param particle the particle to spawn
             * @param x the position on the x axis to spawn at
             * @param y the position on the y axis to spawn at
             * @param z the position on the z axis to spawn at
             * @param count the number of particles
             * @param data the data to use for the particle or null,
             *              the type of this depends on {#link Particle#getDataType()}
             */
            // @ts-ignore
            spawnParticle<T>(particle: org.bukkit.Particle, x: number /*double*/, y: number /*double*/, z: number /*double*/, count: number /*int*/, data: T): void
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             * @param particle the particle to spawn
             * @param location the location to spawn at
             * @param count the number of particles
             * @param offsetX the maximum random offset on the X axis
             * @param offsetY the maximum random offset on the Y axis
             * @param offsetZ the maximum random offset on the Z axis
             */
            // @ts-ignore
            spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/): void
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             * @param particle the particle to spawn
             * @param x the position on the x axis to spawn at
             * @param y the position on the y axis to spawn at
             * @param z the position on the z axis to spawn at
             * @param count the number of particles
             * @param offsetX the maximum random offset on the X axis
             * @param offsetY the maximum random offset on the Y axis
             * @param offsetZ the maximum random offset on the Z axis
             */
            // @ts-ignore
            spawnParticle(particle: org.bukkit.Particle, x: number /*double*/, y: number /*double*/, z: number /*double*/, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/): void
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             * @param <T> type of particle data (see {#link Particle#getDataType()}
             * @param particle the particle to spawn
             * @param location the location to spawn at
             * @param count the number of particles
             * @param offsetX the maximum random offset on the X axis
             * @param offsetY the maximum random offset on the Y axis
             * @param offsetZ the maximum random offset on the Z axis
             * @param data the data to use for the particle or null,
             *              the type of this depends on {#link Particle#getDataType()}
             */
            // @ts-ignore
            spawnParticle<T>(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/, data: T): void
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             * @param <T> type of particle data (see {#link Particle#getDataType()}
             * @param particle the particle to spawn
             * @param x the position on the x axis to spawn at
             * @param y the position on the y axis to spawn at
             * @param z the position on the z axis to spawn at
             * @param count the number of particles
             * @param offsetX the maximum random offset on the X axis
             * @param offsetY the maximum random offset on the Y axis
             * @param offsetZ the maximum random offset on the Z axis
             * @param data the data to use for the particle or null,
             *              the type of this depends on {#link Particle#getDataType()}
             */
            // @ts-ignore
            spawnParticle<T>(particle: org.bukkit.Particle, x: number /*double*/, y: number /*double*/, z: number /*double*/, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/, data: T): void
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             * @param particle the particle to spawn
             * @param location the location to spawn at
             * @param count the number of particles
             * @param offsetX the maximum random offset on the X axis
             * @param offsetY the maximum random offset on the Y axis
             * @param offsetZ the maximum random offset on the Z axis
             * @param extra the extra data for this particle, depends on the
             *               particle used (normally speed)
             */
            // @ts-ignore
            spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/, extra: number /*double*/): void
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             * @param particle the particle to spawn
             * @param x the position on the x axis to spawn at
             * @param y the position on the y axis to spawn at
             * @param z the position on the z axis to spawn at
             * @param count the number of particles
             * @param offsetX the maximum random offset on the X axis
             * @param offsetY the maximum random offset on the Y axis
             * @param offsetZ the maximum random offset on the Z axis
             * @param extra the extra data for this particle, depends on the
             *               particle used (normally speed)
             */
            // @ts-ignore
            spawnParticle(particle: org.bukkit.Particle, x: number /*double*/, y: number /*double*/, z: number /*double*/, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/, extra: number /*double*/): void
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             * @param <T> type of particle data (see {#link Particle#getDataType()}
             * @param particle the particle to spawn
             * @param location the location to spawn at
             * @param count the number of particles
             * @param offsetX the maximum random offset on the X axis
             * @param offsetY the maximum random offset on the Y axis
             * @param offsetZ the maximum random offset on the Z axis
             * @param extra the extra data for this particle, depends on the
             *               particle used (normally speed)
             * @param data the data to use for the particle or null,
             *              the type of this depends on {#link Particle#getDataType()}
             */
            // @ts-ignore
            spawnParticle<T>(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/, extra: number /*double*/, data: T): void
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             * @param <T> type of particle data (see {#link Particle#getDataType()}
             * @param particle the particle to spawn
             * @param x the position on the x axis to spawn at
             * @param y the position on the y axis to spawn at
             * @param z the position on the z axis to spawn at
             * @param count the number of particles
             * @param offsetX the maximum random offset on the X axis
             * @param offsetY the maximum random offset on the Y axis
             * @param offsetZ the maximum random offset on the Z axis
             * @param extra the extra data for this particle, depends on the
             *               particle used (normally speed)
             * @param data the data to use for the particle or null,
             *              the type of this depends on {#link Particle#getDataType()}
             */
            // @ts-ignore
            spawnParticle<T>(particle: org.bukkit.Particle, x: number /*double*/, y: number /*double*/, z: number /*double*/, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/, extra: number /*double*/, data: T): void
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             * @param <T> type of particle data (see {#link Particle#getDataType()}
             * @param particle the particle to spawn
             * @param location the location to spawn at
             * @param count the number of particles
             * @param offsetX the maximum random offset on the X axis
             * @param offsetY the maximum random offset on the Y axis
             * @param offsetZ the maximum random offset on the Z axis
             * @param extra the extra data for this particle, depends on the
             *               particle used (normally speed)
             * @param data the data to use for the particle or null,
             *              the type of this depends on {#link Particle#getDataType()}
             * @param force whether to send the particle to players within an extended
             *               range and encourage their client to render it regardless of
             *               settings
             */
            // @ts-ignore
            spawnParticle<T>(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/, extra: number /*double*/, data: T, force: boolean): void
            /**
             * Spawns the particle (the number of times specified by count)
             * at the target location. The position of each particle will be
             * randomized positively and negatively by the offset parameters
             * on each axis.
             * @param <T> type of particle data (see {#link Particle#getDataType()}
             * @param particle the particle to spawn
             * @param x the position on the x axis to spawn at
             * @param y the position on the y axis to spawn at
             * @param z the position on the z axis to spawn at
             * @param count the number of particles
             * @param offsetX the maximum random offset on the X axis
             * @param offsetY the maximum random offset on the Y axis
             * @param offsetZ the maximum random offset on the Z axis
             * @param extra the extra data for this particle, depends on the
             *               particle used (normally speed)
             * @param data the data to use for the particle or null,
             *              the type of this depends on {#link Particle#getDataType()}
             * @param force whether to send the particle to players within an extended
             *               range and encourage their client to render it regardless of
             *               settings
             */
            // @ts-ignore
            spawnParticle<T>(particle: org.bukkit.Particle, x: number /*double*/, y: number /*double*/, z: number /*double*/, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/, extra: number /*double*/, data: T, force: boolean): void
            /**
             * Find the closest nearby structure of a given {@link StructureType}.
             * Finding unexplored structures can, and will, block if the world is
             * looking in chunks that gave not generated yet. This can lead to the world
             * temporarily freezing while locating an unexplored structure.
             * <p>
             * The {@code radius} is not a rigid square radius. Each structure may alter
             * how many chunks to check for each iteration. Do not assume that only a
             * radius x radius chunk area will be checked. For example,
             * {@link StructureType#WOODLAND_MANSION} can potentially check up to 20,000
             * blocks away (or more) regardless of the radius used.
             * <p>
             * This will <i>not</i> load or generate chunks. This can also lead to
             * instances where the server can hang if you are only looking for
             * unexplored structures. This is because it will keep looking further and
             * further out in order to find the structure.
             * @param origin where to start looking for a structure
             * @param structureType the type of structure to find
             * @param radius the radius, in chunks, around which to search
             * @param findUnexplored true to only find unexplored structures
             * @return the closest {#link Location}, or null if no structure of the
             *  specified type exists.
             */
            // @ts-ignore
            locateNearestStructure(origin: org.bukkit.Location, structureType: org.bukkit.StructureType, radius: number /*int*/, findUnexplored: boolean): org.bukkit.Location
            /**
             * Returns the view distance used for this world.
             * @return the view distance used for this world
             */
            // @ts-ignore
            getViewDistance(): number /*int*/
            // @ts-ignore
            spigot(): org.bukkit.World.Spigot
            /**
             * Finds the nearest raid close to the given location.
             * @param location the origin location
             * @param radius the radius
             * @return the closest {#link Raid}, or null if no raids were found
             */
            // @ts-ignore
            locateNearestRaid(location: org.bukkit.Location, radius: number /*int*/): org.bukkit.Raid
            /**
             * Gets all raids that are going on over this world.
             * @return the list of all active raids
             */
            // @ts-ignore
            getRaids(): Array<org.bukkit.Raid>
            /**
             * Get the {@link DragonBattle} associated with this world.
             * If this world's environment is not {@link Environment#THE_END}, null will
             * be returned.
             * <p>
             * If an end world, a dragon battle instance will be returned regardless of
             * whether or not a dragon is present in the world or a fight sequence has
             * been activated. The dragon battle instance acts as a state holder.
             * @return the dragon battle instance
             */
            // @ts-ignore
            getEnderDragonBattle(): org.bukkit.boss.DragonBattle
        }
    }
}
