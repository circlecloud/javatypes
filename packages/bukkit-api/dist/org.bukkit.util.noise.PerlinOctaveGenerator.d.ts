declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                /**
                 * Creates perlin noise through unbiased octaves
                 */
                // @ts-ignore
                class PerlinOctaveGenerator extends org.bukkit.util.noise.OctaveGenerator {
                    /**
                     * Creates a perlin octave generator for the given world
                     * @param world World to construct this generator for
                     * @param octaves Amount of octaves to create
                     */
                    // @ts-ignore
                    constructor(world: org.bukkit.World, octaves: number /*int*/)
                    /**
                     * Creates a perlin octave generator for the given world
                     * @param seed Seed to construct this generator for
                     * @param octaves Amount of octaves to create
                     */
                    // @ts-ignore
                    constructor(seed: number /*long*/, octaves: number /*int*/)
                    /**
                     * Creates a perlin octave generator for the given {@link Random}
                     * @param rand Random object to construct this generator for
                     * @param octaves Amount of octaves to create
                     */
                    // @ts-ignore
                    constructor(rand: java.util.Random, octaves: number /*int*/)
                }
            }
        }
    }
}
