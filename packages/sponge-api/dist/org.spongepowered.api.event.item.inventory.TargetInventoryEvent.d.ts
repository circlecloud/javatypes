declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        /**
                         * Base event for all events with an {@link Inventory} as the target.
                         */
                        // @ts-ignore
                        interface TargetInventoryEvent extends org.spongepowered.api.event.Event {
                            /**
                             * Gets the target {@link Inventory} of this {@link Event}.
                             * @return The target {#link Inventory}
                             */
                            // @ts-ignore
                            getTargetInventory(): org.spongepowered.api.item.inventory.Inventory
                        }
                    }
                }
            }
        }
    }
}
