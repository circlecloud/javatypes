declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class CustomMechanic extends io.lumine.xikage.mythicmobs.skills.SkillMechanic {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, line: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            readonly skillName: java.lang.String | string
                            // @ts-ignore
                            readonly config: io.lumine.xikage.mythicmobs.io.MythicLineConfig
                            // @ts-ignore
                            mechanic: io.lumine.xikage.mythicmobs.skills.SkillMechanic
                            // @ts-ignore
                            loaded: boolean
                            // @ts-ignore
                            public getMechanic(): java.util.Optional<io.lumine.xikage.mythicmobs.skills.SkillMechanic>
                        }
                    }
                }
            }
        }
    }
}
