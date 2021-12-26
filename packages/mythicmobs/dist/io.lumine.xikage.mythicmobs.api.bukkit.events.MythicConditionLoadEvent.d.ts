declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace api {
                    namespace bukkit {
                        namespace events {
                            // @ts-ignore
                            class MythicConditionLoadEvent extends Event {
                                // @ts-ignore
                                constructor(holder: io.lumine.xikage.mythicmobs.skills.conditions.all.CustomCondition, name: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                                // @ts-ignore
                                public getContainer(): io.lumine.xikage.mythicmobs.skills.conditions.all.CustomCondition
                                // @ts-ignore
                                public getConditionName(): string
                                // @ts-ignore
                                public getConfig(): io.lumine.xikage.mythicmobs.io.MythicLineConfig
                                // @ts-ignore
                                public register(condition: io.lumine.xikage.mythicmobs.skills.SkillCondition): void
                                // @ts-ignore
                                public getCondition(): java.util.Optional<io.lumine.xikage.mythicmobs.skills.SkillCondition>
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
