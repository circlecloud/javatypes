declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace database {
                // @ts-ignore
                interface IDataBase {
                    // @ts-ignore
                    getData(p0: Player, p1: java.lang.String | string, p2: eos.moe.dragoncore.database.IDataBase.Callback<ItemStack>): void
                    // @ts-ignore
                    setData(p0: Player, p1: java.lang.String | string, p2: ItemStack, p3: eos.moe.dragoncore.database.IDataBase.Callback<ItemStack>): void
                    // @ts-ignore
                    getAllData(p0: Player, p1: eos.moe.dragoncore.database.IDataBase.Callback<java.util.Map<java.lang.String | string, ItemStack>>): void
                    // @ts-ignore
                    close(): void
                }
            }
        }
    }
}
