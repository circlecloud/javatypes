declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace resourcepack {
                /**
                 * Represents a resource pack that can be sent to the client.
                 */
                // @ts-ignore
                interface ResourcePack {
                    /**
                     * Gets the URI associated with this ResourcePack.
                     * @return The URI associated with this ResourcePack
                     */
                    // @ts-ignore
                    getUri(): java.net.URI
                    /**
                     * Gets the name of this resource pack. This is the filename of the pack
                     * zipfile, with all non-word characters removed. Note to implementers: The
                     * name <strong>MUST</strong> be calculated like above, or this API will not
                     * work.
                     * @return The name of this resource pack. This is the filename of the pack
                     *          .zip, with all non-word characters removed
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Gets the ID of this resource pack.
                     * @return the ID of this resource pack
                     */
                    // @ts-ignore
                    getId(): java.lang.String
                    /**
                     * If this resource pack was initialized through
                     * {@link ResourcePackFactory#fromUri(URI)}, the hash, as calculated with
                     * <code>com.google.common.hash.Hashing.sha1().hashBytes(
                     * com.google.common.io.Files.toByteArray(resourcepackfile)
                     * ).toString();</code>.
                     * @return The hash of this pack, if present
                     */
                    // @ts-ignore
                    getHash(): java.util.Optional<java.lang.String>
                }
            }
        }
    }
}
