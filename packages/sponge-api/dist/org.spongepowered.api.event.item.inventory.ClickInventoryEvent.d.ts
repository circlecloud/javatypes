declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        /**
                         * A click interaction in an open container.
                         */
                        // @ts-ignore
                        interface ClickInventoryEvent extends org.spongepowered.api.event.item.inventory.ChangeInventoryEvent, org.spongepowered.api.event.item.inventory.InteractInventoryEvent {
                            /**
                             * Returns the primary interaction Slot.
                             * <p>May return {@link Optional#empty()} for events that do not directly interact with a Slot</p>
                             * @return The primary interaction Slot
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
