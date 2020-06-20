declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Thrown when an entity creates an item drop.
                 */
                // @ts-ignore
                class EntityDropItemEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, drop: org.bukkit.entity.Item)
                    /**
                     * Gets the Item created by the entity
                     * @return Item created by the entity
                     */
                    // @ts-ignore
                    getItemDrop(): org.bukkit.entity.Item
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
