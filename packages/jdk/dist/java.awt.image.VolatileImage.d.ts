declare namespace java {
    namespace awt {
        namespace image {
            /**
             * VolatileImage is an image which can lose its
             * contents at any time due to circumstances beyond the control of the
             * application (e.g., situations caused by the operating system or by
             * other applications). Because of the potential for hardware acceleration,
             * a VolatileImage object can have significant performance benefits on
             * some platforms.
             * <p>
             * The drawing surface of an image (the memory where the image contents
             * actually reside) can be lost or invalidated, causing the contents of that
             * memory to go away.  The drawing surface thus needs to be restored
             * or recreated and the contents of that surface need to be
             * re-rendered.  VolatileImage provides an interface for
             * allowing the user to detect these problems and fix them
             * when they occur.
             * <p>
             * When a VolatileImage object is created, limited system resources
             * such as video memory (VRAM) may be allocated in order to support
             * the image.
             * When a VolatileImage object is no longer used, it may be
             * garbage-collected and those system resources will be returned,
             * but this process does not happen at guaranteed times.
             * Applications that create many VolatileImage objects (for example,
             * a resizing window may force recreation of its back buffer as the
             * size changes) may run out of optimal system resources for new
             * VolatileImage objects simply because the old objects have not
             * yet been removed from the system.
             * (New VolatileImage objects may still be created, but they
             * may not perform as well as those created in accelerated
             * memory).
             * The flush method may be called at any time to proactively release
             * the resources used by a VolatileImage so that it does not prevent
             * subsequent VolatileImage objects from being accelerated.
             * In this way, applications can have more control over the state
             * of the resources taken up by obsolete VolatileImage objects.
             * <p>
             * This image should not be subclassed directly but should be created
             * by using the {@link java.awt.Component#createVolatileImage(int, int)
             * Component.createVolatileImage} or
             * {@link java.awt.GraphicsConfiguration#createCompatibleVolatileImage(int, int)
             * GraphicsConfiguration.createCompatibleVolatileImage(int, int)} methods.
             * <P>
             * An example of using a VolatileImage object follows:
             * <pre>
             * // image creation
             * VolatileImage vImg = createVolatileImage(w, h);
             * // rendering to the image
             * void renderOffscreen() {
             * do {
             * if (vImg.validate(getGraphicsConfiguration()) ==
             * VolatileImage.IMAGE_INCOMPATIBLE)
             * {
             * // old vImg doesn't work with new GraphicsConfig; re-create it
             * vImg = createVolatileImage(w, h);
             * }
             * Graphics2D g = vImg.createGraphics();
             * //
             * // miscellaneous rendering commands...
             * //
             * g.dispose();
             * } while (vImg.contentsLost());
             * }
             * // copying from the image (here, gScreen is the Graphics
             * // object for the onscreen window)
             * do {
             * int returnCode = vImg.validate(getGraphicsConfiguration());
             * if (returnCode == VolatileImage.IMAGE_RESTORED) {
             * // Contents need to be restored
             * renderOffscreen();      // restore contents
             * } else if (returnCode == VolatileImage.IMAGE_INCOMPATIBLE) {
             * // old vImg doesn't work with new GraphicsConfig; re-create it
             * vImg = createVolatileImage(w, h);
             * renderOffscreen();
             * }
             * gScreen.drawImage(vImg, 0, 0, this);
             * } while (vImg.contentsLost());
             * </pre>
             * <P>
             * Note that this class subclasses from the {@link Image} class, which
             * includes methods that take an {@link ImageObserver} parameter for
             * asynchronous notifications as information is received from
             * a potential {@link ImageProducer}.  Since this <code>VolatileImage</code>
             * is not loaded from an asynchronous source, the various methods that take
             * an <code>ImageObserver</code> parameter will behave as if the data has
             * already been obtained from the <code>ImageProducer</code>.
             * Specifically, this means that the return values from such methods
             * will never indicate that the information is not yet available and
             * the <code>ImageObserver</code> used in such methods will never
             * need to be recorded for an asynchronous callback notification.
             * @since 1.4
             */
            // @ts-ignore
            class VolatileImage extends java.awt.Image implements java.awt.Transparency {
                // @ts-ignore
                constructor()
                /**
                 * Validated image is ready to use as-is.
                 */
                // @ts-ignore
                readonly IMAGE_OK: number /*int*/
                /**
                 * Validated image has been restored and is now ready to use.
                 * Note that restoration causes contents of the image to be lost.
                 */
                // @ts-ignore
                readonly IMAGE_RESTORED: number /*int*/
                /**
                 * Validated image is incompatible with supplied
                 * <code>GraphicsConfiguration</code> object and should be
                 * re-created as appropriate.  Usage of the image as-is
                 * after receiving this return code from <code>validate</code>
                 * is undefined.
                 */
                // @ts-ignore
                readonly IMAGE_INCOMPATIBLE: number /*int*/
                /**
                 * The transparency value with which this image was created.
                 * @see java.awt.GraphicsConfiguration#createCompatibleVolatileImage(int,
                 *       int,int)
                 * @see java.awt.GraphicsConfiguration#createCompatibleVolatileImage(int,
                 *       int,ImageCapabilities,int)
                 * @see Transparency
                 * @since 1.5
                 */
                // @ts-ignore
                transparency: number /*int*/
                /**
                 * Returns a static snapshot image of this object.  The
                 * <code>BufferedImage</code> returned is only current with
                 * the <code>VolatileImage</code> at the time of the request
                 * and will not be updated with any future changes to the
                 * <code>VolatileImage</code>.
                 * @return a {#link BufferedImage} representation of this
                 *           <code>VolatileImage</code>
                 * @see BufferedImage
                 */
                // @ts-ignore
                abstract getSnapshot(): java.awt.image.BufferedImage
                /**
                 * Returns the width of the <code>VolatileImage</code>.
                 * @return the width of this <code>VolatileImage</code>.
                 */
                // @ts-ignore
                abstract getWidth(): int
                /**
                 * Returns the height of the <code>VolatileImage</code>.
                 * @return the height of this <code>VolatileImage</code>.
                 */
                // @ts-ignore
                abstract getHeight(): int
                /**
                 * This returns an ImageProducer for this VolatileImage.
                 * Note that the VolatileImage object is optimized for
                 * rendering operations and blitting to the screen or other
                 * VolatileImage objects, as opposed to reading back the
                 * pixels of the image.  Therefore, operations such as
                 * <code>getSource</code> may not perform as fast as
                 * operations that do not rely on reading the pixels.
                 * Note also that the pixel values read from the image are current
                 * with those in the image only at the time that they are
                 * retrieved. This method takes a snapshot
                 * of the image at the time the request is made and the
                 * ImageProducer object returned works with
                 * that static snapshot image, not the original VolatileImage.
                 * Calling getSource()
                 * is equivalent to calling getSnapshot().getSource().
                 * @return an {#link ImageProducer} that can be used to produce the
                 *  pixels for a <code>BufferedImage</code> representation of
                 *  this Image.
                 * @see ImageProducer
                 * @see #getSnapshot()
                 */
                // @ts-ignore
                getSource(): java.awt.image.ImageProducer
                /**
                 * This method returns a {@link Graphics2D}, but is here
                 * for backwards compatibility.  {@link #createGraphics() createGraphics} is more
                 * convenient, since it is declared to return a
                 * <code>Graphics2D</code>.
                 * @return a <code>Graphics2D</code>, which can be used to draw into
                 *           this image.
                 */
                // @ts-ignore
                getGraphics(): java.awt.Graphics
                /**
                 * Creates a <code>Graphics2D</code>, which can be used to draw into
                 * this <code>VolatileImage</code>.
                 * @return a <code>Graphics2D</code>, used for drawing into this
                 *           image.
                 */
                // @ts-ignore
                abstract createGraphics(): java.awt.Graphics2D
                /**
                 * Attempts to restore the drawing surface of the image if the surface
                 * had been lost since the last <code>validate</code> call.  Also
                 * validates this image against the given GraphicsConfiguration
                 * parameter to see whether operations from this image to the
                 * GraphicsConfiguration are compatible.  An example of an
                 * incompatible combination might be a situation where a VolatileImage
                 * object was created on one graphics device and then was used
                 * to render to a different graphics device.  Since VolatileImage
                 * objects tend to be very device-specific, this operation might
                 * not work as intended, so the return code from this validate
                 * call would note that incompatibility.  A null or incorrect
                 * value for gc may cause incorrect values to be returned from
                 * <code>validate</code> and may cause later problems with rendering.
                 * @param gc   a <code>GraphicsConfiguration</code> object for this
                 *           image to be validated against.  A null gc implies that the
                 *           validate method should skip the compatibility test.
                 * @return <code>IMAGE_OK</code> if the image did not need validation<BR>
                 *           <code>IMAGE_RESTORED</code> if the image needed restoration.
                 *           Restoration implies that the contents of the image may have
                 *           been affected and the image may need to be re-rendered.<BR>
                 *           <code>IMAGE_INCOMPATIBLE</code> if the image is incompatible
                 *           with the <code>GraphicsConfiguration</code> object passed
                 *           into the <code>validate</code> method.  Incompatibility
                 *           implies that the image may need to be recreated with a
                 *           new <code>Component</code> or
                 *           <code>GraphicsConfiguration</code> in order to get an image
                 *           that can be used successfully with this
                 *           <code>GraphicsConfiguration</code>.
                 *           An incompatible image is not checked for whether restoration
                 *           was necessary, so the state of the image is unchanged
                 *           after a return value of <code>IMAGE_INCOMPATIBLE</code>
                 *           and this return value implies nothing about whether the
                 *           image needs to be restored.
                 * @see java.awt.GraphicsConfiguration
                 * @see java.awt.Component
                 * @see #IMAGE_OK
                 * @see #IMAGE_RESTORED
                 * @see #IMAGE_INCOMPATIBLE
                 */
                // @ts-ignore
                abstract validate(gc: java.awt.GraphicsConfiguration): int
                /**
                 * Returns <code>true</code> if rendering data was lost since last
                 * <code>validate</code> call.  This method should be called by the
                 * application at the end of any series of rendering operations to
                 * or from the image to see whether
                 * the image needs to be validated and the rendering redone.
                 * @return <code>true</code> if the drawing surface needs to be restored;
                 *  <code>false</code> otherwise.
                 */
                // @ts-ignore
                abstract contentsLost(): boolean
                /**
                 * Returns an ImageCapabilities object which can be
                 * inquired as to the specific capabilities of this
                 * VolatileImage.  This would allow programmers to find
                 * out more runtime information on the specific VolatileImage
                 * object that they have created.  For example, the user
                 * might create a VolatileImage but the system may have
                 * no video memory left for creating an image of that
                 * size, so although the object is a VolatileImage, it is
                 * not as accelerated as other VolatileImage objects on
                 * this platform might be.  The user might want that
                 * information to find other solutions to their problem.
                 * @return an <code>ImageCapabilities</code> object that contains
                 *          the capabilities of this <code>VolatileImage</code>.
                 * @since 1.4
                 */
                // @ts-ignore
                abstract getCapabilities(): java.awt.ImageCapabilities
                /**
                 * Returns the transparency.  Returns either OPAQUE, BITMASK,
                 * or TRANSLUCENT.
                 * @return the transparency of this <code>VolatileImage</code>.
                 * @see Transparency#OPAQUE
                 * @see Transparency#BITMASK
                 * @see Transparency#TRANSLUCENT
                 * @since 1.5
                 */
                // @ts-ignore
                getTransparency(): int
            }
        }
    }
}
