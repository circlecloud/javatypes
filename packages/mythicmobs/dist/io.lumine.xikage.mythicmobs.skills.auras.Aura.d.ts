declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace auras {
                        // @ts-ignore
                        abstract class Aura extends io.lumine.xikage.mythicmobs.skills.SkillMechanic {
                            // @ts-ignore
                            constructor(line: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            auraName: java.util.Optional<java.lang.String | string>
                            // @ts-ignore
                            charges: number /*int*/
                            // @ts-ignore
                            interval: number /*int*/
                            // @ts-ignore
                            duration: number /*int*/
                            // @ts-ignore
                            maxStacks: number /*int*/
                            // @ts-ignore
                            mergeAll: boolean
                            // @ts-ignore
                            mergeSameCaster: boolean
                            // @ts-ignore
                            overwriteAll: boolean
                            // @ts-ignore
                            overwriteCaster: boolean
                            // @ts-ignore
                            refreshDuration: boolean
                            // @ts-ignore
                            cancelOnGiveDamage: boolean
                            // @ts-ignore
                            cancelOnTakeDamage: boolean
                            // @ts-ignore
                            cancelOnDeath: boolean
                            // @ts-ignore
                            cancelOnTeleport: boolean
                            // @ts-ignore
                            cancelOnChangeWorld: boolean
                            // @ts-ignore
                            cancelOnSkillCast: boolean
                            // @ts-ignore
                            cancelOnQuit: boolean
                            // @ts-ignore
                            doEndSkillOnTerminate: boolean
                            // @ts-ignore
                            onStartSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onTickSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onEndSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onStartSkillName: java.lang.String | string
                            // @ts-ignore
                            onTickSkillName: java.lang.String | string
                            // @ts-ignore
                            onEndSkillName: java.lang.String | string
                        }
                    }
                }
            }
        }
    }
}
