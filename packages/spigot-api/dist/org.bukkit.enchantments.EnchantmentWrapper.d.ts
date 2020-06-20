declare namespace org {
    namespace bukkit {
        namespace enchantments {
            /**
             * A simple wrapper for ease of selecting {@link Enchantment}s
             */
            // @ts-ignore
            class EnchantmentWrapper extends org.bukkit.enchantments.Enchantment {
                // @ts-ignore
                constructor(name: string)
                /**
                 * Gets the enchantment bound to this wrapper
                 * @return Enchantment
                 */
                // @ts-ignore
                getEnchantment(): org.bukkit.enchantments.Enchantment
                // @ts-ignore
                getMaxLevel(): int
                // @ts-ignore
                getStartLevel(): int
                // @ts-ignore
                getItemTarget(): org.bukkit.enchantments.EnchantmentTarget
                // @ts-ignore
                canEnchantItem(item: org.bukkit.inventory.ItemStack): boolean
                // @ts-ignore
                getName(): java.lang.String
                // @ts-ignore
                isTreasure(): boolean
                // @ts-ignore
                isCursed(): boolean
                // @ts-ignore
                conflictsWith(other: org.bukkit.enchantments.Enchantment): boolean
            }
        }
    }
}
