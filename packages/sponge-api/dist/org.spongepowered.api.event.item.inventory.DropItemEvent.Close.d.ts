declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace DropItemEvent {
                            /**
                             * Called whenever an {@link Item} is dispensed by closing a {@link Container}.
                             * <p>e.g. The item on the cursor while closing the container or the contents
                             * of a crafting table with no free slots in the players inventory.</p>
                             * <p>>Canceling this event only prevents the items from being dropped.
                             * Affected inventories are not rolled back!</p>
                             */
                            // @ts-ignore
                            interface Close extends org.spongepowered.api.event.item.inventory.DropItemEvent, org.spongepowered.api.event.entity.SpawnEntityEvent {
                            }
                        }
                    }
                }
            }
        }
    }
}
