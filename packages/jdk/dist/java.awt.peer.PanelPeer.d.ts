declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link Panel}. This is a subinterface of
             * ContainerPeer and does not declare any additional methods because a Panel
             * is just that, a concrete Container.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface PanelPeer extends java.awt.peer.ContainerPeer {
            }
        }
    }
}
