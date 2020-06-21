declare namespace cn {
    namespace nukkit {
        namespace inventory {
            namespace transaction {
                namespace action {
                    /**
                     * @author CreeperFace
                     */
                    // @ts-ignore
                    class CreativeInventoryAction extends cn.nukkit.inventory.transaction.action.InventoryAction {
                        // @ts-ignore
                        constructor(source: cn.nukkit.item.Item, target: cn.nukkit.item.Item, action: number /*int*/)
                        /**
                         * Player put an item into the creative window to destroy it.
                         */
                        // @ts-ignore
                        public static readonly TYPE_DELETE_ITEM: number /*int*/
                        /**
                         * Player took an item from the creative window.
                         */
                        // @ts-ignore
                        public static readonly TYPE_CREATE_ITEM: number /*int*/
                        // @ts-ignore
                        actionType: number /*int*/
                        /**
                         * Checks that the player is in creative, and (if creating an item) that the item exists in the creative inventory.
                         * @param source player
                         * @return valid
                         */
                        // @ts-ignore
                        public isValid(source: cn.nukkit.Player): boolean
                        /**
                         * Returns the type of the action.
                         * @return action type
                         */
                        // @ts-ignore
                        public getActionType(): number /*int*/
                        /**
                         * No need to do anything extra here: this type just provides a place for items to disappear or appear from.
                         * @param source playere
                         * @return successfully executed
                         */
                        // @ts-ignore
                        public execute(source: cn.nukkit.Player): boolean
                        // @ts-ignore
                        public onExecuteSuccess(source: cn.nukkit.Player): void
                        // @ts-ignore
                        public onExecuteFail(source: cn.nukkit.Player): void
                    }
                }
            }
        }
    }
}
