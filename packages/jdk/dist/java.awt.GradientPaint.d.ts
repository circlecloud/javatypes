declare namespace java {
    namespace awt {
        /**
         * The <code>GradientPaint</code> class provides a way to fill
         * a {@link Shape} with a linear color gradient pattern.
         * If {@link Point} P1 with {@link Color} C1 and <code>Point</code> P2 with
         * <code>Color</code> C2 are specified in user space, the
         * <code>Color</code> on the P1, P2 connecting line is proportionally
         * changed from C1 to C2.  Any point P not on the extended P1, P2
         * connecting line has the color of the point P' that is the perpendicular
         * projection of P on the extended P1, P2 connecting line.
         * Points on the extended line outside of the P1, P2 segment can be colored
         * in one of two ways.
         * <ul>
         * <li>
         * If the gradient is cyclic then the points on the extended P1, P2
         * connecting line cycle back and forth between the colors C1 and C2.
         * <li>
         * If the gradient is acyclic then points on the P1 side of the segment
         * have the constant <code>Color</code> C1 while points on the P2 side
         * have the constant <code>Color</code> C2.
         * </ul>
         * @see Paint
         * @see Graphics2D#setPaint
         * @version 10 Feb 1997
         */
        // @ts-ignore
        class GradientPaint extends java.lang.Object implements java.awt.Paint {
            /**
             * Constructs a simple acyclic <code>GradientPaint</code> object.
             * @param x1 x coordinate of the first specified
             *  <code>Point</code> in user space
             * @param y1 y coordinate of the first specified
             *  <code>Point</code> in user space
             * @param color1 <code>Color</code> at the first specified
             *  <code>Point</code>
             * @param x2 x coordinate of the second specified
             *  <code>Point</code> in user space
             * @param y2 y coordinate of the second specified
             *  <code>Point</code> in user space
             * @param color2 <code>Color</code> at the second specified
             *  <code>Point</code>
             * @throws NullPointerException if either one of colors is null
             */
            // @ts-ignore
            constructor(x1: number /*float*/, y1: number /*float*/, color1: java.awt.Color, x2: number /*float*/, y2: number /*float*/, color2: java.awt.Color)
            /**
             * Constructs a simple acyclic <code>GradientPaint</code> object.
             * @param pt1 the first specified <code>Point</code> in user space
             * @param color1 <code>Color</code> at the first specified
             *  <code>Point</code>
             * @param pt2 the second specified <code>Point</code> in user space
             * @param color2 <code>Color</code> at the second specified
             *  <code>Point</code>
             * @throws NullPointerException if either one of colors or points
             *  is null
             */
            // @ts-ignore
            constructor(pt1: java.awt.geom.Point2D, color1: java.awt.Color, pt2: java.awt.geom.Point2D, color2: java.awt.Color)
            /**
             * Constructs either a cyclic or acyclic <code>GradientPaint</code>
             * object depending on the <code>boolean</code> parameter.
             * @param x1 x coordinate of the first specified
             *  <code>Point</code> in user space
             * @param y1 y coordinate of the first specified
             *  <code>Point</code> in user space
             * @param color1 <code>Color</code> at the first specified
             *  <code>Point</code>
             * @param x2 x coordinate of the second specified
             *  <code>Point</code> in user space
             * @param y2 y coordinate of the second specified
             *  <code>Point</code> in user space
             * @param color2 <code>Color</code> at the second specified
             *  <code>Point</code>
             * @param cyclic <code>true</code> if the gradient pattern should cycle
             *  repeatedly between the two colors; <code>false</code> otherwise
             */
            // @ts-ignore
            constructor(x1: number /*float*/, y1: number /*float*/, color1: java.awt.Color, x2: number /*float*/, y2: number /*float*/, color2: java.awt.Color, cyclic: boolean)
            /**
             * Constructs either a cyclic or acyclic <code>GradientPaint</code>
             * object depending on the <code>boolean</code> parameter.
             * @param pt1 the first specified <code>Point</code>
             *  in user space
             * @param color1 <code>Color</code> at the first specified
             *  <code>Point</code>
             * @param pt2 the second specified <code>Point</code>
             *  in user space
             * @param color2 <code>Color</code> at the second specified
             *  <code>Point</code>
             * @param cyclic <code>true</code> if the gradient pattern should cycle
             *  repeatedly between the two colors; <code>false</code> otherwise
             * @throws NullPointerException if either one of colors or points
             *  is null
             */
            // @ts-ignore
            constructor(pt1: java.awt.geom.Point2D, color1: java.awt.Color, pt2: java.awt.geom.Point2D, color2: java.awt.Color, cyclic: boolean)
            /**
             * Returns a copy of the point P1 that anchors the first color.
             * @return a {#link Point2D} object that is a copy of the point
             *  that anchors the first color of this
             *  <code>GradientPaint</code>.
             */
            // @ts-ignore
            getPoint1(): java.awt.geom.Point2D
            /**
             * Returns the color C1 anchored by the point P1.
             * @return a <code>Color</code> object that is the color
             *  anchored by P1.
             */
            // @ts-ignore
            getColor1(): java.awt.Color
            /**
             * Returns a copy of the point P2 which anchors the second color.
             * @return a {#link Point2D} object that is a copy of the point
             *  that anchors the second color of this
             *  <code>GradientPaint</code>.
             */
            // @ts-ignore
            getPoint2(): java.awt.geom.Point2D
            /**
             * Returns the color C2 anchored by the point P2.
             * @return a <code>Color</code> object that is the color
             *  anchored by P2.
             */
            // @ts-ignore
            getColor2(): java.awt.Color
            /**
             * Returns <code>true</code> if the gradient cycles repeatedly
             * between the two colors C1 and C2.
             * @return <code>true</code> if the gradient cycles repeatedly
             *  between the two colors; <code>false</code> otherwise.
             */
            // @ts-ignore
            isCyclic(): boolean
            /**
             * Creates and returns a {@link PaintContext} used to
             * generate a linear color gradient pattern.
             * See the {@link Paint#createContext specification} of the
             * method in the {@link Paint} interface for information
             * on null parameter handling.
             * @param cm the preferred {#link ColorModel} which represents the most convenient
             *            format for the caller to receive the pixel data, or {@code null}
             *            if there is no preference.
             * @param deviceBounds the device space bounding box
             *                      of the graphics primitive being rendered.
             * @param userBounds the user space bounding box
             *                    of the graphics primitive being rendered.
             * @param xform the {#link AffineTransform} from user
             *               space into device space.
             * @param hints the set of hints that the context object can use to
             *               choose between rendering alternatives.
             * @return the {#code PaintContext} for
             *          generating color patterns.
             * @see Paint
             * @see PaintContext
             * @see ColorModel
             * @see Rectangle
             * @see Rectangle2D
             * @see AffineTransform
             * @see RenderingHints
             */
            // @ts-ignore
            createContext(cm: java.awt.image.ColorModel, deviceBounds: java.awt.Rectangle, userBounds: java.awt.geom.Rectangle2D, xform: java.awt.geom.AffineTransform, hints: java.awt.RenderingHints): java.awt.PaintContext
            /**
             * Returns the transparency mode for this <code>GradientPaint</code>.
             * @return an integer value representing this <code>GradientPaint</code>
             *  object's transparency mode.
             * @see Transparency
             */
            // @ts-ignore
            getTransparency(): int
        }
    }
}
