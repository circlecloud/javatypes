declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link FileDialog}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface FileDialogPeer extends java.awt.peer.DialogPeer {
                /**
                 * Sets the selected file for this file dialog.
                 * @param file the file to set as selected file, or {#code null} for
                 *         no selected file
                 * @see FileDialog#setFile(String)
                 */
                // @ts-ignore
                setFile(file: string): void
                /**
                 * Sets the current directory for this file dialog.
                 * @param dir the directory to set
                 * @see FileDialog#setDirectory(String)
                 */
                // @ts-ignore
                setDirectory(dir: string): void
                /**
                 * Sets the filename filter for filtering the displayed files.
                 * @param filter the filter to set
                 * @see FileDialog#setFilenameFilter(FilenameFilter)
                 */
                // @ts-ignore
                setFilenameFilter(filter: java.io.FilenameFilter): void
            }
        }
    }
}
