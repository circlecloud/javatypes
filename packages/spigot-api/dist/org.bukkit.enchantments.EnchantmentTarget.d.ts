declare namespace org {
    namespace bukkit {
        namespace enchantments {
            /**
             * Represents the applicable target for a {@link Enchantment}
             */
            // @ts-ignore
            class EnchantmentTarget extends java.lang.Enum<org.bukkit.enchantments.EnchantmentTarget> {
                // @ts-ignore
                values(): org.bukkit.enchantments.EnchantmentTarget[]
                // @ts-ignore
                valueOf(name: string): org.bukkit.enchantments.EnchantmentTarget
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
