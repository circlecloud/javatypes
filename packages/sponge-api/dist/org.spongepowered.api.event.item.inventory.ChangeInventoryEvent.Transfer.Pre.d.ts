declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace ChangeInventoryEvent {
                            namespace Transfer {
                                /**
                                 * Fired before an {@link Inventory} attempts to transfer items.
                                 */
                                // @ts-ignore
                                interface Pre extends org.spongepowered.api.event.item.inventory.TargetInventoryEvent, org.spongepowered.api.event.Cancellable {
                                    /**
                                     * Gets the source {@link Inventory} of this {@link Event}.
                                     * @return The source {#link Inventory}
                                     */
                                    // @ts-ignore
                                    getSourceInventory(): org.spongepowered.api.item.inventory.Inventory
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
    }
}
