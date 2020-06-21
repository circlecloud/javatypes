declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            // @ts-ignore
                            class DamageFunction extends java.lang.Object implements org.spongepowered.api.event.cause.entity.ModifierFunction<org.spongepowered.api.event.cause.entity.damage.DamageModifier> {
                                /**
                                 * Creates a new {@link DamageFunction} with the provided
                                 * {@link DamageModifier}. The caveat is that the provided
                                 * {@link DamageFunction} is by default going to provide {@code 0}
                                 * damage modifications.
                                 * @param modifier The damage modifier
                                 */
                                // @ts-ignore
                                constructor(modifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier)
                                /**
                                 * Creates a new {@link DamageFunction} with the provided
                                 * {@link DamageModifier} and {@link DoubleUnaryOperator}.
                                 * @param modifier The modifier
                                 * @param function The function
                                 */
                                // @ts-ignore
                                constructor(modifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator)
                                // @ts-ignore
                                public static readonly ZERO_DAMAGE: java.util.function$.DoubleUnaryOperator
                                /**
                                 * Constructs a new damage function.
                                 * @param first The damage modifier to use
                                 * @param second The unary operator to use
                                 * @return The resulting damage function
                                 */
                                // @ts-ignore
                                public static of(first: org.spongepowered.api.event.cause.entity.damage.DamageModifier, second: java.util.function$.DoubleUnaryOperator): org.spongepowered.api.event.cause.entity.damage.DamageFunction
                                /**
                                 * Gets the {@link DamageModifier} for this function.
                                 * @return The damage modifier
                                 */
                                // @ts-ignore
                                public getModifier(): org.spongepowered.api.event.cause.entity.damage.DamageModifier
                                /**
                                 * Gets the {@link DoubleUnaryOperator} for this function.
                                 * @return The damage function
                                 */
                                // @ts-ignore
                                public getFunction(): java.util.function$.DoubleUnaryOperator
                                // @ts-ignore
                                public toString(): string
                                // @ts-ignore
                                public equals(o: java.lang.Object | any): boolean
                                // @ts-ignore
                                public hashCode(): number /*int*/
                            }
                        }
                    }
                }
            }
        }
    }
}
