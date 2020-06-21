declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity interacts with an object
                 */
                // @ts-ignore
                class EntityInteractEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, block: org.bukkit.block.Block)
                    // @ts-ignore
                    block: org.bukkit.block.Block
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    /**
                     * Returns the involved block
                     * @return the block clicked with this item.
                     */
                    // @ts-ignore
                    public getBlock(): org.bukkit.block.Block
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
