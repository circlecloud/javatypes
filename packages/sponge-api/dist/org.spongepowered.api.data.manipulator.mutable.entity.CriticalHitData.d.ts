declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Signifies that an entity's next attack is considered a "critical" hit.
                             * Usually applicable to {@link Arrow}s.
                             */
                            // @ts-ignore
                            interface CriticalHitData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.CriticalHitData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableCriticalHitData> {
                                /**
                                 * Gets the {@link Value} for the "critical hit" state.
                                 * @return The value for the "critical hit" state
                                 * @see Keys#CRITICAL_HIT
                                 */
                                // @ts-ignore
                                criticalHit(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
