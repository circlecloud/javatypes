declare namespace java {
    namespace awt {
        /**
         * The <code>DisplayMode</code> class encapsulates the bit depth, height,
         * width, and refresh rate of a <code>GraphicsDevice</code>. The ability to
         * change graphics device's display mode is platform- and
         * configuration-dependent and may not always be available
         * (see {@link GraphicsDevice#isDisplayChangeSupported}).
         * <p>
         * For more information on full-screen exclusive mode API, see the
         * <a href="https://docs.oracle.com/javase/tutorial/extra/fullscreen/index.html">
         * Full-Screen Exclusive Mode API Tutorial</a>.
         * @see GraphicsDevice
         * @see GraphicsDevice#isDisplayChangeSupported
         * @see GraphicsDevice#getDisplayModes
         * @see GraphicsDevice#setDisplayMode
         * @author Michael Martak
         * @since 1.4
         */
        // @ts-ignore
        class DisplayMode extends java.lang.Object {
            /**
             * Create a new display mode object with the supplied parameters.
             * @param width the width of the display, in pixels
             * @param height the height of the display, in pixels
             * @param bitDepth the bit depth of the display, in bits per
             *         pixel.  This can be <code>BIT_DEPTH_MULTI</code> if multiple
             *         bit depths are available.
             * @param refreshRate the refresh rate of the display, in hertz.
             *         This can be <code>REFRESH_RATE_UNKNOWN</code> if the
             *         information is not available.
             * @see #BIT_DEPTH_MULTI
             * @see #REFRESH_RATE_UNKNOWN
             */
            // @ts-ignore
            constructor(width: number /*int*/, height: number /*int*/, bitDepth: number /*int*/, refreshRate: number /*int*/)
            /**
             * Value of the bit depth if multiple bit depths are supported in this
             * display mode.
             * @see #getBitDepth
             */
            // @ts-ignore
            readonly BIT_DEPTH_MULTI: number /*int*/
            /**
             * Value of the refresh rate if not known.
             * @see #getRefreshRate
             */
            // @ts-ignore
            readonly REFRESH_RATE_UNKNOWN: number /*int*/
            /**
             * Returns the height of the display, in pixels.
             * @return the height of the display, in pixels
             */
            // @ts-ignore
            getHeight(): int
            /**
             * Returns the width of the display, in pixels.
             * @return the width of the display, in pixels
             */
            // @ts-ignore
            getWidth(): int
            /**
             * Returns the bit depth of the display, in bits per pixel.  This may be
             * <code>BIT_DEPTH_MULTI</code> if multiple bit depths are supported in
             * this display mode.
             * @return the bit depth of the display, in bits per pixel.
             * @see #BIT_DEPTH_MULTI
             */
            // @ts-ignore
            getBitDepth(): int
            /**
             * Returns the refresh rate of the display, in hertz.  This may be
             * <code>REFRESH_RATE_UNKNOWN</code> if the information is not available.
             * @return the refresh rate of the display, in hertz.
             * @see #REFRESH_RATE_UNKNOWN
             */
            // @ts-ignore
            getRefreshRate(): int
            /**
             * Returns whether the two display modes are equal.
             * @return whether the two display modes are equal
             */
            // @ts-ignore
            equals(dm: java.awt.DisplayMode): boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            equals(dm: any): boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            hashCode(): int
        }
    }
}
