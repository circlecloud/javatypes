declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Represents the current acceleration of a fireball. Applicable to all
                             * {@link Fireball}.
                             */
                            // @ts-ignore
                            interface AccelerationData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.AccelerationData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAccelerationData> {
                                /**
                                 * Gets the {@link Value} for the current acceleration as a
                                 * {@link Vector3d}.
                                 * @return The value for the current acceleration
                                 * @see Keys#ACCELERATION
                                 */
                                // @ts-ignore
                                acceleration(): org.spongepowered.api.data.value.mutable.Value<Vector3d>
                            }
                        }
                    }
                }
            }
        }
    }
}
