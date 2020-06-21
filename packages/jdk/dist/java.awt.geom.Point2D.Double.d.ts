declare namespace java {
    namespace awt {
        namespace geom {
            namespace Point2D {
                /**
                 * The <code>Double</code> class defines a point specified in
                 * <code>double</code> precision.
                 * @since 1.2
                 */
                // @ts-ignore
                class Double extends java.awt.geom.Point2D implements java.io.Serializable {
                    /**
                     * Constructs and initializes a <code>Point2D</code> with
                     * coordinates (0,&nbsp;0).
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs and initializes a <code>Point2D</code> with the
                     * specified coordinates.
                     * @param x the X coordinate of the newly
                     *           constructed <code>Point2D</code>
                     * @param y the Y coordinate of the newly
                     *           constructed <code>Point2D</code>
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor(x: number /*double*/, y: number /*double*/)
                    /**
                     * The X coordinate of this <code>Point2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public x: number /*double*/
                    /**
                     * The Y coordinate of this <code>Point2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public y: number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getX(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getY(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public setLocation(x: number /*double*/, y: number /*double*/): void
                    /**
                     * Returns a <code>String</code> that represents the value
                     * of this <code>Point2D</code>.
                     * @return a string representation of this <code>Point2D</code>.
                     * @since 1.2
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
