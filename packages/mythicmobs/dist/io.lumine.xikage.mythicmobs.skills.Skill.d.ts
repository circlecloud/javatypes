declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    // @ts-ignore
                    class Skill extends io.lumine.xikage.mythicmobs.skills.AbstractSkill {
                        // @ts-ignore
                        constructor(file: java.lang.String | string, name: java.lang.String | string, mc: io.lumine.xikage.mythicmobs.io.MythicConfig)
                        // @ts-ignore
                        constructor(skillList: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>)
                        // @ts-ignore
                        readonly file: java.lang.String | string
                        // @ts-ignore
                        readonly internalName: java.lang.String | string
                        // @ts-ignore
                        readonly config: io.lumine.xikage.mythicmobs.io.MythicConfig
                        // @ts-ignore
                        skills: java.util.LinkedList<io.lumine.xikage.mythicmobs.skills.SkillMechanic>
                        // @ts-ignore
                        conditionsLegacy: java.util.List<java.lang.String | string> | Array<java.lang.String | string>
                        // @ts-ignore
                        killMessages: java.util.List<java.lang.String | string> | Array<java.lang.String | string>
                        // @ts-ignore
                        public getInternalName(): string
                        // @ts-ignore
                        public getConfig(): io.lumine.xikage.mythicmobs.io.MythicConfig
                        // @ts-ignore
                        public usable(meta: io.lumine.xikage.mythicmobs.skills.SkillMetadata, trigger: io.lumine.xikage.mythicmobs.skills.SkillTrigger): boolean
                        // @ts-ignore
                        public execute(basetrigger: io.lumine.xikage.mythicmobs.skills.SkillTrigger, caster: io.lumine.xikage.mythicmobs.skills.SkillCaster, trigger: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, origin: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, eTargets: java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>, lTargets: java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractLocation>, power: number /*float*/): void
                        // @ts-ignore
                        public execute(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): void
                        // @ts-ignore
                        public static execute(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, skillqueue: java.util.Queue<io.lumine.xikage.mythicmobs.skills.SkillMechanic>): void
                        // @ts-ignore
                        public isUsable(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): boolean
                        // @ts-ignore
                        public checkLegacyConditions(skillCaster: io.lumine.xikage.mythicmobs.skills.SkillCaster): boolean
                        // @ts-ignore
                        public getFile(): string
                    }
                }
            }
        }
    }
}
