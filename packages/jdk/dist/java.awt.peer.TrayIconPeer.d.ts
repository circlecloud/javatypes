declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for the {@link TrayIcon}. This doesn't need to be
             * implemented if {@link SystemTray#isSupported()} returns false.
             */
            // @ts-ignore
            interface TrayIconPeer {
                /**
                 * Disposes the tray icon and releases and resources held by it.
                 * @see TrayIcon#removeNotify()
                 */
                // @ts-ignore
                dispose(): void
                /**
                 * Sets the tool tip for the tray icon.
                 * @param tooltip the tooltip to set
                 * @see TrayIcon#setToolTip(String)
                 */
                // @ts-ignore
                setToolTip(tooltip: java.lang.String | string): void
                /**
                 * Updates the icon image. This is supposed to display the current icon
                 * from the TrayIcon component in the actual tray icon.
                 * @see TrayIcon#setImage(java.awt.Image)
                 * @see TrayIcon#setImageAutoSize(boolean)
                 */
                // @ts-ignore
                updateImage(): void
                /**
                 * Displays a message at the tray icon.
                 * @param caption the message caption
                 * @param text the actual message text
                 * @param messageType the message type
                 * @see TrayIcon#displayMessage(String, String, java.awt.TrayIcon.MessageType)
                 */
                // @ts-ignore
                displayMessage(caption: java.lang.String | string, text: java.lang.String | string, messageType: java.lang.String | string): void
                /**
                 * Shows the popup menu of this tray icon at the specified position.
                 * @param x the X location for the popup menu
                 * @param y the Y location for the popup menu
                 */
                // @ts-ignore
                showPopupMenu(x: number /*int*/, y: number /*int*/): void
            }
        }
    }
}
