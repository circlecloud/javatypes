declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace targeters {
                        // @ts-ignore
                        class ConeTargeter extends io.lumine.xikage.mythicmobs.skills.targeters.ILocationSelector {
                            // @ts-ignore
                            constructor(mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            angle: number /*double*/
                            // @ts-ignore
                            range: number /*double*/
                            // @ts-ignore
                            points: number /*int*/
                            // @ts-ignore
                            rotation: number /*double*/
                            // @ts-ignore
                            yOffset: number /*double*/
                            // @ts-ignore
                            cos: number /*double*/
                            // @ts-ignore
                            cosSq: number /*double*/
                            // @ts-ignore
                            public getLocations(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractLocation>
                        }
                    }
                }
            }
        }
    }
}
