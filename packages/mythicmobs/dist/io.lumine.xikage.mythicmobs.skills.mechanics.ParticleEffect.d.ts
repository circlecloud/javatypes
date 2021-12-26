declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class ParticleEffect extends io.lumine.xikage.mythicmobs.skills.SkillMechanic implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill, io.lumine.xikage.mythicmobs.skills.ITargetedLocationSkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            strParticle: java.lang.String | string
                            // @ts-ignore
                            particle: io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitParticle
                            // @ts-ignore
                            particleData: java.lang.Object | any
                            // @ts-ignore
                            hSpread: number /*float*/
                            // @ts-ignore
                            vSpread: number /*float*/
                            // @ts-ignore
                            pSpeed: number /*float*/
                            // @ts-ignore
                            yOffset: number /*float*/
                            // @ts-ignore
                            startForwardOffset: number /*float*/
                            // @ts-ignore
                            startSideOffset: number /*float*/
                            // @ts-ignore
                            useEyeLocation: boolean
                            // @ts-ignore
                            amount: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderInt
                            // @ts-ignore
                            viewDistance: number /*int*/
                            // @ts-ignore
                            directional: boolean
                            // @ts-ignore
                            directionReversed: boolean
                            // @ts-ignore
                            yaw: number /*float*/
                            // @ts-ignore
                            pitch: number /*float*/
                            // @ts-ignore
                            setYaw: boolean
                            // @ts-ignore
                            setPitch: boolean
                            // @ts-ignore
                            color: java.awt.Color
                            // @ts-ignore
                            public castAtLocation(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            playParticleEffect(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                            // @ts-ignore
                            playColoredParticleEffect(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                            // @ts-ignore
                            playDirectionalParticleEffect(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, origin: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                        }
                    }
                }
            }
        }
    }
}
