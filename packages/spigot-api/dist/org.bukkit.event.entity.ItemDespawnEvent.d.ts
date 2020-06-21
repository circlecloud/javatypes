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
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Item
                    /**
                     * Gets the location at which the item is despawning.
                     * @return The location at which the item is despawning
                     */
                    // @ts-ignore
                    public getLocation(): org.bukkit.Location
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
