declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace api {
                namespace event {
                    // @ts-ignore
                    class PlayerSlotUpdateEvent extends PlayerEvent {
                        // @ts-ignore
                        constructor(who: Player, identifier: java.lang.String | string, itemStack: ItemStack)
                        // @ts-ignore
                        public getIdentifier(): string
                        // @ts-ignore
                        public getItemStack(): ItemStack
                        // @ts-ignore
                        public desc(): void
                        // @ts-ignore
                        public getHandlers(): HandlerList
                        // @ts-ignore
                        public static getHandlerList(): HandlerList
                        // @ts-ignore
                        public callEvent(): boolean
                    }
                }
            }
        }
    }
}
