declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a block which stores entities.
             * @param <T> Entity this block can store
             */
            // @ts-ignore
            interface EntityBlockStorage<T extends org.bukkit.entity.Entity> extends org.bukkit.block.TileState {
                /**
                 * Check if the block is completely full of entities.
                 * @return True if block is full
                 */
                // @ts-ignore
                isFull(): boolean
                /**
                 * Get the amount of entities currently in this block.
                 * @return Amount of entities currently in this block
                 */
                // @ts-ignore
                getEntityCount(): number /*int*/
                /**
                 * Get the maximum amount of entities this block can hold.
                 * @return Maximum amount of entities this block can hold
                 */
                // @ts-ignore
                getMaxEntities(): number /*int*/
                /**
                 * Set the maximum amount of entities this block can hold.
                 * @param max Maximum amount of entities this block can hold
                 */
                // @ts-ignore
                setMaxEntities(max: number /*int*/): void
                /**
                 * Release all the entities currently stored in the block.
                 * @return List of all entities which were released
                 */
                // @ts-ignore
                releaseEntities(): Array<T>
                /**
                 * Add an entity to the block.
                 * @param entity Entity to add to the block
                 */
                // @ts-ignore
                addEntity(entity: T): void
            }
        }
    }
}
