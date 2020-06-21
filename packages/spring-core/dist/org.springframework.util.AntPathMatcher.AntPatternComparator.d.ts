declare namespace org {
    namespace springframework {
        namespace util {
            namespace AntPathMatcher {
                /**
                 * The default {@link Comparator} implementation returned by
                 * {@link #getPatternComparator(String)}.
                 * <p>In order, the most "generic" pattern is determined by the following:
                 * <ul>
                 * <li>if it's null or a capture all pattern (i.e. it is equal to "/**")</li>
                 * <li>if the other pattern is an actual match</li>
                 * <li>if it's a catch-all pattern (i.e. it ends with "**"</li>
                 * <li>if it's got more "*" than the other pattern</li>
                 * <li>if it's got more "{foo}" than the other pattern</li>
                 * <li>if it's shorter than the other pattern</li>
                 * </ul>
                 */
                // @ts-ignore
                class AntPatternComparator extends java.lang.Object implements java.util.Comparator<java.lang.String | string> {
                    // @ts-ignore
                    constructor(path: java.lang.String | string)
                    /**
                     * Compare two patterns to determine which should match first, i.e. which
                     * is the most specific regarding the current path.
                     * @return a negative integer, zero, or a positive integer as pattern1 is
                     *  more specific, equally specific, or less specific than pattern2.
                     */
                    // @ts-ignore
                    public compare(pattern1: java.lang.String | string, pattern2: java.lang.String | string): number /*int*/
                }
            }
        }
    }
}
