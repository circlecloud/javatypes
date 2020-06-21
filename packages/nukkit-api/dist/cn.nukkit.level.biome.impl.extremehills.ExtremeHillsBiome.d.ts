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
                         * steep mountains with flat areas between
                         */
                        // @ts-ignore
                        class ExtremeHillsBiome extends cn.nukkit.level.biome.type.GrassyBiome {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            constructor(tree: boolean)
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public doesOverhang(): boolean
                        }
                    }
                }
            }
        }
    }
}
