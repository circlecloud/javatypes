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
                    abstract class BaseRegionLoader extends java.lang.Object {
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider, regionX: number /*int*/, regionZ: number /*int*/, ext: java.lang.String | string)
                        // @ts-ignore
                        public static readonly VERSION: number /*int*/
                        // @ts-ignore
                        public static readonly COMPRESSION_GZIP: number /*byte*/
                        // @ts-ignore
                        public static readonly COMPRESSION_ZLIB: number /*byte*/
                        // @ts-ignore
                        public static readonly MAX_SECTOR_LENGTH: number /*int*/
                        // @ts-ignore
                        public static readonly COMPRESSION_LEVEL: number /*int*/
                        // @ts-ignore
                        x: number /*int*/
                        // @ts-ignore
                        z: number /*int*/
                        // @ts-ignore
                        lastSector: number /*int*/
                        // @ts-ignore
                        levelProvider: cn.nukkit.level.format.LevelProvider
                        // @ts-ignore
                        readonly locationTable: java.util.Map<java.lang.Integer | number, java.lang.Integer[] | number[]>
                        // @ts-ignore
                        public lastUsed: number /*long*/
                        // @ts-ignore
                        public compress(): void
                        // @ts-ignore
                        public getRandomAccessFile(): java.io.RandomAccessFile
                        // @ts-ignore
                        abstract isChunkGenerated(index: number /*int*/): boolean
                        // @ts-ignore
                        public abstract readChunk(x: number /*int*/, z: number /*int*/): cn.nukkit.level.format.generic.BaseFullChunk
                        // @ts-ignore
                        abstract unserializeChunk(data: number /*byte*/[]): cn.nukkit.level.format.generic.BaseFullChunk
                        // @ts-ignore
                        public abstract chunkExists(x: number /*int*/, z: number /*int*/): boolean
                        // @ts-ignore
                        abstract saveChunk(x: number /*int*/, z: number /*int*/, chunkData: number /*byte*/[]): void
                        // @ts-ignore
                        public abstract removeChunk(x: number /*int*/, z: number /*int*/): void
                        // @ts-ignore
                        public abstract writeChunk(chunk: cn.nukkit.level.format.FullChunk): void
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        abstract loadLocationTable(): void
                        // @ts-ignore
                        public abstract doSlowCleanUp(): number /*int*/
                        // @ts-ignore
                        abstract writeLocationIndex(index: number /*int*/): void
                        // @ts-ignore
                        abstract createBlank(): void
                        // @ts-ignore
                        public abstract getX(): number /*int*/
                        // @ts-ignore
                        public abstract getZ(): number /*int*/
                        // @ts-ignore
                        public getLocationIndexes(): number[]
                    }
                }
            }
        }
    }
}
