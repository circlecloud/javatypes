declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    // @ts-ignore
                    abstract class AbstractSkill extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        ASYNC_SAFE: boolean
                        // @ts-ignore
                        public static cooldownTimer: number /*long*/
                        // @ts-ignore
                        uuid: java.util.UUID
                        // @ts-ignore
                        cooldown: number /*float*/
                        // @ts-ignore
                        power: number /*float*/
                        // @ts-ignore
                        powerScale: number /*float*/
                        // @ts-ignore
                        delay: number /*int*/
                        // @ts-ignore
                        repeat: number /*int*/
                        // @ts-ignore
                        repeatInterval: number /*int*/
                        // @ts-ignore
                        chance: number /*float*/
                        // @ts-ignore
                        healthMod: java.lang.String | string
                        // @ts-ignore
                        powerSplitBetweenTargets: boolean
                        // @ts-ignore
                        trigger: io.lumine.xikage.mythicmobs.skills.SkillTrigger
                        // @ts-ignore
                        sourceIsOrigin: boolean
                        // @ts-ignore
                        cooldowns: java.util.HashMap<java.util.UUID, java.lang.Long | number>
                        // @ts-ignore
                        targeter: java.util.Optional<io.lumine.xikage.mythicmobs.skills.SkillTargeter>
                        // @ts-ignore
                        target_creative: boolean
                        // @ts-ignore
                        conditions: java.util.List<io.lumine.xikage.mythicmobs.skills.SkillCondition> | Array<io.lumine.xikage.mythicmobs.skills.SkillCondition>
                        // @ts-ignore
                        conditionsTarget: java.util.List<io.lumine.xikage.mythicmobs.skills.SkillCondition> | Array<io.lumine.xikage.mythicmobs.skills.SkillCondition>
                        // @ts-ignore
                        conditionsTrigger: java.util.List<io.lumine.xikage.mythicmobs.skills.SkillCondition> | Array<io.lumine.xikage.mythicmobs.skills.SkillCondition>
                        // @ts-ignore
                        public static getPlugin(): io.lumine.xikage.mythicmobs.MythicMobs
                        // @ts-ignore
                        public onCooldown(skillCaster: io.lumine.xikage.mythicmobs.skills.SkillCaster): boolean
                        // @ts-ignore
                        public getCooldown(skillCaster: io.lumine.xikage.mythicmobs.skills.SkillCaster): number /*float*/
                        // @ts-ignore
                        public setCooldown(skillCaster: io.lumine.xikage.mythicmobs.skills.SkillCaster, cooldown: number /*float*/): void
                        // @ts-ignore
                        rollChance(): boolean
                        // @ts-ignore
                        checkHealth(skillCaster: io.lumine.xikage.mythicmobs.skills.SkillCaster): boolean
                        // @ts-ignore
                        checkSkillTrigger(trigger: io.lumine.xikage.mythicmobs.skills.SkillTrigger): boolean
                        // @ts-ignore
                        checkSkillTrigger(meta: io.lumine.xikage.mythicmobs.skills.SkillMetadata): boolean
                        // @ts-ignore
                        parseSkillTrigger(strTrigger: java.lang.String | string): io.lumine.xikage.mythicmobs.skills.SkillTrigger
                        // @ts-ignore
                        parseSkillTargeter(strTarget: java.lang.String | string): io.lumine.xikage.mythicmobs.skills.SkillTargeter
                        // @ts-ignore
                        parseSkillCondition(strCondition: java.lang.String | string): io.lumine.xikage.mythicmobs.skills.SkillCondition
                        // @ts-ignore
                        public setTargetsCreativePlayers(b: boolean): void
                        // @ts-ignore
                        public targetsCreativePlayers(): boolean
                        // @ts-ignore
                        public evaluateTargets(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): io.lumine.xikage.mythicmobs.skills.SkillMetadata
                        // @ts-ignore
                        public getTrigger(): io.lumine.xikage.mythicmobs.skills.SkillTrigger
                        // @ts-ignore
                        public getTargeter(): java.util.Optional<io.lumine.xikage.mythicmobs.skills.SkillTargeter>
                        // @ts-ignore
                        public getConditions(): Array<io.lumine.xikage.mythicmobs.skills.SkillCondition>
                        // @ts-ignore
                        public getConditionsTarget(): Array<io.lumine.xikage.mythicmobs.skills.SkillCondition>
                        // @ts-ignore
                        public getConditionsTrigger(): Array<io.lumine.xikage.mythicmobs.skills.SkillCondition>
                    }
                }
            }
        }
    }
}
