declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                interface ChunkSection {
                    // @ts-ignore
                    getY(): number /*int*/
                    // @ts-ignore
                    getBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    setBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/): void
                    // @ts-ignore
                    getBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    setBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/, data: number /*int*/): void
                    // @ts-ignore
                    getFullBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    getAndSetBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, block: cn.nukkit.block.Block): cn.nukkit.block.Block
                    // @ts-ignore
                    setFullBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/, fullId: number /*int*/): boolean
                    // @ts-ignore
                    setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, blockId: number /*int*/): boolean
                    // @ts-ignore
                    setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, blockId: number /*int*/, meta: number /*int*/): boolean
                    // @ts-ignore
                    getBlockSkyLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    setBlockSkyLight(x: number /*int*/, y: number /*int*/, z: number /*int*/, level: number /*int*/): void
                    // @ts-ignore
                    getBlockLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    setBlockLight(x: number /*int*/, y: number /*int*/, z: number /*int*/, level: number /*int*/): void
                    // @ts-ignore
                    getIdArray(): number /*byte*/[]
                    // @ts-ignore
                    getDataArray(): number /*byte*/[]
                    // @ts-ignore
                    getSkyLightArray(): number /*byte*/[]
                    // @ts-ignore
                    getLightArray(): number /*byte*/[]
                    // @ts-ignore
                    isEmpty(): boolean
                    // @ts-ignore
                    getBytes(): number /*byte*/[]
                    // @ts-ignore
                    copy(): cn.nukkit.level.format.ChunkSection
                }
            }
        }
    }
}
