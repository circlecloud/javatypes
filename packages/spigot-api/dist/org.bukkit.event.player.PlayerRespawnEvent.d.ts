declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player respawns.
                 */
                // @ts-ignore
                class PlayerRespawnEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(respawnPlayer: org.bukkit.entity.Player, respawnLocation: org.bukkit.Location, isBedSpawn: boolean)
                    /**
                     * Gets the current respawn location
                     * @return Location current respawn location
                     */
                    // @ts-ignore
                    getRespawnLocation(): org.bukkit.Location
                    /**
                     * Sets the new respawn location
                     * @param respawnLocation new location for the respawn
                     */
                    // @ts-ignore
                    setRespawnLocation(respawnLocation: org.bukkit.Location): void
                    /**
                     * Gets whether the respawn location is the player's bed.
                     * @return true if the respawn location is the player's bed.
                     */
                    // @ts-ignore
                    isBedSpawn(): boolean
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
