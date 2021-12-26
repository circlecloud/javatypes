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
                    constructor(who: org.bukkit.entity.Player, locale: java.lang.String | string)
                    /**
                     * @see Player#getLocale()
                     * @return the player's new locale
                     */
                    // @ts-ignore
                    public getLocale(): string
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
