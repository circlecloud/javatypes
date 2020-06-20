declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            /**
                             * A {@link DataManipulator} handling "stored" {@link Enchantment}s.
                             * Usually, stored {@link Enchantment}s can be "transferred" to other
                             * {@link ItemStack}s. Examples include {@link ItemTypes#ENCHANTED_BOOK}s
                             * storing enchantments to apply to weapons.
                             */
                            // @ts-ignore
                            interface StoredEnchantmentData extends org.spongepowered.api.data.manipulator.mutable.ListData<org.spongepowered.api.item.enchantment.Enchantment, org.spongepowered.api.data.manipulator.mutable.item.StoredEnchantmentData, org.spongepowered.api.data.manipulator.immutable.item.ImmutableStoredEnchantmentData> {
                                /**
                                 * Gets the {@link ListValue} of {@link Enchantment}s stored such
                                 * that it can be applied to an {@link ItemStack}.
                                 * @return The list value of item enchantments
                                 * @see Keys#STORED_ENCHANTMENTS
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
