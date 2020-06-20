declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link Button}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface ButtonPeer extends java.awt.peer.ComponentPeer {
                /**
                 * Sets the label that is displayed on the button. Can be {@code null}
                 * when the button should not display a label.
                 * @param label the label string to set
                 * @see Button#setLabel
                 */
                // @ts-ignore
                setLabel(label: string): void
            }
        }
    }
}
