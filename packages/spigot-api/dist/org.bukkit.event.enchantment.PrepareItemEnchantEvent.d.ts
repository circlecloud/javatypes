declare namespace org {
    namespace bukkit {
        namespace event {
            namespace enchantment {
                /**
                 * Called when an ItemStack is inserted in an enchantment table - can be
                 * called multiple times
                 */
                // @ts-ignore
                class PrepareItemEnchantEvent extends org.bukkit.event.inventory.InventoryEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(enchanter: org.bukkit.entity.Player, view: org.bukkit.inventory.InventoryView, table: org.bukkit.block.Block, item: org.bukkit.inventory.ItemStack, offers: org.bukkit.enchantments.EnchantmentOffer[], bonus: number /*int*/)
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
                     * Gets the item to be enchanted.
                     * @return ItemStack of item
                     */
                    // @ts-ignore
                    public getItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Get a list of offered experience level costs of the enchantment.
                     * @return experience level costs offered
                     * @deprecated Use {#link #getOffers()} instead of this method
                     */
                    // @ts-ignore
                    public getExpLevelCostsOffered(): number /*int*/[]
                    /**
                     * Get a list of available {@link EnchantmentOffer} for the player. You can
                     * modify the values to change the available offers for the player. An offer
                     * may be null, if there isn't a enchantment offer at a specific slot. There
                     * are 3 slots in the enchantment table available to modify.
                     * @return list of available enchantment offers
                     */
                    // @ts-ignore
                    public getOffers(): org.bukkit.enchantments.EnchantmentOffer[]
                    /**
                     * Get enchantment bonus in effect - corresponds to number of bookshelves
                     * @return enchantment bonus
                     */
                    // @ts-ignore
                    public getEnchantmentBonus(): number /*int*/
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
