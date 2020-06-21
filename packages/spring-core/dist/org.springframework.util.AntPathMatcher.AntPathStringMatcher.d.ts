declare namespace org {
    namespace springframework {
        namespace util {
            namespace AntPathMatcher {
                /**
                 * Tests whether or not a string matches against a pattern via a {@link Pattern}.
                 * <p>The pattern may contain special characters: '*' means zero or more characters; '?' means one and
                 * only one character; '{' and '}' indicate a URI template pattern. For example <tt>/users/{user}</tt>.
                 */
                // @ts-ignore
                class AntPathStringMatcher extends java.lang.Object {
                    // @ts-ignore
                    constructor(pattern: java.lang.String | string)
                    // @ts-ignore
                    constructor(pattern: java.lang.String | string, caseSensitive: boolean)
                    /**
                     * Main entry point.
                     * @return {#code true} if the string matches against the pattern, or {@code false} otherwise.
                     */
                    // @ts-ignore
                    public matchStrings(str: java.lang.String | string, uriTemplateVariables: java.util.Map<java.lang.String | string, java.lang.String | string>): boolean
                }
            }
        }
    }
}
