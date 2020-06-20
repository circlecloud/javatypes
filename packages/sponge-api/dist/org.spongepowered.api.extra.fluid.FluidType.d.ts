declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    /**
                     * The functional equivalent of an {@link ItemType} or {@link BlockType},
                     * except for fluids. Normally, the gameplay mechanics of fluids are entirely
                     * dependent on the implementation of a fluid; however, they are representable
                     * as {@link FluidStack}s, where a certain amount of a {@link FluidType} for
                     * a specified volume "exists" within a {@link FluidTankData}.
                     * <p>Normally, {@link FluidTankData} can be either retrieved from either a
                     * {@link BlockState} or {@link TileEntity} that specifically handles fluids.
                     * Depending on the implementation, a fluid stack may be used differently than
                     * how vanilla implementations handle them.</p>
                     */
                    // @ts-ignore
                    interface FluidType extends org.spongepowered.api.CatalogType, org.spongepowered.api.data.property.PropertyHolder {
                        /**
                         * Gets the {@link BlockType} that normally would represent this fluid
                         * type if it exists as a block in the world.
                         * @return The optional block representation of a fluid in a world
                         */
                        // @ts-ignore
                        getBlockTypeBase(): java.util.Optional<org.spongepowered.api.block.BlockType>
                    }
                }
            }
        }
    }
}
