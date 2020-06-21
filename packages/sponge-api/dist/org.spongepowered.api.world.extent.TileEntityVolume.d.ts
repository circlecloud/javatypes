declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    /**
                     * A mutable block volume that also contains {@link TileEntity} instances.
                     */
                    // @ts-ignore
                    interface TileEntityVolume extends org.spongepowered.api.world.extent.MutableBlockVolume {
                        /**
                         * Return a collection of tile entities contained within this volume,
                         * possibly only returning tile entities only in loaded areas.
                         * <p>For world implementations, only some parts of the world is usually
                         * loaded, so this method will only return tile entities within those loaded
                         * parts.</p>
                         * @return A collection of entities
                         */
                        // @ts-ignore
                        getTileEntities(): Array<org.spongepowered.api.block.tileentity.TileEntity>
                        /**
                         * Return a collection of tile entities contained within this volume,
                         * possibly only returning tile entities only in loaded areas. The returned
                         * tile entities are filtered by the given {@link Predicate} before being
                         * returned.
                         * <p>For world implementations, only some parts of the world is usually
                         * loaded, so this method will only return tile entities within those loaded
                         * parts.</p>
                         * @param filter The filter to apply to the returned entities
                         * @return A collection of filtered entities
                         */
                        // @ts-ignore
                        getTileEntities(filter: java.util.function$.Predicate<org.spongepowered.api.block.tileentity.TileEntity>): Array<org.spongepowered.api.block.tileentity.TileEntity>
                        /**
                         * Gets the tile entity at the given position, if it exists.
                         * @param position The position
                         * @return The tile entity, or {#link Optional#empty()}
                         */
                        // @ts-ignore
                        getTileEntity(position: Vector3i): java.util.Optional<org.spongepowered.api.block.tileentity.TileEntity>
                        /**
                         * Gets the tile entity at the given position, if it exists.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @return The tile entity, or {#link Optional#empty()}
                         */
                        // @ts-ignore
                        getTileEntity(x: number /*int*/, y: number /*int*/, z: number /*int*/): java.util.Optional<org.spongepowered.api.block.tileentity.TileEntity>
                        // @ts-ignore
                        getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker<any>
                    }
                }
            }
        }
    }
}
