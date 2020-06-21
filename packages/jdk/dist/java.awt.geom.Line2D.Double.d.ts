declare namespace java {
    namespace awt {
        namespace geom {
            namespace Line2D {
                /**
                 * A line segment specified with double coordinates.
                 * @since 1.2
                 */
                // @ts-ignore
                class Double extends java.awt.geom.Line2D implements java.io.Serializable {
                    /**
                     * Constructs and initializes a Line with coordinates (0, 0) &rarr; (0, 0).
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs and initializes a <code>Line2D</code> from the
                     * specified coordinates.
                     * @param x1 the X coordinate of the start point
                     * @param y1 the Y coordinate of the start point
                     * @param x2 the X coordinate of the end point
                     * @param y2 the Y coordinate of the end point
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor(x1: number /*double*/, y1: number /*double*/, x2: number /*double*/, y2: number /*double*/)
                    /**
                     * Constructs and initializes a <code>Line2D</code> from the
                     * specified <code>Point2D</code> objects.
                     * @param p1 the start <code>Point2D</code> of this line segment
                     * @param p2 the end <code>Point2D</code> of this line segment
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor(p1: java.awt.geom.Point2D, p2: java.awt.geom.Point2D)
                    /**
                     * The X coordinate of the start point of the line segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public x1: number /*double*/
                    /**
                     * The Y coordinate of the start point of the line segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public y1: number /*double*/
                    /**
                     * The X coordinate of the end point of the line segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public x2: number /*double*/
                    /**
                     * The Y coordinate of the end point of the line segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public y2: number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getX1(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getY1(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getP1(): java.awt.geom.Point2D
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getX2(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getY2(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getP2(): java.awt.geom.Point2D
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public setLine(x1: number /*double*/, y1: number /*double*/, x2: number /*double*/, y2: number /*double*/): void
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
