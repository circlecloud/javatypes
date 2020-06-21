declare namespace cn {
    namespace nukkit {
        namespace level {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            interface ChunkLoader {
                // @ts-ignore
                getLoaderId(): number /*int*/
                // @ts-ignore
                isLoaderActive(): boolean
                // @ts-ignore
                getPosition(): cn.nukkit.level.Position
                // @ts-ignore
                getX(): number /*double*/
                // @ts-ignore
                getZ(): number /*double*/
                // @ts-ignore
                getLevel(): cn.nukkit.level.Level
                // @ts-ignore
                onChunkChanged(chunk: cn.nukkit.level.format.FullChunk): void
                // @ts-ignore
                onChunkLoaded(chunk: cn.nukkit.level.format.FullChunk): void
                // @ts-ignore
                onChunkUnloaded(chunk: cn.nukkit.level.format.FullChunk): void
                // @ts-ignore
                onChunkPopulated(chunk: cn.nukkit.level.format.FullChunk): void
                // @ts-ignore
                onBlockChanged(block: cn.nukkit.math.Vector3): void
            }
        }
    }
}
