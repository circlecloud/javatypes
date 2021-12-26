declare namespace org {
    namespace bukkit {
        namespace util {
            namespace noise {
                /**
                 * Creates noise using unbiased octaves
                 */
                // @ts-ignore
                abstract class OctaveGenerator extends java.lang.Object {
                    // @ts-ignore
                    constructor(octaves: org.bukkit.util.noise.NoiseGenerator[])
                    // @ts-ignore
                    readonly octaves: org.bukkit.util.noise.NoiseGenerator[]
                    // @ts-ignore
                    xScale: number /*double*/
                    // @ts-ignore
                    yScale: number /*double*/
                    // @ts-ignore
                    zScale: number /*double*/
                    /**
                     * Sets the scale used for all coordinates passed to this generator.
                     * <p>
                     * This is the equivalent to setting each coordinate to the specified
                     * value.
                     * @param scale New value to scale each coordinate by
                     */
                    // @ts-ignore
                    public setScale(scale: number /*double*/): void
                    /**
                     * Gets the scale used for each X-coordinates passed
                     * @return X scale
                     */
                    // @ts-ignore
                    public getXScale(): number /*double*/
                    /**
                     * Sets the scale used for each X-coordinates passed
                     * @param scale New X scale
                     */
                    // @ts-ignore
                    public setXScale(scale: number /*double*/): void
                    /**
                     * Gets the scale used for each Y-coordinates passed
                     * @return Y scale
                     */
                    // @ts-ignore
                    public getYScale(): number /*double*/
                    /**
                     * Sets the scale used for each Y-coordinates passed
                     * @param scale New Y scale
                     */
                    // @ts-ignore
                    public setYScale(scale: number /*double*/): void
                    /**
                     * Gets the scale used for each Z-coordinates passed
                     * @return Z scale
                     */
                    // @ts-ignore
                    public getZScale(): number /*double*/
                    /**
                     * Sets the scale used for each Z-coordinates passed
                     * @param scale New Z scale
                     */
                    // @ts-ignore
                    public setZScale(scale: number /*double*/): void
                    /**
                     * Gets a clone of the individual octaves used within this generator
                     * @return Clone of the individual octaves
                     */
                    // @ts-ignore
                    public getOctaves(): org.bukkit.util.noise.NoiseGenerator[]
                    /**
                     * Generates noise for the 1D coordinates using the specified number of
                     * octaves and parameters
                     * @param x X-coordinate
                     * @param frequency How much to alter the frequency by each octave
                     * @param amplitude How much to alter the amplitude by each octave
                     * @return Resulting noise
                     */
                    // @ts-ignore
                    public noise(x: number /*double*/, frequency: number /*double*/, amplitude: number /*double*/): number /*double*/
                    /**
                     * Generates noise for the 1D coordinates using the specified number of
                     * octaves and parameters
                     * @param x X-coordinate
                     * @param frequency How much to alter the frequency by each octave
                     * @param amplitude How much to alter the amplitude by each octave
                     * @param normalized If true, normalize the value to [-1, 1]
                     * @return Resulting noise
                     */
                    // @ts-ignore
                    public noise(x: number /*double*/, frequency: number /*double*/, amplitude: number /*double*/, normalized: boolean): number /*double*/
                    /**
                     * Generates noise for the 2D coordinates using the specified number of
                     * octaves and parameters
                     * @param x X-coordinate
                     * @param y Y-coordinate
                     * @param frequency How much to alter the frequency by each octave
                     * @param amplitude How much to alter the amplitude by each octave
                     * @return Resulting noise
                     */
                    // @ts-ignore
                    public noise(x: number /*double*/, y: number /*double*/, frequency: number /*double*/, amplitude: number /*double*/): number /*double*/
                    /**
                     * Generates noise for the 2D coordinates using the specified number of
                     * octaves and parameters
                     * @param x X-coordinate
                     * @param y Y-coordinate
                     * @param frequency How much to alter the frequency by each octave
                     * @param amplitude How much to alter the amplitude by each octave
                     * @param normalized If true, normalize the value to [-1, 1]
                     * @return Resulting noise
                     */
                    // @ts-ignore
                    public noise(x: number /*double*/, y: number /*double*/, frequency: number /*double*/, amplitude: number /*double*/, normalized: boolean): number /*double*/
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     * @param x X-coordinate
                     * @param y Y-coordinate
                     * @param z Z-coordinate
                     * @param frequency How much to alter the frequency by each octave
                     * @param amplitude How much to alter the amplitude by each octave
                     * @return Resulting noise
                     */
                    // @ts-ignore
                    public noise(x: number /*double*/, y: number /*double*/, z: number /*double*/, frequency: number /*double*/, amplitude: number /*double*/): number /*double*/
                    /**
                     * Generates noise for the 3D coordinates using the specified number of
                     * octaves and parameters
                     * @param x X-coordinate
                     * @param y Y-coordinate
                     * @param z Z-coordinate
                     * @param frequency How much to alter the frequency by each octave
                     * @param amplitude How much to alter the amplitude by each octave
                     * @param normalized If true, normalize the value to [-1, 1]
                     * @return Resulting noise
                     */
                    // @ts-ignore
                    public noise(x: number /*double*/, y: number /*double*/, z: number /*double*/, frequency: number /*double*/, amplitude: number /*double*/, normalized: boolean): number /*double*/
                }
            }
        }
    }
}
