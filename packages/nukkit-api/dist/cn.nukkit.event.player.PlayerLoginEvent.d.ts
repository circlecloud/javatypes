declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                class PlayerLoginEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, kickMessage: java.lang.String | string)
                    // @ts-ignore
                    kickMessage: java.lang.String | string
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getKickMessage(): string
                    // @ts-ignore
                    public setKickMessage(kickMessage: java.lang.String | string): void
                }
            }
        }
    }
}
