declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace api {
                namespace event {
                    // @ts-ignore
                    class EntityJoinWorldEvent extends PlayerEvent {
                        // @ts-ignore
                        constructor(who: Player, uuid: java.util.UUID)
                        // @ts-ignore
                        public getEntityUUID(): java.util.UUID
                        // @ts-ignore
                        public getHandlers(): HandlerList
                        // @ts-ignore
                        public static getHandlerList(): HandlerList
                        // @ts-ignore
                        public desc(): void
                        // @ts-ignore
                        public callEvent(): boolean
                    }
                }
            }
        }
    }
}
