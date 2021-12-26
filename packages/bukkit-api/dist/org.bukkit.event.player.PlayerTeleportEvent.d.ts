declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Holds information for player teleport events
                 */
                // @ts-ignore
                class PlayerTeleportEvent extends org.bukkit.event.player.PlayerMoveEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, from: org.bukkit.Location, to: org.bukkit.Location)
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, from: org.bukkit.Location, to: org.bukkit.Location, cause: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause)
                    /**
                     * Gets the cause of this teleportation event
                     * @return Cause of the event
                     */
                    // @ts-ignore
                    public getCause(): org.bukkit.event.player.PlayerTeleportEvent.TeleportCause
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
