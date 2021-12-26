declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace items {
                    // @ts-ignore
                    class ItemManager extends java.lang.Object {
                        // @ts-ignore
                        constructor(core: io.lumine.xikage.mythicmobs.MythicMobs)
                        // @ts-ignore
                        public loadItems(): void
                        // @ts-ignore
                        public getItems(): Array<io.lumine.xikage.mythicmobs.items.MythicItem>
                        // @ts-ignore
                        public getItemNames(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getItem(name: java.lang.String | string): java.util.Optional<io.lumine.xikage.mythicmobs.items.MythicItem>
                        // @ts-ignore
                        public getItemStack(name: java.lang.String | string): ItemStack
                        // @ts-ignore
                        public registerItem(internalName: java.lang.String | string, item: io.lumine.xikage.mythicmobs.items.MythicItem): boolean
                        // @ts-ignore
                        public getItemAttribute(input: java.lang.String | string): string
                    }
                }
            }
        }
    }
}
