declare namespace java {
    namespace awt {
        namespace image {
            /**
             * This class is an implementation of the ImageProducer interface which
             * takes an existing image and a filter object and uses them to produce
             * image data for a new filtered version of the original image.
             * Here is an example which filters an image by swapping the red and
             * blue compents:
             * <pre>
             * Image src = getImage("doc:///demo/images/duke/T1.gif");
             * ImageFilter colorfilter = new RedBlueSwapFilter();
             * Image img = createImage(new FilteredImageSource(src.getSource(),
             * colorfilter));
             * </pre>
             * @see ImageProducer
             * @author Jim Graham
             */
            // @ts-ignore
            class FilteredImageSource extends java.lang.Object implements java.awt.image.ImageProducer {
                /**
                 * Constructs an ImageProducer object from an existing ImageProducer
                 * and a filter object.
                 * @param orig the specified <code>ImageProducer</code>
                 * @param imgf the specified <code>ImageFilter</code>
                 * @see ImageFilter
                 * @see java.awt.Component#createImage
                 */
                // @ts-ignore
                constructor(orig: java.awt.image.ImageProducer, imgf: java.awt.image.ImageFilter)
                /**
                 * Adds the specified <code>ImageConsumer</code>
                 * to the list of consumers interested in data for the filtered image.
                 * An instance of the original <code>ImageFilter</code>
                 * is created
                 * (using the filter's <code>getFilterInstance</code> method)
                 * to manipulate the image data
                 * for the specified <code>ImageConsumer</code>.
                 * The newly created filter instance
                 * is then passed to the <code>addConsumer</code> method
                 * of the original <code>ImageProducer</code>.
                 * <p>
                 * This method is public as a side effect
                 * of this class implementing
                 * the <code>ImageProducer</code> interface.
                 * It should not be called from user code,
                 * and its behavior if called from user code is unspecified.
                 * @param ic  the consumer for the filtered image
                 * @see ImageConsumer
                 */
                // @ts-ignore
                public addConsumer(ic: java.awt.image.ImageConsumer): void
                /**
                 * Determines whether an ImageConsumer is on the list of consumers
                 * currently interested in data for this image.
                 * <p>
                 * This method is public as a side effect
                 * of this class implementing
                 * the <code>ImageProducer</code> interface.
                 * It should not be called from user code,
                 * and its behavior if called from user code is unspecified.
                 * @param ic the specified <code>ImageConsumer</code>
                 * @return true if the ImageConsumer is on the list; false otherwise
                 * @see ImageConsumer
                 */
                // @ts-ignore
                public isConsumer(ic: java.awt.image.ImageConsumer): boolean
                /**
                 * Removes an ImageConsumer from the list of consumers interested in
                 * data for this image.
                 * <p>
                 * This method is public as a side effect
                 * of this class implementing
                 * the <code>ImageProducer</code> interface.
                 * It should not be called from user code,
                 * and its behavior if called from user code is unspecified.
                 * @see ImageConsumer
                 */
                // @ts-ignore
                public removeConsumer(ic: java.awt.image.ImageConsumer): void
                /**
                 * Starts production of the filtered image.
                 * If the specified <code>ImageConsumer</code>
                 * isn't already a consumer of the filtered image,
                 * an instance of the original <code>ImageFilter</code>
                 * is created
                 * (using the filter's <code>getFilterInstance</code> method)
                 * to manipulate the image data
                 * for the <code>ImageConsumer</code>.
                 * The filter instance for the <code>ImageConsumer</code>
                 * is then passed to the <code>startProduction</code> method
                 * of the original <code>ImageProducer</code>.
                 * <p>
                 * This method is public as a side effect
                 * of this class implementing
                 * the <code>ImageProducer</code> interface.
                 * It should not be called from user code,
                 * and its behavior if called from user code is unspecified.
                 * @param ic  the consumer for the filtered image
                 * @see ImageConsumer
                 */
                // @ts-ignore
                public startProduction(ic: java.awt.image.ImageConsumer): void
                /**
                 * Requests that a given ImageConsumer have the image data delivered
                 * one more time in top-down, left-right order.  The request is
                 * handed to the ImageFilter for further processing, since the
                 * ability to preserve the pixel ordering depends on the filter.
                 * <p>
                 * This method is public as a side effect
                 * of this class implementing
                 * the <code>ImageProducer</code> interface.
                 * It should not be called from user code,
                 * and its behavior if called from user code is unspecified.
                 * @see ImageConsumer
                 */
                // @ts-ignore
                public requestTopDownLeftRightResend(ic: java.awt.image.ImageConsumer): void
            }
        }
    }
}
