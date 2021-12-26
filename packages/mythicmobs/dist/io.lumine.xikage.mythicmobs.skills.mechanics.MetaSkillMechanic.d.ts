declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class MetaSkillMechanic extends io.lumine.xikage.mythicmobs.skills.SkillMechanic implements io.lumine.xikage.mythicmobs.skills.IMetaSkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, skillName: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            skillName: java.lang.String | string
                            // @ts-ignore
                            metaskill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            public getSkill(): io.lumine.xikage.mythicmobs.skills.Skill
                            // @ts-ignore
                            public cast(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): boolean
                        }
                    }
                }
            }
        }
    }
}
