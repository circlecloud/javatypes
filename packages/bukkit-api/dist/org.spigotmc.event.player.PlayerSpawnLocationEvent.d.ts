declare namespace org {
    namespace spigotmc {
        namespace event {
            namespace player {
                /**
                 * Called when player is about to spawn in a world after joining the server.
                 */
                // @ts-ignore
                class PlayerSpawnLocationEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, spawnLocation: org.bukkit.Location)
                    /**
                     * Gets player's spawn location.
                     * If the player {@link Player#hasPlayedBefore()}, it's going to default to the location inside player.dat file.
                     * For new players, the default spawn location is spawn of the main Bukkit world.
                     * @return the spawn location
                     */
                    // @ts-ignore
                    public getSpawnLocation(): org.bukkit.Location
                    /**
                     * Sets player's spawn location.
                     * @param location the spawn location
                     */
                    // @ts-ignore
                    public setSpawnLocation(location: org.bukkit.Location): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
