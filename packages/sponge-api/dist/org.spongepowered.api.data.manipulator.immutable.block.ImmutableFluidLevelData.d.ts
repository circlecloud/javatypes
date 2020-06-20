declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} for the "fluid level" state. Usually,
                             * the {@link #level()} value remains such that at {@code 0}, the "fluid level"
                             * is the equivalent of being "dried out". Usually, this state applies to
                             * {@link BlockTypes#WATER}, {@link BlockTypes#LAVA}, and
                             * {@link BlockTypes#CAULDRON}.
                             */
                            // @ts-ignore
                            interface ImmutableFluidLevelData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableFluidLevelData, org.spongepowered.api.data.manipulator.mutable.block.FluidLevelData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} of the "fluid level" state.
                                 * @return The immutable bounded value for the fluid level state
                                 */
                                // @ts-ignore
                                level(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
