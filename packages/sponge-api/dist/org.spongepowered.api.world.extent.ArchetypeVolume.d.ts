declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    /**
                     * A copy of a region taken from another extent.
                     */
                    // @ts-ignore
                    interface ArchetypeVolume extends org.spongepowered.api.world.extent.MutableBlockVolume {
                        /**
                         * Applies this archetype at the given location. The archetype will be
                         * mapped onto the given world such that the origin on the archetype lines
                         * up with the given position.
                         * @param location The location to apply at
                         * @param changeFlag The flag to use for toggling various operations on
                         *      block placement
                         */
                        // @ts-ignore
                        apply(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>, changeFlag: org.spongepowered.api.world.BlockChangeFlag): void
                        /**
                         * Gets the {@link TileEntityArchetype} for the tile entity carrying block
                         * at the given coordinates.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @return The tile entity, if found
                         */
                        // @ts-ignore
                        getTileEntityArchetype(x: number /*int*/, y: number /*int*/, z: number /*int*/): java.util.Optional<org.spongepowered.api.block.tileentity.TileEntityArchetype>
                        /**
                         * Gets the {@link TileEntityArchetype} for the tile entity carrying block
                         * at the given coordinates.
                         * @param position The position
                         * @return The tile entity, if found
                         */
                        // @ts-ignore
                        getTileEntityArchetype(position: Vector3i): java.util.Optional<org.spongepowered.api.block.tileentity.TileEntityArchetype>
                        /**
                         * Gets a map containing all tile entity archetypes within this volume,
                         * keyed by their positions within the volume.
                         * @return The tile entity map
                         */
                        // @ts-ignore
                        getTileEntityArchetypes(): java.util.Map<Vector3i, org.spongepowered.api.block.tileentity.TileEntityArchetype>
                        // @ts-ignore
                        getEntityArchetype(x: number /*double*/, y: number /*double*/, z: number /*double*/): java.util.Optional<org.spongepowered.api.entity.EntityArchetype>
                        // @ts-ignore
                        getEntitiesByPosition(): object
                        // @ts-ignore
                        getEntityArchetypes(): Array<org.spongepowered.api.entity.EntityArchetype>
                        // @ts-ignore
                        getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker<any>
                    }
                }
            }
        }
    }
}
