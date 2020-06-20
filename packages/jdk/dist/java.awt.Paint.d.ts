declare namespace java {
    namespace awt {
        /**
         * This <code>Paint</code> interface defines how color patterns
         * can be generated for {@link Graphics2D} operations.  A class
         * implementing the <code>Paint</code> interface is added to the
         * <code>Graphics2D</code> context in order to define the color
         * pattern used by the <code>draw</code> and <code>fill</code> methods.
         * <p>
         * Instances of classes implementing <code>Paint</code> must be
         * read-only because the <code>Graphics2D</code> does not clone
         * these objects when they are set as an attribute with the
         * <code>setPaint</code> method or when the <code>Graphics2D</code>
         * object is itself cloned.
         * @see PaintContext
         * @see Color
         * @see GradientPaint
         * @see TexturePaint
         * @see Graphics2D#setPaint
         * @version 1.36, 06/05/07
         */
        // @ts-ignore
        interface Paint extends java.awt.Transparency {
            /**
             * Creates and returns a {@link PaintContext} used to
             * generate the color pattern.
             * The arguments to this method convey additional information
             * about the rendering operation that may be
             * used or ignored on various implementations of the {@code Paint} interface.
             * A caller must pass non-{@code null} values for all of the arguments
             * except for the {@code ColorModel} argument which may be {@code null} to
             * indicate that no specific {@code ColorModel} type is preferred.
             * Implementations of the {@code Paint} interface are allowed to use or ignore
             * any of the arguments as makes sense for their function, and are
             * not constrained to use the specified {@code ColorModel} for the returned
             * {@code PaintContext}, even if it is not {@code null}.
             * Implementations are allowed to throw {@code NullPointerException} for
             * any {@code null} argument other than the {@code ColorModel} argument,
             * but are not required to do so.
             * @param cm the preferred {#link ColorModel} which represents the most convenient
             *            format for the caller to receive the pixel data, or {@code null}
             *            if there is no preference.
             * @param deviceBounds the device space bounding box
             *                      of the graphics primitive being rendered.
             *                      Implementations of the {#code Paint} interface
             *                      are allowed to throw {@code NullPointerException}
             *                      for a {@code null} {@code deviceBounds}.
             * @param userBounds the user space bounding box
             *                    of the graphics primitive being rendered.
             *                      Implementations of the {#code Paint} interface
             *                      are allowed to throw {@code NullPointerException}
             *                      for a {@code null} {@code userBounds}.
             * @param xform the {#link AffineTransform} from user
             *               space into device space.
             *                      Implementations of the {@code Paint} interface
             *                      are allowed to throw {@code NullPointerException}
             *                      for a {@code null} {@code xform}.
             * @param hints the set of hints that the context object can use to
             *               choose between rendering alternatives.
             *                      Implementations of the {#code Paint} interface
             *                      are allowed to throw {@code NullPointerException}
             *                      for a {@code null} {@code hints}.
             * @return the {#code PaintContext} for
             *          generating color patterns.
             * @see PaintContext
             * @see ColorModel
             * @see Rectangle
             * @see Rectangle2D
             * @see AffineTransform
             * @see RenderingHints
             */
            // @ts-ignore
            createContext(cm: java.awt.image.ColorModel, deviceBounds: java.awt.Rectangle, userBounds: java.awt.geom.Rectangle2D, xform: java.awt.geom.AffineTransform, hints: java.awt.RenderingHints): java.awt.PaintContext
        }
    }
}
