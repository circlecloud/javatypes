declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace targeters {
                        // @ts-ignore
                        class LivingEntitiesInLineTargeter extends io.lumine.xikage.mythicmobs.skills.targeters.IEntitySelector {
                            // @ts-ignore
                            constructor(mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            radius: number /*float*/
                            // @ts-ignore
                            radiusSq: number /*float*/
                            // @ts-ignore
                            fromOrigin: boolean
                            // @ts-ignore
                            public getEntities(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                        }
                    }
                }
            }
        }
    }
}
