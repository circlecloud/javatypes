declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    /**
                     * Represents a Structure.
                     * <p>Structure blocks can be used to save and load
                     * structures, alongside {@link BlockTypes#STRUCTURE_VOID structure void} blocks.</p>
                     */
                    // @ts-ignore
                    interface Structure extends org.spongepowered.api.block.tileentity.TileEntity {
                        /**
                         * Gets a copy of the {@link Structure} containing all available
                         * data this {@link EndGateway} has.
                         * @return A copy of the structure data
                         */
                        // @ts-ignore
                        getStructureData(): org.spongepowered.api.data.manipulator.mutable.tileentity.StructureData
                    }
                }
            }
        }
    }
}
