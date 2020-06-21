declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * An {@link DataManipulator} for the "layer" of a block. Usually this means
                             * that the {@link BlockState} has varying "layers". Usually applies to
                             * {@link BlockTypes#SNOW_LAYER} or {@link BlockTypes#CAKE}. This is different
                             * data from {@link FluidLevelData}.
                             */
                            // @ts-ignore
                            interface LayeredData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.LayeredData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableLayeredData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "layer" state.
                                 * @return The bounded value for the "layer" state
                                 * @see Keys#LAYER
                                 */
                                // @ts-ignore
                                layer(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
