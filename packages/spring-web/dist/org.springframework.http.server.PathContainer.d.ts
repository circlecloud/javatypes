declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                /**
                 * Structured representation of a URI path parsed via {@link #parsePath(String)}
                 * into a sequence of {@link Separator} and {@link PathSegment} elements.
                 * <p>Each {@link PathSegment} exposes its content in decoded form and with path
                 * parameters removed. This makes it safe to match one path segment at a time
                 * without the risk of decoded reserved characters altering the structure of
                 * the path.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                interface PathContainer {
                    /**
                     * The original path from which this instance was parsed.
                     */
                    // @ts-ignore
                    value(): java.lang.String
                    /**
                     * The contained path elements, either {@link Separator} or {@link PathSegment}.
                     */
                    // @ts-ignore
                    elements(): java.util.List<org.springframework.http.server.PathContainer.Element>
                    /**
                     * Extract a sub-path from the given offset into the elements list.
                     * @param index the start element index (inclusive)
                     * @return the sub-path
                     */
                    // @ts-ignore
                    subPath(index: number /*int*/): org.springframework.http.server.PathContainer
                    /**
                     * Extract a sub-path from the given start offset into the element list
                     * (inclusive) and to the end offset (exclusive).
                     * @param startIndex the start element index (inclusive)
                     * @param endIndex the end element index (exclusive)
                     * @return the sub-path
                     */
                    // @ts-ignore
                    subPath(startIndex: number /*int*/, endIndex: number /*int*/): org.springframework.http.server.PathContainer
                    /**
                     * Parse the path value into a sequence of {@code "/"} {@link Separator Separator}
                     * and {@link PathSegment PathSegment} elements.
                     * @param path the encoded, raw path value to parse
                     * @return the parsed path
                     */
                    // @ts-ignore
                    parsePath(path: string): org.springframework.http.server.PathContainer
                    /**
                     * Parse the path value into a sequence of {@link Separator Separator} and
                     * {@link PathSegment PathSegment} elements.
                     * @param path the encoded, raw path value to parse
                     * @param options to customize parsing
                     * @return the parsed path
                     * @since 5.2
                     */
                    // @ts-ignore
                    parsePath(path: string, options: org.springframework.http.server.PathContainer.Options): org.springframework.http.server.PathContainer
                }
            }
        }
    }
}
