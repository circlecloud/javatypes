declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                /**
                 * Called when the player logs in, before things have been set up
                 */
                // @ts-ignore
                class PlayerPreLoginEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, kickMessage: java.lang.String | string)
                    // @ts-ignore
                    kickMessage: java.lang.String | string
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public setKickMessage(kickMessage: java.lang.String | string): void
                    // @ts-ignore
                    public getKickMessage(): string
                }
            }
        }
    }
}
