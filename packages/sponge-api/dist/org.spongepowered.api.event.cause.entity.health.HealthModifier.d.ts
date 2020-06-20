declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            /**
                             * Represents a modifier that will apply a function on a damage value to deal
                             * towards an entity such that the raw damage is the input of a
                             * {@link DoubleUnaryOperator} such that the output will be the final damage
                             * applied to the {@link Entity}.
                             */
                            // @ts-ignore
                            interface HealthModifier {
                                /**
                                 * Creates a new {@link Builder} for constructing new {@link HealthModifier}s.
                                 * @return A new builder
                                 */
                                // @ts-ignore
                                builder(): org.spongepowered.api.event.cause.entity.health.HealthModifier.Builder
                                /**
                                 * Gets the {@link HealthModifierType} for this {@link HealthModifier}.
                                 * @return The damage modifier type
                                 */
                                // @ts-ignore
                                getType(): org.spongepowered.api.event.cause.entity.health.HealthModifierType
                                /**
                                 * Gets the cause of this {@link HealthModifier}.
                                 * @return The cause of this damage modifier
                                 */
                                // @ts-ignore
                                getCause(): org.spongepowered.api.event.cause.Cause
                            }
                        }
                    }
                }
            }
        }
    }
}
