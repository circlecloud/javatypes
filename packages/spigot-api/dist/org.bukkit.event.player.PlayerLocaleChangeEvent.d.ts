declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player changes their locale in the client settings.
                 */
                // @ts-ignore
                class PlayerLocaleChangeEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, locale: string)
                    /**
                     * @see Player#getLocale()
                     * @return the player's new locale
                     */
                    // @ts-ignore
                    getLocale(): java.lang.String
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
