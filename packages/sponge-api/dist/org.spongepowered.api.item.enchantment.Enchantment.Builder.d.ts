declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace enchantment {
                    namespace Enchantment {
                        /**
                         * Represents a builder interface which can be used
                         * to create a {@link Enchantment}.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder<org.spongepowered.api.item.enchantment.Enchantment> {
                            /**
                             * Sets the {@link EnchantmentType} for this enchantment.
                             * @param enchantmentType The desired enchantment type
                             * @return The modified builder, for chaining
                             */
                            // @ts-ignore
                            type(enchantmentType: org.spongepowered.api.item.enchantment.EnchantmentType): org.spongepowered.api.item.enchantment.Enchantment.Builder
                            /**
                             * Sets the level for this enchantment.
                             * <p>This level must be between {@link Short#MIN_VALUE} and
                             * {@link Short#MAX_VALUE}, but there is no guarantee all levels will
                             * work properly without error. It is recommended for reliable results
                             * you stay between {@link EnchantmentType#getMinimumLevel()} and
                             * {@link EnchantmentType#getMaximumLevel()}, or at least larger
                             * than <code>0</code> and less than {@link Short#MAX_VALUE}.</p>
                             * @param level The desired level
                             * @return The modified builder for chaining
                             * @throws IllegalArgumentException If the level is smaller than
                             *      {#link Short#MIN_VALUE} or larger than {@link Short#MAX_VALUE}
                             */
                            // @ts-ignore
                            level(level: number /*int*/): org.spongepowered.api.item.enchantment.Enchantment.Builder
                            /**
                             * Builds an instance of a {@link Enchantment} based on the entered
                             * information.
                             * @return The created enchantment
                             * @throws IllegalStateException If a required value was not specified
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.item.enchantment.Enchantment
                        }
                    }
                }
            }
        }
    }
}
