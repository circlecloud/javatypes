declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link ScrollPane}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface ScrollPanePeer extends java.awt.peer.ContainerPeer {
                /**
                 * Returns the height of the horizontal scroll bar.
                 * @return the height of the horizontal scroll bar
                 * @see ScrollPane#getHScrollbarHeight()
                 */
                // @ts-ignore
                getHScrollbarHeight(): int
                /**
                 * Returns the width of the vertical scroll bar.
                 * @return the width of the vertical scroll bar
                 * @see ScrollPane#getVScrollbarWidth()
                 */
                // @ts-ignore
                getVScrollbarWidth(): int
                /**
                 * Sets the scroll position of the child.
                 * @param x the X coordinate of the scroll position
                 * @param y the Y coordinate of the scroll position
                 * @see ScrollPane#setScrollPosition(int, int)
                 */
                // @ts-ignore
                setScrollPosition(x: number /*int*/, y: number /*int*/): void
                /**
                 * Called when the child component changes its size.
                 * @param w the new width of the child component
                 * @param h the new height of the child component
                 * @see ScrollPane#layout()
                 */
                // @ts-ignore
                childResized(w: number /*int*/, h: number /*int*/): void
                /**
                 * Sets the unit increment of one of the scroll pane's adjustables.
                 * @param adj the scroll pane adjustable object
                 * @param u the unit increment
                 * @see ScrollPaneAdjustable#setUnitIncrement(int)
                 */
                // @ts-ignore
                setUnitIncrement(adj: java.awt.Adjustable, u: number /*int*/): void
                /**
                 * Sets the value for one of the scroll pane's adjustables.
                 * @param adj the scroll pane adjustable object
                 * @param v the value to set
                 */
                // @ts-ignore
                setValue(adj: java.awt.Adjustable, v: number /*int*/): void
            }
        }
    }
}
