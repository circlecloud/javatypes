declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link CheckboxMenuItem}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface CheckboxMenuItemPeer extends java.awt.peer.MenuItemPeer {
                /**
                 * Sets the state of the checkbox to be checked {@code true} or
                 * unchecked {@code false}.
                 * @param state the state to set on the checkbox
                 * @see CheckboxMenuItem#setState(boolean)
                 */
                // @ts-ignore
                setState(state: boolean): void
            }
        }
    }
}
