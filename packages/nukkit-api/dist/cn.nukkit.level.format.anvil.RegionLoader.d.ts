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
                    class RegionLoader extends cn.nukkit.level.format.generic.BaseRegionLoader {
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider, regionX: number /*int*/, regionZ: number /*int*/)
                        // @ts-ignore
                        isChunkGenerated(index: number /*int*/): boolean
                        // @ts-ignore
                        public readChunk(x: number /*int*/, z: number /*int*/): cn.nukkit.level.format.anvil.Chunk
                        // @ts-ignore
                        unserializeChunk(data: number /*byte*/[]): cn.nukkit.level.format.anvil.Chunk
                        // @ts-ignore
                        public chunkExists(x: number /*int*/, z: number /*int*/): boolean
                        // @ts-ignore
                        saveChunk(x: number /*int*/, z: number /*int*/, chunkData: number /*byte*/[]): void
                        // @ts-ignore
                        public removeChunk(x: number /*int*/, z: number /*int*/): void
                        // @ts-ignore
                        public writeChunk(chunk: cn.nukkit.level.format.FullChunk): void
                        // @ts-ignore
                        static getChunkOffset(x: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public doSlowCleanUp(): number /*int*/
                        // @ts-ignore
                        loadLocationTable(): void
                        // @ts-ignore
                        writeLocationIndex(index: number /*int*/): void
                        // @ts-ignore
                        createBlank(): void
                        // @ts-ignore
                        public getX(): number /*int*/
                        // @ts-ignore
                        public getZ(): number /*int*/
                    }
                }
            }
        }
    }
}
