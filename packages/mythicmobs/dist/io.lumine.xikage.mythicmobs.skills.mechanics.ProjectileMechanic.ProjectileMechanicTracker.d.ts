declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        namespace ProjectileMechanic {
                            // @ts-ignore
                            class ProjectileMechanicTracker extends io.lumine.xikage.mythicmobs.skills.projectiles.Projectile.ProjectileTracker {
                                // @ts-ignore
                                constructor(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation)
                                // @ts-ignore
                                public projectileStart(): void
                                // @ts-ignore
                                public setVelocity(value: number /*double*/): void
                                // @ts-ignore
                                public modifyVelocity(v: number /*double*/): void
                                // @ts-ignore
                                public setGravity(p: number /*float*/): void
                                // @ts-ignore
                                public modifyGravity(p: number /*float*/): void
                                // @ts-ignore
                                public projectileTick(): void
                                // @ts-ignore
                                public setCancelled(): void
                                // @ts-ignore
                                public getCancelled(): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
