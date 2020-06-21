declare namespace cn {
    namespace nukkit {
        namespace level {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            interface ChunkManager {
                // @ts-ignore
                getBlockIdAt(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                // @ts-ignore
                setBlockFullIdAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, fullId: number /*int*/): void
                // @ts-ignore
                setBlockIdAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/): void
                // @ts-ignore
                setBlockAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/): void
                // @ts-ignore
                setBlockAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/, data: number /*int*/): void
                // @ts-ignore
                getBlockDataAt(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                // @ts-ignore
                setBlockDataAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, data: number /*int*/): void
                // @ts-ignore
                getChunk(chunkX: number /*int*/, chunkZ: number /*int*/): cn.nukkit.level.format.generic.BaseFullChunk
                // @ts-ignore
                setChunk(chunkX: number /*int*/, chunkZ: number /*int*/): void
                // @ts-ignore
                setChunk(chunkX: number /*int*/, chunkZ: number /*int*/, chunk: cn.nukkit.level.format.generic.BaseFullChunk): void
                // @ts-ignore
                getSeed(): number /*long*/
            }
        }
    }
}
