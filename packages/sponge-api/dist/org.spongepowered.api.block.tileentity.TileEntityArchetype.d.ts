declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    /**
                     * Represents the data of a {@link TileEntity} which does not exist in the world
                     * and may be used to create new {@link TileEntity}s with the same data.
                     */
                    // @ts-ignore
                    interface TileEntityArchetype extends org.spongepowered.api.data.Archetype<org.spongepowered.api.block.BlockSnapshot, org.spongepowered.api.block.tileentity.TileEntity> {
                        /**
                         * Creates a {@link Builder} to get {@link TileEntityArchetype}s.
                         * @return The new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder
                        /**
                         * Gets the block state for this archetype. Note that this state is
                         * unchangeable, as much as {@link #getTileEntityType()} is. The underlying
                         * data is mutable, but all the data is heavily tied to the tile entity
                         * type.
                         * @return The block state
                         */
                        // @ts-ignore
                        getState(): org.spongepowered.api.block.BlockState
                        /**
                         * Gets the {@link TileEntityType} for this archetype.
                         * @return The tile entity type
                         */
                        // @ts-ignore
                        getTileEntityType(): org.spongepowered.api.block.tileentity.TileEntityType
                        /**
                         * Gets the raw {@link TileEntity} data that would be applied to the
                         * generated tile entity. Note that this is a copied container.
                         * @return The copied container of the tile entity
                         */
                        // @ts-ignore
                        getTileData(): org.spongepowered.api.data.DataContainer
                        /**
                         * Sets the raw data for the desired {@link TileEntity}. Note that position
                         * values are not used as those are dependent on usage.
                         * @param container A container containing all raw data to set on this data
                         *         holder
                         * @throws InvalidDataException If the data is not valid for the archetyped
                         *          tile entity
                         */
                        // @ts-ignore
                        setRawData(container: org.spongepowered.api.data.DataView): void
                        // @ts-ignore
                        copy(): org.spongepowered.api.block.tileentity.TileEntityArchetype
                    }
                }
            }
        }
    }
}
