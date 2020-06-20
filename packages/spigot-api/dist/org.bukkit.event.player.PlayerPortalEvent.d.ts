declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player is about to teleport because it is in contact with a
                 * portal.
                 * <p>
                 * For other entities see {@link org.bukkit.event.entity.EntityPortalEvent}
                 */
                // @ts-ignore
                class PlayerPortalEvent extends org.bukkit.event.player.PlayerTeleportEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, from: org.bukkit.Location, to: org.bukkit.Location)
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, from: org.bukkit.Location, to: org.bukkit.Location, cause: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause)
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, from: org.bukkit.Location, to: org.bukkit.Location, cause: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause, getSearchRadius: number /*int*/, canCreatePortal: boolean, creationRadius: number /*int*/)
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
                    /**
                     * Returns whether the server will attempt to create a destination portal or
                     * not.
                     * @return whether there should create be a destination portal created
                     */
                    // @ts-ignore
                    getCanCreatePortal(): boolean
                    /**
                     * Sets whether the server should attempt to create a destination portal or
                     * not.
                     * @param canCreatePortal Sets whether there should be a destination portal
                     *  created
                     */
                    // @ts-ignore
                    setCanCreatePortal(canCreatePortal: boolean): void
                    /**
                     * Sets the maximum radius the world is searched for a free space from the
                     * given location.
                     * If enough free space is found then the portal will be created there, if
                     * not it will force create with air-space at the target location.
                     * Does not apply to end portal target platforms which will always appear at
                     * the target location.
                     * @param creationRadius the radius in which to create a portal from the
                     *  location
                     */
                    // @ts-ignore
                    setCreationRadius(creationRadius: number /*int*/): void
                    /**
                     * Gets the maximum radius the world is searched for a free space from the
                     * given location.
                     * If enough free space is found then the portal will be created there, if
                     * not it will force create with air-space at the target location.
                     * Does not apply to end portal target platforms which will always appear at
                     * the target location.
                     * @return the currently set creation radius
                     */
                    // @ts-ignore
                    getCreationRadius(): int
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
