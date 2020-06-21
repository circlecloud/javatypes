declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} for the current output of "redstone
                             * power". The mechanics of this and a {@link BlockState} is that the
                             * {@link BlockState} must support defining the current "redstone power output"
                             * such that blocks nearby may become affected. Usually applicable to
                             * {@link BlockTypes#REDSTONE_WIRE},
                             * {@link BlockTypes#LIGHT_WEIGHTED_PRESSURE_PLATE},
                             * {@link BlockTypes#HEAVY_WEIGHTED_PRESSURE_PLATE}, and
                             * {@link BlockTypes#DAYLIGHT_DETECTOR}, etc.
                             */
                            // @ts-ignore
                            interface ImmutableRedstonePoweredData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableRedstonePoweredData, org.spongepowered.api.data.manipulator.mutable.block.RedstonePoweredData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the output of "redstone
                                 * power".
                                 * @return The immutable bounded value for "redstone power"
                                 */
                                // @ts-ignore
                                power(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
