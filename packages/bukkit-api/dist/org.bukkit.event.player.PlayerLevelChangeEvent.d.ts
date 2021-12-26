declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a players level changes
                 */
                // @ts-ignore
                class PlayerLevelChangeEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, oldLevel: number /*int*/, newLevel: number /*int*/)
                    /**
                     * Gets the old level of the player
                     * @return The old level of the player
                     */
                    // @ts-ignore
                    public getOldLevel(): number /*int*/
                    /**
                     * Gets the new level of the player
                     * @return The new (current) level of the player
                     */
                    // @ts-ignore
                    public getNewLevel(): number /*int*/
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
