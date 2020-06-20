declare namespace java {
    namespace awt {
        namespace font {
            /**
             * The <code>FontRenderContext</code> class is a container for the
             * information needed to correctly measure text.  The measurement of text
             * can vary because of rules that map outlines to pixels, and rendering
             * hints provided by an application.
             * <p>
             * One such piece of information is a transform that scales
             * typographical points to pixels. (A point is defined to be exactly 1/72
             * of an inch, which is slightly different than
             * the traditional mechanical measurement of a point.)  A character that
             * is rendered at 12pt on a 600dpi device might have a different size
             * than the same character rendered at 12pt on a 72dpi device because of
             * such factors as rounding to pixel boundaries and hints that the font
             * designer may have specified.
             * <p>
             * Anti-aliasing and Fractional-metrics specified by an application can also
             * affect the size of a character because of rounding to pixel
             * boundaries.
             * <p>
             * Typically, instances of <code>FontRenderContext</code> are
             * obtained from a {@link java.awt.Graphics2D Graphics2D} object.  A
             * <code>FontRenderContext</code> which is directly constructed will
             * most likely not represent any actual graphics device, and may lead
             * to unexpected or incorrect results.
             * @see java.awt.RenderingHints#KEY_TEXT_ANTIALIASING
             * @see java.awt.RenderingHints#KEY_FRACTIONALMETRICS
             * @see java.awt.Graphics2D#getFontRenderContext()
             * @see java.awt.font.LineMetrics
             */
            // @ts-ignore
            class FontRenderContext extends java.lang.Object {
                /**
                 * Constructs a new <code>FontRenderContext</code>
                 * object.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a <code>FontRenderContext</code> object from an
                 * optional {@link AffineTransform} and two <code>boolean</code>
                 * values that determine if the newly constructed object has
                 * anti-aliasing or fractional metrics.
                 * In each case the boolean values <CODE>true</CODE> and <CODE>false</CODE>
                 * correspond to the rendering hint values <CODE>ON</CODE> and
                 * <CODE>OFF</CODE> respectively.
                 * <p>
                 * To specify other hint values, use the constructor which
                 * specifies the rendering hint values as parameters :
                 * {@link #FontRenderContext(AffineTransform, Object, Object)}.
                 * @param tx the transform which is used to scale typographical points
                 *  to pixels in this <code>FontRenderContext</code>.  If null, an
                 *  identity transform is used.
                 * @param isAntiAliased determines if the newly constructed object
                 *  has anti-aliasing.
                 * @param usesFractionalMetrics determines if the newly constructed
                 *  object has fractional metrics.
                 */
                // @ts-ignore
                constructor(tx: java.awt.geom.AffineTransform, isAntiAliased: boolean, usesFractionalMetrics: boolean)
                /**
                 * Constructs a <code>FontRenderContext</code> object from an
                 * optional {@link AffineTransform} and two <code>Object</code>
                 * values that determine if the newly constructed object has
                 * anti-aliasing or fractional metrics.
                 * @param tx the transform which is used to scale typographical points
                 *  to pixels in this <code>FontRenderContext</code>.  If null, an
                 *  identity transform is used.
                 * @param aaHint - one of the text antialiasing rendering hint values
                 *  defined in {#link java.awt.RenderingHints java.awt.RenderingHints}.
                 *  Any other value will throw <code>IllegalArgumentException</code>.
                 *  {@link java.awt.RenderingHints#VALUE_TEXT_ANTIALIAS_DEFAULT VALUE_TEXT_ANTIALIAS_DEFAULT}
                 *  may be specified, in which case the mode used is implementation
                 *  dependent.
                 * @param fmHint - one of the text fractional rendering hint values defined
                 *  in {#link java.awt.RenderingHints java.awt.RenderingHints}.
                 *  {@link java.awt.RenderingHints#VALUE_FRACTIONALMETRICS_DEFAULT VALUE_FRACTIONALMETRICS_DEFAULT}
                 *  may be specified, in which case the mode used is implementation
                 *  dependent.
                 *  Any other value will throw <code>IllegalArgumentException</code>
                 * @throws IllegalArgumentException if the hints are not one of the
                 *  legal values.
                 * @since 1.6
                 */
                // @ts-ignore
                constructor(tx: java.awt.geom.AffineTransform, aaHint: any, fmHint: any)
                /**
                 * Indicates whether or not this <code>FontRenderContext</code> object
                 * measures text in a transformed render context.
                 * @return <code>true</code> if this <code>FontRenderContext</code>
                 *           object has a non-identity AffineTransform attribute.
                 *           <code>false</code> otherwise.
                 * @see java.awt.font.FontRenderContext#getTransform
                 * @since 1.6
                 */
                // @ts-ignore
                isTransformed(): boolean
                /**
                 * Returns the integer type of the affine transform for this
                 * <code>FontRenderContext</code> as specified by
                 * {@link java.awt.geom.AffineTransform#getType()}
                 * @return the type of the transform.
                 * @see AffineTransform
                 * @since 1.6
                 */
                // @ts-ignore
                getTransformType(): int
                /**
                 * Gets the transform that is used to scale typographical points
                 * to pixels in this <code>FontRenderContext</code>.
                 * @return the <code>AffineTransform</code> of this
                 *     <code>FontRenderContext</code>.
                 * @see AffineTransform
                 */
                // @ts-ignore
                getTransform(): java.awt.geom.AffineTransform
                /**
                 * Returns a boolean which indicates whether or not some form of
                 * antialiasing is specified by this <code>FontRenderContext</code>.
                 * Call {@link #getAntiAliasingHint() getAntiAliasingHint()}
                 * for the specific rendering hint value.
                 * @return <code>true</code>, if text is anti-aliased in this
                 *    <code>FontRenderContext</code>; <code>false</code> otherwise.
                 * @see java.awt.RenderingHints#KEY_TEXT_ANTIALIASING
                 * @see #FontRenderContext(AffineTransform,boolean,boolean)
                 * @see #FontRenderContext(AffineTransform,Object,Object)
                 */
                // @ts-ignore
                isAntiAliased(): boolean
                /**
                 * Returns a boolean which whether text fractional metrics mode
                 * is used in this <code>FontRenderContext</code>.
                 * Call {@link #getFractionalMetricsHint() getFractionalMetricsHint()}
                 * to obtain the corresponding rendering hint value.
                 * @return <code>true</code>, if layout should be performed with
                 *    fractional metrics; <code>false</code> otherwise.
                 *                in this <code>FontRenderContext</code>.
                 * @see java.awt.RenderingHints#KEY_FRACTIONALMETRICS
                 * @see #FontRenderContext(AffineTransform,boolean,boolean)
                 * @see #FontRenderContext(AffineTransform,Object,Object)
                 */
                // @ts-ignore
                usesFractionalMetrics(): boolean
                /**
                 * Return the text anti-aliasing rendering mode hint used in this
                 * <code>FontRenderContext</code>.
                 * This will be one of the text antialiasing rendering hint values
                 * defined in {@link java.awt.RenderingHints java.awt.RenderingHints}.
                 * @return text anti-aliasing rendering mode hint used in this
                 *  <code>FontRenderContext</code>.
                 * @since 1.6
                 */
                // @ts-ignore
                getAntiAliasingHint(): java.lang.Object
                /**
                 * Return the text fractional metrics rendering mode hint used in this
                 * <code>FontRenderContext</code>.
                 * This will be one of the text fractional metrics rendering hint values
                 * defined in {@link java.awt.RenderingHints java.awt.RenderingHints}.
                 * @return the text fractional metrics rendering mode hint used in this
                 *  <code>FontRenderContext</code>.
                 * @since 1.6
                 */
                // @ts-ignore
                getFractionalMetricsHint(): java.lang.Object
                /**
                 * Return true if obj is an instance of FontRenderContext and has the same
                 * transform, antialiasing, and fractional metrics values as this.
                 * @param obj the object to test for equality
                 * @return <code>true</code> if the specified object is equal to
                 *          this <code>FontRenderContext</code>; <code>false</code>
                 *          otherwise.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Return true if rhs has the same transform, antialiasing,
                 * and fractional metrics values as this.
                 * @param rhs the <code>FontRenderContext</code> to test for equality
                 * @return <code>true</code> if <code>rhs</code> is equal to
                 *          this <code>FontRenderContext</code>; <code>false</code>
                 *          otherwise.
                 * @since 1.4
                 */
                // @ts-ignore
                equals(rhs: java.awt.font.FontRenderContext): boolean
                /**
                 * Return a hashcode for this FontRenderContext.
                 */
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}
