declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a falling block
             */
            // @ts-ignore
            interface FallingBlock extends org.bukkit.entity.Entity {
                /**
                 * Get the Material of the falling block
                 * @return Material of the block
                 * @deprecated use {#link #getBlockData()}
                 */
                // @ts-ignore
                getMaterial(): org.bukkit.Material
                /**
                 * Get the data for the falling block
                 * @return data of the block
                 */
                // @ts-ignore
                getBlockData(): org.bukkit.block.data.BlockData
                /**
                 * Get if the falling block will break into an item if it cannot be placed
                 * @return true if the block will break into an item when obstructed
                 */
                // @ts-ignore
                getDropItem(): boolean
                /**
                 * Set if the falling block will break into an item if it cannot be placed
                 * @param drop true to break into an item when obstructed
                 */
                // @ts-ignore
                setDropItem(drop: boolean): void
                /**
                 * Get the HurtEntities state of this block.
                 * @return whether entities will be damaged by this block.
                 */
                // @ts-ignore
                canHurtEntities(): boolean
                /**
                 * Set the HurtEntities state of this block.
                 * @param hurtEntities whether entities will be damaged by this block.
                 */
                // @ts-ignore
                setHurtEntities(hurtEntities: boolean): void
            }
        }
    }
}
