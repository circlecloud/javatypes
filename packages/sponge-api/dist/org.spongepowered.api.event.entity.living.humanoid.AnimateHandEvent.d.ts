declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            /**
                             * Called when a {@link Humanoid} hand animation occurs.
                             * <p>Note: Canceling this event will only stop animation from being seen
                             * on server. Animation will always occur on client-side for {@link Player}'s.</p>
                             */
                            // @ts-ignore
                            interface AnimateHandEvent extends org.spongepowered.api.event.entity.living.humanoid.TargetHumanoidEvent, org.spongepowered.api.event.Cancellable {
                                /**
                                 * Gets the {@link HandType} used for animation.
                                 * @return The hand type
                                 */
                                // @ts-ignore
                                getHandType(): org.spongepowered.api.data.type.HandType
                            }
                        }
                    }
                }
            }
        }
    }
}
