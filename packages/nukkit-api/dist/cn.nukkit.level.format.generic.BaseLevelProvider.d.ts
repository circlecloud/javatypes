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
                    abstract class BaseLevelProvider extends java.lang.Object implements cn.nukkit.level.format.LevelProvider {
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.Level, path: java.lang.String | string)
                        // @ts-ignore
                        level: cn.nukkit.level.Level
                        // @ts-ignore
                        readonly path: java.lang.String | string
                        // @ts-ignore
                        levelData: cn.nukkit.nbt.tag.CompoundTag
                        // @ts-ignore
                        readonly lastRegion: java.util.concurrent.atomic.AtomicReference<cn.nukkit.level.format.generic.BaseRegionLoader>
                        // @ts-ignore
                        readonly regions: object
                        // @ts-ignore
                        readonly chunks: object
                        // @ts-ignore
                        public abstract loadChunk(index: number /*long*/, chunkX: number /*int*/, chunkZ: number /*int*/, create: boolean): cn.nukkit.level.format.generic.BaseFullChunk
                        // @ts-ignore
                        public size(): number /*int*/
                        // @ts-ignore
                        public unloadChunks(): void
                        // @ts-ignore
                        public getGenerator(): string
                        // @ts-ignore
                        public getGeneratorOptions(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public getLoadedChunks(): java.util.Map<java.lang.Long | number, cn.nukkit.level.format.generic.BaseFullChunk>
                        // @ts-ignore
                        public isChunkLoaded(X: number /*int*/, Z: number /*int*/): boolean
                        // @ts-ignore
                        public putChunk(index: number /*long*/, chunk: cn.nukkit.level.format.generic.BaseFullChunk): void
                        // @ts-ignore
                        public isChunkLoaded(hash: number /*long*/): boolean
                        // @ts-ignore
                        public getRegion(x: number /*int*/, z: number /*int*/): cn.nukkit.level.format.generic.BaseRegionLoader
                        // @ts-ignore
                        static getRegionIndexX(chunkX: number /*int*/): number /*int*/
                        // @ts-ignore
                        static getRegionIndexZ(chunkZ: number /*int*/): number /*int*/
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
                        public saveChunks(): void
                        // @ts-ignore
                        public getLevelData(): cn.nukkit.nbt.tag.CompoundTag
                        // @ts-ignore
                        public saveLevelData(): void
                        // @ts-ignore
                        public updateLevelName(name: java.lang.String | string): void
                        // @ts-ignore
                        public loadChunk(chunkX: number /*int*/, chunkZ: number /*int*/): boolean
                        // @ts-ignore
                        public loadChunk(chunkX: number /*int*/, chunkZ: number /*int*/, create: boolean): boolean
                        // @ts-ignore
                        public unloadChunk(X: number /*int*/, Z: number /*int*/): boolean
                        // @ts-ignore
                        public unloadChunk(X: number /*int*/, Z: number /*int*/, safe: boolean): boolean
                        // @ts-ignore
                        public getChunk(chunkX: number /*int*/, chunkZ: number /*int*/): cn.nukkit.level.format.generic.BaseFullChunk
                        // @ts-ignore
                        public getLoadedChunk(chunkX: number /*int*/, chunkZ: number /*int*/): cn.nukkit.level.format.generic.BaseFullChunk
                        // @ts-ignore
                        public getLoadedChunk(hash: number /*long*/): cn.nukkit.level.format.generic.BaseFullChunk
                        // @ts-ignore
                        public getChunk(chunkX: number /*int*/, chunkZ: number /*int*/, create: boolean): cn.nukkit.level.format.generic.BaseFullChunk
                        // @ts-ignore
                        public setChunk(chunkX: number /*int*/, chunkZ: number /*int*/, chunk: cn.nukkit.level.format.FullChunk): void
                        // @ts-ignore
                        public isChunkPopulated(chunkX: number /*int*/, chunkZ: number /*int*/): boolean
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public isChunkGenerated(chunkX: number /*int*/, chunkZ: number /*int*/): boolean
                    }
                }
            }
        }
    }
}
