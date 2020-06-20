declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} that tracks the "growth" stage. Usually
                             * applicable to {@link BlockTypes#WHEAT}, {@link BlockTypes#PUMPKIN_STEM}, etc.
                             * The {@code growth} state is generalized such that at the highest "state",
                             * the growth will cease and the owner would be "ready" for harvesting.
                             */
                            // @ts-ignore
                            interface ImmutableGrowthData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableGrowthData, org.spongepowered.api.data.manipulator.mutable.block.GrowthData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the "growth" stage.
                                 * @return The immutable bounded value growth stage
                                 */
                                // @ts-ignore
                                growthStage(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
