declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace api {
                // @ts-ignore
                class KeyPressEvent extends PlayerEvent {
                    // @ts-ignore
                    constructor(who: Player, key: java.lang.String | string, keys: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
                    // @ts-ignore
                    public getHandlers(): HandlerList
                    // @ts-ignore
                    public static getHandlerList(): HandlerList
                    // @ts-ignore
                    public getKey(): string
                    // @ts-ignore
                    public getKeys(): Array<java.lang.String | string>
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(b: boolean): void
                    // @ts-ignore
                    public desc(): void
                    // @ts-ignore
                    public callEvent(): boolean
                }
            }
        }
    }
}
