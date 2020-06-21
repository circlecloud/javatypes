declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link Frame}. This adds a couple of frame specific
             * methods to the {@link WindowPeer} interface.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface FramePeer extends java.awt.peer.WindowPeer {
                /**
                 * Sets the title on the frame.
                 * @param title the title to set
                 * @see Frame#setTitle(String)
                 */
                // @ts-ignore
                setTitle(title: java.lang.String | string): void
                /**
                 * Sets the menu bar for the frame.
                 * @param mb the menu bar to set
                 * @see Frame#setMenuBar(MenuBar)
                 */
                // @ts-ignore
                setMenuBar(mb: java.awt.MenuBar): void
                /**
                 * Sets if the frame should be resizable or not.
                 * @param resizeable {#code true} when the frame should be resizable,
                 *         {@code false} if not
                 * @see Frame#setResizable(boolean)
                 */
                // @ts-ignore
                setResizable(resizeable: boolean): void
                /**
                 * Changes the state of the frame.
                 * @param state the new state
                 * @see Frame#setExtendedState(int)
                 */
                // @ts-ignore
                setState(state: number /*int*/): void
                /**
                 * Returns the current state of the frame.
                 * @return the current state of the frame
                 * @see Frame#getExtendedState()
                 */
                // @ts-ignore
                getState(): number /*int*/
                /**
                 * Sets the bounds of the frame when it becomes maximized.
                 * @param bounds the maximized bounds of the frame
                 * @see Frame#setMaximizedBounds(Rectangle)
                 */
                // @ts-ignore
                setMaximizedBounds(bounds: java.awt.Rectangle): void
                /**
                 * Sets the size and location for embedded frames. (On embedded frames,
                 * setLocation() and setBounds() always set the frame to (0,0) for
                 * backwards compatibility.
                 * @param x the X location
                 * @param y the Y location
                 * @param width the width of the frame
                 * @param height the height of the frame
                 * @see EmbeddedFrame#setBoundsPrivate(int, int, int, int)
                 */
                // @ts-ignore
                setBoundsPrivate(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
                /**
                 * Returns the size and location for embedded frames. (On embedded frames,
                 * setLocation() and setBounds() always set the frame to (0,0) for
                 * backwards compatibility.
                 * @return the bounds of an embedded frame
                 * @see EmbeddedFrame#getBoundsPrivate()
                 */
                // @ts-ignore
                getBoundsPrivate(): java.awt.Rectangle
                /**
                 * Requests the peer to emulate window activation.
                 * @param activate activate or deactivate the window
                 */
                // @ts-ignore
                emulateActivation(activate: boolean): void
            }
        }
    }
}
