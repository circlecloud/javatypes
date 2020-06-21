declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace ChangeInventoryEvent {
                            namespace Pickup {
                                /**
                                 * Fires before an {@link Item} is picked up.
                                 * <p>Modifying the picked up items causes this event to be
                                 * automatically canceled if the inventory does not
                                 * fit the entire list.</p>
                                 */
                                // @ts-ignore
                                interface Pre extends org.spongepowered.api.event.item.inventory.TargetInventoryEvent, org.spongepowered.api.event.entity.item.TargetItemEvent, org.spongepowered.api.event.Cancellable {
                                    /**
                                     * Returns the original picked up {@link ItemStackSnapshot}
                                     * to add to the inventory.
                                     * @return The original picked up item
                                     */
                                    // @ts-ignore
                                    getOriginalStack(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                                    /**
                                     * Returns the custom set list of items to add to the inventory or {@link Optional#empty()} if not set.
                                     * @return The custom set list
                                     */
                                    // @ts-ignore
                                    getCustom(): java.util.Optional<java.util.List<org.spongepowered.api.item.inventory.ItemStackSnapshot> | Array<org.spongepowered.api.item.inventory.ItemStackSnapshot>>
                                    /**
                                     * Sets the items to add to the inventory.
                                     * <p>If all items do not fit the inventory this event will be
                                     * automatically canceled.</p>
                                     * @param items The items to add to the inventory
                                     */
                                    // @ts-ignore
                                    setCustom(items: java.util.List<org.spongepowered.api.item.inventory.ItemStackSnapshot> | Array<org.spongepowered.api.item.inventory.ItemStackSnapshot>): void
                                    /**
                                     * Returns the proposed final list of items to add to the inventory.
                                     * <p>If a custom list was set all items have to fit the inventory
                                     * or this event will be automatically canceled.</p>
                                     * @return The proposed final list
                                     */
                                    // @ts-ignore
                                    getFinal(): Array<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
