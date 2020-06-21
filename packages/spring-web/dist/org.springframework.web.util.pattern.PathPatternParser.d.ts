declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                namespace pattern {
                    /**
                     * Parser for URI path patterns producing {@link PathPattern} instances that can
                     * then be matched to requests.
                     * <p>The {@link PathPatternParser} and {@link PathPattern} are specifically
                     * designed for use with HTTP URL paths in web applications where a large number
                     * of URI path patterns, continuously matched against incoming requests,
                     * motivates the need for efficient matching.
                     * <p>For details of the path pattern syntax see {@link PathPattern}.
                     * @author Andy Clement
                     * @since 5.0
                     */
                    // @ts-ignore
                    class PathPatternParser extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Whether a {@link PathPattern} produced by this parser should
                         * automatically match request paths with a trailing slash.
                         * <p>If set to {@code true} a {@code PathPattern} without a trailing slash
                         * will also match request paths with a trailing slash. If set to
                         * {@code false} a {@code PathPattern} will only match request paths with
                         * a trailing slash.
                         * <p>The default is {@code true}.
                         */
                        // @ts-ignore
                        public setMatchOptionalTrailingSeparator(matchOptionalTrailingSeparator: boolean): void
                        /**
                         * Whether optional trailing slashing match is enabled.
                         */
                        // @ts-ignore
                        public isMatchOptionalTrailingSeparator(): boolean
                        /**
                         * Whether path pattern matching should be case-sensitive.
                         * <p>The default is {@code true}.
                         */
                        // @ts-ignore
                        public setCaseSensitive(caseSensitive: boolean): void
                        /**
                         * Whether case-sensitive pattern matching is enabled.
                         */
                        // @ts-ignore
                        public isCaseSensitive(): boolean
                        /**
                         * Set options for parsing patterns. These should be the same as the
                         * options used to parse input paths.
                         * <p>{@link org.springframework.http.server.PathContainer.Options#HTTP_PATH}
                         * is used by default.
                         * @since 5.2
                         */
                        // @ts-ignore
                        public setPathOptions(pathOptions: org.springframework.http.server.PathContainer.Options): void
                        /**
                         * Return the {@link #setPathOptions configured} pattern parsing options.
                         * @since 5.2
                         */
                        // @ts-ignore
                        public getPathOptions(): org.springframework.http.server.PathContainer.Options
                        /**
                         * Process the path pattern content, a character at a time, breaking it into
                         * path elements around separator boundaries and verifying the structure at each
                         * stage. Produces a PathPattern object that can be used for fast matching
                         * against paths. Each invocation of this method delegates to a new instance of
                         * the {@link InternalPathPatternParser} because that class is not thread-safe.
                         * @param pathPattern the input path pattern, e.g. /project/{name}
                         * @return a PathPattern for quickly matching paths against request paths
                         * @throws PatternParseException in case of parse errors
                         */
                        // @ts-ignore
                        public parse(pathPattern: java.lang.String | string): org.springframework.web.util.pattern.PathPattern
                    }
                }
            }
        }
    }
}
