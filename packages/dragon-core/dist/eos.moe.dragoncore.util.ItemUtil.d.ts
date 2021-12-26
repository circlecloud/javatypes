declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace util {
                // @ts-ignore
                class ItemUtil extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static getName(itemStack: ItemStack): string
                    // @ts-ignore
                    public static getLore(itemStack: ItemStack): Array<java.lang.String | string>
                    // @ts-ignore
                    public static toNBT(itemStack: ItemStack): NBTTagCompound
                    // @ts-ignore
                    public static itemToJson(itemStack: ItemStack): string
                    // @ts-ignore
                    public static jsonToItem(json: java.lang.String | string): ItemStack
                }
            }
        }
    }
}
