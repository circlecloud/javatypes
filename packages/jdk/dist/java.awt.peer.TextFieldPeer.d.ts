declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link TextField}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface TextFieldPeer extends java.awt.peer.TextComponentPeer {
                /**
                 * Sets the echo character.
                 * @param echoChar the echo character to set
                 * @see TextField#getEchoChar()
                 */
                // @ts-ignore
                setEchoChar(echoChar: string): void
                /**
                 * Returns the preferred size of the text field with the specified number
                 * of columns.
                 * @param columns the number of columns
                 * @return the preferred size of the text field
                 * @see TextField#getPreferredSize(int)
                 */
                // @ts-ignore
                getPreferredSize(columns: number /*int*/): java.awt.Dimension
                /**
                 * Returns the minimum size of the text field with the specified number
                 * of columns.
                 * @param columns the number of columns
                 * @return the minimum size of the text field
                 * @see TextField#getMinimumSize(int)
                 */
                // @ts-ignore
                getMinimumSize(columns: number /*int*/): java.awt.Dimension
            }
        }
    }
}
