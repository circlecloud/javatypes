declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Event fired when a dispenser shears a nearby sheep.
                 */
                // @ts-ignore
                class BlockShearEntityEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(dispenser: org.bukkit.block.Block, sheared: org.bukkit.entity.Entity, tool: org.bukkit.inventory.ItemStack)
                    /**
                     * Gets the entity that was sheared.
                     * @return the entity that was sheared.
                     */
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.Entity
                    /**
                     * Gets the item used to shear this sheep.
                     * @return the item used to shear this sheep.
                     */
                    // @ts-ignore
                    getTool(): org.bukkit.inventory.ItemStack
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancelled: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
