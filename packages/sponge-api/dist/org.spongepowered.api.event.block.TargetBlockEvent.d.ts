declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    /**
                     * Base event for when a {@link BlockSnapshot} is a target.
                     */
                    // @ts-ignore
                    interface TargetBlockEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the target {@link BlockSnapshot} of this {@link Event}.
                         * @return The BlockSnapshot
                         */
                        // @ts-ignore
                        getTargetBlock(): org.spongepowered.api.block.BlockSnapshot
                    }
                }
            }
        }
    }
}
