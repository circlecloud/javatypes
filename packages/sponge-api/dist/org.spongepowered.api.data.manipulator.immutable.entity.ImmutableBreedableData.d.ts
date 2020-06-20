declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * Represents an {@link ImmutableDataManipulator} for the "breedable" state of
                             * an {@link Entity}. Usually applicable to {@link Animal}s.
                             */
                            // @ts-ignore
                            interface ImmutableBreedableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableBreedableData, org.spongepowered.api.data.manipulator.mutable.entity.BreedableData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "breedable" state.
                                 * @return The value for the "breedable" state
                                 */
                                // @ts-ignore
                                breedable(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
