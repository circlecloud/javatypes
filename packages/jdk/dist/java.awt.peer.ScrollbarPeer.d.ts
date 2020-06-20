declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link Scrollbar}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface ScrollbarPeer extends java.awt.peer.ComponentPeer {
                /**
                 * Sets the parameters for the scrollbar.
                 * @param value the current value
                 * @param visible how much of the whole scale is visible
                 * @param minimum the minimum value
                 * @param maximum the maximum value
                 * @see Scrollbar#setValues(int, int, int, int)
                 */
                // @ts-ignore
                setValues(value: number /*int*/, visible: number /*int*/, minimum: number /*int*/, maximum: number /*int*/): void
                /**
                 * Sets the line increment of the scrollbar.
                 * @param l the line increment
                 * @see Scrollbar#setLineIncrement(int)
                 */
                // @ts-ignore
                setLineIncrement(l: number /*int*/): void
                /**
                 * Sets the page increment of the scrollbar.
                 * @param l the page increment
                 * @see Scrollbar#setPageIncrement(int)
                 */
                // @ts-ignore
                setPageIncrement(l: number /*int*/): void
            }
        }
    }
}
