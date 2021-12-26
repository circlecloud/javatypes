declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace variables {
                        // @ts-ignore
                        class VariableMechanic extends io.lumine.xikage.mythicmobs.skills.SkillMechanic {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            key: java.lang.String | string
                            // @ts-ignore
                            scope: io.lumine.xikage.mythicmobs.skills.variables.VariableScope
                            // @ts-ignore
                            duration: number /*long*/
                            // @ts-ignore
                            public static getVariableManager(): io.lumine.xikage.mythicmobs.skills.variables.VariableManager
                            // @ts-ignore
                            handleDuration(variable: io.lumine.xikage.mythicmobs.skills.variables.Variable): void
                        }
                    }
                }
            }
        }
    }
}
