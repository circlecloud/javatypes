declare namespace org {
    namespace bukkit {
        namespace generator {
            namespace ChunkGenerator {
                /**
                 * Data for a Chunk.
                 */
                // @ts-ignore
                interface ChunkData {
                    /**
                     * Get the maximum height for the chunk.
                     * Setting blocks at or above this height will do nothing.
                     * @return the maximum height
                     */
                    // @ts-ignore
                    getMaxHeight(): number /*int*/
                    /**
                     * Set the block at x,y,z in the chunk data to material.
                     * Note: setting blocks outside the chunk's bounds does nothing.
                     * @param x the x location in the chunk from 0-15 inclusive
                     * @param y the y location in the chunk from 0 (inclusive) - maxHeight (exclusive)
                     * @param z the z location in the chunk from 0-15 inclusive
                     * @param material the type to set the block to
                     */
                    // @ts-ignore
                    setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, material: org.bukkit.Material): void
                    /**
                     * Set the block at x,y,z in the chunk data to material.
                     * Setting blocks outside the chunk's bounds does nothing.
                     * @param x the x location in the chunk from 0-15 inclusive
                     * @param y the y location in the chunk from 0 (inclusive) - maxHeight (exclusive)
                     * @param z the z location in the chunk from 0-15 inclusive
                     * @param material the type to set the block to
                     */
                    // @ts-ignore
                    setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, material: org.bukkit.material.MaterialData): void
                    /**
                     * Set the block at x,y,z in the chunk data to material.
                     * Setting blocks outside the chunk's bounds does nothing.
                     * @param x the x location in the chunk from 0-15 inclusive
                     * @param y the y location in the chunk from 0 (inclusive) - maxHeight (exclusive)
                     * @param z the z location in the chunk from 0-15 inclusive
                     * @param blockData the type to set the block to
                     */
                    // @ts-ignore
                    setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, blockData: org.bukkit.block.data.BlockData): void
                    /**
                     * Set a region of this chunk from xMin, yMin, zMin (inclusive)
                     * to xMax, yMax, zMax (exclusive) to material.
                     * Setting blocks outside the chunk's bounds does nothing.
                     * @param xMin minimum x location (inclusive) in the chunk to set
                     * @param yMin minimum y location (inclusive) in the chunk to set
                     * @param zMin minimum z location (inclusive) in the chunk to set
                     * @param xMax maximum x location (exclusive) in the chunk to set
                     * @param yMax maximum y location (exclusive) in the chunk to set
                     * @param zMax maximum z location (exclusive) in the chunk to set
                     * @param material the type to set the blocks to
                     */
                    // @ts-ignore
                    setRegion(xMin: number /*int*/, yMin: number /*int*/, zMin: number /*int*/, xMax: number /*int*/, yMax: number /*int*/, zMax: number /*int*/, material: org.bukkit.Material): void
                    /**
                     * Set a region of this chunk from xMin, yMin, zMin (inclusive)
                     * to xMax, yMax, zMax (exclusive) to material.
                     * Setting blocks outside the chunk's bounds does nothing.
                     * @param xMin minimum x location (inclusive) in the chunk to set
                     * @param yMin minimum y location (inclusive) in the chunk to set
                     * @param zMin minimum z location (inclusive) in the chunk to set
                     * @param xMax maximum x location (exclusive) in the chunk to set
                     * @param yMax maximum y location (exclusive) in the chunk to set
                     * @param zMax maximum z location (exclusive) in the chunk to set
                     * @param material the type to set the blocks to
                     */
                    // @ts-ignore
                    setRegion(xMin: number /*int*/, yMin: number /*int*/, zMin: number /*int*/, xMax: number /*int*/, yMax: number /*int*/, zMax: number /*int*/, material: org.bukkit.material.MaterialData): void
                    /**
                     * Set a region of this chunk from xMin, yMin, zMin (inclusive) to xMax,
                     * yMax, zMax (exclusive) to material.
                     * Setting blocks outside the chunk's bounds does nothing.
                     * @param xMin minimum x location (inclusive) in the chunk to set
                     * @param yMin minimum y location (inclusive) in the chunk to set
                     * @param zMin minimum z location (inclusive) in the chunk to set
                     * @param xMax maximum x location (exclusive) in the chunk to set
                     * @param yMax maximum y location (exclusive) in the chunk to set
                     * @param zMax maximum z location (exclusive) in the chunk to set
                     * @param blockData the type to set the blocks to
                     */
                    // @ts-ignore
                    setRegion(xMin: number /*int*/, yMin: number /*int*/, zMin: number /*int*/, xMax: number /*int*/, yMax: number /*int*/, zMax: number /*int*/, blockData: org.bukkit.block.data.BlockData): void
                    /**
                     * Get the type of the block at x, y, z.
                     * Getting blocks outside the chunk's bounds returns air.
                     * @param x the x location in the chunk from 0-15 inclusive
                     * @param y the y location in the chunk from 0 (inclusive) - maxHeight (exclusive)
                     * @param z the z location in the chunk from 0-15 inclusive
                     * @return the type of the block or Material.AIR if x, y or z are outside the chunk's bounds
                     */
                    // @ts-ignore
                    getType(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.bukkit.Material
                    /**
                     * Get the type and data of the block at x, y, z.
                     * Getting blocks outside the chunk's bounds returns air.
                     * @param x the x location in the chunk from 0-15 inclusive
                     * @param y the y location in the chunk from 0 (inclusive) - maxHeight (exclusive)
                     * @param z the z location in the chunk from 0-15 inclusive
                     * @return the type and data of the block or the MaterialData for air if x, y or z are outside the chunk's bounds
                     */
                    // @ts-ignore
                    getTypeAndData(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.bukkit.material.MaterialData
                    /**
                     * Get the type and data of the block at x, y, z.
                     * Getting blocks outside the chunk's bounds returns air.
                     * @param x the x location in the chunk from 0-15 inclusive
                     * @param y the y location in the chunk from 0 (inclusive) - maxHeight (exclusive)
                     * @param z the z location in the chunk from 0-15 inclusive
                     * @return the data of the block or the BlockData for air if x, y or z are outside the chunk's bounds
                     */
                    // @ts-ignore
                    getBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.bukkit.block.data.BlockData
                    /**
                     * Get the block data at x,y,z in the chunk data.
                     * Getting blocks outside the chunk's bounds returns 0.
                     * @param x the x location in the chunk from 0-15 inclusive
                     * @param y the y location in the chunk from 0 (inclusive) - maxHeight (exclusive)
                     * @param z the z location in the chunk from 0-15 inclusive
                     * @return the block data value or air if x, y or z are outside the chunk's bounds
                     * @deprecated Uses magic values
                     */
                    // @ts-ignore
                    getData(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*byte*/
                }
            }
        }
    }
}
