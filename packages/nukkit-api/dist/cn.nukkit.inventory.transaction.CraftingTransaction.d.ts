declare namespace cn {
    namespace nukkit {
        namespace inventory {
            namespace transaction {
                /**
                 * @author CreeperFace
                 */
                // @ts-ignore
                class CraftingTransaction extends cn.nukkit.inventory.transaction.InventoryTransaction {
                    // @ts-ignore
                    constructor(source: cn.nukkit.Player, actions: java.util.List<cn.nukkit.inventory.transaction.action.InventoryAction> | Array<cn.nukkit.inventory.transaction.action.InventoryAction>)
                    // @ts-ignore
                    gridSize: number /*int*/
                    // @ts-ignore
                    inputs: cn.nukkit.item.Item[][]
                    // @ts-ignore
                    secondaryOutputs: cn.nukkit.item.Item[][]
                    // @ts-ignore
                    primaryOutput: cn.nukkit.item.Item
                    // @ts-ignore
                    recipe: cn.nukkit.inventory.CraftingRecipe
                    // @ts-ignore
                    public setInput(index: number /*int*/, item: cn.nukkit.item.Item): void
                    // @ts-ignore
                    public getInputMap(): cn.nukkit.item.Item[][]
                    // @ts-ignore
                    public setExtraOutput(index: number /*int*/, item: cn.nukkit.item.Item): void
                    // @ts-ignore
                    public getPrimaryOutput(): cn.nukkit.item.Item
                    // @ts-ignore
                    public setPrimaryOutput(item: cn.nukkit.item.Item): void
                    // @ts-ignore
                    public getRecipe(): cn.nukkit.inventory.CraftingRecipe
                    // @ts-ignore
                    public canExecute(): boolean
                    // @ts-ignore
                    callExecuteEvent(): boolean
                    // @ts-ignore
                    sendInventories(): void
                    // @ts-ignore
                    public execute(): boolean
                }
            }
        }
    }
}
