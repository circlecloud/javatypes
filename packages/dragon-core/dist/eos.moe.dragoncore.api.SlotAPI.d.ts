declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace api {
                // @ts-ignore
                class SlotAPI extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static setSlotItem(player: Player, identifier: java.lang.String | string, itemStack: ItemStack, syncToClient: boolean): void
                    // @ts-ignore
                    public static setSlotItem(player: Player, identifier: java.lang.String | string, itemStack: ItemStack, syncToClient: boolean, callback: eos.moe.dragoncore.database.IDataBase.Callback<ItemStack>): void
                    // @ts-ignore
                    public static getSlotItem(player: Player, identifier: java.lang.String | string, callback: eos.moe.dragoncore.database.IDataBase.Callback<ItemStack>): void
                    // @ts-ignore
                    public static getAllSlotItem(player: Player, callback: eos.moe.dragoncore.database.IDataBase.Callback<java.util.Map<java.lang.String | string, ItemStack>>): void
                    // @ts-ignore
                    public static getCacheSlotItem(player: Player, identifier: java.lang.String | string): ItemStack
                    // @ts-ignore
                    public static getCacheAllSlotItem(player: Player): java.util.Map<java.lang.String | string, ItemStack>
                }
            }
        }
    }
}
