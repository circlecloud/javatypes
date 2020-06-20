declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link Canvas}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface CanvasPeer extends java.awt.peer.ComponentPeer {
                /**
                 * Requests a GC that best suits this Canvas. The returned GC may differ
                 * from the requested GC passed as the argument to this method. This method
                 * must return a non-null value (given the argument is non-null as well).
                 * @since 1.7
                 */
                // @ts-ignore
                getAppropriateGraphicsConfiguration(gc: java.awt.GraphicsConfiguration): java.awt.GraphicsConfiguration
            }
        }
    }
}
