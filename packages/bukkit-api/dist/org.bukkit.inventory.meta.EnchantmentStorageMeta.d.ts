declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                /**
                 * EnchantmentMeta is specific to items that can <i>store</i> enchantments, as
                 * opposed to being enchanted. {@link Material#ENCHANTED_BOOK} is an example
                 * of an item with enchantment storage.
                 */
                // @ts-ignore
                interface EnchantmentStorageMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Checks for the existence of any stored enchantments.
                     * @return true if an enchantment exists on this meta
                     */
                    // @ts-ignore
                    hasStoredEnchants(): boolean
                    /**
                     * Checks for storage of the specified enchantment.
                     * @param ench enchantment to check
                     * @return true if this enchantment is stored in this meta
                     */
                    // @ts-ignore
                    hasStoredEnchant(ench: org.bukkit.enchantments.Enchantment): boolean
                    /**
                     * Checks for the level of the stored enchantment.
                     * @param ench enchantment to check
                     * @return The level that the specified stored enchantment has, or 0 if
                     *      none
                     */
                    // @ts-ignore
                    getStoredEnchantLevel(ench: org.bukkit.enchantments.Enchantment): number /*int*/
                    /**
                     * Gets a copy the stored enchantments in this ItemMeta.
                     * @return An immutable copy of the stored enchantments
                     */
                    // @ts-ignore
                    getStoredEnchants(): java.util.Map<org.bukkit.enchantments.Enchantment, java.lang.Integer | number>
                    /**
                     * Stores the specified enchantment in this item meta.
                     * @param ench Enchantment to store
                     * @param level Level for the enchantment
                     * @param ignoreLevelRestriction this indicates the enchantment should be
                     *      applied, ignoring the level limit
                     * @return true if the item meta changed as a result of this call, false
                     *      otherwise
                     * @throws IllegalArgumentException if enchantment is null
                     */
                    // @ts-ignore
                    addStoredEnchant(ench: org.bukkit.enchantments.Enchantment, level: number /*int*/, ignoreLevelRestriction: boolean): boolean
                    /**
                     * Remove the specified stored enchantment from this item meta.
                     * @param ench Enchantment to remove
                     * @return true if the item meta changed as a result of this call, false
                     *      otherwise
                     * @throws IllegalArgumentException if enchantment is null
                     */
                    // @ts-ignore
                    removeStoredEnchant(ench: org.bukkit.enchantments.Enchantment): boolean
                    /**
                     * Checks if the specified enchantment conflicts with any enchantments in
                     * this ItemMeta.
                     * @param ench enchantment to test
                     * @return true if the enchantment conflicts, false otherwise
                     */
                    // @ts-ignore
                    hasConflictingStoredEnchant(ench: org.bukkit.enchantments.Enchantment): boolean
                    // @ts-ignore
                    clone(): org.bukkit.inventory.meta.EnchantmentStorageMeta
                }
            }
        }
    }
}
