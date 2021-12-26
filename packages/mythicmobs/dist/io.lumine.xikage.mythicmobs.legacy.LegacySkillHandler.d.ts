declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace legacy {
                    // @ts-ignore
                    class LegacySkillHandler extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static ExecuteSkills(skills: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, e: Entity, target: LivingEntity, trigger: io.lumine.xikage.mythicmobs.skills.SkillTrigger): void
                        // @ts-ignore
                        public static RunTimerSkills(timer: number /*long*/): void
                        // @ts-ignore
                        public static ExecuteTimerSkills(skills: java.util.List<io.lumine.xikage.mythicmobs.legacy.LegacyMythicTimerSkill> | Array<io.lumine.xikage.mythicmobs.legacy.LegacyMythicTimerSkill>, am: io.lumine.xikage.mythicmobs.mobs.ActiveMob, timer: number /*long*/): void
                        // @ts-ignore
                        public static ExecuteMetaSkills(list: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, l: Entity, p: LivingEntity, trigger: io.lumine.xikage.mythicmobs.skills.SkillTrigger): void
                        // @ts-ignore
                        public static ExecuteMobSkill(e: Entity, trigger: io.lumine.xikage.mythicmobs.skills.SkillTrigger, skill: java.lang.String | string, p: LivingEntity, meta: boolean): void
                        // @ts-ignore
                        public static CheckTrigger(strTrigger: java.lang.String | string, trigger: io.lumine.xikage.mythicmobs.skills.SkillTrigger, l: LivingEntity, full: java.lang.String | string, meta: boolean): boolean
                        // @ts-ignore
                        public static CheckHealth(strHealth: java.lang.String | string, l: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, currentbosshp: number /*double*/, full: java.lang.String | string): boolean
                        // @ts-ignore
                        public static hasUsedSkill(full: java.lang.String | string, l: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                    }
                }
            }
        }
    }
}
