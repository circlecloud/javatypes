declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                /**
                 * This event is called asynchronously
                 * @author CreeperFace
                 */
                // @ts-ignore
                class PlayerAsyncPreLoginEvent extends cn.nukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(name: java.lang.String | string, uuid: java.util.UUID, address: java.lang.String | string, port: number /*int*/)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getUuid(): java.util.UUID
                    // @ts-ignore
                    public getAddress(): string
                    // @ts-ignore
                    public getPort(): number /*int*/
                    // @ts-ignore
                    public getLoginResult(): cn.nukkit.event.player.PlayerAsyncPreLoginEvent.LoginResult
                    // @ts-ignore
                    public setLoginResult(loginResult: cn.nukkit.event.player.PlayerAsyncPreLoginEvent.LoginResult): void
                    // @ts-ignore
                    public getKickMessage(): string
                    // @ts-ignore
                    public setKickMessage(kickMessage: java.lang.String | string): void
                    // @ts-ignore
                    public scheduleSyncAction(action: java.util.function$.Consumer<cn.nukkit.Server>): void
                    // @ts-ignore
                    public getScheduledActions(): Array<java.util.function$$.Consumer<cn.nukkit.Server>>
                    // @ts-ignore
                    public allow(): void
                    // @ts-ignore
                    public disAllow(message: java.lang.String | string): void
                }
            }
        }
    }
}
