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
                    class Anvil extends cn.nukkit.level.format.generic.BaseLevelProvider {
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.Level, path: java.lang.String | string)
                        // @ts-ignore
                        public static readonly VERSION: number /*int*/
                        // @ts-ignore
                        public static getProviderName(): string
                        // @ts-ignore
                        public static getProviderOrder(): number /*byte*/
                        // @ts-ignore
                        public static usesChunkSection(): boolean
                        // @ts-ignore
                        public static isValid(path: java.lang.String | string): boolean
                        // @ts-ignore
                        public static generate(path: java.lang.String | string, name: java.lang.String | string, seed: number /*long*/, generator: java.lang.Class<any>): void
                        // @ts-ignore
                        public static generate(path: java.lang.String | string, name: java.lang.String | string, seed: number /*long*/, generator: java.lang.Class<any>, options: java.util.Map<java.lang.String | string, java.lang.String | string>): void
                        // @ts-ignore
                        public getEmptyChunk(chunkX: number /*int*/, chunkZ: number /*int*/): cn.nukkit.level.format.anvil.Chunk
                        // @ts-ignore
                        public requestChunkTask(x: number /*int*/, z: number /*int*/): cn.nukkit.scheduler.AsyncTask
                        // @ts-ignore
                        public doGarbageCollection(time: number /*long*/): void
                        // @ts-ignore
                        public loadChunk(index: number /*long*/, chunkX: number /*int*/, chunkZ: number /*int*/, create: boolean): cn.nukkit.level.format.generic.BaseFullChunk
                        // @ts-ignore
                        public saveChunk(X: number /*int*/, Z: number /*int*/): void
                        // @ts-ignore
                        public saveChunk(x: number /*int*/, z: number /*int*/, chunk: cn.nukkit.level.format.FullChunk): void
                        // @ts-ignore
                        public static createChunkSection(y: number /*int*/): cn.nukkit.level.format.anvil.ChunkSection
                        // @ts-ignore
                        loadRegion(x: number /*int*/, z: number /*int*/): cn.nukkit.level.format.generic.BaseRegionLoader
                    }
                }
            }
        }
    }
}
