declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace api {
                namespace gui {
                    namespace event {
                        // @ts-ignore
                        class CustomPacketEvent extends org.bukkit.event.player.PlayerEvent {
                            // @ts-ignore
                            constructor(who: Player, identifier: java.lang.String | string, data: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
                            // @ts-ignore
                            public getIdentifier(): string
                            // @ts-ignore
                            public getData(): Array<java.lang.String | string>
                            // @ts-ignore
                            public getHandlers(): HandlerList
                            // @ts-ignore
                            public static getHandlerList(): HandlerList
                            // @ts-ignore
                            public desc(): void
                            // @ts-ignore
                            public isCancelled(): boolean
                            // @ts-ignore
                            public setCancelled(b: boolean): void
                            // @ts-ignore
                            public callEvent(): boolean
                        }
                    }
                }
            }
        }
    }
}
