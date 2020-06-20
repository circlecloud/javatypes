declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link Container}. This is the parent interface
             * for all container like widgets.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface ContainerPeer extends java.awt.peer.ComponentPeer {
                /**
                 * Returns the insets of this container. Insets usually is the space that
                 * is occupied by things like borders.
                 * @return the insets of this container
                 */
                // @ts-ignore
                getInsets(): java.awt.Insets
                /**
                 * Notifies the peer that validation of the component tree is about to
                 * begin.
                 * @see Container#validate()
                 */
                // @ts-ignore
                beginValidate(): void
                /**
                 * Notifies the peer that validation of the component tree is finished.
                 * @see Container#validate()
                 */
                // @ts-ignore
                endValidate(): void
                /**
                 * Notifies the peer that layout is about to begin. This is called
                 * before the container itself and its children are laid out.
                 * @see Container#validateTree()
                 */
                // @ts-ignore
                beginLayout(): void
                /**
                 * Notifies the peer that layout is finished. This is called after the
                 * container and its children have been laid out.
                 * @see Container#validateTree()
                 */
                // @ts-ignore
                endLayout(): void
            }
        }
    }
}
