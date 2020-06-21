declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace biome {
                /**
                 * @author DaPorkchop_
                 *  <p>
                 *  A more effective way of accessing specific biomes (to prevent Biome.getBiome(Biome.OCEAN) and such)
                 *  Also just looks cleaner than listing everything as static final in {#link Biome}
                 *  </p>
                 */
                // @ts-ignore
                class EnumBiome extends java.lang.Enum<cn.nukkit.level.biome.EnumBiome> {
                    // @ts-ignore
                    readonly OCEAN: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly PLAINS: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly DESERT: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly EXTREME_HILLS: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly FOREST: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly TAIGA: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly SWAMP: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly RIVER: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly HELL: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly FROZEN_OCEAN: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly FROZEN_RIVER: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly ICE_PLAINS: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly MUSHROOM_ISLAND: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly MUSHROOM_ISLAND_SHORE: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly BEACH: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly DESERT_HILLS: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly FOREST_HILLS: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly TAIGA_HILLS: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly EXTREME_HILLS_EDGE: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly JUNGLE: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly JUNGLE_HILLS: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly JUNGLE_EDGE: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly DEEP_OCEAN: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly STONE_BEACH: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly COLD_BEACH: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly BIRCH_FOREST: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly BIRCH_FOREST_HILLS: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly ROOFED_FOREST: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly COLD_TAIGA: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly COLD_TAIGA_HILLS: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly MEGA_TAIGA: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly MEGA_TAIGA_HILLS: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly EXTREME_HILLS_PLUS: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly SAVANNA: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly SAVANNA_PLATEAU: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly MESA: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly MESA_PLATEAU_F: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly MESA_PLATEAU: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly SUNFLOWER_PLAINS: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly DESERT_M: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly EXTREME_HILLS_M: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly FLOWER_FOREST: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly TAIGA_M: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly SWAMPLAND_M: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly ICE_PLAINS_SPIKES: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly JUNGLE_M: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly JUNGLE_EDGE_M: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly BIRCH_FOREST_M: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly BIRCH_FOREST_HILLS_M: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly ROOFED_FOREST_M: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly COLD_TAIGA_M: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly MEGA_SPRUCE_TAIGA: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly EXTREME_HILLS_PLUS_M: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly SAVANNA_M: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly SAVANNA_PLATEAU_M: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly MESA_BRYCE: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly MESA_PLATEAU_F_M: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly MESA_PLATEAU_M: cn.nukkit.level.biome.EnumBiome
                    // @ts-ignore
                    readonly id: number /*int*/
                    // @ts-ignore
                    readonly biome: cn.nukkit.level.biome.Biome
                    // @ts-ignore
                    values(): cn.nukkit.level.biome.EnumBiome[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): cn.nukkit.level.biome.EnumBiome
                    /**
                     * You really shouldn't use this method if you can help it, reference the biomes directly!
                     * @param id biome id
                     * @return biome
                     */
                    // @ts-ignore
                    getBiome(id: number /*int*/): cn.nukkit.level.biome.Biome
                    /**
                     * You really shouldn't use this method if you can help it, reference the biomes directly!
                     * @param name biome name
                     * @return biome
                     */
                    // @ts-ignore
                    getBiome(name: java.lang.String | string): cn.nukkit.level.biome.Biome
                }
            }
        }
    }
}
