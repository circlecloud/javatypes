declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    /**
                     * Base event for when {@link BlockState}s at {@link Location}s are being
                     * changed.
                     */
                    // @ts-ignore
                    interface ChangeBlockEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets a list of the {@link Transaction}s for this event. If a
                         * transaction is requested to be marked as "invalid",
                         * {@link Transaction#setValid(boolean)} can be used.
                         * @return The unmodifiable list of transactions
                         */
                        // @ts-ignore
                        getTransactions(): Array<org.spongepowered.api.data.Transaction<org.spongepowered.api.block.BlockSnapshot>>
                        /**
                         * Applies the provided {@link Predicate} to the {@link List} of
                         * {@link Transaction}s from {@link #getTransactions()} such that
                         * any time that {@link Predicate#test(Object)} returns <code>false</code>
                         * on the location of the {@link Transaction}, the {@link Transaction} is
                         * marked as "invalid" and will not apply post event.
                         * <p>{@link Transaction#getOriginal()} is used to get the {@link Location}</p>
                         * @param predicate The predicate to use for filtering
                         * @return The transactions for which the predicate returned
                         *      <code>false</code>
                         */
                        // @ts-ignore
                        filter(predicate: java.util.function$.Predicate<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>): Array<org.spongepowered.api.data.Transaction<org.spongepowered.api.block.BlockSnapshot>>
                        /**
                         * Invalidates the list as such that all {@link Transaction}s are
                         * marked as "invalid" and will not apply post event.
                         */
                        // @ts-ignore
                        filterAll(): void
                    }
                }
            }
        }
    }
}
