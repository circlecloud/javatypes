declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace DropItemEvent {
                            /**
                             * Handles {@link ItemStack}s and may be called before an {@link Item}
                             * entity is actually constructed.
                             * <p>Note: This is not guaranteed to fire due to custom handling within
                             * a mod or plugin.</p>
                             * <p>Canceling this event only prevents the items from being dropped.
                             * Inventories or blocks affected are not rolled back.</p>
                             */
                            // @ts-ignore
                            interface Pre extends org.spongepowered.api.event.item.inventory.DropItemEvent {
                                /**
                                 * Gets the original immutable list of {@link ItemStackSnapshot}s to be
                                 * dropped.
                                 * @return The original list of dropped items
                                 */
                                // @ts-ignore
                                getOriginalDroppedItems(): Array<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                                /**
                                 * Gets the mutable list of {@link ItemStackSnapshot}s to be dropped.
                                 * @return The list of dropped itemstacks
                                 */
                                // @ts-ignore
                                getDroppedItems(): Array<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                            }
                        }
                    }
                }
            }
        }
    }
}
