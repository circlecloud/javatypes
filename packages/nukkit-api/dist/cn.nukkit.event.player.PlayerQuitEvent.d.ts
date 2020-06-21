declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                class PlayerQuitEvent extends cn.nukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: cn.nukkit.lang.TextContainer, reason: java.lang.String | string)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: cn.nukkit.lang.TextContainer)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: java.lang.String | string, reason: java.lang.String | string)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: java.lang.String | string)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: java.lang.String | string, autoSave: boolean, reason: java.lang.String | string)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: java.lang.String | string, autoSave: boolean)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: cn.nukkit.lang.TextContainer, autoSave: boolean)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, quitMessage: cn.nukkit.lang.TextContainer, autoSave: boolean, reason: java.lang.String | string)
                    // @ts-ignore
                    quitMessage: cn.nukkit.lang.TextContainer
                    // @ts-ignore
                    autoSave: boolean
                    // @ts-ignore
                    reason: java.lang.String | string
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getQuitMessage(): cn.nukkit.lang.TextContainer
                    // @ts-ignore
                    public setQuitMessage(quitMessage: cn.nukkit.lang.TextContainer): void
                    // @ts-ignore
                    public setQuitMessage(quitMessage: java.lang.String | string): void
                    // @ts-ignore
                    public getAutoSave(): boolean
                    // @ts-ignore
                    public setAutoSave(): void
                    // @ts-ignore
                    public setAutoSave(autoSave: boolean): void
                    // @ts-ignore
                    public getReason(): string
                }
            }
        }
    }
}
