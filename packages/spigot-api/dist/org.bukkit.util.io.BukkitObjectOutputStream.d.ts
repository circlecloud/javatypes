declare namespace org {
    namespace bukkit {
        namespace util {
            namespace io {
                /**
                 * This class is designed to be used in conjunction with the {@link
                 * ConfigurationSerializable} API. It translates objects to an internal
                 * implementation for later deserialization using {@link
                 * BukkitObjectInputStream}.
                 * <p>
                 * Behavior of implementations extending this class is not guaranteed across
                 * future versions.
                 */
                // @ts-ignore
                class BukkitObjectOutputStream extends java.io.ObjectOutputStream {
                    /**
                     * Constructor provided to mirror super functionality.
                     * @throws IOException if an I/O error occurs while creating this stream
                     * @throws SecurityException if a security manager exists and denies
                     *  enabling subclassing
                     * @see ObjectOutputStream#ObjectOutputStream()
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Object output stream decoration constructor.
                     * @param out the stream to wrap
                     * @throws IOException if an I/O error occurs while writing stream header
                     * @see ObjectOutputStream#ObjectOutputStream(OutputStream)
                     */
                    // @ts-ignore
                    constructor(out: java.io.OutputStream)
                    // @ts-ignore
                    replaceObject(obj: any): java.lang.Object
                }
            }
        }
    }
}
