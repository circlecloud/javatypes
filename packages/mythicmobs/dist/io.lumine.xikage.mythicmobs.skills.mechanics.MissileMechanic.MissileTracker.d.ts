declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        namespace MissileMechanic {
                            // @ts-ignore
                            class MissileTracker extends io.lumine.xikage.mythicmobs.skills.projectiles.Projectile.ProjectileTracker {
                                // @ts-ignore
                                constructor(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity)
                                // @ts-ignore
                                public projectileStart(): void
                                // @ts-ignore
                                public projectileTick(): void
                                // @ts-ignore
                                public setVelocity(value: number /*double*/): void
                                // @ts-ignore
                                public modifyVelocity(v: number /*double*/): void
                                // @ts-ignore
                                public setInertia(p: number /*float*/): void
                                // @ts-ignore
                                public modifyInertia(p: number /*float*/): void
                                // @ts-ignore
                                public doHit(targets: java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>): void
                            }
                        }
                    }
                }
            }
        }
    }
}
