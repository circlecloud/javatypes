declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Thrown when a non-player entity is teleported from one location to another.
                 * <br>
                 * This may be as a result of natural causes (Enderman, Shulker), pathfinding
                 * (Wolf), or commands (/teleport).
                 */
                // @ts-ignore
                class EntityTeleportEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity, from: org.bukkit.Location, to: org.bukkit.Location)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Gets the location that this entity moved from
                     * @return Location this entity moved from
                     */
                    // @ts-ignore
                    getFrom(): org.bukkit.Location
                    /**
                     * Sets the location that this entity moved from
                     * @param from New location this entity moved from
                     */
                    // @ts-ignore
                    setFrom(from: org.bukkit.Location): void
                    /**
                     * Gets the location that this entity moved to
                     * @return Location the entity moved to
                     */
                    // @ts-ignore
                    getTo(): org.bukkit.Location
                    /**
                     * Sets the location that this entity moved to
                     * @param to New Location this entity moved to
                     */
                    // @ts-ignore
                    setTo(to: org.bukkit.Location): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
