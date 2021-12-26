declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace auras {
                        // @ts-ignore
                        class AuraRegistry extends java.lang.Object {
                            // @ts-ignore
                            constructor(uuid: java.util.UUID)
                            // @ts-ignore
                            public registerAura(name: java.lang.String | string, buff: io.lumine.xikage.mythicmobs.skills.auras.Aura.AuraTracker): void
                            // @ts-ignore
                            public mergeAura(name: java.lang.String | string, buff: io.lumine.xikage.mythicmobs.skills.auras.Aura.AuraTracker, sameCasterOnly: boolean): boolean
                            // @ts-ignore
                            public unregisterAura(name: java.lang.String | string, buff: io.lumine.xikage.mythicmobs.skills.auras.Aura.AuraTracker): void
                            // @ts-ignore
                            public hasAura(name: java.lang.String | string): boolean
                            // @ts-ignore
                            public getStacks(name: java.lang.String | string): number /*int*/
                            // @ts-ignore
                            public removeStack(buffName: java.lang.String | string, a: number /*int*/): void
                            // @ts-ignore
                            public removeAll(buffName: java.lang.String | string): void
                        }
                    }
                }
            }
        }
    }
}
