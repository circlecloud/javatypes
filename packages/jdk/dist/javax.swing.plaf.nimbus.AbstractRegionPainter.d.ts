declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace nimbus {
                /**
                 * Convenient base class for defining Painter instances for rendering a
                 * region or component in Nimbus.
                 * @author Jasper Potts
                 * @author Richard Bair
                 */
                // @ts-ignore
                abstract class AbstractRegionPainter extends java.lang.Object implements javax.swing.Painter<javax.swing.JComponent> {
                    /**
                     * Create a new AbstractRegionPainter
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public paint(g: java.awt.Graphics2D, c: javax.swing.JComponent, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Get any extra attributes which the painter implementation would like
                     * to include in the image cache lookups. This is checked for every call
                     * of the paint(g, c, w, h) method.
                     * @param c The component on the current paint call
                     * @return Array of extra objects to be included in the cache key
                     */
                    // @ts-ignore
                    getExtendedCacheKeys(c: javax.swing.JComponent): any[]
                    /**
                     * <p>Gets the PaintContext for this painting operation. This method is called on every
                     * paint, and so should be fast and produce no garbage. The PaintContext contains
                     * information such as cache hints. It also contains data necessary for decoding
                     * points at runtime, such as the stretching insets, the canvas size at which the
                     * encoded points were defined, and whether the stretching insets are inverted.</p>
                     * <p> This method allows for subclasses to package the painting of different states
                     * with possibly different canvas sizes, etc, into one AbstractRegionPainter implementation.</p>
                     * @return a PaintContext associated with this paint operation.
                     */
                    // @ts-ignore
                    abstract getPaintContext(): javax.swing.plaf.nimbus.AbstractRegionPainter.PaintContext
                    /**
                     * <p>Configures the given Graphics2D. Often, rendering hints or compositing rules are
                     * applied to a Graphics2D object prior to painting, which should affect all of the
                     * subsequent painting operations. This method provides a convenient hook for configuring
                     * the Graphics object prior to rendering, regardless of whether the render operation is
                     * performed to an intermediate buffer or directly to the display.</p>
                     * @param g The Graphics2D object to configure. Will not be null.
                     */
                    // @ts-ignore
                    configureGraphics(g: java.awt.Graphics2D): void
                    /**
                     * Actually performs the painting operation. Subclasses must implement this method.
                     * The graphics object passed may represent the actual surface being rendered to,
                     * or it may be an intermediate buffer. It has also been pre-translated. Simply render
                     * the component as if it were located at 0, 0 and had a width of <code>width</code>
                     * and a height of <code>height</code>. For performance reasons, you may want to read
                     * the clip from the Graphics2D object and only render within that space.
                     * @param g The Graphics2D surface to paint to
                     * @param c The JComponent related to the drawing event. For example, if the
                     *           region being rendered is Button, then <code>c</code> will be a
                     *           JButton. If the region being drawn is ScrollBarSlider, then the
                     *           component will be JScrollBar. This value may be null.
                     * @param width The width of the region to paint. Note that in the case of
                     *               painting the foreground, this value may differ from c.getWidth().
                     * @param height The height of the region to paint. Note that in the case of
                     *                painting the foreground, this value may differ from c.getHeight().
                     * @param extendedCacheKeys The result of the call to getExtendedCacheKeys()
                     */
                    // @ts-ignore
                    abstract doPaint(g: java.awt.Graphics2D, c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/, extendedCacheKeys: java.lang.Object[] | any[]): void
                    /**
                     * Decodes and returns a float value representing the actual pixel location for
                     * the given encoded X value.
                     * @param x an encoded x value (0...1, or 1...2, or 2...3)
                     * @return the decoded x value
                     * @throws IllegalArgumentException
                     *       if {#code x < 0} or {@code x > 3}
                     */
                    // @ts-ignore
                    decodeX(x: number /*float*/): number /*float*/
                    /**
                     * Decodes and returns a float value representing the actual pixel location for
                     * the given encoded y value.
                     * @param y an encoded y value (0...1, or 1...2, or 2...3)
                     * @return the decoded y value
                     * @throws IllegalArgumentException
                     *       if {#code y < 0} or {@code y > 3}
                     */
                    // @ts-ignore
                    decodeY(y: number /*float*/): number /*float*/
                    /**
                     * Decodes and returns a float value representing the actual pixel location for
                     * the anchor point given the encoded X value of the control point, and the offset
                     * distance to the anchor from that control point.
                     * @param x an encoded x value of the bezier control point (0...1, or 1...2, or 2...3)
                     * @param dx the offset distance to the anchor from the control point x
                     * @return the decoded x location of the control point
                     * @throws IllegalArgumentException
                     *       if {#code x < 0} or {@code x > 3}
                     */
                    // @ts-ignore
                    decodeAnchorX(x: number /*float*/, dx: number /*float*/): number /*float*/
                    /**
                     * Decodes and returns a float value representing the actual pixel location for
                     * the anchor point given the encoded Y value of the control point, and the offset
                     * distance to the anchor from that control point.
                     * @param y an encoded y value of the bezier control point (0...1, or 1...2, or 2...3)
                     * @param dy the offset distance to the anchor from the control point y
                     * @return the decoded y position of the control point
                     * @throws IllegalArgumentException
                     *       if {#code y < 0} or {@code y > 3}
                     */
                    // @ts-ignore
                    decodeAnchorY(y: number /*float*/, dy: number /*float*/): number /*float*/
                    /**
                     * Decodes and returns a color, which is derived from a base color in UI
                     * defaults.
                     * @param key     A key corresponding to the value in the UI Defaults table
                     *                 of UIManager where the base color is defined
                     * @param hOffset The hue offset used for derivation.
                     * @param sOffset The saturation offset used for derivation.
                     * @param bOffset The brightness offset used for derivation.
                     * @param aOffset The alpha offset used for derivation. Between 0...255
                     * @return The derived color, whose color value will change if the parent
                     *          uiDefault color changes.
                     */
                    // @ts-ignore
                    decodeColor(key: java.lang.String | string, hOffset: number /*float*/, sOffset: number /*float*/, bOffset: number /*float*/, aOffset: number /*int*/): java.awt.Color
                    /**
                     * Decodes and returns a color, which is derived from a offset between two
                     * other colors.
                     * @param color1   The first color
                     * @param color2   The second color
                     * @param midPoint The offset between color 1 and color 2, a value of 0.0 is
                     *                  color 1 and 1.0 is color 2;
                     * @return The derived color
                     */
                    // @ts-ignore
                    decodeColor(color1: java.awt.Color, color2: java.awt.Color, midPoint: number /*float*/): java.awt.Color
                    /**
                     * Given parameters for creating a LinearGradientPaint, this method will
                     * create and return a linear gradient paint. One primary purpose for this
                     * method is to avoid creating a LinearGradientPaint where the start and
                     * end points are equal. In such a case, the end y point is slightly
                     * increased to avoid the overlap.
                     * @param x1
                     * @param y1
                     * @param x2
                     * @param y2
                     * @param midpoints
                     * @param colors
                     * @return a valid LinearGradientPaint. This method never returns null.
                     * @throws NullPointerException
                     *       if {#code midpoints} array is null,
                     *       or {@code colors} array is null,
                     * @throws IllegalArgumentException
                     *       if start and end points are the same points,
                     *       or {#code midpoints.length != colors.length},
                     *       or {@code colors} is less than 2 in size,
                     *       or a {@code midpoints} value is less than 0.0 or greater than 1.0,
                     *       or the {@code midpoints} are not provided in strictly increasing order
                     */
                    // @ts-ignore
                    decodeGradient(x1: number /*float*/, y1: number /*float*/, x2: number /*float*/, y2: number /*float*/, midpoints: number /*float*/[], colors: java.awt.Color[]): java.awt.LinearGradientPaint
                    /**
                     * Given parameters for creating a RadialGradientPaint, this method will
                     * create and return a radial gradient paint. One primary purpose for this
                     * method is to avoid creating a RadialGradientPaint where the radius
                     * is non-positive. In such a case, the radius is just slightly
                     * increased to avoid 0.
                     * @param x
                     * @param y
                     * @param r
                     * @param midpoints
                     * @param colors
                     * @return a valid RadialGradientPaint. This method never returns null.
                     * @throws NullPointerException
                     *       if {#code midpoints} array is null,
                     *       or {@code colors} array is null
                     * @throws IllegalArgumentException
                     *       if {#code r} is non-positive,
                     *       or {@code midpoints.length != colors.length},
                     *       or {@code colors} is less than 2 in size,
                     *       or a {@code midpoints} value is less than 0.0 or greater than 1.0,
                     *       or the {@code midpoints} are not provided in strictly increasing order
                     */
                    // @ts-ignore
                    decodeRadialGradient(x: number /*float*/, y: number /*float*/, r: number /*float*/, midpoints: number /*float*/[], colors: java.awt.Color[]): java.awt.RadialGradientPaint
                    /**
                     * Get a color property from the given JComponent. First checks for a
                     * <code>getXXX()</code> method and if that fails checks for a client
                     * property with key <code>property</code>. If that still fails to return
                     * a Color then <code>defaultColor</code> is returned.
                     * @param c The component to get the color property from
                     * @param property The name of a bean style property or client property
                     * @param defaultColor The color to return if no color was obtained from
                     *         the component.
                     * @return The color that was obtained from the component or defaultColor
                     */
                    // @ts-ignore
                    getComponentColor(c: javax.swing.JComponent, property: java.lang.String | string, defaultColor: java.awt.Color, saturationOffset: number /*float*/, brightnessOffset: number /*float*/, alphaOffset: number /*int*/): java.awt.Color
                }
            }
        }
    }
}
