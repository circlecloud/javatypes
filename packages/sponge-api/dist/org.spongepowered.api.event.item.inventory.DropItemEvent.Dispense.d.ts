declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace DropItemEvent {
                            /**
                             * Called whenever an {@link Item} is dispensed from a type of
                             * {@link Inventory} such as a {@link Player} or {@link Container}.
                             * <p>This does not include cases where the holder is destroyed resulting in
                             * dropped {@link Item}s.</p>
                             * <p>Canceling this event does not guarantee that the associated
                             * inventory is rolled back when this event is cancelled. You might
                             * want to listen to {@link ClickInventoryEvent.Drop}.</p>
                             */
                            // @ts-ignore
                            interface Dispense extends org.spongepowered.api.event.item.inventory.DropItemEvent, org.spongepowered.api.event.entity.SpawnEntityEvent {
                            }
                        }
                    }
                }
            }
        }
    }
}
