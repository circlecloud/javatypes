declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace resourcepack {
                /**
                 * A class for creating {@link ResourcePack}s.
                 */
                // @ts-ignore
                class ResourcePacks extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a {@link ResourcePack} from a URI and tries to download and hash
                     * it.
                     * @param uri The URI to look in
                     * @return A ResourcePack with the specified URI
                     * @throws FileNotFoundException If a valid resourcepack could not be
                     *          downloaded from the URI
                     */
                    // @ts-ignore
                    public static fromUri(uri: java.net.URI): org.spongepowered.api.resourcepack.ResourcePack
                    /**
                     * Creates a {@link ResourcePack} from a URI, without checking ("unchecked")
                     * if there is a valid pack at the URI.
                     * @param uri The URI to look in
                     * @return A ResourcePack with the specified URI
                     */
                    // @ts-ignore
                    public static fromUriUnchecked(uri: java.net.URI): org.spongepowered.api.resourcepack.ResourcePack
                }
            }
        }
    }
}
