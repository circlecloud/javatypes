declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        /**
                         * Fires whenever the left and right slots of an anvil are filled and a new result is computed.
                         */
                        // @ts-ignore
                        interface UpdateAnvilEvent extends org.spongepowered.api.event.item.inventory.TargetInventoryEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Returns the new item name.
                             * @return The new item name
                             */
                            // @ts-ignore
                            getItemName(): string
                            /**
                             * Returns the left input item.
                             * @return The left input item
                             */
                            // @ts-ignore
                            getLeft(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                            /**
                             * Returns the right input item.
                             * @return The right input item
                             */
                            // @ts-ignore
                            getRight(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                            /**
                             * Returns the transaction for the resulting item.
                             * @return The transaction for the resulting item.
                             */
                            // @ts-ignore
                            getResult(): org.spongepowered.api.data.Transaction<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                            /**
                             * Returns the transaction for the repair costs.
                             * @return The transaction for the repair costs.
                             */
                            // @ts-ignore
                            getCosts(): org.spongepowered.api.data.Transaction<org.spongepowered.api.item.inventory.AnvilCost>
                        }
                    }
                }
            }
        }
    }
}
