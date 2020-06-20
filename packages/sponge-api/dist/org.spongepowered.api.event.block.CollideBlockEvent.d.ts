declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    /**
                     * Fired when an {@link Entity} collides with a {@link BlockSnapshot}.
                     */
                    // @ts-ignore
                    interface CollideBlockEvent extends org.spongepowered.api.event.action.CollideEvent {
                        /**
                         * Gets the target {@link Location} being interacted with.
                         * @return The location
                         */
                        // @ts-ignore
                        getTargetLocation(): org.spongepowered.api.world.Location<org.spongepowered.api.world.World>
                        /**
                         * Gets the target {@link BlockState} being interacted with.
                         * @return The block state
                         */
                        // @ts-ignore
                        getTargetBlock(): org.spongepowered.api.block.BlockState
                        /**
                         * Gets the target "side" of the {@link BlockState} being interacted with
                         * or {@link Direction#NONE} if not known.
                         * @return An optional containing the side being interacted with or
                         *      {#link Direction#NONE}
                         */
                        // @ts-ignore
                        getTargetSide(): org.spongepowered.api.util.Direction
                    }
                }
            }
        }
    }
}
