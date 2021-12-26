declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class SummonMechanic extends io.lumine.xikage.mythicmobs.skills.SkillMechanic implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill, io.lumine.xikage.mythicmobs.skills.ITargetedLocationSkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            mm: io.lumine.xikage.mythicmobs.mobs.MythicMob
                            // @ts-ignore
                            me: io.lumine.xikage.mythicmobs.mobs.entities.MythicEntity
                            // @ts-ignore
                            strType: java.lang.String | string
                            // @ts-ignore
                            amount: number /*int*/
                            // @ts-ignore
                            noise: number /*int*/
                            // @ts-ignore
                            yNoise: number /*int*/
                            // @ts-ignore
                            summonerIsOwner: boolean
                            // @ts-ignore
                            summonerIsParent: boolean
                            // @ts-ignore
                            yUpOnly: boolean
                            // @ts-ignore
                            onSurface: boolean
                            // @ts-ignore
                            inheritFaction: boolean
                            // @ts-ignore
                            inheritThreatTable: boolean
                            // @ts-ignore
                            copyThreatTable: boolean
                            // @ts-ignore
                            public castAtLocation(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                        }
                    }
                }
            }
        }
    }
}
