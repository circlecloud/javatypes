declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace EnchantItemEvent {
                            /**
                             * Triggers when the enchantment costs for an item are calculated.
                             */
                            // @ts-ignore
                            interface CalculateLevelRequirement extends org.spongepowered.api.event.item.inventory.EnchantItemEvent {
                                /**
                                 * The enchantment power based on bookshelves around the enchantment table.
                                 * @return the enchantment power
                                 */
                                // @ts-ignore
                                getPower(): int
                                /**
                                 * The itemstack to enchant.
                                 * @return the itemstack to enchant.
                                 */
                                // @ts-ignore
                                getItem(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                                /**
                                 * Returns the original level requirement
                                 * @return the original level requirement
                                 */
                                // @ts-ignore
                                getOriginalLevelRequirement(): int
                                /**
                                 * Returns the level requirement
                                 * @return the level requirement
                                 */
                                // @ts-ignore
                                getLevelRequirement(): int
                                /**
                                 * Sets the new level requirement
                                 * <p>In vanilla the maximum value is 30.</p>
                                 * <p>Returning a much higher level may result in no enchantments
                                 * because the existing enchantments are too weak.</p>
                                 * @param value the new level requrement
                                 */
                                // @ts-ignore
                                setLevelRequirement(value: number /*int*/): void
                            }
                        }
                    }
                }
            }
        }
    }
}
