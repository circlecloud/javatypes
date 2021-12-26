declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class VolleyMechanic extends io.lumine.xikage.mythicmobs.skills.mechanics.ShootMechanic implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill, io.lumine.xikage.mythicmobs.skills.ITargetedLocationSkill {
                            // @ts-ignore
                            constructor(line: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            type: io.lumine.xikage.mythicmobs.skills.mechanics.VolleyMechanic.VolleyType
                            // @ts-ignore
                            amount: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderInt
                            // @ts-ignore
                            radius: number /*double*/
                            // @ts-ignore
                            yOffset: number /*double*/
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
