declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    namespace data {
                        namespace manipulator {
                            namespace mutable {
                                /**
                                 * The primary definition of a "tank" is that at any given {@link Direction},
                                 * the {@link DataHolder} may have multiple {@link FluidStack}s existing within
                                 * itself. Granted, in most cases, the {@link Direction} doesn't quite matter as
                                 * the tank itself is just a single container containing multiple
                                 * {@link FluidStack}s, however, in some cases, mod added tanks may have
                                 * different tanks for different directions. Note that setting an empty
                                 * {@link List} of {@link FluidStackSnapshot}s to a {@link Direction} is the
                                 * functional equivalent to saying "remove all fluids from that direction".
                                 */
                                // @ts-ignore
                                interface FluidTankData extends org.spongepowered.api.data.manipulator.mutable.MappedData<org.spongepowered.api.util.Direction, java.util.List<org.spongepowered.api.extra.fluid.FluidStackSnapshot>, org.spongepowered.api.extra.fluid.data.manipulator.mutable.FluidTankData, org.spongepowered.api.extra.fluid.data.manipulator.immutable.ImmutableFluidTankData> {
                                    /**
                                     * Gets the {@link MapValue} of the various {@link FluidStackSnapshot}s
                                     * available from the owner. Note that a fluid tank may have multiple
                                     * {@link FluidStack}s differing based on {@link Direction}.
                                     * @return The map value of direction to list of fluid snapshots
                                     * @see Keys#FLUID_TANK_CONTENTS
                                     */
                                    // @ts-ignore
                                    fluids(): org.spongepowered.api.data.value.mutable.MapValue<org.spongepowered.api.util.Direction, java.util.List<org.spongepowered.api.extra.fluid.FluidStackSnapshot>>
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
