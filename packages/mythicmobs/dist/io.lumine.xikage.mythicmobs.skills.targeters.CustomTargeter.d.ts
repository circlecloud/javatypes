declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace targeters {
                        // @ts-ignore
                        class CustomTargeter extends io.lumine.xikage.mythicmobs.skills.SkillTargeter {
                            // @ts-ignore
                            constructor(targeter: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            readonly targeterName: java.lang.String | string
                            // @ts-ignore
                            readonly config: io.lumine.xikage.mythicmobs.io.MythicLineConfig
                            // @ts-ignore
                            targeter: io.lumine.xikage.mythicmobs.skills.SkillTargeter
                            // @ts-ignore
                            loaded: boolean
                            // @ts-ignore
                            public getTargeter(): java.util.Optional<io.lumine.xikage.mythicmobs.skills.SkillTargeter>
                        }
                    }
                }
            }
        }
    }
}
