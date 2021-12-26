declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class PrisonMechanic extends io.lumine.xikage.mythicmobs.skills.SkillMechanic implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill {
                            // @ts-ignore
                            constructor(line: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            duration: number /*int*/
                            // @ts-ignore
                            breakable: boolean
                            // @ts-ignore
                            material: Material
                            // @ts-ignore
                            materialData: number /*byte*/
                            // @ts-ignore
                            blocks: java.util.HashSet<Block>
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            public onBlockBreak(event: BlockBreakEvent): void
                        }
                    }
                }
            }
        }
    }
}
