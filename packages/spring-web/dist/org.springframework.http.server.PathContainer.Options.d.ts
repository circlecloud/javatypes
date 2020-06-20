declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace PathContainer {
                    /**
                     * Options to customize parsing based on the type of input path.
                     * @since 5.2
                     */
                    // @ts-ignore
                    class Options extends java.lang.Object {
                        /**
                         * Options for HTTP URL paths:
                         * <p>Separator '/' with URL decoding and parsing of path params.
                         */
                        // @ts-ignore
                        readonly HTTP_PATH: org.springframework.http.server.PathContainer.Options
                        /**
                         * Options for a message route:
                         * <p>Separator '.' without URL decoding nor parsing of params. Escape
                         * sequences for the separator char in segment values are still decoded.
                         */
                        // @ts-ignore
                        readonly MESSAGE_ROUTE: org.springframework.http.server.PathContainer.Options
                        // @ts-ignore
                        separator(): char
                        // @ts-ignore
                        shouldDecodeAndParseSegments(): boolean
                        /**
                         * Create an {@link Options} instance with the given settings.
                         * @param separator the separator for parsing the path into segments;
                         *  currently this must be slash or dot.
                         * @param decodeAndParseSegments whether to URL decode path segment
                         *  values and parse path parameters. If set to false, only escape
                         *  sequences for the separator char are decoded.
                         */
                        // @ts-ignore
                        create(separator: string, decodeAndParseSegments: boolean): org.springframework.http.server.PathContainer.Options
                    }
                }
            }
        }
    }
}
