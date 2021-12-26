declare namespace io {
    namespace lumine {
        namespace utils {
            namespace serialize {
                // @ts-ignore
                class InventorySerialization extends java.lang.Object {
                    // @ts-ignore
                    public static encodeItemStack(item: ItemStack): number /*byte*/[]
                    // @ts-ignore
                    public static encodeItemStackToString(item: ItemStack): string
                    // @ts-ignore
                    public static decodeItemStack(buf: number /*byte*/[]): ItemStack
                    // @ts-ignore
                    public static decodeItemStack(data: java.lang.String | string): ItemStack
                    // @ts-ignore
                    public static encodeItemStacks(items: ItemStack[]): number /*byte*/[]
                    // @ts-ignore
                    public static encodeItemStacksToString(items: ItemStack[]): string
                    // @ts-ignore
                    public static decodeItemStacks(buf: number /*byte*/[]): ItemStack[]
                    // @ts-ignore
                    public static decodeItemStacks(data: java.lang.String | string): ItemStack[]
                    // @ts-ignore
                    public static encodeInventory(inventory: Inventory): number /*byte*/[]
                    // @ts-ignore
                    public static encodeInventoryToString(inventory: Inventory): string
                    // @ts-ignore
                    public static decodeInventory(buf: number /*byte*/[], title: java.lang.String | string): Inventory
                    // @ts-ignore
                    public static decodeInventory(data: java.lang.String | string, title: java.lang.String | string): Inventory
                }
            }
        }
    }
}
