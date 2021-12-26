declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class ParticleAtomEffect extends io.lumine.xikage.mythicmobs.skills.mechanics.ParticleEffect implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill, io.lumine.xikage.mythicmobs.skills.ITargetedLocationSkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            particleNucleus: java.lang.String | string
                            // @ts-ignore
                            particleOrbital: java.lang.String | string
                            // @ts-ignore
                            pNucleus: io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitParticle
                            // @ts-ignore
                            pNucleusData: java.lang.Object | any
                            // @ts-ignore
                            radiusN: number /*float*/
                            // @ts-ignore
                            radius: number /*int*/
                            // @ts-ignore
                            amountN: number /*int*/
                            // @ts-ignore
                            amountO: number /*int*/
                            // @ts-ignore
                            orbitals: number /*int*/
                            // @ts-ignore
                            rotation: number /*int*/
                            // @ts-ignore
                            interval: number /*int*/
                            // @ts-ignore
                            iterations: number /*int*/
                            // @ts-ignore
                            velocity: number /*double*/
                            // @ts-ignore
                            angularVelocity: number /*double*/
                            // @ts-ignore
                            public castAtLocation(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            playNucleusParticleEffect(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                            // @ts-ignore
                            playColoredNucleusParticleEffect(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                        }
                    }
                }
            }
        }
    }
}
