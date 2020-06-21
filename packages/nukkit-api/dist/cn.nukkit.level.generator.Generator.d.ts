declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class Generator extends java.lang.Object implements cn.nukkit.block.BlockID {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly TYPE_OLD: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_INFINITE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_FLAT: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_NETHER: number /*int*/
                    // @ts-ignore
                    public abstract getId(): number /*int*/
                    // @ts-ignore
                    public getDimension(): number /*int*/
                    // @ts-ignore
                    public static addGenerator(clazz: java.lang.Class<any>, name: java.lang.String | string, type: number /*int*/): boolean
                    // @ts-ignore
                    public static getGeneratorList(): string[]
                    // @ts-ignore
                    public static getGenerator(name: java.lang.String | string): java.lang.Class<any>
                    // @ts-ignore
                    public static getGenerator(type: number /*int*/): java.lang.Class<any>
                    // @ts-ignore
                    public static getGeneratorName(c: java.lang.Class<any>): string
                    // @ts-ignore
                    public static getGeneratorType(c: java.lang.Class<any>): number /*int*/
                    // @ts-ignore
                    public abstract init(level: cn.nukkit.level.ChunkManager, random: cn.nukkit.math.NukkitRandom): void
                    // @ts-ignore
                    public abstract generateChunk(chunkX: number /*int*/, chunkZ: number /*int*/): void
                    // @ts-ignore
                    public abstract populateChunk(chunkX: number /*int*/, chunkZ: number /*int*/): void
                    // @ts-ignore
                    public abstract getSettings(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public abstract getName(): string
                    // @ts-ignore
                    public abstract getSpawn(): cn.nukkit.math.Vector3
                    // @ts-ignore
                    public abstract getChunkManager(): cn.nukkit.level.ChunkManager
                }
            }
        }
    }
}
