declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        /**
                         * Fired when {@link ItemStack}s are generated into a {@link Inventory}.
                         */
                        // @ts-ignore
                        interface AffectItemStackEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets a list of the {@link Transaction}s for this event. If a
                             * transaction is requested to be marked as "invalid",
                             * {@link Transaction#setValid(boolean)} can be used.
                             * @return The unmodifiable list of transactions
                             */
                            // @ts-ignore
                            getTransactions(): java.util.List<? extends org.spongepowered.api.data.Transaction<org.spongepowered.api.item.inventory.ItemStackSnapshot>>
                            /**
                             * Applies the provided {@link Predicate} to the {@link List} of
                             * {@link Transaction}s from {@link #getTransactions()} such that
                             * any time that {@link Predicate#test(Object)} returns <code>false</code>
                             * on a {@link Transaction}, the {@link Transaction} is
                             * marked as "invalid" and will not apply post event.
                             * <p>{@link Transaction#getFinal()} is used to construct
                             * the {@link ItemStack} to pass to the predicate</p>
                             * @param predicate The predicate to use for filtering
                             * @return The transactions for which the predicate returned
                             *      <code>false</code>
                             */
                            // @ts-ignore
                            filter(predicate: java.util.function.Predicate<org.spongepowered.api.item.inventory.ItemStack> | java.util.function$.Predicate<org.spongepowered.api.item.inventory.ItemStack>): java.util.List<? extends org.spongepowered.api.data.Transaction<org.spongepowered.api.item.inventory.ItemStackSnapshot>>
                        }
                    }
                }
            }
        }
    }
}