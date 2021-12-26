declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    // @ts-ignore
                    class SkillCondition extends java.lang.Object {
                        // @ts-ignore
                        constructor(line: java.lang.String | string)
                        // @ts-ignore
                        conditionVar: java.lang.String | string
                        // @ts-ignore
                        ACTION: io.lumine.xikage.mythicmobs.skills.conditions.ConditionAction
                        // @ts-ignore
                        actionVar: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                        // @ts-ignore
                        public static getPlugin(): io.lumine.xikage.mythicmobs.MythicMobs
                        // @ts-ignore
                        public evaluateEntity(t: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                        // @ts-ignore
                        public evaluateCaster(meta: io.lumine.xikage.mythicmobs.skills.SkillMetadata): boolean
                        // @ts-ignore
                        public evaluateTrigger(meta: io.lumine.xikage.mythicmobs.skills.SkillMetadata): boolean
                        // @ts-ignore
                        public evaluateTargets(meta: io.lumine.xikage.mythicmobs.skills.SkillMetadata): boolean
                        // @ts-ignore
                        public evaluateRandomSpawnPoint(rsp: io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint): boolean
                        // @ts-ignore
                        public evaluateDropper(meta: io.lumine.xikage.mythicmobs.drops.DropMetadata): boolean
                        // @ts-ignore
                        public evaluateDropCause(meta: io.lumine.xikage.mythicmobs.drops.DropMetadata): boolean
                        // @ts-ignore
                        public handleOutcome(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, outcome: boolean): boolean
                        // @ts-ignore
                        public handleOutcome(meta: io.lumine.xikage.mythicmobs.skills.SkillMetadata, outcome: boolean): boolean
                        // @ts-ignore
                        public handleOutcome(rsp: io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint, outcome: boolean): boolean
                        // @ts-ignore
                        public handleOutcome(meta: io.lumine.xikage.mythicmobs.drops.DropMetadata, outcome: boolean): boolean
                        // @ts-ignore
                        public setAction(action: io.lumine.xikage.mythicmobs.skills.conditions.ConditionAction): void
                        // @ts-ignore
                        public getActionVar(): string
                        // @ts-ignore
                        public static getCondition(condition: java.lang.String | string): io.lumine.xikage.mythicmobs.skills.SkillCondition
                    }
                }
            }
        }
    }
}
