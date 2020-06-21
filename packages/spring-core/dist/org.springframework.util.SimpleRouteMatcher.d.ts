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
                public getPathMatcher(): org.springframework.util.PathMatcher
                // @ts-ignore
                public parseRoute(route: java.lang.String | string): org.springframework.util.RouteMatcher.Route
                // @ts-ignore
                public isPattern(route: java.lang.String | string): boolean
                // @ts-ignore
                public combine(pattern1: java.lang.String | string, pattern2: java.lang.String | string): string
                // @ts-ignore
                public match(pattern: java.lang.String | string, route: org.springframework.util.RouteMatcher.Route): boolean
                // @ts-ignore
                public matchAndExtract(pattern: java.lang.String | string, route: org.springframework.util.RouteMatcher.Route): java.util.Map<java.lang.String | string, java.lang.String | string>
                // @ts-ignore
                public getPatternComparator(route: org.springframework.util.RouteMatcher.Route): java.util.Comparator<java.lang.String | string>
            }
        }
    }
}
