declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                /**
                 * Generates simplex-based noise.
                 * <p>
                 * This is a modified version of the freely published version in the paper by
                 * Stefan Gustavson at
                 * <a href="http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf">
                 * http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf</a>
                 */
                // @ts-ignore
                class SimplexNoiseGenerator extends org.bukkit.util.noise.PerlinNoiseGenerator {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a seeded simplex noise generator for the given world
                     * @param world World to construct this generator for
                     */
                    // @ts-ignore
                    constructor(world: org.bukkit.World)
                    /**
                     * Creates a seeded simplex noise generator for the given seed
                     * @param seed Seed to construct this generator for
                     */
                    // @ts-ignore
                    constructor(seed: number /*long*/)
                    /**
                     * Creates a seeded simplex noise generator with the given Random
                     * @param rand Random to construct with
                     */
                    // @ts-ignore
                    constructor(rand: java.util.Random)
                    // @ts-ignore
                    readonly SQRT_3: number /*double*/
                    // @ts-ignore
                    readonly SQRT_5: number /*double*/
                    // @ts-ignore
                    readonly F2: number /*double*/
                    // @ts-ignore
                    readonly G2: number /*double*/
                    // @ts-ignore
                    readonly G22: number /*double*/
                    // @ts-ignore
                    readonly F3: number /*double*/
                    // @ts-ignore
                    readonly G3: number /*double*/
                    // @ts-ignore
                    readonly F4: number /*double*/
                    // @ts-ignore
                    readonly G4: number /*double*/
                    // @ts-ignore
                    readonly G42: number /*double*/
                    // @ts-ignore
                    readonly G43: number /*double*/
                    // @ts-ignore
                    readonly G44: number /*double*/
                    // @ts-ignore
                    readonly grad4: number /*int*/[][]
                    // @ts-ignore
                    readonly simplex: number /*int*/[][]
                    // @ts-ignore
                    offsetW: number /*double*/
                    // @ts-ignore
                    dot(g: number /*int*/[], x: number /*double*/, y: number /*double*/): double
                    // @ts-ignore
                    dot(g: number /*int*/[], x: number /*double*/, y: number /*double*/, z: number /*double*/): double
                    // @ts-ignore
                    dot(g: number /*int*/[], x: number /*double*/, y: number /*double*/, z: number /*double*/, w: number /*double*/): double
                    /**
                     * Computes and returns the 1D unseeded simplex noise for the given
                     * coordinates in 1D space
                     * @param xin X coordinate
                     * @return Noise at given location, from range -1 to 1
                     */
                    // @ts-ignore
                    getNoise(xin: number /*double*/): double
                    /**
                     * Computes and returns the 2D unseeded simplex noise for the given
                     * coordinates in 2D space
                     * @param xin X coordinate
                     * @param yin Y coordinate
                     * @return Noise at given location, from range -1 to 1
                     */
                    // @ts-ignore
                    getNoise(xin: number /*double*/, yin: number /*double*/): double
                    /**
                     * Computes and returns the 3D unseeded simplex noise for the given
                     * coordinates in 3D space
                     * @param xin X coordinate
                     * @param yin Y coordinate
                     * @param zin Z coordinate
                     * @return Noise at given location, from range -1 to 1
                     */
                    // @ts-ignore
                    getNoise(xin: number /*double*/, yin: number /*double*/, zin: number /*double*/): double
                    /**
                     * Computes and returns the 4D simplex noise for the given coordinates in
                     * 4D space
                     * @param x X coordinate
                     * @param y Y coordinate
                     * @param z Z coordinate
                     * @param w W coordinate
                     * @return Noise at given location, from range -1 to 1
                     */
                    // @ts-ignore
                    getNoise(x: number /*double*/, y: number /*double*/, z: number /*double*/, w: number /*double*/): double
                    // @ts-ignore
                    noise(xin: number /*double*/, yin: number /*double*/, zin: number /*double*/): double
                    // @ts-ignore
                    noise(xin: number /*double*/, yin: number /*double*/): double
                    /**
                     * Computes and returns the 4D simplex noise for the given coordinates in
                     * 4D space
                     * @param x X coordinate
                     * @param y Y coordinate
                     * @param z Z coordinate
                     * @param w W coordinate
                     * @return Noise at given location, from range -1 to 1
                     */
                    // @ts-ignore
                    noise(x: number /*double*/, y: number /*double*/, z: number /*double*/, w: number /*double*/): double
                    /**
                     * Gets the singleton unseeded instance of this generator
                     * @return Singleton
                     */
                    // @ts-ignore
                    getInstance(): org.bukkit.util.noise.SimplexNoiseGenerator
                }
            }
        }
    }
}
