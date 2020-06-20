declare namespace java {
    namespace awt {
        namespace geom {
            namespace QuadCurve2D {
                /**
                 * A quadratic parametric curve segment specified with
                 * {@code double} coordinates.
                 * @since 1.2
                 */
                // @ts-ignore
                class Double extends java.awt.geom.QuadCurve2D implements java.io.Serializable {
                    /**
                     * Constructs and initializes a <code>QuadCurve2D</code> with
                     * coordinates (0, 0, 0, 0, 0, 0).
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs and initializes a <code>QuadCurve2D</code> from the
                     * specified {@code double} coordinates.
                     * @param x1 the X coordinate of the start point
                     * @param y1 the Y coordinate of the start point
                     * @param ctrlx the X coordinate of the control point
                     * @param ctrly the Y coordinate of the control point
                     * @param x2 the X coordinate of the end point
                     * @param y2 the Y coordinate of the end point
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor(x1: number /*double*/, y1: number /*double*/, ctrlx: number /*double*/, ctrly: number /*double*/, x2: number /*double*/, y2: number /*double*/)
                    /**
                     * The X coordinate of the start point of the quadratic curve
                     * segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    x1: number /*double*/
                    /**
                     * The Y coordinate of the start point of the quadratic curve
                     * segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    y1: number /*double*/
                    /**
                     * The X coordinate of the control point of the quadratic curve
                     * segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    ctrlx: number /*double*/
                    /**
                     * The Y coordinate of the control point of the quadratic curve
                     * segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    ctrly: number /*double*/
                    /**
                     * The X coordinate of the end point of the quadratic curve
                     * segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    x2: number /*double*/
                    /**
                     * The Y coordinate of the end point of the quadratic curve
                     * segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    y2: number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getX1(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getY1(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getP1(): java.awt.geom.Point2D
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getCtrlX(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getCtrlY(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getCtrlPt(): java.awt.geom.Point2D
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getX2(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getY2(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getP2(): java.awt.geom.Point2D
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    setCurve(x1: number /*double*/, y1: number /*double*/, ctrlx: number /*double*/, ctrly: number /*double*/, x2: number /*double*/, y2: number /*double*/): void
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
