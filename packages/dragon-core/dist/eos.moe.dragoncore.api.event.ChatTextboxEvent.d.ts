declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace api {
                namespace event {
                    // @ts-ignore
                    class ChatTextboxEvent extends PlayerEvent {
                        // @ts-ignore
                        constructor(who: Player, lastText: java.lang.String | string, currentText: java.lang.String | string)
                        // @ts-ignore
                        public static getHANDLERS(): HandlerList
                        // @ts-ignore
                        public getLastText(): string
                        // @ts-ignore
                        public getCurrentText(): string
                        // @ts-ignore
                        public callEvent(): boolean
                        // @ts-ignore
                        public getHandlers(): HandlerList
                        // @ts-ignore
                        public static getHandlerList(): HandlerList
                        // @ts-ignore
                        public desc(): void
                    }
                }
            }
        }
    }
}
