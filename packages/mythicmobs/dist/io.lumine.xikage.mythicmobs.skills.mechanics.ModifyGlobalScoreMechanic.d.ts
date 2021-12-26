declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class ModifyGlobalScoreMechanic extends io.lumine.xikage.mythicmobs.skills.SkillMechanic implements io.lumine.xikage.mythicmobs.skills.INoTargetSkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            objective: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                            // @ts-ignore
                            action: io.lumine.xikage.mythicmobs.skills.mechanics.ModifyGlobalScoreMechanic.ModifyScoreAction
                            // @ts-ignore
                            value: number /*int*/
                            // @ts-ignore
                            public cast(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): boolean
                            // @ts-ignore
                            applyModifier(score: number /*int*/): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
