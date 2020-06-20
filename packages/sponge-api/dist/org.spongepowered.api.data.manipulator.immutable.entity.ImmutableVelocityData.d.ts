declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} representing the {@link Vector3d}
                             * velocity of an {@link Entity}.
                             */
                            // @ts-ignore
                            interface ImmutableVelocityData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableVelocityData, org.spongepowered.api.data.manipulator.mutable.entity.VelocityData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the current velocity as a
                                 * {@link Vector3d}.
                                 * @return The immutable value for the current velocity
                                 */
                                // @ts-ignore
                                velocity(): org.spongepowered.api.data.value.immutable.ImmutableValue<Vector3d>
                            }
                        }
                    }
                }
            }
        }
    }
}
