declare namespace org {
    namespace bukkit {
        namespace enchantments {
            /**
             * Represents the applicable target for a {@link Enchantment}
             */
            // @ts-ignore
            class EnchantmentTarget extends java.lang.Enum<org.bukkit.enchantments.EnchantmentTarget> {
                /**
                 * Allows the Enchantment to be placed on all items
                 */
                // @ts-ignore
                readonly ALL: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on armor
                 */
                // @ts-ignore
                readonly ARMOR: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on feet slot armor
                 */
                // @ts-ignore
                readonly ARMOR_FEET: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on leg slot armor
                 */
                // @ts-ignore
                readonly ARMOR_LEGS: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on torso slot armor
                 */
                // @ts-ignore
                readonly ARMOR_TORSO: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on head slot armor
                 */
                // @ts-ignore
                readonly ARMOR_HEAD: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on weapons (swords)
                 */
                // @ts-ignore
                readonly WEAPON: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on tools (spades, pickaxe, axes)
                 */
                // @ts-ignore
                readonly TOOL: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on bows.
                 */
                // @ts-ignore
                readonly BOW: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on fishing rods.
                 */
                // @ts-ignore
                readonly FISHING_ROD: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the enchantment to be placed on items with durability.
                 */
                // @ts-ignore
                readonly BREAKABLE: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the enchantment to be placed on wearable items.
                 */
                // @ts-ignore
                readonly WEARABLE: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allow the Enchantment to be placed on tridents.
                 */
                // @ts-ignore
                readonly TRIDENT: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allow the Enchantment to be placed on crossbows.
                 */
                // @ts-ignore
                readonly CROSSBOW: org.bukkit.enchantments.EnchantmentTarget
                // @ts-ignore
                values(): org.bukkit.enchantments.EnchantmentTarget[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Check whether this target includes the specified item.
                 * @param item The item to check
                 * @return True if the target includes the item
                 */
                // @ts-ignore
                includes(item: org.bukkit.Material): boolean
                /**
                 * Check whether this target includes the specified item.
                 * @param item The item to check
                 * @return True if the target includes the item
                 */
                // @ts-ignore
                includes(item: org.bukkit.inventory.ItemStack): boolean
            }
        }
    }
}
