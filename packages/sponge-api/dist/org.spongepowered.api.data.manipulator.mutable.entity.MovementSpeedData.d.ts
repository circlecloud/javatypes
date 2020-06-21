declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} that handles the various movement "speeds" that
                             * usually a {@link Player} can have.
                             */
                            // @ts-ignore
                            interface MovementSpeedData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.MovementSpeedData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableMovementSpeedData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "walking" speed.
                                 * @return The value for the walking speed
                                 * @see Keys#WALKING_SPEED
                                 */
                                // @ts-ignore
                                walkSpeed(): org.spongepowered.api.data.value.mutable.Value<java.lang.Double | number>
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "flying" speed.
                                 * @return The value for the flying speed
                                 * @see Keys#FLYING_SPEED
                                 */
                                // @ts-ignore
                                flySpeed(): org.spongepowered.api.data.value.mutable.Value<java.lang.Double | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
