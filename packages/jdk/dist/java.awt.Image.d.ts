declare namespace java {
    namespace awt {
        /**
         * The abstract class <code>Image</code> is the superclass of all
         * classes that represent graphical images. The image must be
         * obtained in a platform-specific manner.
         * @author Sami Shaio
         * @author Arthur van Hoff
         * @since JDK1.0
         */
        // @ts-ignore
        class Image extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Priority for accelerating this image.  Subclasses are free to
             * set different default priorities and applications are free to
             * set the priority for specific images via the
             * <code>setAccelerationPriority(float)</code> method.
             * @since 1.5
             */
            // @ts-ignore
            accelerationPriority: number /*float*/
            /**
             * The <code>UndefinedProperty</code> object should be returned whenever a
             * property which was not defined for a particular image is fetched.
             */
            // @ts-ignore
            readonly UndefinedProperty: any
            /**
             * Use the default image-scaling algorithm.
             * @since JDK1.1
             */
            // @ts-ignore
            readonly SCALE_DEFAULT: number /*int*/
            /**
             * Choose an image-scaling algorithm that gives higher priority
             * to scaling speed than smoothness of the scaled image.
             * @since JDK1.1
             */
            // @ts-ignore
            readonly SCALE_FAST: number /*int*/
            /**
             * Choose an image-scaling algorithm that gives higher priority
             * to image smoothness than scaling speed.
             * @since JDK1.1
             */
            // @ts-ignore
            readonly SCALE_SMOOTH: number /*int*/
            /**
             * Use the image scaling algorithm embodied in the
             * <code>ReplicateScaleFilter</code> class.
             * The <code>Image</code> object is free to substitute a different filter
             * that performs the same algorithm yet integrates more efficiently
             * into the imaging infrastructure supplied by the toolkit.
             * @see java.awt.image.ReplicateScaleFilter
             * @since JDK1.1
             */
            // @ts-ignore
            readonly SCALE_REPLICATE: number /*int*/
            /**
             * Use the Area Averaging image scaling algorithm.  The
             * image object is free to substitute a different filter that
             * performs the same algorithm yet integrates more efficiently
             * into the image infrastructure supplied by the toolkit.
             * @see java.awt.image.AreaAveragingScaleFilter
             * @since JDK1.1
             */
            // @ts-ignore
            readonly SCALE_AREA_AVERAGING: number /*int*/
            /**
             * Determines the width of the image. If the width is not yet known,
             * this method returns <code>-1</code> and the specified
             * <code>ImageObserver</code> object is notified later.
             * @param observer   an object waiting for the image to be loaded.
             * @return the width of this image, or <code>-1</code>
             *                    if the width is not yet known.
             * @see java.awt.Image#getHeight
             * @see java.awt.image.ImageObserver
             */
            // @ts-ignore
            abstract getWidth(observer: java.awt.image.ImageObserver): int
            /**
             * Determines the height of the image. If the height is not yet known,
             * this method returns <code>-1</code> and the specified
             * <code>ImageObserver</code> object is notified later.
             * @param observer   an object waiting for the image to be loaded.
             * @return the height of this image, or <code>-1</code>
             *                    if the height is not yet known.
             * @see java.awt.Image#getWidth
             * @see java.awt.image.ImageObserver
             */
            // @ts-ignore
            abstract getHeight(observer: java.awt.image.ImageObserver): int
            /**
             * Gets the object that produces the pixels for the image.
             * This method is called by the image filtering classes and by
             * methods that perform image conversion and scaling.
             * @return the image producer that produces the pixels
             *                                   for this image.
             * @see java.awt.image.ImageProducer
             */
            // @ts-ignore
            abstract getSource(): java.awt.image.ImageProducer
            /**
             * Creates a graphics context for drawing to an off-screen image.
             * This method can only be called for off-screen images.
             * @return a graphics context to draw to the off-screen image.
             * @exception UnsupportedOperationException if called for a
             *             non-off-screen image.
             * @see java.awt.Graphics
             * @see java.awt.Component#createImage(int, int)
             */
            // @ts-ignore
            abstract getGraphics(): java.awt.Graphics
            /**
             * Gets a property of this image by name.
             * <p>
             * Individual property names are defined by the various image
             * formats. If a property is not defined for a particular image, this
             * method returns the <code>UndefinedProperty</code> object.
             * <p>
             * If the properties for this image are not yet known, this method
             * returns <code>null</code>, and the <code>ImageObserver</code>
             * object is notified later.
             * <p>
             * The property name <code>"comment"</code> should be used to store
             * an optional comment which can be presented to the application as a
             * description of the image, its source, or its author.
             * @param name   a property name.
             * @param observer   an object waiting for this image to be loaded.
             * @return the value of the named property.
             * @throws NullPointerException if the property name is null.
             * @see java.awt.image.ImageObserver
             * @see java.awt.Image#UndefinedProperty
             */
            // @ts-ignore
            abstract getProperty(name: string, observer: java.awt.image.ImageObserver): java.lang.Object
            /**
             * Creates a scaled version of this image.
             * A new <code>Image</code> object is returned which will render
             * the image at the specified <code>width</code> and
             * <code>height</code> by default.  The new <code>Image</code> object
             * may be loaded asynchronously even if the original source image
             * has already been loaded completely.
             * <p>
             * If either <code>width</code>
             * or <code>height</code> is a negative number then a value is
             * substituted to maintain the aspect ratio of the original image
             * dimensions. If both <code>width</code> and <code>height</code>
             * are negative, then the original image dimensions are used.
             * @param width the width to which to scale the image.
             * @param height the height to which to scale the image.
             * @param hints flags to indicate the type of algorithm to use
             *  for image resampling.
             * @return a scaled version of the image.
             * @exception IllegalArgumentException if <code>width</code>
             *              or <code>height</code> is zero.
             * @see java.awt.Image#SCALE_DEFAULT
             * @see java.awt.Image#SCALE_FAST
             * @see java.awt.Image#SCALE_SMOOTH
             * @see java.awt.Image#SCALE_REPLICATE
             * @see java.awt.Image#SCALE_AREA_AVERAGING
             * @since JDK1.1
             */
            // @ts-ignore
            getScaledInstance(width: number /*int*/, height: number /*int*/, hints: number /*int*/): java.awt.Image
            /**
             * Flushes all reconstructable resources being used by this Image object.
             * This includes any pixel data that is being cached for rendering to
             * the screen as well as any system resources that are being used
             * to store data or pixels for the image if they can be recreated.
             * The image is reset to a state similar to when it was first created
             * so that if it is again rendered, the image data will have to be
             * recreated or fetched again from its source.
             * <p>
             * Examples of how this method affects specific types of Image object:
             * <ul>
             * <li>
             * BufferedImage objects leave the primary Raster which stores their
             * pixels untouched, but flush any information cached about those
             * pixels such as copies uploaded to the display hardware for
             * accelerated blits.
             * <li>
             * Image objects created by the Component methods which take a
             * width and height leave their primary buffer of pixels untouched,
             * but have all cached information released much like is done for
             * BufferedImage objects.
             * <li>
             * VolatileImage objects release all of their pixel resources
             * including their primary copy which is typically stored on
             * the display hardware where resources are scarce.
             * These objects can later be restored using their
             * {@link java.awt.image.VolatileImage#validate validate}
             * method.
             * <li>
             * Image objects created by the Toolkit and Component classes which are
             * loaded from files, URLs or produced by an {@link ImageProducer}
             * are unloaded and all local resources are released.
             * These objects can later be reloaded from their original source
             * as needed when they are rendered, just as when they were first
             * created.
             * </ul>
             */
            // @ts-ignore
            flush(): void
            /**
             * Returns an ImageCapabilities object which can be
             * inquired as to the capabilities of this
             * Image on the specified GraphicsConfiguration.
             * This allows programmers to find
             * out more runtime information on the specific Image
             * object that they have created.  For example, the user
             * might create a BufferedImage but the system may have
             * no video memory left for creating an image of that
             * size on the given GraphicsConfiguration, so although the object
             * may be acceleratable in general, it
             * does not have that capability on this GraphicsConfiguration.
             * @param gc a <code>GraphicsConfiguration</code> object.  A value of null
             *  for this parameter will result in getting the image capabilities
             *  for the default <code>GraphicsConfiguration</code>.
             * @return an <code>ImageCapabilities</code> object that contains
             *  the capabilities of this <code>Image</code> on the specified
             *  GraphicsConfiguration.
             * @see java.awt.image.VolatileImage#getCapabilities()
             *  VolatileImage.getCapabilities()
             * @since 1.5
             */
            // @ts-ignore
            getCapabilities(gc: java.awt.GraphicsConfiguration): java.awt.ImageCapabilities
            /**
             * Sets a hint for this image about how important acceleration is.
             * This priority hint is used to compare to the priorities of other
             * Image objects when determining how to use scarce acceleration
             * resources such as video memory.  When and if it is possible to
             * accelerate this Image, if there are not enough resources available
             * to provide that acceleration but enough can be freed up by
             * de-accelerating some other image of lower priority, then that other
             * Image may be de-accelerated in deference to this one.  Images
             * that have the same priority take up resources on a first-come,
             * first-served basis.
             * @param priority a value between 0 and 1, inclusive, where higher
             *  values indicate more importance for acceleration.  A value of 0
             *  means that this Image should never be accelerated.  Other values
             *  are used simply to determine acceleration priority relative to other
             *  Images.
             * @throws IllegalArgumentException if <code>priority</code> is less
             *  than zero or greater than 1.
             * @since 1.5
             */
            // @ts-ignore
            setAccelerationPriority(priority: number /*float*/): void
            /**
             * Returns the current value of the acceleration priority hint.
             * @see #setAccelerationPriority(float priority) setAccelerationPriority
             * @return value between 0 and 1, inclusive, which represents the current
             *  priority value
             * @since 1.5
             */
            // @ts-ignore
            getAccelerationPriority(): float
        }
    }
}
