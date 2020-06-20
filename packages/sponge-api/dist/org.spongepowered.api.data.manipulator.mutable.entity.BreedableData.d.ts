declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Represents a {@link DataManipulator} for the "breedable" state of an
                             * {@link Entity}. Usually applicable to {@link Animal}s.
                             */
                            // @ts-ignore
                            interface BreedableData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.BreedableData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableBreedableData> {
                                /**
                                 * Gets the {@link Value} for the "breedable" state.
                                 * @return The value for the "breedable" state
                                 * @see Keys#CAN_BREED
                                 */
                                // @ts-ignore
                                breedable(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
