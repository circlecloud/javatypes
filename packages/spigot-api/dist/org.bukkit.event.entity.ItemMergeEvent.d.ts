declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                class ItemMergeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(item: org.bukkit.entity.Item, target: org.bukkit.entity.Item)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancelled: boolean): void
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.Item
                    /**
                     * Gets the Item entity the main Item is being merged into.
                     * @return The Item being merged with
                     */
                    // @ts-ignore
                    getTarget(): org.bukkit.entity.Item
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
