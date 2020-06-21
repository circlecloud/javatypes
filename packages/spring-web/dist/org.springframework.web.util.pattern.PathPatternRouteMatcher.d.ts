declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                namespace pattern {
                    /**
                     * {@code RouteMatcher} built on {@link PathPatternParser} that uses
                     * {@link PathContainer} and {@link PathPattern} as parsed representations of
                     * routes and patterns.
                     * @author Rossen Stoyanchev
                     * @since 5.2
                     */
                    // @ts-ignore
                    class PathPatternRouteMatcher extends java.lang.Object {
                        /**
                         * Default constructor with {@link PathPatternParser} customized for
                         * {@link org.springframework.http.server.PathContainer.Options#MESSAGE_ROUTE MESSAGE_ROUTE}
                         * and without matching of trailing separator.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Constructor with given {@link PathPatternParser}.
                         */
                        // @ts-ignore
                        constructor(parser: org.springframework.web.util.pattern.PathPatternParser)
                        // @ts-ignore
                        public parseRoute(routeValue: java.lang.String | string): Route
                        // @ts-ignore
                        public isPattern(route: java.lang.String | string): boolean
                        // @ts-ignore
                        public combine(pattern1: java.lang.String | string, pattern2: java.lang.String | string): string
                        // @ts-ignore
                        public match(pattern: java.lang.String | string, route: Route): boolean
                        // @ts-ignore
                        public matchAndExtract(pattern: java.lang.String | string, route: Route): java.util.Map<java.lang.String | string, java.lang.String | string>
                        // @ts-ignore
                        public getPatternComparator(route: Route): java.util.Comparator<java.lang.String | string>
                    }
                }
            }
        }
    }
}
