declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace auras {
                        // @ts-ignore
                        class AuraManager extends java.lang.Object {
                            // @ts-ignore
                            constructor(core: io.lumine.xikage.mythicmobs.MythicMobs, skillManager: io.lumine.xikage.mythicmobs.skills.SkillManager)
                            // @ts-ignore
                            public shutdown(): void
                            // @ts-ignore
                            public getAuraRegistry(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): io.lumine.xikage.mythicmobs.skills.auras.AuraRegistry
                            // @ts-ignore
                            public getAuraRegistry(uuid: java.util.UUID): io.lumine.xikage.mythicmobs.skills.auras.AuraRegistry
                            // @ts-ignore
                            public getHasAura(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, name: java.lang.String | string): boolean
                            // @ts-ignore
                            public getAuraStacks(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, name: java.lang.String | string): number /*int*/
                            // @ts-ignore
                            public removeAuraStacks(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, buffName: java.lang.String | string, a: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
