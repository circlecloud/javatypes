declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an {@link Entity} enters a block and is stored in that block.
                 * <p>
                 * This event is called for bees entering a bee hive.
                 * <br>
                 * It is not called when a silverfish "enters" a stone block. For that listen to
                 * the {@link EntityChangeBlockEvent}.
                 */
                // @ts-ignore
                class EntityEnterBlockEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, block: org.bukkit.block.Block)
                    /**
                     * Get the block the entity will enter.
                     * @return the block
                     */
                    // @ts-ignore
                    public getBlock(): org.bukkit.block.Block
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
