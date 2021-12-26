declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace drops {
                    namespace droppables {
                        // @ts-ignore
                        class ItemDrop extends io.lumine.xikage.mythicmobs.drops.Drop implements io.lumine.xikage.mythicmobs.drops.IItemDrop {
                            // @ts-ignore
                            constructor(line: java.lang.String | string, config: io.lumine.xikage.mythicmobs.io.MythicLineConfig, item: java.lang.String | string)
                            // @ts-ignore
                            constructor(line: java.lang.String | string, config: io.lumine.xikage.mythicmobs.io.MythicLineConfig, item: io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitItemStack)
                            // @ts-ignore
                            constructor(line: java.lang.String | string, config: io.lumine.xikage.mythicmobs.io.MythicLineConfig, item: io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitItemStack, amount: io.lumine.xikage.mythicmobs.util.types.RandomDouble)
                            // @ts-ignore
                            public getDrop(metadata: io.lumine.xikage.mythicmobs.drops.DropMetadata): io.lumine.xikage.mythicmobs.adapters.AbstractItemStack
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
