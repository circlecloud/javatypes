declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace drops {
                    namespace droppables {
                        // @ts-ignore
                        class CommandDrop extends io.lumine.xikage.mythicmobs.drops.Drop implements io.lumine.xikage.mythicmobs.drops.IIntangibleDrop {
                            // @ts-ignore
                            constructor(line: java.lang.String | string, config: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            constructor(line: java.lang.String | string, config: io.lumine.xikage.mythicmobs.io.MythicLineConfig, amount: number /*double*/)
                            // @ts-ignore
                            command: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                            // @ts-ignore
                            asCaster: boolean
                            // @ts-ignore
                            asOP: boolean
                            // @ts-ignore
                            public giveDrop(target: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer, data: io.lumine.xikage.mythicmobs.drops.DropMetadata): void
                        }
                    }
                }
            }
        }
    }
}
