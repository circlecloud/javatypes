declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class SimpleChunkManager extends java.lang.Object implements cn.nukkit.level.ChunkManager {
                    // @ts-ignore
                    constructor(seed: number /*long*/)
                    // @ts-ignore
                    seed: number /*long*/
                    // @ts-ignore
                    public getBlockIdAt(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    public setBlockIdAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/): void
                    // @ts-ignore
                    public setBlockAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/, data: number /*int*/): void
                    // @ts-ignore
                    public setBlockFullIdAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, fullId: number /*int*/): void
                    // @ts-ignore
                    public getBlockDataAt(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    public setBlockDataAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, data: number /*int*/): void
                    // @ts-ignore
                    public setChunk(chunkX: number /*int*/, chunkZ: number /*int*/): void
                    // @ts-ignore
                    public getSeed(): number /*long*/
                    // @ts-ignore
                    public setSeed(seed: number /*long*/): void
                    // @ts-ignore
                    public cleanChunks(seed: number /*long*/): void
                }
            }
        }
    }
}
