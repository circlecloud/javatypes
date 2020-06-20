declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * This event is called when a {@link org.bukkit.entity.Item} is removed from
                 * the world because it has existed for 5 minutes.
                 * <p>
                 * Cancelling the event results in the item being allowed to exist for 5 more
                 * minutes. This behavior is not guaranteed and may change in future versions.
                 */
                // @ts-ignore
                class ItemDespawnEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(despawnee: org.bukkit.entity.Item, loc: org.bukkit.Location)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.Item
                    /**
                     * Gets the location at which the item is despawning.
                     * @return The location at which the item is despawning
                     */
                    // @ts-ignore
                    getLocation(): org.bukkit.Location
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
