declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace biome {
                namespace impl {
                    namespace extremehills {
                        /**
                         * author: DaPorkchop_
                         * Nukkit Project
                         * <p>
                         * make sure this is touching another extreme hills type or it'll look dumb
                         * very smooth hills with flat areas between
                         */
                        // @ts-ignore
                        class ExtremeHillsMBiome extends cn.nukkit.level.biome.impl.extremehills.ExtremeHillsPlusBiome {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            constructor(tree: boolean)
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public getSurfaceBlock(y: number /*int*/): number /*int*/
                            // @ts-ignore
                            public getSurfaceDepth(y: number /*int*/): number /*int*/
                            // @ts-ignore
                            public getGroundDepth(y: number /*int*/): number /*int*/
                            // @ts-ignore
                            public preCover(x: number /*int*/, z: number /*int*/): void
                            // @ts-ignore
                            public doesOverhang(): boolean
                        }
                    }
                }
            }
        }
    }
}
