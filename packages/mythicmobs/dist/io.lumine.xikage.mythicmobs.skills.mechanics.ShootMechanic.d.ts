declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class ShootMechanic extends io.lumine.xikage.mythicmobs.skills.SkillMechanic implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill, io.lumine.xikage.mythicmobs.skills.ITargetedLocationSkill {
                            // @ts-ignore
                            constructor(line: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            projectileType: io.lumine.xikage.mythicmobs.skills.mechanics.ShootMechanic.ProjectileType
                            // @ts-ignore
                            damage: number /*int*/
                            // @ts-ignore
                            maxdistance: number /*int*/
                            // @ts-ignore
                            velocity: number /*float*/
                            // @ts-ignore
                            hSpread: number /*double*/
                            // @ts-ignore
                            vSpread: number /*double*/
                            // @ts-ignore
                            powerAffectsVelocity: boolean
                            // @ts-ignore
                            startYOffset: number /*float*/
                            // @ts-ignore
                            projectileClass: java.lang.Class<any>
                            // @ts-ignore
                            projectileItem: ItemStack
                            // @ts-ignore
                            onTickSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onHitSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onEndSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            tickInterval: number /*int*/
                            // @ts-ignore
                            onTickSkillName: java.lang.String | string
                            // @ts-ignore
                            onHitSkillName: java.lang.String | string
                            // @ts-ignore
                            onEndSkillName: java.lang.String | string
                            // @ts-ignore
                            onStartSkillName: java.lang.String | string
                            // @ts-ignore
                            bounce: boolean
                            // @ts-ignore
                            gravity: boolean
                            // @ts-ignore
                            calculateFiringAngle: boolean
                            // @ts-ignore
                            fromOrigin: boolean
                            // @ts-ignore
                            disguise: java.util.Optional<java.lang.String | string>
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            public castAtLocation(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public shoot(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                        }
                    }
                }
            }
        }
    }
}
