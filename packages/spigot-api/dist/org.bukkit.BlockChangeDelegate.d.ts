declare namespace org {
    namespace bukkit {
        /**
         * A delegate for handling block changes. This serves as a direct interface
         * between generation algorithms in the server implementation and utilizing
         * code.
         */
        // @ts-ignore
        interface BlockChangeDelegate {
            /**
             * Set a block data at the specified coordinates.
             * @param x X coordinate
             * @param y Y coordinate
             * @param z Z coordinate
             * @param blockData Block data
             * @return true if the block was set successfully
             */
            // @ts-ignore
            setBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/, blockData: org.bukkit.block.data.BlockData): boolean
            /**
             * Get the block data at the location.
             * @param x X coordinate
             * @param y Y coordinate
             * @param z Z coordinate
             * @return The block data
             */
            // @ts-ignore
            getBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.bukkit.block.data.BlockData
            /**
             * Gets the height of the world.
             * @return Height of the world
             */
            // @ts-ignore
            getHeight(): int
            /**
             * Checks if the specified block is empty (air) or not.
             * @param x X coordinate
             * @param y Y coordinate
             * @param z Z coordinate
             * @return True if the block is considered empty.
             */
            // @ts-ignore
            isEmpty(x: number /*int*/, y: number /*int*/, z: number /*int*/): boolean
        }
    }
}
