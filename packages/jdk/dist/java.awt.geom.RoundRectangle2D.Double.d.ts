declare namespace java {
    namespace awt {
        namespace geom {
            namespace RoundRectangle2D {
                /**
                 * The <code>Double</code> class defines a rectangle with rounded
                 * corners all specified in <code>double</code> coordinates.
                 * @since 1.2
                 */
                // @ts-ignore
                class Double extends java.awt.geom.RoundRectangle2D implements java.io.Serializable {
                    /**
                     * Constructs a new <code>RoundRectangle2D</code>, initialized to
                     * location (0.0,&nbsp;0.0), size (0.0,&nbsp;0.0), and corner arcs
                     * of radius 0.0.
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs and initializes a <code>RoundRectangle2D</code>
                     * from the specified <code>double</code> coordinates.
                     * @param x the X coordinate of the newly
                     *           constructed <code>RoundRectangle2D</code>
                     * @param y the Y coordinate of the newly
                     *           constructed <code>RoundRectangle2D</code>
                     * @param w the width to which to set the newly
                     *           constructed <code>RoundRectangle2D</code>
                     * @param h the height to which to set the newly
                     *           constructed <code>RoundRectangle2D</code>
                     * @param arcw the width of the arc to use to round off the
                     *              corners of the newly constructed
                     *              <code>RoundRectangle2D</code>
                     * @param arch the height of the arc to use to round off the
                     *              corners of the newly constructed
                     *              <code>RoundRectangle2D</code>
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/, arcw: number /*double*/, arch: number /*double*/)
                    /**
                     * The X coordinate of this <code>RoundRectangle2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public x: number /*double*/
                    /**
                     * The Y coordinate of this <code>RoundRectangle2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public y: number /*double*/
                    /**
                     * The width of this <code>RoundRectangle2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public width: number /*double*/
                    /**
                     * The height of this <code>RoundRectangle2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public height: number /*double*/
                    /**
                     * The width of the arc that rounds off the corners.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public arcwidth: number /*double*/
                    /**
                     * The height of the arc that rounds off the corners.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public archeight: number /*double*/
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
                    public getWidth(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getHeight(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getArcWidth(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getArcHeight(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public isEmpty(): boolean
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public setRoundRect(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/, arcw: number /*double*/, arch: number /*double*/): void
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public setRoundRect(rr: java.awt.geom.RoundRectangle2D): void
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getBounds2D(): java.awt.geom.Rectangle2D
                }
            }
        }
    }
}
