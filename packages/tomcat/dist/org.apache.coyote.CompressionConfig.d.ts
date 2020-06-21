declare namespace org {
    namespace apache {
        namespace coyote {
            // @ts-ignore
            class CompressionConfig extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Set compression level.
                 * @param compression One of <code>on</code>, <code>force</code>,
                 *                     <code>off</code> or the minimum compression size in
                 *                     bytes which implies <code>on</code>
                 */
                // @ts-ignore
                public setCompression(compression: java.lang.String | string): void
                /**
                 * Return compression level.
                 * @return The current compression level in string form (off/on/force)
                 */
                // @ts-ignore
                public getCompression(): string
                // @ts-ignore
                public getCompressionLevel(): number /*int*/
                /**
                 * Obtain the String form of the regular expression that defines the user
                 * agents to not use gzip with.
                 * @return The regular expression as a String
                 */
                // @ts-ignore
                public getNoCompressionUserAgents(): string
                // @ts-ignore
                public getNoCompressionUserAgentsPattern(): java.util.regex.Pattern
                /**
                 * Set no compression user agent pattern. Regular expression as supported
                 * by {@link Pattern}. e.g.: <code>gorilla|desesplorer|tigrus</code>.
                 * @param noCompressionUserAgents The regular expression for user agent
                 *                                 strings for which compression should not
                 *                                 be applied
                 */
                // @ts-ignore
                public setNoCompressionUserAgents(noCompressionUserAgents: java.lang.String | string): void
                // @ts-ignore
                public getCompressibleMimeType(): string
                // @ts-ignore
                public setCompressibleMimeType(valueS: java.lang.String | string): void
                // @ts-ignore
                public getCompressibleMimeTypes(): string[]
                // @ts-ignore
                public getCompressionMinSize(): number /*int*/
                /**
                 * Set Minimum size to trigger compression.
                 * @param compressionMinSize The minimum content length required for
                 *                            compression in bytes
                 */
                // @ts-ignore
                public setCompressionMinSize(compressionMinSize: number /*int*/): void
                /**
                 * Determines if compression should be enabled for the given response and if
                 * it is, sets any necessary headers to mark it as such.
                 * @param request  The request that triggered the response
                 * @param response The response to consider compressing
                 * @return {#code true} if compression was enabled for the given response,
                 *          otherwise {@code false}
                 */
                // @ts-ignore
                public useCompression(request: org.apache.coyote.Request, response: org.apache.coyote.Response): boolean
            }
        }
    }
}
