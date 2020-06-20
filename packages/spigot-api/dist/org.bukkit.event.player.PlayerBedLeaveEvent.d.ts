declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * This event is fired when the player is leaving a bed.
                 */
                // @ts-ignore
                class PlayerBedLeaveEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, bed: org.bukkit.block.Block, setBedSpawn: boolean)
                    /**
                     * Returns the bed block involved in this event.
                     * @return the bed block involved in this event
                     */
                    // @ts-ignore
                    getBed(): org.bukkit.block.Block
                    /**
                     * Get if this event should set the new spawn location for the
                     * {@link Player}.
                     * <br>
                     * This does not remove any existing spawn location, only prevent it from
                     * being changed (if true).
                     * <br>
                     * To change a {@link Player}'s spawn location, use
                     * {@link Player#setBedSpawnLocation(Location)}.
                     * @return true if the spawn location will be changed
                     */
                    // @ts-ignore
                    shouldSetSpawnLocation(): boolean
                    /**
                     * Set if this event should set the new spawn location for the
                     * {@link Player}.
                     * <br>
                     * This will not remove any existing spawn location, only prevent it from
                     * being changed (if true).
                     * <br>
                     * To change a {@link Player}'s spawn location, use
                     * {@link Player#setBedSpawnLocation(Location)}.
                     * @param setBedSpawn true to change the new spawn location
                     */
                    // @ts-ignore
                    setSpawnLocation(setBedSpawn: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
