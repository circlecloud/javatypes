declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link Window}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface WindowPeer extends java.awt.peer.ContainerPeer {
                /**
                 * Makes this window the topmost window on the desktop.
                 * @see Window#toFront()
                 */
                // @ts-ignore
                toFront(): void
                /**
                 * Makes this window the bottommost window on the desktop.
                 * @see Window#toBack()
                 */
                // @ts-ignore
                toBack(): void
                /**
                 * Updates the window's always-on-top state.
                 * Sets if the window should always stay
                 * on top of all other windows or not.
                 * @see Window#getAlwaysOnTop()
                 * @see Window#setAlwaysOnTop(boolean)
                 */
                // @ts-ignore
                updateAlwaysOnTopState(): void
                /**
                 * Updates the window's focusable state.
                 * @see Window#setFocusableWindowState(boolean)
                 */
                // @ts-ignore
                updateFocusableWindowState(): void
                /**
                 * Sets if this window is blocked by a modal dialog or not.
                 * @param blocker the blocking modal dialog
                 * @param blocked {#code true} to block the window, {@code false}
                 *         to unblock it
                 */
                // @ts-ignore
                setModalBlocked(blocker: java.awt.Dialog, blocked: boolean): void
                /**
                 * Updates the minimum size on the peer.
                 * @see Window#setMinimumSize(Dimension)
                 */
                // @ts-ignore
                updateMinimumSize(): void
                /**
                 * Updates the icons for the window.
                 * @see Window#setIconImages(java.util.List)
                 */
                // @ts-ignore
                updateIconImages(): void
                /**
                 * Sets the level of opacity for the window.
                 * @see Window#setOpacity(float)
                 */
                // @ts-ignore
                setOpacity(opacity: number /*float*/): void
                /**
                 * Enables the per-pixel alpha support for the window.
                 * @see Window#setBackground(Color)
                 */
                // @ts-ignore
                setOpaque(isOpaque: boolean): void
                /**
                 * Updates the native part of non-opaque window.
                 * @see Window#setBackground(Color)
                 */
                // @ts-ignore
                updateWindow(): void
                /**
                 * Instructs the peer to update the position of the security warning.
                 */
                // @ts-ignore
                repositionSecurityWarning(): void
            }
        }
    }
}
