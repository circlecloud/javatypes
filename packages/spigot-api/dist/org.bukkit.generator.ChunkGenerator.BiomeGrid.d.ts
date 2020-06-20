declare namespace org {
    namespace bukkit {
        namespace generator {
            namespace ChunkGenerator {
                /**
                 * Interface to biome section for chunk to be generated: initialized with
                 * default values for world type and seed.
                 * <p>
                 * Custom generator is free to access and tailor values during
                 * generateBlockSections() or generateExtBlockSections().
                 */
                // @ts-ignore
                interface BiomeGrid {
                    /**
                     * Get biome at x, z within chunk being generated
                     * @param x - 0-15
                     * @param z - 0-15
                     * @return Biome value
                     * @deprecated biomes are now 3-dimensional
                     */
                    // @ts-ignore
                    getBiome(x: number /*int*/, z: number /*int*/): org.bukkit.block.Biome
                    /**
                     * Get biome at x, z within chunk being generated
                     * @param x - 0-15
                     * @param y - 0-255
                     * @param z - 0-15
                     * @return Biome value
                     */
                    // @ts-ignore
                    getBiome(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.bukkit.block.Biome
                    /**
                     * Set biome at x, z within chunk being generated
                     * @param x - 0-15
                     * @param z - 0-15
                     * @param bio - Biome value
                     * @deprecated biomes are now 3-dimensional
                     */
                    // @ts-ignore
                    setBiome(x: number /*int*/, z: number /*int*/, bio: org.bukkit.block.Biome): void
                    /**
                     * Set biome at x, z within chunk being generated
                     * @param x - 0-15
                     * @param y - 0-255
                     * @param z - 0-15
                     * @param bio - Biome value
                     */
                    // @ts-ignore
                    setBiome(x: number /*int*/, y: number /*int*/, z: number /*int*/, bio: org.bukkit.block.Biome): void
                }
            }
        }
    }
}
