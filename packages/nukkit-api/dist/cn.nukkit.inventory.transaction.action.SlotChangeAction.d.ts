declare namespace cn {
    namespace nukkit {
        namespace inventory {
            namespace transaction {
                namespace action {
                    /**
                     * @author CreeperFace
                     */
                    // @ts-ignore
                    class SlotChangeAction extends cn.nukkit.inventory.transaction.action.InventoryAction {
                        // @ts-ignore
                        constructor(inventory: cn.nukkit.inventory.Inventory, inventorySlot: number /*int*/, sourceItem: cn.nukkit.item.Item, targetItem: cn.nukkit.item.Item)
                        // @ts-ignore
                        inventory: cn.nukkit.inventory.Inventory
                        /**
                         * Returns the inventory involved in this action.
                         * @return inventory
                         */
                        // @ts-ignore
                        public getInventory(): cn.nukkit.inventory.Inventory
                        /**
                         * Returns the inventorySlot in the inventory which this action modified.
                         * @return slot
                         */
                        // @ts-ignore
                        public getSlot(): number /*int*/
                        /**
                         * Checks if the item in the inventory at the specified inventorySlot is the same as this action's source item.
                         * @param source player
                         * @return valid
                         */
                        // @ts-ignore
                        public isValid(source: cn.nukkit.Player): boolean
                        /**
                         * Sets the item into the target inventory.
                         * @param source player
                         * @return successfully executed
                         */
                        // @ts-ignore
                        public execute(source: cn.nukkit.Player): boolean
                        /**
                         * Sends inventorySlot changes to other viewers of the inventory. This will not send any change back to the source Player.
                         * @param source player
                         */
                        // @ts-ignore
                        public onExecuteSuccess(source: cn.nukkit.Player): void
                        /**
                         * Sends the original inventorySlot contents to the source player to revert the action.
                         * @param source player
                         */
                        // @ts-ignore
                        public onExecuteFail(source: cn.nukkit.Player): void
                        // @ts-ignore
                        public onAddToTransaction(transaction: cn.nukkit.inventory.transaction.InventoryTransaction): void
                    }
                }
            }
        }
    }
}
