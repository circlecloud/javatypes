declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                /**
                 * Generates noise using the "classic" perlin generator
                 * @see SimplexNoiseGenerator "Improved" and faster version with slightly
                 *      different results
                 */
                // @ts-ignore
                class PerlinNoiseGenerator extends org.bukkit.util.noise.NoiseGenerator {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a seeded perlin noise generator for the given world
                     * @param world World to construct this generator for
                     */
                    // @ts-ignore
                    constructor(world: org.bukkit.World)
                    /**
                     * Creates a seeded perlin noise generator for the given seed
                     * @param seed Seed to construct this generator for
                     */
                    // @ts-ignore
                    constructor(seed: number /*long*/)
                    /**
                     * Creates a seeded perlin noise generator with the given Random
                     * @param rand Random to construct with
                     */
                    // @ts-ignore
                    constructor(rand: java.util.Random)
                    // @ts-ignore
                    readonly grad3: number /*int*/[][]
                    /**
                     * Computes and returns the 1D unseeded perlin noise for the given
                     * coordinates in 1D space
                     * @param x X coordinate
                     * @return Noise at given location, from range -1 to 1
                     */
                    // @ts-ignore
                    getNoise(x: number /*double*/): double
                    /**
                     * Computes and returns the 2D unseeded perlin noise for the given
                     * coordinates in 2D space
                     * @param x X coordinate
                     * @param y Y coordinate
                     * @return Noise at given location, from range -1 to 1
                     */
                    // @ts-ignore
                    getNoise(x: number /*double*/, y: number /*double*/): double
                    /**
                     * Computes and returns the 3D unseeded perlin noise for the given
                     * coordinates in 3D space
                     * @param x X coordinate
                     * @param y Y coordinate
                     * @param z Z coordinate
                     * @return Noise at given location, from range -1 to 1
                     */
                    // @ts-ignore
                    getNoise(x: number /*double*/, y: number /*double*/, z: number /*double*/): double
                    /**
                     * Gets the singleton unseeded instance of this generator
                     * @return Singleton
                     */
                    // @ts-ignore
                    getInstance(): org.bukkit.util.noise.PerlinNoiseGenerator
                    // @ts-ignore
                    noise(x: number /*double*/, y: number /*double*/, z: number /*double*/): double
                    /**
                     * Generates noise for the 1D coordinates using the specified number of
                     * octaves and parameters
                     * @param x X-coordinate
                     * @param octaves Number of octaves to use
                     * @param frequency How much to alter the frequency by each octave
                     * @param amplitude How much to alter the amplitude by each octave
                     * @return Resulting noise
                     */
                    // @ts-ignore
                    getNoise(x: number /*double*/, octaves: number /*int*/, frequency: number /*double*/, amplitude: number /*double*/): double
                    /**
                     * Generates noise for the 2D coordinates using the specified number of
                     * octaves and parameters
                     * @param x X-coordinate
                     * @param y Y-coordinate
                     * @param octaves Number of octaves to use
                     * @param frequency How much to alter the frequency by each octave
                     * @param amplitude How much to alter the amplitude by each octave
                     * @return Resulting noise
                     */
                    // @ts-ignore
                    getNoise(x: number /*double*/, y: number /*double*/, octaves: number /*int*/, frequency: number /*double*/, amplitude: number /*double*/): double
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     * @param x X-coordinate
                     * @param y Y-coordinate
                     * @param z Z-coordinate
                     * @param octaves Number of octaves to use
                     * @param frequency How much to alter the frequency by each octave
                     * @param amplitude How much to alter the amplitude by each octave
                     * @return Resulting noise
                     */
                    // @ts-ignore
                    getNoise(x: number /*double*/, y: number /*double*/, z: number /*double*/, octaves: number /*int*/, frequency: number /*double*/, amplitude: number /*double*/): double
                }
            }
        }
    }
}
