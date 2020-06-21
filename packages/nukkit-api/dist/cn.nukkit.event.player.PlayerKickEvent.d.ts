declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                class PlayerKickEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, reason: java.lang.String | string, quitMessage: java.lang.String | string)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, reason: java.lang.String | string, quitMessage: cn.nukkit.lang.TextContainer)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, reason: cn.nukkit.event.player.PlayerKickEvent.Reason, quitMessage: cn.nukkit.lang.TextContainer)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, reason: cn.nukkit.event.player.PlayerKickEvent.Reason, quitMessage: java.lang.String | string)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, reason: cn.nukkit.event.player.PlayerKickEvent.Reason, reasonString: java.lang.String | string, quitMessage: cn.nukkit.lang.TextContainer)
                    // @ts-ignore
                    quitMessage: cn.nukkit.lang.TextContainer
                    // @ts-ignore
                    readonly reason: cn.nukkit.event.player.PlayerKickEvent.Reason
                    // @ts-ignore
                    readonly reasonString: java.lang.String | string
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getReason(): string
                    // @ts-ignore
                    public getReasonEnum(): cn.nukkit.event.player.PlayerKickEvent.Reason
                    // @ts-ignore
                    public getQuitMessage(): cn.nukkit.lang.TextContainer
                    // @ts-ignore
                    public setQuitMessage(quitMessage: cn.nukkit.lang.TextContainer): void
                    // @ts-ignore
                    public setQuitMessage(joinMessage: java.lang.String | string): void
                }
            }
        }
    }
}
