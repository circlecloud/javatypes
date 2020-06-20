declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace CraftItemEvent {
                            /**
                             * This event is fired after the item is taken out of the output slot.
                             */
                            // @ts-ignore
                            interface Craft extends org.spongepowered.api.event.item.inventory.CraftItemEvent, org.spongepowered.api.event.item.inventory.ClickInventoryEvent {
                                /**
                                 * The item crafted with this event.
                                 * @return The crafting transaction
                                 */
                                // @ts-ignore
                                getCrafted(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                                /**
                                 * Returns the crafting output Slot.
                                 * @return The crafting output Slot
                                 */
                                // @ts-ignore
                                getSlot(): java.util.Optional<org.spongepowered.api.item.inventory.Slot>
                            }
                        }
                    }
                }
            }
        }
    }
}
