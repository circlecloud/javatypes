declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace biome {
                namespace type {
                    /**
                     * author: DaPorkchop_
                     * Nukkit Project
                     * <p>
                     * A biome with ground covering
                     * </p>
                     */
                    // @ts-ignore
                    abstract class CoveredBiome extends cn.nukkit.level.biome.Biome {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public readonly synchronizeCover: java.lang.Object | any
                        /**
                         * A single block placed on top of the surface blocks
                         * @return cover block
                         */
                        // @ts-ignore
                        public getCoverBlock(): number /*int*/
                        /**
                         * The amount of times the surface block should be used
                         * <p>
                         * If &lt; 0 bad things will happen!
                         * </p>
                         * @param y y
                         * @return surface depth
                         */
                        // @ts-ignore
                        public getSurfaceDepth(y: number /*int*/): number /*int*/
                        /**
                         * Between cover and ground
                         * @param y y
                         * @return surface block
                         */
                        // @ts-ignore
                        public abstract getSurfaceBlock(y: number /*int*/): number /*int*/
                        /**
                         * The metadata of the surface block
                         * @param y y
                         * @return surface meta
                         */
                        // @ts-ignore
                        public getSurfaceMeta(y: number /*int*/): number /*int*/
                        /**
                         * The amount of times the ground block should be used
                         * <p>
                         * If &lt; 0 bad things will happen!
                         * @param y y
                         * @return ground depth
                         */
                        // @ts-ignore
                        public getGroundDepth(y: number /*int*/): number /*int*/
                        /**
                         * Between surface and stone
                         * @param y y
                         * @return ground block
                         */
                        // @ts-ignore
                        public abstract getGroundBlock(y: number /*int*/): number /*int*/
                        /**
                         * The metadata of the ground block
                         * @param y y
                         * @return ground meta
                         */
                        // @ts-ignore
                        public getGroundMeta(y: number /*int*/): number /*int*/
                        /**
                         * The block used as stone/below all other surface blocks
                         * @return stone block
                         */
                        // @ts-ignore
                        public getStoneBlock(): number /*int*/
                        /**
                         * Called before a new block column is covered. Biomes can update any relevant variables here before covering.
                         * <p>
                         * Biome covering is synchronized on the biome, so thread safety isn't an issue.
                         * </p>
                         * @param x x
                         * @param z z
                         */
                        // @ts-ignore
                        public preCover(x: number /*int*/, z: number /*int*/): void
                    }
                }
            }
        }
    }
}
