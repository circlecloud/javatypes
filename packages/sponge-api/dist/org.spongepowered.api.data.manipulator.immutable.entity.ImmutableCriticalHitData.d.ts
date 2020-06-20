declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} representing the next attack is
                             * considered a "critical" hit. Usually applicable to {@link Arrow}s.
                             */
                            // @ts-ignore
                            interface ImmutableCriticalHitData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableCriticalHitData, org.spongepowered.api.data.manipulator.mutable.entity.CriticalHitData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "critical hit" state.
                                 * @return The immutable value for the "critical hit" state
                                 */
                                // @ts-ignore
                                criticalHit(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
