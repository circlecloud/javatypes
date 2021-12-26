declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace projectiles {
                        namespace Projectile {
                            // @ts-ignore
                            abstract class ProjectileTracker extends java.lang.Object implements io.lumine.xikage.mythicmobs.skills.IParentSkill, java.lang.Runnable, io.lumine.utils.terminable.Terminable {
                                // @ts-ignore
                                constructor(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation)
                                // @ts-ignore
                                readonly components: io.lumine.utils.terminable.TerminableRegistry
                                // @ts-ignore
                                data: io.lumine.xikage.mythicmobs.skills.SkillMetadata
                                // @ts-ignore
                                chargesRemaining: number /*int*/
                                // @ts-ignore
                                ticksRemaining: number /*int*/
                                // @ts-ignore
                                bullet: io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                                // @ts-ignore
                                power: number /*float*/
                                // @ts-ignore
                                startLocation: io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                                // @ts-ignore
                                previousLocation: io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                                // @ts-ignore
                                currentLocation: io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                                // @ts-ignore
                                currentVelocity: io.lumine.xikage.mythicmobs.adapters.AbstractVector
                                // @ts-ignore
                                inRange: java.util.Set<io.lumine.xikage.mythicmobs.adapters.AbstractEntity> | Array<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                                // @ts-ignore
                                targets: java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                                // @ts-ignore
                                immune: java.util.HashMap<io.lumine.xikage.mythicmobs.adapters.AbstractEntity, java.lang.Long | number>
                                // @ts-ignore
                                public executeProjectileSkill(skill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>, data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, atCaster: boolean): boolean
                                // @ts-ignore
                                public setPower(p: number /*float*/): void
                                // @ts-ignore
                                public modifyPower(p: number /*float*/): void
                                // @ts-ignore
                                public start(): boolean
                                // @ts-ignore
                                public run(): void
                                // @ts-ignore
                                public abstract projectileStart(): void
                                // @ts-ignore
                                public abstract projectileTick(): void
                                // @ts-ignore
                                public projectileEnd(): void
                                // @ts-ignore
                                public terminate(): boolean
                                // @ts-ignore
                                public setCancelled(): void
                                // @ts-ignore
                                public getCancelled(): boolean
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
