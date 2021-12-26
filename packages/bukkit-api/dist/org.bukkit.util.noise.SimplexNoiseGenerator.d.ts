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
                    static readonly SQRT_3: number /*double*/
                    // @ts-ignore
                    static readonly SQRT_5: number /*double*/
                    // @ts-ignore
                    static readonly F2: number /*double*/
                    // @ts-ignore
                    static readonly G2: number /*double*/
                    // @ts-ignore
                    static readonly G22: number /*double*/
                    // @ts-ignore
                    static readonly F3: number /*double*/
                    // @ts-ignore
                    static readonly G3: number /*double*/
                    // @ts-ignore
                    static readonly F4: number /*double*/
                    // @ts-ignore
                    static readonly G4: number /*double*/
                    // @ts-ignore
                    static readonly G42: number /*double*/
                    // @ts-ignore
                    static readonly G43: number /*double*/
                    // @ts-ignore
                    static readonly G44: number /*double*/
                    // @ts-ignore
                    static readonly grad4: number /*int*/[][]
                    // @ts-ignore
                    static readonly simplex: number /*int*/[][]
                    // @ts-ignore
                    offsetW: number /*double*/
                    // @ts-ignore
                    static dot(g: number /*int*/[], x: number /*double*/, y: number /*double*/): number /*double*/
                    // @ts-ignore
                    static dot(g: number /*int*/[], x: number /*double*/, y: number /*double*/, z: number /*double*/): number /*double*/
                    // @ts-ignore
                    static dot(g: number /*int*/[], x: number /*double*/, y: number /*double*/, z: number /*double*/, w: number /*double*/): number /*double*/
                    /**
                     * Computes and returns the 1D unseeded simplex noise for the given
                     * coordinates in 1D space
                     * @param xin X coordinate
                     * @return Noise at given location, from range -1 to 1
                     */
                    // @ts-ignore
                    public static getNoise(xin: number /*double*/): number /*double*/
                    /**
                     * Computes and returns the 2D unseeded simplex noise for the given
                     * coordinates in 2D space
                     * @param xin X coordinate
                     * @param yin Y coordinate
                     * @return Noise at given location, from range -1 to 1
                     */
                    // @ts-ignore
                    public static getNoise(xin: number /*double*/, yin: number /*double*/): number /*double*/
                    /**
                     * Computes and returns the 3D unseeded simplex noise for the given
                     * coordinates in 3D space
                     * @param xin X coordinate
                     * @param yin Y coordinate
                     * @param zin Z coordinate
                     * @return Noise at given location, from range -1 to 1
                     */
                    // @ts-ignore
                    public static getNoise(xin: number /*double*/, yin: number /*double*/, zin: number /*double*/): number /*double*/
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
                    public static getNoise(x: number /*double*/, y: number /*double*/, z: number /*double*/, w: number /*double*/): number /*double*/
                    // @ts-ignore
                    public noise(xin: number /*double*/, yin: number /*double*/, zin: number /*double*/): number /*double*/
                    // @ts-ignore
                    public noise(xin: number /*double*/, yin: number /*double*/): number /*double*/
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
                    public noise(x: number /*double*/, y: number /*double*/, z: number /*double*/, w: number /*double*/): number /*double*/
                    /**
                     * Gets the singleton unseeded instance of this generator
                     * @return Singleton
                     */
                    // @ts-ignore
                    public static getInstance(): org.bukkit.util.noise.SimplexNoiseGenerator
                }
            }
        }
    }
}
