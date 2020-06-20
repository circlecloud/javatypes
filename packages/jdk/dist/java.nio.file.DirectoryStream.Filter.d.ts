declare namespace java {
    namespace nio {
        namespace file {
            namespace DirectoryStream {
                /**
                 * An interface that is implemented by objects that decide if a directory
                 * entry should be accepted or filtered. A {@code Filter} is passed as the
                 * parameter to the {@link Files#newDirectoryStream(Path,DirectoryStream.Filter)}
                 * method when opening a directory to iterate over the entries in the
                 * directory.
                 * @param <T>     the type of the directory entry
                 * @since 1.7
                 */
                // @ts-ignore
                interface Filter<T> {
                    /**
                     * Decides if the given directory entry should be accepted or filtered.
                     * @param entry
                     *           the directory entry to be tested
                     * @return {#code true} if the directory entry should be accepted
                     * @throws IOException
                     *           If an I/O error occurs
                     */
                    // @ts-ignore
                    accept(entry: T): boolean
                }
            }
        }
    }
}
