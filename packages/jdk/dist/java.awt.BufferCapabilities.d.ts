declare namespace java {
    namespace awt {
        /**
         * Capabilities and properties of buffers.
         * @see java.awt.image.BufferStrategy#getCapabilities()
         * @see GraphicsConfiguration#getBufferCapabilities
         * @author Michael Martak
         * @since 1.4
         */
        // @ts-ignore
        class BufferCapabilities extends java.lang.Object implements java.lang.Cloneable {
            /**
             * Creates a new object for specifying buffering capabilities
             * @param frontCaps the capabilities of the front buffer; cannot be
             *  <code>null</code>
             * @param backCaps the capabilities of the back and intermediate buffers;
             *  cannot be <code>null</code>
             * @param flipContents the contents of the back buffer after page-flipping,
             *  <code>null</code> if page flipping is not used (implies blitting)
             * @exception IllegalArgumentException if frontCaps or backCaps are
             *  <code>null</code>
             */
            // @ts-ignore
            constructor(frontCaps: java.awt.ImageCapabilities, backCaps: java.awt.ImageCapabilities, flipContents: java.awt.BufferCapabilities.FlipContents)
            /**
             * @return the image capabilities of the front (displayed) buffer
             */
            // @ts-ignore
            public getFrontBufferCapabilities(): java.awt.ImageCapabilities
            /**
             * @return the image capabilities of all back buffers (intermediate buffers
             *  are considered back buffers)
             */
            // @ts-ignore
            public getBackBufferCapabilities(): java.awt.ImageCapabilities
            /**
             * @return whether or not the buffer strategy uses page flipping; a set of
             *  buffers that uses page flipping
             *  can swap the contents internally between the front buffer and one or
             *  more back buffers by switching the video pointer (or by copying memory
             *  internally).  A non-flipping set of
             *  buffers uses blitting to copy the contents from one buffer to
             *  another; when this is the case, <code>getFlipContents</code> returns
             *  <code>null</code>
             */
            // @ts-ignore
            public isPageFlipping(): boolean
            /**
             * @return the resulting contents of the back buffer after page-flipping.
             *  This value is <code>null</code> when the <code>isPageFlipping</code>
             *  returns <code>false</code>, implying blitting.  It can be one of
             *  <code>FlipContents.UNDEFINED</code>
             *  (the assumed default), <code>FlipContents.BACKGROUND</code>,
             *  <code>FlipContents.PRIOR</code>, or
             *  <code>FlipContents.COPIED</code>.
             * @see #isPageFlipping
             * @see FlipContents#UNDEFINED
             * @see FlipContents#BACKGROUND
             * @see FlipContents#PRIOR
             * @see FlipContents#COPIED
             */
            // @ts-ignore
            public getFlipContents(): java.awt.BufferCapabilities.FlipContents
            /**
             * @return whether page flipping is only available in full-screen mode.  If this
             *  is <code>true</code>, full-screen exclusive mode is required for
             *  page-flipping.
             * @see #isPageFlipping
             * @see GraphicsDevice#setFullScreenWindow
             */
            // @ts-ignore
            public isFullScreenRequired(): boolean
            /**
             * @return whether or not
             *  page flipping can be performed using more than two buffers (one or more
             *  intermediate buffers as well as the front and back buffer).
             * @see #isPageFlipping
             */
            // @ts-ignore
            public isMultiBufferAvailable(): boolean
            /**
             * @return a copy of this BufferCapabilities object.
             */
            // @ts-ignore
            public clone(): any
        }
    }
}
