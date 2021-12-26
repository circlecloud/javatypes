declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class TeleportToMechanic extends io.lumine.xikage.mythicmobs.skills.SkillMechanic implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill {
                            // @ts-ignore
                            constructor(line: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            world: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                            // @ts-ignore
                            coords: java.lang.String | string
                            // @ts-ignore
                            x: number /*double*/
                            // @ts-ignore
                            y: number /*double*/
                            // @ts-ignore
                            z: number /*double*/
                            // @ts-ignore
                            yaw: number /*double*/
                            // @ts-ignore
                            pitch: number /*double*/
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                        }
                    }
                }
            }
        }
    }
}
