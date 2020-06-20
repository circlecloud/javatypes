declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when any Entity, excluding players, changes a block.
                 */
                // @ts-ignore
                class EntityChangeBlockEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity, block: org.bukkit.block.Block, to: org.bukkit.block.data.BlockData)
                    /**
                     * Gets the block the entity is changing
                     * @return the block that is changing
                     */
                    // @ts-ignore
                    getBlock(): org.bukkit.block.Block
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Gets the Material that the block is changing into
                     * @return the material that the block is changing into
                     */
                    // @ts-ignore
                    getTo(): org.bukkit.Material
                    /**
                     * Gets the data for the block that would be changed into
                     * @return the data for the block that would be changed into
                     */
                    // @ts-ignore
                    getBlockData(): org.bukkit.block.data.BlockData
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
