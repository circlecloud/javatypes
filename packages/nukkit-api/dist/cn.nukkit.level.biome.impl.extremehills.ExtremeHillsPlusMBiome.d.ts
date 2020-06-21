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
                         * very steep (1-2 block at a time) hills with round tops. flat in between
                         */
                        // @ts-ignore
                        class ExtremeHillsPlusMBiome extends cn.nukkit.level.biome.impl.extremehills.ExtremeHillsMBiome {
                            // @ts-ignore
                            constructor()
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
