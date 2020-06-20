declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The native peer interface for {@link KeyboardFocusManager}.
             */
            // @ts-ignore
            interface KeyboardFocusManagerPeer {
                /**
                 * Sets the window that should become the focused window.
                 * @param win the window that should become the focused window
                 */
                // @ts-ignore
                setCurrentFocusedWindow(win: java.awt.Window): void
                /**
                 * Returns the currently focused window.
                 * @return the currently focused window
                 * @see KeyboardFocusManager#getNativeFocusedWindow()
                 */
                // @ts-ignore
                getCurrentFocusedWindow(): java.awt.Window
                /**
                 * Sets the component that should become the focus owner.
                 * @param comp the component to become the focus owner
                 * @see KeyboardFocusManager#setNativeFocusOwner(Component)
                 */
                // @ts-ignore
                setCurrentFocusOwner(comp: java.awt.Component): void
                /**
                 * Returns the component that currently owns the input focus.
                 * @return the component that currently owns the input focus
                 * @see KeyboardFocusManager#getNativeFocusOwner()
                 */
                // @ts-ignore
                getCurrentFocusOwner(): java.awt.Component
                /**
                 * Clears the current global focus owner.
                 * @param activeWindow
                 * @see KeyboardFocusManager#clearGlobalFocusOwner()
                 */
                // @ts-ignore
                clearGlobalFocusOwner(activeWindow: java.awt.Window): void
            }
        }
    }
}
