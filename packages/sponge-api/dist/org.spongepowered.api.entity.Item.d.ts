declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                /**
                 * Represents an Item entity.
                 */
                // @ts-ignore
                interface Item extends org.spongepowered.api.entity.Entity {
                    /**
                     * Gets a copy of the current {@link RepresentedItemData} this item is
                     * representing.
                     * @return A copy of the represented item data
                     */
                    // @ts-ignore
                    getItemData(): org.spongepowered.api.data.manipulator.mutable.RepresentedItemData
                    /**
                     * Gets the {@link Value} for the represented {@link ItemStack} as
                     * an {@link ItemStackSnapshot}.
                     * @return The value for the item stack snapshot
                     */
                    // @ts-ignore
                    item(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                    /**
                     * Gets the {@link ItemType} represented by this {@link Item} entity.
                     * @return The item type
                     */
                    // @ts-ignore
                    getItemType(): org.spongepowered.api.item.ItemType
                }
            }
        }
    }
}
