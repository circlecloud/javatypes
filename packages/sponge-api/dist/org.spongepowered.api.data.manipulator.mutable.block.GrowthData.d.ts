declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * An {@link DataManipulator} that tracks the "growth" stage. Usually
                             * applicable to {@link BlockTypes#WHEAT}, {@link BlockTypes#PUMPKIN_STEM}, etc.
                             * The {@code growth} state is generalized such that at the highest "state",
                             * the growth will cease and the owner would be "ready" for harvesting.
                             */
                            // @ts-ignore
                            interface GrowthData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.GrowthData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableGrowthData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "growth" stage.
                                 * @return The immutable bounded value growth stage
                                 * @see Keys#GROWTH_STAGE
                                 */
                                // @ts-ignore
                                growthStage(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
