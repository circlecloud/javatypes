declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace items {
                    // @ts-ignore
                    class MythicItem extends java.lang.Object implements java.lang.Comparable<io.lumine.xikage.mythicmobs.items.MythicItem> {
                        // @ts-ignore
                        constructor(file: java.lang.String | string, internalName: java.lang.String | string, mc: io.lumine.xikage.mythicmobs.io.MythicConfig)
                        // @ts-ignore
                        public getInternalName(): string
                        // @ts-ignore
                        public getConfig(): io.lumine.xikage.mythicmobs.io.MythicConfig
                        // @ts-ignore
                        public getFile(): string
                        // @ts-ignore
                        public getDisplayName(): string
                        // @ts-ignore
                        public getLore(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getMaterial(): Material
                        // @ts-ignore
                        public getMaterialName(): string
                        // @ts-ignore
                        public getMaterialData(): number /*int*/
                        // @ts-ignore
                        public getAmount(): number /*int*/
                        // @ts-ignore
                        public generateItemStack(amount: number /*int*/): io.lumine.xikage.mythicmobs.adapters.AbstractItemStack
                        // @ts-ignore
                        public generateItemStack(amount: number /*int*/, dropper: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, trigger: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): io.lumine.xikage.mythicmobs.adapters.AbstractItemStack
                        // @ts-ignore
                        public generateItemStack(meta: io.lumine.xikage.mythicmobs.drops.DropMetadata, amount: number /*int*/): io.lumine.xikage.mythicmobs.adapters.AbstractItemStack
                        // @ts-ignore
                        public static addItemNBT(itemStack: ItemStack, baseKey: java.lang.String | string, pairs: java.util.Map<java.lang.String | string, java.lang.String | string>): ItemStack
                        // @ts-ignore
                        public compareTo(o: io.lumine.xikage.mythicmobs.items.MythicItem): number /*int*/
                    }
                }
            }
        }
    }
}
