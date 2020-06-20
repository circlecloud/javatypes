declare namespace java {
    namespace awt {
        namespace image {
            /**
             * An ImageFilter class for scaling images using the simplest algorithm.
             * This class extends the basic ImageFilter Class to scale an existing
             * image and provide a source for a new image containing the resampled
             * image.  The pixels in the source image are sampled to produce pixels
             * for an image of the specified size by replicating rows and columns of
             * pixels to scale up or omitting rows and columns of pixels to scale
             * down.
             * <p>It is meant to be used in conjunction with a FilteredImageSource
             * object to produce scaled versions of existing images.  Due to
             * implementation dependencies, there may be differences in pixel values
             * of an image filtered on different platforms.
             * @see FilteredImageSource
             * @see ImageFilter
             * @author Jim Graham
             */
            // @ts-ignore
            class ReplicateScaleFilter extends java.awt.image.ImageFilter {
                /**
                 * Constructs a ReplicateScaleFilter that scales the pixels from
                 * its source Image as specified by the width and height parameters.
                 * @param width the target width to scale the image
                 * @param height the target height to scale the image
                 * @throws IllegalArgumentException if <code>width</code> equals
                 *          zero or <code>height</code> equals zero
                 */
                // @ts-ignore
                constructor(width: number /*int*/, height: number /*int*/)
                /**
                 * The width of the source image.
                 */
                // @ts-ignore
                srcWidth: number /*int*/
                /**
                 * The height of the source image.
                 */
                // @ts-ignore
                srcHeight: number /*int*/
                /**
                 * The target width to scale the image.
                 */
                // @ts-ignore
                destWidth: number /*int*/
                /**
                 * The target height to scale the image.
                 */
                // @ts-ignore
                destHeight: number /*int*/
                /**
                 * An <code>int</code> array containing information about a
                 * row of pixels.
                 */
                // @ts-ignore
                srcrows: number /*int*/[]
                /**
                 * An <code>int</code> array containing information about a
                 * column of pixels.
                 */
                // @ts-ignore
                srccols: number /*int*/[]
                /**
                 * A <code>byte</code> array initialized with a size of
                 * {@link #destWidth} and used to deliver a row of pixel
                 * data to the {@link ImageConsumer}.
                 */
                // @ts-ignore
                outpixbuf: any
                /**
                 * Passes along the properties from the source object after adding a
                 * property indicating the scale applied.
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
                 * Override the dimensions of the source image and pass the dimensions
                 * of the new scaled size to the ImageConsumer.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose pixels
                 * are being filtered. Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 * @see ImageConsumer
                 */
                // @ts-ignore
                setDimensions(w: number /*int*/, h: number /*int*/): void
                /**
                 * Choose which rows and columns of the delivered byte pixels are
                 * needed for the destination scaled image and pass through just
                 * those rows and columns that are needed, replicated as necessary.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose pixels
                 * are being filtered. Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 */
                // @ts-ignore
                setPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, model: java.awt.image.ColorModel, pixels: number /*byte*/[], off: number /*int*/, scansize: number /*int*/): void
                /**
                 * Choose which rows and columns of the delivered int pixels are
                 * needed for the destination scaled image and pass through just
                 * those rows and columns that are needed, replicated as necessary.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose pixels
                 * are being filtered. Developers using
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
