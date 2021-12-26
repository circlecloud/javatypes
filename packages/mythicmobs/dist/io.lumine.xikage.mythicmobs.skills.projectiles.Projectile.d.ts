declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace projectiles {
                        // @ts-ignore
                        abstract class Projectile extends io.lumine.xikage.mythicmobs.skills.SkillMechanic {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            public static readonly BULLET_ENTITIES: java.util.Set<io.lumine.xikage.mythicmobs.adapters.AbstractEntity> | Array<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                            // @ts-ignore
                            onTickSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onHitSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onEndSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onStartSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onTickSkillName: java.lang.String | string
                            // @ts-ignore
                            onHitSkillName: java.lang.String | string
                            // @ts-ignore
                            onEndSkillName: java.lang.String | string
                            // @ts-ignore
                            onStartSkillName: java.lang.String | string
                            // @ts-ignore
                            type: io.lumine.xikage.mythicmobs.skills.projectiles.Projectile.ProjectileType
                            // @ts-ignore
                            fromOrigin: boolean
                            // @ts-ignore
                            bulletType: io.lumine.xikage.mythicmobs.skills.projectiles.Projectile.BulletType
                            // @ts-ignore
                            bulletMaterial: Material
                            // @ts-ignore
                            bulletProjectile: io.lumine.xikage.mythicmobs.skills.projectiles.Projectile
                            // @ts-ignore
                            bulletMob: io.lumine.xikage.mythicmobs.mobs.MythicMob
                            // @ts-ignore
                            bulletSpin: number /*float*/
                            // @ts-ignore
                            duration: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderInt
                            // @ts-ignore
                            tickInterval: number /*int*/
                            // @ts-ignore
                            ticksPerSecond: number /*float*/
                            // @ts-ignore
                            hitRadius: number /*float*/
                            // @ts-ignore
                            verticalHitRadius: number /*float*/
                            // @ts-ignore
                            maxDistanceSquared: number /*float*/
                            // @ts-ignore
                            startYOffset: number /*float*/
                            // @ts-ignore
                            startForwardOffset: number /*float*/
                            // @ts-ignore
                            startSideOffset: number /*float*/
                            // @ts-ignore
                            targetYOffset: number /*float*/
                            // @ts-ignore
                            projectileVelocity: number /*float*/
                            // @ts-ignore
                            projectileVelocityVertOffset: number /*float*/
                            // @ts-ignore
                            projectileVelocityHorizOffset: number /*float*/
                            // @ts-ignore
                            projectileVelocityAccuracy: number /*float*/
                            // @ts-ignore
                            projectileVelocityVertNoise: number /*float*/
                            // @ts-ignore
                            projectileVelocityHorizNoise: number /*float*/
                            // @ts-ignore
                            projectileVelocityVertNoiseBase: number /*float*/
                            // @ts-ignore
                            projectileVelocityHorizNoiseBase: number /*float*/
                            // @ts-ignore
                            stopOnHitEntity: boolean
                            // @ts-ignore
                            stopOnHitGround: boolean
                            // @ts-ignore
                            powerAffectsVelocity: boolean
                            // @ts-ignore
                            powerAffectsRange: boolean
                            // @ts-ignore
                            hitSelf: boolean
                            // @ts-ignore
                            hitTarget: boolean
                            // @ts-ignore
                            hitPlayers: boolean
                            // @ts-ignore
                            hitNonPlayers: boolean
                            // @ts-ignore
                            hitTargetOnly: boolean
                        }
                    }
                }
            }
        }
    }
}
