declare namespace java {
    namespace awt {
        namespace image {
            /**
             * An ImageFilter class for scaling images using a simple area averaging
             * algorithm that produces smoother results than the nearest neighbor
             * algorithm.
             * <p>This class extends the basic ImageFilter Class to scale an existing
             * image and provide a source for a new image containing the resampled
             * image.  The pixels in the source image are blended to produce pixels
             * for an image of the specified size.  The blending process is analogous
             * to scaling up the source image to a multiple of the destination size
             * using pixel replication and then scaling it back down to the destination
             * size by simply averaging all the pixels in the supersized image that
             * fall within a given pixel of the destination image.  If the data from
             * the source is not delivered in TopDownLeftRight order then the filter
             * will back off to a simple pixel replication behavior and utilize the
             * requestTopDownLeftRightResend() method to refilter the pixels in a
             * better way at the end.
             * <p>It is meant to be used in conjunction with a FilteredImageSource
             * object to produce scaled versions of existing images.  Due to
             * implementation dependencies, there may be differences in pixel values
             * of an image filtered on different platforms.
             * @see FilteredImageSource
             * @see ReplicateScaleFilter
             * @see ImageFilter
             * @author Jim Graham
             */
            // @ts-ignore
            class AreaAveragingScaleFilter extends java.awt.image.ReplicateScaleFilter {
                /**
                 * Constructs an AreaAveragingScaleFilter that scales the pixels from
                 * its source Image as specified by the width and height parameters.
                 * @param width the target width to scale the image
                 * @param height the target height to scale the image
                 */
                // @ts-ignore
                constructor(width: number /*int*/, height: number /*int*/)
                /**
                 * Detect if the data is being delivered with the necessary hints
                 * to allow the averaging algorithm to do its work.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code> whose
                 * pixels are being filtered.  Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 * @see ImageConsumer#setHints
                 */
                // @ts-ignore
                setHints(hints: number /*int*/): void
                /**
                 * Combine the components for the delivered byte pixels into the
                 * accumulation arrays and send on any averaged data for rows of
                 * pixels that are complete.  If the correct hints were not
                 * specified in the setHints call then relay the work to our
                 * superclass which is capable of scaling pixels regardless of
                 * the delivery hints.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code>
                 * whose pixels are being filtered.  Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 * @see ReplicateScaleFilter
                 */
                // @ts-ignore
                setPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, model: java.awt.image.ColorModel, pixels: number /*byte*/[], off: number /*int*/, scansize: number /*int*/): void
                /**
                 * Combine the components for the delivered int pixels into the
                 * accumulation arrays and send on any averaged data for rows of
                 * pixels that are complete.  If the correct hints were not
                 * specified in the setHints call then relay the work to our
                 * superclass which is capable of scaling pixels regardless of
                 * the delivery hints.
                 * <p>
                 * Note: This method is intended to be called by the
                 * <code>ImageProducer</code> of the <code>Image</code>
                 * whose pixels are being filtered.  Developers using
                 * this class to filter pixels from an image should avoid calling
                 * this method directly since that operation could interfere
                 * with the filtering operation.
                 * @see ReplicateScaleFilter
                 */
                // @ts-ignore
                setPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, model: java.awt.image.ColorModel, pixels: number /*int*/[], off: number /*int*/, scansize: number /*int*/): void
            }
        }
    }
}
