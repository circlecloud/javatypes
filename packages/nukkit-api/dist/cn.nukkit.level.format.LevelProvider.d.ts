declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                interface LevelProvider {
                    // @ts-ignore
                    readonly ORDER_YZX: number /*byte*/
                    // @ts-ignore
                    readonly ORDER_ZXY: number /*byte*/
                    // @ts-ignore
                    requestChunkTask(X: number /*int*/, Z: number /*int*/): cn.nukkit.scheduler.AsyncTask
                    // @ts-ignore
                    getPath(): string
                    // @ts-ignore
                    getGenerator(): string
                    // @ts-ignore
                    getGeneratorOptions(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    getLoadedChunk(X: number /*int*/, Z: number /*int*/): cn.nukkit.level.format.generic.BaseFullChunk
                    // @ts-ignore
                    getLoadedChunk(hash: number /*long*/): cn.nukkit.level.format.generic.BaseFullChunk
                    // @ts-ignore
                    getChunk(X: number /*int*/, Z: number /*int*/): cn.nukkit.level.format.generic.BaseFullChunk
                    // @ts-ignore
                    getChunk(X: number /*int*/, Z: number /*int*/, create: boolean): cn.nukkit.level.format.generic.BaseFullChunk
                    // @ts-ignore
                    getEmptyChunk(x: number /*int*/, z: number /*int*/): cn.nukkit.level.format.generic.BaseFullChunk
                    // @ts-ignore
                    saveChunks(): void
                    // @ts-ignore
                    saveChunk(X: number /*int*/, Z: number /*int*/): void
                    // @ts-ignore
                    saveChunk(X: number /*int*/, Z: number /*int*/, chunk: cn.nukkit.level.format.FullChunk): void
                    // @ts-ignore
                    unloadChunks(): void
                    // @ts-ignore
                    loadChunk(X: number /*int*/, Z: number /*int*/): boolean
                    // @ts-ignore
                    loadChunk(X: number /*int*/, Z: number /*int*/, create: boolean): boolean
                    // @ts-ignore
                    unloadChunk(X: number /*int*/, Z: number /*int*/): boolean
                    // @ts-ignore
                    unloadChunk(X: number /*int*/, Z: number /*int*/, safe: boolean): boolean
                    // @ts-ignore
                    isChunkGenerated(X: number /*int*/, Z: number /*int*/): boolean
                    // @ts-ignore
                    isChunkPopulated(X: number /*int*/, Z: number /*int*/): boolean
                    // @ts-ignore
                    isChunkLoaded(X: number /*int*/, Z: number /*int*/): boolean
                    // @ts-ignore
                    isChunkLoaded(hash: number /*long*/): boolean
                    // @ts-ignore
                    setChunk(chunkX: number /*int*/, chunkZ: number /*int*/, chunk: cn.nukkit.level.format.FullChunk): void
                    // @ts-ignore
                    getName(): string
                    // @ts-ignore
                    isRaining(): boolean
                    // @ts-ignore
                    setRaining(raining: boolean): void
                    // @ts-ignore
                    getRainTime(): number /*int*/
                    // @ts-ignore
                    setRainTime(rainTime: number /*int*/): void
                    // @ts-ignore
                    isThundering(): boolean
                    // @ts-ignore
                    setThundering(thundering: boolean): void
                    // @ts-ignore
                    getThunderTime(): number /*int*/
                    // @ts-ignore
                    setThunderTime(thunderTime: number /*int*/): void
                    // @ts-ignore
                    getCurrentTick(): number /*long*/
                    // @ts-ignore
                    setCurrentTick(currentTick: number /*long*/): void
                    // @ts-ignore
                    getTime(): number /*long*/
                    // @ts-ignore
                    setTime(value: number /*long*/): void
                    // @ts-ignore
                    getSeed(): number /*long*/
                    // @ts-ignore
                    setSeed(value: number /*long*/): void
                    // @ts-ignore
                    getSpawn(): cn.nukkit.math.Vector3
                    // @ts-ignore
                    setSpawn(pos: cn.nukkit.math.Vector3): void
                    // @ts-ignore
                    getLoadedChunks(): java.util.Map<java.lang.Long | number, any>
                    // @ts-ignore
                    doGarbageCollection(): void
                    // @ts-ignore
                    doGarbageCollection(time: number /*long*/): void
                    // @ts-ignore
                    getLevel(): cn.nukkit.level.Level
                    // @ts-ignore
                    close(): void
                    // @ts-ignore
                    saveLevelData(): void
                    // @ts-ignore
                    updateLevelName(name: java.lang.String | string): void
                    // @ts-ignore
                    getGamerules(): cn.nukkit.level.GameRules
                    // @ts-ignore
                    setGameRules(rules: cn.nukkit.level.GameRules): void
                }
            }
        }
    }
}
