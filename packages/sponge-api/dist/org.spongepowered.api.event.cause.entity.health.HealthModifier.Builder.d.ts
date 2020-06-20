declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            namespace HealthModifier {
                                /**
                                 * A builder that creates {@link HealthModifier}s, for use in both plugin
                                 * and implementation requirements.
                                 */
                                // @ts-ignore
                                class Builder extends java.lang.Object implements org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.event.cause.entity.health.HealthModifier, org.spongepowered.api.event.cause.entity.health.HealthModifier.Builder> {
                                    /**
                                     * Creates a new {@link Builder}.
                                     * @return The new builder instance
                                     */
                                    // @ts-ignore
                                    builder(): org.spongepowered.api.event.cause.entity.health.HealthModifier.Builder
                                    /**
                                     * Sets the {@link HealthModifierType} for the {@link HealthModifier} to
                                     * build.
                                     * @param healthModifierType The health modifier type
                                     * @return This builder, for chaining
                                     */
                                    // @ts-ignore
                                    type(healthModifierType: org.spongepowered.api.event.cause.entity.health.HealthModifierType): org.spongepowered.api.event.cause.entity.health.HealthModifier.Builder
                                    /**
                                     * Sets the {@link Cause} for the {@link HealthModifier} to build.
                                     * @param cause The cause for the health modifier
                                     * @return This builder, for chaining
                                     */
                                    // @ts-ignore
                                    cause(cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.event.cause.entity.health.HealthModifier.Builder
                                    /**
                                     * Creates a new {@link HealthModifier} with this builder's provided
                                     * {@link Cause} and {@link HealthModifierType}.
                                     * @return The newly created health modifier
                                     */
                                    // @ts-ignore
                                    build(): org.spongepowered.api.event.cause.entity.health.HealthModifier
                                    // @ts-ignore
                                    from(value: org.spongepowered.api.event.cause.entity.health.HealthModifier): org.spongepowered.api.event.cause.entity.health.HealthModifier.Builder
                                    // @ts-ignore
                                    reset(): org.spongepowered.api.event.cause.entity.health.HealthModifier.Builder
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
