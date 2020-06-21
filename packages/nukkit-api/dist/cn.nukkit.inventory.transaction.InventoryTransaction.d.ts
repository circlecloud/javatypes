declare namespace cn {
    namespace nukkit {
        namespace inventory {
            namespace transaction {
                /**
                 * @author CreeperFace
                 */
                // @ts-ignore
                class InventoryTransaction extends java.lang.Object {
                    // @ts-ignore
                    constructor(source: cn.nukkit.Player, actions: java.util.List<cn.nukkit.inventory.transaction.action.InventoryAction> | Array<cn.nukkit.inventory.transaction.action.InventoryAction>)
                    // @ts-ignore
                    constructor(source: cn.nukkit.Player, actions: java.util.List<cn.nukkit.inventory.transaction.action.InventoryAction> | Array<cn.nukkit.inventory.transaction.action.InventoryAction>, init: boolean)
                    // @ts-ignore
                    source: cn.nukkit.Player
                    // @ts-ignore
                    inventories: java.util.Set<cn.nukkit.inventory.Inventory> | Array<cn.nukkit.inventory.Inventory>
                    // @ts-ignore
                    actions: java.util.Set<cn.nukkit.inventory.transaction.action.InventoryAction> | Array<cn.nukkit.inventory.transaction.action.InventoryAction>
                    // @ts-ignore
                    init(source: cn.nukkit.Player, actions: java.util.List<cn.nukkit.inventory.transaction.action.InventoryAction> | Array<cn.nukkit.inventory.transaction.action.InventoryAction>): void
                    // @ts-ignore
                    public getSource(): cn.nukkit.Player
                    // @ts-ignore
                    public getCreationTime(): number /*long*/
                    // @ts-ignore
                    public getInventories(): Array<cn.nukkit.inventory.Inventory>
                    // @ts-ignore
                    public getActions(): Array<cn.nukkit.inventory.transaction.action.InventoryAction>
                    // @ts-ignore
                    public addAction(action: cn.nukkit.inventory.transaction.action.InventoryAction): void
                    /**
                     * This method should not be used by plugins, it's used to add tracked inventories for InventoryActions
                     * involving inventories.
                     * @param inventory to add
                     */
                    // @ts-ignore
                    public addInventory(inventory: cn.nukkit.inventory.Inventory): void
                    // @ts-ignore
                    matchItems(needItems: java.util.List<cn.nukkit.item.Item> | Array<cn.nukkit.item.Item>, haveItems: java.util.List<cn.nukkit.item.Item> | Array<cn.nukkit.item.Item>): boolean
                    // @ts-ignore
                    sendInventories(): void
                    /**
                     * Iterates over SlotChangeActions in this transaction and compacts any which refer to the same inventorySlot in the same
                     * inventory so they can be correctly handled.
                     * <p>
                     * Under normal circumstances, the same inventorySlot would never be changed more than once in a single transaction. However,
                     * due to the way things like the crafting grid are "implemented" in MCPE 1.2 (a.k.a. hacked-in), we may get
                     * multiple inventorySlot changes referring to the same inventorySlot in a single transaction. These multiples are not even guaranteed
                     * to be in the correct order (inventorySlot splitting in the crafting grid for example, causes the actions to be sent in the
                     * wrong order), so this method also tries to chain them into order.
                     * </p>
                     * @return successful
                     */
                    // @ts-ignore
                    squashDuplicateSlotChanges(): boolean
                    // @ts-ignore
                    public canExecute(): boolean
                    // @ts-ignore
                    callExecuteEvent(): boolean
                    // @ts-ignore
                    public execute(): boolean
                    // @ts-ignore
                    public hasExecuted(): boolean
                }
            }
        }
    }
}
