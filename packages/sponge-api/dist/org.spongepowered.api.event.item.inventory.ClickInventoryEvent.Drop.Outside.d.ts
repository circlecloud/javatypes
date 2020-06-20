declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace ClickInventoryEvent {
                            namespace Drop {
                                /**
                                 * A click outside of the inventory resulting in dropping the item on cursor.
                                 * {@link #getSlot()} will return empty as no slot was clicked.
                                 */
                                // @ts-ignore
                                interface Outside extends org.spongepowered.api.event.item.inventory.ClickInventoryEvent.Drop {
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
