declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for representing the "aggressive" state.
                             * If an {@link Entity} is "aggressive", it may attack nearby entities.
                             */
                            // @ts-ignore
                            interface ImmutableAggressiveData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAggressiveData, org.spongepowered.api.data.manipulator.mutable.entity.AggressiveData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "aggressive" state.
                                 * @return The immutable value for the aggressive state
                                 */
                                // @ts-ignore
                                aggressive(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
