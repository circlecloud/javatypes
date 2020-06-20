declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace ai {
                        /**
                         * Fires before the target of an {@link Agent} is set.
                         */
                        // @ts-ignore
                        interface SetAITargetEvent extends org.spongepowered.api.event.entity.living.TargetAgentEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets the {@link Agent}s new target {@link Entity}.
                             * @return The target
                             */
                            // @ts-ignore
                            getTarget(): java.util.Optional<org.spongepowered.api.entity.Entity>
                            /**
                             * Sets the {@link Agent}s new target {@link Entity}.
                             * <p>This target is set after the event when it is not cancelled.</p>
                             * <p>Setting a {@code null} target removes the target.</p>
                             * @param target The target
                             */
                            // @ts-ignore
                            setTarget(target: org.spongepowered.api.entity.Entity): void
                        }
                    }
                }
            }
        }
    }
}
