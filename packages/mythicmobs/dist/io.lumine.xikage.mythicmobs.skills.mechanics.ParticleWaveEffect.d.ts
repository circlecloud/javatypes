declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class ParticleWaveEffect extends io.lumine.xikage.mythicmobs.skills.mechanics.ParticleEffect implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill, io.lumine.xikage.mythicmobs.skills.ITargetedLocationSkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            public particlesFront: number /*int*/
                            // @ts-ignore
                            public particlesBack: number /*int*/
                            // @ts-ignore
                            public rows: number /*int*/
                            // @ts-ignore
                            public lengthFront: number /*float*/
                            // @ts-ignore
                            public lengthBack: number /*float*/
                            // @ts-ignore
                            public depthFront: number /*float*/
                            // @ts-ignore
                            public heightBack: number /*float*/
                            // @ts-ignore
                            public height: number /*float*/
                            // @ts-ignore
                            public width: number /*float*/
                            // @ts-ignore
                            public distance: number /*double*/
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
