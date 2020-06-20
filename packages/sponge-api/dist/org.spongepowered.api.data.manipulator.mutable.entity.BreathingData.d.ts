declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Represents the remaining air information for various entities while they
                             * are underwater.
                             */
                            // @ts-ignore
                            interface BreathingData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.BreathingData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableBreathingData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the remaining air. Can be
                                 * changed to {@code (air >= 0 && air <= maxAir)}.
                                 * @return The mutable value of remaining air
                                 * @see Keys#REMAINING_AIR
                                 */
                                // @ts-ignore
                                remainingAir(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>
                                /**
                                 * Gets the {@link MutableBoundedValue} for the maximum air capacity.
                                 * The reasoning for it being bounded is that the air capacity must always
                                 * remain at least 1.
                                 * @return The mutable bounded value of maximum air capacity
                                 * @see Keys#MAX_AIR
                                 */
                                // @ts-ignore
                                maxAir(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
