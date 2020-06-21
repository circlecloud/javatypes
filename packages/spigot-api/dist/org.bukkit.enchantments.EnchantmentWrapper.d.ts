declare namespace org {
    namespace bukkit {
        namespace enchantments {
            /**
             * A simple wrapper for ease of selecting {@link Enchantment}s
             */
            // @ts-ignore
            class EnchantmentWrapper extends org.bukkit.enchantments.Enchantment {
                // @ts-ignore
                constructor(name: java.lang.String | string)
                /**
                 * Gets the enchantment bound to this wrapper
                 * @return Enchantment
                 */
                // @ts-ignore
                public getEnchantment(): org.bukkit.enchantments.Enchantment
                // @ts-ignore
                public getMaxLevel(): number /*int*/
                // @ts-ignore
                public getStartLevel(): number /*int*/
                // @ts-ignore
                public getItemTarget(): org.bukkit.enchantments.EnchantmentTarget
                // @ts-ignore
                public canEnchantItem(item: org.bukkit.inventory.ItemStack): boolean
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public isTreasure(): boolean
                // @ts-ignore
                public isCursed(): boolean
                // @ts-ignore
                public conflictsWith(other: org.bukkit.enchantments.Enchantment): boolean
            }
        }
    }
}
