declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
                /**
                 * An adapter class that implements ImageProducer to allow the
                 * asynchronous production of a RenderableImage.  The size of the
                 * ImageConsumer is determined by the scale factor of the usr2dev
                 * transform in the RenderContext.  If the RenderContext is null, the
                 * default rendering of the RenderableImage is used.  This class
                 * implements an asynchronous production that produces the image in
                 * one thread at one resolution.  This class may be subclassed to
                 * implement versions that will render the image using several
                 * threads.  These threads could render either the same image at
                 * progressively better quality, or different sections of the image at
                 * a single resolution.
                 */
                // @ts-ignore
                class RenderableImageProducer extends java.lang.Object implements java.awt.image.ImageProducer, java.lang.Runnable {
                    /**
                     * Constructs a new RenderableImageProducer from a RenderableImage
                     * and a RenderContext.
                     * @param rdblImage the RenderableImage to be rendered.
                     * @param rc the RenderContext to use for producing the pixels.
                     */
                    // @ts-ignore
                    constructor(rdblImage: java.awt.image.renderable.RenderableImage, rc: java.awt.image.renderable.RenderContext)
                    /**
                     * Sets a new RenderContext to use for the next startProduction() call.
                     * @param rc the new RenderContext.
                     */
                    // @ts-ignore
                    setRenderContext(rc: java.awt.image.renderable.RenderContext): void
                    /**
                     * Adds an ImageConsumer to the list of consumers interested in
                     * data for this image.
                     * @param ic an ImageConsumer to be added to the interest list.
                     */
                    // @ts-ignore
                    addConsumer(ic: java.awt.image.ImageConsumer): void
                    /**
                     * Determine if an ImageConsumer is on the list of consumers
                     * currently interested in data for this image.
                     * @param ic the ImageConsumer to be checked.
                     * @return true if the ImageConsumer is on the list; false otherwise.
                     */
                    // @ts-ignore
                    isConsumer(ic: java.awt.image.ImageConsumer): boolean
                    /**
                     * Remove an ImageConsumer from the list of consumers interested in
                     * data for this image.
                     * @param ic the ImageConsumer to be removed.
                     */
                    // @ts-ignore
                    removeConsumer(ic: java.awt.image.ImageConsumer): void
                    /**
                     * Adds an ImageConsumer to the list of consumers interested in
                     * data for this image, and immediately starts delivery of the
                     * image data through the ImageConsumer interface.
                     * @param ic the ImageConsumer to be added to the list of consumers.
                     */
                    // @ts-ignore
                    startProduction(ic: java.awt.image.ImageConsumer): void
                    /**
                     * Requests that a given ImageConsumer have the image data delivered
                     * one more time in top-down, left-right order.
                     * @param ic the ImageConsumer requesting the resend.
                     */
                    // @ts-ignore
                    requestTopDownLeftRightResend(ic: java.awt.image.ImageConsumer): void
                    /**
                     * The runnable method for this class. This will produce an image using
                     * the current RenderableImage and RenderContext and send it to all the
                     * ImageConsumer currently registered with this class.
                     */
                    // @ts-ignore
                    run(): void
                }
            }
        }
    }
}
