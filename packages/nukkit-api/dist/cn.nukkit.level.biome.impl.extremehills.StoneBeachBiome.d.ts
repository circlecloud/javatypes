declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace biome {
                namespace impl {
                    namespace extremehills {
                        /**
                         * @author DaPorkchop_
                         *  <p>
                         *  Occurs when Extreme hills and variants touch the ocean.
                         * 
                         *  Nearly ertical cliffs, but no overhangs. Height difference is 2-7 near ocean, and pretty much flat everywhere else
                         */
                        // @ts-ignore
                        class StoneBeachBiome extends cn.nukkit.level.biome.type.CoveredBiome {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getSurfaceDepth(y: number /*int*/): number /*int*/
                            // @ts-ignore
                            public getSurfaceBlock(y: number /*int*/): number /*int*/
                            // @ts-ignore
                            public getGroundDepth(y: number /*int*/): number /*int*/
                            // @ts-ignore
                            public getGroundBlock(y: number /*int*/): number /*int*/
                            // @ts-ignore
                            public getName(): string
                        }
                    }
                }
            }
        }
    }
}
