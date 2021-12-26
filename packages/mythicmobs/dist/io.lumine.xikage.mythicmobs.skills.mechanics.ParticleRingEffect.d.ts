declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class ParticleRingEffect extends io.lumine.xikage.mythicmobs.skills.mechanics.ParticleEffect implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill, io.lumine.xikage.mythicmobs.skills.ITargetedLocationSkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            public castAtLocation(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            playParticleRingEffect(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, t: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                            // @ts-ignore
                            playDirectionalParticleEffect(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, origin: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, spawn: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                        }
                    }
                }
            }
        }
    }
}
