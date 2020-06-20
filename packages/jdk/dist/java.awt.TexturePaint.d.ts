declare namespace java {
    namespace awt {
        /**
         * The <code>TexturePaint</code> class provides a way to fill a
         * {@link Shape} with a texture that is specified as
         * a {@link BufferedImage}. The size of the <code>BufferedImage</code>
         * object should be small because the <code>BufferedImage</code> data
         * is copied by the <code>TexturePaint</code> object.
         * At construction time, the texture is anchored to the upper
         * left corner of a {@link Rectangle2D} that is
         * specified in user space.  Texture is computed for
         * locations in the device space by conceptually replicating the
         * specified <code>Rectangle2D</code> infinitely in all directions
         * in user space and mapping the <code>BufferedImage</code> to each
         * replicated <code>Rectangle2D</code>.
         * @see Paint
         * @see Graphics2D#setPaint
         * @version 1.48, 06/05/07
         */
        // @ts-ignore
        class TexturePaint extends java.lang.Object implements java.awt.Paint {
            /**
             * Constructs a <code>TexturePaint</code> object.
             * @param txtr the <code>BufferedImage</code> object with the texture
             *  used for painting
             * @param anchor the <code>Rectangle2D</code> in user space used to
             *  anchor and replicate the texture
             */
            // @ts-ignore
            constructor(txtr: java.awt.image.BufferedImage, anchor: java.awt.geom.Rectangle2D)
            /**
             * Returns the <code>BufferedImage</code> texture used to
             * fill the shapes.
             * @return a <code>BufferedImage</code>.
             */
            // @ts-ignore
            getImage(): java.awt.image.BufferedImage
            /**
             * Returns a copy of the anchor rectangle which positions and
             * sizes the textured image.
             * @return the <code>Rectangle2D</code> used to anchor and
             *  size this <code>TexturePaint</code>.
             */
            // @ts-ignore
            getAnchorRect(): java.awt.geom.Rectangle2D
            /**
             * Creates and returns a {@link PaintContext} used to
             * generate a tiled image pattern.
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
             * Returns the transparency mode for this <code>TexturePaint</code>.
             * @return the transparency mode for this <code>TexturePaint</code>
             *  as an integer value.
             * @see Transparency
             */
            // @ts-ignore
            getTransparency(): int
        }
    }
}
