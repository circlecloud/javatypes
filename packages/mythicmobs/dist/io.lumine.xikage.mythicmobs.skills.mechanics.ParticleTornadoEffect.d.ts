declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class ParticleTornadoEffect extends io.lumine.xikage.mythicmobs.skills.mechanics.ParticleEffect implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill, io.lumine.xikage.mythicmobs.skills.ITargetedLocationSkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            public strCloudParticle: java.lang.String | string
                            // @ts-ignore
                            cloudParticle: io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitParticle
                            // @ts-ignore
                            cloudParticleData: java.lang.Object | any
                            // @ts-ignore
                            public cloudSize: number /*float*/
                            // @ts-ignore
                            public particleSpeedRamp: number /*float*/
                            // @ts-ignore
                            public cloudAmount: number /*int*/
                            // @ts-ignore
                            public yOffset: number /*double*/
                            // @ts-ignore
                            public tornadoHeight: number /*float*/
                            // @ts-ignore
                            public maxTornadoRadius: number /*float*/
                            // @ts-ignore
                            public showCloud: boolean
                            // @ts-ignore
                            public showTornado: boolean
                            // @ts-ignore
                            public distance: number /*double*/
                            // @ts-ignore
                            public castAtLocation(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            public createCircle(y: number /*double*/, radius: number /*double*/, rotation: number /*double*/): java.util.ArrayList<io.lumine.xikage.mythicmobs.adapters.AbstractVector>
                        }
                    }
                }
            }
        }
    }
}
