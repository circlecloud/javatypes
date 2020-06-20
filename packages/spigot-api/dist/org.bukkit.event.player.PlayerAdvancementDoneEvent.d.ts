declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player has completed all criteria in an advancement.
                 */
                // @ts-ignore
                class PlayerAdvancementDoneEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, advancement: org.bukkit.advancement.Advancement)
                    /**
                     * Get the advancement which has been completed.
                     * @return completed advancement
                     */
                    // @ts-ignore
                    getAdvancement(): org.bukkit.advancement.Advancement
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
