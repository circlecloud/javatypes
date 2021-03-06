declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a block, which will not change
             * automatically.
             * <p>
             * Unlike Block, which only one object can exist per coordinate, BlockState
             * can exist multiple times for any given Block. Note that another plugin may
             * change the state of the block and you will not know, or they may change the
             * block to another type entirely, causing your BlockState to become invalid.
             */
            // @ts-ignore
            interface BlockState extends org.bukkit.metadata.Metadatable {
                /**
                 * Gets the block represented by this block state.
                 * @return the block represented by this block state
                 * @throws IllegalStateException if this block state is not placed
                 */
                // @ts-ignore
                getBlock(): org.bukkit.block.Block
                /**
                 * Gets the metadata for this block state.
                 * @return block specific metadata
                 */
                // @ts-ignore
                getData(): org.bukkit.material.MaterialData
                /**
                 * Gets the data for this block state.
                 * @return block specific data
                 */
                // @ts-ignore
                getBlockData(): org.bukkit.block.data.BlockData
                /**
                 * Gets the type of this block state.
                 * @return block type
                 */
                // @ts-ignore
                getType(): org.bukkit.Material
                /**
                 * Gets the current light level of the block represented by this block state.
                 * @return the light level between 0-15
                 * @throws IllegalStateException if this block state is not placed
                 */
                // @ts-ignore
                getLightLevel(): number /*byte*/
                /**
                 * Gets the world which contains the block represented by this block state.
                 * @return the world containing the block represented by this block state
                 * @throws IllegalStateException if this block state is not placed
                 */
                // @ts-ignore
                getWorld(): org.bukkit.World
                /**
                 * Gets the x-coordinate of this block state.
                 * @return x-coordinate
                 */
                // @ts-ignore
                getX(): number /*int*/
                /**
                 * Gets the y-coordinate of this block state.
                 * @return y-coordinate
                 */
                // @ts-ignore
                getY(): number /*int*/
                /**
                 * Gets the z-coordinate of this block state.
                 * @return z-coordinate
                 */
                // @ts-ignore
                getZ(): number /*int*/
                /**
                 * Gets the location of this block state.
                 * <p>
                 * If this block state is not placed the location's world will be null!
                 * @return the location
                 */
                // @ts-ignore
                getLocation(): org.bukkit.Location
                /**
                 * Stores the location of this block state in the provided Location object.
                 * <p>
                 * If the provided Location is null this method does nothing and returns
                 * null.
                 * <p>
                 * If this block state is not placed the location's world will be null!
                 * @param loc the location to copy into
                 * @return The Location object provided or null
                 */
                // @ts-ignore
                getLocation(loc: org.bukkit.Location): org.bukkit.Location
                /**
                 * Gets the chunk which contains the block represented by this block state.
                 * @return the containing Chunk
                 * @throws IllegalStateException if this block state is not placed
                 */
                // @ts-ignore
                getChunk(): org.bukkit.Chunk
                /**
                 * Sets the metadata for this block state.
                 * @param data New block specific metadata
                 */
                // @ts-ignore
                setData(data: org.bukkit.material.MaterialData): void
                /**
                 * Sets the data for this block state.
                 * @param data New block specific data
                 */
                // @ts-ignore
                setBlockData(data: org.bukkit.block.data.BlockData): void
                /**
                 * Sets the type of this block state.
                 * @param type Material to change this block state to
                 */
                // @ts-ignore
                setType(type: org.bukkit.Material): void
                /**
                 * Attempts to update the block represented by this state, setting it to
                 * the new values as defined by this state.
                 * <p>
                 * This has the same effect as calling update(false). That is to say,
                 * this will not modify the state of a block if it is no longer the same
                 * type as it was when this state was taken. It will return false in this
                 * eventuality.
                 * @return true if the update was successful, otherwise false
                 * @see #update(boolean)
                 */
                // @ts-ignore
                update(): boolean
                /**
                 * Attempts to update the block represented by this state, setting it to
                 * the new values as defined by this state.
                 * <p>
                 * This has the same effect as calling update(force, true). That is to
                 * say, this will trigger a physics update to surrounding blocks.
                 * @param force true to forcefully set the state
                 * @return true if the update was successful, otherwise false
                 */
                // @ts-ignore
                update(force: boolean): boolean
                /**
                 * Attempts to update the block represented by this state, setting it to
                 * the new values as defined by this state.
                 * <p>
                 * If this state is not placed, this will have no effect and return true.
                 * <p>
                 * Unless force is true, this will not modify the state of a block if it
                 * is no longer the same type as it was when this state was taken. It will
                 * return false in this eventuality.
                 * <p>
                 * If force is true, it will set the type of the block to match the new
                 * state, set the state data and then return true.
                 * <p>
                 * If applyPhysics is true, it will trigger a physics update on
                 * surrounding blocks which could cause them to update or disappear.
                 * @param force true to forcefully set the state
                 * @param applyPhysics false to cancel updating physics on surrounding
                 *      blocks
                 * @return true if the update was successful, otherwise false
                 */
                // @ts-ignore
                update(force: boolean, applyPhysics: boolean): boolean
                /**
                 * @return The data as a raw byte.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getRawData(): number /*byte*/
                /**
                 * @param data The new data value for the block.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                setRawData(data: number /*byte*/): void
                /**
                 * Returns whether this state is placed in the world.
                 * <p>
                 * Some methods will not work if the block state isn't
                 * placed in the world.
                 * @return whether the state is placed in the world
                 *          or 'virtual' (e.g. on an itemstack)
                 */
                // @ts-ignore
                isPlaced(): boolean
            }
        }
    }
}
