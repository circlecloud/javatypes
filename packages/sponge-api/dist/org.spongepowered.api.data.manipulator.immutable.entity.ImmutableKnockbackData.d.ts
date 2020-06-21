declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the "knockback" strength for an
                             * {@link Entity}'s next attack. Usually applicable to {@link Arrow}s, the
                             * level of "knockback" such that the higher the knockback, the further the
                             * attacked {@link Entity} will be "knocked back".
                             */
                            // @ts-ignore
                            interface ImmutableKnockbackData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableKnockbackData, org.spongepowered.api.data.manipulator.mutable.entity.KnockbackData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the "knockback strength.
                                 * @return The immutable value for the knockback strength
                                 */
                                // @ts-ignore
                                knockbackStrength(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
