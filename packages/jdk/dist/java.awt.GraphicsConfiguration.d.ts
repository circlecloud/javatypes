declare namespace java {
    namespace awt {
        /**
         * The <code>GraphicsConfiguration</code> class describes the
         * characteristics of a graphics destination such as a printer or monitor.
         * There can be many <code>GraphicsConfiguration</code> objects associated
         * with a single graphics device, representing different drawing modes or
         * capabilities.  The corresponding native structure will vary from platform
         * to platform.  For example, on X11 windowing systems,
         * each visual is a different <code>GraphicsConfiguration</code>.
         * On Microsoft Windows, <code>GraphicsConfiguration</code>s represent
         * PixelFormats available in the current resolution and color depth.
         * <p>
         * In a virtual device multi-screen environment in which the desktop
         * area could span multiple physical screen devices, the bounds of the
         * <code>GraphicsConfiguration</code> objects are relative to the
         * virtual coordinate system.  When setting the location of a
         * component, use {@link #getBounds() getBounds} to get the bounds of
         * the desired <code>GraphicsConfiguration</code> and offset the location
         * with the coordinates of the <code>GraphicsConfiguration</code>,
         * as the following code sample illustrates:
         * </p>
         * <pre>
         * Frame f = new Frame(gc);  // where gc is a GraphicsConfiguration
         * Rectangle bounds = gc.getBounds();
         * f.setLocation(10 + bounds.x, 10 + bounds.y); </pre>
         * <p>
         * To determine if your environment is a virtual device
         * environment, call <code>getBounds</code> on all of the
         * <code>GraphicsConfiguration</code> objects in your system.  If
         * any of the origins of the returned bounds is not (0,&nbsp;0),
         * your environment is a virtual device environment.
         * <p>
         * You can also use <code>getBounds</code> to determine the bounds
         * of the virtual device.  To do this, first call <code>getBounds</code> on all
         * of the <code>GraphicsConfiguration</code> objects in your
         * system.  Then calculate the union of all of the bounds returned
         * from the calls to <code>getBounds</code>.  The union is the
         * bounds of the virtual device.  The following code sample
         * calculates the bounds of the virtual device.
         * <pre>{@code
         * Rectangle virtualBounds = new Rectangle();
         * GraphicsEnvironment ge = GraphicsEnvironment.
         * getLocalGraphicsEnvironment();
         * GraphicsDevice[] gs =
         * ge.getScreenDevices();
         * for (int j = 0; j < gs.length; j++) {
         * GraphicsDevice gd = gs[j];
         * GraphicsConfiguration[] gc =
         * gd.getConfigurations();
         * for (int i=0; i < gc.length; i++) {
         * virtualBounds =
         * virtualBounds.union(gc[i].getBounds());
         * }
         * } }</pre>
         * @see Window
         * @see Frame
         * @see GraphicsEnvironment
         * @see GraphicsDevice
         */
        // @ts-ignore
        abstract class GraphicsConfiguration extends java.lang.Object {
            /**
             * This is an abstract class that cannot be instantiated directly.
             * Instances must be obtained from a suitable factory or query method.
             * @see GraphicsDevice#getConfigurations
             * @see GraphicsDevice#getDefaultConfiguration
             * @see GraphicsDevice#getBestConfiguration
             * @see Graphics2D#getDeviceConfiguration
             */
            // @ts-ignore
            constructor()
            /**
             * Returns the {@link GraphicsDevice} associated with this
             * <code>GraphicsConfiguration</code>.
             * @return a <code>GraphicsDevice</code> object that is
             *  associated with this <code>GraphicsConfiguration</code>.
             */
            // @ts-ignore
            public abstract getDevice(): java.awt.GraphicsDevice
            /**
             * Returns a {@link BufferedImage} with a data layout and color model
             * compatible with this <code>GraphicsConfiguration</code>.  This
             * method has nothing to do with memory-mapping
             * a device.  The returned <code>BufferedImage</code> has
             * a layout and color model that is closest to this native device
             * configuration and can therefore be optimally blitted to this
             * device.
             * @param width the width of the returned <code>BufferedImage</code>
             * @param height the height of the returned <code>BufferedImage</code>
             * @return a <code>BufferedImage</code> whose data layout and color
             *  model is compatible with this <code>GraphicsConfiguration</code>.
             */
            // @ts-ignore
            public createCompatibleImage(width: number /*int*/, height: number /*int*/): java.awt.image.BufferedImage
            /**
             * Returns a <code>BufferedImage</code> that supports the specified
             * transparency and has a data layout and color model
             * compatible with this <code>GraphicsConfiguration</code>.  This
             * method has nothing to do with memory-mapping
             * a device. The returned <code>BufferedImage</code> has a layout and
             * color model that can be optimally blitted to a device
             * with this <code>GraphicsConfiguration</code>.
             * @param width the width of the returned <code>BufferedImage</code>
             * @param height the height of the returned <code>BufferedImage</code>
             * @param transparency the specified transparency mode
             * @return a <code>BufferedImage</code> whose data layout and color
             *  model is compatible with this <code>GraphicsConfiguration</code>
             *  and also supports the specified transparency.
             * @throws IllegalArgumentException if the transparency is not a valid value
             * @see Transparency#OPAQUE
             * @see Transparency#BITMASK
             * @see Transparency#TRANSLUCENT
             */
            // @ts-ignore
            public createCompatibleImage(width: number /*int*/, height: number /*int*/, transparency: number /*int*/): java.awt.image.BufferedImage
            /**
             * Returns a {@link VolatileImage} with a data layout and color model
             * compatible with this <code>GraphicsConfiguration</code>.
             * The returned <code>VolatileImage</code>
             * may have data that is stored optimally for the underlying graphics
             * device and may therefore benefit from platform-specific rendering
             * acceleration.
             * @param width the width of the returned <code>VolatileImage</code>
             * @param height the height of the returned <code>VolatileImage</code>
             * @return a <code>VolatileImage</code> whose data layout and color
             *  model is compatible with this <code>GraphicsConfiguration</code>.
             * @see Component#createVolatileImage(int, int)
             * @since 1.4
             */
            // @ts-ignore
            public createCompatibleVolatileImage(width: number /*int*/, height: number /*int*/): java.awt.image.VolatileImage
            /**
             * Returns a {@link VolatileImage} with a data layout and color model
             * compatible with this <code>GraphicsConfiguration</code>.
             * The returned <code>VolatileImage</code>
             * may have data that is stored optimally for the underlying graphics
             * device and may therefore benefit from platform-specific rendering
             * acceleration.
             * @param width the width of the returned <code>VolatileImage</code>
             * @param height the height of the returned <code>VolatileImage</code>
             * @param transparency the specified transparency mode
             * @return a <code>VolatileImage</code> whose data layout and color
             *  model is compatible with this <code>GraphicsConfiguration</code>.
             * @throws IllegalArgumentException if the transparency is not a valid value
             * @see Transparency#OPAQUE
             * @see Transparency#BITMASK
             * @see Transparency#TRANSLUCENT
             * @see Component#createVolatileImage(int, int)
             * @since 1.5
             */
            // @ts-ignore
            public createCompatibleVolatileImage(width: number /*int*/, height: number /*int*/, transparency: number /*int*/): java.awt.image.VolatileImage
            /**
             * Returns a {@link VolatileImage} with a data layout and color model
             * compatible with this <code>GraphicsConfiguration</code>, using
             * the specified image capabilities.
             * If the <code>caps</code> parameter is null, it is effectively ignored
             * and this method will create a VolatileImage without regard to
             * <code>ImageCapabilities</code> constraints.
             * The returned <code>VolatileImage</code> has
             * a layout and color model that is closest to this native device
             * configuration and can therefore be optimally blitted to this
             * device.
             * @return a <code>VolatileImage</code> whose data layout and color
             *  model is compatible with this <code>GraphicsConfiguration</code>.
             * @param width the width of the returned <code>VolatileImage</code>
             * @param height the height of the returned <code>VolatileImage</code>
             * @param caps the image capabilities
             * @exception AWTException if the supplied image capabilities could not
             *  be met by this graphics configuration
             * @since 1.4
             */
            // @ts-ignore
            public createCompatibleVolatileImage(width: number /*int*/, height: number /*int*/, caps: java.awt.ImageCapabilities): java.awt.image.VolatileImage
            /**
             * Returns a {@link VolatileImage} with a data layout and color model
             * compatible with this <code>GraphicsConfiguration</code>, using
             * the specified image capabilities and transparency value.
             * If the <code>caps</code> parameter is null, it is effectively ignored
             * and this method will create a VolatileImage without regard to
             * <code>ImageCapabilities</code> constraints.
             * The returned <code>VolatileImage</code> has
             * a layout and color model that is closest to this native device
             * configuration and can therefore be optimally blitted to this
             * device.
             * @param width the width of the returned <code>VolatileImage</code>
             * @param height the height of the returned <code>VolatileImage</code>
             * @param caps the image capabilities
             * @param transparency the specified transparency mode
             * @return a <code>VolatileImage</code> whose data layout and color
             *  model is compatible with this <code>GraphicsConfiguration</code>.
             * @see Transparency#OPAQUE
             * @see Transparency#BITMASK
             * @see Transparency#TRANSLUCENT
             * @throws IllegalArgumentException if the transparency is not a valid value
             * @exception AWTException if the supplied image capabilities could not
             *  be met by this graphics configuration
             * @see Component#createVolatileImage(int, int)
             * @since 1.5
             */
            // @ts-ignore
            public createCompatibleVolatileImage(width: number /*int*/, height: number /*int*/, caps: java.awt.ImageCapabilities, transparency: number /*int*/): java.awt.image.VolatileImage
            /**
             * Returns the {@link ColorModel} associated with this
             * <code>GraphicsConfiguration</code>.
             * @return a <code>ColorModel</code> object that is associated with
             *  this <code>GraphicsConfiguration</code>.
             */
            // @ts-ignore
            public abstract getColorModel(): java.awt.image.ColorModel
            /**
             * Returns the <code>ColorModel</code> associated with this
             * <code>GraphicsConfiguration</code> that supports the specified
             * transparency.
             * @param transparency the specified transparency mode
             * @return a <code>ColorModel</code> object that is associated with
             *  this <code>GraphicsConfiguration</code> and supports the
             *  specified transparency or null if the transparency is not a valid
             *  value.
             * @see Transparency#OPAQUE
             * @see Transparency#BITMASK
             * @see Transparency#TRANSLUCENT
             */
            // @ts-ignore
            public abstract getColorModel(transparency: number /*int*/): java.awt.image.ColorModel
            /**
             * Returns the default {@link AffineTransform} for this
             * <code>GraphicsConfiguration</code>. This
             * <code>AffineTransform</code> is typically the Identity transform
             * for most normal screens.  The default <code>AffineTransform</code>
             * maps coordinates onto the device such that 72 user space
             * coordinate units measure approximately 1 inch in device
             * space.  The normalizing transform can be used to make
             * this mapping more exact.  Coordinates in the coordinate space
             * defined by the default <code>AffineTransform</code> for screen and
             * printer devices have the origin in the upper left-hand corner of
             * the target region of the device, with X coordinates
             * increasing to the right and Y coordinates increasing downwards.
             * For image buffers not associated with a device, such as those not
             * created by <code>createCompatibleImage</code>,
             * this <code>AffineTransform</code> is the Identity transform.
             * @return the default <code>AffineTransform</code> for this
             *  <code>GraphicsConfiguration</code>.
             */
            // @ts-ignore
            public abstract getDefaultTransform(): java.awt.geom.AffineTransform
            /**
             * Returns a <code>AffineTransform</code> that can be concatenated
             * with the default <code>AffineTransform</code>
             * of a <code>GraphicsConfiguration</code> so that 72 units in user
             * space equals 1 inch in device space.
             * <p>
             * For a particular {@link Graphics2D}, g, one
             * can reset the transformation to create
             * such a mapping by using the following pseudocode:
             * <pre>
             * GraphicsConfiguration gc = g.getDeviceConfiguration();
             * g.setTransform(gc.getDefaultTransform());
             * g.transform(gc.getNormalizingTransform());
             * </pre>
             * Note that sometimes this <code>AffineTransform</code> is identity,
             * such as for printers or metafile output, and that this
             * <code>AffineTransform</code> is only as accurate as the information
             * supplied by the underlying system.  For image buffers not
             * associated with a device, such as those not created by
             * <code>createCompatibleImage</code>, this
             * <code>AffineTransform</code> is the Identity transform
             * since there is no valid distance measurement.
             * @return an <code>AffineTransform</code> to concatenate to the
             *  default <code>AffineTransform</code> so that 72 units in user
             *  space is mapped to 1 inch in device space.
             */
            // @ts-ignore
            public abstract getNormalizingTransform(): java.awt.geom.AffineTransform
            /**
             * Returns the bounds of the <code>GraphicsConfiguration</code>
             * in the device coordinates. In a multi-screen environment
             * with a virtual device, the bounds can have negative X
             * or Y origins.
             * @return the bounds of the area covered by this
             *  <code>GraphicsConfiguration</code>.
             * @since 1.3
             */
            // @ts-ignore
            public abstract getBounds(): java.awt.Rectangle
            /**
             * Returns the buffering capabilities of this
             * <code>GraphicsConfiguration</code>.
             * @return the buffering capabilities of this graphics
             *  configuration object
             * @since 1.4
             */
            // @ts-ignore
            public getBufferCapabilities(): java.awt.BufferCapabilities
            /**
             * Returns the image capabilities of this
             * <code>GraphicsConfiguration</code>.
             * @return the image capabilities of this graphics
             *  configuration object
             * @since 1.4
             */
            // @ts-ignore
            public getImageCapabilities(): java.awt.ImageCapabilities
            /**
             * Returns whether this {@code GraphicsConfiguration} supports
             * the {@link GraphicsDevice.WindowTranslucency#PERPIXEL_TRANSLUCENT
             * PERPIXEL_TRANSLUCENT} kind of translucency.
             * @return whether the given GraphicsConfiguration supports
             *          the translucency effects.
             * @see Window#setBackground(Color)
             * @since 1.7
             */
            // @ts-ignore
            public isTranslucencyCapable(): boolean
        }
    }
}
