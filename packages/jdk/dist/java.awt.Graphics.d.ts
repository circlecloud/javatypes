declare namespace java {
    namespace awt {
        /**
         * The <code>Graphics</code> class is the abstract base class for
         * all graphics contexts that allow an application to draw onto
         * components that are realized on various devices, as well as
         * onto off-screen images.
         * <p>
         * A <code>Graphics</code> object encapsulates state information needed
         * for the basic rendering operations that Java supports.  This
         * state information includes the following properties:
         * <ul>
         * <li>The <code>Component</code> object on which to draw.
         * <li>A translation origin for rendering and clipping coordinates.
         * <li>The current clip.
         * <li>The current color.
         * <li>The current font.
         * <li>The current logical pixel operation function (XOR or Paint).
         * <li>The current XOR alternation color
         * (see {@link Graphics#setXORMode}).
         * </ul>
         * <p>
         * Coordinates are infinitely thin and lie between the pixels of the
         * output device.
         * Operations that draw the outline of a figure operate by traversing
         * an infinitely thin path between pixels with a pixel-sized pen that hangs
         * down and to the right of the anchor point on the path.
         * Operations that fill a figure operate by filling the interior
         * of that infinitely thin path.
         * Operations that render horizontal text render the ascending
         * portion of character glyphs entirely above the baseline coordinate.
         * <p>
         * The graphics pen hangs down and to the right from the path it traverses.
         * This has the following implications:
         * <ul>
         * <li>If you draw a figure that covers a given rectangle, that
         * figure occupies one extra row of pixels on the right and bottom edges
         * as compared to filling a figure that is bounded by that same rectangle.
         * <li>If you draw a horizontal line along the same <i>y</i> coordinate as
         * the baseline of a line of text, that line is drawn entirely below
         * the text, except for any descenders.
         * </ul><p>
         * All coordinates that appear as arguments to the methods of this
         * <code>Graphics</code> object are considered relative to the
         * translation origin of this <code>Graphics</code> object prior to
         * the invocation of the method.
         * <p>
         * All rendering operations modify only pixels which lie within the
         * area bounded by the current clip, which is specified by a {@link Shape}
         * in user space and is controlled by the program using the
         * <code>Graphics</code> object.  This <i>user clip</i>
         * is transformed into device space and combined with the
         * <i>device clip</i>, which is defined by the visibility of windows and
         * device extents.  The combination of the user clip and device clip
         * defines the <i>composite clip</i>, which determines the final clipping
         * region.  The user clip cannot be modified by the rendering
         * system to reflect the resulting composite clip. The user clip can only
         * be changed through the <code>setClip</code> or <code>clipRect</code>
         * methods.
         * All drawing or writing is done in the current color,
         * using the current paint mode, and in the current font.
         * @author Sami Shaio
         * @author Arthur van Hoff
         * @see java.awt.Component
         * @see java.awt.Graphics#clipRect(int, int, int, int)
         * @see java.awt.Graphics#setColor(java.awt.Color)
         * @see java.awt.Graphics#setPaintMode()
         * @see java.awt.Graphics#setXORMode(java.awt.Color)
         * @see java.awt.Graphics#setFont(java.awt.Font)
         * @since JDK1.0
         */
        // @ts-ignore
        class Graphics extends java.lang.Object {
            /**
             * Constructs a new <code>Graphics</code> object.
             * This constructor is the default constructor for a graphics
             * context.
             * <p>
             * Since <code>Graphics</code> is an abstract class, applications
             * cannot call this constructor directly. Graphics contexts are
             * obtained from other graphics contexts or are created by calling
             * <code>getGraphics</code> on a component.
             * @see java.awt.Graphics#create()
             * @see java.awt.Component#getGraphics
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new <code>Graphics</code> object that is
             * a copy of this <code>Graphics</code> object.
             * @return a new graphics context that is a copy of
             *                        this graphics context.
             */
            // @ts-ignore
            abstract create(): java.awt.Graphics
            /**
             * Creates a new <code>Graphics</code> object based on this
             * <code>Graphics</code> object, but with a new translation and clip area.
             * The new <code>Graphics</code> object has its origin
             * translated to the specified point (<i>x</i>,&nbsp;<i>y</i>).
             * Its clip area is determined by the intersection of the original
             * clip area with the specified rectangle.  The arguments are all
             * interpreted in the coordinate system of the original
             * <code>Graphics</code> object. The new graphics context is
             * identical to the original, except in two respects:
             * <ul>
             * <li>
             * The new graphics context is translated by (<i>x</i>,&nbsp;<i>y</i>).
             * That is to say, the point (<code>0</code>,&nbsp;<code>0</code>) in the
             * new graphics context is the same as (<i>x</i>,&nbsp;<i>y</i>) in
             * the original graphics context.
             * <li>
             * The new graphics context has an additional clipping rectangle, in
             * addition to whatever (translated) clipping rectangle it inherited
             * from the original graphics context. The origin of the new clipping
             * rectangle is at (<code>0</code>,&nbsp;<code>0</code>), and its size
             * is specified by the <code>width</code> and <code>height</code>
             * arguments.
             * </ul>
             * <p>
             * @param x   the <i>x</i> coordinate.
             * @param y   the <i>y</i> coordinate.
             * @param width   the width of the clipping rectangle.
             * @param height   the height of the clipping rectangle.
             * @return a new graphics context.
             * @see java.awt.Graphics#translate
             * @see java.awt.Graphics#clipRect
             */
            // @ts-ignore
            create(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): java.awt.Graphics
            /**
             * Translates the origin of the graphics context to the point
             * (<i>x</i>,&nbsp;<i>y</i>) in the current coordinate system.
             * Modifies this graphics context so that its new origin corresponds
             * to the point (<i>x</i>,&nbsp;<i>y</i>) in this graphics context's
             * original coordinate system.  All coordinates used in subsequent
             * rendering operations on this graphics context will be relative
             * to this new origin.
             * @param x   the <i>x</i> coordinate.
             * @param y   the <i>y</i> coordinate.
             */
            // @ts-ignore
            abstract translate(x: number /*int*/, y: number /*int*/): void
            /**
             * Gets this graphics context's current color.
             * @return this graphics context's current color.
             * @see java.awt.Color
             * @see java.awt.Graphics#setColor(Color)
             */
            // @ts-ignore
            abstract getColor(): java.awt.Color
            /**
             * Sets this graphics context's current color to the specified
             * color. All subsequent graphics operations using this graphics
             * context use this specified color.
             * @param c   the new rendering color.
             * @see java.awt.Color
             * @see java.awt.Graphics#getColor
             */
            // @ts-ignore
            abstract setColor(c: java.awt.Color): void
            /**
             * Sets the paint mode of this graphics context to overwrite the
             * destination with this graphics context's current color.
             * This sets the logical pixel operation function to the paint or
             * overwrite mode.  All subsequent rendering operations will
             * overwrite the destination with the current color.
             */
            // @ts-ignore
            abstract setPaintMode(): void
            /**
             * Sets the paint mode of this graphics context to alternate between
             * this graphics context's current color and the new specified color.
             * This specifies that logical pixel operations are performed in the
             * XOR mode, which alternates pixels between the current color and
             * a specified XOR color.
             * <p>
             * When drawing operations are performed, pixels which are the
             * current color are changed to the specified color, and vice versa.
             * <p>
             * Pixels that are of colors other than those two colors are changed
             * in an unpredictable but reversible manner; if the same figure is
             * drawn twice, then all pixels are restored to their original values.
             * @param c1 the XOR alternation color
             */
            // @ts-ignore
            abstract setXORMode(c1: java.awt.Color): void
            /**
             * Gets the current font.
             * @return this graphics context's current font.
             * @see java.awt.Font
             * @see java.awt.Graphics#setFont(Font)
             */
            // @ts-ignore
            abstract getFont(): java.awt.Font
            /**
             * Sets this graphics context's font to the specified font.
             * All subsequent text operations using this graphics context
             * use this font. A null argument is silently ignored.
             * @param font   the font.
             * @see java.awt.Graphics#getFont
             * @see java.awt.Graphics#drawString(java.lang.String, int, int)
             * @see java.awt.Graphics#drawBytes(byte[], int, int, int, int)
             * @see java.awt.Graphics#drawChars(char[], int, int, int, int)
             */
            // @ts-ignore
            abstract setFont(font: java.awt.Font): void
            /**
             * Gets the font metrics of the current font.
             * @return the font metrics of this graphics
             *                     context's current font.
             * @see java.awt.Graphics#getFont
             * @see java.awt.FontMetrics
             * @see java.awt.Graphics#getFontMetrics(Font)
             */
            // @ts-ignore
            getFontMetrics(): java.awt.FontMetrics
            /**
             * Gets the font metrics for the specified font.
             * @return the font metrics for the specified font.
             * @param f the specified font
             * @see java.awt.Graphics#getFont
             * @see java.awt.FontMetrics
             * @see java.awt.Graphics#getFontMetrics()
             */
            // @ts-ignore
            abstract getFontMetrics(f: java.awt.Font): java.awt.FontMetrics
            /**
             * Returns the bounding rectangle of the current clipping area.
             * This method refers to the user clip, which is independent of the
             * clipping associated with device bounds and window visibility.
             * If no clip has previously been set, or if the clip has been
             * cleared using <code>setClip(null)</code>, this method returns
             * <code>null</code>.
             * The coordinates in the rectangle are relative to the coordinate
             * system origin of this graphics context.
             * @return the bounding rectangle of the current clipping area,
             *               or <code>null</code> if no clip is set.
             * @see java.awt.Graphics#getClip
             * @see java.awt.Graphics#clipRect
             * @see java.awt.Graphics#setClip(int, int, int, int)
             * @see java.awt.Graphics#setClip(Shape)
             * @since JDK1.1
             */
            // @ts-ignore
            abstract getClipBounds(): java.awt.Rectangle
            /**
             * Intersects the current clip with the specified rectangle.
             * The resulting clipping area is the intersection of the current
             * clipping area and the specified rectangle.  If there is no
             * current clipping area, either because the clip has never been
             * set, or the clip has been cleared using <code>setClip(null)</code>,
             * the specified rectangle becomes the new clip.
             * This method sets the user clip, which is independent of the
             * clipping associated with device bounds and window visibility.
             * This method can only be used to make the current clip smaller.
             * To set the current clip larger, use any of the setClip methods.
             * Rendering operations have no effect outside of the clipping area.
             * @param x the x coordinate of the rectangle to intersect the clip with
             * @param y the y coordinate of the rectangle to intersect the clip with
             * @param width the width of the rectangle to intersect the clip with
             * @param height the height of the rectangle to intersect the clip with
             * @see #setClip(int, int, int, int)
             * @see #setClip(Shape)
             */
            // @ts-ignore
            abstract clipRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Sets the current clip to the rectangle specified by the given
             * coordinates.  This method sets the user clip, which is
             * independent of the clipping associated with device bounds
             * and window visibility.
             * Rendering operations have no effect outside of the clipping area.
             * @param x the <i>x</i> coordinate of the new clip rectangle.
             * @param y the <i>y</i> coordinate of the new clip rectangle.
             * @param width the width of the new clip rectangle.
             * @param height the height of the new clip rectangle.
             * @see java.awt.Graphics#clipRect
             * @see java.awt.Graphics#setClip(Shape)
             * @see java.awt.Graphics#getClip
             * @since JDK1.1
             */
            // @ts-ignore
            abstract setClip(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Gets the current clipping area.
             * This method returns the user clip, which is independent of the
             * clipping associated with device bounds and window visibility.
             * If no clip has previously been set, or if the clip has been
             * cleared using <code>setClip(null)</code>, this method returns
             * <code>null</code>.
             * @return a <code>Shape</code> object representing the
             *               current clipping area, or <code>null</code> if
             *               no clip is set.
             * @see java.awt.Graphics#getClipBounds
             * @see java.awt.Graphics#clipRect
             * @see java.awt.Graphics#setClip(int, int, int, int)
             * @see java.awt.Graphics#setClip(Shape)
             * @since JDK1.1
             */
            // @ts-ignore
            abstract getClip(): java.awt.Shape
            /**
             * Sets the current clipping area to an arbitrary clip shape.
             * Not all objects that implement the <code>Shape</code>
             * interface can be used to set the clip.  The only
             * <code>Shape</code> objects that are guaranteed to be
             * supported are <code>Shape</code> objects that are
             * obtained via the <code>getClip</code> method and via
             * <code>Rectangle</code> objects.  This method sets the
             * user clip, which is independent of the clipping associated
             * with device bounds and window visibility.
             * @param clip the <code>Shape</code> to use to set the clip
             * @see java.awt.Graphics#getClip()
             * @see java.awt.Graphics#clipRect
             * @see java.awt.Graphics#setClip(int, int, int, int)
             * @since JDK1.1
             */
            // @ts-ignore
            abstract setClip(clip: java.awt.Shape): void
            /**
             * Copies an area of the component by a distance specified by
             * <code>dx</code> and <code>dy</code>. From the point specified
             * by <code>x</code> and <code>y</code>, this method
             * copies downwards and to the right.  To copy an area of the
             * component to the left or upwards, specify a negative value for
             * <code>dx</code> or <code>dy</code>.
             * If a portion of the source rectangle lies outside the bounds
             * of the component, or is obscured by another window or component,
             * <code>copyArea</code> will be unable to copy the associated
             * pixels. The area that is omitted can be refreshed by calling
             * the component's <code>paint</code> method.
             * @param x the <i>x</i> coordinate of the source rectangle.
             * @param y the <i>y</i> coordinate of the source rectangle.
             * @param width the width of the source rectangle.
             * @param height the height of the source rectangle.
             * @param dx the horizontal distance to copy the pixels.
             * @param dy the vertical distance to copy the pixels.
             */
            // @ts-ignore
            abstract copyArea(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, dx: number /*int*/, dy: number /*int*/): void
            /**
             * Draws a line, using the current color, between the points
             * <code>(x1,&nbsp;y1)</code> and <code>(x2,&nbsp;y2)</code>
             * in this graphics context's coordinate system.
             * @param x1  the first point's <i>x</i> coordinate.
             * @param y1  the first point's <i>y</i> coordinate.
             * @param x2  the second point's <i>x</i> coordinate.
             * @param y2  the second point's <i>y</i> coordinate.
             */
            // @ts-ignore
            abstract drawLine(x1: number /*int*/, y1: number /*int*/, x2: number /*int*/, y2: number /*int*/): void
            /**
             * Fills the specified rectangle.
             * The left and right edges of the rectangle are at
             * <code>x</code> and <code>x&nbsp;+&nbsp;width&nbsp;-&nbsp;1</code>.
             * The top and bottom edges are at
             * <code>y</code> and <code>y&nbsp;+&nbsp;height&nbsp;-&nbsp;1</code>.
             * The resulting rectangle covers an area
             * <code>width</code> pixels wide by
             * <code>height</code> pixels tall.
             * The rectangle is filled using the graphics context's current color.
             * @param x   the <i>x</i> coordinate
             *                          of the rectangle to be filled.
             * @param y   the <i>y</i> coordinate
             *                          of the rectangle to be filled.
             * @param width   the width of the rectangle to be filled.
             * @param height   the height of the rectangle to be filled.
             * @see java.awt.Graphics#clearRect
             * @see java.awt.Graphics#drawRect
             */
            // @ts-ignore
            abstract fillRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Draws the outline of the specified rectangle.
             * The left and right edges of the rectangle are at
             * <code>x</code> and <code>x&nbsp;+&nbsp;width</code>.
             * The top and bottom edges are at
             * <code>y</code> and <code>y&nbsp;+&nbsp;height</code>.
             * The rectangle is drawn using the graphics context's current color.
             * @param x   the <i>x</i> coordinate
             *                          of the rectangle to be drawn.
             * @param y   the <i>y</i> coordinate
             *                          of the rectangle to be drawn.
             * @param width   the width of the rectangle to be drawn.
             * @param height   the height of the rectangle to be drawn.
             * @see java.awt.Graphics#fillRect
             * @see java.awt.Graphics#clearRect
             */
            // @ts-ignore
            drawRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Clears the specified rectangle by filling it with the background
             * color of the current drawing surface. This operation does not
             * use the current paint mode.
             * <p>
             * Beginning with Java&nbsp;1.1, the background color
             * of offscreen images may be system dependent. Applications should
             * use <code>setColor</code> followed by <code>fillRect</code> to
             * ensure that an offscreen image is cleared to a specific color.
             * @param x the <i>x</i> coordinate of the rectangle to clear.
             * @param y the <i>y</i> coordinate of the rectangle to clear.
             * @param width the width of the rectangle to clear.
             * @param height the height of the rectangle to clear.
             * @see java.awt.Graphics#fillRect(int, int, int, int)
             * @see java.awt.Graphics#drawRect
             * @see java.awt.Graphics#setColor(java.awt.Color)
             * @see java.awt.Graphics#setPaintMode
             * @see java.awt.Graphics#setXORMode(java.awt.Color)
             */
            // @ts-ignore
            abstract clearRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Draws an outlined round-cornered rectangle using this graphics
             * context's current color. The left and right edges of the rectangle
             * are at <code>x</code> and <code>x&nbsp;+&nbsp;width</code>,
             * respectively. The top and bottom edges of the rectangle are at
             * <code>y</code> and <code>y&nbsp;+&nbsp;height</code>.
             * @param x the <i>x</i> coordinate of the rectangle to be drawn.
             * @param y the <i>y</i> coordinate of the rectangle to be drawn.
             * @param width the width of the rectangle to be drawn.
             * @param height the height of the rectangle to be drawn.
             * @param arcWidth the horizontal diameter of the arc
             *                     at the four corners.
             * @param arcHeight the vertical diameter of the arc
             *                     at the four corners.
             * @see java.awt.Graphics#fillRoundRect
             */
            // @ts-ignore
            abstract drawRoundRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, arcWidth: number /*int*/, arcHeight: number /*int*/): void
            /**
             * Fills the specified rounded corner rectangle with the current color.
             * The left and right edges of the rectangle
             * are at <code>x</code> and <code>x&nbsp;+&nbsp;width&nbsp;-&nbsp;1</code>,
             * respectively. The top and bottom edges of the rectangle are at
             * <code>y</code> and <code>y&nbsp;+&nbsp;height&nbsp;-&nbsp;1</code>.
             * @param x the <i>x</i> coordinate of the rectangle to be filled.
             * @param y the <i>y</i> coordinate of the rectangle to be filled.
             * @param width the width of the rectangle to be filled.
             * @param height the height of the rectangle to be filled.
             * @param arcWidth the horizontal diameter
             *                      of the arc at the four corners.
             * @param arcHeight the vertical diameter
             *                      of the arc at the four corners.
             * @see java.awt.Graphics#drawRoundRect
             */
            // @ts-ignore
            abstract fillRoundRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, arcWidth: number /*int*/, arcHeight: number /*int*/): void
            /**
             * Draws a 3-D highlighted outline of the specified rectangle.
             * The edges of the rectangle are highlighted so that they
             * appear to be beveled and lit from the upper left corner.
             * <p>
             * The colors used for the highlighting effect are determined
             * based on the current color.
             * The resulting rectangle covers an area that is
             * <code>width&nbsp;+&nbsp;1</code> pixels wide
             * by <code>height&nbsp;+&nbsp;1</code> pixels tall.
             * @param x the <i>x</i> coordinate of the rectangle to be drawn.
             * @param y the <i>y</i> coordinate of the rectangle to be drawn.
             * @param width the width of the rectangle to be drawn.
             * @param height the height of the rectangle to be drawn.
             * @param raised a boolean that determines whether the rectangle
             *                       appears to be raised above the surface
             *                       or sunk into the surface.
             * @see java.awt.Graphics#fill3DRect
             */
            // @ts-ignore
            draw3DRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, raised: boolean): void
            /**
             * Paints a 3-D highlighted rectangle filled with the current color.
             * The edges of the rectangle will be highlighted so that it appears
             * as if the edges were beveled and lit from the upper left corner.
             * The colors used for the highlighting effect will be determined from
             * the current color.
             * @param x the <i>x</i> coordinate of the rectangle to be filled.
             * @param y the <i>y</i> coordinate of the rectangle to be filled.
             * @param width the width of the rectangle to be filled.
             * @param height the height of the rectangle to be filled.
             * @param raised a boolean value that determines whether the
             *                       rectangle appears to be raised above the surface
             *                       or etched into the surface.
             * @see java.awt.Graphics#draw3DRect
             */
            // @ts-ignore
            fill3DRect(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, raised: boolean): void
            /**
             * Draws the outline of an oval.
             * The result is a circle or ellipse that fits within the
             * rectangle specified by the <code>x</code>, <code>y</code>,
             * <code>width</code>, and <code>height</code> arguments.
             * <p>
             * The oval covers an area that is
             * <code>width&nbsp;+&nbsp;1</code> pixels wide
             * and <code>height&nbsp;+&nbsp;1</code> pixels tall.
             * @param x the <i>x</i> coordinate of the upper left
             *                      corner of the oval to be drawn.
             * @param y the <i>y</i> coordinate of the upper left
             *                      corner of the oval to be drawn.
             * @param width the width of the oval to be drawn.
             * @param height the height of the oval to be drawn.
             * @see java.awt.Graphics#fillOval
             */
            // @ts-ignore
            abstract drawOval(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Fills an oval bounded by the specified rectangle with the
             * current color.
             * @param x the <i>x</i> coordinate of the upper left corner
             *                      of the oval to be filled.
             * @param y the <i>y</i> coordinate of the upper left corner
             *                      of the oval to be filled.
             * @param width the width of the oval to be filled.
             * @param height the height of the oval to be filled.
             * @see java.awt.Graphics#drawOval
             */
            // @ts-ignore
            abstract fillOval(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Draws the outline of a circular or elliptical arc
             * covering the specified rectangle.
             * <p>
             * The resulting arc begins at <code>startAngle</code> and extends
             * for <code>arcAngle</code> degrees, using the current color.
             * Angles are interpreted such that 0&nbsp;degrees
             * is at the 3&nbsp;o'clock position.
             * A positive value indicates a counter-clockwise rotation
             * while a negative value indicates a clockwise rotation.
             * <p>
             * The center of the arc is the center of the rectangle whose origin
             * is (<i>x</i>,&nbsp;<i>y</i>) and whose size is specified by the
             * <code>width</code> and <code>height</code> arguments.
             * <p>
             * The resulting arc covers an area
             * <code>width&nbsp;+&nbsp;1</code> pixels wide
             * by <code>height&nbsp;+&nbsp;1</code> pixels tall.
             * <p>
             * The angles are specified relative to the non-square extents of
             * the bounding rectangle such that 45 degrees always falls on the
             * line from the center of the ellipse to the upper right corner of
             * the bounding rectangle. As a result, if the bounding rectangle is
             * noticeably longer in one axis than the other, the angles to the
             * start and end of the arc segment will be skewed farther along the
             * longer axis of the bounds.
             * @param x the <i>x</i> coordinate of the
             *                     upper-left corner of the arc to be drawn.
             * @param y the <i>y</i>  coordinate of the
             *                     upper-left corner of the arc to be drawn.
             * @param width the width of the arc to be drawn.
             * @param height the height of the arc to be drawn.
             * @param startAngle the beginning angle.
             * @param arcAngle the angular extent of the arc,
             *                     relative to the start angle.
             * @see java.awt.Graphics#fillArc
             */
            // @ts-ignore
            abstract drawArc(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, startAngle: number /*int*/, arcAngle: number /*int*/): void
            /**
             * Fills a circular or elliptical arc covering the specified rectangle.
             * <p>
             * The resulting arc begins at <code>startAngle</code> and extends
             * for <code>arcAngle</code> degrees.
             * Angles are interpreted such that 0&nbsp;degrees
             * is at the 3&nbsp;o'clock position.
             * A positive value indicates a counter-clockwise rotation
             * while a negative value indicates a clockwise rotation.
             * <p>
             * The center of the arc is the center of the rectangle whose origin
             * is (<i>x</i>,&nbsp;<i>y</i>) and whose size is specified by the
             * <code>width</code> and <code>height</code> arguments.
             * <p>
             * The resulting arc covers an area
             * <code>width&nbsp;+&nbsp;1</code> pixels wide
             * by <code>height&nbsp;+&nbsp;1</code> pixels tall.
             * <p>
             * The angles are specified relative to the non-square extents of
             * the bounding rectangle such that 45 degrees always falls on the
             * line from the center of the ellipse to the upper right corner of
             * the bounding rectangle. As a result, if the bounding rectangle is
             * noticeably longer in one axis than the other, the angles to the
             * start and end of the arc segment will be skewed farther along the
             * longer axis of the bounds.
             * @param x the <i>x</i> coordinate of the
             *                     upper-left corner of the arc to be filled.
             * @param y the <i>y</i>  coordinate of the
             *                     upper-left corner of the arc to be filled.
             * @param width the width of the arc to be filled.
             * @param height the height of the arc to be filled.
             * @param startAngle the beginning angle.
             * @param arcAngle the angular extent of the arc,
             *                     relative to the start angle.
             * @see java.awt.Graphics#drawArc
             */
            // @ts-ignore
            abstract fillArc(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, startAngle: number /*int*/, arcAngle: number /*int*/): void
            /**
             * Draws a sequence of connected lines defined by
             * arrays of <i>x</i> and <i>y</i> coordinates.
             * Each pair of (<i>x</i>,&nbsp;<i>y</i>) coordinates defines a point.
             * The figure is not closed if the first point
             * differs from the last point.
             * @param xPoints an array of <i>x</i> points
             * @param yPoints an array of <i>y</i> points
             * @param nPoints the total number of points
             * @see java.awt.Graphics#drawPolygon(int[], int[], int)
             * @since JDK1.1
             */
            // @ts-ignore
            abstract drawPolyline(xPoints: number /*int*/[], yPoints: number /*int*/[], nPoints: number /*int*/): void
            /**
             * Draws a closed polygon defined by
             * arrays of <i>x</i> and <i>y</i> coordinates.
             * Each pair of (<i>x</i>,&nbsp;<i>y</i>) coordinates defines a point.
             * <p>
             * This method draws the polygon defined by <code>nPoint</code> line
             * segments, where the first <code>nPoint&nbsp;-&nbsp;1</code>
             * line segments are line segments from
             * <code>(xPoints[i&nbsp;-&nbsp;1],&nbsp;yPoints[i&nbsp;-&nbsp;1])</code>
             * to <code>(xPoints[i],&nbsp;yPoints[i])</code>, for
             * 1&nbsp;&le;&nbsp;<i>i</i>&nbsp;&le;&nbsp;<code>nPoints</code>.
             * The figure is automatically closed by drawing a line connecting
             * the final point to the first point, if those points are different.
             * @param xPoints   a an array of <code>x</code> coordinates.
             * @param yPoints   a an array of <code>y</code> coordinates.
             * @param nPoints   a the total number of points.
             * @see java.awt.Graphics#fillPolygon
             * @see java.awt.Graphics#drawPolyline
             */
            // @ts-ignore
            abstract drawPolygon(xPoints: number /*int*/[], yPoints: number /*int*/[], nPoints: number /*int*/): void
            /**
             * Draws the outline of a polygon defined by the specified
             * <code>Polygon</code> object.
             * @param p the polygon to draw.
             * @see java.awt.Graphics#fillPolygon
             * @see java.awt.Graphics#drawPolyline
             */
            // @ts-ignore
            drawPolygon(p: java.awt.Polygon): void
            /**
             * Fills a closed polygon defined by
             * arrays of <i>x</i> and <i>y</i> coordinates.
             * <p>
             * This method draws the polygon defined by <code>nPoint</code> line
             * segments, where the first <code>nPoint&nbsp;-&nbsp;1</code>
             * line segments are line segments from
             * <code>(xPoints[i&nbsp;-&nbsp;1],&nbsp;yPoints[i&nbsp;-&nbsp;1])</code>
             * to <code>(xPoints[i],&nbsp;yPoints[i])</code>, for
             * 1&nbsp;&le;&nbsp;<i>i</i>&nbsp;&le;&nbsp;<code>nPoints</code>.
             * The figure is automatically closed by drawing a line connecting
             * the final point to the first point, if those points are different.
             * <p>
             * The area inside the polygon is defined using an
             * even-odd fill rule, also known as the alternating rule.
             * @param xPoints   a an array of <code>x</code> coordinates.
             * @param yPoints   a an array of <code>y</code> coordinates.
             * @param nPoints   a the total number of points.
             * @see java.awt.Graphics#drawPolygon(int[], int[], int)
             */
            // @ts-ignore
            abstract fillPolygon(xPoints: number /*int*/[], yPoints: number /*int*/[], nPoints: number /*int*/): void
            /**
             * Fills the polygon defined by the specified Polygon object with
             * the graphics context's current color.
             * <p>
             * The area inside the polygon is defined using an
             * even-odd fill rule, also known as the alternating rule.
             * @param p the polygon to fill.
             * @see java.awt.Graphics#drawPolygon(int[], int[], int)
             */
            // @ts-ignore
            fillPolygon(p: java.awt.Polygon): void
            /**
             * Draws the text given by the specified string, using this
             * graphics context's current font and color. The baseline of the
             * leftmost character is at position (<i>x</i>,&nbsp;<i>y</i>) in this
             * graphics context's coordinate system.
             * @param str      the string to be drawn.
             * @param x        the <i>x</i> coordinate.
             * @param y        the <i>y</i> coordinate.
             * @throws NullPointerException if <code>str</code> is <code>null</code>.
             * @see java.awt.Graphics#drawBytes
             * @see java.awt.Graphics#drawChars
             */
            // @ts-ignore
            abstract drawString(str: string, x: number /*int*/, y: number /*int*/): void
            /**
             * Renders the text of the specified iterator applying its attributes
             * in accordance with the specification of the
             * {@link java.awt.font.TextAttribute TextAttribute} class.
             * <p>
             * The baseline of the leftmost character is at position
             * (<i>x</i>,&nbsp;<i>y</i>) in this graphics context's coordinate system.
             * @param iterator the iterator whose text is to be drawn
             * @param x        the <i>x</i> coordinate.
             * @param y        the <i>y</i> coordinate.
             * @throws NullPointerException if <code>iterator</code> is
             *  <code>null</code>.
             * @see java.awt.Graphics#drawBytes
             * @see java.awt.Graphics#drawChars
             */
            // @ts-ignore
            abstract drawString(iterator: java.text.AttributedCharacterIterator, x: number /*int*/, y: number /*int*/): void
            /**
             * Draws the text given by the specified character array, using this
             * graphics context's current font and color. The baseline of the
             * first character is at position (<i>x</i>,&nbsp;<i>y</i>) in this
             * graphics context's coordinate system.
             * @param data the array of characters to be drawn
             * @param offset the start offset in the data
             * @param length the number of characters to be drawn
             * @param x the <i>x</i> coordinate of the baseline of the text
             * @param y the <i>y</i> coordinate of the baseline of the text
             * @throws NullPointerException if <code>data</code> is <code>null</code>.
             * @throws IndexOutOfBoundsException if <code>offset</code> or
             *  <code>length</code>is less than zero, or
             *  <code>offset+length</code> is greater than the length of the
             *  <code>data</code> array.
             * @see java.awt.Graphics#drawBytes
             * @see java.awt.Graphics#drawString
             */
            // @ts-ignore
            drawChars(data: string[], offset: number /*int*/, length: number /*int*/, x: number /*int*/, y: number /*int*/): void
            /**
             * Draws the text given by the specified byte array, using this
             * graphics context's current font and color. The baseline of the
             * first character is at position (<i>x</i>,&nbsp;<i>y</i>) in this
             * graphics context's coordinate system.
             * <p>
             * Use of this method is not recommended as each byte is interpreted
             * as a Unicode code point in the range 0 to 255, and so can only be
             * used to draw Latin characters in that range.
             * @param data the data to be drawn
             * @param offset the start offset in the data
             * @param length the number of bytes that are drawn
             * @param x the <i>x</i> coordinate of the baseline of the text
             * @param y the <i>y</i> coordinate of the baseline of the text
             * @throws NullPointerException if <code>data</code> is <code>null</code>.
             * @throws IndexOutOfBoundsException if <code>offset</code> or
             *  <code>length</code>is less than zero, or <code>offset+length</code>
             *  is greater than the length of the <code>data</code> array.
             * @see java.awt.Graphics#drawChars
             * @see java.awt.Graphics#drawString
             */
            // @ts-ignore
            drawBytes(data: number /*byte*/[], offset: number /*int*/, length: number /*int*/, x: number /*int*/, y: number /*int*/): void
            /**
             * Draws as much of the specified image as is currently available.
             * The image is drawn with its top-left corner at
             * (<i>x</i>,&nbsp;<i>y</i>) in this graphics context's coordinate
             * space. Transparent pixels in the image do not affect whatever
             * pixels are already there.
             * <p>
             * This method returns immediately in all cases, even if the
             * complete image has not yet been loaded, and it has not been dithered
             * and converted for the current output device.
             * <p>
             * If the image has completely loaded and its pixels are
             * no longer being changed, then
             * <code>drawImage</code> returns <code>true</code>.
             * Otherwise, <code>drawImage</code> returns <code>false</code>
             * and as more of
             * the image becomes available
             * or it is time to draw another frame of animation,
             * the process that loads the image notifies
             * the specified image observer.
             * @param img the specified image to be drawn. This method does
             *                nothing if <code>img</code> is null.
             * @param x   the <i>x</i> coordinate.
             * @param y   the <i>y</i> coordinate.
             * @param observer    object to be notified as more of
             *                           the image is converted.
             * @return <code>false</code> if the image pixels are still changing;
             *            <code>true</code> otherwise.
             * @see java.awt.Image
             * @see java.awt.image.ImageObserver
             * @see java.awt.image.ImageObserver#imageUpdate(java.awt.Image, int, int, int, int, int)
             */
            // @ts-ignore
            abstract drawImage(img: java.awt.Image, x: number /*int*/, y: number /*int*/, observer: java.awt.image.ImageObserver): boolean
            /**
             * Draws as much of the specified image as has already been scaled
             * to fit inside the specified rectangle.
             * <p>
             * The image is drawn inside the specified rectangle of this
             * graphics context's coordinate space, and is scaled if
             * necessary. Transparent pixels do not affect whatever pixels
             * are already there.
             * <p>
             * This method returns immediately in all cases, even if the
             * entire image has not yet been scaled, dithered, and converted
             * for the current output device.
             * If the current output representation is not yet complete, then
             * <code>drawImage</code> returns <code>false</code>. As more of
             * the image becomes available, the process that loads the image notifies
             * the image observer by calling its <code>imageUpdate</code> method.
             * <p>
             * A scaled version of an image will not necessarily be
             * available immediately just because an unscaled version of the
             * image has been constructed for this output device.  Each size of
             * the image may be cached separately and generated from the original
             * data in a separate image production sequence.
             * @param img    the specified image to be drawn. This method does
             *                   nothing if <code>img</code> is null.
             * @param x      the <i>x</i> coordinate.
             * @param y      the <i>y</i> coordinate.
             * @param width  the width of the rectangle.
             * @param height the height of the rectangle.
             * @param observer    object to be notified as more of
             *                           the image is converted.
             * @return <code>false</code> if the image pixels are still changing;
             *            <code>true</code> otherwise.
             * @see java.awt.Image
             * @see java.awt.image.ImageObserver
             * @see java.awt.image.ImageObserver#imageUpdate(java.awt.Image, int, int, int, int, int)
             */
            // @ts-ignore
            abstract drawImage(img: java.awt.Image, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, observer: java.awt.image.ImageObserver): boolean
            /**
             * Draws as much of the specified image as is currently available.
             * The image is drawn with its top-left corner at
             * (<i>x</i>,&nbsp;<i>y</i>) in this graphics context's coordinate
             * space.  Transparent pixels are drawn in the specified
             * background color.
             * <p>
             * This operation is equivalent to filling a rectangle of the
             * width and height of the specified image with the given color and then
             * drawing the image on top of it, but possibly more efficient.
             * <p>
             * This method returns immediately in all cases, even if the
             * complete image has not yet been loaded, and it has not been dithered
             * and converted for the current output device.
             * <p>
             * If the image has completely loaded and its pixels are
             * no longer being changed, then
             * <code>drawImage</code> returns <code>true</code>.
             * Otherwise, <code>drawImage</code> returns <code>false</code>
             * and as more of
             * the image becomes available
             * or it is time to draw another frame of animation,
             * the process that loads the image notifies
             * the specified image observer.
             * @param img the specified image to be drawn. This method does
             *                nothing if <code>img</code> is null.
             * @param x      the <i>x</i> coordinate.
             * @param y      the <i>y</i> coordinate.
             * @param bgcolor the background color to paint under the
             *                          non-opaque portions of the image.
             * @param observer    object to be notified as more of
             *                           the image is converted.
             * @return <code>false</code> if the image pixels are still changing;
             *            <code>true</code> otherwise.
             * @see java.awt.Image
             * @see java.awt.image.ImageObserver
             * @see java.awt.image.ImageObserver#imageUpdate(java.awt.Image, int, int, int, int, int)
             */
            // @ts-ignore
            abstract drawImage(img: java.awt.Image, x: number /*int*/, y: number /*int*/, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean
            /**
             * Draws as much of the specified image as has already been scaled
             * to fit inside the specified rectangle.
             * <p>
             * The image is drawn inside the specified rectangle of this
             * graphics context's coordinate space, and is scaled if
             * necessary. Transparent pixels are drawn in the specified
             * background color.
             * This operation is equivalent to filling a rectangle of the
             * width and height of the specified image with the given color and then
             * drawing the image on top of it, but possibly more efficient.
             * <p>
             * This method returns immediately in all cases, even if the
             * entire image has not yet been scaled, dithered, and converted
             * for the current output device.
             * If the current output representation is not yet complete then
             * <code>drawImage</code> returns <code>false</code>. As more of
             * the image becomes available, the process that loads the image notifies
             * the specified image observer.
             * <p>
             * A scaled version of an image will not necessarily be
             * available immediately just because an unscaled version of the
             * image has been constructed for this output device.  Each size of
             * the image may be cached separately and generated from the original
             * data in a separate image production sequence.
             * @param img       the specified image to be drawn. This method does
             *                      nothing if <code>img</code> is null.
             * @param x         the <i>x</i> coordinate.
             * @param y         the <i>y</i> coordinate.
             * @param width     the width of the rectangle.
             * @param height    the height of the rectangle.
             * @param bgcolor   the background color to paint under the
             *                          non-opaque portions of the image.
             * @param observer    object to be notified as more of
             *                           the image is converted.
             * @return <code>false</code> if the image pixels are still changing;
             *            <code>true</code> otherwise.
             * @see java.awt.Image
             * @see java.awt.image.ImageObserver
             * @see java.awt.image.ImageObserver#imageUpdate(java.awt.Image, int, int, int, int, int)
             */
            // @ts-ignore
            abstract drawImage(img: java.awt.Image, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean
            /**
             * Draws as much of the specified area of the specified image as is
             * currently available, scaling it on the fly to fit inside the
             * specified area of the destination drawable surface. Transparent pixels
             * do not affect whatever pixels are already there.
             * <p>
             * This method returns immediately in all cases, even if the
             * image area to be drawn has not yet been scaled, dithered, and converted
             * for the current output device.
             * If the current output representation is not yet complete then
             * <code>drawImage</code> returns <code>false</code>. As more of
             * the image becomes available, the process that loads the image notifies
             * the specified image observer.
             * <p>
             * This method always uses the unscaled version of the image
             * to render the scaled rectangle and performs the required
             * scaling on the fly. It does not use a cached, scaled version
             * of the image for this operation. Scaling of the image from source
             * to destination is performed such that the first coordinate
             * of the source rectangle is mapped to the first coordinate of
             * the destination rectangle, and the second source coordinate is
             * mapped to the second destination coordinate. The subimage is
             * scaled and flipped as needed to preserve those mappings.
             * @param img the specified image to be drawn. This method does
             *                   nothing if <code>img</code> is null.
             * @param dx1 the <i>x</i> coordinate of the first corner of the
             *                     destination rectangle.
             * @param dy1 the <i>y</i> coordinate of the first corner of the
             *                     destination rectangle.
             * @param dx2 the <i>x</i> coordinate of the second corner of the
             *                     destination rectangle.
             * @param dy2 the <i>y</i> coordinate of the second corner of the
             *                     destination rectangle.
             * @param sx1 the <i>x</i> coordinate of the first corner of the
             *                     source rectangle.
             * @param sy1 the <i>y</i> coordinate of the first corner of the
             *                     source rectangle.
             * @param sx2 the <i>x</i> coordinate of the second corner of the
             *                     source rectangle.
             * @param sy2 the <i>y</i> coordinate of the second corner of the
             *                     source rectangle.
             * @param observer object to be notified as more of the image is
             *                     scaled and converted.
             * @return <code>false</code> if the image pixels are still changing;
             *            <code>true</code> otherwise.
             * @see java.awt.Image
             * @see java.awt.image.ImageObserver
             * @see java.awt.image.ImageObserver#imageUpdate(java.awt.Image, int, int, int, int, int)
             * @since JDK1.1
             */
            // @ts-ignore
            abstract drawImage(img: java.awt.Image, dx1: number /*int*/, dy1: number /*int*/, dx2: number /*int*/, dy2: number /*int*/, sx1: number /*int*/, sy1: number /*int*/, sx2: number /*int*/, sy2: number /*int*/, observer: java.awt.image.ImageObserver): boolean
            /**
             * Draws as much of the specified area of the specified image as is
             * currently available, scaling it on the fly to fit inside the
             * specified area of the destination drawable surface.
             * <p>
             * Transparent pixels are drawn in the specified background color.
             * This operation is equivalent to filling a rectangle of the
             * width and height of the specified image with the given color and then
             * drawing the image on top of it, but possibly more efficient.
             * <p>
             * This method returns immediately in all cases, even if the
             * image area to be drawn has not yet been scaled, dithered, and converted
             * for the current output device.
             * If the current output representation is not yet complete then
             * <code>drawImage</code> returns <code>false</code>. As more of
             * the image becomes available, the process that loads the image notifies
             * the specified image observer.
             * <p>
             * This method always uses the unscaled version of the image
             * to render the scaled rectangle and performs the required
             * scaling on the fly. It does not use a cached, scaled version
             * of the image for this operation. Scaling of the image from source
             * to destination is performed such that the first coordinate
             * of the source rectangle is mapped to the first coordinate of
             * the destination rectangle, and the second source coordinate is
             * mapped to the second destination coordinate. The subimage is
             * scaled and flipped as needed to preserve those mappings.
             * @param img the specified image to be drawn. This method does
             *                   nothing if <code>img</code> is null.
             * @param dx1 the <i>x</i> coordinate of the first corner of the
             *                     destination rectangle.
             * @param dy1 the <i>y</i> coordinate of the first corner of the
             *                     destination rectangle.
             * @param dx2 the <i>x</i> coordinate of the second corner of the
             *                     destination rectangle.
             * @param dy2 the <i>y</i> coordinate of the second corner of the
             *                     destination rectangle.
             * @param sx1 the <i>x</i> coordinate of the first corner of the
             *                     source rectangle.
             * @param sy1 the <i>y</i> coordinate of the first corner of the
             *                     source rectangle.
             * @param sx2 the <i>x</i> coordinate of the second corner of the
             *                     source rectangle.
             * @param sy2 the <i>y</i> coordinate of the second corner of the
             *                     source rectangle.
             * @param bgcolor the background color to paint under the
             *                     non-opaque portions of the image.
             * @param observer object to be notified as more of the image is
             *                     scaled and converted.
             * @return <code>false</code> if the image pixels are still changing;
             *            <code>true</code> otherwise.
             * @see java.awt.Image
             * @see java.awt.image.ImageObserver
             * @see java.awt.image.ImageObserver#imageUpdate(java.awt.Image, int, int, int, int, int)
             * @since JDK1.1
             */
            // @ts-ignore
            abstract drawImage(img: java.awt.Image, dx1: number /*int*/, dy1: number /*int*/, dx2: number /*int*/, dy2: number /*int*/, sx1: number /*int*/, sy1: number /*int*/, sx2: number /*int*/, sy2: number /*int*/, bgcolor: java.awt.Color, observer: java.awt.image.ImageObserver): boolean
            /**
             * Disposes of this graphics context and releases
             * any system resources that it is using.
             * A <code>Graphics</code> object cannot be used after
             * <code>dispose</code>has been called.
             * <p>
             * When a Java program runs, a large number of <code>Graphics</code>
             * objects can be created within a short time frame.
             * Although the finalization process of the garbage collector
             * also disposes of the same system resources, it is preferable
             * to manually free the associated resources by calling this
             * method rather than to rely on a finalization process which
             * may not run to completion for a long period of time.
             * <p>
             * Graphics objects which are provided as arguments to the
             * <code>paint</code> and <code>update</code> methods
             * of components are automatically released by the system when
             * those methods return. For efficiency, programmers should
             * call <code>dispose</code> when finished using
             * a <code>Graphics</code> object only if it was created
             * directly from a component or another <code>Graphics</code> object.
             * @see java.awt.Graphics#finalize
             * @see java.awt.Component#paint
             * @see java.awt.Component#update
             * @see java.awt.Component#getGraphics
             * @see java.awt.Graphics#create
             */
            // @ts-ignore
            abstract dispose(): void
            /**
             * Disposes of this graphics context once it is no longer referenced.
             * @see #dispose
             */
            // @ts-ignore
            finalize(): void
            /**
             * Returns a <code>String</code> object representing this
             * <code>Graphics</code> object's value.
             * @return a string representation of this graphics context.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Returns the bounding rectangle of the current clipping area.
             * @return the bounding rectangle of the current clipping area
             *               or <code>null</code> if no clip is set.
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>getClipBounds()</code>.
             */
            // @ts-ignore
            getClipRect(): java.awt.Rectangle
            /**
             * Returns true if the specified rectangular area might intersect
             * the current clipping area.
             * The coordinates of the specified rectangular area are in the
             * user coordinate space and are relative to the coordinate
             * system origin of this graphics context.
             * This method may use an algorithm that calculates a result quickly
             * but which sometimes might return true even if the specified
             * rectangular area does not intersect the clipping area.
             * The specific algorithm employed may thus trade off accuracy for
             * speed, but it will never return false unless it can guarantee
             * that the specified rectangular area does not intersect the
             * current clipping area.
             * The clipping area used by this method can represent the
             * intersection of the user clip as specified through the clip
             * methods of this graphics context as well as the clipping
             * associated with the device or image bounds and window visibility.
             * @param x the x coordinate of the rectangle to test against the clip
             * @param y the y coordinate of the rectangle to test against the clip
             * @param width the width of the rectangle to test against the clip
             * @param height the height of the rectangle to test against the clip
             * @return <code>true</code> if the specified rectangle intersects
             *          the bounds of the current clip; <code>false</code>
             *          otherwise.
             */
            // @ts-ignore
            hitClip(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): boolean
            /**
             * Returns the bounding rectangle of the current clipping area.
             * The coordinates in the rectangle are relative to the coordinate
             * system origin of this graphics context.  This method differs
             * from {@link #getClipBounds() getClipBounds} in that an existing
             * rectangle is used instead of allocating a new one.
             * This method refers to the user clip, which is independent of the
             * clipping associated with device bounds and window visibility.
             * If no clip has previously been set, or if the clip has been
             * cleared using <code>setClip(null)</code>, this method returns the
             * specified <code>Rectangle</code>.
             * @param r    the rectangle where the current clipping area is
             *               copied to.  Any current values in this rectangle are
             *               overwritten.
             * @return the bounding rectangle of the current clipping area.
             */
            // @ts-ignore
            getClipBounds(r: java.awt.Rectangle): java.awt.Rectangle
        }
    }
}