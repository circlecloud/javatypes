declare namespace java {
    namespace awt {
        namespace image {
            /**
             * An ImageFilter class for cropping images.
             * This class extends the basic ImageFilter Class to extract a given
             * rectangular region of an existing Image and provide a source for a
             * new image containing just the extracted region.  It is meant to
             * be used in conjunction with a FilteredImageSource object to produce
             * cropped versions of existing images.
             * @see FilteredImageSource
             * @see ImageFilter
             * @author Jim Graham
             */
            // @ts-ignore
            class CropImageFilter extends java.awt.image.ImageFilter {
                /**
                 * Constructs a CropImageFilter that extracts the absolute rectangular
                 * region of pixels from its source Image as specified by the x, y,
                 * w, and h parameters.
                 * @param x the x location of the top of the rectangle to be extracted
                 * @param y the y location of the top of the rectangle to be extracted
                 * @param w the width of the rectangle to be extracted
                 * @param h the height of the rectangle to be extracted
                 */
                // @ts-ignore
                constructor(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/)
                /**
                 * Passes along  the properties from the source object after adding a
                 * property indicating the cropped region.
                 * This method invokes <code>super.setProperties</code>,
                 * which might result in additional properties being added.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose pixels
                 * are being filtered. Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                setProperties(props: java.util.Hashtable<any, ?>): void
                /**
                 * Override the source image's dimensions and pass the dimensions
                 * of the rectangular cropped region to the ImageConsumer.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose
                 * pixels are being filtered. Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 * @see ImageConsumer
                 */
                // @ts-ignore
                setDimensions(w: number /*int*/, h: number /*int*/): void
                /**
                 * Determine whether the delivered byte pixels intersect the region to
                 * be extracted and passes through only that subset of pixels that
                 * appear in the output region.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose
                 * pixels are being filtered. Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                setPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, model: java.awt.image.ColorModel, pixels: number /*byte*/[], off: number /*int*/, scansize: number /*int*/): void
                /**
                 * Determine if the delivered int pixels intersect the region to
                 * be extracted and pass through only that subset of pixels that
                 * appear in the output region.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose
                 * pixels are being filtered. Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                setPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, model: java.awt.image.ColorModel, pixels: number /*int*/[], off: number /*int*/, scansize: number /*int*/): void
            }
        }
    }
}
