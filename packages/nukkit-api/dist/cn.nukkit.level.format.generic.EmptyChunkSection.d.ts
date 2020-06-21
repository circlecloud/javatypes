declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace generic {
                    /**
                     * author: MagicDroidX
                     * Nukkit Project
                     */
                    // @ts-ignore
                    class EmptyChunkSection extends java.lang.Object implements cn.nukkit.level.format.ChunkSection {
                        // @ts-ignore
                        constructor(y: number /*int*/)
                        // @ts-ignore
                        public static readonly EMPTY: cn.nukkit.level.format.generic.EmptyChunkSection[]
                        // @ts-ignore
                        public static EMPTY_LIGHT_ARR: number /*byte*/[]
                        // @ts-ignore
                        public static EMPTY_SKY_LIGHT_ARR: number /*byte*/[]
                        // @ts-ignore
                        public getY(): number /*int*/
                        // @ts-ignore
                        public getBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getFullBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getAndSetBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, block: cn.nukkit.block.Block): cn.nukkit.block.Block
                        // @ts-ignore
                        public setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, blockId: number /*int*/): boolean
                        // @ts-ignore
                        public setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, blockId: number /*int*/, meta: number /*int*/): boolean
                        // @ts-ignore
                        public getIdArray(): number /*byte*/[]
                        // @ts-ignore
                        public getDataArray(): number /*byte*/[]
                        // @ts-ignore
                        public getSkyLightArray(): number /*byte*/[]
                        // @ts-ignore
                        public getLightArray(): number /*byte*/[]
                        // @ts-ignore
                        public setBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/): void
                        // @ts-ignore
                        public getBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/, data: number /*int*/): void
                        // @ts-ignore
                        public setFullBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/, fullId: number /*int*/): boolean
                        // @ts-ignore
                        public getBlockLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockLight(x: number /*int*/, y: number /*int*/, z: number /*int*/, level: number /*int*/): void
                        // @ts-ignore
                        public getBlockSkyLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockSkyLight(x: number /*int*/, y: number /*int*/, z: number /*int*/, level: number /*int*/): void
                        // @ts-ignore
                        public isEmpty(): boolean
                        // @ts-ignore
                        public getBytes(): number /*byte*/[]
                        // @ts-ignore
                        public copy(): cn.nukkit.level.format.generic.EmptyChunkSection
                    }
                }
            }
        }
    }
}
