declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} containing the {@link ImmutableValue}
                             * for the {@link Axis} a {@link BlockState} may have.
                             * <p>Note that {@link BlockTypes#LOG} and {@link BlockTypes#LOG2} do NOT
                             * utilize {@link Axis} but instead use {@link LogAxis} due to their nature
                             * of having {@link LogAxes#NONE}.</p>
                             */
                            // @ts-ignore
                            interface ImmutableAxisData extends org.spongepowered.api.data.manipulator.immutable.ImmutableVariantData<org.spongepowered.api.util.Axis, org.spongepowered.api.data.manipulator.immutable.block.ImmutableAxisData, org.spongepowered.api.data.manipulator.mutable.block.AxisData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the {@link Axis} value.
                                 * @return The immutable value for the axis
                                 */
                                // @ts-ignore
                                axis(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.util.Axis>
                            }
                        }
                    }
                }
            }
        }
    }
}
