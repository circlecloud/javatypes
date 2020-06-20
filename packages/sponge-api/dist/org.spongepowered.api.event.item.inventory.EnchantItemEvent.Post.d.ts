declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace EnchantItemEvent {
                            /**
                             * This event is triggered when an item is enchanted at an enchanting table.
                             */
                            // @ts-ignore
                            interface Post extends org.spongepowered.api.event.item.inventory.ClickInventoryEvent, org.spongepowered.api.event.item.inventory.EnchantItemEvent {
                                /**
                                 * Returns the slot of the enchanted item.
                                 * @return the slot if the enchanted item.
                                 */
                                // @ts-ignore
                                getEnchantingSlot(): org.spongepowered.api.item.inventory.Slot
                            }
                        }
                    }
                }
            }
        }
    }
}
