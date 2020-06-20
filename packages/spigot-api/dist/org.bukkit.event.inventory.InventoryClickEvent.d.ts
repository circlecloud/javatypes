declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * This event is called when a player clicks a slot in an inventory.
                 * <p>
                 * Because InventoryClickEvent occurs within a modification of the Inventory,
                 * not all Inventory related methods are safe to use.
                 * <p>
                 * The following should never be invoked by an EventHandler for
                 * InventoryClickEvent using the HumanEntity or InventoryView associated with
                 * this event:
                 * <ul>
                 * <li>{@link HumanEntity#closeInventory()}
                 * <li>{@link HumanEntity#openInventory(Inventory)}
                 * <li>{@link HumanEntity#openWorkbench(Location, boolean)}
                 * <li>{@link HumanEntity#openEnchanting(Location, boolean)}
                 * <li>{@link InventoryView#close()}
                 * </ul>
                 * To invoke one of these methods, schedule a task using
                 * {@link BukkitScheduler#runTask(Plugin, Runnable)}, which will run the task
                 * on the next tick. Also be aware that this is not an exhaustive list, and
                 * other methods could potentially create issues as well.
                 * <p>
                 * Assuming the EntityHuman associated with this event is an instance of a
                 * Player, manipulating the MaxStackSize or contents of an Inventory will
                 * require an Invocation of {@link Player#updateInventory()}.
                 * <p>
                 * Modifications to slots that are modified by the results of this
                 * InventoryClickEvent can be overwritten. To change these slots, this event
                 * should be cancelled and all desired changes to the inventory applied.
                 * Alternatively, scheduling a task using {@link BukkitScheduler#runTask(
                 * Plugin, Runnable)}, which would execute the task on the next tick, would
                 * work as well.
                 */
                // @ts-ignore
                class InventoryClickEvent extends org.bukkit.event.inventory.InventoryInteractEvent {
                    // @ts-ignore
                    constructor(view: org.bukkit.inventory.InventoryView, type: org.bukkit.event.inventory.InventoryType.SlotType, slot: number /*int*/, click: org.bukkit.event.inventory.ClickType, action: org.bukkit.event.inventory.InventoryAction)
                    // @ts-ignore
                    constructor(view: org.bukkit.inventory.InventoryView, type: org.bukkit.event.inventory.InventoryType.SlotType, slot: number /*int*/, click: org.bukkit.event.inventory.ClickType, action: org.bukkit.event.inventory.InventoryAction, key: number /*int*/)
                    /**
                     * Gets the type of slot that was clicked.
                     * @return the slot type
                     */
                    // @ts-ignore
                    getSlotType(): org.bukkit.event.inventory.InventoryType.SlotType
                    /**
                     * Gets the current ItemStack on the cursor.
                     * @return the cursor ItemStack
                     */
                    // @ts-ignore
                    getCursor(): org.bukkit.inventory.ItemStack
                    /**
                     * Gets the ItemStack currently in the clicked slot.
                     * @return the item in the clicked
                     */
                    // @ts-ignore
                    getCurrentItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Gets whether or not the ClickType for this event represents a right
                     * click.
                     * @return true if the ClickType uses the right mouse button.
                     * @see ClickType#isRightClick()
                     */
                    // @ts-ignore
                    isRightClick(): boolean
                    /**
                     * Gets whether or not the ClickType for this event represents a left
                     * click.
                     * @return true if the ClickType uses the left mouse button.
                     * @see ClickType#isLeftClick()
                     */
                    // @ts-ignore
                    isLeftClick(): boolean
                    /**
                     * Gets whether the ClickType for this event indicates that the key was
                     * pressed down when the click was made.
                     * @return true if the ClickType uses Shift or Ctrl.
                     * @see ClickType#isShiftClick()
                     */
                    // @ts-ignore
                    isShiftClick(): boolean
                    /**
                     * Sets the item on the cursor.
                     * @param stack the new cursor item
                     * @deprecated This changes the ItemStack in their hand before any
                     *      calculations are applied to the Inventory, which has a tendency to
                     *      create inconsistencies between the Player and the server, and to
                     *      make unexpected changes in the behavior of the clicked Inventory.
                     */
                    // @ts-ignore
                    setCursor(stack: org.bukkit.inventory.ItemStack): void
                    /**
                     * Sets the ItemStack currently in the clicked slot.
                     * @param stack the item to be placed in the current slot
                     */
                    // @ts-ignore
                    setCurrentItem(stack: org.bukkit.inventory.ItemStack): void
                    /**
                     * Gets the inventory corresponding to the clicked slot.
                     * @see InventoryView#getInventory(int)
                     * @return inventory, or null if clicked outside
                     */
                    // @ts-ignore
                    getClickedInventory(): org.bukkit.inventory.Inventory
                    /**
                     * The slot number that was clicked, ready for passing to
                     * {@link Inventory#getItem(int)}. Note that there may be two slots with
                     * the same slot number, since a view links two different inventories.
                     * @return The slot number.
                     */
                    // @ts-ignore
                    getSlot(): int
                    /**
                     * The raw slot number clicked, ready for passing to {@link InventoryView
                     * #getItem(int)} This slot number is unique for the view.
                     * @return the slot number
                     */
                    // @ts-ignore
                    getRawSlot(): int
                    /**
                     * If the ClickType is NUMBER_KEY, this method will return the index of
                     * the pressed key (0-8).
                     * @return the number on the key minus 1 (range 0-8); or -1 if not
                     *      a NUMBER_KEY action
                     */
                    // @ts-ignore
                    getHotbarButton(): int
                    /**
                     * Gets the InventoryAction that triggered this event.
                     * <p>
                     * This action cannot be changed, and represents what the normal outcome
                     * of the event will be. To change the behavior of this
                     * InventoryClickEvent, changes must be manually applied.
                     * @return the InventoryAction that triggered this event.
                     */
                    // @ts-ignore
                    getAction(): org.bukkit.event.inventory.InventoryAction
                    /**
                     * Gets the ClickType for this event.
                     * <p>
                     * This is insulated against changes to the inventory by other plugins.
                     * @return the type of inventory click
                     */
                    // @ts-ignore
                    getClick(): org.bukkit.event.inventory.ClickType
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
