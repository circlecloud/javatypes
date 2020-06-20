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
                        parseRoute(routeValue: string): Route
                        // @ts-ignore
                        isPattern(route: string): boolean
                        // @ts-ignore
                        combine(pattern1: string, pattern2: string): java.lang.String
                        // @ts-ignore
                        match(pattern: string, route: Route): boolean
                        // @ts-ignore
                        matchAndExtract(pattern: string, route: Route): java.util.Map<java.lang.String, java.lang.String>
                        // @ts-ignore
                        getPatternComparator(route: Route): java.util.Comparator<java.lang.String>
                    }
                }
            }
        }
    }
}
