declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class Flat extends cn.nukkit.level.generator.Generator {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(options: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                    // @ts-ignore
                    public getId(): number /*int*/
                    // @ts-ignore
                    public getChunkManager(): cn.nukkit.level.ChunkManager
                    // @ts-ignore
                    public getSettings(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    parsePreset(preset: java.lang.String | string, chunkX: number /*int*/, chunkZ: number /*int*/): void
                    // @ts-ignore
                    public init(level: cn.nukkit.level.ChunkManager, random: cn.nukkit.math.NukkitRandom): void
                    // @ts-ignore
                    public generateChunk(chunkX: number /*int*/, chunkZ: number /*int*/): void
                    // @ts-ignore
                    public populateChunk(chunkX: number /*int*/, chunkZ: number /*int*/): void
                    // @ts-ignore
                    public getSpawn(): cn.nukkit.math.Vector3
                }
            }
        }
    }
}
