declare namespace java {
    namespace awt {
        namespace Component {
            /**
             * Inner class for blitting offscreen surfaces to a component.
             * @author Michael Martak
             * @since 1.4
             */
            // @ts-ignore
            class BltBufferStrategy extends java.awt.image.BufferStrategy {
                /**
                 * Creates a new blt buffer strategy around a component
                 * @param numBuffers number of buffers to create, including the
                 *  front buffer
                 * @param caps the capabilities of the buffers
                 */
                // @ts-ignore
                constructor(numBuffers: number /*int*/, caps: java.awt.BufferCapabilities)
                /**
                 * The buffering capabilities
                 */
                // @ts-ignore
                caps: java.awt.BufferCapabilities
                /**
                 * The back buffers
                 */
                // @ts-ignore
                backBuffers: java.awt.image.VolatileImage[]
                /**
                 * Whether or not the drawing buffer has been recently restored from
                 * a lost state.
                 */
                // @ts-ignore
                validatedContents: boolean
                /**
                 * Size of the back buffers
                 */
                // @ts-ignore
                width: number /*int*/
                // @ts-ignore
                height: number /*int*/
                /**
                 * {@inheritDoc}
                 * @since 1.6
                 */
                // @ts-ignore
                public dispose(): void
                /**
                 * Creates the back buffers
                 */
                // @ts-ignore
                createBackBuffers(numBuffers: number /*int*/): void
                /**
                 * @return the buffering capabilities of this strategy
                 */
                // @ts-ignore
                public getCapabilities(): java.awt.BufferCapabilities
                /**
                 * @return the draw graphics
                 */
                // @ts-ignore
                public getDrawGraphics(): java.awt.Graphics
                /**
                 * Makes the next available buffer visible.
                 */
                // @ts-ignore
                public show(): void
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
                public contentsLost(): boolean
                /**
                 * @return whether the drawing buffer was recently restored from a lost
                 *  state and reinitialized to the default background color (white)
                 */
                // @ts-ignore
                public contentsRestored(): boolean
            }
        }
    }
}
