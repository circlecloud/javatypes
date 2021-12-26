declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace drops {
                    namespace droppables {
                        // @ts-ignore
                        class CustomDrop extends io.lumine.xikage.mythicmobs.drops.Drop {
                            // @ts-ignore
                            constructor(drop: java.lang.String | string, line: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            readonly dropName: java.lang.String | string
                            // @ts-ignore
                            drop: io.lumine.xikage.mythicmobs.drops.Drop
                            // @ts-ignore
                            loaded: boolean
                            // @ts-ignore
                            public getConfigLine(): string
                            // @ts-ignore
                            public getDrop(): java.util.Optional<io.lumine.xikage.mythicmobs.drops.Drop>
                            // @ts-ignore
                            public getDropArgument(): string
                            // @ts-ignore
                            public rollAmount(data: io.lumine.xikage.mythicmobs.drops.DropMetadata): void
                        }
                    }
                }
            }
        }
    }
}
