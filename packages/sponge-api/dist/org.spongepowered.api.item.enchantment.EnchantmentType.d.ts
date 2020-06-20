declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace enchantment {
                    /**
                     * Represents a modifier on an item that has various effects.
                     */
                    // @ts-ignore
                    interface EnchantmentType extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable {
                        /**
                         * Gets the weight of this enchantment type.
                         * <p>Higher values are more common. This value is also used in the repair
                         * cost calculation.</p>
                         * @return The weight of this enchantment type
                         */
                        // @ts-ignore
                        getWeight(): int
                        /**
                         * Gets the minimum level of this enchantment type allowed where
                         * it is present.
                         * @return The minimum level
                         */
                        // @ts-ignore
                        getMinimumLevel(): int
                        /**
                         * Gets the maximum level of this enchantment type normally allowed.
                         * @return The maximum level
                         */
                        // @ts-ignore
                        getMaximumLevel(): int
                        /**
                         * Gets the minimum item enchantability for this level to be normally added
                         * by enchanting tables.
                         * @param level The enchantment type level
                         * @return The minimum enchantability
                         */
                        // @ts-ignore
                        getMinimumEnchantabilityForLevel(level: number /*int*/): int
                        /**
                         * Gets the maximum item enchantability for this level to be normally added
                         * by enchanting tables.
                         * @param level The enchantment type level
                         * @return The maximum enchantability
                         */
                        // @ts-ignore
                        getMaximumEnchantabilityForLevel(level: number /*int*/): int
                        /**
                         * Test if this enchantment type can be applied to an {@link ItemStack}.
                         * @param stack The item stack to check
                         * @return Whether this enchantment type can be applied
                         */
                        // @ts-ignore
                        canBeAppliedToStack(stack: org.spongepowered.api.item.inventory.ItemStack): boolean
                        /**
                         * Test if this enchantment type can be applied to an {@link ItemStack} by
                         * the {@link EnchantmentTable}.
                         * @param stack Te item stack to check
                         * @return Whether this enchantment type can be applied by the
                         *      enchantment table
                         */
                        // @ts-ignore
                        canBeAppliedByTable(stack: org.spongepowered.api.item.inventory.ItemStack): boolean
                        /**
                         * Test if this enchantment type can be applied along with
                         * another enchantment type.
                         * @param enchantmentType The enchantment type to test compatibility with
                         * @return Whether these enchantment types are compatible
                         */
                        // @ts-ignore
                        isCompatibleWith(enchantmentType: org.spongepowered.api.item.enchantment.EnchantmentType): boolean
                        /**
                         * Gets whether or not this enchantment type is considered a "treasure"
                         * enchantment.
                         * <p>These do not occur naturally in enchantment tables.</p>
                         * @return Whether this enchantment type is a treasure enchantment type
                         */
                        // @ts-ignore
                        isTreasure(): boolean
                        /**
                         * Gets whether or not this enchantment type is considered a "curse"
                         * enchantment.
                         * @return Whether this enchantment type is a curse enchantment type
                         */
                        // @ts-ignore
                        isCurse(): boolean
                    }
                }
            }
        }
    }
}
