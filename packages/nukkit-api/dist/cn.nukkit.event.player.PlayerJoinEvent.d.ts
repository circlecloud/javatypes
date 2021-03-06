declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                class PlayerJoinEvent extends cn.nukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, joinMessage: cn.nukkit.lang.TextContainer)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, joinMessage: java.lang.String | string)
                    // @ts-ignore
                    joinMessage: cn.nukkit.lang.TextContainer
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getJoinMessage(): cn.nukkit.lang.TextContainer
                    // @ts-ignore
                    public setJoinMessage(joinMessage: cn.nukkit.lang.TextContainer): void
                    // @ts-ignore
                    public setJoinMessage(joinMessage: java.lang.String | string): void
                }
            }
        }
    }
}
