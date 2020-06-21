declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace leveldb {
                    /**
                     * author: MagicDroidX
                     * Nukkit Project
                     */
                    // @ts-ignore
                    class LevelDB extends java.lang.Object implements cn.nukkit.level.format.LevelProvider {
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.Level, path: java.lang.String | string)
                        // @ts-ignore
                        chunks: java.util.Map<java.lang.Long | number, cn.nukkit.level.format.leveldb.Chunk>
                        // @ts-ignore
                        db: DB
                        // @ts-ignore
                        level: cn.nukkit.level.Level
                        // @ts-ignore
                        readonly path: java.lang.String | string
                        // @ts-ignore
                        levelData: cn.nukkit.nbt.tag.CompoundTag
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
                        public saveLevelData(): void
                        // @ts-ignore
                        public getEmptyChunk(chunkX: number /*int*/, chunkZ: number /*int*/): cn.nukkit.level.format.leveldb.Chunk
                        // @ts-ignore
                        public requestChunkTask(x: number /*int*/, z: number /*int*/): cn.nukkit.scheduler.AsyncTask
                        // @ts-ignore
                        public unloadChunks(): void
                        // @ts-ignore
                        public getGenerator(): string
                        // @ts-ignore
                        public getGeneratorOptions(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public getLoadedChunk(X: number /*int*/, Z: number /*int*/): cn.nukkit.level.format.generic.BaseFullChunk
                        // @ts-ignore
                        public getLoadedChunk(hash: number /*long*/): cn.nukkit.level.format.generic.BaseFullChunk
                        // @ts-ignore
                        public getLoadedChunks(): java.util.Map<java.lang.Long | number, cn.nukkit.level.format.leveldb.Chunk>
                        // @ts-ignore
                        public isChunkLoaded(x: number /*int*/, z: number /*int*/): boolean
                        // @ts-ignore
                        public isChunkLoaded(hash: number /*long*/): boolean
                        // @ts-ignore
                        public saveChunks(): void
                        // @ts-ignore
                        public loadChunk(x: number /*int*/, z: number /*int*/): boolean
                        // @ts-ignore
                        public loadChunk(x: number /*int*/, z: number /*int*/, create: boolean): boolean
                        // @ts-ignore
                        public readChunk(chunkX: number /*int*/, chunkZ: number /*int*/): cn.nukkit.level.format.leveldb.Chunk
                        // @ts-ignore
                        public unloadChunk(x: number /*int*/, z: number /*int*/): boolean
                        // @ts-ignore
                        public unloadChunk(x: number /*int*/, z: number /*int*/, safe: boolean): boolean
                        // @ts-ignore
                        public saveChunk(x: number /*int*/, z: number /*int*/): void
                        // @ts-ignore
                        public saveChunk(x: number /*int*/, z: number /*int*/, chunk: cn.nukkit.level.format.FullChunk): void
                        // @ts-ignore
                        public getChunk(x: number /*int*/, z: number /*int*/): cn.nukkit.level.format.leveldb.Chunk
                        // @ts-ignore
                        public getChunk(x: number /*int*/, z: number /*int*/, create: boolean): cn.nukkit.level.format.leveldb.Chunk
                        // @ts-ignore
                        public getDatabase(): DB
                        // @ts-ignore
                        public setChunk(chunkX: number /*int*/, chunkZ: number /*int*/, chunk: cn.nukkit.level.format.FullChunk): void
                        // @ts-ignore
                        public static createChunkSection(y: number /*int*/): cn.nukkit.level.format.ChunkSection
                        // @ts-ignore
                        public isChunkGenerated(x: number /*int*/, z: number /*int*/): boolean
                        // @ts-ignore
                        public isChunkPopulated(x: number /*int*/, z: number /*int*/): boolean
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public getPath(): string
                        // @ts-ignore
                        public getServer(): cn.nukkit.Server
                        // @ts-ignore
                        public getLevel(): cn.nukkit.level.Level
                        // @ts-ignore
                        public getName(): string
                        // @ts-ignore
                        public isRaining(): boolean
                        // @ts-ignore
                        public setRaining(raining: boolean): void
                        // @ts-ignore
                        public getRainTime(): number /*int*/
                        // @ts-ignore
                        public setRainTime(rainTime: number /*int*/): void
                        // @ts-ignore
                        public isThundering(): boolean
                        // @ts-ignore
                        public setThundering(thundering: boolean): void
                        // @ts-ignore
                        public getThunderTime(): number /*int*/
                        // @ts-ignore
                        public setThunderTime(thunderTime: number /*int*/): void
                        // @ts-ignore
                        public getCurrentTick(): number /*long*/
                        // @ts-ignore
                        public setCurrentTick(currentTick: number /*long*/): void
                        // @ts-ignore
                        public getTime(): number /*long*/
                        // @ts-ignore
                        public setTime(value: number /*long*/): void
                        // @ts-ignore
                        public getSeed(): number /*long*/
                        // @ts-ignore
                        public setSeed(value: number /*long*/): void
                        // @ts-ignore
                        public getSpawn(): cn.nukkit.math.Vector3
                        // @ts-ignore
                        public setSpawn(pos: cn.nukkit.math.Vector3): void
                        // @ts-ignore
                        public getGamerules(): cn.nukkit.level.GameRules
                        // @ts-ignore
                        public setGameRules(rules: cn.nukkit.level.GameRules): void
                        // @ts-ignore
                        public doGarbageCollection(): void
                        // @ts-ignore
                        public getLevelData(): cn.nukkit.nbt.tag.CompoundTag
                        // @ts-ignore
                        public updateLevelName(name: java.lang.String | string): void
                        // @ts-ignore
                        public getTerrainKeys(): number /*byte*/[][]
                    }
                }
            }
        }
    }
}
