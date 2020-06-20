declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the gravity state. If the value is
                             * true, the {@link Entity} will have gravity.
                             */
                            // @ts-ignore
                            interface ImmutableGravityData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableGravityData, org.spongepowered.api.data.manipulator.mutable.entity.GravityData> {
                                /**
                                 * Gets the {@link ImmutableValue} of the gravity of an {@link Entity}.
                                 * Returns true when the {@link Entity} has gravity.
                                 * @return The immutable value of the gravity
                                 */
                                // @ts-ignore
                                gravity(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
