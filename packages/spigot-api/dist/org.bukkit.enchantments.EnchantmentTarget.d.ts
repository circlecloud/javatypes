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
                 * @deprecated this target no longer exists in Vanilla
                 */
                // @ts-ignore
                public static readonly ALL: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on armor
                 */
                // @ts-ignore
                public static readonly ARMOR: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on feet slot armor
                 */
                // @ts-ignore
                public static readonly ARMOR_FEET: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on leg slot armor
                 */
                // @ts-ignore
                public static readonly ARMOR_LEGS: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on torso slot armor
                 */
                // @ts-ignore
                public static readonly ARMOR_TORSO: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on head slot armor
                 */
                // @ts-ignore
                public static readonly ARMOR_HEAD: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on weapons (swords)
                 */
                // @ts-ignore
                public static readonly WEAPON: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on tools (spades, pickaxe, axes)
                 */
                // @ts-ignore
                public static readonly TOOL: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on bows.
                 */
                // @ts-ignore
                public static readonly BOW: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the Enchantment to be placed on fishing rods.
                 */
                // @ts-ignore
                public static readonly FISHING_ROD: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the enchantment to be placed on items with durability.
                 */
                // @ts-ignore
                public static readonly BREAKABLE: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allows the enchantment to be placed on wearable items.
                 */
                // @ts-ignore
                public static readonly WEARABLE: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allow the Enchantment to be placed on tridents.
                 */
                // @ts-ignore
                public static readonly TRIDENT: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allow the Enchantment to be placed on crossbows.
                 */
                // @ts-ignore
                public static readonly CROSSBOW: org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Allow the Enchantment to be placed on vanishing items.
                 */
                // @ts-ignore
                public static readonly VANISHABLE: org.bukkit.enchantments.EnchantmentTarget
                // @ts-ignore
                public static values(): org.bukkit.enchantments.EnchantmentTarget[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Check whether this target includes the specified item.
                 * @param item The item to check
                 * @return True if the target includes the item
                 */
                // @ts-ignore
                public includes(item: org.bukkit.Material): boolean
                /**
                 * Check whether this target includes the specified item.
                 * @param item The item to check
                 * @return True if the target includes the item
                 */
                // @ts-ignore
                public includes(item: org.bukkit.inventory.ItemStack): boolean
            }
        }
    }
}
