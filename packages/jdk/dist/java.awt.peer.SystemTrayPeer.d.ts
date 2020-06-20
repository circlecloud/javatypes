declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link SystemTray}. This doesn't need to be
             * implemented if {@link SystemTray#isSupported()} returns false.
             */
            // @ts-ignore
            interface SystemTrayPeer {
                /**
                 * Returns the size of the system tray icon.
                 * @return the size of the system tray icon
                 * @see SystemTray#getTrayIconSize()
                 */
                // @ts-ignore
                getTrayIconSize(): java.awt.Dimension
            }
        }
    }
}
