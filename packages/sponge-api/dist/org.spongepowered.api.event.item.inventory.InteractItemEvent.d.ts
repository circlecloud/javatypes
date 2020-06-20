declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        /**
                         * Base event for all interactions with an {@link ItemStack} in hand.
                         * <p>Note: Canceling this event will halt any future actions from
                         * occurring.</p>
                         */
                        // @ts-ignore
                        interface InteractItemEvent extends org.spongepowered.api.event.action.InteractEvent {
                            /**
                             * Gets the {@link ItemStackSnapshot} being interacted with.
                             * @return The item being interacted with
                             */
                            // @ts-ignore
                            getItemStack(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                        }
                    }
                }
            }
        }
    }
}
