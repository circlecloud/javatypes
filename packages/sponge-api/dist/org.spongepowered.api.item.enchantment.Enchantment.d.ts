declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace enchantment {
                    /**
                     * Represents an {@link EnchantmentType} on an {@link ItemStack} that is paired
                     * with a level.
                     * <p>The contract of enchantments is that their level will always be between
                     * {@link Short#MIN_VALUE} and {@link Short#MAX_VALUE}, but it is not guaranteed
                     * they will work properly outside of {@link EnchantmentType#getMinimumLevel()}
                     * and {@link EnchantmentType#getMaximumLevel()}.</p>
                     */
                    // @ts-ignore
                    interface Enchantment extends org.spongepowered.api.data.DataSerializable {
                        /**
                         * Creates a new {@link Builder} to create an {@link Enchantment}.
                         * @return The new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.item.enchantment.Enchantment.Builder
                        // @ts-ignore
                        randomListBuilder(): org.spongepowered.api.item.enchantment.Enchantment.RandomListBuilder
                        /**
                         * Creates a new {@link Enchantment} with the provided
                         * {@link EnchantmentType} and level.
                         * @param enchantmentType The enchantment type
                         * @param level The enchantment level
                         * @return The created enchantment
                         * @throws IllegalArgumentException If the level is smaller than
                         *      {#link Short#MIN_VALUE} or larger than {@link Short#MAX_VALUE}
                         */
                        // @ts-ignore
                        of(enchantmentType: org.spongepowered.api.item.enchantment.EnchantmentType, level: number /*int*/): org.spongepowered.api.item.enchantment.Enchantment
                        /**
                         * Gets the {@link EnchantmentType} for this enchantment.
                         * @return The enchantment type of this enchantment
                         */
                        // @ts-ignore
                        getType(): org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Gets the level of this enchantment.
                         * @return The level of this enchantment
                         */
                        // @ts-ignore
                        getLevel(): number /*int*/
                    }
                }
            }
        }
    }
}
