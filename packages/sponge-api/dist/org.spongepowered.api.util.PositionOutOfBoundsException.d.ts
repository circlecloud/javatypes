declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * An exception thrown when a position is outside of its expected bounds.
                 */
                // @ts-ignore
                class PositionOutOfBoundsException extends java.lang.RuntimeException {
                    /**
                     * Constructs the exception from int coordinate vectors.
                     * @param position The out-of-bounds position
                     * @param min The minimum acceptable bound
                     * @param max The maximum acceptable bound
                     */
                    // @ts-ignore
                    constructor(position: Vectori, min: Vectori, max: Vectori)
                    /**
                     * Constructs the exception from float coordinate vectors.
                     * @param position The out-of-bounds position
                     * @param min The minimum acceptable bound
                     * @param max The maximum acceptable bound
                     */
                    // @ts-ignore
                    constructor(position: Vectorf, min: Vectorf, max: Vectorf)
                    /**
                     * Constructs the exception from double coordinate vectors.
                     * @param position The out-of-bounds position
                     * @param min The minimum acceptable bound
                     * @param max The maximum acceptable bound
                     */
                    // @ts-ignore
                    constructor(position: Vectord, min: Vectord, max: Vectord)
                }
            }
        }
    }
}
