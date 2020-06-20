declare namespace java {
    namespace awt {
        namespace geom {
            namespace CubicCurve2D {
                /**
                 * A cubic parametric curve segment specified with
                 * {@code float} coordinates.
                 * @since 1.2
                 */
                // @ts-ignore
                class Float extends java.awt.geom.CubicCurve2D implements java.io.Serializable {
                    /**
                     * Constructs and initializes a CubicCurve with coordinates
                     * (0, 0, 0, 0, 0, 0, 0, 0).
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs and initializes a {@code CubicCurve2D} from
                     * the specified {@code float} coordinates.
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
                    constructor(x1: number /*float*/, y1: number /*float*/, ctrlx1: number /*float*/, ctrly1: number /*float*/, ctrlx2: number /*float*/, ctrly2: number /*float*/, x2: number /*float*/, y2: number /*float*/)
                    /**
                     * The X coordinate of the start point
                     * of the cubic curve segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    x1: number /*float*/
                    /**
                     * The Y coordinate of the start point
                     * of the cubic curve segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    y1: number /*float*/
                    /**
                     * The X coordinate of the first control point
                     * of the cubic curve segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    ctrlx1: number /*float*/
                    /**
                     * The Y coordinate of the first control point
                     * of the cubic curve segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    ctrly1: number /*float*/
                    /**
                     * The X coordinate of the second control point
                     * of the cubic curve segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    ctrlx2: number /*float*/
                    /**
                     * The Y coordinate of the second control point
                     * of the cubic curve segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    ctrly2: number /*float*/
                    /**
                     * The X coordinate of the end point
                     * of the cubic curve segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    x2: number /*float*/
                    /**
                     * The Y coordinate of the end point
                     * of the cubic curve segment.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    y2: number /*float*/
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
                    getCtrlX1(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getCtrlY1(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getCtrlP1(): java.awt.geom.Point2D
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getCtrlX2(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getCtrlY2(): double
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    getCtrlP2(): java.awt.geom.Point2D
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
                    setCurve(x1: number /*double*/, y1: number /*double*/, ctrlx1: number /*double*/, ctrly1: number /*double*/, ctrlx2: number /*double*/, ctrly2: number /*double*/, x2: number /*double*/, y2: number /*double*/): void
                    /**
                     * Sets the location of the end points and control points
                     * of this curve to the specified {@code float} coordinates.
                     * @param x1 the X coordinate used to set the start point
                     *            of this {#code CubicCurve2D}
                     * @param y1 the Y coordinate used to set the start point
                     *            of this {#code CubicCurve2D}
                     * @param ctrlx1 the X coordinate used to set the first control point
                     *                of this {#code CubicCurve2D}
                     * @param ctrly1 the Y coordinate used to set the first control point
                     *                of this {#code CubicCurve2D}
                     * @param ctrlx2 the X coordinate used to set the second control point
                     *                of this {#code CubicCurve2D}
                     * @param ctrly2 the Y coordinate used to set the second control point
                     *                of this {#code CubicCurve2D}
                     * @param x2 the X coordinate used to set the end point
                     *            of this {#code CubicCurve2D}
                     * @param y2 the Y coordinate used to set the end point
                     *            of this {#code CubicCurve2D}
                     * @since 1.2
                     */
                    // @ts-ignore
                    setCurve(x1: number /*float*/, y1: number /*float*/, ctrlx1: number /*float*/, ctrly1: number /*float*/, ctrlx2: number /*float*/, ctrly2: number /*float*/, x2: number /*float*/, y2: number /*float*/): void
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
