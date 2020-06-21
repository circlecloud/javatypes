declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} for the "knockback" strength for an
                             * {@link Entity}'s next attack. Usually applicable to {@link Arrow}s, the
                             * level of "knockback" such that the higher the knockback, the further the
                             * attacked {@link Entity} will be "knocked back".
                             */
                            // @ts-ignore
                            interface KnockbackData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.KnockbackData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableKnockbackData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "knockback strength.
                                 * @return The immutable value for the knockback strength
                                 * @see Keys#KNOCKBACK_STRENGTH
                                 */
                                // @ts-ignore
                                knockbackStrength(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
