declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            /**
                             * Represents item data related to an item having active {@link Enchantment}s
                             * with an {@link EnchantmentType} and level.
                             * <p>Some enchantments are not compatible with some item types, so checking
                             * on the enchantment before setting is recommended.</p>
                             */
                            // @ts-ignore
                            interface EnchantmentData extends org.spongepowered.api.data.manipulator.mutable.ListData<org.spongepowered.api.item.enchantment.Enchantment, org.spongepowered.api.data.manipulator.mutable.item.EnchantmentData, org.spongepowered.api.data.manipulator.immutable.item.ImmutableEnchantmentData> {
                                /**
                                 * Gets the {@link ListValue} of {@link Enchantment}s on item stacks.
                                 * @return The list value of enchantments
                                 * @see Keys#ITEM_ENCHANTMENTS
                                 */
                                // @ts-ignore
                                enchantments(): org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.item.enchantment.Enchantment>
                            }
                        }
                    }
                }
            }
        }
    }
}
