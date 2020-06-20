declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} representing the {@link Vector3d}
                             * acceleration of a {@link Fireball}.
                             */
                            // @ts-ignore
                            interface ImmutableAccelerationData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAccelerationData, org.spongepowered.api.data.manipulator.mutable.entity.AccelerationData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the current acceleration as a
                                 * {@link Vector3d}.
                                 * @return The immutable value for the current acceleration
                                 */
                                // @ts-ignore
                                acceleration(): org.spongepowered.api.data.value.immutable.ImmutableValue<Vector3d>
                            }
                        }
                    }
                }
            }
        }
    }
}
