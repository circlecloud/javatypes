declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace ClickInventoryEvent {
                            /**
                             * A number press swapping the {@link Hotbar} slot with the slot the mouse hovers over.
                             */
                            // @ts-ignore
                            interface NumberPress extends org.spongepowered.api.event.item.inventory.ClickInventoryEvent {
                                // @ts-ignore
                                getNumber(): int
                            }
                        }
                    }
                }
            }
        }
    }
}
