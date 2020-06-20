declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * Represents the {@link Axis} aligned data for various "rotational" blocks
                             * such as {@link BlockTypes#LOG}, {@link BlockTypes#QUARTZ_BLOCK}, etc.
                             * <p>Note that {@link BlockTypes#LOG} and {@link BlockTypes#LOG2} do NOT
                             * utilize {@link Axis} but instead use {@link LogAxis} due to their nature
                             * of having {@link LogAxes#NONE}.</p>
                             * @see Keys#AXIS
                             */
                            // @ts-ignore
                            interface AxisData extends org.spongepowered.api.data.manipulator.mutable.VariantData<org.spongepowered.api.util.Axis, org.spongepowered.api.data.manipulator.mutable.block.AxisData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableAxisData> {
                            }
                        }
                    }
                }
            }
        }
    }
}
