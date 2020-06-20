declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace DropItemEvent {
                            /**
                             * Called whenever an {@link Item} is dropped from another source.
                             * <p>Canceling this event only prevents the items from being dropped.
                             * Inventories or blocks affected are not rolled back.</p>
                             */
                            // @ts-ignore
                            interface Custom extends org.spongepowered.api.event.item.inventory.DropItemEvent, org.spongepowered.api.event.entity.SpawnEntityEvent.Custom {
                            }
                        }
                    }
                }
            }
        }
    }
}
