declare namespace net {
    namespace apcat {
        namespace simplesit {
            namespace events {
                // @ts-ignore
                class PlayerStopLayingEvent extends Event {
                    // @ts-ignore
                    constructor(player: Player, message: java.lang.String | string)
                    // @ts-ignore
                    public getPlayer(): Player
                    // @ts-ignore
                    public getMessage(): string
                    // @ts-ignore
                    public setMessage(message: java.lang.String | string): void
                    // @ts-ignore
                    public getHandlers(): HandlerList
                    // @ts-ignore
                    public static getHandlerList(): HandlerList
                }
            }
        }
    }
}
