declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace ClickInventoryEvent {
                            /**
                             * A click with the <code>shift</code> modifier active.
                             * <p>Usually contains multiple transactions.</p>
                             * <p>{@link #getSlot()} returns the primary interaction Slot.</p>
                             * <p>The Shift-Double-Click action fires this event multiple times.
                             * In that case the primary interaction Slot is the Slot of the item moved away.</p>
                             */
                            // @ts-ignore
                            interface Shift extends org.spongepowered.api.event.item.inventory.ClickInventoryEvent {
                            }
                        }
                    }
                }
            }
        }
    }
}
