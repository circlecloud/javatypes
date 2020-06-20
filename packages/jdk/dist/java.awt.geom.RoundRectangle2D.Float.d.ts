declare namespace java {
    namespace awt {
        namespace geom {
            namespace RoundRectangle2D {
                /**
                 * The <code>Float</code> class defines a rectangle with rounded
                 * corners all specified in <code>float</code> coordinates.
                 * @since 1.2
                 */
                // @ts-ignore
                class Float extends java.awt.geom.RoundRectangle2D implements java.io.Serializable {
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
                     * from the specified <code>float</code> coordinates.
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
                    constructor(x: number /*float*/, y: number /*float*/, w: number /*float*/, h: number /*float*/, arcw: number /*float*/, arch: number /*float*/)
                    /**
                     * The X coordinate of this <code>RoundRectangle2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    x: number /*float*/
                    /**
                     * The Y coordinate of this <code>RoundRectangle2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    y: number /*float*/
                    /**
                     * The width of this <code>RoundRectangle2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    width: number /*float*/
                    /**
                     * The height of this <code>RoundRectangle2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    height: number /*float*/
                    /**
                     * The width of the arc that rounds off the corners.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    arcwidth: number /*float*/
                    /**
                     * The height of the arc that rounds off the corners.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    archeight: number /*float*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getX(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getY(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getWidth(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getHeight(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getArcWidth(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getArcHeight(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    isEmpty(): boolean
                    /**
                     * Sets the location, size, and corner radii of this
                     * <code>RoundRectangle2D</code> to the specified
                     * <code>float</code> values.
                     * @param x the X coordinate to which to set the
                     *           location of this <code>RoundRectangle2D</code>
                     * @param y the Y coordinate to which to set the
                     *           location of this <code>RoundRectangle2D</code>
                     * @param w the width to which to set this
                     *           <code>RoundRectangle2D</code>
                     * @param h the height to which to set this
                     *           <code>RoundRectangle2D</code>
                     * @param arcw the width to which to set the arc of this
                     *              <code>RoundRectangle2D</code>
                     * @param arch the height to which to set the arc of this
                     *              <code>RoundRectangle2D</code>
                     * @since 1.2
                     */
                    // @ts-ignore
                    setRoundRect(x: number /*float*/, y: number /*float*/, w: number /*float*/, h: number /*float*/, arcw: number /*float*/, arch: number /*float*/): void
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    setRoundRect(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/, arcw: number /*double*/, arch: number /*double*/): void
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    setRoundRect(rr: java.awt.geom.RoundRectangle2D): void
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getBounds2D(): java.awt.geom.Rectangle2D
                }
            }
        }
    }
}
