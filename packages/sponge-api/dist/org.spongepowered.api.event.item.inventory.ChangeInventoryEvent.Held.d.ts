declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace ChangeInventoryEvent {
                            /**
                             * Fired when a {@link Living} changes it's held {@link Slot}.
                             * <p>This can happen by either scrolling or pressing the number key for the slot.</p>
                             */
                            // @ts-ignore
                            interface Held extends org.spongepowered.api.event.item.inventory.ChangeInventoryEvent {
                                /**
                                 * The previously selected slot.
                                 * @return The previously selected slot.
                                 */
                                // @ts-ignore
                                getOriginalSlot(): org.spongepowered.api.item.inventory.Slot
                                /**
                                 * The new selected slot.
                                 * @return The new selected slot.
                                 */
                                // @ts-ignore
                                getFinalSlot(): org.spongepowered.api.item.inventory.Slot
                            }
                        }
                    }
                }
            }
        }
    }
}
