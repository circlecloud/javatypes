declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                namespace status {
                    /**
                     * Represents an icon for the server sent in the {@link StatusResponse}. It can
                     * be loaded by calling one of the {@code loadFavicon} methods on {@link GameRegistry}
                     * .
                     * @see GameRegistry#loadFavicon(String)
                     * @see GameRegistry#loadFavicon(Path)
                     * @see GameRegistry#loadFavicon(URL)
                     * @see GameRegistry#loadFavicon(InputStream)
                     */
                    // @ts-ignore
                    interface Favicon {
                        /**
                         * Gets the decoded image of this favicon.
                         * @return The decoded image
                         */
                        // @ts-ignore
                        getImage(): java.awt.image.BufferedImage
                    }
                }
            }
        }
    }
}
