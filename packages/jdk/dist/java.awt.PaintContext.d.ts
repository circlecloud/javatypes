declare namespace java {
    namespace awt {
        /**
         * The <code>PaintContext</code> interface defines the encapsulated
         * and optimized environment to generate color patterns in device
         * space for fill or stroke operations on a
         * {@link Graphics2D}.  The <code>PaintContext</code> provides
         * the necessary colors for <code>Graphics2D</code> operations in the
         * form of a {@link Raster} associated with a {@link ColorModel}.
         * The <code>PaintContext</code> maintains state for a particular paint
         * operation.  In a multi-threaded environment, several
         * contexts can exist simultaneously for a single {@link Paint} object.
         * @see Paint
         */
        // @ts-ignore
        interface PaintContext {
            /**
             * Releases the resources allocated for the operation.
             */
            // @ts-ignore
            dispose(): void
            /**
             * Returns the <code>ColorModel</code> of the output.  Note that
             * this <code>ColorModel</code> might be different from the hint
             * specified in the
             * {@link Paint#createContext(ColorModel, Rectangle, Rectangle2D,
             * AffineTransform, RenderingHints) createContext} method of
             * <code>Paint</code>.  Not all <code>PaintContext</code> objects are
             * capable of generating color patterns in an arbitrary
             * <code>ColorModel</code>.
             * @return the <code>ColorModel</code> of the output.
             */
            // @ts-ignore
            getColorModel(): java.awt.image.ColorModel
            /**
             * Returns a <code>Raster</code> containing the colors generated for
             * the graphics operation.
             * @param x the x coordinate of the area in device space
             *  for which colors are generated.
             * @param y the y coordinate of the area in device space
             *  for which colors are generated.
             * @param w the width of the area in device space
             * @param h the height of the area in device space
             * @return a <code>Raster</code> representing the specified
             *  rectangular area and containing the colors generated for
             *  the graphics operation.
             */
            // @ts-ignore
            getRaster(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): java.awt.image.Raster
        }
    }
}
