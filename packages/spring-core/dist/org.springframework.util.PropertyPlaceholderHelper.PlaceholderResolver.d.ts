declare namespace org {
    namespace springframework {
        namespace util {
            namespace PropertyPlaceholderHelper {
                /**
                 * Strategy interface used to resolve replacement values for placeholders contained in Strings.
                 */
                // @ts-ignore
                interface PlaceholderResolver {
                    /**
                     * Resolve the supplied placeholder name to the replacement value.
                     * @param placeholderName the name of the placeholder to resolve
                     * @return the replacement value, or {#code null} if no replacement is to be made
                     */
                    // @ts-ignore
                    resolvePlaceholder(placeholderName: java.lang.String | string): string
                }
            }
        }
    }
}
