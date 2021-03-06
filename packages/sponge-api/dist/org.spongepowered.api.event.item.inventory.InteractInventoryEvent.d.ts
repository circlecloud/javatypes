declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        // @ts-ignore
                        interface InteractInventoryEvent extends org.spongepowered.api.event.item.inventory.TargetContainerEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets the {@link Transaction} of {@link ItemStackSnapshot}s for this event.
                             * @return The transaction of the item
                             */
                            // @ts-ignore
                            getCursorTransaction(): org.spongepowered.api.data.Transaction<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                        }
                    }
                }
            }
        }
    }
}
