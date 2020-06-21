declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                /**
                 * Nukkit's terrain generator
                 * Originally adapted from the PocketMine-MP generator by NycuRO and CreeperFace
                 * Mostly rewritten by DaPorkchop_
                 * <p>
                 * The following classes, and others related to terrain generation are theirs and are intended for NUKKIT USAGE and should not be copied/translated to other server software
                 * such as BukkitPE, ClearSky, Genisys, PocketMine-MP, or others
                 * <p>
                 * Normal.java
                 * MushroomPopulator.java
                 * DarkOakTreePopulator.java
                 * JungleBigTreePopulator.java
                 * JungleTreePopulaotr.java
                 * SavannaTreePopulator.java
                 * SwampTreePopulator.java
                 * BasicPopulator.java
                 * TreeGenerator.java
                 * HugeTreesGenerator.java
                 * BeachBiome.java
                 * ColdBeachBiome.java
                 * DesertBiome.java
                 * DesertHillsBiome.java
                 * DesertMBiome.java
                 * ExtremeHillsBiome.java
                 * ExtremeHillsEdgeBiome.java
                 * ExtremeHillsMBiome.java
                 * ExtremeHillsPlusBiome.java
                 * ExtremeHillsPlusMBiome.java
                 * StoneBeachBiome.java
                 * FlowerForestBiome.java
                 * ForestBiome.java
                 * ForestHillsBiome.java
                 * IcePlainsBiome.java
                 * IcePlainsSpikesBiome.java
                 * JungleBiome.java
                 * JungleEdgeBiome.java
                 * JungleEdgeMBiome.java
                 * JungleHillsBiome.java
                 * JungleMBiome.java
                 * MesaBiome.java
                 * MesaBryceBiome.java
                 * MesaPlateauBiome.java
                 * MesaPlateauFBiome.java
                 * MesaPlateauFMBiome.java
                 * MesaPlateauMBiome.java
                 * MushroomIslandBiome.java
                 * MushroomIslandShoreBiome.java
                 * DeepOceanBiome.java
                 * FrozenOceanBiome.java
                 * OceanBiome.java
                 * PlainsBiome.java
                 * SunflowerPlainsBiome.java
                 * FrozenRiverBiome.java
                 * RiverBiome.java
                 * RoofedForestBiome.java
                 * RoofedForestMBiome.java
                 * SavannaBiome.java
                 * SavannaMBiome.java
                 * SavannaPlateauBiome.java
                 * SavannaPlateauMBiome.java
                 * SwampBiome.java
                 * SwamplandMBiome.java
                 * ColdTaigaBiome.java
                 * ColdTaigaHillsBiome.java
                 * ColdTaigaMBiome.java
                 * MegaSpruceTaigaBiome.java
                 * MegaTaigaBiome.java
                 * MegaTagaHillsBiome.java
                 * TaigaBiome.java
                 * TaigaHillsBiome.java
                 * TaigaMBiome.java
                 * CoveredBiome.java
                 * GrassyBiome.java
                 * SandyBiome.java
                 * WateryBiome.java
                 * EnumBiomeBiome.java
                 * PopulatorCount.java
                 * PopulatorSurfaceBlock.java
                 * Normal.java
                 * Nether.java
                 * End.java
                 */
                // @ts-ignore
                class Normal extends cn.nukkit.level.generator.Generator {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(options: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                    // @ts-ignore
                    public static readonly seaHeight: number /*int*/
                    // @ts-ignore
                    public scaleNoise: cn.nukkit.level.generator.noise.vanilla.f.NoiseGeneratorOctavesF
                    // @ts-ignore
                    public depthNoise: cn.nukkit.level.generator.noise.vanilla.f.NoiseGeneratorOctavesF
                    // @ts-ignore
                    public getId(): number /*int*/
                    // @ts-ignore
                    public getChunkManager(): cn.nukkit.level.ChunkManager
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getSettings(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public pickBiome(x: number /*int*/, z: number /*int*/): cn.nukkit.level.biome.Biome
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
