declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * A {@link ImmutableDataManipulator} that handles the various movement
                             * "speeds" that usually a {@link Player} can have.
                             */
                            // @ts-ignore
                            interface ImmutableMovementSpeedData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableMovementSpeedData, org.spongepowered.api.data.manipulator.mutable.entity.MovementSpeedData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the "walking" speed.
                                 * @return The immutable value for the walking speed
                                 */
                                // @ts-ignore
                                walkSpeed(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Double>
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the "flying" speed.
                                 * @return The immutable value for the flying speed
                                 */
                                // @ts-ignore
                                flySpeed(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Double>
                            }
                        }
                    }
                }
            }
        }
    }
}
