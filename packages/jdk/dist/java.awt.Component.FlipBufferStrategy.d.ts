declare namespace java {
    namespace awt {
        namespace Component {
            /**
             * Inner class for flipping buffers on a component.  That component must
             * be a <code>Canvas</code> or <code>Window</code>.
             * @see Canvas
             * @see Window
             * @see java.awt.image.BufferStrategy
             * @author Michael Martak
             * @since 1.4
             */
            // @ts-ignore
            class FlipBufferStrategy extends java.awt.image.BufferStrategy {
                /**
                 * Creates a new flipping buffer strategy for this component.
                 * The component must be a <code>Canvas</code> or <code>Window</code>.
                 * @see Canvas
                 * @see Window
                 * @param numBuffers the number of buffers
                 * @param caps the capabilities of the buffers
                 * @exception AWTException if the capabilities supplied could not be
                 *  supported or met
                 * @exception ClassCastException if the component is not a canvas or
                 *  window.
                 * @exception IllegalStateException if the component has no peer
                 * @exception IllegalArgumentException if {#code numBuffers} is less than two,
                 *  or if {@code BufferCapabilities.isPageFlipping} is not
                 *  {@code true}.
                 * @see #createBuffers(int, BufferCapabilities)
                 */
                // @ts-ignore
                constructor(numBuffers: number /*int*/, caps: java.awt.BufferCapabilities)
                /**
                 * The number of buffers
                 */
                // @ts-ignore
                numBuffers: number /*int*/
                /**
                 * The buffering capabilities
                 */
                // @ts-ignore
                caps: java.awt.BufferCapabilities
                /**
                 * The drawing buffer
                 */
                // @ts-ignore
                drawBuffer: java.awt.Image
                /**
                 * The drawing buffer as a volatile image
                 */
                // @ts-ignore
                drawVBuffer: java.awt.image.VolatileImage
                /**
                 * Whether or not the drawing buffer has been recently restored from
                 * a lost state.
                 */
                // @ts-ignore
                validatedContents: boolean
                /**
                 * Creates one or more complex, flipping buffers with the given
                 * capabilities.
                 * @param numBuffers number of buffers to create; must be greater than
                 *  one
                 * @param caps the capabilities of the buffers.
                 *  <code>BufferCapabilities.isPageFlipping</code> must be
                 *  <code>true</code>.
                 * @exception AWTException if the capabilities supplied could not be
                 *  supported or met
                 * @exception IllegalStateException if the component has no peer
                 * @exception IllegalArgumentException if numBuffers is less than two,
                 *  or if <code>BufferCapabilities.isPageFlipping</code> is not
                 *  <code>true</code>.
                 * @see java.awt.BufferCapabilities#isPageFlipping()
                 */
                // @ts-ignore
                createBuffers(numBuffers: number /*int*/, caps: java.awt.BufferCapabilities): void
                /**
                 * @return direct access to the back buffer, as an image.
                 * @exception IllegalStateException if the buffers have not yet
                 *  been created
                 */
                // @ts-ignore
                getBackBuffer(): java.awt.Image
                /**
                 * Flipping moves the contents of the back buffer to the front buffer,
                 * either by copying or by moving the video pointer.
                 * @param flipAction an integer value describing the flipping action
                 *  for the contents of the back buffer.  This should be one of the
                 *  values of the <code>BufferCapabilities.FlipContents</code>
                 *  property.
                 * @exception IllegalStateException if the buffers have not yet
                 *  been created
                 * @see java.awt.BufferCapabilities#getFlipContents()
                 */
                // @ts-ignore
                flip(flipAction: java.awt.BufferCapabilities.FlipContents): void
                /**
                 * Destroys the buffers created through this object
                 */
                // @ts-ignore
                destroyBuffers(): void
                /**
                 * @return the buffering capabilities of this strategy
                 */
                // @ts-ignore
                getCapabilities(): java.awt.BufferCapabilities
                /**
                 * @return the graphics on the drawing buffer.  This method may not
                 *  be synchronized for performance reasons; use of this method by multiple
                 *  threads should be handled at the application level.  Disposal of the
                 *  graphics object must be handled by the application.
                 */
                // @ts-ignore
                getDrawGraphics(): java.awt.Graphics
                /**
                 * Restore the drawing buffer if it has been lost
                 */
                // @ts-ignore
                revalidate(): void
                /**
                 * @return whether the drawing buffer was lost since the last call to
                 *  <code>getDrawGraphics</code>
                 */
                // @ts-ignore
                contentsLost(): boolean
                /**
                 * @return whether the drawing buffer was recently restored from a lost
                 *  state and reinitialized to the default background color (white)
                 */
                // @ts-ignore
                contentsRestored(): boolean
                /**
                 * Makes the next available buffer visible by either blitting or
                 * flipping.
                 */
                // @ts-ignore
                show(): void
                /**
                 * {@inheritDoc}
                 * @since 1.6
                 */
                // @ts-ignore
                dispose(): void
            }
        }
    }
}
