declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    // @ts-ignore
                    class SkillMechanic extends io.lumine.xikage.mythicmobs.skills.AbstractSkill {
                        // @ts-ignore
                        constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig, interval: number /*int*/)
                        // @ts-ignore
                        constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                        // @ts-ignore
                        readonly config: io.lumine.xikage.mythicmobs.io.MythicLineConfig
                        // @ts-ignore
                        interval: number /*int*/
                        // @ts-ignore
                        clock: number /*long*/
                        // @ts-ignore
                        line: java.lang.String | string
                        // @ts-ignore
                        forceSync: boolean
                        // @ts-ignore
                        targetIsOrigin: boolean
                        // @ts-ignore
                        originOverride: java.util.Optional<io.lumine.xikage.mythicmobs.adapters.AbstractLocation>
                        // @ts-ignore
                        public init(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig): void
                        // @ts-ignore
                        public getConfigLine(): string
                        // @ts-ignore
                        public setAsyncSafe(bool: boolean): void
                        // @ts-ignore
                        public isAsyncSafe(): boolean
                        // @ts-ignore
                        public setTimerInterval(interval: number /*int*/): void
                        // @ts-ignore
                        public getTimerInterval(): number /*int*/
                        // @ts-ignore
                        public resetClock(): void
                        // @ts-ignore
                        public tickClock(): void
                        // @ts-ignore
                        public getClock(): number /*long*/
                        // @ts-ignore
                        public usable(skillCaster: io.lumine.xikage.mythicmobs.skills.SkillCaster, trigger: io.lumine.xikage.mythicmobs.skills.SkillTrigger): boolean
                        // @ts-ignore
                        public usable(meta: io.lumine.xikage.mythicmobs.skills.SkillMetadata): boolean
                        // @ts-ignore
                        public usable(am: io.lumine.xikage.mythicmobs.skills.SkillCaster): boolean
                        // @ts-ignore
                        public execute(oData: io.lumine.xikage.mythicmobs.skills.SkillMetadata): boolean
                        // @ts-ignore
                        public executeSkills(skilltrigger: io.lumine.xikage.mythicmobs.skills.SkillTrigger, am: io.lumine.xikage.mythicmobs.mobs.ActiveMob, trigger: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, origin: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, eTargets: java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>, lTargets: java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractLocation>, power: number /*float*/): boolean
                        // @ts-ignore
                        public executeSkills(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): boolean
                        // @ts-ignore
                        static executeTargetedEntitySkill(mechanic: io.lumine.xikage.mythicmobs.skills.SkillMechanic, data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): void
                        // @ts-ignore
                        static executeTargetedLocationSkill(mechanic: io.lumine.xikage.mythicmobs.skills.SkillMechanic, data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): void
                        // @ts-ignore
                        static executeNoTargetSkill(mechanic: io.lumine.xikage.mythicmobs.skills.SkillMechanic, data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): void
                        // @ts-ignore
                        public getRunAsync(): boolean
                    }
                }
            }
        }
    }
}
