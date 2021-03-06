declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace action {
                    namespace SleepingEvent {
                        // @ts-ignore
                        interface Post extends org.spongepowered.api.event.action.SleepingEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets whether the spawn transform for the human was set.
                             * <p>The case that spawn may have not been set includes:</p>
                             * <ul><li>A player attempting to sleep in a bed in the nether</li></ul>
                             * @return Whether the spawn transform for the human was set
                             */
                            // @ts-ignore
                            isSpawnSet(): boolean
                            /**
                             * Gets a copy of the spawn transform of the human when leaving the bed.
                             * <p>This may have not been set by the event, so checking
                             * {@link #isSpawnSet()} is advisable. If spawn has not been set,
                             * it will return {@link Optional#empty()}.</p>
                             * @return The humans new spawn transform, if available
                             */
                            // @ts-ignore
                            getSpawnTransform(): java.util.Optional<org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>>
                            /**
                             * Sets the new spawn transform of the human leaving the bed.
                             * <p>If spawn {@link #isSpawnSet()} was not in fact set by this event,
                             * this does not override the return value. The given spawn should be
                             * a valid location.</p>
                             * @param transform The new spawn transform for the human
                             */
                            // @ts-ignore
                            setSpawnTransform(transform: org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>): void
                        }
                    }
                }
            }
        }
    }
}
