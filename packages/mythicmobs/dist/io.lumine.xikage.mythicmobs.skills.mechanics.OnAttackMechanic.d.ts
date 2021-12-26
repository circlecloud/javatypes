declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class OnAttackMechanic extends io.lumine.xikage.mythicmobs.skills.auras.Aura implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            onAttackSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onAttackSkillName: java.lang.String | string
                            // @ts-ignore
                            cancelDamage: boolean
                            // @ts-ignore
                            modDamage: boolean
                            // @ts-ignore
                            damageAdd: number /*double*/
                            // @ts-ignore
                            damageMult: number /*double*/
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            calculateDamage(damage: number /*double*/): number /*double*/
                        }
                    }
                }
            }
        }
    }
}
