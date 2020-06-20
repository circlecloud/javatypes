declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    namespace data {
                        namespace manipulator {
                            namespace immutable {
                                /**
                                 * Represented data for a {@link FluidStackSnapshot}, which may be owned by
                                 * various instances of {@link ItemStack}s, {@link TileEntity} instances,
                                 * and possibly {@link Entity} instances. Traditionally,
                                 * {@link ItemTypes#BUCKET}s will not have changeable instances of data without
                                 * changing the {@link ItemType}. Provided that a {@link TileEntity} contains
                                 * multiple fluids, it may have optionally {@link FluidTankData} instead of
                                 * {@link FluidItemData}.
                                 */
                                // @ts-ignore
                                interface ImmutableFluidItemData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.extra.fluid.data.manipulator.immutable.ImmutableFluidItemData, org.spongepowered.api.extra.fluid.data.manipulator.mutable.FluidItemData> {
                                    /**
                                     * Gets the {@link ImmutableValue} of the {@link FluidStackSnapshot}.
                                     * @return The immutable value of the fluid stack snapshot
                                     */
                                    // @ts-ignore
                                    fluid(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.extra.fluid.FluidStackSnapshot>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
