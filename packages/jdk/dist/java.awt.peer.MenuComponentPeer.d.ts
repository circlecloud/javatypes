declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The base interface for all kinds of menu components. This is used by
             * {@link MenuComponent}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface MenuComponentPeer {
                /**
                 * Disposes the menu component.
                 * @see MenuComponent#removeNotify()
                 */
                // @ts-ignore
                dispose(): void
                /**
                 * Sets the font for the menu component.
                 * @param f the font to use for the menu component
                 * @see MenuComponent#setFont(Font)
                 */
                // @ts-ignore
                setFont(f: java.awt.Font): void
            }
        }
    }
}
