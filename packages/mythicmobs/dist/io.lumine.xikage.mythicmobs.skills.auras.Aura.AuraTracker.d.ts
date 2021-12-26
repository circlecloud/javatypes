declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace auras {
                        namespace Aura {
                            // @ts-ignore
                            abstract class AuraTracker extends java.lang.Object implements io.lumine.utils.terminable.Terminable, java.lang.Runnable, io.lumine.xikage.mythicmobs.skills.IParentSkill {
                                // @ts-ignore
                                constructor(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata)
                                // @ts-ignore
                                constructor(caster: io.lumine.xikage.mythicmobs.skills.SkillCaster, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, data: io.lumine.xikage.mythicmobs.skills.SkillMetadata)
                                // @ts-ignore
                                constructor(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, data: io.lumine.xikage.mythicmobs.skills.SkillMetadata)
                                // @ts-ignore
                                constructor(caster: io.lumine.xikage.mythicmobs.skills.SkillCaster, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, data: io.lumine.xikage.mythicmobs.skills.SkillMetadata)
                                // @ts-ignore
                                constructor(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, data: io.lumine.xikage.mythicmobs.skills.SkillMetadata)
                                // @ts-ignore
                                readonly components: io.lumine.utils.terminable.TerminableRegistry
                                // @ts-ignore
                                skillMetadata: io.lumine.xikage.mythicmobs.skills.SkillMetadata
                                // @ts-ignore
                                entity: java.util.Optional<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                                // @ts-ignore
                                location: java.util.Optional<io.lumine.xikage.mythicmobs.adapters.AbstractLocation>
                                // @ts-ignore
                                stacks: number /*int*/
                                // @ts-ignore
                                chargesRemaining: number /*int*/
                                // @ts-ignore
                                ticksRemaining: number /*int*/
                                // @ts-ignore
                                hasEnded: boolean
                                // @ts-ignore
                                public registerAuraComponent(component: io.lumine.utils.terminable.Terminable): void
                                // @ts-ignore
                                public getCasterUUID(): java.util.UUID
                                // @ts-ignore
                                public merge(tracker: io.lumine.xikage.mythicmobs.skills.auras.Aura.AuraTracker): void
                                // @ts-ignore
                                public executeAuraSkill(skill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>, data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): boolean
                                // @ts-ignore
                                public executeAuraSkill(skill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>, data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, atCaster: boolean): boolean
                                // @ts-ignore
                                public start(): boolean
                                // @ts-ignore
                                public isValid(): boolean
                                // @ts-ignore
                                public run(): void
                                // @ts-ignore
                                public consumeCharge(): void
                                // @ts-ignore
                                public auraStart(): void
                                // @ts-ignore
                                public auraTick(): void
                                // @ts-ignore
                                public auraStop(): void
                                // @ts-ignore
                                public terminateFromRegistry(): void
                                // @ts-ignore
                                public terminate(): boolean
                                // @ts-ignore
                                public setCancelled(): void
                                // @ts-ignore
                                public getCancelled(): boolean
                                // @ts-ignore
                                public getStacks(): number /*int*/
                                // @ts-ignore
                                public getChargesRemaining(): number /*int*/
                                // @ts-ignore
                                public getTicksRemaining(): number /*int*/
                            }
                        }
                    }
                }
            }
        }
    }
}
