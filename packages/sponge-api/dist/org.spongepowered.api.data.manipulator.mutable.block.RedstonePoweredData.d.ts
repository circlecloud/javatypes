declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * An {@link DataManipulator} for the current output of "redstone power". The
                             * mechanics of this and a {@link BlockState} is that the  {@link BlockState}
                             * must support defining the current "redstone power output" such that blocks
                             * nearby may become affected. Usually applicable to
                             * {@link BlockTypes#REDSTONE_WIRE},
                             * {@link BlockTypes#LIGHT_WEIGHTED_PRESSURE_PLATE},
                             * {@link BlockTypes#HEAVY_WEIGHTED_PRESSURE_PLATE}, and
                             * {@link BlockTypes#DAYLIGHT_DETECTOR}, etc.
                             */
                            // @ts-ignore
                            interface RedstonePoweredData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.RedstonePoweredData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableRedstonePoweredData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the output of "redstone
                                 * power".
                                 * @return The bounded value for "redstone power"
                                 * @see Keys#POWER
                                 */
                                // @ts-ignore
                                power(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
