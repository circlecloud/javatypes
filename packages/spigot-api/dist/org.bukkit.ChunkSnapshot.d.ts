declare namespace org {
    namespace bukkit {
        /**
         * Represents a static, thread-safe snapshot of chunk of blocks.
         * <p>
         * Purpose is to allow clean, efficient copy of a chunk data to be made, and
         * then handed off for processing in another thread (e.g. map rendering)
         */
        // @ts-ignore
        interface ChunkSnapshot {
            /**
             * Gets the X-coordinate of this chunk
             * @return X-coordinate
             */
            // @ts-ignore
            getX(): number /*int*/
            /**
             * Gets the Z-coordinate of this chunk
             * @return Z-coordinate
             */
            // @ts-ignore
            getZ(): number /*int*/
            /**
             * Gets name of the world containing this chunk
             * @return Parent World Name
             */
            // @ts-ignore
            getWorldName(): string
            /**
             * Get block type for block at corresponding coordinate in the chunk
             * @param x 0-15
             * @param y 0-255
             * @param z 0-15
             * @return block material type
             */
            // @ts-ignore
            getBlockType(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.bukkit.Material
            /**
             * Get block data for block at corresponding coordinate in the chunk
             * @param x 0-15
             * @param y 0-255
             * @param z 0-15
             * @return block material type
             */
            // @ts-ignore
            getBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.bukkit.block.data.BlockData
            /**
             * Get block data for block at corresponding coordinate in the chunk
             * @param x 0-15
             * @param y 0-255
             * @param z 0-15
             * @return 0-15
             * @deprecated Magic value
             */
            // @ts-ignore
            getData(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
            /**
             * Get sky light level for block at corresponding coordinate in the chunk
             * @param x 0-15
             * @param y 0-255
             * @param z 0-15
             * @return 0-15
             */
            // @ts-ignore
            getBlockSkyLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
            /**
             * Get light level emitted by block at corresponding coordinate in the
             * chunk
             * @param x 0-15
             * @param y 0-255
             * @param z 0-15
             * @return 0-15
             */
            // @ts-ignore
            getBlockEmittedLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
            /**
             * Gets the highest non-air coordinate at the given coordinates
             * @param x X-coordinate of the blocks (0-15)
             * @param z Z-coordinate of the blocks (0-15)
             * @return Y-coordinate of the highest non-air block
             */
            // @ts-ignore
            getHighestBlockYAt(x: number /*int*/, z: number /*int*/): number /*int*/
            /**
             * Get biome at given coordinates
             * @param x X-coordinate (0-15)
             * @param z Z-coordinate (0-15)
             * @return Biome at given coordinate
             * @deprecated biomes are now 3-dimensional
             */
            // @ts-ignore
            getBiome(x: number /*int*/, z: number /*int*/): org.bukkit.block.Biome
            /**
             * Get biome at given coordinates
             * @param x X-coordinate (0-15)
             * @param y Y-coordinate (0-255)
             * @param z Z-coordinate (0-15)
             * @return Biome at given coordinate
             */
            // @ts-ignore
            getBiome(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.bukkit.block.Biome
            /**
             * Get raw biome temperature at given coordinates
             * @param x X-coordinate (0-15)
             * @param z Z-coordinate (0-15)
             * @return temperature at given coordinate
             * @deprecated biomes are now 3-dimensional
             */
            // @ts-ignore
            getRawBiomeTemperature(x: number /*int*/, z: number /*int*/): number /*double*/
            /**
             * Get raw biome temperature at given coordinates
             * @param x X-coordinate (0-15)
             * @param y Y-coordinate (0-15)
             * @param z Z-coordinate (0-15)
             * @return temperature at given coordinate
             */
            // @ts-ignore
            getRawBiomeTemperature(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*double*/
            /**
             * Get world full time when chunk snapshot was captured
             * @return time in ticks
             */
            // @ts-ignore
            getCaptureFullTime(): number /*long*/
            /**
             * Test if section is empty
             * @param sy - section Y coordinate (block Y / 16, 0-255)
             * @return true if empty, false if not
             */
            // @ts-ignore
            isSectionEmpty(sy: number /*int*/): boolean
            /**
             * Tests if this snapshot contains the specified block.
             * @param block block to test
             * @return if the block is contained within
             */
            // @ts-ignore
            contains(block: org.bukkit.block.data.BlockData): boolean
        }
    }
}
