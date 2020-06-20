declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a block. This is a live object, and only one Block may exist for
             * any given location in a world. The state of the block may change
             * concurrently to your own handling of it; use block.getState() to get a
             * snapshot state of a block which will not be modified.
             * <br>
             * Note that parts of this class which require access to the world at large
             * (i.e. lighting and power) may not be able to be safely accessed during world
             * generation when used in cases like BlockPhysicsEvent!!!!
             */
            // @ts-ignore
            interface Block extends org.bukkit.metadata.Metadatable {
                /**
                 * Gets the metadata for this block
                 * @return block specific metadata
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getData(): byte
                /**
                 * Gets the complete block data for this block
                 * @return block specific data
                 */
                // @ts-ignore
                getBlockData(): org.bukkit.block.data.BlockData
                /**
                 * Gets the block at the given offsets
                 * @param modX X-coordinate offset
                 * @param modY Y-coordinate offset
                 * @param modZ Z-coordinate offset
                 * @return Block at the given offsets
                 */
                // @ts-ignore
                getRelative(modX: number /*int*/, modY: number /*int*/, modZ: number /*int*/): org.bukkit.block.Block
                /**
                 * Gets the block at the given face
                 * <p>
                 * This method is equal to getRelative(face, 1)
                 * @param face Face of this block to return
                 * @return Block at the given face
                 * @see #getRelative(BlockFace, int)
                 */
                // @ts-ignore
                getRelative(face: org.bukkit.block.BlockFace): org.bukkit.block.Block
                /**
                 * Gets the block at the given distance of the given face
                 * <p>
                 * For example, the following method places water at 100,102,100; two
                 * blocks above 100,100,100.
                 * <pre>
                 * Block block = world.getBlockAt(100, 100, 100);
                 * Block shower = block.getRelative(BlockFace.UP, 2);
                 * shower.setType(Material.WATER);
                 * </pre>
                 * @param face Face of this block to return
                 * @param distance Distance to get the block at
                 * @return Block at the given face
                 */
                // @ts-ignore
                getRelative(face: org.bukkit.block.BlockFace, distance: number /*int*/): org.bukkit.block.Block
                /**
                 * Gets the type of this block
                 * @return block type
                 */
                // @ts-ignore
                getType(): org.bukkit.Material
                /**
                 * Gets the light level between 0-15
                 * @return light level
                 */
                // @ts-ignore
                getLightLevel(): byte
                /**
                 * Get the amount of light at this block from the sky.
                 * <p>
                 * Any light given from other sources (such as blocks like torches) will
                 * be ignored.
                 * @return Sky light level
                 */
                // @ts-ignore
                getLightFromSky(): byte
                /**
                 * Get the amount of light at this block from nearby blocks.
                 * <p>
                 * Any light given from other sources (such as the sun) will be ignored.
                 * @return Block light level
                 */
                // @ts-ignore
                getLightFromBlocks(): byte
                /**
                 * Gets the world which contains this Block
                 * @return World containing this block
                 */
                // @ts-ignore
                getWorld(): org.bukkit.World
                /**
                 * Gets the x-coordinate of this block
                 * @return x-coordinate
                 */
                // @ts-ignore
                getX(): int
                /**
                 * Gets the y-coordinate of this block
                 * @return y-coordinate
                 */
                // @ts-ignore
                getY(): int
                /**
                 * Gets the z-coordinate of this block
                 * @return z-coordinate
                 */
                // @ts-ignore
                getZ(): int
                /**
                 * Gets the Location of the block
                 * @return Location of block
                 */
                // @ts-ignore
                getLocation(): org.bukkit.Location
                /**
                 * Stores the location of the block in the provided Location object.
                 * <p>
                 * If the provided Location is null this method does nothing and returns
                 * null.
                 * @param loc the location to copy into
                 * @return The Location object provided or null
                 */
                // @ts-ignore
                getLocation(loc: org.bukkit.Location): org.bukkit.Location
                /**
                 * Gets the chunk which contains this block
                 * @return Containing Chunk
                 */
                // @ts-ignore
                getChunk(): org.bukkit.Chunk
                /**
                 * Sets the complete data for this block
                 * @param data new block specific data
                 */
                // @ts-ignore
                setBlockData(data: org.bukkit.block.data.BlockData): void
                /**
                 * Sets the complete data for this block
                 * <br>
                 * Note that applyPhysics = false is not in general safe. It should only be
                 * used when you need to avoid triggering a physics update of neighboring
                 * blocks, for example when creating a {@link Bisected} block. If you are
                 * using a custom populator, then this parameter may also be required to
                 * prevent triggering infinite chunk loads on border blocks. This method
                 * should NOT be used to "hack" physics by placing blocks in impossible
                 * locations. Such blocks are liable to be removed on various events such as
                 * world upgrades. Furthermore setting large amounts of such blocks in close
                 * proximity may overload the server physics engine if an update is
                 * triggered at a later point. If this occurs, the resulting behavior is
                 * undefined.
                 * @param data new block specific data
                 * @param applyPhysics false to cancel physics from the changed block
                 */
                // @ts-ignore
                setBlockData(data: org.bukkit.block.data.BlockData, applyPhysics: boolean): void
                /**
                 * Sets the type of this block
                 * @param type Material to change this block to
                 */
                // @ts-ignore
                setType(type: org.bukkit.Material): void
                /**
                 * Sets the type of this block
                 * <br>
                 * Note that applyPhysics = false is not in general safe. It should only be
                 * used when you need to avoid triggering a physics update of neighboring
                 * blocks, for example when creating a {@link Bisected} block. If you are
                 * using a custom populator, then this parameter may also be required to
                 * prevent triggering infinite chunk loads on border blocks. This method
                 * should NOT be used to "hack" physics by placing blocks in impossible
                 * locations. Such blocks are liable to be removed on various events such as
                 * world upgrades. Furthermore setting large amounts of such blocks in close
                 * proximity may overload the server physics engine if an update is
                 * triggered at a later point. If this occurs, the resulting behavior is
                 * undefined.
                 * @param type Material to change this block to
                 * @param applyPhysics False to cancel physics on the changed block.
                 */
                // @ts-ignore
                setType(type: org.bukkit.Material, applyPhysics: boolean): void
                /**
                 * Gets the face relation of this block compared to the given block.
                 * <p>
                 * For example:
                 * <pre>{@code
                 * Block current = world.getBlockAt(100, 100, 100);
                 * Block target = world.getBlockAt(100, 101, 100);
                 * current.getFace(target) == BlockFace.Up;
                 * }</pre>
                 * <br>
                 * If the given block is not connected to this block, null may be returned
                 * @param block Block to compare against this block
                 * @return BlockFace of this block which has the requested block, or null
                 */
                // @ts-ignore
                getFace(block: org.bukkit.block.Block): org.bukkit.block.BlockFace
                /**
                 * Captures the current state of this block. You may then cast that state
                 * into any accepted type, such as Furnace or Sign.
                 * <p>
                 * The returned object will never be updated, and you are not guaranteed
                 * that (for example) a sign is still a sign after you capture its state.
                 * @return BlockState with the current state of this block.
                 */
                // @ts-ignore
                getState(): org.bukkit.block.BlockState
                /**
                 * Returns the biome that this block resides in
                 * @return Biome type containing this block
                 */
                // @ts-ignore
                getBiome(): org.bukkit.block.Biome
                /**
                 * Sets the biome that this block resides in
                 * @param bio new Biome type for this block
                 */
                // @ts-ignore
                setBiome(bio: org.bukkit.block.Biome): void
                /**
                 * Returns true if the block is being powered by Redstone.
                 * @return True if the block is powered.
                 */
                // @ts-ignore
                isBlockPowered(): boolean
                /**
                 * Returns true if the block is being indirectly powered by Redstone.
                 * @return True if the block is indirectly powered.
                 */
                // @ts-ignore
                isBlockIndirectlyPowered(): boolean
                /**
                 * Returns true if the block face is being powered by Redstone.
                 * @param face The block face
                 * @return True if the block face is powered.
                 */
                // @ts-ignore
                isBlockFacePowered(face: org.bukkit.block.BlockFace): boolean
                /**
                 * Returns true if the block face is being indirectly powered by Redstone.
                 * @param face The block face
                 * @return True if the block face is indirectly powered.
                 */
                // @ts-ignore
                isBlockFaceIndirectlyPowered(face: org.bukkit.block.BlockFace): boolean
                /**
                 * Returns the redstone power being provided to this block face
                 * @param face the face of the block to query or BlockFace.SELF for the
                 *      block itself
                 * @return The power level.
                 */
                // @ts-ignore
                getBlockPower(face: org.bukkit.block.BlockFace): int
                /**
                 * Returns the redstone power being provided to this block
                 * @return The power level.
                 */
                // @ts-ignore
                getBlockPower(): int
                /**
                 * Checks if this block is empty.
                 * <p>
                 * A block is considered empty when {@link #getType()} returns {@link
                 * Material#AIR}.
                 * @return true if this block is empty
                 */
                // @ts-ignore
                isEmpty(): boolean
                /**
                 * Checks if this block is liquid.
                 * <p>
                 * A block is considered liquid when {@link #getType()} returns {@link
                 * Material#WATER} or {@link Material#LAVA}.
                 * @return true if this block is liquid
                 */
                // @ts-ignore
                isLiquid(): boolean
                /**
                 * Gets the temperature of this block.
                 * <p>
                 * If the raw biome temperature without adjusting for height effects is
                 * required then please use {@link World#getTemperature(int, int)}.
                 * @return Temperature of this block
                 */
                // @ts-ignore
                getTemperature(): double
                /**
                 * Gets the humidity of the biome of this block
                 * @return Humidity of this block
                 */
                // @ts-ignore
                getHumidity(): double
                /**
                 * Returns the reaction of the block when moved by a piston
                 * @return reaction
                 */
                // @ts-ignore
                getPistonMoveReaction(): org.bukkit.block.PistonMoveReaction
                /**
                 * Breaks the block and spawns items as if a player had digged it regardless
                 * of the tool.
                 * @return true if the block was destroyed
                 */
                // @ts-ignore
                breakNaturally(): boolean
                /**
                 * Breaks the block and spawns items as if a player had digged it with a
                 * specific tool
                 * @param tool The tool or item in hand used for digging
                 * @return true if the block was destroyed
                 */
                // @ts-ignore
                breakNaturally(tool: org.bukkit.inventory.ItemStack): boolean
                /**
                 * Returns a list of items which would drop by destroying this block
                 * @return a list of dropped items for this type of block
                 */
                // @ts-ignore
                getDrops(): java.util.Collection<org.bukkit.inventory.ItemStack>
                /**
                 * Returns a list of items which would drop by destroying this block with
                 * a specific tool
                 * @param tool The tool or item in hand used for digging
                 * @return a list of dropped items for this type of block
                 */
                // @ts-ignore
                getDrops(tool: org.bukkit.inventory.ItemStack): java.util.Collection<org.bukkit.inventory.ItemStack>
                /**
                 * Returns a list of items which would drop by the entity destroying this
                 * block with a specific tool
                 * @param tool The tool or item in hand used for digging
                 * @param entity the entity destroying the block
                 * @return a list of dropped items for this type of block
                 */
                // @ts-ignore
                getDrops(tool: org.bukkit.inventory.ItemStack, entity: org.bukkit.entity.Entity): java.util.Collection<org.bukkit.inventory.ItemStack>
                /**
                 * Checks if this block is passable.
                 * <p>
                 * A block is passable if it has no colliding parts that would prevent
                 * players from moving through it.
                 * <p>
                 * Examples: Tall grass, flowers, signs, etc. are passable, but open doors,
                 * fence gates, trap doors, etc. are not because they still have parts that
                 * can be collided with.
                 * @return <code>true</code> if passable
                 */
                // @ts-ignore
                isPassable(): boolean
                /**
                 * Performs a ray trace that checks for collision with this specific block
                 * in its current state using its precise collision shape.
                 * @param start the start location
                 * @param direction the ray direction
                 * @param maxDistance the maximum distance
                 * @param fluidCollisionMode the fluid collision mode
                 * @return the ray trace hit result, or <code>null</code> if there is no hit
                 */
                // @ts-ignore
                rayTrace(start: org.bukkit.Location, direction: org.bukkit.util.Vector, maxDistance: number /*double*/, fluidCollisionMode: org.bukkit.FluidCollisionMode): org.bukkit.util.RayTraceResult
                /**
                 * Gets the approximate bounding box for this block.
                 * <p>
                 * This isn't exact as some blocks {@link org.bukkit.block.data.type.Stairs}
                 * contain many bounding boxes to establish their complete form.
                 * Also, the box may not be exactly the same as the collision shape (such as
                 * cactus, which is 16/16 of a block with 15/16 collisional bounds).
                 * This method will return an empty bounding box if the geometric shape of
                 * the block is empty (such as air blocks).
                 * @return the approximate bounding box of the block
                 */
                // @ts-ignore
                getBoundingBox(): org.bukkit.util.BoundingBox
            }
        }
    }
}
