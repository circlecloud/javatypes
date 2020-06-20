declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * An {@link DataManipulator} for handling the "snowed" state. Usually
                             * applicable to {@link BlockTypes#DIRT}, and {@link BlockTypes#GRASS}.
                             */
                            // @ts-ignore
                            interface SnowedData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.SnowedData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableSnowedData> {
                                /**
                                 * Gets the {@link Value} for the "snowed" state.
                                 * @return The immutable value for the "snowed" state
                                 * @see Keys#SNOWED
                                 */
                                // @ts-ignore
                                hasSnow(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
