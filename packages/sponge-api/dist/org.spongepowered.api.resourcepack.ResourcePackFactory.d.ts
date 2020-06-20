declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace resourcepack {
                /**
                 * A factory for creating {@link ResourcePack}s.
                 */
                // @ts-ignore
                interface ResourcePackFactory {
                    /**
                     * Creates a {@link ResourcePack} from a URI and tries to download and hash
                     * it.
                     * @param uri The URI to look in
                     * @return A ResourcePack with the specified URI
                     * @throws FileNotFoundException If a valid resourcepack could not be
                     *          downloaded from the URI
                     */
                    // @ts-ignore
                    fromUri(uri: java.net.URI): org.spongepowered.api.resourcepack.ResourcePack
                    /**
                     * Creates a {@link ResourcePack} from a URI.
                     * @param uri The URI to look in
                     * @return A ResourcePack with the specified URI
                     */
                    // @ts-ignore
                    fromUriUnchecked(uri: java.net.URI): org.spongepowered.api.resourcepack.ResourcePack
                }
            }
        }
    }
}
