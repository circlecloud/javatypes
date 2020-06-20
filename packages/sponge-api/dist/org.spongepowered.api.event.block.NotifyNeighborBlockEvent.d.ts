declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    /**
                     * Called when a block triggers an update to neighboring {link BlockType}s in
                     * one or more {@link Direction}s. There is a way to mark an "update" as being
                     * "invalid" or "cancelled": {@link #filterDirections(Predicate)} will apply a
                     * {@link Predicate} such that if the predicate returns <code>false</code>, the
                     * {@link Direction} will be removed from the {@link #getNeighbors()} map.
                     */
                    // @ts-ignore
                    interface NotifyNeighborBlockEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the immutable {@link Map} of {@link Direction} to {@link
                         * BlockState} of the {@link BlockType} that would normally be
                         * notified of changes.
                         * @return The original directions map
                         */
                        // @ts-ignore
                        getOriginalNeighbors(): java.util.Map<org.spongepowered.api.util.Direction, org.spongepowered.api.block.BlockState>
                        /**
                         * Gets an immutable {@link Map} of {@link Direction} to
                         * {@link BlockState} of the {@link BlockType} that will be notified of
                         * an update. If a {@link Direction} is not required or needing to be
                         * excluded from an update, {@link #filterDirections(Predicate)} will
                         * perform that exclusion.
                         * @return The map
                         */
                        // @ts-ignore
                        getNeighbors(): java.util.Map<org.spongepowered.api.util.Direction, org.spongepowered.api.block.BlockState>
                        /**
                         * Filters out {@link Direction}s of the {@link BlockState}s to be
                         * marked as "valid" after this event. If the
                         * {@link Predicate#test(Object)} returns <code>false</code>, the
                         * {@link BlockState} is removed from {@link #getNeighbors()} map.
                         * @param predicate The predicate to use for filtering.
                         */
                        // @ts-ignore
                        filterDirections(predicate: java.util.function.Predicate<org.spongepowered.api.util.Direction> | java.util.function$.Predicate<org.spongepowered.api.util.Direction>): void
                    }
                }
            }
        }
    }
}
