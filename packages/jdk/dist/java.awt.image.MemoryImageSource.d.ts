declare namespace java {
    namespace awt {
        namespace image {
            /**
             * This class is an implementation of the ImageProducer interface which
             * uses an array to produce pixel values for an Image.  Here is an example
             * which calculates a 100x100 image representing a fade from black to blue
             * along the X axis and a fade from black to red along the Y axis:
             * <pre>{@code
             * int w = 100;
             * int h = 100;
             * int pix[] = new int[w * h];
             * int index = 0;
             * for (int y = 0; y < h; y++) {
             * int red = (y * 255) / (h - 1);
             * for (int x = 0; x < w; x++) {
             * int blue = (x * 255) / (w - 1);
             * pix[index++] = (255 << 24) | (red << 16) | blue;
             * }
             * }
             * Image img = createImage(new MemoryImageSource(w, h, pix, 0, w));
             * }</pre>
             * The MemoryImageSource is also capable of managing a memory image which
             * varies over time to allow animation or custom rendering.  Here is an
             * example showing how to set up the animation source and signal changes
             * in the data (adapted from the MemoryAnimationSourceDemo by Garth Dickie):
             * <pre>{@code
             * int pixels[];
             * MemoryImageSource source;
             * public void init() {
             * int width = 50;
             * int height = 50;
             * int size = width * height;
             * pixels = new int[size];
             * int value = getBackground().getRGB();
             * for (int i = 0; i < size; i++) {
             * pixels[i] = value;
             * }
             * source = new MemoryImageSource(width, height, pixels, 0, width);
             * source.setAnimated(true);
             * image = createImage(source);
             * }
             * public void run() {
             * Thread me = Thread.currentThread( );
             * me.setPriority(Thread.MIN_PRIORITY);
             * while (true) {
             * try {
             * Thread.sleep(10);
             * } catch( InterruptedException e ) {
             * return;
             * }
             * // Modify the values in the pixels array at (x, y, w, h)
             * // Send the new data to the interested ImageConsumers
             * source.newPixels(x, y, w, h);
             * }
             * }
             * }</pre>
             * @see ImageProducer
             * @author Jim Graham
             * @author Animation capabilities inspired by the
             *               MemoryAnimationSource class written by Garth Dickie
             */
            // @ts-ignore
            class MemoryImageSource extends java.lang.Object implements java.awt.image.ImageProducer {
                /**
                 * Constructs an ImageProducer object which uses an array of bytes
                 * to produce data for an Image object.
                 * @param w the width of the rectangle of pixels
                 * @param h the height of the rectangle of pixels
                 * @param cm the specified <code>ColorModel</code>
                 * @param pix an array of pixels
                 * @param off the offset into the array of where to store the
                 *         first pixel
                 * @param scan the distance from one row of pixels to the next in
                 *         the array
                 * @see java.awt.Component#createImage
                 */
                // @ts-ignore
                constructor(w: number /*int*/, h: number /*int*/, cm: java.awt.image.ColorModel, pix: number /*byte*/[], off: number /*int*/, scan: number /*int*/)
                /**
                 * Constructs an ImageProducer object which uses an array of bytes
                 * to produce data for an Image object.
                 * @param w the width of the rectangle of pixels
                 * @param h the height of the rectangle of pixels
                 * @param cm the specified <code>ColorModel</code>
                 * @param pix an array of pixels
                 * @param off the offset into the array of where to store the
                 *         first pixel
                 * @param scan the distance from one row of pixels to the next in
                 *         the array
                 * @param props a list of properties that the <code>ImageProducer</code>
                 *         uses to process an image
                 * @see java.awt.Component#createImage
                 */
                // @ts-ignore
                constructor(w: number /*int*/, h: number /*int*/, cm: java.awt.image.ColorModel, pix: number /*byte*/[], off: number /*int*/, scan: number /*int*/, props: java.util.Hashtable<any, any>)
                /**
                 * Constructs an ImageProducer object which uses an array of integers
                 * to produce data for an Image object.
                 * @param w the width of the rectangle of pixels
                 * @param h the height of the rectangle of pixels
                 * @param cm the specified <code>ColorModel</code>
                 * @param pix an array of pixels
                 * @param off the offset into the array of where to store the
                 *         first pixel
                 * @param scan the distance from one row of pixels to the next in
                 *         the array
                 * @see java.awt.Component#createImage
                 */
                // @ts-ignore
                constructor(w: number /*int*/, h: number /*int*/, cm: java.awt.image.ColorModel, pix: number /*int*/[], off: number /*int*/, scan: number /*int*/)
                /**
                 * Constructs an ImageProducer object which uses an array of integers
                 * to produce data for an Image object.
                 * @param w the width of the rectangle of pixels
                 * @param h the height of the rectangle of pixels
                 * @param cm the specified <code>ColorModel</code>
                 * @param pix an array of pixels
                 * @param off the offset into the array of where to store the
                 *         first pixel
                 * @param scan the distance from one row of pixels to the next in
                 *         the array
                 * @param props a list of properties that the <code>ImageProducer</code>
                 *         uses to process an image
                 * @see java.awt.Component#createImage
                 */
                // @ts-ignore
                constructor(w: number /*int*/, h: number /*int*/, cm: java.awt.image.ColorModel, pix: number /*int*/[], off: number /*int*/, scan: number /*int*/, props: java.util.Hashtable<any, any>)
                /**
                 * Constructs an ImageProducer object which uses an array of integers
                 * in the default RGB ColorModel to produce data for an Image object.
                 * @param w the width of the rectangle of pixels
                 * @param h the height of the rectangle of pixels
                 * @param pix an array of pixels
                 * @param off the offset into the array of where to store the
                 *         first pixel
                 * @param scan the distance from one row of pixels to the next in
                 *         the array
                 * @see java.awt.Component#createImage
                 * @see ColorModel#getRGBdefault
                 */
                // @ts-ignore
                constructor(w: number /*int*/, h: number /*int*/, pix: number /*int*/[], off: number /*int*/, scan: number /*int*/)
                /**
                 * Constructs an ImageProducer object which uses an array of integers
                 * in the default RGB ColorModel to produce data for an Image object.
                 * @param w the width of the rectangle of pixels
                 * @param h the height of the rectangle of pixels
                 * @param pix an array of pixels
                 * @param off the offset into the array of where to store the
                 *         first pixel
                 * @param scan the distance from one row of pixels to the next in
                 *         the array
                 * @param props a list of properties that the <code>ImageProducer</code>
                 *         uses to process an image
                 * @see java.awt.Component#createImage
                 * @see ColorModel#getRGBdefault
                 */
                // @ts-ignore
                constructor(w: number /*int*/, h: number /*int*/, pix: number /*int*/[], off: number /*int*/, scan: number /*int*/, props: java.util.Hashtable<any, any>)
                /**
                 * Adds an ImageConsumer to the list of consumers interested in
                 * data for this image.
                 * @param ic the specified <code>ImageConsumer</code>
                 * @throws NullPointerException if the specified
                 *            <code>ImageConsumer</code> is null
                 * @see ImageConsumer
                 */
                // @ts-ignore
                public addConsumer(ic: java.awt.image.ImageConsumer): void
                /**
                 * Determines if an ImageConsumer is on the list of consumers currently
                 * interested in data for this image.
                 * @param ic the specified <code>ImageConsumer</code>
                 * @return <code>true</code> if the <code>ImageConsumer</code>
                 *  is on the list; <code>false</code> otherwise.
                 * @see ImageConsumer
                 */
                // @ts-ignore
                public isConsumer(ic: java.awt.image.ImageConsumer): boolean
                /**
                 * Removes an ImageConsumer from the list of consumers interested in
                 * data for this image.
                 * @param ic the specified <code>ImageConsumer</code>
                 * @see ImageConsumer
                 */
                // @ts-ignore
                public removeConsumer(ic: java.awt.image.ImageConsumer): void
                /**
                 * Adds an ImageConsumer to the list of consumers interested in
                 * data for this image and immediately starts delivery of the
                 * image data through the ImageConsumer interface.
                 * @param ic the specified <code>ImageConsumer</code>
                 *  image data through the ImageConsumer interface.
                 * @see ImageConsumer
                 */
                // @ts-ignore
                public startProduction(ic: java.awt.image.ImageConsumer): void
                /**
                 * Requests that a given ImageConsumer have the image data delivered
                 * one more time in top-down, left-right order.
                 * @param ic the specified <code>ImageConsumer</code>
                 * @see ImageConsumer
                 */
                // @ts-ignore
                public requestTopDownLeftRightResend(ic: java.awt.image.ImageConsumer): void
                /**
                 * Changes this memory image into a multi-frame animation or a
                 * single-frame static image depending on the animated parameter.
                 * <p>This method should be called immediately after the
                 * MemoryImageSource is constructed and before an image is
                 * created with it to ensure that all ImageConsumers will
                 * receive the correct multi-frame data.  If an ImageConsumer
                 * is added to this ImageProducer before this flag is set then
                 * that ImageConsumer will see only a snapshot of the pixel
                 * data that was available when it connected.
                 * @param animated <code>true</code> if the image is a
                 *        multi-frame animation
                 */
                // @ts-ignore
                public setAnimated(animated: boolean): void
                /**
                 * Specifies whether this animated memory image should always be
                 * updated by sending the complete buffer of pixels whenever
                 * there is a change.
                 * This flag is ignored if the animation flag is not turned on
                 * through the setAnimated() method.
                 * <p>This method should be called immediately after the
                 * MemoryImageSource is constructed and before an image is
                 * created with it to ensure that all ImageConsumers will
                 * receive the correct pixel delivery hints.
                 * @param fullbuffers <code>true</code> if the complete pixel
                 *              buffer should always
                 *  be sent
                 * @see #setAnimated
                 */
                // @ts-ignore
                public setFullBufferUpdates(fullbuffers: boolean): void
                /**
                 * Sends a whole new buffer of pixels to any ImageConsumers that
                 * are currently interested in the data for this image and notify
                 * them that an animation frame is complete.
                 * This method only has effect if the animation flag has been
                 * turned on through the setAnimated() method.
                 * @see #newPixels(int, int, int, int, boolean)
                 * @see ImageConsumer
                 * @see #setAnimated
                 */
                // @ts-ignore
                public newPixels(): void
                /**
                 * Sends a rectangular region of the buffer of pixels to any
                 * ImageConsumers that are currently interested in the data for
                 * this image and notify them that an animation frame is complete.
                 * This method only has effect if the animation flag has been
                 * turned on through the setAnimated() method.
                 * If the full buffer update flag was turned on with the
                 * setFullBufferUpdates() method then the rectangle parameters
                 * will be ignored and the entire buffer will always be sent.
                 * @param x the x coordinate of the upper left corner of the rectangle
                 *  of pixels to be sent
                 * @param y the y coordinate of the upper left corner of the rectangle
                 *  of pixels to be sent
                 * @param w the width of the rectangle of pixels to be sent
                 * @param h the height of the rectangle of pixels to be sent
                 * @see #newPixels(int, int, int, int, boolean)
                 * @see ImageConsumer
                 * @see #setAnimated
                 * @see #setFullBufferUpdates
                 */
                // @ts-ignore
                public newPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                /**
                 * Sends a rectangular region of the buffer of pixels to any
                 * ImageConsumers that are currently interested in the data for
                 * this image.
                 * If the framenotify parameter is true then the consumers are
                 * also notified that an animation frame is complete.
                 * This method only has effect if the animation flag has been
                 * turned on through the setAnimated() method.
                 * If the full buffer update flag was turned on with the
                 * setFullBufferUpdates() method then the rectangle parameters
                 * will be ignored and the entire buffer will always be sent.
                 * @param x the x coordinate of the upper left corner of the rectangle
                 *  of pixels to be sent
                 * @param y the y coordinate of the upper left corner of the rectangle
                 *  of pixels to be sent
                 * @param w the width of the rectangle of pixels to be sent
                 * @param h the height of the rectangle of pixels to be sent
                 * @param framenotify <code>true</code> if the consumers should be sent a
                 *  {#link ImageConsumer#SINGLEFRAMEDONE SINGLEFRAMEDONE} notification
                 * @see ImageConsumer
                 * @see #setAnimated
                 * @see #setFullBufferUpdates
                 */
                // @ts-ignore
                public newPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, framenotify: boolean): void
                /**
                 * Changes to a new byte array to hold the pixels for this image.
                 * If the animation flag has been turned on through the setAnimated()
                 * method, then the new pixels will be immediately delivered to any
                 * ImageConsumers that are currently interested in the data for
                 * this image.
                 * @param newpix the new pixel array
                 * @param newmodel the specified <code>ColorModel</code>
                 * @param offset the offset into the array
                 * @param scansize the distance from one row of pixels to the next in
                 *  the array
                 * @see #newPixels(int, int, int, int, boolean)
                 * @see #setAnimated
                 */
                // @ts-ignore
                public newPixels(newpix: number /*byte*/[], newmodel: java.awt.image.ColorModel, offset: number /*int*/, scansize: number /*int*/): void
                /**
                 * Changes to a new int array to hold the pixels for this image.
                 * If the animation flag has been turned on through the setAnimated()
                 * method, then the new pixels will be immediately delivered to any
                 * ImageConsumers that are currently interested in the data for
                 * this image.
                 * @param newpix the new pixel array
                 * @param newmodel the specified <code>ColorModel</code>
                 * @param offset the offset into the array
                 * @param scansize the distance from one row of pixels to the next in
                 *  the array
                 * @see #newPixels(int, int, int, int, boolean)
                 * @see #setAnimated
                 */
                // @ts-ignore
                public newPixels(newpix: number /*int*/[], newmodel: java.awt.image.ColorModel, offset: number /*int*/, scansize: number /*int*/): void
            }
        }
    }
}
