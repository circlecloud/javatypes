declare namespace java {
    namespace awt {
        namespace geom {
            namespace Ellipse2D {
                /**
                 * The <code>Double</code> class defines an ellipse specified
                 * in <code>double</code> precision.
                 * @since 1.2
                 */
                // @ts-ignore
                class Double extends java.awt.geom.Ellipse2D implements java.io.Serializable {
                    /**
                     * Constructs a new <code>Ellipse2D</code>, initialized to
                     * location (0,&nbsp;0) and size (0,&nbsp;0).
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs and initializes an <code>Ellipse2D</code> from the
                     * specified coordinates.
                     * @param x the X coordinate of the upper-left corner
                     *         of the framing rectangle
                     * @param y the Y coordinate of the upper-left corner
                     *         of the framing rectangle
                     * @param w the width of the framing rectangle
                     * @param h the height of the framing rectangle
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/)
                    /**
                     * The X coordinate of the upper-left corner of the
                     * framing rectangle of this {@code Ellipse2D}.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    x: number /*double*/
                    /**
                     * The Y coordinate of the upper-left corner of the
                     * framing rectangle of this {@code Ellipse2D}.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    y: number /*double*/
                    /**
                     * The overall width of this <code>Ellipse2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    width: number /*double*/
                    /**
                     * The overall height of the <code>Ellipse2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    height: number /*double*/
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
                    isEmpty(): boolean
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    setFrame(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): void
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
