declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Contract for matching routes to patterns.
             * <p>Equivalent to {@link PathMatcher}, but enables use of parsed representations
             * of routes and patterns for efficiency reasons in scenarios where routes from
             * incoming messages are continuously matched against a large number of message
             * handler patterns.
             * @author Rossen Stoyanchev
             * @since 5.2
             * @see PathMatcher
             */
            // @ts-ignore
            interface RouteMatcher {
                /**
                 * Return a parsed representation of the given route.
                 * @param routeValue the route to parse
                 * @return the parsed representation of the route
                 */
                // @ts-ignore
                parseRoute(routeValue: java.lang.String | string): org.springframework.util.RouteMatcher.Route
                /**
                 * Whether the given {@code route} contains pattern syntax which requires
                 * the {@link #match(String, Route)} method, or if it is a regular String
                 * that could be compared directly to others.
                 * @param route the route to check
                 * @return {#code true} if the given {@code route} represents a pattern
                 */
                // @ts-ignore
                isPattern(route: java.lang.String | string): boolean
                /**
                 * Combines two patterns into a single pattern.
                 * @param pattern1 the first pattern
                 * @param pattern2 the second pattern
                 * @return the combination of the two patterns
                 * @throws IllegalArgumentException when the two patterns cannot be combined
                 */
                // @ts-ignore
                combine(pattern1: java.lang.String | string, pattern2: java.lang.String | string): string
                /**
                 * Match the given route against the given pattern.
                 * @param pattern the pattern to try to match
                 * @param route the route to test against
                 * @return {#code true} if there is a match, {@code false} otherwise
                 */
                // @ts-ignore
                match(pattern: java.lang.String | string, route: org.springframework.util.RouteMatcher.Route): boolean
                /**
                 * Match the pattern to the route and extract template variables.
                 * @param pattern the pattern, possibly containing templates variables
                 * @param route the route to extract template variables from
                 * @return a map with template variables and values
                 */
                // @ts-ignore
                matchAndExtract(pattern: java.lang.String | string, route: org.springframework.util.RouteMatcher.Route): java.util.Map<java.lang.String | string, java.lang.String | string>
                /**
                 * Given a route, return a {@link Comparator} suitable for sorting patterns
                 * in order of explicitness for that route, so that more specific patterns
                 * come before more generic ones.
                 * @param route the full path to use for comparison
                 * @return a comparator capable of sorting patterns in order of explicitness
                 */
                // @ts-ignore
                getPatternComparator(route: org.springframework.util.RouteMatcher.Route): java.util.Comparator<java.lang.String | string>
            }
        }
    }
}
