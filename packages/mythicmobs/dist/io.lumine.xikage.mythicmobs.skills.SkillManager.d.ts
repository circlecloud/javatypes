declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    // @ts-ignore
                    class SkillManager extends java.lang.Object implements io.lumine.utils.terminable.Terminable {
                        // @ts-ignore
                        constructor(core: io.lumine.xikage.mythicmobs.MythicMobs)
                        // @ts-ignore
                        readonly core: io.lumine.xikage.mythicmobs.MythicMobs
                        // @ts-ignore
                        public legacySkills: java.util.List<io.lumine.xikage.mythicmobs.legacy.LegacyMythicSkill> | Array<io.lumine.xikage.mythicmobs.legacy.LegacyMythicSkill>
                        // @ts-ignore
                        public terminate(): boolean
                        // @ts-ignore
                        public loadSkills(): void
                        // @ts-ignore
                        public runSecondPass(): void
                        // @ts-ignore
                        public queueSecondPass(r: java.lang.Runnable): void
                        // @ts-ignore
                        public queueAfterLoad(r: java.lang.Runnable): void
                        // @ts-ignore
                        public registerSkill(internalName: java.lang.String | string, skill: io.lumine.xikage.mythicmobs.skills.Skill): void
                        // @ts-ignore
                        public getSkill(internalName: java.lang.String | string): java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                        // @ts-ignore
                        public getSkillNames(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getSkills(): Array<io.lumine.xikage.mythicmobs.skills.Skill>
                        // @ts-ignore
                        public getConditions(): object
                        // @ts-ignore
                        public getMechanics(): object
                        // @ts-ignore
                        public getTargeters(): object
                        // @ts-ignore
                        public getSkillMechanic(skill: java.lang.String | string): io.lumine.xikage.mythicmobs.skills.SkillMechanic
                        // @ts-ignore
                        public runTimerSkills(timer: number /*long*/): void
                        // @ts-ignore
                        public executeMobTimerSkills(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob, timer: number /*long*/): void
                        // @ts-ignore
                        public runLegacyTimerSkills(timer: number /*long*/): void
                        // @ts-ignore
                        public getLegacySkills(): Array<io.lumine.xikage.mythicmobs.legacy.LegacyMythicSkill>
                        // @ts-ignore
                        public getAuraManager(): io.lumine.xikage.mythicmobs.skills.auras.AuraManager
                    }
                }
            }
        }
    }
}
