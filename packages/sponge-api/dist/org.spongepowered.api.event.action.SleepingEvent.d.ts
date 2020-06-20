declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace action {
                    /**
                     * Called when a {@link Humanoid} enters a bed to sleep in.
                     */
                    // @ts-ignore
                    interface SleepingEvent extends org.spongepowered.api.event.entity.TargetEntityEvent {
                        /**
                         * Gets the {@link BlockSnapshot} of the bed being used to sleep.
                         * @return The location of the bed
                         */
                        // @ts-ignore
                        getBed(): org.spongepowered.api.block.BlockSnapshot
                    }
                }
            }
        }
    }
}
