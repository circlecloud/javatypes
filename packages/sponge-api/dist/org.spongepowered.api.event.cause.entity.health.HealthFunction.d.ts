declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            // @ts-ignore
                            class HealthFunction extends java.lang.Object implements org.spongepowered.api.event.cause.entity.ModifierFunction<org.spongepowered.api.event.cause.entity.health.HealthModifier> {
                                /**
                                 * Creates a new {@link HealthFunction} with the provided
                                 * {@link HealthModifier}. The caveat is that the provided
                                 * {@link DoubleUnaryOperator} is by default going to provide {@code 0}
                                 * healing modifications.
                                 * @param modifier The damage modifier
                                 */
                                // @ts-ignore
                                constructor(modifier: org.spongepowered.api.event.cause.entity.health.HealthModifier)
                                /**
                                 * Creates a new {@link HealthFunction} with the provided
                                 * {@link HealthModifier} and function.
                                 * @param modifier The health modifier to use
                                 * @param function The double unary operator to use
                                 */
                                // @ts-ignore
                                constructor(modifier: org.spongepowered.api.event.cause.entity.health.HealthModifier, func: java.util.function.DoubleUnaryOperator | java.util.function$.DoubleUnaryOperator)
                                // @ts-ignore
                                readonly NO_HEALTH: java.util.function.DoubleUnaryOperator | java.util.function$.DoubleUnaryOperator
                                /**
                                 * Constructs a new health function.
                                 * @param first The health modifier to use
                                 * @param second The unary operator to use
                                 * @return The resulting health function
                                 */
                                // @ts-ignore
                                of(first: org.spongepowered.api.event.cause.entity.health.HealthModifier, second: java.util.function.DoubleUnaryOperator | java.util.function$.DoubleUnaryOperator): org.spongepowered.api.event.cause.entity.health.HealthFunction
                                /**
                                 * Gets the {@link HealthModifier} for this function.
                                 * @return The health modifier
                                 */
                                // @ts-ignore
                                getModifier(): org.spongepowered.api.event.cause.entity.health.HealthModifier
                                /**
                                 * Gets the {@link DoubleUnaryOperator} for this function.
                                 * @return The healing function
                                 */
                                // @ts-ignore
                                getFunction(): java.util.function.DoubleUnaryOperator
                                // @ts-ignore
                                toString(): java.lang.String
                                // @ts-ignore
                                equals(o: any): boolean
                                // @ts-ignore
                                hashCode(): int
                            }
                        }
                    }
                }
            }
        }
    }
}
