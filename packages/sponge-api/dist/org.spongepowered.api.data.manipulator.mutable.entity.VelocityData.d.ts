declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Represents the current velocity of an entity. Applicable to all
                             * {@link Entity}.
                             */
                            // @ts-ignore
                            interface VelocityData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.VelocityData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableVelocityData> {
                                /**
                                 * Gets the {@link Value} for the current velocity as a
                                 * {@link Vector3d}.
                                 * @return The value for the current velocity
                                 * @see Keys#VELOCITY
                                 */
                                // @ts-ignore
                                velocity(): org.spongepowered.api.data.value.mutable.Value<Vector3d>
                            }
                        }
                    }
                }
            }
        }
    }
}
