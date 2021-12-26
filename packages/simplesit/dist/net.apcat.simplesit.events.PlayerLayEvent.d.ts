declare namespace net {
    namespace apcat {
        namespace simplesit {
            namespace events {
                // @ts-ignore
                class PlayerLayEvent extends Event {
                    // @ts-ignore
                    constructor(player: Player, layLocation: Location, message: java.lang.String | string)
                    // @ts-ignore
                    public getPlayer(): Player
                    // @ts-ignore
                    public getLayLocation(): Location
                    // @ts-ignore
                    public getMessage(): string
                    // @ts-ignore
                    public setMessage(message: java.lang.String | string): void
                    // @ts-ignore
                    public getHandlers(): HandlerList
                    // @ts-ignore
                    public static getHandlerList(): HandlerList
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(canceled: boolean): void
                }
            }
        }
    }
}
