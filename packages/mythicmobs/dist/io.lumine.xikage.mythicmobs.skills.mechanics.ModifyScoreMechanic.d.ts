declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class ModifyScoreMechanic extends io.lumine.xikage.mythicmobs.skills.SkillMechanic implements io.lumine.xikage.mythicmobs.skills.INoTargetSkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            entry: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                            // @ts-ignore
                            objective: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                            // @ts-ignore
                            action: io.lumine.xikage.mythicmobs.skills.mechanics.ModifyScoreMechanic.ModifyScoreAction
                            // @ts-ignore
                            value: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                            // @ts-ignore
                            public cast(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): boolean
                            // @ts-ignore
                            applyModifier(score: number /*int*/, value: number /*int*/): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
