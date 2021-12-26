declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        namespace ShootMechanic {
                            // @ts-ignore
                            class ProjectileData extends java.lang.Object {
                                // @ts-ignore
                                constructor(caster: io.lumine.xikage.mythicmobs.skills.SkillCaster, damage: number /*int*/, onHitSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>, onEndSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>, power: number /*float*/)
                                // @ts-ignore
                                public getCaster(): io.lumine.xikage.mythicmobs.skills.SkillCaster
                                // @ts-ignore
                                public getDamage(): number /*int*/
                                // @ts-ignore
                                public getPower(): number /*float*/
                                // @ts-ignore
                                public executeHitSkill(projectile: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                            }
                        }
                    }
                }
            }
        }
    }
}
