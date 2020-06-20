declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace tileentity {
                        namespace SmeltEvent {
                            /**
                             * Fires when the smelting is interrupted causing the current smelting time to reset to 0.
                             */
                            // @ts-ignore
                            interface Interrupt extends org.spongepowered.api.event.block.tileentity.SmeltEvent {
                                /**
                                 * Gets an immutable {@link List} of {@link ItemStackSnapshot}s that are the result
                                 * of the smelt.
                                 * @return The smelt items
                                 * @deprecated always empty
                                 */
                                // @ts-ignore
                                getSmeltedItems(): java.util.List<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                            }
                        }
                    }
                }
            }
        }
    }
}
