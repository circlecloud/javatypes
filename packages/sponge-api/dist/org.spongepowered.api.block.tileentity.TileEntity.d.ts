declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    /**
                     * Represents an abstract Tile Entity. It is a functional block that is
                     * continuously updated while residing in a world. It can perform specific
                     * functions based on the data that it contains.
                     * <p>A {@link TileEntity} is contained within a {@link Location} and will
                     * continue to exists so long as the {@link Location} is of the correct
                     * block type.</p>
                     * <p>Since a {@link TileEntity} is performing various actions, all methods
                     * that are purely functional methods reside in the {@link TileEntity}, whereas
                     * customizable data associated with a {@link TileEntity} is represented by
                     * {@link DataManipulator}.</p>
                     */
                    // @ts-ignore
                    interface TileEntity extends org.spongepowered.api.data.DataHolder, org.spongepowered.api.world.Locatable {
                        /**
                         * Checks for whether the tile entity is currently valid or not.
                         * <p>Use this method to check if processing should be run on this
                         * {@link TileEntity}. If it is valid, then processing can be run on it.
                         * If not, then processing should wait until it becomes valid or is
                         * destroyed.</p>
                         * @return True if the tile entity is valid, false if not
                         */
                        // @ts-ignore
                        isValid(): boolean
                        /**
                         * Changes the validation of this tile entity.
                         * <p>If the tile entity is invalid, no processing will be done on this
                         * {@link TileEntity} until it either becomes valid or is reset on the next
                         * tick.</p>
                         * <p>If the tile entity is valid, then processing can continue and this
                         * {@link TileEntity} will not be reset on the next tick.</p>
                         * @param valid True if the tile entity should be validated, or false if
                         *      it should be invalidated
                         */
                        // @ts-ignore
                        setValid(valid: boolean): void
                        /**
                         * Gets the type of {@link TileEntity} this is.
                         * @return The type of tile entity
                         */
                        // @ts-ignore
                        getType(): org.spongepowered.api.block.tileentity.TileEntityType
                        /**
                         * Gets the {@link BlockState} that this {@link TileEntity} represents.
                         * @return The blockstate
                         */
                        // @ts-ignore
                        getBlock(): org.spongepowered.api.block.BlockState
                        /**
                         * Creates a new {@link TileEntityArchetype} for use with {@link Schematic}s
                         * and placing the archetype in multiple locations.
                         * @return The created archetype for re-creating this tile entity
                         */
                        // @ts-ignore
                        createArchetype(): org.spongepowered.api.block.tileentity.TileEntityArchetype
                        /**
                         * Creates a {@link LocatableBlock} for this {@link TileEntity}. Can be used
                         * as a simpler method of making them. Since this does not persist the
                         * data of this {@link TileEntity}, it should not be used in place of a
                         * {@link BlockSnapshot} where data is being safely cloned.
                         * @return The created locatable block, not as a block snapshot
                         */
                        // @ts-ignore
                        getLocatableBlock(): org.spongepowered.api.world.LocatableBlock
                    }
                }
            }
        }
    }
}
