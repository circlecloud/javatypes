declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                // @ts-ignore
                class PopChunkManager extends cn.nukkit.level.generator.SimpleChunkManager {
                    // @ts-ignore
                    constructor(seed: number /*long*/)
                    // @ts-ignore
                    public cleanChunks(seed: number /*long*/): void
                    // @ts-ignore
                    public getChunk(chunkX: number /*int*/, chunkZ: number /*int*/): cn.nukkit.level.format.generic.BaseFullChunk
                    // @ts-ignore
                    public setChunk(chunkX: number /*int*/, chunkZ: number /*int*/, chunk: cn.nukkit.level.format.generic.BaseFullChunk): void
                }
            }
        }
    }
}
