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
                        interface RandomListBuilder extends org.spongepowered.api.util.ResettableBuilder<java.util.List<org.spongepowered.api.item.enchantment.Enchantment> | Array<org.spongepowered.api.item.enchantment.Enchantment>, org.spongepowered.api.item.enchantment.Enchantment.RandomListBuilder> {
                            /**
                             * Sets the random seed.
                             * @param seed the random seed
                             * @return The modified builder, for chaining
                             */
                            // @ts-ignore
                            seed(seed: number /*int*/): org.spongepowered.api.item.enchantment.Enchantment.RandomListBuilder
                            /**
                             * Sets the enchanting option. (1-3 in vanilla)
                             * @param option the enchanting option
                             * @return The modified builder, for chaining
                             */
                            // @ts-ignore
                            option(option: number /*int*/): org.spongepowered.api.item.enchantment.Enchantment.RandomListBuilder
                            /**
                             * Sets the enchanting level. (max. 30 in vanilla)
                             * @param level the enchanting level
                             * @return The modified builder, for chaining
                             */
                            // @ts-ignore
                            level(level: number /*int*/): org.spongepowered.api.item.enchantment.Enchantment.RandomListBuilder
                            /**
                             * Sets whether to include treasure enchantments or not
                             * @param treasure whether to include treasure enchantments or not
                             * @return The modified builder, for chaining
                             */
                            // @ts-ignore
                            treasure(treasure: boolean): org.spongepowered.api.item.enchantment.Enchantment.RandomListBuilder
                            /**
                             * Sets a fixed pool for the random enchantments to pick from.
                             * <p>If empty a pool will be calculated based on the other values instead.</p>
                             * @param pool the fixed pool of enchantments
                             * @return The modified builder, for chaining
                             */
                            // @ts-ignore
                            fixedPool(pool: java.util.List<org.spongepowered.api.item.enchantment.Enchantment> | Array<org.spongepowered.api.item.enchantment.Enchantment>): org.spongepowered.api.item.enchantment.Enchantment.RandomListBuilder
                            /**
                             * Sets the item for which the enchantments are chosen
                             * @param item the item for which the enchantments are chosen
                             * @return The modified builder, for chaining
                             */
                            // @ts-ignore
                            item(item: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.enchantment.Enchantment.RandomListBuilder
                            /**
                             * Builds an instance of a {@link Enchantment} based on the entered
                             * information.
                             * @return The created enchantment
                             * @throws IllegalStateException If a required value was not specified
                             */
                            // @ts-ignore
                            build(): Array<org.spongepowered.api.item.enchantment.Enchantment>
                        }
                    }
                }
            }
        }
    }
}
