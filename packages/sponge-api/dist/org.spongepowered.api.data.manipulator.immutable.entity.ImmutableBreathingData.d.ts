declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} representing the current "air" quantity
                             * that an {@link Entity} can have while "under water".
                             */
                            // @ts-ignore
                            interface ImmutableBreathingData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableBreathingData, org.spongepowered.api.data.manipulator.mutable.entity.BreathingData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the remaining air. Can be
                                 * changed to {@code (air >= 0 && air <= maxAir)}.
                                 * @return The immutable value of remaining air
                                 */
                                // @ts-ignore
                                remainingAir(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the maximum air capacity.
                                 * The reasoning for it being bounded is that the air capacity must always
                                 * remain at least 1.
                                 * @return The immutable bounded value of maximum air capacity
                                 */
                                // @ts-ignore
                                maxAir(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
