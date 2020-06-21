declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace EnchantItemEvent {
                            /**
                             * Triggers when the enchantments for an item are calculated.
                             * This happens after a new item to enchant is put in the table
                             * and again when the item is enchanted.
                             */
                            // @ts-ignore
                            interface CalculateEnchantment extends org.spongepowered.api.event.item.inventory.EnchantItemEvent {
                                /**
                                 * The itemstack to enchant.
                                 * @return the itemstack to enchant.
                                 */
                                // @ts-ignore
                                getItem(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                                /**
                                 * The final level requirement from {@link CalculateLevelRequirement}.
                                 * <p>In vanilla the maximum value is 30.</p>
                                 * @return the level requirement for the option
                                 */
                                // @ts-ignore
                                getLevelRequirement(): number /*int*/
                                /**
                                 * Returns the original list of enchantments to apply to the item.
                                 * <p>The first item in the list is used for display when previewing the enchantments.</p>
                                 * @return the list of enchantments
                                 */
                                // @ts-ignore
                                getOriginalEnchantments(): Array<org.spongepowered.api.item.enchantment.Enchantment>
                                /**
                                 * Returns the list of enchantments to apply to the item.
                                 * <p>The first item in the list is used for display when previewing the enchantments.</p>
                                 * @return the list of enchantments
                                 */
                                // @ts-ignore
                                getEnchantments(): Array<org.spongepowered.api.item.enchantment.Enchantment>
                                /**
                                 * Sets the list of enchantments to apply to the item.
                                 * <p>The first item in the list is used for display when previewing the enchantments.</p>
                                 * <p>Note that when modifying the enchantment list you should
                                 * return the same enchantments for the same seed and option.</p>
                                 * <p>See {@link Enchantment#randomListBuilder()} to generate enchantment lists.</p>
                                 * @param enchantments the new list of enchantments
                                 */
                                // @ts-ignore
                                setEnchantments(enchantments: java.util.List<org.spongepowered.api.item.enchantment.Enchantment> | Array<org.spongepowered.api.item.enchantment.Enchantment>): void
                            }
                        }
                    }
                }
            }
        }
    }
}
