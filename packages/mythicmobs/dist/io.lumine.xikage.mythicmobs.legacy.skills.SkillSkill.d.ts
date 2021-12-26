declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace legacy {
                    namespace skills {
                        // @ts-ignore
                        class SkillSkill extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public static cooldownTimer: java.lang.Long | number
                            // @ts-ignore
                            public static ExecuteSkill(l: LivingEntity, skill: java.lang.String | string, target: LivingEntity, trigger: io.lumine.xikage.mythicmobs.skills.SkillTrigger): void
                            // @ts-ignore
                            public static getMetaSkill(s: java.lang.String | string): io.lumine.xikage.mythicmobs.legacy.LegacyMythicSkill
                            // @ts-ignore
                            public static onCooldown(l: LivingEntity, skill: java.lang.String | string): boolean
                            // @ts-ignore
                            public static setCooldown(l: LivingEntity, skill: java.lang.String | string, cooldown: number /*double*/): void
                            // @ts-ignore
                            public static checkConditions(l: LivingEntity, conditions: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): boolean
                        }
                    }
                }
            }
        }
    }
}
