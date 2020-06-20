declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace DropItemEvent {
                            /**
                             * Called when one or more {@link Item} drops are triggered by an
                             * object such as an {@link Entity} or {@link BlockType} destruction.
                             * <p>Canceling this event only prevents the items from being dropped.
                             * Inventories or blocks affected are not rolled back. You might want
                             * to listen to {@link org.spongepowered.api.event.block.ChangeBlockEvent.Break} or
                             * {@link org.spongepowered.api.event.entity.DestructEntityEvent.Death}.</p>
                             */
                            // @ts-ignore
                            interface Destruct extends org.spongepowered.api.event.item.inventory.DropItemEvent, org.spongepowered.api.event.entity.SpawnEntityEvent {
                            }
                        }
                    }
                }
            }
        }
    }
}
