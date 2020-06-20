declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        /**
                         * Base event for all events with an {@link Container} as the target.
                         */
                        // @ts-ignore
                        interface TargetContainerEvent extends org.spongepowered.api.event.item.inventory.TargetInventoryEvent {
                            // @ts-ignore
                            getTargetInventory(): org.spongepowered.api.item.inventory.Container
                        }
                    }
                }
            }
        }
    }
}
