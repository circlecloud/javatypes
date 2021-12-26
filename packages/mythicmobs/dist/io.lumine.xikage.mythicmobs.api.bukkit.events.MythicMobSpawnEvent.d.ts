declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace api {
                    namespace bukkit {
                        namespace events {
                            // @ts-ignore
                            class MythicMobSpawnEvent extends Event {
                                // @ts-ignore
                                constructor(type: io.lumine.xikage.mythicmobs.mobs.MythicMob, entity: Entity, level: number /*int*/)
                                // @ts-ignore
                                public getMobType(): io.lumine.xikage.mythicmobs.mobs.MythicMob
                                // @ts-ignore
                                public getMobLevel(): number /*int*/
                                // @ts-ignore
                                public setMobLevel(level: number /*int*/): void
                                // @ts-ignore
                                public getLocation(): Location
                                // @ts-ignore
                                public getEntity(): Entity
                                // @ts-ignore
                                public getLivingEntity(): LivingEntity
                                // @ts-ignore
                                public setCancelled(): void
                                // @ts-ignore
                                public isCancelled(): boolean
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
