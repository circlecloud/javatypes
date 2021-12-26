declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace damage {
                        // @ts-ignore
                        abstract class DamagingMechanic extends io.lumine.xikage.mythicmobs.skills.SkillMechanic {
                            // @ts-ignore
                            constructor(line: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            static noloop: boolean
                            // @ts-ignore
                            ignoresArmor: boolean
                            // @ts-ignore
                            preventImmunity: boolean
                            // @ts-ignore
                            preventKnockback: boolean
                            // @ts-ignore
                            doDamage(caster: io.lumine.xikage.mythicmobs.skills.SkillCaster, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, amount: number /*double*/): void
                        }
                    }
                }
            }
        }
    }
}
