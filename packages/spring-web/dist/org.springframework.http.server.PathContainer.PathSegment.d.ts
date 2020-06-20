declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace PathContainer {
                    /**
                     * Path segment element.
                     */
                    // @ts-ignore
                    interface PathSegment extends org.springframework.http.server.PathContainer.Element {
                        /**
                         * Return the path segment value, decoded and sanitized, for path matching.
                         */
                        // @ts-ignore
                        valueToMatch(): java.lang.String
                        /**
                         * Expose {@link #valueToMatch()} as a character array.
                         */
                        // @ts-ignore
                        valueToMatchAsChars(): char[]
                        /**
                         * Path parameters associated with this path segment.
                         */
                        // @ts-ignore
                        parameters(): <any>
                    }
                }
            }
        }
    }
}
