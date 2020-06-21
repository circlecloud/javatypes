declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                /**
                 * Favicon shown in the server list.
                 */
                // @ts-ignore
                class Favicon extends java.lang.Object {
                    // @ts-ignore
                    public static getFaviconTypeAdapter(): object
                    /**
                     * Creates a favicon from an image.
                     * @param image the image to create on
                     * @return the created favicon instance
                     * @throws IllegalArgumentException if the favicon is larger than
                     *  {#link Short#MAX_VALUE} or not of dimensions 64x64 pixels.
                     */
                    // @ts-ignore
                    public static create(image: java.awt.image.BufferedImage): net.md_5.bungee.api.Favicon
                    /**
                     * Creates a Favicon from an encoded PNG.
                     * @param encodedString a base64 mime encoded PNG string
                     * @return the created favicon
                     * @deprecated Use #create(java.awt.image.BufferedImage) instead
                     */
                    // @ts-ignore
                    public static create(encodedString: java.lang.String | string): net.md_5.bungee.api.Favicon
                    /**
                     * The base64 encoded favicon, including MIME header.
                     */
                    // @ts-ignore
                    public getEncoded(): string
                }
            }
        }
    }
}
