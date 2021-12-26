declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace database {
                // @ts-ignore
                class MySqlRepository extends java.lang.Object implements eos.moe.dragoncore.database.IDataBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getData(player: Player, identifier: java.lang.String | string, callback: eos.moe.dragoncore.database.IDataBase.Callback<ItemStack>): void
                    // @ts-ignore
                    public setData(player: Player, identifier: java.lang.String | string, itemStack: ItemStack, callback: eos.moe.dragoncore.database.IDataBase.Callback<ItemStack>): void
                    // @ts-ignore
                    public getAllData(player: Player, callback: eos.moe.dragoncore.database.IDataBase.Callback<java.util.Map<java.lang.String | string, ItemStack>>): void
                    // @ts-ignore
                    public close(): void
                }
            }
        }
    }
}
