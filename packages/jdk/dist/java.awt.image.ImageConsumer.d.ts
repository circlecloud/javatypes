declare namespace java {
    namespace awt {
        namespace image {
            /**
             * The interface for objects expressing interest in image data through
             * the ImageProducer interfaces.  When a consumer is added to an image
             * producer, the producer delivers all of the data about the image
             * using the method calls defined in this interface.
             * @see ImageProducer
             * @author Jim Graham
             */
            // @ts-ignore
            interface ImageConsumer {
                /**
                 * The pixels will be delivered in a random order.  This tells the
                 * ImageConsumer not to use any optimizations that depend on the
                 * order of pixel delivery, which should be the default assumption
                 * in the absence of any call to the setHints method.
                 * @see #setHints
                 */
                // @ts-ignore
                readonly RANDOMPIXELORDER: number /*int*/
                /**
                 * The pixels will be delivered in top-down, left-to-right order.
                 * @see #setHints
                 */
                // @ts-ignore
                readonly TOPDOWNLEFTRIGHT: number /*int*/
                /**
                 * The pixels will be delivered in (multiples of) complete scanlines
                 * at a time.
                 * @see #setHints
                 */
                // @ts-ignore
                readonly COMPLETESCANLINES: number /*int*/
                /**
                 * The pixels will be delivered in a single pass.  Each pixel will
                 * appear in only one call to any of the setPixels methods.  An
                 * example of an image format which does not meet this criterion
                 * is a progressive JPEG image which defines pixels in multiple
                 * passes, each more refined than the previous.
                 * @see #setHints
                 */
                // @ts-ignore
                readonly SINGLEPASS: number /*int*/
                /**
                 * The image contain a single static image.  The pixels will be defined
                 * in calls to the setPixels methods and then the imageComplete method
                 * will be called with the STATICIMAGEDONE flag after which no more
                 * image data will be delivered.  An example of an image type which
                 * would not meet these criteria would be the output of a video feed,
                 * or the representation of a 3D rendering being manipulated
                 * by the user.  The end of each frame in those types of images will
                 * be indicated by calling imageComplete with the SINGLEFRAMEDONE flag.
                 * @see #setHints
                 * @see #imageComplete
                 */
                // @ts-ignore
                readonly SINGLEFRAME: number /*int*/
                /**
                 * An error was encountered while producing the image.
                 * @see #imageComplete
                 */
                // @ts-ignore
                readonly IMAGEERROR: number /*int*/
                /**
                 * One frame of the image is complete but there are more frames
                 * to be delivered.
                 * @see #imageComplete
                 */
                // @ts-ignore
                readonly SINGLEFRAMEDONE: number /*int*/
                /**
                 * The image is complete and there are no more pixels or frames
                 * to be delivered.
                 * @see #imageComplete
                 */
                // @ts-ignore
                readonly STATICIMAGEDONE: number /*int*/
                /**
                 * The image creation process was deliberately aborted.
                 * @see #imageComplete
                 */
                // @ts-ignore
                readonly IMAGEABORTED: number /*int*/
                /**
                 * The dimensions of the source image are reported using the
                 * setDimensions method call.
                 * @param width the width of the source image
                 * @param height the height of the source image
                 */
                // @ts-ignore
                setDimensions(width: number /*int*/, height: number /*int*/): void
                /**
                 * Sets the extensible list of properties associated with this image.
                 * @param props the list of properties to be associated with this
                 *         image
                 */
                // @ts-ignore
                setProperties(props: java.util.Hashtable<any, any>): void
                /**
                 * Sets the ColorModel object used for the majority of
                 * the pixels reported using the setPixels method
                 * calls.  Note that each set of pixels delivered using setPixels
                 * contains its own ColorModel object, so no assumption should
                 * be made that this model will be the only one used in delivering
                 * pixel values.  A notable case where multiple ColorModel objects
                 * may be seen is a filtered image when for each set of pixels
                 * that it filters, the filter
                 * determines  whether the
                 * pixels can be sent on untouched, using the original ColorModel,
                 * or whether the pixels should be modified (filtered) and passed
                 * on using a ColorModel more convenient for the filtering process.
                 * @param model the specified <code>ColorModel</code>
                 * @see ColorModel
                 */
                // @ts-ignore
                setColorModel(model: java.awt.image.ColorModel): void
                /**
                 * Sets the hints that the ImageConsumer uses to process the
                 * pixels delivered by the ImageProducer.
                 * The ImageProducer can deliver the pixels in any order, but
                 * the ImageConsumer may be able to scale or convert the pixels
                 * to the destination ColorModel more efficiently or with higher
                 * quality if it knows some information about how the pixels will
                 * be delivered up front.  The setHints method should be called
                 * before any calls to any of the setPixels methods with a bit mask
                 * of hints about the manner in which the pixels will be delivered.
                 * If the ImageProducer does not follow the guidelines for the
                 * indicated hint, the results are undefined.
                 * @param hintflags a set of hints that the ImageConsumer uses to
                 *         process the pixels
                 */
                // @ts-ignore
                setHints(hintflags: number /*int*/): void
                /**
                 * Delivers the pixels of the image with one or more calls
                 * to this method.  Each call specifies the location and
                 * size of the rectangle of source pixels that are contained in
                 * the array of pixels.  The specified ColorModel object should
                 * be used to convert the pixels into their corresponding color
                 * and alpha components.  Pixel (m,n) is stored in the pixels array
                 * at index (n * scansize + m + off).  The pixels delivered using
                 * this method are all stored as bytes.
                 * @param x the X coordinate of the upper-left corner of the
                 *         area of pixels to be set
                 * @param y the Y coordinate of the upper-left corner of the
                 *         area of pixels to be set
                 * @param w the width of the area of pixels
                 * @param h the height of the area of pixels
                 * @param model the specified <code>ColorModel</code>
                 * @param pixels the array of pixels
                 * @param off the offset into the <code>pixels</code> array
                 * @param scansize the distance from one row of pixels to the next in
                 *  the <code>pixels</code> array
                 * @see ColorModel
                 */
                // @ts-ignore
                setPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, model: java.awt.image.ColorModel, pixels: number /*byte*/[], off: number /*int*/, scansize: number /*int*/): void
                /**
                 * The pixels of the image are delivered using one or more calls
                 * to the setPixels method.  Each call specifies the location and
                 * size of the rectangle of source pixels that are contained in
                 * the array of pixels.  The specified ColorModel object should
                 * be used to convert the pixels into their corresponding color
                 * and alpha components.  Pixel (m,n) is stored in the pixels array
                 * at index (n * scansize + m + off).  The pixels delivered using
                 * this method are all stored as ints.
                 * this method are all stored as ints.
                 * @param x the X coordinate of the upper-left corner of the
                 *         area of pixels to be set
                 * @param y the Y coordinate of the upper-left corner of the
                 *         area of pixels to be set
                 * @param w the width of the area of pixels
                 * @param h the height of the area of pixels
                 * @param model the specified <code>ColorModel</code>
                 * @param pixels the array of pixels
                 * @param off the offset into the <code>pixels</code> array
                 * @param scansize the distance from one row of pixels to the next in
                 *  the <code>pixels</code> array
                 * @see ColorModel
                 */
                // @ts-ignore
                setPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, model: java.awt.image.ColorModel, pixels: number /*int*/[], off: number /*int*/, scansize: number /*int*/): void
                /**
                 * The imageComplete method is called when the ImageProducer is
                 * finished delivering all of the pixels that the source image
                 * contains, or when a single frame of a multi-frame animation has
                 * been completed, or when an error in loading or producing the
                 * image has occurred.  The ImageConsumer should remove itself from the
                 * list of consumers registered with the ImageProducer at this time,
                 * unless it is interested in successive frames.
                 * @param status the status of image loading
                 * @see ImageProducer#removeConsumer
                 */
                // @ts-ignore
                imageComplete(status: number /*int*/): void
            }
        }
    }
}
