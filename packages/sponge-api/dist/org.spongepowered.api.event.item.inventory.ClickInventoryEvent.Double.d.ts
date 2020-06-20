declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace ClickInventoryEvent {
                            /**
                             * A double-click with the primary mouse button collecting items onto the cursor.
                             * <p>Note that a Shift-Double-Click instead fires multiple {@link ClickInventoryEvent.Shift} events.</p>
                             */
                            // @ts-ignore
                            interface Double extends org.spongepowered.api.event.item.inventory.ClickInventoryEvent.Primary {
                            }
                        }
                    }
                }
            }
        }
    }
}
