declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            /**
                             * An {@link ImmutableDataManipulator} for the various {@link Enchantment}s
                             * that can exist on an {@link ItemStack}.
                             */
                            // @ts-ignore
                            interface ImmutableEnchantmentData extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData<org.spongepowered.api.item.enchantment.Enchantment, org.spongepowered.api.data.manipulator.immutable.item.ImmutableEnchantmentData, org.spongepowered.api.data.manipulator.mutable.item.EnchantmentData> {
                                /**
                                 * Gets the {@link ImmutableListValue} of {@link Enchantment}s on
                                 * item stacks.
                                 * @return The immutable list value of enchantments
                                 */
                                // @ts-ignore
                                enchantments(): org.spongepowered.api.data.value.immutable.ImmutableListValue<org.spongepowered.api.item.enchantment.Enchantment>
                            }
                        }
                    }
                }
            }
        }
    }
}
