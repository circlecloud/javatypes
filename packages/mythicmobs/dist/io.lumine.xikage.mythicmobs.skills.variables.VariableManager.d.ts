declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace variables {
                        // @ts-ignore
                        class VariableManager extends io.lumine.utils.serialization.SerializingModule implements io.lumine.utils.terminable.Terminable {
                            // @ts-ignore
                            constructor(core: io.lumine.xikage.mythicmobs.MythicMobs)
                            // @ts-ignore
                            readonly core: io.lumine.xikage.mythicmobs.MythicMobs
                            // @ts-ignore
                            public terminate(): boolean
                            // @ts-ignore
                            public getRegistry(scope: io.lumine.xikage.mythicmobs.skills.variables.VariableScope, meta: io.lumine.xikage.mythicmobs.skills.SkillMetadata, entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): io.lumine.xikage.mythicmobs.skills.variables.VariableRegistry
                            // @ts-ignore
                            public getRegistry(scope: io.lumine.xikage.mythicmobs.skills.variables.VariableScope, entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): io.lumine.xikage.mythicmobs.skills.variables.VariableRegistry
                            // @ts-ignore
                            public getRegistry(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): io.lumine.xikage.mythicmobs.skills.variables.VariableRegistry
                            // @ts-ignore
                            public getRegistry(scope: io.lumine.xikage.mythicmobs.skills.variables.VariableScope, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): io.lumine.xikage.mythicmobs.skills.variables.VariableRegistry
                            // @ts-ignore
                            public getGlobalRegistry(): io.lumine.utils.serialization.WrappedJsonFile<io.lumine.xikage.mythicmobs.skills.variables.VariableRegistry>
                        }
                    }
                }
            }
        }
    }
}
