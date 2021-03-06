declare namespace org {
    namespace bukkit {
        namespace enchantments {
            /**
             * A class for the available enchantment offers in the enchantment table.
             */
            // @ts-ignore
            class EnchantmentOffer extends java.lang.Object {
                // @ts-ignore
                constructor(enchantment: org.bukkit.enchantments.Enchantment, enchantmentLevel: number /*int*/, cost: number /*int*/)
                /**
                 * Get the type of the enchantment.
                 * @return type of enchantment
                 */
                // @ts-ignore
                public getEnchantment(): org.bukkit.enchantments.Enchantment
                /**
                 * Sets the type of the enchantment.
                 * @param enchantment type of the enchantment
                 */
                // @ts-ignore
                public setEnchantment(enchantment: org.bukkit.enchantments.Enchantment): void
                /**
                 * Gets the level of the enchantment.
                 * @return level of the enchantment
                 */
                // @ts-ignore
                public getEnchantmentLevel(): number /*int*/
                /**
                 * Sets the level of the enchantment.
                 * @param enchantmentLevel level of the enchantment
                 */
                // @ts-ignore
                public setEnchantmentLevel(enchantmentLevel: number /*int*/): void
                /**
                 * Gets the cost (minimum level) which is displayed as a number on the right
                 * hand side of the enchantment offer.
                 * @return cost for this enchantment
                 */
                // @ts-ignore
                public getCost(): number /*int*/
                /**
                 * Sets the cost (minimum level) which is displayed as a number on the right
                 * hand side of the enchantment offer.
                 * @param cost cost for this enchantment
                 */
                // @ts-ignore
                public setCost(cost: number /*int*/): void
            }
        }
    }
}
