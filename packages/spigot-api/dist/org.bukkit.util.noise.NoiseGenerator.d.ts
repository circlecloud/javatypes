declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                /**
                 * Base class for all noise generators
                 */
                // @ts-ignore
                class NoiseGenerator extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly perm: number /*int*/[]
                    // @ts-ignore
                    offsetX: number /*double*/
                    // @ts-ignore
                    offsetY: number /*double*/
                    // @ts-ignore
                    offsetZ: number /*double*/
                    /**
                     * Speedy floor, faster than (int)Math.floor(x)
                     * @param x Value to floor
                     * @return Floored value
                     */
                    // @ts-ignore
                    floor(x: number /*double*/): int
                    // @ts-ignore
                    fade(x: number /*double*/): double
                    // @ts-ignore
                    lerp(x: number /*double*/, y: number /*double*/, z: number /*double*/): double
                    // @ts-ignore
                    grad(hash: number /*int*/, x: number /*double*/, y: number /*double*/, z: number /*double*/): double
                    /**
                     * Computes and returns the 1D noise for the given coordinate in 1D space
                     * @param x X coordinate
                     * @return Noise at given location, from range -1 to 1
                     */
                    // @ts-ignore
                    noise(x: number /*double*/): double
                    /**
                     * Computes and returns the 2D noise for the given coordinates in 2D space
                     * @param x X coordinate
                     * @param y Y coordinate
                     * @return Noise at given location, from range -1 to 1
                     */
                    // @ts-ignore
                    noise(x: number /*double*/, y: number /*double*/): double
                    /**
                     * Computes and returns the 3D noise for the given coordinates in 3D space
                     * @param x X coordinate
                     * @param y Y coordinate
                     * @param z Z coordinate
                     * @return Noise at given location, from range -1 to 1
                     */
                    // @ts-ignore
                    abstract noise(x: number /*double*/, y: number /*double*/, z: number /*double*/): double
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
                    noise(x: number /*double*/, octaves: number /*int*/, frequency: number /*double*/, amplitude: number /*double*/): double
                    /**
                     * Generates noise for the 1D coordinates using the specified number of
                     * octaves and parameters
                     * @param x X-coordinate
                     * @param octaves Number of octaves to use
                     * @param frequency How much to alter the frequency by each octave
                     * @param amplitude How much to alter the amplitude by each octave
                     * @param normalized If true, normalize the value to [-1, 1]
                     * @return Resulting noise
                     */
                    // @ts-ignore
                    noise(x: number /*double*/, octaves: number /*int*/, frequency: number /*double*/, amplitude: number /*double*/, normalized: boolean): double
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
                    noise(x: number /*double*/, y: number /*double*/, octaves: number /*int*/, frequency: number /*double*/, amplitude: number /*double*/): double
                    /**
                     * Generates noise for the 2D coordinates using the specified number of
                     * octaves and parameters
                     * @param x X-coordinate
                     * @param y Y-coordinate
                     * @param octaves Number of octaves to use
                     * @param frequency How much to alter the frequency by each octave
                     * @param amplitude How much to alter the amplitude by each octave
                     * @param normalized If true, normalize the value to [-1, 1]
                     * @return Resulting noise
                     */
                    // @ts-ignore
                    noise(x: number /*double*/, y: number /*double*/, octaves: number /*int*/, frequency: number /*double*/, amplitude: number /*double*/, normalized: boolean): double
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
                    noise(x: number /*double*/, y: number /*double*/, z: number /*double*/, octaves: number /*int*/, frequency: number /*double*/, amplitude: number /*double*/): double
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     * @param x X-coordinate
                     * @param y Y-coordinate
                     * @param z Z-coordinate
                     * @param octaves Number of octaves to use
                     * @param frequency How much to alter the frequency by each octave
                     * @param amplitude How much to alter the amplitude by each octave
                     * @param normalized If true, normalize the value to [-1, 1]
                     * @return Resulting noise
                     */
                    // @ts-ignore
                    noise(x: number /*double*/, y: number /*double*/, z: number /*double*/, octaves: number /*int*/, frequency: number /*double*/, amplitude: number /*double*/, normalized: boolean): double
                }
            }
        }
    }
}
