declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace ClickInventoryEvent {
                            /**
                             * A completed drag Interaction.
                             * <p>Usually contains multiple transactions. {@link #getSlot()} returns empty as there is no primary interaction Slot.</p>
                             */
                            // @ts-ignore
                            interface Drag extends org.spongepowered.api.event.item.inventory.ClickInventoryEvent {
                            }
                        }
                    }
                }
            }
        }
    }
}
