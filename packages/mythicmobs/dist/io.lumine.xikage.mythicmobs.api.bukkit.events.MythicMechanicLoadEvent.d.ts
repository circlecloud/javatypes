declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace api {
                    namespace bukkit {
                        namespace events {
                            // @ts-ignore
                            class MythicMechanicLoadEvent extends Event {
                                // @ts-ignore
                                constructor(holder: io.lumine.xikage.mythicmobs.skills.mechanics.CustomMechanic, name: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                                // @ts-ignore
                                public getContainer(): io.lumine.xikage.mythicmobs.skills.mechanics.CustomMechanic
                                // @ts-ignore
                                public getHolder(): io.lumine.xikage.mythicmobs.skills.mechanics.CustomMechanic
                                // @ts-ignore
                                public getMechanicName(): string
                                // @ts-ignore
                                public getConfig(): io.lumine.xikage.mythicmobs.io.MythicLineConfig
                                // @ts-ignore
                                public register(mechanic: io.lumine.xikage.mythicmobs.skills.SkillMechanic): void
                                // @ts-ignore
                                public getMechanic(): java.util.Optional<io.lumine.xikage.mythicmobs.skills.SkillMechanic>
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
