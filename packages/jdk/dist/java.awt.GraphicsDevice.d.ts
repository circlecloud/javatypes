declare namespace java {
    namespace awt {
        /**
         * The <code>GraphicsDevice</code> class describes the graphics devices
         * that might be available in a particular graphics environment.  These
         * include screen and printer devices. Note that there can be many screens
         * and many printers in an instance of {@link GraphicsEnvironment}. Each
         * graphics device has one or more {@link GraphicsConfiguration} objects
         * associated with it.  These objects specify the different configurations
         * in which the <code>GraphicsDevice</code> can be used.
         * <p>
         * In a multi-screen environment, the <code>GraphicsConfiguration</code>
         * objects can be used to render components on multiple screens.  The
         * following code sample demonstrates how to create a <code>JFrame</code>
         * object for each <code>GraphicsConfiguration</code> on each screen
         * device in the <code>GraphicsEnvironment</code>:
         * <pre>{@code
         * GraphicsEnvironment ge = GraphicsEnvironment.
         * getLocalGraphicsEnvironment();
         * GraphicsDevice[] gs = ge.getScreenDevices();
         * for (int j = 0; j < gs.length; j++) {
         * GraphicsDevice gd = gs[j];
         * GraphicsConfiguration[] gc =
         * gd.getConfigurations();
         * for (int i=0; i < gc.length; i++) {
         * JFrame f = new
         * JFrame(gs[j].getDefaultConfiguration());
         * Canvas c = new Canvas(gc[i]);
         * Rectangle gcBounds = gc[i].getBounds();
         * int xoffs = gcBounds.x;
         * int yoffs = gcBounds.y;
         * f.getContentPane().add(c);
         * f.setLocation((i*50)+xoffs, (i*60)+yoffs);
         * f.show();
         * }
         * }
         * }</pre>
         * <p>
         * For more information on full-screen exclusive mode API, see the
         * <a href="https://docs.oracle.com/javase/tutorial/extra/fullscreen/index.html">
         * Full-Screen Exclusive Mode API Tutorial</a>.
         * @see GraphicsEnvironment
         * @see GraphicsConfiguration
         */
        // @ts-ignore
        class GraphicsDevice extends java.lang.Object {
            /**
             * This is an abstract class that cannot be instantiated directly.
             * Instances must be obtained from a suitable factory or query method.
             * @see GraphicsEnvironment#getScreenDevices
             * @see GraphicsEnvironment#getDefaultScreenDevice
             * @see GraphicsConfiguration#getDevice
             */
            // @ts-ignore
            constructor()
            /**
             * Device is a raster screen.
             */
            // @ts-ignore
            readonly TYPE_RASTER_SCREEN: number /*int*/
            /**
             * Device is a printer.
             */
            // @ts-ignore
            readonly TYPE_PRINTER: number /*int*/
            /**
             * Device is an image buffer.  This buffer can reside in device
             * or system memory but it is not physically viewable by the user.
             */
            // @ts-ignore
            readonly TYPE_IMAGE_BUFFER: number /*int*/
            /**
             * Returns the type of this <code>GraphicsDevice</code>.
             * @return the type of this <code>GraphicsDevice</code>, which can
             *  either be TYPE_RASTER_SCREEN, TYPE_PRINTER or TYPE_IMAGE_BUFFER.
             * @see #TYPE_RASTER_SCREEN
             * @see #TYPE_PRINTER
             * @see #TYPE_IMAGE_BUFFER
             */
            // @ts-ignore
            abstract getType(): int
            /**
             * Returns the identification string associated with this
             * <code>GraphicsDevice</code>.
             * <p>
             * A particular program might use more than one
             * <code>GraphicsDevice</code> in a <code>GraphicsEnvironment</code>.
             * This method returns a <code>String</code> identifying a
             * particular <code>GraphicsDevice</code> in the local
             * <code>GraphicsEnvironment</code>.  Although there is
             * no public method to set this <code>String</code>, a programmer can
             * use the <code>String</code> for debugging purposes.  Vendors of
             * the Java&trade; Runtime Environment can
             * format the return value of the <code>String</code>.  To determine
             * how to interpret the value of the <code>String</code>, contact the
             * vendor of your Java Runtime.  To find out who the vendor is, from
             * your program, call the
             * {@link System#getProperty(String) getProperty} method of the
             * System class with "java.vendor".
             * @return a <code>String</code> that is the identification
             *  of this <code>GraphicsDevice</code>.
             */
            // @ts-ignore
            abstract getIDstring(): java.lang.String
            /**
             * Returns all of the <code>GraphicsConfiguration</code>
             * objects associated with this <code>GraphicsDevice</code>.
             * @return an array of <code>GraphicsConfiguration</code>
             *  objects that are associated with this
             *  <code>GraphicsDevice</code>.
             */
            // @ts-ignore
            abstract getConfigurations(): java.awt.GraphicsConfiguration[]
            /**
             * Returns the default <code>GraphicsConfiguration</code>
             * associated with this <code>GraphicsDevice</code>.
             * @return the default <code>GraphicsConfiguration</code>
             *  of this <code>GraphicsDevice</code>.
             */
            // @ts-ignore
            abstract getDefaultConfiguration(): java.awt.GraphicsConfiguration
            /**
             * Returns the "best" configuration possible that passes the
             * criteria defined in the {@link GraphicsConfigTemplate}.
             * @param gct the <code>GraphicsConfigTemplate</code> object
             *  used to obtain a valid <code>GraphicsConfiguration</code>
             * @return a <code>GraphicsConfiguration</code> that passes
             *  the criteria defined in the specified
             *  <code>GraphicsConfigTemplate</code>.
             * @see GraphicsConfigTemplate
             */
            // @ts-ignore
            getBestConfiguration(gct: java.awt.GraphicsConfigTemplate): java.awt.GraphicsConfiguration
            /**
             * Returns <code>true</code> if this <code>GraphicsDevice</code>
             * supports full-screen exclusive mode.
             * If a SecurityManager is installed, its
             * <code>checkPermission</code> method will be called
             * with <code>AWTPermission("fullScreenExclusive")</code>.
             * <code>isFullScreenSupported</code> returns true only if
             * that permission is granted.
             * @return whether full-screen exclusive mode is available for
             *  this graphics device
             * @see java.awt.AWTPermission
             * @since 1.4
             */
            // @ts-ignore
            isFullScreenSupported(): boolean
            /**
             * Enter full-screen mode, or return to windowed mode.  The entered
             * full-screen mode may be either exclusive or simulated.  Exclusive
             * mode is only available if <code>isFullScreenSupported</code>
             * returns <code>true</code>.
             * <p>
             * Exclusive mode implies:
             * <ul>
             * <li>Windows cannot overlap the full-screen window.  All other application
             * windows will always appear beneath the full-screen window in the Z-order.
             * <li>There can be only one full-screen window on a device at any time,
             * so calling this method while there is an existing full-screen Window
             * will cause the existing full-screen window to
             * return to windowed mode.
             * <li>Input method windows are disabled.  It is advisable to call
             * <code>Component.enableInputMethods(false)</code> to make a component
             * a non-client of the input method framework.
             * </ul>
             * <p>
             * The simulated full-screen mode places and resizes the window to the maximum
             * possible visible area of the screen. However, the native windowing system
             * may modify the requested geometry-related data, so that the {@code Window} object
             * is placed and sized in a way that corresponds closely to the desktop settings.
             * <p>
             * When entering full-screen mode, if the window to be used as a
             * full-screen window is not visible, this method will make it visible.
             * It will remain visible when returning to windowed mode.
             * <p>
             * When entering full-screen mode, all the translucency effects are reset for
             * the window. Its shape is set to {@code null}, the opacity value is set to
             * 1.0f, and the background color alpha is set to 255 (completely opaque).
             * These values are not restored when returning to windowed mode.
             * <p>
             * It is unspecified and platform-dependent how decorated windows operate
             * in full-screen mode. For this reason, it is recommended to turn off
             * the decorations in a {@code Frame} or {@code Dialog} object by using the
             * {@code setUndecorated} method.
             * <p>
             * When returning to windowed mode from an exclusive full-screen window,
             * any display changes made by calling {@code setDisplayMode} are
             * automatically restored to their original state.
             * @param w a window to use as the full-screen window; {#code null}
             *  if returning to windowed mode.  Some platforms expect the
             *  fullscreen window to be a top-level component (i.e., a {@code Frame});
             *  therefore it is preferable to use a {@code Frame} here rather than a
             *  {@code Window}.
             * @see #isFullScreenSupported
             * @see #getFullScreenWindow
             * @see #setDisplayMode
             * @see Component#enableInputMethods
             * @see Component#setVisible
             * @see Frame#setUndecorated
             * @see Dialog#setUndecorated
             * @since 1.4
             */
            // @ts-ignore
            setFullScreenWindow(w: java.awt.Window): void
            /**
             * Returns the <code>Window</code> object representing the
             * full-screen window if the device is in full-screen mode.
             * @return the full-screen window, or <code>null</code> if the device is
             *  not in full-screen mode.
             * @see #setFullScreenWindow(Window)
             * @since 1.4
             */
            // @ts-ignore
            getFullScreenWindow(): java.awt.Window
            /**
             * Returns <code>true</code> if this <code>GraphicsDevice</code>
             * supports low-level display changes.
             * On some platforms low-level display changes may only be allowed in
             * full-screen exclusive mode (i.e., if {@link #isFullScreenSupported()}
             * returns {@code true} and the application has already entered
             * full-screen mode using {@link #setFullScreenWindow}).
             * @return whether low-level display changes are supported for this
             *  graphics device.
             * @see #isFullScreenSupported
             * @see #setDisplayMode
             * @see #setFullScreenWindow
             * @since 1.4
             */
            // @ts-ignore
            isDisplayChangeSupported(): boolean
            /**
             * Sets the display mode of this graphics device. This is only allowed
             * if {@link #isDisplayChangeSupported()} returns {@code true} and may
             * require first entering full-screen exclusive mode using
             * {@link #setFullScreenWindow} providing that full-screen exclusive mode is
             * supported (i.e., {@link #isFullScreenSupported()} returns
             * {@code true}).
             * <p>
             * The display mode must be one of the display modes returned by
             * {@link #getDisplayModes()}, with one exception: passing a display mode
             * with {@link DisplayMode#REFRESH_RATE_UNKNOWN} refresh rate will result in
             * selecting a display mode from the list of available display modes with
             * matching width, height and bit depth.
             * However, passing a display mode with {@link DisplayMode#BIT_DEPTH_MULTI}
             * for bit depth is only allowed if such mode exists in the list returned by
             * {@link #getDisplayModes()}.
             * <p>
             * Example code:
             * <pre><code>
             * Frame frame;
             * DisplayMode newDisplayMode;
             * GraphicsDevice gd;
             * // create a Frame, select desired DisplayMode from the list of modes
             * // returned by gd.getDisplayModes() ...
             * if (gd.isFullScreenSupported()) {
             * gd.setFullScreenWindow(frame);
             * } else {
             * // proceed in non-full-screen mode
             * frame.setSize(...);
             * frame.setLocation(...);
             * frame.setVisible(true);
             * }
             * if (gd.isDisplayChangeSupported()) {
             * gd.setDisplayMode(newDisplayMode);
             * }
             * </code></pre>
             * @param dm The new display mode of this graphics device.
             * @exception IllegalArgumentException if the <code>DisplayMode</code>
             *  supplied is <code>null</code>, or is not available in the array returned
             *  by <code>getDisplayModes</code>
             * @exception UnsupportedOperationException if
             *  <code>isDisplayChangeSupported</code> returns <code>false</code>
             * @see #getDisplayMode
             * @see #getDisplayModes
             * @see #isDisplayChangeSupported
             * @since 1.4
             */
            // @ts-ignore
            setDisplayMode(dm: java.awt.DisplayMode): void
            /**
             * Returns the current display mode of this
             * <code>GraphicsDevice</code>.
             * The returned display mode is allowed to have a refresh rate
             * {@link DisplayMode#REFRESH_RATE_UNKNOWN} if it is indeterminate.
             * Likewise, the returned display mode is allowed to have a bit depth
             * {@link DisplayMode#BIT_DEPTH_MULTI} if it is indeterminate or if multiple
             * bit depths are supported.
             * @return the current display mode of this graphics device.
             * @see #setDisplayMode(DisplayMode)
             * @since 1.4
             */
            // @ts-ignore
            getDisplayMode(): java.awt.DisplayMode
            /**
             * Returns all display modes available for this
             * <code>GraphicsDevice</code>.
             * The returned display modes are allowed to have a refresh rate
             * {@link DisplayMode#REFRESH_RATE_UNKNOWN} if it is indeterminate.
             * Likewise, the returned display modes are allowed to have a bit depth
             * {@link DisplayMode#BIT_DEPTH_MULTI} if it is indeterminate or if multiple
             * bit depths are supported.
             * @return all of the display modes available for this graphics device.
             * @since 1.4
             */
            // @ts-ignore
            getDisplayModes(): java.awt.DisplayMode[]
            /**
             * This method returns the number of bytes available in
             * accelerated memory on this device.
             * Some images are created or cached
             * in accelerated memory on a first-come,
             * first-served basis.  On some operating systems,
             * this memory is a finite resource.  Calling this method
             * and scheduling the creation and flushing of images carefully may
             * enable applications to make the most efficient use of
             * that finite resource.
             * <br>
             * Note that the number returned is a snapshot of how much
             * memory is available; some images may still have problems
             * being allocated into that memory.  For example, depending
             * on operating system, driver, memory configuration, and
             * thread situations, the full extent of the size reported
             * may not be available for a given image.  There are further
             * inquiry methods on the {@link ImageCapabilities} object
             * associated with a VolatileImage that can be used to determine
             * whether a particular VolatileImage has been created in accelerated
             * memory.
             * @return number of bytes available in accelerated memory.
             *  A negative return value indicates that the amount of accelerated memory
             *  on this GraphicsDevice is indeterminate.
             * @see java.awt.image.VolatileImage#flush
             * @see ImageCapabilities#isAccelerated
             * @since 1.4
             */
            // @ts-ignore
            getAvailableAcceleratedMemory(): int
            /**
             * Returns whether the given level of translucency is supported by
             * this graphics device.
             * @param translucencyKind a kind of translucency support
             * @return whether the given translucency kind is supported
             * @since 1.7
             */
            // @ts-ignore
            isWindowTranslucencySupported(translucencyKind: java.awt.GraphicsDevice.WindowTranslucency): boolean
        }
    }
}
