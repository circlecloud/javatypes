declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace targeters {
                        // @ts-ignore
                        class LineTargeter extends io.lumine.xikage.mythicmobs.skills.targeters.ILocationSelector {
                            // @ts-ignore
                            constructor(mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            radius: number /*float*/
                            // @ts-ignore
                            radiusSq: number /*float*/
                            // @ts-ignore
                            fromOrigin: boolean
                            // @ts-ignore
                            public getLocations(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractLocation>
                        }
                    }
                }
            }
        }
    }
}
