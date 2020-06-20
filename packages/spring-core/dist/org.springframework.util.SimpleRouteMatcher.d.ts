declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * {@code RouteMatcher} that delegates to a {@link PathMatcher}.
             * <p><strong>Note:</strong> This implementation is not efficient since
             * {@code PathMatcher} treats paths and patterns as Strings. For more optimized
             * performance use the {@code PathPatternRouteMatcher} from {@code spring-web}
             * which enables use of parsed routes and patterns.
             * @author Rossen Stoyanchev
             * @since 5.2
             */
            // @ts-ignore
            class SimpleRouteMatcher extends java.lang.Object implements org.springframework.util.RouteMatcher {
                /**
                 * Create a new {@code SimpleRouteMatcher} for the given
                 * {@link PathMatcher} delegate.
                 */
                // @ts-ignore
                constructor(pathMatcher: org.springframework.util.PathMatcher)
                /**
                 * Return the underlying {@link PathMatcher} delegate.
                 */
                // @ts-ignore
                getPathMatcher(): org.springframework.util.PathMatcher
                // @ts-ignore
                parseRoute(route: string): org.springframework.util.RouteMatcher.Route
                // @ts-ignore
                isPattern(route: string): boolean
                // @ts-ignore
                combine(pattern1: string, pattern2: string): java.lang.String
                // @ts-ignore
                match(pattern: string, route: org.springframework.util.RouteMatcher.Route): boolean
                // @ts-ignore
                matchAndExtract(pattern: string, route: org.springframework.util.RouteMatcher.Route): java.util.Map<java.lang.String, java.lang.String>
                // @ts-ignore
                getPatternComparator(route: org.springframework.util.RouteMatcher.Route): java.util.Comparator<java.lang.String>
            }
        }
    }
}
