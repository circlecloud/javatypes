declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    namespace data {
                        namespace manipulator {
                            namespace mutable {
                                /**
                                 * Represented data for a {@link FluidStackSnapshot}, which may be owned by
                                 * various instances of {@link ItemStack}s, {@link TileEntity} instances,
                                 * and possibly {@link Entity} instances. Traditionally,
                                 * {@link ItemTypes#BUCKET}s will not have changeable instances of data without
                                 * changing the {@link ItemType}. Provided that a {@link TileEntity} contains
                                 * multiple fluids, it may have optionaly {@link FluidTankData} instead of
                                 * {@link FluidItemData}.
                                 */
                                // @ts-ignore
                                interface FluidItemData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.extra.fluid.data.manipulator.mutable.FluidItemData, org.spongepowered.api.extra.fluid.data.manipulator.immutable.ImmutableFluidItemData> {
                                    /**
                                     * Gets the {@link FluidStackSnapshot} from the owner as a value.
                                     * @return The value of the fluid stack snapshot
                                     * @see Keys#FLUID_ITEM_STACK
                                     */
                                    // @ts-ignore
                                    fluid(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.extra.fluid.FluidStackSnapshot>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
