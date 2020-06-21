declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                namespace pattern {
                    /**
                     * Representation of a parsed path pattern. Includes a chain of path elements
                     * for fast matching and accumulates computed state for quick comparison of
                     * patterns.
                     * <p>{@code PathPattern} matches URL paths using the following rules:<br>
                     * <ul>
                     * <li>{@code ?} matches one character</li>
                     * <li>{@code *} matches zero or more characters within a path segment</li>
                     * <li>{@code **} matches zero or more <em>path segments</em> until the end of the path</li>
                     * <li><code>{spring}</code> matches a <em>path segment</em> and captures it as a variable named "spring"</li>
                     * <li><code>{spring:[a-z]+}</code> matches the regexp {@code [a-z]+} as a path variable named "spring"</li>
                     * <li><code>{*spring}</code> matches zero or more <em>path segments</em> until the end of the path
                     * and captures it as a variable named "spring"</li>
                     * </ul>
                     * Notable behavior difference with {@code AntPathMatcher}:<br>
                     * {@code **} and its capturing variant <code>{*spring}</code> cannot be used in the middle of a pattern
                     * string, only at the end: {@code /pages/{**}} is valid, but {@code /pages/{**}/details} is not.
                     * <h3>Examples</h3>
                     * <ul>
                     * <li>{@code /pages/t?st.html} &mdash; matches {@code /pages/test.html} as well as
                     * {@code /pages/tXst.html} but not {@code /pages/toast.html}</li>
                     * <li>{@code /resources/*.png} &mdash; matches all {@code .png} files in the
                     * {@code resources} directory</li>
                     * <li><code>/resources/&#42;&#42;</code> &mdash; matches all files
                     * underneath the {@code /resources/} path, including {@code /resources/image.png}
                     * and {@code /resources/css/spring.css}</li>
                     * <li><code>/resources/{&#42;path}</code> &mdash; matches all files
                     * underneath the {@code /resources/} path and captures their relative path in
                     * a variable named "path"; {@code /resources/image.png} will match with
                     * "path" &rarr; "/image.png", and {@code /resources/css/spring.css} will match
                     * with "path" &rarr; "/css/spring.css"</li>
                     * <li><code>/resources/{filename:\\w+}.dat</code> will match {@code /resources/spring.dat}
                     * and assign the value {@code "spring"} to the {@code filename} variable</li>
                     * </ul>
                     * @author Andy Clement
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     * @see PathContainer
                     */
                    // @ts-ignore
                    class PathPattern extends java.lang.Object implements java.lang.Comparable<org.springframework.web.util.pattern.PathPattern> {
                        /**
                         * Comparator that sorts patterns by specificity as follows:
                         * <ol>
                         * <li>Null instances are last.
                         * <li>Catch-all patterns are last.
                         * <li>If both patterns are catch-all, consider the length (longer wins).
                         * <li>Compare wildcard and captured variable count (lower wins).
                         * <li>Consider length (longer wins)
                         * </ol>
                         */
                        // @ts-ignore
                        public static readonly SPECIFICITY_COMPARATOR: java.util.Comparator<org.springframework.web.util.pattern.PathPattern>
                        /**
                         * Return the original String that was parsed to create this PathPattern.
                         */
                        // @ts-ignore
                        public getPatternString(): string
                        /**
                         * Whether the pattern string contains pattern syntax that would require
                         * use of {@link #matches(PathContainer)}, or if it is a regular String that
                         * could be compared directly to others.
                         * @since 5.2
                         */
                        // @ts-ignore
                        public hasPatternSyntax(): boolean
                        /**
                         * Whether this pattern matches the given path.
                         * @param pathContainer the candidate path to attempt to match against
                         * @return {#code true} if the path matches this pattern
                         */
                        // @ts-ignore
                        public matches(pathContainer: org.springframework.http.server.PathContainer): boolean
                        /**
                         * Match this pattern to the given URI path and return extracted URI template
                         * variables as well as path parameters (matrix variables).
                         * @param pathContainer the candidate path to attempt to match against
                         * @return info object with the extracted variables, or {#code null} for no match
                         */
                        // @ts-ignore
                        public matchAndExtract(pathContainer: org.springframework.http.server.PathContainer): org.springframework.web.util.pattern.PathPattern.PathMatchInfo
                        /**
                         * Match the beginning of the given path and return the remaining portion
                         * not covered by this pattern. This is useful for matching nested routes
                         * where the path is matched incrementally at each level.
                         * @param pathContainer the candidate path to attempt to match against
                         * @return info object with the match result or {#code null} for no match
                         */
                        // @ts-ignore
                        public matchStartOfPath(pathContainer: org.springframework.http.server.PathContainer): org.springframework.web.util.pattern.PathPattern.PathRemainingMatchInfo
                        /**
                         * Determine the pattern-mapped part for the given path.
                         * <p>For example: <ul>
                         * <li>'{@code /docs/cvs/commit.html}' and '{@code /docs/cvs/commit.html} &rarr; ''</li>
                         * <li>'{@code /docs/*}' and '{@code /docs/cvs/commit}' &rarr; '{@code cvs/commit}'</li>
                         * <li>'{@code /docs/cvs/*.html}' and '{@code /docs/cvs/commit.html} &rarr; '{@code commit.html}'</li>
                         * <li>'{@code /docs/**}' and '{@code /docs/cvs/commit} &rarr; '{@code cvs/commit}'</li>
                         * </ul>
                         * <p><b>Notes:</b>
                         * <ul>
                         * <li>Assumes that {@link #matches} returns {@code true} for
                         * the same path but does <strong>not</strong> enforce this.
                         * <li>Duplicate occurrences of separators within the returned result are removed
                         * <li>Leading and trailing separators are removed from the returned result
                         * </ul>
                         * @param path a path that matches this pattern
                         * @return the subset of the path that is matched by pattern or "" if none
                         *  of it is matched by pattern elements
                         */
                        // @ts-ignore
                        public extractPathWithinPattern(path: org.springframework.http.server.PathContainer): org.springframework.http.server.PathContainer
                        /**
                         * Compare this pattern with a supplied pattern: return -1,0,+1 if this pattern
                         * is more specific, the same or less specific than the supplied pattern.
                         * The aim is to sort more specific patterns first.
                         */
                        // @ts-ignore
                        public compareTo(otherPattern: org.springframework.web.util.pattern.PathPattern): number /*int*/
                        /**
                         * Combine this pattern with another.
                         */
                        // @ts-ignore
                        public combine(pattern2string: org.springframework.web.util.pattern.PathPattern): org.springframework.web.util.pattern.PathPattern
                        // @ts-ignore
                        public equals(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
