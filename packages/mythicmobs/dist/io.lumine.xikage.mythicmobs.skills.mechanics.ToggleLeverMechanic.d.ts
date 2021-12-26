declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class ToggleLeverMechanic extends io.lumine.xikage.mythicmobs.skills.SkillMechanic implements io.lumine.xikage.mythicmobs.skills.ITargetedLocationSkill, io.lumine.xikage.mythicmobs.skills.INoTargetSkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            x: number /*int*/
                            // @ts-ignore
                            y: number /*int*/
                            // @ts-ignore
                            z: number /*int*/
                            // @ts-ignore
                            ticks: number /*int*/
                            // @ts-ignore
                            public cast(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): boolean
                            // @ts-ignore
                            public castAtLocation(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                        }
                    }
                }
            }
        }
    }
}
