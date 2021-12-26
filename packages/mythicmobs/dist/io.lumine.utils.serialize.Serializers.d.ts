declare namespace io {
    namespace lumine {
        namespace utils {
            namespace serialize {
                // @ts-ignore
                class Serializers extends java.lang.Object {
                    // @ts-ignore
                    public static serializeItemstack(item: ItemStack): JsonPrimitive
                    // @ts-ignore
                    public static deserializeItemstack(data: JsonElement): ItemStack
                    // @ts-ignore
                    public static serializeItemstacks(items: ItemStack[]): JsonPrimitive
                    // @ts-ignore
                    public static serializeInventory(inventory: Inventory): JsonPrimitive
                    // @ts-ignore
                    public static deserializeItemstacks(data: JsonElement): ItemStack[]
                    // @ts-ignore
                    public static deserializeInventory(data: JsonElement, title: java.lang.String | string): Inventory
                }
            }
        }
    }
}
