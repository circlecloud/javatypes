declare namespace org {
    namespace bukkit {
        namespace util {
            namespace io {
                /**
                 * This class is designed to be used in conjunction with the {@link
                 * ConfigurationSerializable} API. It translates objects back to their
                 * original implementation after being serialized by {@link
                 * BukkitObjectInputStream}.
                 * <p>
                 * Behavior of implementations extending this class is not guaranteed across
                 * future versions.
                 */
                // @ts-ignore
                class BukkitObjectInputStream extends java.io.ObjectInputStream {
                    /**
                     * Constructor provided to mirror super functionality.
                     * @throws IOException if an I/O error occurs while creating this stream
                     * @throws SecurityException if a security manager exists and denies
                     *  enabling subclassing
                     * @see ObjectInputStream#ObjectInputStream()
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Object input stream decoration constructor.
                     * @param in the input stream to wrap
                     * @throws IOException if an I/O error occurs while reading stream header
                     * @see ObjectInputStream#ObjectInputStream(InputStream)
                     */
                    // @ts-ignore
                    constructor(input: java.io.InputStream)
                    // @ts-ignore
                    resolveObject(obj: any): java.lang.Object
                }
            }
        }
    }
}
