declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class TotemMechanic extends io.lumine.xikage.mythicmobs.skills.SkillMechanic implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            onTickSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onHitSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onEndSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onStartSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onTickSkillName: java.lang.String | string
                            // @ts-ignore
                            onHitSkillName: java.lang.String | string
                            // @ts-ignore
                            onEndSkillName: java.lang.String | string
                            // @ts-ignore
                            onStartSkillName: java.lang.String | string
                            // @ts-ignore
                            tickInterval: number /*int*/
                            // @ts-ignore
                            ticksPerSecond: number /*float*/
                            // @ts-ignore
                            maxCharges: number /*int*/
                            // @ts-ignore
                            hitRadius: number /*float*/
                            // @ts-ignore
                            verticalHitRadius: number /*float*/
                            // @ts-ignore
                            duration: number /*float*/
                            // @ts-ignore
                            YOffset: number /*float*/
                            // @ts-ignore
                            hitTarget: boolean
                            // @ts-ignore
                            hitPlayers: boolean
                            // @ts-ignore
                            hitNonPlayers: boolean
                            // @ts-ignore
                            hitTargetOnly: boolean
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                        }
                    }
                }
            }
        }
    }
}
