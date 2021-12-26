declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class ParticleOrbitalEffect extends io.lumine.xikage.mythicmobs.skills.mechanics.ParticleEffect implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill, io.lumine.xikage.mythicmobs.skills.ITargetedLocationSkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            radius: number /*float*/
                            // @ts-ignore
                            points: number /*int*/
                            // @ts-ignore
                            interval: number /*int*/
                            // @ts-ignore
                            iterations: number /*int*/
                            // @ts-ignore
                            velocity: number /*double*/
                            // @ts-ignore
                            rotate: boolean
                            // @ts-ignore
                            reversed: boolean
                            // @ts-ignore
                            xRotation: number /*double*/
                            // @ts-ignore
                            yRotation: number /*double*/
                            // @ts-ignore
                            zRotation: number /*double*/
                            // @ts-ignore
                            angularVelocityX: number /*double*/
                            // @ts-ignore
                            angularVelocityY: number /*double*/
                            // @ts-ignore
                            angularVelocityZ: number /*double*/
                            // @ts-ignore
                            xOffset: number /*double*/
                            // @ts-ignore
                            yOffset: number /*double*/
                            // @ts-ignore
                            zOffset: number /*double*/
                            // @ts-ignore
                            public castAtLocation(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                        }
                    }
                }
            }
        }
    }
}
