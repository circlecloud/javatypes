declare namespace org {
    namespace bukkit {
        namespace event {
            namespace enchantment {
                /**
                 * Called when an ItemStack is successfully enchanted (currently at
                 * enchantment table)
                 */
                // @ts-ignore
                class EnchantItemEvent extends org.bukkit.event.inventory.InventoryEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(enchanter: org.bukkit.entity.Player, view: org.bukkit.inventory.InventoryView, table: org.bukkit.block.Block, item: org.bukkit.inventory.ItemStack, level: number /*int*/, enchants: java.util.Map<org.bukkit.enchantments.Enchantment, java.lang.Integer | number>, i: number /*int*/)
                    /**
                     * Gets the player enchanting the item
                     * @return enchanting player
                     */
                    // @ts-ignore
                    public getEnchanter(): org.bukkit.entity.Player
                    /**
                     * Gets the block being used to enchant the item
                     * @return the block used for enchanting
                     */
                    // @ts-ignore
                    public getEnchantBlock(): org.bukkit.block.Block
                    /**
                     * Gets the item to be enchanted (can be modified)
                     * @return ItemStack of item
                     */
                    // @ts-ignore
                    public getItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Gets the cost (minimum level) which is displayed as a number on the right
                     * hand side of the enchantment offer.
                     * @return experience level cost
                     */
                    // @ts-ignore
                    public getExpLevelCost(): number /*int*/
                    /**
                     * Sets the cost (minimum level) which is displayed as a number on the right
                     * hand side of the enchantment offer.
                     * @param level - cost in levels
                     */
                    // @ts-ignore
                    public setExpLevelCost(level: number /*int*/): void
                    /**
                     * Get map of enchantment (levels, keyed by type) to be added to item
                     * (modify map returned to change values). Note: Any enchantments not
                     * allowed for the item will be ignored
                     * @return map of enchantment levels, keyed by enchantment
                     */
                    // @ts-ignore
                    public getEnchantsToAdd(): java.util.Map<org.bukkit.enchantments.Enchantment, java.lang.Integer | number>
                    /**
                     * Which button was pressed to initiate the enchanting.
                     * @return The button index (0, 1, or 2).
                     */
                    // @ts-ignore
                    public whichButton(): number /*int*/
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
