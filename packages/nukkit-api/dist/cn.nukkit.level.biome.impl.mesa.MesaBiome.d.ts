declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace biome {
                namespace impl {
                    namespace mesa {
                        /**
                         * @author DaPorkchop_
                         *  <p>
                         *  Handles the placement of stained clay for all mesa variants
                         */
                        // @ts-ignore
                        class MesaBiome extends cn.nukkit.level.biome.type.CoveredBiome {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            moundHeight: number /*int*/
                            // @ts-ignore
                            public setMoundHeight(height: number /*int*/): void
                            // @ts-ignore
                            public getSurfaceDepth(y: number /*int*/): number /*int*/
                            // @ts-ignore
                            public getSurfaceBlock(y: number /*int*/): number /*int*/
                            // @ts-ignore
                            public getSurfaceMeta(y: number /*int*/): number /*int*/
                            // @ts-ignore
                            public getGroundDepth(y: number /*int*/): number /*int*/
                            // @ts-ignore
                            public getGroundBlock(y: number /*int*/): number /*int*/
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public preCover(x: number /*int*/, z: number /*int*/): void
                            // @ts-ignore
                            getMoundFrequency(): number /*float*/
                            // @ts-ignore
                            public getHeightOffset(x: number /*int*/, z: number /*int*/): number /*int*/
                            // @ts-ignore
                            minHill(): number /*float*/
                        }
                    }
                }
            }
        }
    }
}
