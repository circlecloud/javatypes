declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link Label}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface LabelPeer extends java.awt.peer.ComponentPeer {
                /**
                 * Sets the text to be displayed on the label.
                 * @param label the text to be displayed on the label
                 * @see Label#setText
                 */
                // @ts-ignore
                setText(label: string): void
                /**
                 * Sets the alignment of the label text.
                 * @param alignment the alignment of the label text
                 * @see Label#setAlignment(int)
                 * @see Label#CENTER
                 * @see Label#RIGHT
                 * @see Label#LEFT
                 */
                // @ts-ignore
                setAlignment(alignment: number /*int*/): void
            }
        }
    }
}
