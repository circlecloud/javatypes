declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace api {
                namespace event {
                    // @ts-ignore
                    class EntityLeaveWorldEvent extends PlayerEvent {
                        // @ts-ignore
                        constructor(who: Player, uuid: java.util.UUID)
                        // @ts-ignore
                        public getEntityUUID(): java.util.UUID
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
