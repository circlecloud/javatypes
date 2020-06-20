declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} for handling the "snowed" state. Usually
                             * applicable to {@link BlockTypes#DIRT}, and {@link BlockTypes#GRASS}.
                             */
                            // @ts-ignore
                            interface ImmutableSnowedData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableSnowedData, org.spongepowered.api.data.manipulator.mutable.block.SnowedData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "snowed" state.
                                 * @return The immutable value for the "snowed" state
                                 */
                                // @ts-ignore
                                hasSnow(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
