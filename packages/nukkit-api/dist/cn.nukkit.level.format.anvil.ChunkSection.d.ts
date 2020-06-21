declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace anvil {
                    /**
                     * author: MagicDroidX
                     * Nukkit Project
                     */
                    // @ts-ignore
                    class ChunkSection extends java.lang.Object implements cn.nukkit.level.format.ChunkSection {
                        // @ts-ignore
                        constructor(y: number /*int*/)
                        // @ts-ignore
                        constructor(nbt: cn.nukkit.nbt.tag.CompoundTag)
                        // @ts-ignore
                        blockLight: number /*byte*/[]
                        // @ts-ignore
                        skyLight: number /*byte*/[]
                        // @ts-ignore
                        compressedLight: number /*byte*/[]
                        // @ts-ignore
                        hasBlockLight: boolean
                        // @ts-ignore
                        hasSkyLight: boolean
                        // @ts-ignore
                        public getY(): number /*int*/
                        // @ts-ignore
                        public getBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/): void
                        // @ts-ignore
                        public setFullBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/, fullId: number /*int*/): boolean
                        // @ts-ignore
                        public getBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/, data: number /*int*/): void
                        // @ts-ignore
                        public getFullBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, blockId: number /*int*/): boolean
                        // @ts-ignore
                        public getAndSetBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, block: cn.nukkit.block.Block): cn.nukkit.block.Block
                        // @ts-ignore
                        public setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, blockId: number /*int*/, meta: number /*int*/): boolean
                        // @ts-ignore
                        public getBlockSkyLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockSkyLight(x: number /*int*/, y: number /*int*/, z: number /*int*/, level: number /*int*/): void
                        // @ts-ignore
                        public getBlockLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockLight(x: number /*int*/, y: number /*int*/, z: number /*int*/, level: number /*int*/): void
                        // @ts-ignore
                        public getIdArray(): number /*byte*/[]
                        // @ts-ignore
                        public getDataArray(): number /*byte*/[]
                        // @ts-ignore
                        public getSkyLightArray(): number /*byte*/[]
                        // @ts-ignore
                        public getLightArray(): number /*byte*/[]
                        // @ts-ignore
                        public isEmpty(): boolean
                        // @ts-ignore
                        public getBytes(): number /*byte*/[]
                        // @ts-ignore
                        public compress(): boolean
                        // @ts-ignore
                        public copy(): cn.nukkit.level.format.anvil.ChunkSection
                    }
                }
            }
        }
    }
}
