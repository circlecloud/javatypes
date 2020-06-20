declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                /**
                 * Creates simplex noise through unbiased octaves
                 */
                // @ts-ignore
                class SimplexOctaveGenerator extends org.bukkit.util.noise.OctaveGenerator {
                    /**
                     * Creates a simplex octave generator for the given world
                     * @param world World to construct this generator for
                     * @param octaves Amount of octaves to create
                     */
                    // @ts-ignore
                    constructor(world: org.bukkit.World, octaves: number /*int*/)
                    /**
                     * Creates a simplex octave generator for the given world
                     * @param seed Seed to construct this generator for
                     * @param octaves Amount of octaves to create
                     */
                    // @ts-ignore
                    constructor(seed: number /*long*/, octaves: number /*int*/)
                    /**
                     * Creates a simplex octave generator for the given {@link Random}
                     * @param rand Random object to construct this generator for
                     * @param octaves Amount of octaves to create
                     */
                    // @ts-ignore
                    constructor(rand: java.util.Random, octaves: number /*int*/)
                    // @ts-ignore
                    setScale(scale: number /*double*/): void
                    /**
                     * Gets the scale used for each W-coordinates passed
                     * @return W scale
                     */
                    // @ts-ignore
                    getWScale(): double
                    /**
                     * Sets the scale used for each W-coordinates passed
                     * @param scale New W scale
                     */
                    // @ts-ignore
                    setWScale(scale: number /*double*/): void
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     * @param x X-coordinate
                     * @param y Y-coordinate
                     * @param z Z-coordinate
                     * @param w W-coordinate
                     * @param frequency How much to alter the frequency by each octave
                     * @param amplitude How much to alter the amplitude by each octave
                     * @return Resulting noise
                     */
                    // @ts-ignore
                    noise(x: number /*double*/, y: number /*double*/, z: number /*double*/, w: number /*double*/, frequency: number /*double*/, amplitude: number /*double*/): double
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     * @param x X-coordinate
                     * @param y Y-coordinate
                     * @param z Z-coordinate
                     * @param w W-coordinate
                     * @param frequency How much to alter the frequency by each octave
                     * @param amplitude How much to alter the amplitude by each octave
                     * @param normalized If true, normalize the value to [-1, 1]
                     * @return Resulting noise
                     */
                    // @ts-ignore
                    noise(x: number /*double*/, y: number /*double*/, z: number /*double*/, w: number /*double*/, frequency: number /*double*/, amplitude: number /*double*/, normalized: boolean): double
                }
            }
        }
    }
}
