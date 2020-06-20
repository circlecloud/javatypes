declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    /**
                     * Represents a thrown potion.
                     */
                    // @ts-ignore
                    interface ThrownPotion extends org.spongepowered.api.entity.projectile.Projectile {
                        /**
                         * Gets a copy of the {@link RepresentedItemData} used by this potion.
                         * @return A copy of the represented item data
                         */
                        // @ts-ignore
                        getPotionItemData(): org.spongepowered.api.data.manipulator.mutable.RepresentedItemData
                        /**
                         * Gets the {@link Value} for the represented {@link ItemStack} as an
                         * {@link ItemStackSnapshot}.
                         * @return The value for the item stack snapshot
                         */
                        // @ts-ignore
                        item(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                    }
                }
            }
        }
    }
}
