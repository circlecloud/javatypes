declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a non-player entity is about to teleport because it is in
                 * contact with a portal.
                 * <p>
                 * For players see {@link org.bukkit.event.player.PlayerPortalEvent}
                 */
                // @ts-ignore
                class EntityPortalEvent extends org.bukkit.event.entity.EntityTeleportEvent {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, from: org.bukkit.Location, to: org.bukkit.Location)
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, from: org.bukkit.Location, to: org.bukkit.Location, searchRadius: number /*int*/)
                    /**
                     * Set the Block radius to search in for available portals.
                     * @param searchRadius the radius in which to search for a portal from the
                     *  location
                     */
                    // @ts-ignore
                    setSearchRadius(searchRadius: number /*int*/): void
                    /**
                     * Gets the search radius value for finding an available portal.
                     * @return the currently set search radius
                     */
                    // @ts-ignore
                    getSearchRadius(): int
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
