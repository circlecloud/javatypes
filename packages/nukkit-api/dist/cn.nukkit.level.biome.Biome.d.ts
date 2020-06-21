declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace biome {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class Biome extends java.lang.Object implements cn.nukkit.block.BlockID {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly MAX_BIOMES: number /*int*/
                    // @ts-ignore
                    public static readonly biomes: cn.nukkit.level.biome.Biome[]
                    // @ts-ignore
                    public static readonly unorderedBiomes: java.util.List<cn.nukkit.level.biome.Biome> | Array<cn.nukkit.level.biome.Biome>
                    // @ts-ignore
                    static register(id: number /*int*/, biome: cn.nukkit.level.biome.Biome): void
                    // @ts-ignore
                    public static getBiome(id: number /*int*/): cn.nukkit.level.biome.Biome
                    /**
                     * Get Biome by name.
                     * @param name Name of biome. Name could contain symbol "_" instead of space
                     * @return Biome. Null - when biome was not found
                     */
                    // @ts-ignore
                    public static getBiome(name: java.lang.String | string): cn.nukkit.level.biome.Biome
                    // @ts-ignore
                    public clearPopulators(): void
                    // @ts-ignore
                    public addPopulator(populator: cn.nukkit.level.generator.populator.type.Populator): void
                    // @ts-ignore
                    public populateChunk(level: cn.nukkit.level.ChunkManager, chunkX: number /*int*/, chunkZ: number /*int*/, random: cn.nukkit.math.NukkitRandom): void
                    // @ts-ignore
                    public getPopulators(): java.util.ArrayList<cn.nukkit.level.generator.populator.type.Populator>
                    // @ts-ignore
                    public getId(): number /*int*/
                    // @ts-ignore
                    public setId(id: number /*int*/): void
                    // @ts-ignore
                    public abstract getName(): string
                    // @ts-ignore
                    public setBaseHeight(baseHeight: number /*float*/): void
                    // @ts-ignore
                    public setHeightVariation(heightVariation: number /*float*/): void
                    // @ts-ignore
                    public getBaseHeight(): number /*float*/
                    // @ts-ignore
                    public getHeightVariation(): number /*float*/
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    // @ts-ignore
                    public isFreezing(): boolean
                    /**
                     * Whether or not overhangs should generate in this biome (places where solid blocks generate over air)
                     * This should probably be used with a custom max elevation or things can look stupid
                     * @return overhang
                     */
                    // @ts-ignore
                    public doesOverhang(): boolean
                    /**
                     * How much offset should be added to the min/max heights at this position
                     * @param x x
                     * @param z z
                     * @return height offset
                     */
                    // @ts-ignore
                    public getHeightOffset(x: number /*int*/, z: number /*int*/): number /*int*/
                }
            }
        }
    }
}
