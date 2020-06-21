declare namespace org {
    namespace bukkit {
        namespace generator {
            /**
             * A chunk generator is responsible for the initial shaping of an entire
             * chunk. For example, the nether chunk generator should shape netherrack and
             * soulsand.
             * By default only one thread will call
             * {@link #generateChunkData(org.bukkit.World, java.util.Random, int, int, org.bukkit.generator.ChunkGenerator.BiomeGrid)}
             * at a time, although this may not necessarily be the main server thread.
             * If your generator is capable of fully asynchronous generation, then
             * {@link #isParallelCapable()} should be overridden accordingly to allow
             * multiple concurrent callers.
             * Some aspects of world generation can be delegated to the Vanilla generator.
             * The methods {@link ChunkGenerator#shouldGenerateCaves()}, {@link ChunkGenerator#shouldGenerateDecorations()},
             * {@link ChunkGenerator#shouldGenerateMobs()} and {@link ChunkGenerator#shouldGenerateStructures()} can be
             * overridden to enable this.
             */
            // @ts-ignore
            abstract class ChunkGenerator extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Shapes the chunk for the given coordinates.
                 * This method must return a ChunkData.
                 * <p>
                 * Notes:
                 * <p>
                 * This method should <b>never</b> attempt to get the Chunk at
                 * the passed coordinates, as doing so may cause an infinite loop
                 * <p>
                 * This method should <b>never</b> modify a ChunkData after it has
                 * been returned.
                 * <p>
                 * This method <b>must</b> return a ChunkData returned by {@link ChunkGenerator#createChunkData(org.bukkit.World)}
                 * @param world The world this chunk will be used for
                 * @param random The random generator to use
                 * @param x The X-coordinate of the chunk
                 * @param z The Z-coordinate of the chunk
                 * @param biome Proposed biome values for chunk - can be updated by
                 *      generator
                 * @return ChunkData containing the types for each block created by this
                 *      generator
                 */
                // @ts-ignore
                public generateChunkData(world: org.bukkit.World, random: java.util.Random, x: number /*int*/, z: number /*int*/, biome: org.bukkit.generator.ChunkGenerator.BiomeGrid): org.bukkit.generator.ChunkGenerator.ChunkData
                /**
                 * Create a ChunkData for a world.
                 * @param world the world the ChunkData is for
                 * @return a new ChunkData for world
                 */
                // @ts-ignore
                createChunkData(world: org.bukkit.World): org.bukkit.generator.ChunkGenerator.ChunkData
                /**
                 * Tests if the specified location is valid for a natural spawn position
                 * @param world The world we're testing on
                 * @param x X-coordinate of the block to test
                 * @param z Z-coordinate of the block to test
                 * @return true if the location is valid, otherwise false
                 */
                // @ts-ignore
                public canSpawn(world: org.bukkit.World, x: number /*int*/, z: number /*int*/): boolean
                /**
                 * Gets a list of default {@link BlockPopulator}s to apply to a given
                 * world
                 * @param world World to apply to
                 * @return List containing any amount of BlockPopulators
                 */
                // @ts-ignore
                public getDefaultPopulators(world: org.bukkit.World): Array<org.bukkit.generator.BlockPopulator>
                /**
                 * Gets a fixed spawn location to use for a given world.
                 * <p>
                 * A null value is returned if a world should not use a fixed spawn point,
                 * and will instead attempt to find one randomly.
                 * @param world The world to locate a spawn point for
                 * @param random Random generator to use in the calculation
                 * @return Location containing a new spawn point, otherwise null
                 */
                // @ts-ignore
                public getFixedSpawnLocation(world: org.bukkit.World, random: java.util.Random): org.bukkit.Location
                /**
                 * Gets if this ChunkGenerator is parallel capable.
                 * See {@link ChunkGenerator} for more information.
                 * @return parallel capable status
                 */
                // @ts-ignore
                public isParallelCapable(): boolean
                /**
                 * Gets if the server should generate Vanilla caves after this
                 * ChunkGenerator.
                 * @return true if the server should generate Vanilla caves
                 */
                // @ts-ignore
                public shouldGenerateCaves(): boolean
                /**
                 * Gets if the server should generate Vanilla decorations after this
                 * ChunkGenerator.
                 * @return true if the server should generate Vanilla decorations
                 */
                // @ts-ignore
                public shouldGenerateDecorations(): boolean
                /**
                 * Gets if the server should generate Vanilla mobs after this
                 * ChunkGenerator.
                 * @return true if the server should generate Vanilla mobs
                 */
                // @ts-ignore
                public shouldGenerateMobs(): boolean
                /**
                 * Gets if the server should generate Vanilla structures after this
                 * ChunkGenerator.
                 * @return true if the server should generate Vanilla structures
                 */
                // @ts-ignore
                public shouldGenerateStructures(): boolean
            }
        }
    }
}
