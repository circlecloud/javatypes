declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Utility methods for simple pattern matching, in particular for
             * Spring's typical "xxx*", "*xxx" and "*xxx*" pattern styles.
             * @author Juergen Hoeller
             * @since 2.0
             */
            // @ts-ignore
            abstract class PatternMatchUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Match a String against the given pattern, supporting the following simple
                 * pattern styles: "xxx*", "*xxx", "*xxx*" and "xxx*yyy" matches (with an
                 * arbitrary number of pattern parts), as well as direct equality.
                 * @param pattern the pattern to match against
                 * @param str the String to match
                 * @return whether the String matches the given pattern
                 */
                // @ts-ignore
                public static simpleMatch(pattern: java.lang.String | string, str: java.lang.String | string): boolean
                /**
                 * Match a String against the given patterns, supporting the following simple
                 * pattern styles: "xxx*", "*xxx", "*xxx*" and "xxx*yyy" matches (with an
                 * arbitrary number of pattern parts), as well as direct equality.
                 * @param patterns the patterns to match against
                 * @param str the String to match
                 * @return whether the String matches any of the given patterns
                 */
                // @ts-ignore
                public static simpleMatch(patterns: java.lang.String[] | string[], str: java.lang.String | string): boolean
            }
        }
    }
}
