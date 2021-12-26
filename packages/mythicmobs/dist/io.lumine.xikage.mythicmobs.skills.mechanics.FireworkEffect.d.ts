declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class FireworkEffect extends io.lumine.xikage.mythicmobs.skills.SkillMechanic implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill, io.lumine.xikage.mythicmobs.skills.ITargetedLocationSkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            type: number /*int*/
                            // @ts-ignore
                            flightDuration: number /*int*/
                            // @ts-ignore
                            colors: number /*int*/[]
                            // @ts-ignore
                            fadeColors: number /*int*/[]
                            // @ts-ignore
                            flicker: boolean
                            // @ts-ignore
                            trail: boolean
                            // @ts-ignore
                            public castAtLocation(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            playEffect(l: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                        }
                    }
                }
            }
        }
    }
}
