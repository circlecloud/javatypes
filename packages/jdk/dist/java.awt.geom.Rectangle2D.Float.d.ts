declare namespace java {
    namespace awt {
        namespace geom {
            namespace Rectangle2D {
                /**
                 * The <code>Float</code> class defines a rectangle specified in float
                 * coordinates.
                 * @since 1.2
                 */
                // @ts-ignore
                class Float extends java.awt.geom.Rectangle2D implements java.io.Serializable {
                    /**
                     * Constructs a new <code>Rectangle2D</code>, initialized to
                     * location (0.0,&nbsp;0.0) and size (0.0,&nbsp;0.0).
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs and initializes a <code>Rectangle2D</code>
                     * from the specified <code>float</code> coordinates.
                     * @param x the X coordinate of the upper-left corner
                     *           of the newly constructed <code>Rectangle2D</code>
                     * @param y the Y coordinate of the upper-left corner
                     *           of the newly constructed <code>Rectangle2D</code>
                     * @param w the width of the newly constructed
                     *           <code>Rectangle2D</code>
                     * @param h the height of the newly constructed
                     *           <code>Rectangle2D</code>
                     * @since 1.2
                     */
                    // @ts-ignore
                    constructor(x: number /*float*/, y: number /*float*/, w: number /*float*/, h: number /*float*/)
                    /**
                     * The X coordinate of this <code>Rectangle2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public x: number /*float*/
                    /**
                     * The Y coordinate of this <code>Rectangle2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public y: number /*float*/
                    /**
                     * The width of this <code>Rectangle2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public width: number /*float*/
                    /**
                     * The height of this <code>Rectangle2D</code>.
                     * @since 1.2
                     * @serial 
                     */
                    // @ts-ignore
                    public height: number /*float*/
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
                    public isEmpty(): boolean
                    /**
                     * Sets the location and size of this <code>Rectangle2D</code>
                     * to the specified <code>float</code> values.
                     * @param x the X coordinate of the upper-left corner
                     *           of this <code>Rectangle2D</code>
                     * @param y the Y coordinate of the upper-left corner
                     *           of this <code>Rectangle2D</code>
                     * @param w the width of this <code>Rectangle2D</code>
                     * @param h the height of this <code>Rectangle2D</code>
                     * @since 1.2
                     */
                    // @ts-ignore
                    public setRect(x: number /*float*/, y: number /*float*/, w: number /*float*/, h: number /*float*/): void
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public setRect(x: number /*double*/, y: number /*double*/, w: number /*double*/, h: number /*double*/): void
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public setRect(r: java.awt.geom.Rectangle2D): void
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public outcode(x: number /*double*/, y: number /*double*/): number /*int*/
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public getBounds2D(): java.awt.geom.Rectangle2D
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public createIntersection(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
                    /**
                     * {@inheritDoc}
                     * @since 1.2
                     */
                    // @ts-ignore
                    public createUnion(r: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
                    /**
                     * Returns the <code>String</code> representation of this
                     * <code>Rectangle2D</code>.
                     * @return a <code>String</code> representing this
                     *  <code>Rectangle2D</code>.
                     * @since 1.2
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
