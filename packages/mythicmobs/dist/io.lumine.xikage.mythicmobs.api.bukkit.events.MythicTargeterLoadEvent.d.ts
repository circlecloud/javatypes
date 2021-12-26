declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace api {
                    namespace bukkit {
                        namespace events {
                            // @ts-ignore
                            class MythicTargeterLoadEvent extends Event {
                                // @ts-ignore
                                constructor(holder: io.lumine.xikage.mythicmobs.skills.targeters.CustomTargeter, name: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                                // @ts-ignore
                                public getContainer(): io.lumine.xikage.mythicmobs.skills.targeters.CustomTargeter
                                // @ts-ignore
                                public getTargeterName(): string
                                // @ts-ignore
                                public getConfig(): io.lumine.xikage.mythicmobs.io.MythicLineConfig
                                // @ts-ignore
                                public register(targeter: io.lumine.xikage.mythicmobs.skills.SkillTargeter): void
                                // @ts-ignore
                                public getTargeter(): java.util.Optional<io.lumine.xikage.mythicmobs.skills.SkillTargeter>
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
