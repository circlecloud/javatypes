declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace api {
                    namespace bukkit {
                        namespace events {
                            // @ts-ignore
                            class MythicMobDespawnEvent extends Event {
                                // @ts-ignore
                                constructor(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob)
                                // @ts-ignore
                                public getMob(): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                                // @ts-ignore
                                public getEntity(): Entity
                                // @ts-ignore
                                public getMobType(): io.lumine.xikage.mythicmobs.mobs.MythicMob
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
