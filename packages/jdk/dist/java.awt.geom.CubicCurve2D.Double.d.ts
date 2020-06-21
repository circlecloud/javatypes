declare namespace java {
    namespace awt {
        namespace geom {
            namespace CubicCurve2D {
                /**
                 * A cubic parametric curve segment specified with
                 * {@code double} coordinates.
                 * @since 1.2
                 */
                // @ts-ignore
                class Double extends java.awt.geom.CubicCurve2D implements java.io.Serializable {
                    /**
                     * Constructs and initializes a CubicCurve with coordinates
                     * (0, 0, 0, 0, 0, 0, 0, 0).
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs and initializes a {@code CubicCurve2D} from
                     * the specified {@code double} coordinates.
                     * @param x1 the X coordinate for the start point
                     *            of the resulting {#code CubicCurve2D}
                     * @param y1 the Y coordinate for the start point
                     *            of the resulting {#code CubicCurve2D}
                     * @param ctrlx1 the X coordinate for the first control point
                     *                of the resulting {#code CubicCurve2D}
                     * @param ctrly1 the Y coordinate for the first control point
                     *                of the resulting {#code CubicCurve2D}
                     * @param ctrlx2 the X coordinate for the second control point
                     *                of the resulting {#code CubicCurve2D}
                     * @param ctrly2 the Y coordinate for the second control point
                     *                of the resulting {#code CubicCurve2D}
                     * @param x2 the X coordinate for the end point
                     *            of the resulting {#code CubicCurve2D}
                     * @param y2 the Y coordinate for the end point
                     *            of the resulting {#code CubicCurve2D}
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor(x1: number /*double*/, y1: number /*double*/, ctrlx1: number /*double*/, ctrly1: number /*double*/, ctrlx2: number /*double*/, ctrly2: number /*double*/, x2: number /*double*/, y2: number /*double*/)
                    /**
                     * The X coordinate of the start point
                     * of the cubic curve segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public x1: number /*double*/
                    /**
                     * The Y coordinate of the start point
                     * of the cubic curve segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public y1: number /*double*/
                    /**
                     * The X coordinate of the first control point
                     * of the cubic curve segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public ctrlx1: number /*double*/
                    /**
                     * The Y coordinate of the first control point
                     * of the cubic curve segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public ctrly1: number /*double*/
                    /**
                     * The X coordinate of the second control point
                     * of the cubic curve segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public ctrlx2: number /*double*/
                    /**
                     * The Y coordinate of the second control point
                     * of the cubic curve segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public ctrly2: number /*double*/
                    /**
                     * The X coordinate of the end point
                     * of the cubic curve segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public x2: number /*double*/
                    /**
                     * The Y coordinate of the end point
                     * of the cubic curve segment.
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
                    public getCtrlX1(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getCtrlY1(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getCtrlP1(): java.awt.geom.Point2D
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getCtrlX2(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getCtrlY2(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getCtrlP2(): java.awt.geom.Point2D
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
                    public setCurve(x1: number /*double*/, y1: number /*double*/, ctrlx1: number /*double*/, ctrly1: number /*double*/, ctrlx2: number /*double*/, ctrly2: number /*double*/, x2: number /*double*/, y2: number /*double*/): void
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
