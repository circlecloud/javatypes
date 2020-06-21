declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * An {@link DataManipulator} for the "fluid level" state. Usually, the
                             * {@link #level()} value remains such that at {@code 0}, the "fluid level" is
                             * the equivalent of being "dried out". Usually, this state applies to
                             * {@link BlockTypes#WATER}, {@link BlockTypes#LAVA}, and
                             * {@link BlockTypes#CAULDRON}.
                             */
                            // @ts-ignore
                            interface FluidLevelData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.FluidLevelData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableFluidLevelData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} of the "fluid level" state.
                                 * @return The bounded value for the fluid level state
                                 * @see Keys#FLUID_LEVEL
                                 */
                                // @ts-ignore
                                level(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
