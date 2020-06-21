declare namespace java {
    namespace awt {
        namespace geom {
            namespace Arc2D {
                /**
                 * This class defines an arc specified in {@code double} precision.
                 * @since 1.2
                 */
                // @ts-ignore
                class Double extends java.awt.geom.Arc2D implements java.io.Serializable {
                    /**
                     * Constructs a new OPEN arc, initialized to location (0, 0),
                     * size (0, 0), angular extents (start = 0, extent = 0).
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a new arc, initialized to location (0, 0),
                     * size (0, 0), angular extents (start = 0, extent = 0), and
                     * the specified closure type.
                     * @param type The closure type for the arc:
                     *  {#link #OPEN}, {@link #CHORD}, or {@link #PIE}.
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor(type: number /*int*/)
                    /**
                     * Constructs a new arc, initialized to the specified location,
                     * size, angular extents, and closure type.
                     * @param x The X coordinate of the upper-left corner
                     *           of the arc's framing rectangle.
                     * @param y The Y coordinate of the upper-left corner
                     *           of the arc's framing rectangle.
                     * @param w The overall width of the full ellipse of which this
                     *           arc is a partial section.
                     * @param h The overall height of the full ellipse of which this
                     *           arc is a partial section.
                     * @param start The starting angle of the arc in degrees.
                     * @param extent The angular extent of the arc in degrees.
                     * @param type The closure type for the arc:
                     *  {#link #OPEN}, {@link #CHORD}, or {@link #PIE}.
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/, start: number /*double*/, extent: number /*double*/, type: number /*int*/)
                    /**
                     * Constructs a new arc, initialized to the specified location,
                     * size, angular extents, and closure type.
                     * @param ellipseBounds The framing rectangle that defines the
                     *  outer boundary of the full ellipse of which this arc is a
                     *  partial section.
                     * @param start The starting angle of the arc in degrees.
                     * @param extent The angular extent of the arc in degrees.
                     * @param type The closure type for the arc:
                     *  {#link #OPEN}, {@link #CHORD}, or {@link #PIE}.
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor(ellipseBounds: java.awt.geom.Rectangle2D, start: number /*double*/, extent: number /*double*/, type: number /*int*/)
                    /**
                     * The X coordinate of the upper-left corner of the framing
                     * rectangle of the arc.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public x: number /*double*/
                    /**
                     * The Y coordinate of the upper-left corner of the framing
                     * rectangle of the arc.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public y: number /*double*/
                    /**
                     * The overall width of the full ellipse of which this arc is
                     * a partial section (not considering the angular extents).
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public width: number /*double*/
                    /**
                     * The overall height of the full ellipse of which this arc is
                     * a partial section (not considering the angular extents).
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public height: number /*double*/
                    /**
                     * The starting angle of the arc in degrees.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public start: number /*double*/
                    /**
                     * The angular extent of the arc in degrees.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public extent: number /*double*/
                    /**
                     * {@inheritDoc}
                     * Note that the arc
                     * <a href="Arc2D.html#inscribes">partially inscribes</a>
                     * the framing rectangle of this {@code RectangularShape}.
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getX(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * Note that the arc
                     * <a href="Arc2D.html#inscribes">partially inscribes</a>
                     * the framing rectangle of this {@code RectangularShape}.
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getY(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * Note that the arc
                     * <a href="Arc2D.html#inscribes">partially inscribes</a>
                     * the framing rectangle of this {@code RectangularShape}.
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getWidth(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * Note that the arc
                     * <a href="Arc2D.html#inscribes">partially inscribes</a>
                     * the framing rectangle of this {@code RectangularShape}.
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getHeight(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getAngleStart(): number /*double*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getAngleExtent(): number /*double*/
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
                    public setArc(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/, angSt: number /*double*/, angExt: number /*double*/, closure: number /*int*/): void
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public setAngleStart(angSt: number /*double*/): void
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public setAngleExtent(angExt: number /*double*/): void
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    makeBounds(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): java.awt.geom.Rectangle2D
                }
            }
        }
    }
}
