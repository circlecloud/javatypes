declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * An {@link VariantData} for the {@link LogAxis}. Usually applies to all types
                             * of {@link BlockTypes#LOG}. This is fundamentally different from
                             * {@link AxisData} due to the fact that a log can have a {@link LogAxes#NONE}.
                             * @see Keys#LOG_AXIS
                             */
                            // @ts-ignore
                            interface LogAxisData extends org.spongepowered.api.data.manipulator.mutable.VariantData<org.spongepowered.api.data.type.LogAxis, org.spongepowered.api.data.manipulator.mutable.block.LogAxisData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableLogAxisData> {
                            }
                        }
                    }
                }
            }
        }
    }
}
