declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * An estimation of what the result will be.
                 */
                // @ts-ignore
                class InventoryAction extends java.lang.Enum<org.bukkit.event.inventory.InventoryAction> {
                    /**
                     * Nothing will happen from the click.
                     * <p>
                     * There may be cases where nothing will happen and this is value is not
                     * provided, but it is guaranteed that this value is accurate when given.
                     */
                    // @ts-ignore
                    readonly NOTHING: org.bukkit.event.inventory.InventoryAction
                    /**
                     * All of the items on the clicked slot are moved to the cursor.
                     */
                    // @ts-ignore
                    readonly PICKUP_ALL: org.bukkit.event.inventory.InventoryAction
                    /**
                     * Some of the items on the clicked slot are moved to the cursor.
                     */
                    // @ts-ignore
                    readonly PICKUP_SOME: org.bukkit.event.inventory.InventoryAction
                    /**
                     * Half of the items on the clicked slot are moved to the cursor.
                     */
                    // @ts-ignore
                    readonly PICKUP_HALF: org.bukkit.event.inventory.InventoryAction
                    /**
                     * One of the items on the clicked slot are moved to the cursor.
                     */
                    // @ts-ignore
                    readonly PICKUP_ONE: org.bukkit.event.inventory.InventoryAction
                    /**
                     * All of the items on the cursor are moved to the clicked slot.
                     */
                    // @ts-ignore
                    readonly PLACE_ALL: org.bukkit.event.inventory.InventoryAction
                    /**
                     * Some of the items from the cursor are moved to the clicked slot
                     * (usually up to the max stack size).
                     */
                    // @ts-ignore
                    readonly PLACE_SOME: org.bukkit.event.inventory.InventoryAction
                    /**
                     * A single item from the cursor is moved to the clicked slot.
                     */
                    // @ts-ignore
                    readonly PLACE_ONE: org.bukkit.event.inventory.InventoryAction
                    /**
                     * The clicked item and the cursor are exchanged.
                     */
                    // @ts-ignore
                    readonly SWAP_WITH_CURSOR: org.bukkit.event.inventory.InventoryAction
                    /**
                     * The entire cursor item is dropped.
                     */
                    // @ts-ignore
                    readonly DROP_ALL_CURSOR: org.bukkit.event.inventory.InventoryAction
                    /**
                     * One item is dropped from the cursor.
                     */
                    // @ts-ignore
                    readonly DROP_ONE_CURSOR: org.bukkit.event.inventory.InventoryAction
                    /**
                     * The entire clicked slot is dropped.
                     */
                    // @ts-ignore
                    readonly DROP_ALL_SLOT: org.bukkit.event.inventory.InventoryAction
                    /**
                     * One item is dropped from the clicked slot.
                     */
                    // @ts-ignore
                    readonly DROP_ONE_SLOT: org.bukkit.event.inventory.InventoryAction
                    /**
                     * The item is moved to the opposite inventory if a space is found.
                     */
                    // @ts-ignore
                    readonly MOVE_TO_OTHER_INVENTORY: org.bukkit.event.inventory.InventoryAction
                    /**
                     * The clicked item is moved to the hotbar, and the item currently there
                     * is re-added to the player's inventory.
                     */
                    // @ts-ignore
                    readonly HOTBAR_MOVE_AND_READD: org.bukkit.event.inventory.InventoryAction
                    /**
                     * The clicked slot and the picked hotbar slot are swapped.
                     */
                    // @ts-ignore
                    readonly HOTBAR_SWAP: org.bukkit.event.inventory.InventoryAction
                    /**
                     * A max-size stack of the clicked item is put on the cursor.
                     */
                    // @ts-ignore
                    readonly CLONE_STACK: org.bukkit.event.inventory.InventoryAction
                    /**
                     * The inventory is searched for the same material, and they are put on
                     * the cursor up to {@link org.bukkit.Material#getMaxStackSize()}.
                     */
                    // @ts-ignore
                    readonly COLLECT_TO_CURSOR: org.bukkit.event.inventory.InventoryAction
                    /**
                     * An unrecognized ClickType.
                     */
                    // @ts-ignore
                    readonly UNKNOWN: org.bukkit.event.inventory.InventoryAction
                    // @ts-ignore
                    values(): org.bukkit.event.inventory.InventoryAction[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.event.inventory.InventoryAction
                }
            }
        }
    }
}
