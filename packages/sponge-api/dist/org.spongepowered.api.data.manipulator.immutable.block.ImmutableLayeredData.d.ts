declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} for the "layer" of a block. Usually this
                             * means that the {@link BlockState} has varying "layers". Usually applies to
                             * {@link BlockTypes#SNOW_LAYER} or {@link BlockTypes#CAKE}. This is different
                             * data from {@link ImmutableFluidLevelData}.
                             */
                            // @ts-ignore
                            interface ImmutableLayeredData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableLayeredData, org.spongepowered.api.data.manipulator.mutable.block.LayeredData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the "layer" state.
                                 * @return The immutable bounded value for the "layer" state
                                 */
                                // @ts-ignore
                                layer(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
