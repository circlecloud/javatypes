declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        namespace CraftItemEvent {
                            /**
                             * This event is fired before the item is taken out of the
                             * output slot but after completing the recipe in the grid.
                             */
                            // @ts-ignore
                            interface Preview extends org.spongepowered.api.event.item.inventory.CraftItemEvent {
                                /**
                                 * The SlotTransaction on the output slot.
                                 * <p>Setting a custom Item here changes the result of the recipe replacing the default result</p>
                                 * @return The output SlotTransaction
                                 */
                                // @ts-ignore
                                getPreview(): org.spongepowered.api.item.inventory.transaction.SlotTransaction
                            }
                        }
                    }
                }
            }
        }
    }
}
