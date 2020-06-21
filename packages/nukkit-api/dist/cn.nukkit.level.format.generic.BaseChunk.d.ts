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
                    abstract class BaseChunk extends cn.nukkit.level.format.generic.BaseFullChunk implements cn.nukkit.level.format.Chunk {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        sections: cn.nukkit.level.format.ChunkSection[]
                        // @ts-ignore
                        public clone(): cn.nukkit.level.format.generic.BaseChunk
                        // @ts-ignore
                        public getFullBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, blockId: number /*int*/): boolean
                        // @ts-ignore
                        public getAndSetBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, block: cn.nukkit.block.Block): cn.nukkit.block.Block
                        // @ts-ignore
                        public setFullBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/, fullId: number /*int*/): boolean
                        // @ts-ignore
                        public setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, blockId: number /*int*/, meta: number /*int*/): boolean
                        // @ts-ignore
                        public setBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/): void
                        // @ts-ignore
                        public getBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/, data: number /*int*/): void
                        // @ts-ignore
                        public getBlockSkyLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockSkyLight(x: number /*int*/, y: number /*int*/, z: number /*int*/, level: number /*int*/): void
                        // @ts-ignore
                        public getBlockLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockLight(x: number /*int*/, y: number /*int*/, z: number /*int*/, level: number /*int*/): void
                        // @ts-ignore
                        public isSectionEmpty(fY: number /*float*/): boolean
                        // @ts-ignore
                        public getSection(fY: number /*float*/): cn.nukkit.level.format.ChunkSection
                        // @ts-ignore
                        public setSection(fY: number /*float*/, section: cn.nukkit.level.format.ChunkSection): boolean
                        // @ts-ignore
                        public load(): boolean
                        // @ts-ignore
                        public load(generate: boolean): boolean
                        // @ts-ignore
                        public getBlockIdArray(): number /*byte*/[]
                        // @ts-ignore
                        public getBlockDataArray(): number /*byte*/[]
                        // @ts-ignore
                        public getBlockSkyLightArray(): number /*byte*/[]
                        // @ts-ignore
                        public getBlockLightArray(): number /*byte*/[]
                        // @ts-ignore
                        public getSections(): cn.nukkit.level.format.ChunkSection[]
                        // @ts-ignore
                        public getHeightMapArray(): number /*byte*/[]
                        // @ts-ignore
                        public getProvider(): cn.nukkit.level.format.LevelProvider
                    }
                }
            }
        }
    }
}
