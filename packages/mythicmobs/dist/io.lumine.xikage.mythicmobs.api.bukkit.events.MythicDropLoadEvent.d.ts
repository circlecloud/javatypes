declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace api {
                    namespace bukkit {
                        namespace events {
                            // @ts-ignore
                            class MythicDropLoadEvent extends Event {
                                // @ts-ignore
                                constructor(holder: io.lumine.xikage.mythicmobs.drops.droppables.CustomDrop, name: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                                // @ts-ignore
                                public getContainer(): io.lumine.xikage.mythicmobs.drops.droppables.CustomDrop
                                // @ts-ignore
                                public getDropName(): string
                                // @ts-ignore
                                public getConfig(): io.lumine.xikage.mythicmobs.io.MythicLineConfig
                                // @ts-ignore
                                public register(drop: io.lumine.xikage.mythicmobs.drops.Drop): void
                                // @ts-ignore
                                public getDrop(): java.util.Optional<io.lumine.xikage.mythicmobs.drops.Drop>
                                // @ts-ignore
                                public getHandlers(): HandlerList
                                // @ts-ignore
                                public static getHandlerList(): HandlerList
                            }
                        }
                    }
                }
            }
        }
    }
}
