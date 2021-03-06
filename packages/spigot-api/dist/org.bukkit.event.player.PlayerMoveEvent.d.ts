declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Holds information for player movement events
                 */
                // @ts-ignore
                class PlayerMoveEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, from: org.bukkit.Location, to: org.bukkit.Location)
                    /**
                     * Gets the cancellation state of this event. A cancelled event will not
                     * be executed in the server, but will still pass to other plugins
                     * <p>
                     * If a move or teleport event is cancelled, the player will be moved or
                     * teleported back to the Location as defined by getFrom(). This will not
                     * fire an event
                     * @return true if this event is cancelled
                     */
                    // @ts-ignore
                    public isCancelled(): boolean
                    /**
                     * Sets the cancellation state of this event. A cancelled event will not
                     * be executed in the server, but will still pass to other plugins
                     * <p>
                     * If a move or teleport event is cancelled, the player will be moved or
                     * teleported back to the Location as defined by getFrom(). This will not
                     * fire an event
                     * @param cancel true if you wish to cancel this event
                     */
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    /**
                     * Gets the location this player moved from
                     * @return Location the player moved from
                     */
                    // @ts-ignore
                    public getFrom(): org.bukkit.Location
                    /**
                     * Sets the location to mark as where the player moved from
                     * @param from New location to mark as the players previous location
                     */
                    // @ts-ignore
                    public setFrom(from: org.bukkit.Location): void
                    /**
                     * Gets the location this player moved to
                     * @return Location the player moved to
                     */
                    // @ts-ignore
                    public getTo(): org.bukkit.Location
                    /**
                     * Sets the location that this player will move to
                     * @param to New Location this player will move to
                     */
                    // @ts-ignore
                    public setTo(to: org.bukkit.Location): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
