declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    namespace data {
                        namespace manipulator {
                            namespace immutable {
                                // @ts-ignore
                                interface ImmutableFluidTankData extends org.spongepowered.api.data.manipulator.immutable.ImmutableMappedData<org.spongepowered.api.util.Direction, java.util.List<org.spongepowered.api.extra.fluid.FluidStackSnapshot>, org.spongepowered.api.extra.fluid.data.manipulator.immutable.ImmutableFluidTankData, org.spongepowered.api.extra.fluid.data.manipulator.mutable.FluidTankData> {
                                    /**
                                     * Gets the {@link MapValue} of the various {@link FluidStackSnapshot}s
                                     * available from the owner. Note that a fluid tank may have multiple
                                     * {@link FluidStack}s differing based on {@link Direction}.
                                     * @return The map value of direction to list of fluid snapshots
                                     */
                                    // @ts-ignore
                                    fluids(): org.spongepowered.api.data.value.immutable.ImmutableMapValue<org.spongepowered.api.util.Direction, java.util.List<org.spongepowered.api.extra.fluid.FluidStackSnapshot>>
                                    /**
                                     * Gets the {@link List} of {@link FluidStackSnapshot}s at a defined
                                     * {@link Direction}.
                                     * @param direction The direction
                                     * @return The list of fluid stack snapshots, if available
                                     */
                                    // @ts-ignore
                                    fluidAtDirection(direction: org.spongepowered.api.util.Direction): java.util.Optional<java.util.List<org.spongepowered.api.extra.fluid.FluidStackSnapshot>>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
