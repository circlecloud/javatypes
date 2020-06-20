declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace ChangeInventoryEvent {
                            /**
                             * Fired when an {@link Inventory} transfers items into another.
                             */
                            // @ts-ignore
                            interface Transfer extends org.spongepowered.api.event.item.inventory.ChangeInventoryEvent {
                                /**
                                 * Gets the source {@link Inventory} of this {@link Event}.
                                 * @return The source {#link Inventory}
                                 */
                                // @ts-ignore
                                getSourceInventory(): org.spongepowered.api.item.inventory.Inventory
                            }
                        }
                    }
                }
            }
        }
    }
}
