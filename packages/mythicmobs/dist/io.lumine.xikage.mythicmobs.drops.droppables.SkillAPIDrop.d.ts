declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace drops {
                    namespace droppables {
                        // @ts-ignore
                        class SkillAPIDrop extends io.lumine.xikage.mythicmobs.drops.Drop implements io.lumine.xikage.mythicmobs.drops.IIntangibleDrop, io.lumine.xikage.mythicmobs.drops.IMessagingDrop {
                            // @ts-ignore
                            constructor(line: java.lang.String | string, config: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            constructor(line: java.lang.String | string, config: io.lumine.xikage.mythicmobs.io.MythicLineConfig, amount: number /*double*/)
                            // @ts-ignore
                            public giveDrop(target: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer, metadata: io.lumine.xikage.mythicmobs.drops.DropMetadata): void
                            // @ts-ignore
                            public getRewardMessage(meta: io.lumine.xikage.mythicmobs.drops.DropMetadata, amount: number /*double*/): string
                        }
                    }
                }
            }
        }
    }
}
