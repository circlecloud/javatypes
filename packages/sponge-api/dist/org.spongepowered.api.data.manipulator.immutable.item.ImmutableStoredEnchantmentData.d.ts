declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            /**
                             * An {@link ImmutableDataManipulator} handling "stored"
                             * {@link Enchantment}s. Usually, stored {@link Enchantment}s can be
                             * "transferred" to other {@link ItemStack}s. Examples include
                             * {@link ItemTypes#ENCHANTED_BOOK}s storing enchantments to apply to weapons.
                             */
                            // @ts-ignore
                            interface ImmutableStoredEnchantmentData extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData<org.spongepowered.api.item.enchantment.Enchantment, org.spongepowered.api.data.manipulator.immutable.item.ImmutableStoredEnchantmentData, org.spongepowered.api.data.manipulator.mutable.item.StoredEnchantmentData> {
                                /**
                                 * Gets the {@link ImmutableListValue} of {@link Enchantment}s stored
                                 * such that it can be applied to an {@link ItemStack}.
                                 * @return The immutable list value of item enchantments
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
