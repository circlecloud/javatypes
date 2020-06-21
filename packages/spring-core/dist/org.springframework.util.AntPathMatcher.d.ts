declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * {@link PathMatcher} implementation for Ant-style path patterns.
             * <p>Part of this mapping code has been kindly borrowed from <a href="https://ant.apache.org">Apache Ant</a>.
             * <p>The mapping matches URLs using the following rules:<br>
             * <ul>
             * <li>{@code ?} matches one character</li>
             * <li>{@code *} matches zero or more characters</li>
             * <li>{@code **} matches zero or more <em>directories</em> in a path</li>
             * <li>{@code {spring:[a-z]+}} matches the regexp {@code [a-z]+} as a path variable named "spring"</li>
             * </ul>
             * <h3>Examples</h3>
             * <ul>
             * <li>{@code com/t?st.jsp} &mdash; matches {@code com/test.jsp} but also
             * {@code com/tast.jsp} or {@code com/txst.jsp}</li>
             * <li>{@code com/*.jsp} &mdash; matches all {@code .jsp} files in the
             * {@code com} directory</li>
             * <li><code>com/&#42;&#42;/test.jsp</code> &mdash; matches all {@code test.jsp}
             * files underneath the {@code com} path</li>
             * <li><code>org/springframework/&#42;&#42;/*.jsp</code> &mdash; matches all
             * {@code .jsp} files underneath the {@code org/springframework} path</li>
             * <li><code>org/&#42;&#42;/servlet/bla.jsp</code> &mdash; matches
             * {@code org/springframework/servlet/bla.jsp} but also
             * {@code org/springframework/testing/servlet/bla.jsp} and {@code org/servlet/bla.jsp}</li>
             * <li>{@code com/{filename:\\w+}.jsp} will match {@code com/test.jsp} and assign the value {@code test}
             * to the {@code filename} variable</li>
             * </ul>
             * <p><strong>Note:</strong> a pattern and a path must both be absolute or must
             * both be relative in order for the two to match. Therefore it is recommended
             * that users of this implementation to sanitize patterns in order to prefix
             * them with "/" as it makes sense in the context in which they're used.
             * @author Alef Arendsen
             * @author Juergen Hoeller
             * @author Rob Harrop
             * @author Arjen Poutsma
             * @author Rossen Stoyanchev
             * @author Sam Brannen
             * @since 16.07.2003
             */
            // @ts-ignore
            class AntPathMatcher extends java.lang.Object implements org.springframework.util.PathMatcher {
                /**
                 * Create a new instance with the {@link #DEFAULT_PATH_SEPARATOR}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * A convenient, alternative constructor to use with a custom path separator.
                 * @param pathSeparator the path separator to use, must not be {#code null}.
                 * @since 4.1
                 */
                // @ts-ignore
                constructor(pathSeparator: java.lang.String | string)
                /**
                 * Default path separator: "/".
                 */
                // @ts-ignore
                public static readonly DEFAULT_PATH_SEPARATOR: java.lang.String | string
                /**
                 * Set the path separator to use for pattern parsing.
                 * <p>Default is "/", as in Ant.
                 */
                // @ts-ignore
                public setPathSeparator(pathSeparator: java.lang.String | string): void
                /**
                 * Specify whether to perform pattern matching in a case-sensitive fashion.
                 * <p>Default is {@code true}. Switch this to {@code false} for case-insensitive matching.
                 * @since 4.2
                 */
                // @ts-ignore
                public setCaseSensitive(caseSensitive: boolean): void
                /**
                 * Specify whether to trim tokenized paths and patterns.
                 * <p>Default is {@code false}.
                 */
                // @ts-ignore
                public setTrimTokens(trimTokens: boolean): void
                /**
                 * Specify whether to cache parsed pattern metadata for patterns passed
                 * into this matcher's {@link #match} method. A value of {@code true}
                 * activates an unlimited pattern cache; a value of {@code false} turns
                 * the pattern cache off completely.
                 * <p>Default is for the cache to be on, but with the variant to automatically
                 * turn it off when encountering too many patterns to cache at runtime
                 * (the threshold is 65536), assuming that arbitrary permutations of patterns
                 * are coming in, with little chance for encountering a recurring pattern.
                 * @since 4.0.1
                 * @see #getStringMatcher(String)
                 */
                // @ts-ignore
                public setCachePatterns(cachePatterns: boolean): void
                // @ts-ignore
                public isPattern(path: java.lang.String | string): boolean
                // @ts-ignore
                public match(pattern: java.lang.String | string, path: java.lang.String | string): boolean
                // @ts-ignore
                public matchStart(pattern: java.lang.String | string, path: java.lang.String | string): boolean
                /**
                 * Actually match the given {@code path} against the given {@code pattern}.
                 * @param pattern the pattern to match against
                 * @param path the path to test
                 * @param fullMatch whether a full pattern match is required (else a pattern match
                 *  as far as the given base path goes is sufficient)
                 * @return {#code true} if the supplied {@code path} matched, {@code false} if it didn't
                 */
                // @ts-ignore
                doMatch(pattern: java.lang.String | string, path: java.lang.String | string, fullMatch: boolean, uriTemplateVariables: java.util.Map<java.lang.String | string, java.lang.String | string>): boolean
                /**
                 * Tokenize the given path pattern into parts, based on this matcher's settings.
                 * <p>Performs caching based on {@link #setCachePatterns}, delegating to
                 * {@link #tokenizePath(String)} for the actual tokenization algorithm.
                 * @param pattern the pattern to tokenize
                 * @return the tokenized pattern parts
                 */
                // @ts-ignore
                tokenizePattern(pattern: java.lang.String | string): string[]
                /**
                 * Tokenize the given path into parts, based on this matcher's settings.
                 * @param path the path to tokenize
                 * @return the tokenized path parts
                 */
                // @ts-ignore
                tokenizePath(path: java.lang.String | string): string[]
                /**
                 * Build or retrieve an {@link AntPathStringMatcher} for the given pattern.
                 * <p>The default implementation checks this AntPathMatcher's internal cache
                 * (see {@link #setCachePatterns}), creating a new AntPathStringMatcher instance
                 * if no cached copy is found.
                 * <p>When encountering too many patterns to cache at runtime (the threshold is 65536),
                 * it turns the default cache off, assuming that arbitrary permutations of patterns
                 * are coming in, with little chance for encountering a recurring pattern.
                 * <p>This method may be overridden to implement a custom cache strategy.
                 * @param pattern the pattern to match against (never {#code null})
                 * @return a corresponding AntPathStringMatcher (never {#code null})
                 * @see #setCachePatterns
                 */
                // @ts-ignore
                getStringMatcher(pattern: java.lang.String | string): org.springframework.util.AntPathMatcher.AntPathStringMatcher
                /**
                 * Given a pattern and a full path, determine the pattern-mapped part. <p>For example: <ul>
                 * <li>'{@code /docs/cvs/commit.html}' and '{@code /docs/cvs/commit.html} -> ''</li>
                 * <li>'{@code /docs/*}' and '{@code /docs/cvs/commit} -> '{@code cvs/commit}'</li>
                 * <li>'{@code /docs/cvs/*.html}' and '{@code /docs/cvs/commit.html} -> '{@code commit.html}'</li>
                 * <li>'{@code /docs/**}' and '{@code /docs/cvs/commit} -> '{@code cvs/commit}'</li>
                 * <li>'{@code /docs/**\/*.html}' and '{@code /docs/cvs/commit.html} -> '{@code cvs/commit.html}'</li>
                 * <li>'{@code /*.html}' and '{@code /docs/cvs/commit.html} -> '{@code docs/cvs/commit.html}'</li>
                 * <li>'{@code *.html}' and '{@code /docs/cvs/commit.html} -> '{@code /docs/cvs/commit.html}'</li>
                 * <li>'{@code *}' and '{@code /docs/cvs/commit.html} -> '{@code /docs/cvs/commit.html}'</li> </ul>
                 * <p>Assumes that {@link #match} returns {@code true} for '{@code pattern}' and '{@code path}', but
                 * does <strong>not</strong> enforce this.
                 */
                // @ts-ignore
                public extractPathWithinPattern(pattern: java.lang.String | string, path: java.lang.String | string): string
                // @ts-ignore
                public extractUriTemplateVariables(pattern: java.lang.String | string, path: java.lang.String | string): java.util.Map<java.lang.String | string, java.lang.String | string>
                /**
                 * Combine two patterns into a new pattern.
                 * <p>This implementation simply concatenates the two patterns, unless
                 * the first pattern contains a file extension match (e.g., {@code *.html}).
                 * In that case, the second pattern will be merged into the first. Otherwise,
                 * an {@code IllegalArgumentException} will be thrown.
                 * <h3>Examples</h3>
                 * <table border="1">
                 * <tr><th>Pattern 1</th><th>Pattern 2</th><th>Result</th></tr>
                 * <tr><td>{@code null}</td><td>{@code null}</td><td>&nbsp;</td></tr>
                 * <tr><td>/hotels</td><td>{@code null}</td><td>/hotels</td></tr>
                 * <tr><td>{@code null}</td><td>/hotels</td><td>/hotels</td></tr>
                 * <tr><td>/hotels</td><td>/bookings</td><td>/hotels/bookings</td></tr>
                 * <tr><td>/hotels</td><td>bookings</td><td>/hotels/bookings</td></tr>
                 * <tr><td>/hotels/*</td><td>/bookings</td><td>/hotels/bookings</td></tr>
                 * <tr><td>/hotels/&#42;&#42;</td><td>/bookings</td><td>/hotels/&#42;&#42;/bookings</td></tr>
                 * <tr><td>/hotels</td><td>{hotel}</td><td>/hotels/{hotel}</td></tr>
                 * <tr><td>/hotels/*</td><td>{hotel}</td><td>/hotels/{hotel}</td></tr>
                 * <tr><td>/hotels/&#42;&#42;</td><td>{hotel}</td><td>/hotels/&#42;&#42;/{hotel}</td></tr>
                 * <tr><td>/*.html</td><td>/hotels.html</td><td>/hotels.html</td></tr>
                 * <tr><td>/*.html</td><td>/hotels</td><td>/hotels.html</td></tr>
                 * <tr><td>/*.html</td><td>/*.txt</td><td>{@code IllegalArgumentException}</td></tr>
                 * </table>
                 * @param pattern1 the first pattern
                 * @param pattern2 the second pattern
                 * @return the combination of the two patterns
                 * @throws IllegalArgumentException if the two patterns cannot be combined
                 */
                // @ts-ignore
                public combine(pattern1: java.lang.String | string, pattern2: java.lang.String | string): string
                /**
                 * Given a full path, returns a {@link Comparator} suitable for sorting patterns in order of
                 * explicitness.
                 * <p>This {@code Comparator} will {@linkplain java.util.List#sort(Comparator) sort}
                 * a list so that more specific patterns (without URI templates or wild cards) come before
                 * generic patterns. So given a list with the following patterns, the returned comparator
                 * will sort this list so that the order will be as indicated.
                 * <ol>
                 * <li>{@code /hotels/new}</li>
                 * <li>{@code /hotels/{hotel}}</li>
                 * <li>{@code /hotels/*}</li>
                 * </ol>
                 * <p>The full path given as parameter is used to test for exact matches. So when the given path
                 * is {@code /hotels/2}, the pattern {@code /hotels/2} will be sorted before {@code /hotels/1}.
                 * @param path the full path to use for comparison
                 * @return a comparator capable of sorting patterns in order of explicitness
                 */
                // @ts-ignore
                public getPatternComparator(path: java.lang.String | string): java.util.Comparator<java.lang.String | string>
            }
        }
    }
}
